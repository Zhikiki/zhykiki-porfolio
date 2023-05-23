function showModalmyFlixCaseStudy(targetProject) {
  let projectTitle = targetProject.getAttribute('title');

  let modalContainer;
  if (projectTitle.includes('myFlix')) {
    modalContainer = document.querySelector('#myFlix-react-case-study');
    modalContainer.classList.add('modal-container');
  } else {
    console.log('Here will be case study for other project');
  }
  // Call close modal function when user tap on modal container
  modalContainer.addEventListener('click', (event) => {
    let target = event.target;
    if (target === modalContainer) {
      closeModalCaseStudy();
    }
  });
}

let showCaseStudyModalButtons = document.querySelectorAll(
  'a.show-modal-case-stady'
);
showCaseStudyModalButtons.forEach((element) => {
  element.addEventListener('click', (event) => {
    let targetProject = event.target;
    event.preventDefault();
    showModalmyFlixCaseStudy(targetProject);
  });
});

// Function closes modal with case study
function closeModalCaseStudy() {
  let modalContainer = document.querySelector('.modal-container');
  modalContainer.classList.remove('modal-container');
}

// Call close modal function when user press 'Close' button in modal
document.querySelector('.modal-close').addEventListener('click', () => {
  closeModalCaseStudy();
});

// Call close modal function when user press Esc button on keyboard
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
  if (document.getElementById('myFlix-react-case-study').scrollTop > 50) {
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
