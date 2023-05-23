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


// Logic for get to top button
let getToTopButton = document.getElementById('btn-back-to-top');

// When user scrolls down 20px, show the button
document
  .getElementById('myFlix-react-case-study')
  .addEventListener('scroll', scrollFunction);

function scrollFunction() {
  console.log('modal scrolled');
  if (
    document.getElementById('myFlix-react-case-study').scrollTop > 50
  ) {
    getToTopButton.style.display = 'block';
  } else {
    getToTopButton.style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
getToTopButton.addEventListener('click', backToTop);

function backToTop() {
  document.getElementById('myFlix-react-case-study').scrollTop = 0;
}
