/*function countNumberOfNinesInNumber(number) {
  let count = 0;

  for (let i = 0; i < number.toString().length; i++) {
    const digit = number.toString()[i];
    if (9 === digit) {
      count++;
    }
    return count;
  }
}

console.log(countNumberOfNinesInNumber(99.99)); */

// function countNumberOfNinesInNumber(number) {
//   let count = 0;

//   for (let i = 0; i < number.length; i++) {
//     const digit = number[i];
//     if (9 === digit) {
//       count++;
//     }
//   }

//   return count;
// }

function countNumberOfNinesInNumber(number) {
  let count = 0;
  const numberString = number.toString();

  for (let i = 0; i < numberString.length; i++) {
    const digit = numberString[i];
    if ("9" === digit) {
      count++;
    }
  }

  return count;
}

console.log(countNumberOfNinesInNumber(99.99));


