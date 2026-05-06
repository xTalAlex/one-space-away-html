export function initMobileMenu() {
  const hamburger = document.getElementById("hamburger");
  const navContent = document.getElementById("nav-content");
  const overlay = document.getElementById("mobile-overlay");

  if (!hamburger || !navContent || !overlay) return;

  function closeMenu() {
    hamburger?.classList.remove("active");
    navContent?.classList.remove("active");
    overlay?.classList.remove("active");
    hamburger?.setAttribute("aria-expanded", "false");
    document.body.classList.remove("overflow-hidden");
  }

  function openMenu() {
    hamburger?.classList.add("active");
    navContent?.classList.add("active");
    overlay?.classList.add("active");
    hamburger?.setAttribute("aria-expanded", "true");
    document.body.classList.add("overflow-hidden");
  }

  const toggleMenu = () => {
    hamburger.classList.contains("active") ? closeMenu() : openMenu();
  };

  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === "Escape" && hamburger.classList.contains("active")) {
      closeMenu();
    }
  };

  // Event delegation for nav links
  navContent.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains("nav-link")) {
      closeMenu();
    }
  });

  hamburger.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", closeMenu);
  document.addEventListener("keydown", handleEscape);

  return () => {
    hamburger.removeEventListener("click", toggleMenu);
    navContent.removeEventListener("click", closeMenu);
    overlay.removeEventListener("click", closeMenu);
    document.removeEventListener("keydown", handleEscape);
  };
}
