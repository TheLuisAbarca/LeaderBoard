import { getLeaderBoard } from './API';

const topOne = document.getElementById('firstPosition');
const topTwo = document.getElementById('secondPosition');
const topThree = document.getElementById('thirdPosition');

const createElementBoard = (leaderboardHTMLTag, scores) => {
  leaderboardHTMLTag.innerHTML = '';
  if (scores.length === 0) {
    leaderboardHTMLTag.innerHTML = '<h3>No scores yet!</h3>';
  } else {
    scores.sort((a, b) => parseInt(b.score, 10) - parseInt(a.score, 10));
    scores.forEach((item, index) => {
      const position = index + 1;
      let numberPosition;
      const leaderboardItem = document.createElement('tr');

      const iconPosition = document.createElement('td');
      const firstIElement = document.createElement('i');
      const secondDivElement = document.createElement('div');
      const thirdSpanElement = document.createElement('span');
      const icon = document.createElement('i');

      iconPosition.style.width = '32px';
      firstIElement.classList.add('txt-lg');
      firstIElement.style.minWidth = '2.32rem';
      secondDivElement.classList.add('fa-2x', 'd-flex', 'justify-content-center');
      thirdSpanElement.classList.add('fa-layers', 'fa-fw');

      if (index < 3) {
        icon.classList.add('fas', 'fa-trophy');
        numberPosition = 'up-4';
        if (index === 0) { icon.style.color = '#ffc107'; topOne.innerHTML = `${item.user}`; }
        if (index === 1) { icon.style.color = '#c0c0c0'; topTwo.innerHTML = `${item.user}`; }
        if (index === 2) { icon.style.color = '#b87333'; topThree.innerHTML = `${item.user}`; }
      } else {
        icon.classList.add('fas', 'fa-user');
        icon.style.color = 'grey';
        numberPosition = 'down-3';
      }
      // icon.style.fontSize = '24px';
      const spanPosition = `<span class="fa-layers-text" data-fa-transform="shrink-8 ${numberPosition}" style="font-weight:900; color=black">${position}</span>`;
      thirdSpanElement.appendChild(icon);
      thirdSpanElement.innerHTML += spanPosition;
      secondDivElement.appendChild(thirdSpanElement);
      firstIElement.appendChild(secondDivElement);
      iconPosition.appendChild(firstIElement);

      const nameContainer = document.createElement('td');
      nameContainer.classList.add('item-player');
      nameContainer.innerHTML = item.user;

      const scoreContainer = document.createElement('td');
      scoreContainer.classList.add('item-score');
      scoreContainer.innerHTML = item.score;

      leaderboardItem.appendChild(iconPosition);
      leaderboardItem.appendChild(nameContainer);
      leaderboardItem.appendChild(scoreContainer);

      leaderboardHTMLTag.appendChild(leaderboardItem);
    });
  }
};

const populateBoard = (leaderboardHTMLTag) => {
  getLeaderBoard().then((data) => {
    createElementBoard(leaderboardHTMLTag, data);
  });
};

export { createElementBoard, populateBoard };