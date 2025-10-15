export function renderTestimonials(data) {
  return `
    <section class="testimonials">
      <div class="container">
        <h2 class="testimonials__title">${data.title}</h2>
        <div class="testimonials__grid">
          ${data.items.map(item => `
            <div class="testimonial-card">
              <div class="testimonial-card__rating">${'⭐'.repeat(item.rating)}</div>
              <p class="testimonial-card__text">${item.text}</p>
              <p class="testimonial-card__author">${item.author}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}