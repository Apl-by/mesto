import {
  firstInputEdit,
  secondInputEdit,
} from '../utils/constants.js';

export const setInputValues = (profileValues) => {
  firstInputEdit.value = profileValues.name;
  secondInputEdit.value = profileValues.about;
}

// возвращает дефолтное состояние полям ввода после валидации при повторном открытии формы
export const setDefaultState = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  const buttonElement = formElement.querySelector('.form__submit');
  inputList.forEach((inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove('form__input_type_error');
    errorElement.classList.remove('form__input-error_visible');
    errorElement.textContent = '';
  });
  if (formElement === document.forms.editForm) {
    buttonElement.classList.remove('form__submit_disabled');
    buttonElement.removeAttribute('disabled', 'disabled');
  } else if (formElement === document.forms.addForm || document.forms.avatarForm) {
    buttonElement.classList.add('form__submit_disabled');
    buttonElement.setAttribute('disabled', 'disabled');
  }
}