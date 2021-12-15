import { Game } from './game.js';

const idApi = 'J8ulCJbuTzxWT8xwonUg';
const MyURL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${idApi}/scores/`;
const game = new Game();

async function getData(url, options = {}) {
  const response = await fetch(url, options)
    .then((response) => response.json())
    .then((data) => data.result)
    .catch((error) => console.log(error));
  return response;
}

function passOptions(objOption) {
  const options = {
    method: `${objOption.method}`,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(objOption.body),
  };
  return options;
}

function getLeaderBoard() {
  return getData(`${MyURL}`);
}

function addNewScore(user, score) {
  game.user = user;
  game.score = parseInt(score, 10);
  const options = passOptions({ method: 'POST', body: game });
  const response = getData(`${MyURL}`, options);
  return response;
}

export { getLeaderBoard, addNewScore };