const btnResume = document.querySelector('.button__resume');
const btnEmail = document.querySelector('.button__email');
const btnProjects = document.querySelector('.button__projects');
const proyecto = document.querySelector('.projects');

export const openPdf = () => {
  btnResume.addEventListener('click', () => {
    window.open('src/assets/pdf/curriculum-vitae.pdf', '_blank');
  });
};

export const openEmail = () => {
  btnEmail.addEventListener('click', () => {
    window.location.href = 'mailto:dev@ismanolgarcia.com';
  });
};

openPdf();
openEmail();
