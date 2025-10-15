export function renderPartners(data) {
  return `
    <section class="partners">
      <div class="container">
        <p class="partners__title">${data.title}</p>
        <div class="partners__logos">
          ${data.logos.map(logo => `
            <img src="${logo}" alt="Partner logo" class="partners__logo">
          `).join('')}
        </div>
      </div>
    </section>
  `;
}