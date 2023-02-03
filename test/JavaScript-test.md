# Javascript Test

<small>Just a quick test to test your javascript understanding.</small>

---

## 1) What is ES6?

```bash
//Write your answer here:
One of the version of JavaScript
```

## 2) Name 3 examples of ES6 features

```bash
//Write your answer here:
Promises, Arrow Functions, Template literals
```

## 3) What is the difference between let and const?

```bash
//Write your answer here:
We can reasign a new value to a value which declared using let, but we can not reasign or redeclare a value of const.
```

## 4) How do you access object values? Give 3 examples

```bash
//Write your answer here:
object['property']
object.property
const {property} = object
```

## 5) What does setInterval and setTimeout do?

```bash
//Write your answer here:
setInterval sets the interval until restart the next loop.
setTimeout sets a timer. Once the timer expires, the code will be excuted.
```

## 6) What are promises?

```bash
//Write your answer here:
It has producing part which can take some time. For exapmle, when you are doing, it takes some time.
Then, in the consuming part, the code must wait until the producing code has been completed.
In the consuming part, there are resolve part which will be excuted when the producing code successfully excuted, and reject part which will be excuted when the producing code has some error.

```

## 7) Convert this async function to async/await

```bash
async function displayQuote() {
  const result = getQuote()
  await console.log(result)
}
# getQuote()
#     .then((quote) => {
#         console.log(quote)
#     })
#     .catch((error) => {
#         console.error(error)
#     })
```

## 8) Convert this code to arrow function

```bash
let greeting = (firstname, lastname) => {
  return `Hi ${firstname} ${lastname}`;
}
# function greeting(firstname, lastname){
#     return `Hi ${firstname} ${lastname}`;
# }
```

## 9) Explain what a callback function is

```bash
//Write your answer here:
Callback function passed as an argument to another function.
Callback function will be excuted after the nother function is excuted.
```

## 10) What does the functions pop and push do to an array?

```bash
//Write your answer here:
pop removes an item from the last of an array.
push adds an item to the last of an array.
```

## 11) What is the expected answer to this code?

```bash
let string1 = "";
let object1 = {a:1, b:2, c:3};

for(const property1 in object1){
    string1 += object1[property1]
}

console.log(string1);

123
```

## 12) What data type would Array.map() and Array.filter() return?

```bash
//Write your answer here:
Array
```

## 13) What data type would Array.includes() and Array.some() return?

```bash
//Write your answer here:
Boolean
```

## 14) Write down the 4 main methods of rest api

```bash
//Write your answer here:
GET, POST, PUT(PATCH), DELETE
```

## 15) What is the difference between JSON and a JavaScript object?

```bash
//Write your answer here:
JSON can not contain functions, but JavaScript object can do it.
JSON can be used and created by other language. JavaScript object can only be used in JavaScript.
```
