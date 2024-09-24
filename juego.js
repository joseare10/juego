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
  let status = "You Lose!";
  let winner = computerSelection;
  let looser = playerSelection;
  let playerWin = (playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper");
  let tie = (playerSelection == computerSelection);

  if (playerWin) {
    [winner, looser] = [playerSelection, computerSelection]
    status = "You Win!";
    userWins++;
  } else if (tie) {
    status = "It's a tie :/"
  } else computerWins++;

  let info = `${winner} beats ${looser}`;
  if (tie) info = 'cri cri cri...';
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
      return "rock";
    case 1:
      computerSelect = '✋';
      gComputerSelect.textContent = computerSelect;
      return "paper";
    case 2:
      computerSelect = '✌';
      gComputerSelect.textContent = computerSelect;
      return "scissors";
  }
}