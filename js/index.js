// Your code goes here
const navLinks = document.querySelectorAll('.nav a');
const introLogo = document.querySelector('.intro img');
const headerLogo = document.querySelector('.logo-heading');
const textContent = document.querySelectorAll('.text-content');
const imgContent = document.querySelectorAll('.img-content');
const button = document.querySelectorAll('.btn');
const paragraph = document.querySelectorAll('p');
const pHeader2 = document.querySelectorAll('h2');
const pHeader4 = document.querySelectorAll('h4');
const destination = document.querySelectorAll('.destination')
const nav = document.querySelector('nav');

nav.event.preventDefault();
const navHoverHandler = function (event) {
  event.target.style.color = 'red';
}

navLinks.forEach((hover) => {
  hover.addEventListener('mouseover', navHoverHandler)
})

const display = function (event) {
  event.target.style.filter = 'grayscale(100%)';
}

introLogo.addEventListener('wheel', display);

const click = function (event) {
  window.open('https://en.wikipedia.org/wiki/School_bus')
}

headerLogo.addEventListener('click', click)

const textShadow = function (event) {
  event.target.style.textShadow = '10px 10px gray';
}

textContent.forEach((shadow) => {
  shadow.addEventListener('dblclick', textShadow);
});

const shadowBox = function (event) {
  event.target.style.boxShadow = ('5px 5px gray');
}
imgContent.forEach((boxShadow) => {
  boxShadow.addEventListener('mouseover', shadowBox);
})

const btnScale = function (event) {
  event.target.style.transform = 'scale(1, 1.5)'
}

button.forEach((sizeBtn) => {
  sizeBtn.addEventListener('mouseover', btnScale);
})

const paragraphDisplay = function (event) {
  event.target.style.display = 'none';
 
}
paragraph.forEach((hide) => {
  hide.addEventListener('mouseout', paragraphDisplay)
})

const pHeaders = function (event) {
  event.target.style.fontSize = '6rem';
}
pHeader2.forEach((resize) => {
  resize.addEventListener('mouseout', pHeaders)
});
const destinationColor = function (event) {
  event.stopPropagation();
  event.target.style.backgroundColor = 'yellow';

}
destination.forEach((colors) => {
  colors.addEventListener('mouseout', destinationColor);
})