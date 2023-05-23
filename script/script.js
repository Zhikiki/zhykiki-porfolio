function showModalmyFlixCaseStudy() {
  let modalContainer = document.querySelector('#myFlix-react-case-study');
  modalContainer.classList.add('modal-container');
  modalContainer.addEventListener('click', (event) => {
    let target = event.target;
    if (target === modalContainer) {
      closeModalCaseStudy();
    }
  });
}

document
  .querySelector('#show-modal-myFlix-case-study')
  .addEventListener('click', (event) => {
    event.preventDefault();
    showModalmyFlixCaseStudy();
  });

function closeModalCaseStudy() {
  let modalContainer = document.querySelector('.modal-container');
  modalContainer.classList.remove('modal-container');
}

document.querySelector('.modal-close').addEventListener('click', () => {
  closeModalCaseStudy();
});

window.addEventListener('keydown', (event) => {
  let modalContainer = document.querySelector('.modal-container');
  if (modalContainer && event.key === 'Escape') {
    closeModalCaseStudy();
  }
});
