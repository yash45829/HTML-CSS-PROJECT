// using ternary operator to find highest marks among five student's marks
let marks = [76,52,74,95,82];

let maxMarks = marks[0] > marks[1] &&
marks[0] > marks[2] &&
marks[0] > marks[3] &&
marks[0] > marks[4]
  ? marks[0]
  : marks[1] > marks[2] && marks[1] > marks[3] && marks[1] > marks[4]
  ? marks[1]
  : marks[2] > marks[3] && marks[2] > marks[4]
  ? marks[2]
  : marks[3] > marks[4]
  ? marks[3]
  : marks[4];

  console.log(maxMarks)