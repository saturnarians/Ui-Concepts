const containerBackground = document.querySelector('.container_background');
document.querySelector('.slider').addEventListener('input', (e) => {
  containerBackground.style.setProperty('--position', `${e.target.value}%`);
})