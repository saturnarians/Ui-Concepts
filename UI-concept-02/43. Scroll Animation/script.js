const main_part = document.querySelector('main');

let currentPos = window.pageYOffset;

const scrolling = () => {
	const newPos = window.pageYOffset;
	const diff = newPos - currentPos;
	const speed = diff * 0.40;
	
	main_part.style.transform = `skewY(${ speed }deg)`;
	
	currentPos = newPos;
	
	requestAnimationFrame(scrolling);
}

scrolling();