const container = document.querySelector('.container');
const span = container.parentElement.querySelector('span');
// console.log(span);
span.style.fontWeight = 'bold';
span.innerHTML = container.parentElement.querySelector('.input').value;

// Random number generator
function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function clearGrid() {
  container.innerHTML = '';
}

function grid(row, col) {
  container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${row}, 1fr)`;
  const totalDiv = row * col;
  for (let i = 0; i < totalDiv; i += 1) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
  }
}

function updateGrid() {
  const inputVal = document.querySelector('.input');
  const gridSize = inputVal.value;

  clearGrid();
  grid(gridSize, gridSize);

  const box = container.children;
  Array.from(box).forEach((miniBox) => {
    miniBox.addEventListener('mouseover', (e) => {
      e.target.style.backgroundColor = 'black';
    });
  });
}

container.parentElement.querySelector('.rgb-btn').addEventListener('click', (e) => {
  const squares = e.target.parentElement.parentElement.querySelectorAll('.square');
  squares.forEach((square) => {
    square.addEventListener('mouseover', (e) => {
      const randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
      e.target.style.backgroundColor = randomColor;
    });
  });
});

container.parentElement.querySelector('.simple-btn').addEventListener('click', (e) => {
  const squares = e.target.parentElement.parentElement.querySelectorAll('.square');
  squares.forEach((square) => {
    square.addEventListener('mouseover', (e) => {
      // const randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
      e.target.style.backgroundColor = 'black';
    });
  });
});

document.querySelector('.clear-btn').addEventListener('click', (e) => {
  const squares = e.target.parentElement.parentElement.querySelectorAll('.square');
  squares.forEach((square) => {
    square.removeAttribute('style');
  });
});

document.querySelector('.input').addEventListener('input', (e) => {
  updateGrid();
  span.innerHTML = e.target.value;
});

// Initial grid creation
updateGrid();
