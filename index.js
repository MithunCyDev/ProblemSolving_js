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


