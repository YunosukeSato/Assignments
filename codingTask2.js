// Task 1
let MatScore = 80;
let SimonScore = 45;
let lowerLimit = 51;

if (MatScore >= 51 && SimonScore >= 51) {
  console.log(`Mat's score is ${MatScore}, Simon's score is ${SimonScore}`);
} else if (MatScore >= 51 || SimonScore >= 51) {
  console.log(`Mat's score is ${MatScore}, Simon's score is ${SimonScore}`);
  if (MatScore >= 51) {
    console.log(`Mat is passed. His score is ${MatScore}.`);
  } else if (SimonScore >= 51) {
    console.log(`Simon is passed. His score is ${SimonScore}.`);
  }
} else {
  console.log('Both students are failed');
}

// Task 2
let students = [
  ['John', 47, 46],
  ['Bob', 23, 24],
  ['Nick', 40, 35],
  ['Alex', 44, 45],
];

const degrees = ['A', 'B', 'C', 'D', 'E'];
const passingLimit = [91, 81, 71, 61, 51];

function culcTotal(name, score1, score2) {
  let totalScore = score1 + score2;
  console.log(`${name} is got ${totalScore}`);
  return totalScore;
}

function checkDegree(students) {
  for (i = 0; i < students.length; i++) {
    let total = culcTotal(students[i][0], students[i][1], students[i][2]);
    for (j = 0; j < passingLimit.length; j++) {
      if (total >= passingLimit[j]) {
        console.log(`${students[i][0]}'s degree is ${degrees[j]}.`);
        break;
      } else if (total <= 51) {
        console.log(`${students[i][0]} couldn't get degree`);
        break;
      }
    }
  }
}

checkDegree(students);
