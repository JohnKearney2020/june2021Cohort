console.log('test link')
// all jQuery must start with the document.ready function
$(document).ready(function() {
  console.log('document is ready');
  const title = $('#title');
  title.text('Best Jokes');
  title.css({
    'color': 'chartreuse',
    'background-color': 'navy'
  })
  const id = title.attr('id'); // one attribute retrieves
  console.log(id);
  title.attr('class', 'fancy') // two attributes sets the attribute

  // =======================
  // Creating new elements
  // =======================
  const $jokes = $('<div></div>');
  console.log($jokes);

  // Two ways to append things to the body:
  $(document.body).append($jokes);
  // $jokes.appendTo(document.body);

  // If we aren't adding inner text to an element, we don't need the closing tag
  // const $button = $('<button>');
  const $button = $('<button class="jokeBtn">Get me a new joke</button>');
  // $jokes.append($button);
  // OR
  $button.appendTo($jokes);

  // ======================
  //         Events
  // ======================
  // equivalent to below in JS:
  // $button.addEventListener("click", function(event){})
  // .on is used instead of .addEventListener
  // $button.on('click', function(event){
  //   console.log('clicked!')
  // });
  // using an arrow function
  // $button.on('click', (event) => {
  //   console.log('clicked!')
  // });

  // =========================================
  //                AJAX
  // =========================================
  // Asynchronous Javascript And XML
  $button.on('click', (event) => {
    // $.ajax('https://icanhazdadjoke.com');
    // fetch("https://icanhazdadjoke.com", {
    //   headers: {
    //     Accept: "application/json"
    //   }
    // });

    //=============================================================
    // Getting and creating a joke button with jQuery
    //=============================================================
    $.ajax({
      url: 'https://icanhazdadjoke.com',
      headers: {
        'Accept': 'application/json'
      }
    }).then((data) => {
      // console.log(data);
      // REMOVE existing jokes
      // $('.joke').fadeOut();
      $('.joke').slideUp();
      // $('.joke').remove();
      // $(`<div class='joke'>${data.joke}</div>`).appendTo($jokes);
      // $(`<div class='joke'>${data.joke}</div>`).hide().appendTo($jokes).fadeIn();
      // $(`<div class="joke">${data.joke}</div>`).hide().appendTo($jokes).delay(350).fadeIn();
      $(`<div class="joke">${data.joke}</div>`).hide().appendTo($jokes).delay(350).slideDown();
    })

    //=============================================================
    // Getting and creating a joke button with Javascript
    //=============================================================
    // fetch("https://icanhazdadjoke.com", {
    //   headers: {
    //     Accept: "application/json"
    //   }
    // })
    // .then((res) => res.json())
    // .then((data) => {
    //     const oldJokes = document.getElementsByClassName("joke");
    //     for (let i = 0; i < oldJokes.length; i++) {
    //       oldJokes[i].remove();
    //     }
    //     const newJoke = document.createElement("div");
    //     newJoke.classList.add("joke");
    //     newJoke.textContent = data.joke;
    //     $jokes.get(0).appendChild(newJoke);
    // });
  });
})
