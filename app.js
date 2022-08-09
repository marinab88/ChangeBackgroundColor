const container = document.getElementById('container');
const button = document.createElement('button');
button.textContent = 'click to Change Background Color';

container.appendChild(button);

const changeBackgroundColor = () => {
 
  let randomNr = Math.floor(Math.random() * 7);
// console.log(randomNr);
  switch (randomNr) {
    case 0:
      document.body.style.backgroundColor = 'yellow';
      break;
    case 1:
      document.body.style.backgroundColor  = 'red';
      break;
    case 2:
      document.body.style.backgroundColor  = 'green';
      break;
    case 3:
      document.body.style.backgroundColor  = 'blue';
      break;
    case 4:
      document.body.style.backgroundColor  = 'black';
      break;
    case 5:
      document.body.style.backgroundColor  = 'orange';
      break;
    case 6:
      document.body.style.backgroundColor  = 'pink';
      break;
  }
}

button.addEventListener('click', changeBackgroundColor);