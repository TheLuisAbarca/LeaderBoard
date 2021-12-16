import { Game } from './game.js';

const idApi = 'J8ulCJbuTzxWT8xwonUg';
const MyURL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${idApi}/scores/`;
const game = new Game();

const getData = async (url, options = {}) => {
  const response = await fetch(url, options)
    .then((response) => response.json())
    .then((data) => data.result)
    .catch((error) => console.log(error));
  return response;
};

const passOptions = (objOption) => {
  const options = {
    method: `${objOption.method}`,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(objOption.body),
  };
  return options;
};

const getLeaderBoard = () => getData(`${MyURL}`);

const getTopThreeScores = () => {
  const response = getData(`${MyURL}`, { method: 'GET' })
    .then((data) => {
      const topThreeScores = data.sort((a, b) => b.score - a.score).slice(0, 3);
      return topThreeScores;
    })
    .catch((error) => console.log(error));
  return response;
};

const addNewScore = (user, score) => {
  game.user = user;
  game.score = parseInt(score, 10);
  const options = passOptions({ method: 'POST', body: game });
  const response = getData(`${MyURL}`, options);
  return response;
};

export { getLeaderBoard, addNewScore, getTopThreeScores };