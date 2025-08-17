export function attachModalEvents(event) {
    const modal = document.getElementById("modal");
    const closeBtn = modal.querySelector(".close");
    document.getElementById("modal-title").textContent = event.title;
    document.getElementById("modal-year").textContent = event.year;
    document.getElementById("modal-description").textContent = event.description;
    document.getElementById("modal-category").textContent = event.category;
    document.getElementById("modal-image").src = event.imageURL;
    modal.style.display = "block";
    closeBtn.onclick = () => (modal.style.display = "none");
    window.onclick = (e) => {
        if (e.target === modal)
            modal.style.display = "none";
    };
}
