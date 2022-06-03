// VARIAVLES
const modalEl = document.querySelector('.modal'),
      modalContentEl = document.querySelector('.modal-content'),
      btnPopUpEl = document.querySelector('.btnPopUp'),
      btnCloseEl = document.querySelector('.close'),
      modaldaEl = document.querySelector('.modal-con');

btnPopUpEl.addEventListener('click', openModal);
btnCloseEl.addEventListener('click', closeModal);
modalEl.addEventListener('click', closeModal);

// OPEN MODAL
function openModal(e) {
  e.preventDefault()
  modaldaEl.style.display = 'block';
}

// CLOSE MODAL
function closeModal() {
  modalContentEl.classList.add('slide-up')
  setTimeout(() => {
    modaldaEl.style.display = 'none';
    modalContentEl.classList.remove('slide-up')
  }, 500) 
}


