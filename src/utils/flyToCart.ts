import confetti from "canvas-confetti";

export function triggerFlyToCart(
  startEl: HTMLElement | null,
  imageUrl: string,
  onComplete?: () => void
) {
  if (!startEl) {
    if (onComplete) onComplete();
    return;
  }

  const targetEl = document.getElementById("navbar-sample-kit-btn");
  if (!targetEl) {
    if (onComplete) onComplete();
    return;
  }

  const startRect = startEl.getBoundingClientRect();
  const targetRect = targetEl.getBoundingClientRect();

  // Create flying ghost thumbnail
  const flyer = document.createElement("div");
  flyer.style.position = "fixed";
  flyer.style.left = `${startRect.left + startRect.width / 2 - 28}px`;
  flyer.style.top = `${startRect.top + startRect.height / 2 - 36}px`;
  flyer.style.width = "56px";
  flyer.style.height = "72px";
  flyer.style.borderRadius = "12px";
  flyer.style.backgroundImage = `url(${imageUrl})`;
  flyer.style.backgroundSize = "cover";
  flyer.style.backgroundPosition = "center";
  flyer.style.border = "2px solid #be9932";
  flyer.style.boxShadow = "0 12px 30px rgba(190, 153, 50, 0.4)";
  flyer.style.zIndex = "9999";
  flyer.style.pointerEvents = "none";
  flyer.style.transition = "all 0.85s cubic-bezier(0.16, 1, 0.3, 1)";
  flyer.style.transform = "scale(1) rotate(0deg)";

  document.body.appendChild(flyer);

  // Force reflow
  flyer.getBoundingClientRect();

  // Target destination with parabolic arc
  const deltaX = targetRect.left + targetRect.width / 2 - (startRect.left + startRect.width / 2);
  const deltaY = targetRect.top + targetRect.height / 2 - (startRect.top + startRect.height / 2);

  flyer.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0) scale(0.2) rotate(360deg)`;
  flyer.style.opacity = "0.7";

  setTimeout(() => {
    // Remove flyer
    if (flyer.parentNode) {
      flyer.parentNode.removeChild(flyer);
    }

    // Bounce target cart badge
    targetEl.classList.add("scale-125");
    targetEl.style.transition = "transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)";

    // Confetti burst from cart position
    const normX = (targetRect.left + targetRect.width / 2) / window.innerWidth;
    const normY = (targetRect.top + targetRect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 30,
      spread: 45,
      origin: { x: normX, y: normY },
      colors: ["#be9932", "#e3cf8b", "#ffffff", "#791828"],
      disableForReducedMotion: true,
    });

    setTimeout(() => {
      targetEl.classList.remove("scale-125");
    }, 250);

    if (onComplete) onComplete();
  }, 850);
}
