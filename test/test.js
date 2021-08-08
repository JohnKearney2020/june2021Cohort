console.log('test script loaded');

// const buttons = document.querySelectorAll('.save');

// console.log(Array[buttons]);

// buttons.forEach(item => {
//   console.log('test 123');
//   item.addEventListener('click', event => {
//     //handle click
//     console.log('You Clicked me@');
//   })
// })

document.querySelectorAll(".save").forEach(function(element) {
	element.addEventListener('click', function() {
		// event handler code
    console.log('Test click');
	});
});

// document.getElementById("test").addEventListener("click", function() {
//   console.log('clicked!');
// })