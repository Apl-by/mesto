export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  openPopup() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keyup', this._handleEscClose);

  }

  closePopup() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keyup', this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.closePopup();
    }
  }

  setEventListeners(closeSelector) {
    this._popup.querySelector(closeSelector).addEventListener('click', () => this.closePopup());
    this._popup.addEventListener('click', (evt) => {
      if (evt.target === evt.currentTarget)
        this.closePopup();
    });
  }
}