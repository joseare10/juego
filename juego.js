let userWins = 0;
let computerWins = 0;

//Element selectors
const gSelection = document.querySelector('#selection');
const gStatus = document.querySelector('#who-wins');
const gInfo = document.querySelector('#info');
const gUserWins = document.querySelector('#user > .wins');
const gComputerWins = document.querySelector('#computer > .wins');
const gUserSelect = document.querySelector('#user > .item');
const gComputerSelect = document.querySelector('#computer > .item');

gSelection.addEventListener('click', (e) => {
  const select = e.target;
  if (select.id == 'selection') return;
  playRound(select.id, getComputerChoice());
  gUserSelect.textContent = select.textContent;
});


function isGameOver() {
  return userWins == 5 || computerWins == 5;
}


function playRound(playerSelection, computerSelection) {
  let status = "PERDISTE!!!!!";
  let winner = computerSelection;
  let looser = playerSelection;
  let playerWin = (playerSelection == "roca" && computerSelection == "tijera") || (playerSelection == "papel" && computerSelection == "roca") || (playerSelection == "tijera" && computerSelection == "papel");
  let tie = (playerSelection == computerSelection);

  if (playerWin) {
    [winner, looser] = [playerSelection, computerSelection]
    status = "GANASTEEEE!";
    userWins++;
  } else if (tie) {
    status = "EMPATE!"
  } else computerWins++;

  let info = `${winner} gana ${looser}`;
  if (tie) info = '...';
  refreshInfo(status, info);
}

function refreshInfo(status, info) {
  gStatus.textContent = status;
  gInfo.textContent = info;
  gUserWins.textContent = `User: ${userWins}`;
  gComputerWins.textContent = `Computer: ${computerWins}`;
}

function getComputerChoice() {
  let numAzar = Math.floor(Math.random() * 3);
  let computerSelect = '';
  switch (numAzar) {
    case 0:
      computerSelect = '✊';
      gComputerSelect.textContent = computerSelect;
      return "roca";
    case 1:
      computerSelect = '✋';
      gComputerSelect.textContent = computerSelect;
      return "papel";
    case 2:
      computerSelect = '✌';
      gComputerSelect.textContent = computerSelect;
      return "tijera";
  }
}