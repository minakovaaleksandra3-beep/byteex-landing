export function renderFifthSection(data) {
  return `
    <section class="fifth-section">
      <div class="container">
        <h2 class="fifth-section__title">${data.title}</h2>
        <p class="fifth-section__description">${data.description}</p>
      </div>
      
      <div class="fifth-section__gallery">
        ${data.gallery.map(img => `
          <img src="${img}" alt="Gallery" class="fifth-section__gallery-img">
        `).join('')}
      </div>
      
      <div class="fifth-section__testimonials">
        <button class="fifth-section__arrow fifth-section__arrow--prev" aria-label="Previous">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
        
        <div class="fifth-section__testimonials-wrapper">
          <div class="fifth-section__testimonials-track">
            ${data.testimonials.map((testimonial, index) => `
              <div class="fifth-section__testimonial" data-index="${index}">
                <div class="fifth-section__testimonial-header">
                  <div class="fifth-section__avatar">
                    
                  </div>
                  <div>
                    <div class="fifth-section__stars">
                      ${Array(5).fill().map(() => `
                        <img src="${data.rating.starIcon}" alt="star" class="fifth-section__star">
                      `).join('')}
                    </div>
                    <p class="fifth-section__author">${testimonial.author}</p>
                  </div>
                </div>
                <p class="fifth-section__testimonial-text">${testimonial.text}</p>
              </div>
            `).join('')}
          </div>
        </div>
        
        <button class="fifth-section__arrow fifth-section__arrow--next" aria-label="Next">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>

     
      
      <div class="container">
        <div class="fifth-section__cta-wrapper">
          <a href="${data.cta.link}" class="fifth-section__cta">
            ${data.cta.text}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
          
          <div class="fifth-section__rating">
            <div class="fifth-section__stars-row">
              ${Array(3).fill().map(() => `
                <img src="${data.rating.starIcon}" alt="star" class="fifth-section__star-large">
              `).join('')}
            </div>
            <p class="fifth-section__rating-text">${data.rating.text}</p>
          </div>
        </div>
      </div>
    </section>
  `;
}