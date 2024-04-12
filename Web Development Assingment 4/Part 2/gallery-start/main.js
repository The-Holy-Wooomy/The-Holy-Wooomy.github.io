const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

// Declaring the array of image filenames
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg']

// Declaring the alternative text for each image file
const alt_images = {'pic1.jpg' : "Close-up of a human eye", 'pic2.jpg' : "A rock that looks like ocean waves", 'pic3.jpg' : "Purple and white flowers", 'pic4.jpg' : "Egyptian Hyroglyphs", 'pic5.jpg' : "A butterfly on a leaf"}

// Looping through images
for (const i of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${i}`);
  newImage.setAttribute('alt', alt_images[i]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener("click", e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
};

// Keyboard support
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    // Press 1 to select the eye
    case "1":
      displayedImage.src = `images/${images[0]}`;
      displayedImage.alt = alt_images[images[0]];
      break;
    // Press 2 to select the rock
    case "2":
      displayedImage.src = `images/${images[1]}`;
      displayedImage.alt = alt_images[images[1]];
      break;
    // Press 3 to select the flowers
    case "3":
      displayedImage.src = `images/${images[2]}`;
      displayedImage.alt = alt_images[images[2]];
      break;
    // Press 4 to select the hyroglyphs
    case "4":
      displayedImage.src = `images/${images[3]}`;
      displayedImage.alt = alt_images[images[3]];
      break;
    // Press 5 to select the butterfly
    case "5":
      displayedImage.src = `images/${images[4]}`;
      displayedImage.alt = alt_images[images[4]];
      break;
  }
});

// Wiring up the Darken/Lighten button
btn.addEventListener("click", () => {
  const button = btn.getAttribute('class');
  // Check the button's state
  if (button == "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = 'rgba(0,0,0,50%)';
  } else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = 'rgba(0,0,0,0%)';
  }
});