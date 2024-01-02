const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageInput = feedbackForm.querySelector('textarea[name="message"]');
function saveToLocalStorage() {
  const formData = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
feedbackForm.addEventListener('input', saveToLocalStorage);
function fillFormFields() {
  const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedData) {
    emailInput.value = savedData.email;
    messageInput.value = savedData.message;
  }
}

// Перевіряємо та заповнюємо поля форми при завантаженні сторінки
window.addEventListener('load', fillFormFields);
feedbackForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Зупиняємо стандартну поведінку форми

  // Очищаємо локальне сховище
  localStorage.removeItem('feedback-form-state');
  const formData = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };

  // Очищаємо поля форми
  emailInput.value = '';
  messageInput.value = '';

  // Отримуємо дані з полів форми та виводимо у консоль

  console.log(formData);
});
