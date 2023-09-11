//Plus Minus

function plusMinus(arr) {

  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;

  // Iterate through the array and count positive, negative, and zero elements
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveCount++;
    } else if (arr[i] < 0) {
      negativeCount++;
    } else {
      zeroCount++;
    }
  }

  // Calculate ratios
  const totalElements = arr.length;
  console.log((positiveCount / totalElements).toFixed(6))
  console.log((negativeCount / totalElements).toFixed(6))
  console.log((zeroCount / totalElements).toFixed(6))

}


//StairCase
function staircase(n) {

  // here we use just one for loop where i tracks the number of rows
  // the number of rows (i) should be less than or equal to n
    for (let i = 1; i <= n; i++) {
      // print out a " " n-i times and append a # i times
      // console log adds a new line by default

        console.log(" ".repeat(n-i) + "#".repeat(i))
    }
}

staircase(6)

//StairCase 2
function staircase(n) {

  // want to declare a variable that will hold the final output that we will print
  let output = ''

  // outer for loop to keep track of the overall number of rows (n)
  for (let i = 1; i <= n; i++) {

      for (let s = n - 1; s >= i; s--) {
          output += ' '
      }

      for (let h = 1; h <= i; h++) {
          output += '#'
      }
      // new line
      output += "\n"

  }
  // log the final result
  console.log(output)
}

staircase(6)

//Candle
function myFunction(arr) {
  let sum = Math.max(...arr);

  let candle = arr.filter((item) => sum === item);
  return candle.length;
}

const arr = [1, 3, 4, 4];
console.log(myFunction(arr));


//Military time wrong answer
function timeConversion(s) {

  const am = s.includes('AM')
  const pm = s.includes('PM')
  const [time] = s.split(' ');
  const withoutPeriod = time.replace(/[APM]/gi, '')
  const [hours, minutes, seconds] = withoutPeriod.split(':');

  // Converting hours to an integer value
  let militaryHours = parseInt(hours, 10)
  

  // Handling special cases for 12:00 AM and 12:00 PM
  if (am) {
      if (militaryHours === 12) {
          militaryHours += 0;
      }
  } if (pm) {
      if (militaryHours <= 12) {
          militaryHours += 12;
      }
  }

  // Formatting the military time
  const militaryTime = `${militaryHours.toString()}:${minutes}:${seconds}`;

  return militaryTime
}


//Military time Right answer
function timeConversion(s) {
    const timePart = s.match(/^(\d{2}):(\d{2}):(\d{2})(AM|PM)$/)
    const hours = parseInt(timePart[1], 10);
    const minute = timePart[2]
    const second = timePart[3]
    const period = timePart[4]

    let militaryTime;

    if(period === 'AM'){
        militaryTime = hours === 12 ? "0" : (hours < 10 ? '0' : "") + hours
    }
    else{
        militaryTime = hours === 12 ? "12" : (hours < 10 ? '12' : "") + (hours + 12)
    }
  
    // Combining the parts to get the final result
    return `${militaryTime}:${minute}:${second}`;
  }
  

// Test case
console.log(timeConversion('11:00:00PM'));


//Kangaroo Jump Problem
function kangarooJump(x1, v1, x2, v2) {
    // Check if kangaroos have the same initial position and velocity
    if (x1 === x2 && v1 === v2) {
        return "YES";
    }

    // Check if the kangaroos have the same velocity and different initial positions
    if (v1 === v2) {
        return "NO";
    }

    // Check if the relative distance between kangaroos is divisible by the relative velocity
    if ((x2 - x1) % (v1 - v2) === 0 && (x2 - x1) / (v1 - v2) >= 0) {
        return "YES";
    }

    return "NO";
}

// Example usage
const x1 = 0;
const v1 = 3;
const x2 = 4;
const v2 = 2;

const result = kangarooJump(x1, v1, x2, v2);
console.log(result); // Output will be "YES" in this case


//Apple Orange Problem Hacker Rank
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleCount = 0;
  let orangeCount = 0;

  for (let appleDistance of apples) {
    const applePosition = a + appleDistance;
    if (applePosition >= s && applePosition <= t) {
      appleCount++;
    }
  }

  for (let orangeDistance of oranges) {
    const orangePosition = b + orangeDistance;
    if (orangePosition >= s && orangePosition <= t) {
      orangeCount++;
    }
  }

  console.log(appleCount);
  console.log(orangeCount);
}


//Auto Grading System
function gradingStudents(grades) {
  const roundedGrades = [];
  for (const grade of grades) {
    if (grade < 38) {
      roundedGrades.push(grade);
    } else {
      const nextMultipleOf5 = Math.ceil(grade / 5) * 5;
      if (nextMultipleOf5 - grade < 3) {
        roundedGrades.push(nextMultipleOf5);
      } else {
        roundedGrades.push(grade);
      }
    }
  }
  return roundedGrades;
}

// Test the function with the sample input
const grades = [73, 67, 38, 33];
const roundedGrades = gradingStudents(grades);
console.log(roundedGrades.join('\n'));


//Total Number factor
function getTotalx(a, b){
     const sumA = Math.max(...a)
     const sumB = Math.min(...b)

     let count = 0;

     for(let num = sumA; num <= sumB; num++){
          const isFactorB = b.every(element => element % num === 0)
          const isFactorA = a.every(element => num % element === 0)

          if(isFactorA && isFactorB){
               count++
          }
     }

     return count;
}

