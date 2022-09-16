// Task 1

function studentGrade(score) {
  switch (true) {
    case(score == 100):
      console.log("perfect score");
      break;
    case(score >= 70):
      console.log("passed");
      break;
    case(score < 70 && score > 0):
      console.log("failed");
      break;
    case(score <= 0):
      console.log("invalid score");
      break;
    default:
      console.log("invalid score");
      break;
  };
}

studentGrade(100)

// Task 2

function numEvenOdd(num) {
  switch(true) {
    case(num % 2 == 0):
      console.log("even");
      break;
    case(num % 2 == 1):
      console.log("odd");
      break;
    case(num == 0):
      console.log("even");
      break;
    case(num < 0):
      console.log("invalid number");
      break;
    default:
      console.log("invalid number");
  };
}

numEvenOdd(48);

// Task 3

function numPosNeg(num2) {
  switch (true) {
    case(num2 > 0):
      console.log("positive");
      break;
    case(num2 < 0):
      console.log("negative");
      break;
    case(num2 == 0):
      console.log("zero");
      break;
    default:
      console.log("invalid number");
      break;
  };
}

numPosNeg(0);

// Task 4

function personAge(age) {
  if(age <= 19 && age > 0) {
    console.log("minor");
  }else if(age > 19) {
    console.log("adult");
  }else{
    console.log("invalid person");
  };
}

personAge(19)

// Task 5

function concatStr(str1, str2) {
  if(typeof str1 === "string" && typeof str2 === "string") {
    console.log(str1 + " " + str2);
  }else{
    console.log("invalid strings");
  };
}

concatStr("hello", "world");