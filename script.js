// Fetch events and build timeline
fetch('events.json')
  .then(res => res.json())
  .then(events => {
    const timeline = document.getElementById('timeline');
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');

    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalYear = document.getElementById('modal-year');
    const modalDescription = document.getElementById('modal-description');
    const modalCategory = document.getElementById('modal-category');

    events.forEach((event, index) => {
      const item = document.createElement('article');
      item.className = `timeline-item ${index % 2 === 0 ? 'left' : 'right'}`;
      item.innerHTML = `
        <div class="timeline-content">
          <time datetime="${event.year}">${event.year}</time>
          <figure>
            <img src="${event.imageURL}" alt="${event.title} logo">
            <h3>${event.title}</h3>
          </figure>
          <p>${event.description}</p>
        </div>
      `;

      // Open modal on click
      item.addEventListener('click', () => {
        modalImage.src = event.imageURL;
        modalTitle.textContent = event.title;
        modalYear.textContent = `Year: ${event.year}`;
        modalDescription.textContent = event.description;
        modalCategory.textContent = `Category: ${event.category}`;
        modal.style.display = 'block';
      });

      timeline.appendChild(item);
    });

    // Close modal
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  })
  .catch(err => console.error('Error fetching events:', err));
