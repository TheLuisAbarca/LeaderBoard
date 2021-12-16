import { getLeaderBoard } from './API';

const createElementBoard = (leaderboardHTMLTag, scores) => {
  leaderboardHTMLTag.innerHTML = '';
  scores.sort((a, b) => parseInt(b.score, 10) - parseInt(a.score, 10));
  scores.forEach((item) => {
    const leaderboardItem = document.createElement('tr');

    const nameContainer = document.createElement('td');
    nameContainer.classList.add('item-player');
    nameContainer.innerHTML = item.user;

    const scoreContainer = document.createElement('td');
    scoreContainer.classList.add('item-score');
    scoreContainer.innerHTML = item.score;

    leaderboardItem.appendChild(nameContainer);
    leaderboardItem.appendChild(scoreContainer);

    leaderboardHTMLTag.appendChild(leaderboardItem);
  });
};

const populateBoard = (leaderboardHTMLTag) => {
  getLeaderBoard().then((data) => {
    createElementBoard(leaderboardHTMLTag, data);
  });
};

export { createElementBoard, populateBoard };