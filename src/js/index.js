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
