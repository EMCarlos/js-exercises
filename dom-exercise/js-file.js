const container = document.querySelector('#container');

const p = document.createElement('p');
p.style.color = 'red'
p.textContent = "Hey I’m red!"
container.appendChild(p);

const h3 = document.createElement('h3');
h3.style.color = 'blue'
h3.textContent = "I’m a blue h3!"
container.appendChild(h3);

const div = document.createElement('div');
const h1 = document.createElement('h1');
const p2 = document.createElement('p');
h1.textContent = "I’m in a div"
p2.textContent = "ME TOO!"
div.appendChild(h1);
div.appendChild(p2);
div.style.cssText = "background-color: pink; border: 1px solid black"
container.appendChild(div);


const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});