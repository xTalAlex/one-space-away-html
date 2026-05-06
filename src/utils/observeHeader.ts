export function observeHeader() {
  const trigger = document.getElementById("trigger");
  const header = document.getElementById("header");

  if (!trigger || !header) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      header.classList.toggle("scrolled", !entry.isIntersecting);
    },
    { threshold: 0 },
  );

  observer.observe(trigger);

  return () => observer.disconnect();
}
