function countNumberOfNinesInNumber(number) {
  let count = 0;

  for (let i = 0; i < number.length; i++) {
    const digit = number[i];
    if (9 === digit) {
      count++;
    }
    return count;
  }
}
countNumberOfNinesInNumber();
console.log(countNumberOfNinesInNumber(99.99));

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
