const slides = document.querySelectorAll('.slide');

let indexOfImage = 0
function backgrounfUpdate() {
	let body = document.body;
	body.style.backgroundImage = slides[indexOfImage].style.backgroundImage;
}
backgrounfUpdate();

function slideUpdate() {
	slides.forEach(element => {
		element.classList.remove('show');
	});
	slides[indexOfImage].classList.add('show');
}

const rightButton = document.getElementById('next');
rightButton.addEventListener('click', moveRight);

// function slide() {
// 	slides.style.transition = "transform 2s ease-in-out";
// 	slideUpdate();
// }

const totalNumberOfImage = slides.length;
function moveRight() {
	if (indexOfImage > totalNumberOfImage - 2) {
		indexOfImage = 0;
	}
	else {
		indexOfImage++;
	}
	backgrounfUpdate();
	slideUpdate();
	// slide();
}

const leftButton = document.getElementById('prev');
leftButton.addEventListener('click', moveLeft);

function moveLeft() {
	if (indexOfImage < 1) {
		indexOfImage = totalNumberOfImage - 1;
	}
	else {
		indexOfImage--;
	}
	backgrounfUpdate();
	slideUpdate();
	// slide();
}

