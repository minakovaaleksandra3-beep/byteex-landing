export function renderFAQ(data) {
  return `
    <section class="faq">
      <div class="faq__container">
        <div class="faq__content">
          <h2 class="faq__title">${data.title}</h2>
          <div class="faq__list">
            ${data.items.map((item, index) => `
              <div class="faq-item ${index === 0 ? 'active' : ''}">
                <button class="faq-question">
                  <span>${item.question}</span>
                  <span class="faq-icon">${index === 0 ? '−' : '+'}</span>
                </button>
                <div class="faq-answer">
                  <p>${item.answer}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
        
        <div class="faq__images">
          <img src="${data.images}" alt="FAQ image" class="faq__image">
        </div>
      </div>
    </section>
  `;
}