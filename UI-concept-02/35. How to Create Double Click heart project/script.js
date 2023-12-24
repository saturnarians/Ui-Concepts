const photo = document.querySelector('.photo')
const clicked_number = document.querySelector('#clicked_number')

let clickTime = 0
let timesClicked = 0

photo.addEventListener('click', (e) => {
    if(clickTime === 0) {
        clickTime = new Date().getTime()
    } else {
        if((new Date().getTime() - clickTime) < 800) {
            makeHeart(e)
            clickTime = 0
        } else {
            clickTime = new Date().getTime()
        }
    }
})

const makeHeart = (e) => {
    const heart = document.createElement('i')
    heart.classList.add('fa-heart')
    heart.classList.add('fas')

    const x = e.clientX
    const y = e.clientY

    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    const xInside = x - leftOffset
    const yInside = y - topOffset

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    photo.appendChild(heart)

    clicked_number.innerHTML = ++timesClicked

    setTimeout(() => heart.remove(), 1100)
}