import '../scss/main.scss';

const textArea = document.querySelector('.textarea--js');
const loadBtn = document.querySelector('.load--js');
const saveBtn = document.querySelector('.save--js');

saveBtn.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.setItem('textArea', textArea.value);
});

loadBtn.addEventListener('click', (e) => {
    e.preventDefault();
    textArea.value = localStorage.getItem('textArea');
});
