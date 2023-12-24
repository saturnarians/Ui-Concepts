const text = document.querySelector('.text')
const bg_img = document.querySelector('.background-image ')

let load = 0

let int = setInterval(blurring, 25)

function blurring() {
    load++

    if(load > 99) {
        clearInterval(int)
    }
    text.innerText = `${load}%`
    
    text.style.opacity = scale(load, 0, 100, 2, 0)
    bg_img.style.filter = `blur(${scale(load, 0, 100, 40, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return(num - in_min) * (out_max - out_min) / (in_max - in_min) +out_min;
}