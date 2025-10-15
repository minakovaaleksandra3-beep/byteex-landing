export function renderThirdSection(data) {
  const { title, paragraphs, cta, images } = data;

  return `
    <section class="third-section">
      <div class="third-section__container">
        <div class="third-section__image">
          <img src="${images}" alt="${title}">
        </div>
        
        <div class="third-section__content">
          <h2 class="third-section__title">${title}</h2>
          
          <div class="third-section__text">
            ${paragraphs.map(p => `
              <p>${p}</p>
            `).join('')}
          </div>
          
          <a href="${cta.link}" class="third-section__cta">${cta.text}</a>
        </div>
      </div>
    </section>
  `;
}