//! Q41.Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

// function show_magicians(magicians:string []) {
//     for (const magician of magicians) {
//         console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
//     }
// }

// const magician: string [] = ['bilal','akmal','muzammil','nabeel']
// show_magicians(magician)

//! Q42.Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

// function make_great(magicians: string[]) {
//     for (let i = 0; i < magicians.length; i++) {
//         magicians[i] = "the Great " + magicians[i];
//     }
// }

// const magician2: string[] = ['junaid', 'akmal', 'ameen'];
// make_great(magician2);
// show_magicians(magician2)

//! Q43.Unchanged Magicians: Start with your work from Exercise 41. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

// function make_great2(magician:string []){
// const greatMagicians:string [] = [];
// for (let i = 0; i < magician.length; i++) {
//     magician.push(magician[i] + " the Great.")

// }
// return greatMagicians;
// }

// const magician3 : string [] = ['usman','ahub','ali']
// const greatMagicians2:string [] = make_great2(magician3)
// show_magicians(magician3)
// show_magicians(greatMagicians2)

//! Q44.Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

// function makeSandwich(...items: string[]): void {
//     console.log("Making a sandwich with the following items:");
//     items.forEach(item => console.log("- " + item));
//     console.log("Enjoy your sandwich!\n");
// }

//* Call the function with different numbers of arguments
// makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
// makeSandwich("Turkey", "Swiss Cheese", "Avocado");
// makeSandwich("Peanut Butter", "Jelly");


//! Q45.Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.


// type car = {
//     manufacture: string,
//     model: string,
//     [key: string]: any;
// }

// function createCar(manufacture:string,model:string,optional:Record<string,any>):car {
//     return{
//         manufacture,
//         model,
//         ...optional,
//     }
// }

// const car = createCar('Toyota', 'Carolla', {color:"silver", year: 2023});
// console.log(car);