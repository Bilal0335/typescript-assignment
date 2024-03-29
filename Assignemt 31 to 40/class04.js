"use strict";
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// let usernames: string[] = ["admin", "bilal", "john", "charlie", "david"];
// if (usernames.length === 0) {
//     console.log(`We need to find some users!`);
// } else {
//     for (const username of usernames) {
//         if (username === 'admin') {
//             console.log("Hello admin, would you like to see a status report?");
//         }
//         else {
//             console.log(`Hello ${username}, thank you for logging in again.`);
//         }
//     }
// }
// usernames = []
// if (usernames.length === 0) {
//     console.log(`We need to find some users!`);
// }
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// let current_users : string [] = ['admin','bilal','jawad','akmal'];
// let new_users: string [] =['admin','akmal','nabeel','muzammil'];
// let current_users_lower = current_users.map((user)=> user.toLowerCase());
// for (const new_user of new_users) {
//     if (current_users_lower.includes(new_user.toLowerCase())) {
//         console.log("Sorry, " + new_user + " is not available. Please enter a new username.");
//     } else {
//         console.log(new_user + " is available!");
//     }
// }
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
// let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (const number of numbers) {
//     if (number === 1) {
//         console.log(`${number}st`);
//     }
//     else if (number === 2) {
//         console.log(`${number}nd`);
//     }
//     else if (number === 3) {
//         console.log(`${number}rd`);
//     }
//     else {
//         console.log(`${number}th`);
//     }
// }
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
// const favorite_Pizza : string []=["Pepperoni", "Margherita", "Supreme"]
//print the name of each pizza
// console.log(`My Favorite Pizzas:`)
// for (const pizza of favorite_Pizza) {
//     console.log(`${pizza}`);
// }
// console.log("\nMy thoughts on each pizza:");
// for (const pizza of favorite_Pizza) {
//     console.log(`I like ${pizza} pizza!`);
// }
// Adding a line expressing overall love for pizza
// console.log("\nI really love pizza!");
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
// let animal:string [] = ['Cat','Dog','Lion']
// for (const animalPet of animal) {
//     console.log(`${animalPet}`);
// }
// for (const animalPet of animal) {
//     console.log(`A ${animalPet} would make a great pet`);
// }
// console.log(`\nAny of these animals would make a great pet!`);
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
// function make_shirt(size:string,text:string) {
//     console.log(`The ${size} of the shirt and that say ${text}`);
// }
// make_shirt("large","i love TypeScript")
// make_shirt("medium","i need a big shirt.")
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
// function make_shirt(size: string = "Large", message: string = "I love TypeScript") {
//     console.log(`Creating a ${size} shirt with the message: ${message}`);
// }
// make_shirt()
// make_shirt(undefined,"medium")
// make_shirt("hello,world",'small')
// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
// function describe_city(city:string,country:string="Pakistan") {
//     console.log(`${city} is in ${country}`);
// }
// describe_city("Karachi");
// describe_city("Tokyo","Japan");
// describe_city("Lahore","is in Punjab");
// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
// Function to create an album object
function make_album(artist, title, tracks) {
    let album = {
        artist: artist,
        title: title
    };
    // If tracks parameter is provided, add it to the album object
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Creating three album dictionaries
let album1 = make_album("Artist1", "Album1");
let album2 = make_album("Artist2", "Album2", 12); // including number of tracks
let album3 = make_album("Artist3", "Album3");
// Printing each album object
console.log(album1);
console.log(album2);
console.log(album3);
