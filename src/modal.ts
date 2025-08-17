import { SocialMediaEvent } from "./types.js";

export function attachModalEvents(event: SocialMediaEvent): void {
  const modal = document.getElementById("modal") as HTMLDivElement;
  const closeBtn = modal.querySelector(".close") as HTMLSpanElement;

  (document.getElementById("modal-title") as HTMLHeadingElement).textContent = event.title;
  (document.getElementById("modal-year") as HTMLParagraphElement).textContent = event.year;
  (document.getElementById("modal-description") as HTMLParagraphElement).textContent = event.description;
  (document.getElementById("modal-category") as HTMLParagraphElement).textContent = event.category;
  (document.getElementById("modal-image") as HTMLImageElement).src = event.imageURL;

  modal.style.display = "block";

  closeBtn.onclick = () => (modal.style.display = "none");
  window.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
  };
}
