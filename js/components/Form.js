// Form.js
function Form({ question, options, image_uri }) {
  const d = document,
    $form = d.createElement('form');
  $form.classList.add('quiz');
  $form.innerHTML = `
    <h1 class="title2">${question}</h1>
    <img src="./assets/images/${image_uri}" alt="" sizes="" srcset="">
    <div>
      <button op class="btn" >${options.option1}</button>
      <button op class="btn" >${options.option2}</button>
      <button op class="btn" >${options.option3}</button>
      <button op class="btn" >${options.option4}</button>
    </div>
  `;
  return $form;
}

export default Form;
