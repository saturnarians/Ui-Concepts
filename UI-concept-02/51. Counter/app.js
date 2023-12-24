let decreaseBtn = document.querySelector('.decrease');
let resetBtn = document.querySelector('.reset');
let increaseBtn = document.querySelector('.increase');
let value = document.querySelector('.value');

let count = 0;

decreaseBtn.addEventListener('click', () => {
count--;
value.textContent=count
if (count<0) {
value.style.color='red'
}
})

resetBtn.addEventListener('click', () => {
count=0;
value.textContent=count
if (count==0) {
value.style.color='black'
}
})

increaseBtn.addEventListener('click', () => {
count++;
value.textContent=count
if (count> 0) {
value.style.color='green'
}
})