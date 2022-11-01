const c = console.log.bind()
//add two numbers
function addTwoNumbers(numberOne, numberTwo) {
    c(numberOne + numberTwo)
}

// addTwoNumbers(190, 10)
//subtract two numbers
function subtractTwoNumbers(numberOne, numberTwo) {
    c(numberOne - numberTwo)
}

//multiply two numbers
function multiplyTwoNumbers(numberOne, numberTwo) {
    c(numberOne * numberTwo)
}

//divide two numbers
function divideTwoNumbers(numberOne, numberTwo) {
    c(numberOne / numberTwo)
}

//check if number is even
// function isEven(a){
//     return(a % 2 === 0)
// }

function isEven(number) {
    if(number % 2 === 0) {
        c(true)
    }else {
        c(false)
    }
}

// isEven(9)

//add numbers in an array

function sumArray(array){
    let sum = 0
    for(let i = 0; i < array.length; i++){
        sum += array[i]
    }

    c(sum)
}
// sumArray([1,2,3,4,5,6,7,8,9,10])
//create an object for students grades
//create a function that takes in a students name and a grade. The function will return true if that student is enrolled in that course, false if not.
const studentGrades = {
    "John": {
        "grade": "A",
        "course" : "Computer Science"
    },
    "Sarah": {
        "grade": "B",
        "course" : "History"
    },
    "Bob": {
        "grade": "D",
        "course" : "Scuba Diving"
    }
}

function courseCheck(name, course){
    for(let i in studentGrades){
        if(i === name){
            if(studentGrades[i].course === course){
                c(true)
            }else{
                c(false)
            }
        }
    }
}

// courseCheck("Bob", "Scuba Diving")

//create two functions, a simple greeting that console.logs hello with a name that function takes in and a goodbye function that takes in a name and console.logs a goodbye message.
//create a function that takes in a name and both of our greeting functions, this function will return the first function if the name matches a condition you set or it will return the second function.
function greeting(name){
    c(`hello, ${name}`)
}

function goodbye(name){
    c(`please leave me alone, ${name}, I am trying to study! I have a big code challenge next week!`)
}

function response(name, functionOne, functionTwo){
    if(name === "Stephen"){
        functionOne(name)
        //greeting("stephen")
    }else{
        functionTwo(name)
        //goodbye("stephen")
    }
}

// response("James", greeting, goodbye)



//fizzbuzz time!
//Create a function that takes in a number and print numbers from 1 to inputted number, but here’s the catch, multiple of three should print “Fizz” and similarly print “Buzz” for multiples of 5 and lastly print “FizzBuzz” for multiples of three and five

function fizzBuzz(a){
    // const array =[];
    for (let i = 1; i < a; i++){
        if (i % 15 == 0) c("FizzBuzz")
        else if (i % 3 == 0) c("Fizz")
        else if (i % 5 == 0) c("Buzz")
        else  c(i)
    }
    // c(array)
}

fizzBuzz(20)