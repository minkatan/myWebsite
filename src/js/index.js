// add mobile navbar button
const menuBtn = document.getElementById('menu')
const mobile = document.getElementById('mobile-navbar')

menuBtn.addEventListener('click',function(){
    if((menuBtn.firstChild.nextSibling.classList.toggle('md:hidden'))){
        mobile.classList.add('hidden')
    }else{
        mobile.classList.remove('hidden')
    }
})

// scroll reveal
function revealAboutMe() {
    const reveals = document.getElementById('about-me')
    let windowHeight = window.innerHeight;
    let elementTop = reveals.getBoundingClientRect().top;
    let elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals.classList.add("animate__animated", "animate__backInDown");
    } else {
      reveals.classList.remove("animate__animated", "animate__backInDown");
    }
  }
  window.addEventListener("scroll", revealAboutMe);

  // To check the scroll position on page load
  revealAboutMe();

// scroll reveal
function revealContact() {
    const reveals = document.getElementById('contact')
    let windowHeight = window.innerHeight;
    let elementTop = reveals.getBoundingClientRect().top;
    let elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      reveals.classList.add("animate__animated", "animate__zoomInDown");
    } else {
      reveals.classList.remove("animate__animated", "animate__zoomInDown");
    }
  }
  window.addEventListener("scroll", revealContact);

  // To check the scroll position on page load
  revealContact();