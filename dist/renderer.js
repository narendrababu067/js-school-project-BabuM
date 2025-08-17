import { attachModalEvents } from "./modal.js";
export function renderTimeline(events) {
    const container = document.getElementById("timeline");
    if (!container)
        return;
    events.forEach((event, index) => {
        const item = document.createElement("div");
        item.className = `timeline-item ${index % 2 === 0 ? "left" : "right"}`;
        item.innerHTML = `
      <div class="timeline-content">
        <time>${event.year}</time>
        <figure>
          <img src="${event.imageURL}" alt="${event.title}">
          <figcaption>${event.title}</figcaption>
        </figure>
        <p>${event.description}</p>
        <p><strong>${event.category}</strong></p>
      </div>
    `;
        item.addEventListener("click", () => attachModalEvents(event));
        container.appendChild(item);
    });
}
