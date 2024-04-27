function Result(numberCorrectQuestions) {
  const d = document,
    $div = d.createElement('div');
  $div.classList.add('quiz');
  $div.innerHTML = `
    <h1 class="title2">Resultados</h1>
    <div>
      <p class="title3">Preguntas acerdatas: <span>${numberCorrectQuestions}</span></p>
      <p class="title3">Preguntas equivacadas: <span>${5 - numberCorrectQuestions}</span></p>
      <p class="title3">Puntuación final: <span>% ${(numberCorrectQuestions * 100)/5}</span></p>
    </div>
  `;
  return $div;
}

export default Result;
