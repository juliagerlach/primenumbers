//Display all prime number 1-100

//loop: start at min, end at max
	//for each number, heck to see if it is prime
		//start with myMumber, start at "2" and go up to (i)
		// if myNumber divided by any "j" has no remainder: 
			//not prime
		//otherwise: prime
		//console.log(myNumber)

function displayPrimeNumbersInRange(minimum, maximum){
	if(minimum % 2 === 0) {
		minimum++;
	}
	for(let i = minimum; i <= maximum; i += 2){ //counting from min to max
		let hasPrimeness = testforPrimeness(i);
		if(hasPrimeness) {
			console.log(i);
		}
	}
}

function testforPrimeness(currentNumber) {
	let isPrime = true;
	for(let i = 2; i < currentNumber; i++){ //checking to see if "currentNumber" is divisible by "i"
		if(currentNumber % i === 0) {
			isPrime = false;
			break;
		}
	}
	return isPrime;
}

displayPrimeNumbersInRange(1, 100);
