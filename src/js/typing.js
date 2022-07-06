const textArray = ['Data Analyst', 'Project Manager', 'Financial Analyst', 'Front-End Developer']
const typing = document.getElementById('typing');
let i = 0;
let arrayIndex = 0
let speed = 150
  
function startTyping(){
  if ( i < textArray[arrayIndex].length ) {
      typing.innerHTML += textArray[arrayIndex].charAt( i );
      i++;
      setTimeout( startTyping, speed );
    }
    else {
      setTimeout( deleteTyping, 2000 );
    }
}

// Delete Typing
function deleteTyping(){
  if ( i > 0 ) {
  typing.innerHTML = textArray[arrayIndex].substring(0, i - 1)
  i--;
  setTimeout( deleteTyping, speed );
  }
  else {
    arrayIndex++;
    if(arrayIndex >= textArray.length) arrayIndex = 0;
    setTimeout( startTyping, 2000 );
  }
}

window.load = startTyping();