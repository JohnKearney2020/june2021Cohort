const button2 = document.getElementById('button2');


// Option 2: setting property
// we can only assign one property if we do it this way (only run one function)
button2.onclick = function () {
  alert("you clicked me too!");
};

// Option 3: use an event listener
// we can add many event listeners to the button if we do it this way
const button3 = document.getElementById('button3');

button3.addEventListener('click', function(){
  alert('Finally!!')
})

// We can also remove event listeners once used
const button4 = document.getElementById('button4');
const clickOnce = () => {
  alert('One Time');
  //We can remove the event listener afterward if we call a function this way
  button4.removeEventListener('click', clickOnce)
}

button4.addEventListener('click', clickOnce);