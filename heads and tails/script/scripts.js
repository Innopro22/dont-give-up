const score =  JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  lose: 0
};

  updateScore();

 function playGame (pickMove) {
    const coinMove = playerMove();
      
    let scores = '';

    if (pickMove === 'HEADS') {
      if (coinMove === 'HEADS') {
        scores = 'YOU WIN' 
      } else if (coinMove === 'TAILS') {
        scores = 'YOU LOSE'
     }
    } else if (pickMove === 'TAILS') {
       if (coinMove === 'TAILS') {
         scores = 'YOU WIN'
       } else if (coinMove === 'HEADS') {
        scores = 'YOU LOSE'
       }
    };

 if(scores === 'YOU WIN') {
  score.wins = score.wins + 1
 } else if (scores === 'YOU LOSE') {
   score.lose = score.lose + 1
 };
     
      updateScore();

    localStorage.setItem('score', JSON.stringify(score));
    document.querySelector('.js-score').innerHTML = `<span class="score">${scores}</span>`;
    document.querySelector('.js-heads').innerHTML = pickMove;
    document.querySelector('.js-tails').innerHTML = coinMove;
};

function playerMove () {
  const randomNumber = Math.random();
  let result = '';

  if (randomNumber < 0.5) {
    result = 'HEADS'
  } else {
    result = 'TAILS'
  };
  return result
};
 
 function updateScore () {
  document.querySelector('.js-scores').innerHTML = `SCORES <br> WINS: ${score.wins} <br> LOSS: ${score.lose}`
 }

document.querySelector('.js-reset-button').addEventListener('click', () => {
   score.wins = 0;
   score.lose = 0;
   localStorage.removeItem('score');
   updateScore();
});

document.querySelector('.js-heads-button').addEventListener('click', () => {
  playGame('HEADS')
});
document.querySelector('.js-tails-button').addEventListener('click', () => {
  playGame('TAILS')
});