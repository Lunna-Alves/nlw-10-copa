function createGame(player1, hour, player2) {
    return`
    <li>
         <img src="./Assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
         <strong> ${hour}</strong>
         <img src="./Assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
    `
}

let delayy= 0;
function createCard(date,day, games) {
  delayy= delayy + 0.4;
    return `
    <div class="card" style="animation-delayy: . ${delayy}s">
                <h2>${date} 24/11 <span>${day}</span></h2>
                <ul>
                 ${games}   
                <ul>
    </div>
  `
}

document.querySelector('#app'). innerHTML=`
  </header>
    <img src="./Assets/logo.svg" alt="Logo da NLW" />
  </header>
  <main id="cards">
    ${createCard("24/11","quinta", 
    createGame("brazil","16:00","serv"))} 
    ${createCard("28/11", "segunda",
    createGame("brazil","13:00","suiça")+ createGame("portugal","16:00","uruguai"))}  
    ${createCard("02/12", "sexta" ,
    createGame("brazil","16:00","camarão"))}      
  </main>
`
