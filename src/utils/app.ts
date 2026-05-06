import Alpine from "alpinejs";
import collapse from "@alpinejs/collapse";
import intersect from "@alpinejs/intersect";

Alpine.plugin(collapse);
Alpine.plugin(intersect);

Alpine.store("header", { scrolled: false });

Alpine.start();

// Re-initialize Alpine after Astro page transitions
document.addEventListener("astro:after-swap", () => {
  Alpine.store("header", { scrolled: false });
  Alpine.flushAndStopDeferringMutations();
  Alpine.initTree(document.body);
});
