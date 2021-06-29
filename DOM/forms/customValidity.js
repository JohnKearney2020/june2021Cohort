// find the field to validate
const comments = document.getElementById('comments');
// on change
comments.addEventListener('change', function(e){
  const foundWord = comments.value.includes('thanks');

  if(foundWord){
    // if valid, clear the message
    comments.setCustomValidity('');
  } else {
    // if invalid, set the message
    comments.setCustomValidity('Please say thanks, you fool');
  }
})
  // check for validity

  // if not valid, setCustomValidity

  // else, reset