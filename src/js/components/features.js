export function renderFeatures(data) {
  return `
    <section id="features" class="features">
      <div class="container">
        <div class="features__content">
          <div class="features__left">
            <h2 class="features__title">${data.title}</h2>
            <div class="features__list">
              ${data.items.map(item => `
                <div class="feature-item">
                  <img src="${item.icon}" alt="" class="feature-item__icon">
                  <div class="feature-item__content">
                    <h3 class="feature-item__title">${item.title}</h3>
                    <p class="feature-item__description">${item.description}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
          
          <div class="features__right">
            <div class="features__gallery">
              <div class="gallery__main">
                <button class="gallery__nav gallery__nav--prev" aria-label="Previous">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                </button>
                
                <img src="${data.gallery[0]}" alt="Gallery" class="gallery__main-image" id="mainGalleryImage">
                
                <button class="gallery__nav gallery__nav--next" aria-label="Next">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                </button>
              </div>
              
              <div class="gallery__thumbnails">
                ${data.gallery.map((img, index) => `
                  <img 
                    src="${img}" 
                    alt="Gallery ${index + 1}" 
                    class="gallery__thumbnail ${index === 0 ? 'active' : ''}" 
                    data-index="${index}"
                  >
                `).join('')}
              </div>
              
              <p class="gallery__label">White Robe</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}