// ===================
// form submit event
// ===================
// find the form
const form = document.getElementById('pizzaForm');
// attach event listener to submit
form.addEventListener('submit', function(event){
  // event.preventDefault();
// check if field contains 'thanks'
  // find text area
  const comments = document.getElementById('commentText');
  // check value for 'thanks'
  const thanks = comments.value.includes('thanks');
  if(thanks){
    //submit form
    console.log("form submitted!")
    event.preventDefault();
  } else {
  // if it is not valid
    // show error
    alert('Say thank you. Who raised you!');
    event.preventDefault();
  }
})
