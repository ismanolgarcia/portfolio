const footerDate = document.querySelector('.footer__date');

export const updateDate = () => {
  const year = new Date().getFullYear();
  footerDate.append(year);
};
