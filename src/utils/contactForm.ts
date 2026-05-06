export function initContactForm() {
  const form = document.getElementById("contact-form");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const feedback = document.getElementById("form-feedback");
    const submitButton = form.querySelector(
      'button[type="submit"]',
    ) as HTMLButtonElement;

    if (!feedback || !submitButton) return;

    submitButton.disabled = true;
    const originalText = submitButton.textContent;
    submitButton.textContent = "SENDING...";

    await new Promise((resolve) => setTimeout(resolve, 1500));

    feedback.hidden = false;

    (form as HTMLFormElement).reset();
    submitButton.textContent = originalText;
    submitButton.disabled = false;

    setTimeout(() => {
      feedback.hidden = true;
    }, 4000);
  });
}
