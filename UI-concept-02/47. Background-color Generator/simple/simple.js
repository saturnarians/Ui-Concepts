const colors = ['red',"green", 'blue','yellow','aqua','purple','fuchsia','orange'];

let colorText = document.querySelector('.color')
let generate = document.querySelector('.btn');

generate.addEventListener('click', function () {
  let random = randomNumber();

  document.body.style.backgroundColor = colors[random];
  
  colorText.textContent=colors[random];
})
function randomNumber () {
    return Math.floor(Math.random(colors)*colors.length)
}