//Migratory Bird Problem
function migratoryBirds(arr) {
  // Create an object to store the count of each bird type
  const birdCount = {};

  // Iterate through the array and count bird sightings
  for (let bird of arr) {
    if (birdCount[bird]) {
      birdCount[bird]++;
    } else {
      birdCount[bird] = 1;
    }
  }

  // Find the bird type with the highest count
  let maxCount = 0;
  let mostFrequentType = 0;

  for (let bird in birdCount) {
    if (birdCount[bird] > maxCount) {
      maxCount = birdCount[bird];
      mostFrequentType = bird;
    } else if (birdCount[bird] === maxCount && bird < mostFrequentType) {
      // If there are multiple types with the same max count, choose the smallest id
      mostFrequentType = bird;
    }
  }

  return mostFrequentType;
}

// Sample input
const birdSightings = [1, 4, 4, 4, 5, 3];

const result = migratoryBirds(birdSightings);
console.log(result);


//Day of Programmer
function dayOfProgrammer(year) {
    let day = 0;
    let month = 0;

    if (year === 1918) {
        // Special case for the transition year 1918
        day = 26;
        month = 2;
    } else if ((year < 1918 && year % 4 === 0) || 
               (year > 1918 && ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)))) {
        // Leap year
        day = 12;
        month = 9;
    } else {
        // Non-leap year
        day = 13;
        month = 9;
    }

    return `${day.toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}.${year}`;


  //Bon Appetit
  function bonAppetit(bill, k, b) {
    
    const totalCost = bill.reduce((acc, item)=> acc + item, 0)
    
    const annaShare = (totalCost - bill[k])/2;
    
    if(annaShare == b){
        console.log("Bon Appetit")
    }else{
        
        const refundAmount = b- annaShare;
        console.log(refundAmount)
    }

}



function sockMerchant(n, ar) {
  const colorCount = {};

  for (const color of ar) {
    if (color in colorCount) {
      console.log('Color Count',colorCount)
      colorCount[color]++;
    } else {
      colorCount[color] = 1;
    }
  }

  let totalPairs = 0;

  for (const count of Object.values(colorCount)) {
    totalPairs += Math.floor(count / 2);
  }

  return totalPairs;
}

// Sample Input
const n = 9;
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

// Call the function and print the result
const result = sockMerchant(n, ar);
console.log(result);


function pageCount(n, p) {
    // Calculate the minimum number of pages to turn from the front
    const fromFront = Math.floor(p / 2);

    // Calculate the minimum number of pages to turn from the back
    const fromBack = Math.floor(n / 2) - fromFront;

    // Return the minimum of pages turned from front and back
    return Math.min(fromFront, fromBack);
}

// Example usage:
const n = 6; // Number of pages in the book
const p = 2; // Page number to turn to
const minPagesTurned = pageCount(n, p);
console.log(minPagesTurned); // Output: 1

//countingValleys
function countingValleys(steps, path) {
    let altitude = 0; // Initialize the altitude at sea level
    let valleys = 0; // Initialize the number of valleys

    for (let i = 0; i < steps; i++) {
        if (path[i] === 'U') {
            altitude++;
        } else {
            altitude--;
        }

        // Check if we have completed a valley
        if (altitude === 0 && path[i] === 'U') {
            valleys++;
        }
    }

    return valleys;
}

// Example usage
const steps = 8;
const path = 'UDDDUDUU';
const result = countingValleys(steps, path);

console.log(result); // Output: 1


function getMoneySpent(keyboards, drives, budget) {
    let maxSpent = -1;

    // Iterate through each combination of keyboard and USB drive
    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < drives.length; j++) {
            let totalCost = keyboards[i] + drives[j];
            
            // Check if the total cost is within budget and greater than the current maximum
            if (totalCost <= budget && totalCost > maxSpent) {
                maxSpent = totalCost;
            }
        }
    }

    return maxSpent;
}

// Example usage
const budget = 10;
const keyboards = [3, 1];
const drives = [5, 2, 8];
const result = getMoneySpent(keyboards, drives, budget);

console.log(result); // Output: 9

//catAndMouse
  function catAndMouse(x, y, z) {
    const distanceToCatA = Math.abs(x - z);
    const distanceToCatB = Math.abs(y - z);

    if (distanceToCatA < distanceToCatB) {
        return 'Cat A';
    } else if (distanceToCatA > distanceToCatB) {
        return 'Cat B';
    } else {
        return 'Mouse C';
    }
}

// Example usage
const queries = [
    [1, 2, 3],
    [1, 3, 2]
];

for (const query of queries) {
    const result = catAndMouse(...query);
    console.log(result);
}

//pickingNumbers
function pickingNumbers(a) {
    const frequency = new Array(101).fill(0);

    a.forEach(num => {
        frequency[num]++;
    });

    let maxLength = 0;

    for (let i = 1; i < frequency.length; i++) {
        maxLength = Math.max(maxLength, frequency[i] + frequency[i - 1]);
    }

    return maxLength;
}

// Example usage:
const array0 = [4, 6, 5, 3, 3, 1];
const result0 = pickingNumbers(array0);
console.log(result0);  // Output: 3

const array1 = [1, 2, 2, 3, 1, 2];
const result1 = pickingNumbers(array1);
console.log(result1);  // Output: 5

//climbingLeaderboard
function climbingLeaderboard(ranked, player) {
  let uniqueRanked = [...new Set(ranked)]; // Remove duplicate scores and keep the order

  console.log('rank', uniqueRanked)
  let playerRanks = [];

  let j = uniqueRanked.length - 1; // Index for the leaderboard

  for (let i = 0; i < player.length; i++) {
      while (j >= 0 && player[i] >= uniqueRanked[j]) {
          j--;
      }
      playerRanks.push(j + 2); // Add 2 because ranks are 1-based
  }

  return playerRanks;
}

// Sample input
const ranked = [100, 100, 50, 40, 40, 20, 10];
const player = [5, 25, 50, 120, 30];

const result = climbingLeaderboard(ranked, player);
console.log(result);
