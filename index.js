const h1 = document.querySelector('h1');
const input = document.querySelector('input');
const title = h1.textContent;

document
    .querySelector('form')
    .addEventListener('submit', (event) => {
        event.preventDefault();

        h1.textContent = `${title}, ${input.value}!`;
    });
