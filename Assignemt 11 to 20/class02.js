"use strict";
//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
// let names:string []  = ["Bilal", "Nabeel", "Akmal"];
// for (const name of names) {
//     console.log(`Name: ${name}`);
// }
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
// let names:string []  = ["Bilal", "Nabeel", "Akmal"];
// let message:string = "Do you like to play football"
// for (const name of names) {
//     console.log(`${name} ${message}?`);
// }
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
// let transportation:string []= ["Car","Motorscyle","Bike"]
// transportation.map(item => console.log(`I like to travel by ${item}`));
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
// let gusetArr : string [] = ["Nouman","Munzir","Bilal"]
// gusetArr.map((items)=>{
// console.log(`Dear ${items} , You are invited to the dinner`);
// })
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
// let gusetArr : string [] = ["Nouman","Munzir","Bilal"]
// let canNotAttend:string ="Nouman";
// let newGuest:string = "Nabeel"
// gusetArr[gusetArr.indexOf(canNotAttend)] = newGuest;
// gusetArr.map((items)=>{
// console.log(`Dear ${items} , You are invited to the dinner.`);
// })
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// let guset :string [] = ['Junaid','Jawad','Jamshed','Hamza']
// let canNotAttends:string = 'Jamshed'
// let newGuest:string ="Zeeshan"
// guset[guset.indexOf(canNotAttends)] = newGuest 
// guset.map((items)=>{
//     console.log(`Dear ${items}, I found bigger dinner table so I am invited more people.`);
// })
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// let nameList: string [] = ['Bilal','Akmal',"Nabeel","Muzammil"]
// console.log(`Due to limited space, only two people can be invite for dinner.`);
//Remove guests unit two only name remain
// while (nameList.length > 2) {
//     const removeList = nameList.pop()
//     console.log(`Dear ${removeList} Your'e no longer invited to dinner.`);
// }
//printing guets invitation to the remaining two guest
// nameList.forEach(guest => {
//     console.log(`Dear ${guest} You're still invited to the dinner.`);
// });
//remover the last name two people
// nameList.pop()
// nameList.pop()
// console.log(`Final guest list: ${nameList}`);
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// Store locations in an array
// let placesToVisit: string[] = ["Tokyo", "Paris", "Machu Picchu", "Bora Bora", "Rome"];
// // Print array in original order
// console.log("Original order:");
// console.log(placesToVisit);
// // Print array in alphabetical order without modifying the original list
// console.log("\nAlphabetical order:");
// console.log([...placesToVisit].sort());
// // Show that the array is still in its original order
// console.log("\nStill in original order:");
// console.log(placesToVisit);
// // Print array in reverse alphabetical order without changing the original list
// console.log("\nReverse alphabetical order:");
// console.log([...placesToVisit].sort().reverse());
// // Show that the array is still in its original order
// console.log("\nStill in original order:");
// console.log(placesToVisit);
// // Reverse the order of the list
// placesToVisit.reverse();
// console.log("\nReversed order:");
// console.log(placesToVisit);
// // Reverse the order of the list again
// placesToVisit.reverse();
// console.log("\nReversed back to original order:");
// console.log(placesToVisit);
// // Sort the array in alphabetical order
// placesToVisit.sort();
// console.log("\nSorted in alphabetical order:");
// console.log(placesToVisit);
// // Sort the array in reverse alphabetical order
// placesToVisit.sort((a, b) => b.localeCompare(a));
// console.log("\nSorted in reverse alphabetical order:");
// console.log(placesToVisit);
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
// Guests List
// let guests: string[] = ["Albert Einstein", "Nikola Tesla", "Isaac Newton"];
// Print message indicating the number of people invited to dinner
// console.log(`Number of people invited to dinner: ${guests.length}`);
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
// Define an array containing various items
// let items: string[] = [
//     "Mount Everest",   // Mountain
//     "Amazon River",    // River
//     "France",          // Country
//     "New York City",   // City
//     "English",         // Language
//     "Great Barrier Reef" // Reef
// ];
// // Print the list of items
// console.log("List of items:");
// for (let item of items) {
//     console.log(item);
// }
