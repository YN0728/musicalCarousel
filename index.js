let slideIndex = 1;
let timeout;
showSlides(slideIndex);
// showSlidesAuto();


// Next/previous controls
function plusSlides(n) {
	showSlides(slideIndex += n);
	pauseAll();
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides(slideIndex = n);
	pauseAll();
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
}


function showSlidesAuto() {
	pauseAll();
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slides.length) {slideIndex = 1}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
	timeout=setTimeout(showSlidesAuto, 4000);

}

function playSlide() {
	pauseAll();
	document.querySelector("#imagePlay").style.display = "none";
	document.querySelector("#imagePause").style.display = "block";
	showSlidesAuto();
}

function pauseSlide() {
	pauseAll();
	document.querySelector("#imagePlay").style.display = "block";
	document.querySelector("#imagePause").style.display = "none";
	clearTimeout(timeout);
}

function pauseAll() {
	let audio = document.getElementsByClassName("audio");
	for (let i = 0; i < audio.length; i++) {
		audio[i].pause();
		audio[i].currentTime = 0;
	}
}

function playMozart() {
	let audio = document.getElementById("audioMozart");
	audio.play();
}

function playBach() {
	let audio = document.getElementById("audioBach");
	audio.play();
}

function playBeethoven() {
	let audio = document.getElementById("audioBeethoven");
	audio.play();
}

function playKorsakov() {
	let audio = document.getElementById("audioKorsakov");
	audio.play();
}

function playTchaikovsky() {
	let audio = document.getElementById("audioTchaikovsky");
	audio.play();
}

function playVivaldi() {
	let audio = document.getElementById("audioVivaldi");
	audio.play();
}

function playChopin() {
	let audio = document.getElementById("audioChopin");
	audio.play();
}

