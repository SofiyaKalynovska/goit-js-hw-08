import throttle from 'lodash.throttle';

const refs = {
  feedbackForm: document.querySelector('.feedback-form'),
  feedbackInput: document.querySelector('input'),
  feedbackTextarea: document.querySelector('textarea')
}
const STORAGE_KEY = "feedback-form-state";

refs.feedbackForm.addEventListener('input', throttle(onTyping, 500));
refs.feedbackForm.addEventListener('submit', onFormSubmit);


// Перевіряє при перезавантаженні сторінки, чи текстові поля були заповнені (перевіряє localStorage) і якщо так, вносить ці дані в поля форми
populateFormData();

// Виводить в localStorage об'єкт зі значенням інпуту email та значенням текстеріа message:
function onTyping(evt) {
  const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  // console.log(formData)
  const message = evt.target.value;
  // console.log(message)
  const name = evt.target.name;
  // console.log(name)
  formData[name] = message;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))

}

function populateFormData() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedData) {
    for (const key in savedData) {
      if (savedData.hasOwnProperty(key)) {
        refs.feedbackInput.value = savedData.email || '';
        refs.feedbackTextarea.value = savedData.message || '';
      }
    }
  }
}
// Очищення форми при сабміті і виведення в консоль об'єкта з полями email, message та їхніми поточними значеннями.

function onFormSubmit(evt) {
  if (!refs.feedbackInput.value.trim() || !refs.feedbackTextarea.value.trim()) {
    alert(`Please provide information into all available fields`)
  } else {
      evt.preventDefault();
      evt.target.reset();
      console.log(`Provided data:`, JSON.parse(localStorage.getItem(STORAGE_KEY)));
    localStorage.removeItem(STORAGE_KEY);
    }
  }

  
