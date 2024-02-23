// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// Define types for items
// type Item = {
//     name: string;
//     category: string;
//     price: number;
// };

// // Create objects containing items
// const item1: Item = {
//     name: "Laptop",
//     category: "Electronics",
//     price: 999
// };

// const item2: Item = {
//     name: "Book",
//     category: "Education",
//     price: 20
// };

// const item3: Item = {
//     name: "Shirt",
//     category: "Clothing",
//     price: 30
// };

// // Print out the objects
// console.log("Item 1:", item1);
// console.log("Item 2:", item2);
// console.log("Item 3:", item3);


// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

// const colors: string[] = ["red", "green", "blue"];

// // Accessing an index that doesn't exist
// console.log(colors[3]); // This will produce an index error


// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.


// let x = 5;
// let y = 10;

// // Test 1: Check if x is equal to 5
// console.log("Is x == 5? I predict True.");
// console.log(x == 5);

// // Test 2: Check if y is greater than x
// console.log("Is y > x? I predict True.");
// console.log(y > x);

// // Test 3: Check if x is less than or equal to 5
// console.log("Is x <= 5? I predict True.");
// console.log(x <= 5);

// // Test 4: Check if y is not equal to 5
// console.log("Is y != 5? I predict True.");
// console.log(y != 5);

// // Test 5: Check if x is equal to 10
// console.log("Is x == 10? I predict False.");
// console.log(x == 10);

// // Test 6: Check if y is less than 10
// console.log("Is y < 10? I predict False.");
// console.log(y < 10);

// // Test 7: Check if x is greater than y
// console.log("Is x > y? I predict False.");
// console.log(x > y);

// // Test 8: Check if y is equal to 10
// console.log("Is y == 10? I predict True.");
// console.log(y == 10);

// // Test 9: Check if x is not equal to 5
// console.log("Is x != 5? I predict False.");
// console.log(x != 5);

// // Test 10: Check if y is less than or equal to 9
// console.log("Is y <= 9? I predict False.");
// console.log(y <= 9);



// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

// let string1 = "hello";
// let string2 = "world";
// let number1 = 10;
// let number2 = 20;
// let array = [1, 2, 3, 4, 5];

// // Tests for equality and inequality with strings
// console.log("Is string1 equal to 'hello'? I predict True.");
// console.log(string1 === 'hello');
// console.log("Is string1 not equal to string2? I predict True.");
// console.log(string1 !== string2);

// // Tests using the lower case function
// console.log("Is string1 in lower case equal to 'hello'? I predict True.");
// console.log(string1.toLowerCase() === 'hello');

// // Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// console.log("Is number1 equal to 10? I predict True.");
// console.log(number1 === 10);
// console.log("Is number1 less than number2? I predict True.");
// console.log(number1 < number2);
// console.log("Is number2 greater than or equal to 20? I predict True.");
// console.log(number2 >= 20);

// // Tests using "and" and "or" operators
// console.log("Is number1 less than 20 and number2 greater than 15? I predict True.");
// console.log(number1 < 20 && number2 > 15);
// console.log("Is number1 less than 5 or number2 greater than 30? I predict False.");
// console.log(number1 < 5 || number2 > 30);

// // Test whether an item is in an array
// console.log("Is 3 in the array? I predict True.");
// console.log(array.includes(3));

// // Test whether an item is not in an array
// console.log("Is 6 not in the array? I predict True.");
// console.log(!array.includes(6));


// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

// // Passing version (alien color is green):
// let alien_color: string = 'green';

// if (alien_color === 'green') {
//     console.log("Congratulations! You just earned 5 points.");
// }

// // Failing version (alien color is not green):
// let alien_color :string= 'red'; // Assuming alien color is red

// if (alien_color === 'green') {
//     console.log("Congratulations! You just earned 5 points."); // This code block won't execute because the condition is false
// }



// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.

// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.

// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.

// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.

// • If the person is age 65 or older, print a message that the person is an elder.

// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.