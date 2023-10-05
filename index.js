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


//sockMerchant
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

//pageCount
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

//getMoneySpent
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

//HurdleRace
function hurdleRace(k, height) {
    const maxHurdle = Math.max(...height);
    const dosesNeeded = Math.max(0, maxHurdle - k);
    return dosesNeeded;
}

// Example Usage
const k = 4;
const height = [1, 6, 3, 5, 2];
const doses = hurdleRace(k, height);
console.log(doses); // Output: 2

//designerPdfViewer
function designerPdfViewer(h, word) {
    let maxHeight = 0;
    for (let i = 0; i < word.length; i++) {
        const charIndex = word.charCodeAt(i) - 97; // ASCII value of 'a' is 97
        maxHeight = Math.max(maxHeight, h[charIndex]);
    }
    const highlightArea = maxHeight * word.length;
    return highlightArea;
}

// Example Usage
const heights = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
const word = "abc";
const area = designerPdfViewer(heights, word);
console.log(area); // Output: 9



const result = climbingLeaderboard(ranked, player);
console.log(result);

//utopianTree
function utopianTree(n) {
    let height = 1;
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            height *= 2;
        } else {
            height += 1;
        }
    }
    return height;
}

// Example usage:
console.log(utopianTree(0)); // Output: 1
console.log(utopianTree(1)); // Output: 2
console.log(utopianTree(4)); // Output: 7

//angryProfessor
function angryProfessor(k, a) {
    let onTimeStudents = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] <= 0) {
            onTimeStudents++;
        }
    }
    
    return onTimeStudents >= k ? "NO" : "YES";
}

// Example usage:
console.log(angryProfessor(3, [-1, -3, 4, 2])); // Output: "YES"
console.log(angryProfessor(2, [0, -1, 2, 1])); // Output: "NO"

//hourglassSum
function hourglassSum(arr) {
    let maxSum = -Infinity;

    for (let i = 0; i <= 3; i++) {
        for (let j = 0; j <= 3; j++) {
            let currentSum = 
                arr[i][j] + arr[i][j+1] + arr[i][j+2] +
                            arr[i+1][j+1] +
                arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];

            if (currentSum > maxSum) {
                maxSum = currentSum;
            }
        }
    }

    return maxSum;
}

const arr = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
];

const maxHourglassSum = hourglassSum(arr);
console.log(maxHourglassSum); // Output: 19

// NUmber to Binary, 8-bit
function numberTobinary(num){
    let binaryTree = num.toString(2);
    let binaryDigit = "0".repeat(8 - binaryTree.length);
    return binaryTree + binaryDigit
}

const number = 43;
const result = numberTobinary(number)
console.log(result)

//dynamicArray  DataStructure
function dynamicArray(n, queries) {
    // Initialize an array of empty arrays (n of them)
    let arr = Array.from({ length: n }, () => []);
    
    // Initialize an empty array to store answers
    let answers = [];
    
    // Initialize a variable to keep track of the last answer
    let last_answer = 0;

    // Loop through the queries
    for (let i = 0; i < queries.length; i++) {
        // Split the current query into an array of numbers
        let [q, x, y] = queries[i].map(Number);

        // Process query type 1
        if (q === 1) {
            // Calculate the index based on XOR operation and modulo n
            let idx = (x ^ last_answer) % n;
            // Append y to the array at index idx
            arr[idx].push(y);
        } 
        // Process query type 2
        else if (q === 2) {
            // Calculate the index based on XOR operation and modulo n
            let idx = (x ^ last_answer) % n;
            // Update last_answer with the value from the array
            last_answer = arr[idx][y % arr[idx].length];
            // Store the new value of last_answer in the answers array
            answers.push(last_answer);
        }
    }

    // Return the array of answers
    return answers;
}

//viralAdvertising
function viralAdvertising(n) {
    let shared = 5;
    let liked = Math.floor(shared / 2);
    let cumulativeLikes = liked;

    for (let day = 2; day <= n; day++) {
        shared = liked * 3; // Each person shares with 3 friends
        liked = Math.floor(shared / 2);
        cumulativeLikes += liked;
    }

    return cumulativeLikes;
}

// Example usage:
const dayNumber = 3;
const result = viralAdvertising(dayNumber);
console.log(result); // Output: 9

//circularArrayRotation
function circularArrayRotation(a, k, queries) {
    const result = [];

    for (let i = 0; i < queries.length; i++) {
        const newIndex = (queries[i] - (k % a.length) + a.length) % a.length;
        result.push(a[newIndex]);
    }

    return result;
}

// Example usage:
const a = [1, 2, 3];
const k = 2;
const queries = [0, 1, 2];
const result = circularArrayRotation(a, k, queries);
console.log(result); // Output: [2, 3, 1]

