export function renderBanner(data) {
  return `
    <div class="banner">
      <div class="container">
        <p class="banner__text">${data.text}</p>
      </div>
    </div>
  `;
}