window.addEventListener('click', () => color());

window.addEventListener('keyup', () => color());

const color = () => {
    let bd = document.querySelector('body');
    let color = Math.floor(Math.random()*16777215).toString(16);
    bd.style.backgroundColor = "#" + color;
    document.querySelector('h1').innerHTML = "#" + color;
}