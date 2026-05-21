(function () {
  "use strict";

  const body = document.body;
  let activeModal = null;

  function openModal(id) {
    const modal = document.getElementById("modal-" + id);
    if (!modal) return;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    body.classList.add("modal-open");
    activeModal = modal;
  }

  function closeModal() {
    if (!activeModal) return;
    activeModal.classList.remove("is-open");
    activeModal.setAttribute("aria-hidden", "true");
    body.classList.remove("modal-open");
    activeModal = null;
  }

  document.addEventListener("click", function (e) {
    const trigger = e.target.closest("[data-modal]");
    if (trigger) {
      openModal(trigger.dataset.modal);
      return;
    }
    if (e.target.closest("[data-modal-close]")) {
      closeModal();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && activeModal) closeModal();
  });

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
