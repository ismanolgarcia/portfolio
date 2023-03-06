export const toggler = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const menuToggler = document.querySelector('#menu-toggler');
    menuToggler.addEventListener('click', () => {
      document.body.classList.toggle('menu-active');
    });
  });
};
