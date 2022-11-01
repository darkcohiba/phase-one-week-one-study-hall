const c = console.log.bind();


//add two numbers
function add(a, b){
    return a + b;
}

//subtract two numbers
function subtract(a, b){
    return a - b;
}

//multiply two numbers
function multiply(a, b){
    return a * b;
}

//divide two numbers
function divide(a, b){
    return a / b;
}

//function check if number is even
function isEven(a){
    if(a % 2 === 0){
        c(true);
    } else {
        c(false);
    }
}




//add numbers in array
function sumArray(a){
    var sum = 0;
    for(var i = 0; i < a.length; i++){
        sum += a[i];
    }
    c(sum);
}

// console.log(sumArray([1,2,3,4,5,6,7,8,9,10]));

function fizzBuzz(a){
    const array =[]
    for (var i = 1; i < a; i++) {
        if (i % 15 == 0) c("FizzBuzz");
        else if (i % 3 == 0) array.push("Fizz");
        else if (i % 5 == 0) array.push("Buzz");
        else array.push(i);
    }
    console.log(array);
}


//create an for an object for a students grades
const studentGrades = {
    "John": {
        "grade": "A",
        "course": "Computer Science"
    },
    "Sarah": {
        "grade": "B",
        "course": "Biology"
    },
    "Bob": {
        "grade": "C",
        "course": "History"
    }
}

function courseCheck(name, course){
    for(var i in studentGrades){
        if(i === name){
            if(studentGrades[i].course === course){
                c(true);
            }else{
                c(false);
            }
        }
    }
}

// courseCheck("Bob", "Computer Science");

//create a function to greet people
function greeting(name){
    c(`Hello, ${name}!`);
}

function leaveMeAlone(name){
    c(`Please Leave me alone, I am trying to study! ${name}!`);
}



function peopleWeLike(name, callBack, secondCallBack){
    if (name === "Jimmy"){
        callBack(name);
    }else{
        secondCallBack(name);
    }
}

peopleWeLike("max", greeting, leaveMeAlone);