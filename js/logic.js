import Form from './components/Form.js';
import Result from './components/Result.js';
import { ajax } from '../helpers/ajax.js';

const d = document,
  $btn = d.querySelector('#start'),
  $main = d.querySelector('main');
let data = undefined,
  currentQuestion = undefined,
  numberCorrectQuestions = 0;

d.addEventListener('DOMContentLoaded', e => {
  // carga inicial
  ajax({
    url: `data.json`,
    cbSuccess: res => {
      data = res.data;
      currentQuestion = data[0];
    },
    cbError: err => {
      let message = err.statusText || 'Ocurrió un error';
    }
  });

  // evento click
  d.addEventListener('click', e => {
    if (e.target === $btn) renderMain(0);
    if (e.target.matches('[op]') || e.target.matches('[op]')) {
      e.preventDefault();
      validateQuestion(e.target.textContent);
    }
  });
});

function validateQuestion(answer) {
  if (answer == currentQuestion.correctAnswer) {
    numberCorrectQuestions++;
    console.log(numberCorrectQuestions);
  }
  renderMain(currentQuestion.id + 1);
}

function renderMain(numberQuestion) {
  $main.innerHTML = ``;
  if (currentQuestion.id == data.length - 1) {
    $main.appendChild(Result(numberCorrectQuestions));
    return console.log('final');
  }
  currentQuestion = data[numberQuestion];
  $main.appendChild(Form(currentQuestion));
}
