export function renderFourthSection(data) {
  return `
    <section class="fourth-section">
      <div class="container">
        <h2 class="fourth-section__title">${data.title}</h2>
        
        <div class="fourth-section__cards">
          ${data.cards.map(card => `
            <div class="fourth-section__card" style="background-color: ${card.bgColor}">
              <img src="${card.icon}" alt="${card.title}" class="fourth-section__icon">
              <h3 class="fourth-section__card-title">${card.title}</h3>
              <p class="fourth-section__card-description">${card.description}</p>
            </div>
          `).join('')}
        </div>
        
        <div class="fourth-section__cta-wrapper">
          <a href="${data.cta.link}" class="fourth-section__cta">
            ${data.cta.text}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
          
          <div class="fourth-section__rating">
            <div class="fourth-section__stars">
              ${Array(5).fill().map(() => `
                <img src="${data.rating.starIcon}" alt="star" class="fourth-section__star">
              `).join('')}
            </div>
            <p class="fourth-section__rating-text">${data.rating.text}</p>
          </div>
        </div>
      </div>
    </section>
  `;
}