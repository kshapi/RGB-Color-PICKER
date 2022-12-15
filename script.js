const  r = document.getElementById('R');
const  g = document.getElementById('G');
const  b = document.getElementById('B');

r.addEventListener('input',clr);
g.addEventListener('input',clr);
b.addEventListener('input',clr);


const span = document.querySelectorAll('.screen span');

const show = document.querySelector('.show-clr');

function clr(){
  
  const  rvalue = document.getElementById('R').value;
  const  gvalue = document.getElementById('G').value;
  const  bvalue = document.getElementById('B').value;
  
  show.style.background = `rgb(${rvalue},${gvalue},${bvalue})`;
  span[1].textContent = r.value + ',';
  span[2].textContent = g.value + ',';
  span[3].textContent = b.value;
  
};