//permutationEquation
function permutationEquation(p) {
    const result = [];

    for (let x = 1; x <= p.length; x++) {
        const index1 = p.indexOf(x) + 1; // Find index of x in p
        const index2 = p.indexOf(index1) + 1; // Find index of index1 in p
        result.push(index2);
    }

    return result;
}

// Example usage:
const p1 = [2, 3, 1];
const result1 = permutationEquation(p1);
console.log(result1); // Output: [2, 3, 1]

const p2 = [4, 3, 5, 1, 2];
const result2 = permutationEquation(p2);
console.log(result2); // Output: [1, 3, 5, 4, 2]


//findDigits
function findDigits(n) {
    let count = 0;
    let digits = n.toString().split('').map(Number);
    digits.forEach(element => {
        if(element !== 0 && n % element === 0 ){
            count++
        }
    });
 
    return count;
}

// Test cases
const testCases = [12, 1012];

for (let testCase of testCases) {
    console.log(findDigits(testCase));
    console.log(typeof testCase)
}

//extraLongFactorials
function extraLongFactorials(n) {
    let result = BigInt(1);
    for (let i = 2n; i <= BigInt(n); i++) {
        result *= i;
        console.log(i)
    }

    console.log(result.toString());
}

// Example usage:
extraLongFactorials(25);

//appendAndDelete
function appendAndDelete(s, t, k) {
    let commonLength = 0;

    // Find the length of the common prefix
    for (let i = 0; i < Math.min(s.length, t.length); i++) {
        if (s[i] === t[i]) {
            commonLength++;
        } else {
            break;
        }
    }

    // Calculate the total operations needed
    let totalOperations = s.length + t.length - 2 * commonLength;

    // Check if it's possible
    if (totalOperations <= k && (totalOperations - k) % 2 === 0 || k >= s.length + t.length) {
        return "Yes";
    } else {
        return "No";
    }
}

// Example usage
console.log(appendAndDelete("hackerhappy", "hackerrank", 9)); // Output: Yes
console.log(appendAndDelete("aba", "aba", 7)); // Output: Yes

//countSquareIntegers
function countSquareIntegers(a, b) {
    let count = 0;
    let current = Math.ceil(Math.sqrt(a));

    while (current * current <= b) {
        count++;
        current++;
    }

    return count;
}

// Example usage
const testCases = [
    { a: 3, b: 9 },
    { a: 17, b: 24 }
];

for (const testCase of testCases) {
    const result = countSquareIntegers(testCase.a, testCase.b);
    console.log(result);
}

//libraryFine
function libraryFine(d1, m1, y1, d2, m2, y2) {
    if (y1 > y2) {
        return 10000; // Fixed fine for returning after the calendar year
    } else if (y1 === y2 && m1 > m2) {
        return 500 * (m1 - m2); // Fine for returning after the expected return month
    } else if (y1 === y2 && m1 === m2 && d1 > d2) {
        return 15 * (d1 - d2); // Fine for returning after the expected return day
    }
    return 0; // No fine if returned on or before the expected return date
}

// Example usage
const returnedDate = [9, 6, 2015];
const dueDate = [6, 6, 2015];

const fine = libraryFine(...returnedDate, ...dueDate);
console.log(fine);

//cutTheSticks
function cutTheSticks(arr) {
    let result = [];
    while (arr.length > 0) {
        result.push(arr.length);
        const min = Math.min(...arr);
        arr = arr.filter(stick => stick > min).map(stick => stick - min);
    }
    return result;
}

// Example usage
const sticks1 = [5, 4, 4, 2, 2, 8];
const sticks2 = [1, 2, 3, 4, 3, 3, 2, 1];

const result1 = cutTheSticks(sticks1);
const result2 = cutTheSticks(sticks2);

console.log(result1); // Output: [6, 4, 2, 1]
console.log(result2); // Output: [8, 6, 4, 1]

//nonDivisibleSubset
function nonDivisibleSubset(S, k) {
    let count = Array(k).fill(0);
  
    for (let i = 0; i < S.length; i++) {
        count[S[i] % k]++;
    }
  
    let result = Math.min(count[0], 1);
  
    for (let i = 1; i <= k / 2; i++) {
        if (i !== k - i) {
            result += Math.max(count[i], count[k - i]);
        }
    }
  
    if (k % 2 === 0) {
        result++;
    }
  
    return result;
}

// Example usage:
const S = [1, 7, 2, 4];
const k = 3;
const result = nonDivisibleSubset(S, k);
console.log(result); // Output: 3


//repeatedString
function repeatedString(s, n) {
    
    const count_a_in_original = (s.match(/a/g) || []).length;

    const full_repeats = Math.floor(n / s.length);

    const remaining_chars = n % s.length;

    const count_a_in_remaining = (s.slice(0, remaining_chars).match(/a/g) || []).length;

    const total_a = (count_a_in_original * full_repeats) + count_a_in_remaining;

    return total_a;
}

