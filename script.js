function createGame() {
  return `
    <li>
      <div>
        <img src="./assets/icon-brazil.svg" alt="Bandeira do Brasil">
        <h3>Brasil</h3>
      </div>
      <strong>16:00</strong>
      <div>
        <img src="./assets/icon-serbia.svg" alt="Bandeira da Sérvia">
        <h3>Sérvia</h3>
      </div>
    </li>
  `;
}

function createCard(date, day, games) {
  return `
  <div class="card">
    <h2>${date} <span>${day}</span></h2>
    <ul>
      ${games}
    </ul>
  </div>
  `;
}

document.querySelector('#app').innerHTML = `
    <header>
      <img src="./assets/logo.svg" alt="Logo NLW">
    </header>
    <main id="cards">
      ${createCard('24/11', 'quinta', createGame())}
      ${createCard('28/11', 'terça')}
      ${createCard('02/12', 'sexta')}
    </main>
`;
