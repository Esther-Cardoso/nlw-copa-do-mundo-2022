function createGame(player1, nome1, hour, player2, nome2) {
  return `
    <li>
      <div>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
        <h3>${nome1}</h3>
      </div>
      <strong>${hour}</strong>
      <div>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
        <h3>${nome2}</h3>
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
      ${createCard(
        '24/11',
        'quinta',
        createGame('brasil', 'Brasil', '16:00', 'servia', 'Sérvia'),
      )}
      ${createCard(
        '28/11',
        'segunda',
        createGame('brasil', 'Brasil', '13:00', 'suica', 'Suiça') +
          createGame('portugal', 'Portugal', '16:00', 'uruguai', 'Uruguai'),
      )}
      ${createCard(
        '02/12',
        'sexta',
        createGame('camaroes', 'Camarões', '16:00', 'brasil', 'Brasil'),
      )}
    </main>
`;
