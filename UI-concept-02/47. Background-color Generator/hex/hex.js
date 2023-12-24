const colors = [1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];

let colorText = document.querySelector('.color')
let generate = document.querySelector('.btn');

generate.addEventListener('click', () => {
    let hexColor = '#'
    
    for (let i = 0; i < 6; i++) { 
     hexColor += colors[randomNumber()]
    }

    colorText.textContent=hexColor
    document.body.style.backgroundColor=hexColor
})

function randomNumber () {
return Math.floor(Math.random() * colors.length)
}