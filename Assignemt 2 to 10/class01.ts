//! Q2: Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

let personalName: string = "Eric"
console.log(`Hello ${personalName}, would you like to learn some Python today?`);

//! Q3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let student_name: string = "Bilal Hussain"
console.log("To LowerCase: ", student_name.toLowerCase());
console.log("To UpperCase: ", student_name.toUpperCase());
console.log("To TitleCase: ", student_name.replace(/\b\w/g, c => c.toUpperCase()));

//! Q4: Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//! Albert Einstein once said, “A person who never made a mistake never tried anything new.”

let Author_Name: string = "Albert Einstein"
let quote: string = "“A person who never made a mistake never tried anything new.”"
console.log(`${Author_Name} once said, ${quote}`);

//! Q5: Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

let famous_person: string = "Albert Einstein";
let message: string = `${famous_person} once said, ${quote}`
console.log(message);

//! Q6: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

let person_Name: string = `\t\n   Jogn Doe   \t\n`
console.log(`Origional: ${person_Name}`);
console.log(`Stripped: ${person_Name.trim()}`);

//! Q7: Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
//! You should create four lines that look like this:
//! console.log(5 + 3)
//! Your output should simply be four lines with the number 8 appearing once on each line.

//* Addition operation resulting in 8
console.log(5 + 3);

//* Subtraction operation resulting in 8
console.log(10 - 2);

//* Multiplication operation resulting in 8
console.log(4 * 2);

//* Division operation resulting in 8
console.log(64 / 8);

//! Q8: Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

let favorite_number: number = 4;
console.log(`My favorite number is ${favorite_number}`);

//! Q9: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

/*let array1: string [] = ['billa','akmal']
console.log('Array Length : '+array1.length);
*/

//let a:number = 15
// console.log(a);
