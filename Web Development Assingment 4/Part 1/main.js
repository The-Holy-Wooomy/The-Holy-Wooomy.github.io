//1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//2. RAW TEXT STRINGS

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."

const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"]

const insertY = ["the soup kitchen", "Disneyland", "the White House"]

const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"]

//3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener("click", result);

function result() {
  
  // New variable to create a new story each time the button is pressed
  let newStory = storyText

  // Get a random item from each array
  const xItem = randomValueFromArray(insertX)
  const yItem = randomValueFromArray(insertY)
  const zItem = randomValueFromArray(insertZ)

  // Replace with the randomized string
  newStory = newStory.replaceAll(":insertx:", xItem)
  newStory = newStory.replaceAll(":inserty:", yItem)
  newStory = newStory.replaceAll(":insertz:", zItem)

  // Check if a name has been entered in the text box
  if (customName.value !== '') {
    // Replace Bob with the entered name
    const name = customName.value;
    newStory = newStory.replaceAll("Bob", name)
  }

  // Check if the convert to uk button has been selected
  if (document.getElementById("uk").checked) {
    // Change from pounds and fahrenheit to stones and centigrade
    const weight = Math.round(300 / 14) + " stones";
    const temperature = Math.round((94 - 32) / 1.8) + " centigrade";
    newStory = newStory.replaceAll("94 fahrenheit", temperature)
    newStory = newStory.replaceAll("300 pounds", weight)
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}