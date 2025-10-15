export function renderHeader(data) {
  return `
    <header class="header">
      <div class="container">
        <div class="header__logo">
          <img src="${data.logo}" alt="BYTEEXT logo">
        </div>
      </div>
    </header>
  `;
}