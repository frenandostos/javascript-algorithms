const prompt = require('prompt-sync')({sigint: true});
const arrayNumbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const userInputNumber = prompt("Choose a number between 1 and 10: ");

console.log(`You chose the number: ${userInputNumber}\n`);

function guessChosenNumber(arrayNumbersList, userInputNumber) {
  let minNumber = 0;
  let maxNumber = arrayNumbersList.length - 1;

  while(minNumber <= maxNumber) {
    const half = Math.floor((minNumber + maxNumber) / 2);
    const chosenNumber = arrayNumbersList[half];
    
    if (chosenNumber == userInputNumber) {
      console.log(`Number guessed: ${chosenNumber}`);
      return true;
    }

    if (chosenNumber > userInputNumber) {
      maxNumber = half - 1;
    } else {
      minNumber = half + 1;
    }
  }

  console.log('Number not guessed');
  return false;
}

guessChosenNumber(arrayNumbersList, userInputNumber);

