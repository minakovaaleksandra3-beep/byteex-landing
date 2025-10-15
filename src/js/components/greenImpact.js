export function renderGreenImpact(data) {
  return `
    <section class="green-impact">
      <div class="green-impact__container">
        <h2 class="green-impact__title">${data.title}</h2>
        <div class="green-impact__grid">
          ${data.items.map(item => `
            <div class="green-impact__card">
              <div class="green-impact__icon">
                <img src="${item.icon}" alt="${item.description}" class="green-impact__icon-img">
              </div>
              <h3 class="green-impact__value">${item.value}</h3>
              <p class="green-impact__description">${item.description}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}