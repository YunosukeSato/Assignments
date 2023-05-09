import { mySum } from "./mySum";

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = mySum(...myArr);

console.log(result);

const mySecondArr = myArr.map((num) => {
  num * 2;
});

const checkAve = (...numbers) => {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  const average = sum / numbers.length;
  return average;
};

const mySecondArrAve = checkAve(...mySecondArr);

const aboveAve = mySecondArr.filter((num) => num > mySecondArrAve);

console.log(aboveAve);

setTimeout(() => {
  console.log("Goodbye");
}, 3000);

const Employee = {
  name: "Yuno",
  email: "ILoveJapan@gmail.com",
  department: "Web development",
  startDate: "April 2nd",
};

const { name, email } = Employee;
const Person = { name, email };
