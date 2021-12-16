import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import { addNewScore } from './API';
import { populateBoard } from './populateBoard';

import '../css/bootstrap.min.css';
import '../css/style.css';

const insideBoard = document.getElementById('tbody-scores');
const btnSubmit = document.getElementById('btn-submit');
const btnRefresh = document.getElementById('btn-refresh');
const nameField = document.getElementById('name');
const scoreField = document.getElementById('score');

let msg = '';

const addNewScoreToLeaderBoard = (event) => {
  event.preventDefault();
  const name = nameField.value;
  const score = scoreField.value;
  if (nameField.value === '' || scoreField.value === '') {
    msg = 'Please enter your name and score!'; // Todo: add message to the DOM
    console.log(msg);
  } else if (typeof Number((scoreField).value) !== 'number') {
    msg = 'Please enter a valid score!'; // Todo: add message to the DOM
    console.log(msg);
  } else {
    addNewScore(name, score).then(() => {
      nameField.value = '';
      scoreField.value = '';
    });
  }
};

btnSubmit.addEventListener('click', (event) => addNewScoreToLeaderBoard(event));
btnRefresh.addEventListener('click', () => { populateBoard(insideBoard); });

window.onload = () => {
  populateBoard(insideBoard);
};