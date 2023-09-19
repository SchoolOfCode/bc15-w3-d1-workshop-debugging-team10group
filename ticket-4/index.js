function getGradeFromPoints(points) {
  if ( points >= 90) {
    return "A";
  } else if (points >= 70) {
    return "B";
  } else if (points >= 50) {
    return "C";
  } else if (points >= 40) {
    return "D";
  } else if (points < 40)
  return "E";
}

const grade = getGradeFromPoints(98);
//console.log (grade + " " + "should be A");
console.log(grade);

// fixed this bug by correcting an re writitng some of the signs 