export function renderHero(data) {
  return `
    <section class="hero">
      <div class="container">
        <div class="hero__content">
          <h1 class="hero__title">${data.title}</h1>
          <ul class="hero__features">
            ${data.features.map(feature => `
              <li class="hero__feature-item">
                <img src="${feature.icon}" alt="icon" class="hero__feature-icon">
                <span>${feature.text}</span>
              </li>
            `).join('')}
          </ul>
          <button class="hero__cta" data-scroll="#features">
            ${data.ctaText}
            <img src="${data.ctaIcon}" alt="arrow" class="hero__cta-icon">
          </button>
        </div>
        <div class="hero__images">
          ${data.images.map((img, idx) => `
            <img src="${img}" alt="Model ${idx + 1}" class="hero__image">
          `).join('')}
        </div>
      </div>
      
      ${data.floatingTestimonial ? `
        <div class="hero__floating-testimonial">
          <div class="floating-testimonial">
            <div class="floating-testimonial__header">
              <img src="${data.floatingTestimonial.avatar}" alt="${data.floatingTestimonial.author}" class="floating-testimonial__avatar">
              <div class="floating-testimonial__info">
                <div class="floating-testimonial__author">${data.floatingTestimonial.author}</div>
                <div class="floating-testimonial__stars">
                  ${Array(data.floatingTestimonial.rating).fill('⭐').join('')}
                </div>
                <div class="floating-testimonial__badge">${data.floatingTestimonial.badge}</div>
              </div>
            </div>
            <p class="floating-testimonial__text">${data.floatingTestimonial.text}</p>
          </div>
        </div>
      ` : ''}
    </section>
  `;
}