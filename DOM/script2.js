console.log('script 2');

const container = document.getElementById('container');

// Navbar
const navbar = document.createElement('div');
navbar.style.backgroundColor = 'blue';
container.appendChild(navbar);
navbar.classList.add('navbar');

const brand = document.createElement('h2');
navbar.appendChild(brand);
brand.textContent = 'HighOnCoding';

// ==================================================================
//                          navigation
//===================================================================
const navList = document.createElement('ul');
navbar.appendChild(navList);

const homeLink = document.createElement('li');
homeLink.textContent = 'Home';
homeLink.classList.add('active');
navList.appendChild(homeLink);
const catLink = document.createElement('Categories');
catLink.textContent = 'Categories';
navList.appendChild(catLink);

// ==================================================================
//                          Reviews
//===================================================================

// create a container for the reviews section
// append this container to the master container
// create the reviews heading
// create the reviews paragraph
// add any classes or ids



// ==================================================================
//                         Hello Watchkit
//===================================================================




// ==================================================================
//                     Introduction to Swift
//===================================================================
