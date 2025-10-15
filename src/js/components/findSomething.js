export function renderFindSomething(data) {
  return `
    <section class="find-something">
      <div class="find-something__container">
        <div class="find-something__content">
          <h2 class="find-something__title">${data.title}</h2>
          <p class="find-something__description">${data.description}</p>
          
          <div class="find-something__main-image">
            <img src="${data.image}" alt="Find something you love">
          </div>
          
          <a href="${data.cta.link}" class="find-something__cta">
            ${data.cta.text}
            <img src="${data.cta.icon}" alt="Arrow" class="find-something__cta-icon">
          </a>
          
          <div class="find-something__shipping-payment">
            <img src="${data.shippingInfo.image}" alt="${data.shippingInfo.text}" class="find-something__shipping-image">
            <img src="${data.paymentMethods.image}" alt="Payment Methods" class="find-something__payment-image">
          </div>
          
          <div class="find-something__features">
            ${data.features.map(feature => `
              <div class="find-something__feature">
                <div class="find-something__feature-icon">
                  <img src="${feature.icon}" alt="">
                </div>
                <span class="find-something__feature-text">${feature.text}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}