console.log('start')

function greet(name) {
  console.log("hello,", name);
}

greet("Steve");

fetch("https://anapioficeandfire.com/api/characters/583")
  .then((res) => { 
    console.log(typeof res);
    console.log(res);
    return res.json();
  })
  .then((data) => {
    console.log('end request');
    console.log(data);
    return data.name;
  })
  .then((theName) => {
    console.log(theName);
    greet(theName);
  })
  .catch((error) => {
    console.error("Can't do that")
    console.log(error);
  })
  .finally(() => {
    console.log("promise finished for some reason");
  });
console.log('end');
