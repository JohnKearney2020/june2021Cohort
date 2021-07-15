const url = 'https://api.scryfall.com/cards/03f4341c-088b-4f35-b82b-3d98d8a93de4?format=json&pretty=true';

fetch(url).then(function(response) {
console.log(response);
return response.json();
})
// the response body gets converted from json into an object
.then(function(data){
  // Get the card name
  console.log(data.name);
  // get element from body
  const container = document.querySelector('.card-data')
  // create the h1 element
  const h1 = document.createElement('h1');
  // set content from data
  h1.textContent = data.name;
  // add element to the page
  container.appendChild(h1);

  // Get the card image
  console.log(data.image_uris.large);
  // make an image tag
  const image = document.createElement('img');
  // set its src attribute
  image.setAttribute('src', data.image_uris.large);
  // add the image to the body
  container.appendChild(image);
})