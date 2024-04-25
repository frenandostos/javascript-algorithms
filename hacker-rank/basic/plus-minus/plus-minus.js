function plusMinus(numbersList) {
   const listLength = numbersList.length;
	 const typeQuantities = {
		 positives: 0,
		 negatives: 0,
		 zeroes: 0
	 }

	 for (let i = 0; i < listLength; i++) {
		 if (numbersList[i] > 0){
			 typeQuantities.positives++;
		 } else if (numbersList[i] < 0) {
			 typeQuantities.negatives++;
		 } else {
			 typeQuantities.zeroes++;
		 }
	 }

	 for (const [valueType, quantity] of Object.entries(typeQuantities)) {
		 const ratio = quantity ? (quantity * 100 / listLength)/100 : 0;

		 console.log(`${valueType}: ${ratio.toFixed(6)}`);
	 }
}

const arrNumbers = [-4, 3, -9, 0];

plusMinus(arrNumbers);

