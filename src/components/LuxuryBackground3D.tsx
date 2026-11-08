import { useEffect, useRef } from "react";
import * as THREE from "three";

export function LuxuryBackground3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Three.js Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 70;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    container.appendChild(renderer.domElement);

    // Warm Champagne Gold Leaf Flakes
    const particleCount = 700;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);
    const velocities = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 160;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 160;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 90;
      scales[i] = Math.random() * 2.5 + 0.6;
      velocities[i] = Math.random() * 0.02 + 0.006;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("scale", new THREE.BufferAttribute(scales, 1));

    const particleTexture = createGoldParticleTexture();
    const material = new THREE.PointsMaterial({
      color: 0xa88126,
      size: 2.4,
      map: particleTexture,
      transparent: true,
      opacity: 0.55,
      blending: THREE.NormalBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Vanta-Style 3D Fluid Silk Waves Plane
    const planeGeo = new THREE.PlaneGeometry(180, 180, 48, 48);
    const planeMat = new THREE.MeshBasicMaterial({
      color: 0xbe9932,
      wireframe: true,
      transparent: true,
      opacity: 0.09,
    });
    const silkPlane = new THREE.Mesh(planeGeo, planeMat);
    silkPlane.rotation.x = -Math.PI / 2.6;
    silkPlane.position.y = -34;
    scene.add(silkPlane);

    // Mouse movement tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera dampening to mouse
      targetX += (mouseX * 10 - targetX) * 0.04;
      targetY += (-mouseY * 10 - targetY) * 0.04;

      camera.position.x = targetX;
      camera.position.y = targetY;
      camera.lookAt(0, 0, 0);

      // Multi-frequency wave calculation (Vanta waves simulation)
      const positionAttr = planeGeo.attributes.position;
      for (let i = 0; i < positionAttr.count; i++) {
        const u = positionAttr.getX(i);
        const v = positionAttr.getY(i);
        const z =
          Math.sin(u * 0.07 + elapsedTime * 0.7) * 2.8 +
          Math.cos(v * 0.08 + elapsedTime * 0.6) * 2.6 +
          Math.sin((u + v) * 0.04 + elapsedTime * 0.4) * 1.5;
        positionAttr.setZ(i, z);
      }
      positionAttr.needsUpdate = true;

      // Rotate particles subtly
      particles.rotation.y = elapsedTime * 0.02;
      particles.rotation.x = Math.sin(elapsedTime * 0.015) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      planeGeo.dispose();
      planeMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ opacity: 0.95 }}
    />
  );
}

function createGoldParticleTexture(): THREE.Texture {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d")!;

  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 30);
  gradient.addColorStop(0, "rgba(227, 207, 139, 1)");
  gradient.addColorStop(0.35, "rgba(190, 153, 50, 0.85)");
  gradient.addColorStop(0.7, "rgba(163, 125, 37, 0.4)");
  gradient.addColorStop(1, "rgba(163, 125, 37, 0)");

  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(32, 32, 30, 0, Math.PI * 2);
  ctx.fill();

  return new THREE.CanvasTexture(canvas);
}