// Sample Input 0
const result_0 = repeatedString("aba", 10);
console.log(result_0); // Output: 7

// Sample Input 1
const result_1 = repeatedString("a", 1000000000000);
console.log(result_1); // Output: 1000000000000


function jumpingOnClouds(c) {
    let jumps = 0;
    let i = 0;

    while (i < c.length - 1) {
        if (i + 2 < c.length && c[i + 2] === 0) {
            i += 2;
        } else {
            i++;
        }
        jumps++;
    }

    return jumps;
}

// Sample Input 0
const clouds = [0, 0, 1, 0, 0, 1, 0];
const result = jumpingOnClouds(clouds);
console.log(result); // Output: 4


function equalizeArray(arr) {
    let frequencyMap = new Map();

    // Count the frequency of each element
    for (let i = 0; i < arr.length; i++) {
        if (frequencyMap.has(arr[i])) {
            frequencyMap.set(arr[i], frequencyMap.get(arr[i]) + 1);
        } else {
            frequencyMap.set(arr[i], 1);
        }
    }

    // Find the element with maximum frequency
    let maxFrequency = 0;
    frequencyMap.forEach(value => {
        if (value > maxFrequency) {
            maxFrequency = value;
        }
    });

    // Calculate the minimum deletions
    return arr.length - maxFrequency;
}

// Sample Input
let arr = [3, 3, 2, 1, 3];
let result = equalizeArray(arr);

// Output
console.log(result); // Output: 2

//queensAttack
function queensAttack(n, k, r_q, c_q, obstacles) {
    // Define directions: up, down, left, right, up-left, up-right, down-left, down-right
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [-1, 1], [1, -1], [1, 1]];
    let attacks = 0;
    
    // Create a set to store obstacle positions for faster lookup
    const obstaclesSet = new Set(obstacles.map(obstacle => obstacle.join(',')));
    
    for (const direction of directions) {
        let [dr, dc] = direction;
        let row = r_q + dr;
        let col = c_q + dc;
        
        while (row >= 1 && row <= n && col >= 1 && col <= n) {
            const position = `${row},${col}`;
            if (obstaclesSet.has(position)) {
                break;
            }
            attacks++;
            row += dr;
            col += dc;
        }
    }
    
    return attacks;
}

// Sample Input 0
const n0 = 4;
const k0 = 0;
const r_q0 = 4;
const c_q0 = 4;
const obstacles0 = [];

const result0 = queensAttack(n0, k0, r_q0, c_q0, obstacles0);
console.log(result0); // Output: 9

// Sample Input 1
const n1 = 5;
const k1 = 3;
const r_q1 = 4;
const c_q1 = 3;
const obstacles1 = [[5, 5], [4, 2], [2, 3]];

const result1 = queensAttack(n1, k1, r_q1, c_q1, obstacles1);
console.log(result1); // Output: 10

//acmTeam
function acmTeam(topic) {
    let maxTopics = 0;
    let maxTeams = 0;

    for (let i = 0; i < topic.length; i++) {
        for (let j = i + 1; j < topic.length; j++) {
            let knownTopics = 0;
            for (let k = 0; k < topic[i].length; k++) {
                if (topic[i][k] === '1' || topic[j][k] === '1') {
                    knownTopics++;
                }
            }
            if (knownTopics > maxTopics) {
                maxTopics = knownTopics;
                maxTeams = 1;
            } else if (knownTopics === maxTopics) {
                maxTeams++;
            }
        }
    }

    return [maxTopics, maxTeams];
}

// Example usage
const topics = [
    "10101",
    "11100",
    "11010",
    "00101"
];

const result = acmTeam(topics);
console.log(result[0]); // Maximum topics known
console.log(result[1]); // Number of teams with maximum topics


//taumBday
function taumBday(b, w, bc, wc, z) {
    // Write your code here
    const gifts = BigInt(b) + BigInt(w);

    const whiteGifts = gifts * BigInt(wc) + (BigInt(b) * BigInt(z));
    const blackGifts = gifts * BigInt(bc) + (BigInt(w) * BigInt(z));

    let min = BigInt(b) * BigInt(bc) + BigInt(w) * BigInt(wc);

    (blackGifts < min) && (min = blackGifts);
    (whiteGifts < min) && (min = whiteGifts);

    return min;
}

//encryption
function encryption(s) {
    let value = Math.ceil(Math.sqrt([...s].length));
  
    return [...s].reduce((target, item, index) => {
        target[index % value] += item;
  
        return target;
      }, 
      new Array(value).fill("")).join(" ");
  }


  const result = encryption("Hello")
  console.log(result)
