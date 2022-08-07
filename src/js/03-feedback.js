import throttle from 'lodash.throttle';

const refs = {
  feedbackForm: document.querySelector('.feedback-form'),
  feedbackInput: document.querySelector('input'),
  feedbackTextarea: document.querySelector('textarea')
}
const STORAGE_KEY = "feedback-form-state";

refs.feedbackForm.addEventListener('input', throttle(onTyping, 500));
refs.feedbackForm.addEventListener('submit', onFormSubmit);

const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
// Перевіряє при перезавантаженні сторінки, чи текстові поля були заповнені (перевіряє localStorage) і якщо так, вносить ці дані в поля форми
populateFormData();

// Виводить в localStorage об'єкт зі значенням інпуту email та значенням текстеріа message:
function onTyping(evt) {
  const message = evt.target.value;
  const name = evt.target.name;
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
  if (!refs.feedbackInput.value || !refs.feedbackTextarea.value) {
    alert(`Please provide information into all available fields`)
  }
    else {
      evt.preventDefault();
      console.log(`Provided data:`, formData);
      evt.target.reset();
    localStorage.removeItem(STORAGE_KEY);
    // Костиль: вирішення проблеми з появою імейлу з попереднього сабміта у випадку, коли після того сабміту знову заповнити моле для повідомлення, не заповнити поле імейла, натиснути кнопку сабміту і потім ок в алерті. Примусово перезавантажує сторінку через 10 секунд
    window.setTimeout(function () { location.reload() }, 10000)
    }
  }
  
  
