const light = document.getElementById('light')
const dark = document.getElementById('dark')

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
  light.classList.add('hidden')
} else {
  document.documentElement.classList.remove('dark')
  dark.classList.add('hidden')
}

const switcher = document.getElementById('switcher')

switcher.addEventListener('click', function(){
  light.classList.toggle('hidden')
  dark.classList.toggle('hidden')

  if (localStorage.theme === 'dark' || (!('theme' in localStorage))){
    document.documentElement.classList.remove('dark')
    localStorage.theme = 'light'
  }else {
    document.documentElement.classList.add('dark')
    localStorage.theme = 'dark'
  }
})
