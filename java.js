
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Optional: Auto-slide every 5 seconds
setInterval(() => { plusSlides(1); }, 5000);

//popup

let mainWindow;
let signWindow;

function Index() {
    const win = window.open("Index.html", "myWindow1", "location=1");
    if (win) win.moveTo(0, 0);
}

function TermsConditions() {
    const win = window.open("Terms&Conditions.html", "myWindow2", "location=1,status=1,scrollbars=1,width=1000,height=750");
    if (win) win.moveTo(0, 0);
}

function vid() {
    const win = window.open("vid.html", "myWindow3");
    if (win) win.moveTo(0, 0);
}

function playMusic(){
  var music = new Audio('audio/romantic.mp3.mp3');
  music.play();
  }