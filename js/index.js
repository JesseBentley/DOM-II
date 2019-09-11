// Your code goes here

let images = document.querySelectorAll('.home img');

images.forEach(image => {
  image.addEventListener('mouseenter', event => {
    image.style.transform = 'scale(1.5)';
    image.style.transition = 'transform 0.5s';
    //TweenLite.to(image, 1, { x: 100, ease: Elastic.easeOut });
  });

  image.addEventListener('mouseleave', event => {
    image.style.transform = 'scale(1.0)';
    image.style.transition = 'transform 0.5s';
  });
});

let textContents = document.querySelectorAll('.text-content');

textContents.forEach(text => {
  text.addEventListener('click', event => {
    text.style.background = 'silver';
    text.style.color = 'white';
  });

  text.addEventListener('dblclick', event => {
    text.style.background = 'white';
    text.style.color = 'black';
  });
});

let anyPInHome = document.querySelectorAll('.home p');

anyPInHome.forEach(para => {
  para.addEventListener('copy', event => {
    alert('Copywrite protection time.');
    const selection = document.getSelection();
    event.clipboardData.setData(
      'text/plain',
      selection.toString().toUpperCase()
    );
    event.preventDefault();
  });
});

document.addEventListener('keydown', event => {
  let keyHit = event.key;
  let keyCody = event.keyCode;
  alert(`You hit the ${keyHit} key, be more careful`);
});

window.addEventListener('resize', event => {
  let newHeight = window.innerHeight;
  let newWidth = window.innerWidth;

  location.reload();

  alert('Mobile view is at 500px and tablet is at 800px');
  alert(`My new height is ${newHeight} and new width is ${newWidth}`);
});

let destinationButtons = document.querySelectorAll('.content-pick .btn');
destinationButtons.forEach(button => {
  button.addEventListener('click', event => {
    button.style.background = 'green';
    alert('Insert interesting message about your trip being full here.');
  });
});

//stop propagation
let theFooterP = document.querySelector('.footer p');
theFooterP.addEventListener('click', event => {
  theFooterP.style.display = 'none';
  event.stopPropagation();
});

let theFooter = document.querySelector('.footer');
theFooter.addEventListener('click', event => {
  theFooter.style.background = 'blue';
  // event.stopPropagation();
});

let anchorTags = document.querySelectorAll('.nav-link');
anchorTags.forEach(tag => {
  tag.addEventListener('click', event => {
    event.preventDefault();
  });
});