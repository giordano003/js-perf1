//1. Differentiation of let, const, and var in JavaScript.

//var
//var is function scoped when it is declared within a function. This means that it is available and can be accessed only within that function.
//Here is the example.

function greet() {
    var greeting = "Hello, World!"; // 'greeting' is function-scoped

    if (true) {
        var name = "Jordan"; // 'name' is also function-scoped, not block-scoped
        console.log(greeting + " My name is " + name);  // Output: Hello, World! My name is Jordan
    }

    // 'name' is still accessible here because 'var' is function-scoped, not block-scoped
    console.log("Accessing name outside the block: " + name);  // Output: Accessing name outside the block: Jordan
}

greet();

// 'greeting' is not accessible outside the function
console.log(greeting); // ReferenceError: greeting is not defined


//let
//A block is a chunk of code bounded by {}. A block lives in curly braces. Anything within curly braces is a block.
//So a variable declared in a block with let is only available for use within that block. Let me explain this with an example:

var greeting = "say Hi";
var times = 4;

if (times > 3) {
    var hello = "say Hello instead";
    console.log(hello);  // Output: "say Hello instead"
}

console.log(hello);  // Output: "say Hello instead" (because var is function-scoped, not block-scoped)


//const
//Like let declarations, const declarations can only be accessed within the block they were declared.
//The value of a variable declared with const remains the same within its scope. It cannot be updated or re-declared. So if we declare a variable with const, we can't do this:
const greeting = "say Hi";
    greeting = "say Hello instead";// error: Assignment to constant variable.

//And we do this instead.
greeting.message = "say Hello instead";       //This will update the value of greeting.message without returning errors.


//Refference: https://www.freecodecamp.org/news/var-let-and-const



//2. Concept of Falsy Values in JavaScript.
//A falsy (sometimes written falsey) value is a value that is considered false when encountered in a Boolean context.
//Falsy values are those that automatically evaluate to false when used in conditions, logical operations, or other contexts where Boolean logic is expected.



//false: The boolean value false.
let isOnline = false

function checkStatus(status) {
  return Boolean(status) ? "ONLINE" : "OFFLINE"
}

checkStatus(isOnline) // "OFFLINE"
//When you pass the isOnline variable to the checkStatus function, it returns the string "OFFLINE".  And this is because the value is false in this context


//0: The number zero.
let unreadMessages = 0
let hasUnreadMessages = Boolean(unreadMessages)
console.log(hasUnreadMessages) // false
//This example checks if a user has unread messages by converting the unreadMessages variable to a Boolean. If unreadMessages is zero, hasUnreadMessages will be false.


//"" or '' or ````: An empty string.
let userInput = "";
let defaultText = "No input provided";

let displayText = Boolean(userInput) || defaultText;

console.log(displayText); // No input provided

//This example uses the OR operator (||) to set displayText. It assigns userInput if it's truthy, or defaultText if userInput is falsy, as in this case.


//Refference:https://www.freecodecamp.org/news/what-are-falsey-values-in-javascript/