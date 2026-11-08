import { useEffect, useRef } from "react";
import * as THREE from "three";

export function LuxuryBackground3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 75;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Warm Champagne Gold Flakes (Floating gold leaf specks on ivory)
    const particleCount = 650;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);
    const speeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 150;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 150;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
      scales[i] = Math.random() * 2.4 + 0.6;
      speeds[i] = Math.random() * 0.03 + 0.008;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("scale", new THREE.BufferAttribute(scales, 1));

    // Particle Texture with subtle warm gold aura
    const particleTexture = createGoldParticleTexture();
    const material = new THREE.PointsMaterial({
      color: 0xa88126,
      size: 2.2,
      map: particleTexture,
      transparent: true,
      opacity: 0.55,
      blending: THREE.NormalBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Subtle 3D Wireframe Plane simulating undulating Banarasi silk
    const planeGeo = new THREE.PlaneGeometry(150, 150, 28, 28);
    const planeMat = new THREE.MeshBasicMaterial({
      color: 0xcbbda3,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    });
    const silkPlane = new THREE.Mesh(planeGeo, planeMat);
    silkPlane.rotation.x = -Math.PI / 2.7;
    silkPlane.position.y = -32;
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

      // Undulate Banarasi silk wireframe
      const positionAttr = planeGeo.attributes.position;
      for (let i = 0; i < positionAttr.count; i++) {
        const u = positionAttr.getX(i);
        const v = positionAttr.getY(i);
        const z =
          Math.sin(u * 0.08 + elapsedTime * 0.6) * 2.8 +
          Math.cos(v * 0.08 + elapsedTime * 0.5) * 2.8;
        positionAttr.setZ(i, z);
      }
      positionAttr.needsUpdate = true;

      // Slowly rotate gold flakes
      particles.rotation.y = elapsedTime * 0.02;
      particles.rotation.x = Math.sin(elapsedTime * 0.015) * 0.06;

      renderer.render(scene, camera);
    };

    animate();

    // Window resize handler
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
      style={{ opacity: 0.9 }}
    />
  );
}

// Procedural Radial Texture for Gold Flakes
function createGoldParticleTexture(): THREE.Texture {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d")!;

  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 30);
  gradient.addColorStop(0, "rgba(227, 207, 139, 1)");
  gradient.addColorStop(0.3, "rgba(190, 153, 50, 0.85)");
  gradient.addColorStop(0.7, "rgba(163, 125, 37, 0.4)");
  gradient.addColorStop(1, "rgba(163, 125, 37, 0)");

  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(32, 32, 30, 0, Math.PI * 2);
  ctx.fill();

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}
