// put the sentence value into a variable
const sentenceToBeAnalyzed = "here we have a sentence as an example";

// now let's prepare our counters with some basic variables
let wordCounter = 0;
let lettersQuantity = {}
let counter = 0;

/* in javascript a string can be looped.
   In this example a while loop is going to be used*/

// counting words
while (sentenceToBeAnalyzed[counter] !== undefined) {

	/* if at the momente it has a white space or it is the last character
		 of the sentence, than it's going to be computed as a word */
	if (sentenceToBeAnalyzed[counter] === " " || sentenceToBeAnalyzed[counter + 1] === undefined) {
		wordCounter++;
	}

	// increasing the counter
	counter++;
}

// displaying the words counted
console.log(`Words counted: ${wordCounter}`);

// counter reset
counter = 0;

// now the letters are going to be computed
while (sentenceToBeAnalyzed[counter] !== undefined) {
	// let's put the letter into a variable
	const currentLetter = sentenceToBeAnalyzed[counter];

	// if it's not a blank spance, consider this letter
	if (currentLetter !== ' ') {

		// if the letter is not in the object, add and count it
		lettersQuantity[currentLetter] = (lettersQuantity[currentLetter] || 0) + 1;

	}

	counter++;
}

// displaying the letters counted
for (const letter in lettersQuantity) {
	console.log(`Letter ${letter} has ${lettersQuantity[letter]} occurrences`);
}

// optmize the code above
// counting words
let totalOfWords = sentenceToBeAnalyzed.split(' ').length;
console.log(`Words counted: ${totalOfWords}`);

// counting letters
const letters = sentenceToBeAnalyzed.replace(/ /g, '').split('');
const computedLetters = letters.reduce((computedLettersObject, letter) => {
	computedLettersObject[letter] = (computedLettersObject[letter] || 0) + 1;
	return computedLettersObject;
}, {});

for (const letter in computedLetters) {
	console.log(`Letter ${letter} has ${computedLetters[letter]} occurrences`);
}
