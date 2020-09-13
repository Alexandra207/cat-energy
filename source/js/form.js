var form = document.querySelector('.form');
var input = document.querySelector('.form__input');
var name = document.querySelector('[name=cat-name]');
var weight = document.querySelector('[name=cat-weight]');
var tel = document.querySelector('[name=tel-owner]');
var mail = document.querySelector('[name=mail]');

form.addEventListener('submit', function (evt) {
  if (!name.value || !weight.value || !tel.value || !mail.value) {
    evt.preventDefault();
    input.classList.add('form__input--error');
  }
});
