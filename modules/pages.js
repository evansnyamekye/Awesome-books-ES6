export const bookListPage = () => {
  document.querySelector('.list').style.display = 'block';
  document.querySelector('.field').style.display = 'none';
  document.querySelector('.contact').style.display = 'none';
};

export const addNewBook = () => {
  document.querySelector('.list').style.display = 'none';
  document.querySelector('.field').style.display = 'block';
  document.querySelector('.contact').style.display = 'none';
};

export const contactPage = () => {
  document.querySelector('.list').style.display = 'none';
  document.querySelector('.field').style.display = 'none';
  document.querySelector('.contact').style.display = 'block';
};

document.querySelector('#list').addEventListener('click', bookListPage);
document.querySelector('#addbook').addEventListener('click', addNewBook);
document.querySelector('#contact').addEventListener('click', contactPage);
