
// QUESTION 02

// let personName:string = "Wajiha"

// console.log(`Hello ${personName}, would you like to learn some python today?`);

// QUESTION 03

// let personName : string = "Wajiha"
// console.log(personName.toLowerCase());
// console.log(personName.toUpperCase());

// // console.log(personName.totitleCase());


// QUESTION 04

// let quote = " “A person who never made a mistake never tried anything new.” "
// let author = "Albert Einstein"
// console.log(`${author} once said: ${quote}`)

// QUESTION 05


// QUESTION 06


// QUESTION 07

// let addition = 6 + 2;
// let subtraction = 10 - 2;
// let multiplication = 4 * 2;
// let division = 16 / 2;
// console.log(addition);
// console.log(subtraction);
// console.log(multiplication);
// console.log(division);


// QUESTION 08

// QUESTION 09

// let favNumber = 5;
// console.log(`The favorite Number is ${favNumber}`);


// QUESTION 10

// let friends : string[] = ["Arooj", "Wajiha","Safdar"]

// for(let i = 0; i < friends.length; i++){
//     console.log(i);
// }

// Question 11

// let names: string[] = ['Shaheer', 'Arooj', 'Wajiha'];

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// QUESTION 12

// let names: string[] = ['Shaheer', 'Arooj', 'Wajiha'];

// for (let i = 0; i < names.length; i++) {
//   console.log(`Hi, ${names[i]} I am planning a vaccation, are you coming`);
// }

// Question 13

// let favTransport : string[] =["Honda","Yamaha", "Kawasaki"]
// console.log(favTransport[0] +" "+ "is a realiable motorcycle than China bikes");
// console.log(favTransport[1] +" "+"Too expensive");
// console.log(favTransport[2] +" "+ "old generation bike");

// Question 14

// let invitation : string[] = ["Shaheer", "Arooj", "Wajiha"];
// for(let i = 0; i < invitation.length; i++){
//     console.log(`${invitation[i]}, Please have a dinner in my house at 9 pm`);
// }


// QUESTION 15

// let invitation : string[] = ["Shaheer", "Arooj", "Wajiha"];

// invitation.shift()

// console.log("I just came to know that Shaheer is unable to attend dinner");

// invitation = ["Safdar", "Arooj", "Wajiha"]

// for(let i = 0; i < invitation.length; i++){
//     console.log(`${invitation[i]}, Shaheer is busy. But you guys please come `);
// }

// Question 16


// let invitation : string[] = ["Shaheer", "Arooj", "Wajiha"];

// invitation.shift()

// // console.log("I just came to know that Shaheer is unable to attend dinner");

// invitation = ["Safdar", "Arooj", "Wajiha"]

// // console.log("I found a bigger dinner table");

// invitation.unshift("Sharjeel");
// invitation.push("Shummas")
// // invitation.append("Aqib")

// for(let i = 0; i < invitation.length; i++){
//     console.log(`Dear ${invitation[i]}, Please have a dinner with us at my house.`);
// }

// Question 17:

// let invitation : string[] = ["Shaheer", "Arooj", "Wajiha"];


// invitation = ["Safdar", "Arooj", "Wajiha"]

// invitation.unshift("Sharjeel");
// invitation.push("Shummas")
// console.log("I am only inviting Arooj and Safdar");

// invitation.pop();
// invitation.pop();
// invitation.shift();

// console.log("Shaheer, Sharjeel, Shummas, Wajiha. I am sorry due to some reasons I am not inviting you for dinner tonight");

// invitation.pop()
// invitation.pop()
// console.log(invitation);


// QUESTION 18

let places: string[] = ["Macca","Quetta","Lahore","Kashmir","Madina","Abtabad"];

// console.log("1- original order: ",places);
// console.log("2- alphabetic order: ",[...places].sort())//I understand that the concept of the spread operator and its purpose might be a bit confusing. Let me explain it in a simpler way.

// Imagine you have a box of colored balls, which represents the places array. Now, you want to arrange these balls in a certain order, but you don’t want to change their original arrangement in the box.
// Using the spread operator [...places] is like taking out each ball and placing them into a new box. This way, you have two boxes with the same set of balls, but arranged differently. The new box represents the new array created by the spread operator.
// When you use .sort() on the new box, you’re rearranging the balls in that box only, without affecting the original box. This is useful because sometimes you want to keep the original order intact for other purposes, while still being able to work with a sorted version of the same set of items.
// In programming, especially when dealing with arrays, it’s often important to avoid changing the original data unless it’s necessary. This practice helps prevent unexpected bugs and makes your code easier to understand and maintain.
// I hope this analogy makes it clearer. If you have any more questions or need further examples, feel free to ask!

// console.log("3- original order after sorting",places)
// console.log("4- reverse order: ", [...places].reverse())
// console.log("5- original order after reverse order: ", places)
// console.log("6- Reverse the order of list: ", places.reverse())
// console.log("7- Reverse the order of list again must back to original order: ", places.reverse())
// console.log("8- Sort array in alphabatical order: ", places.sort())
// console.log("10- Sort array in alphabatical order: ", places.reverse())


// QUESTION 19

// let dinnerInvitation:string[] = ["Shaheer", "Arooj","Wajiha","Shummas","Sharjeel"]

// console.log(dinnerInvitation.length +" " + "friends are inviting for dinner");


// Question 20 


// let cities:string[] = ["Ziyarath", "Quetta", "Tumaagh", "Kashmir", "Naran","Kagaan","Lahore"]

// for(let i = 0; i < cities.length; i++){
//     console.log(cities[i] + " " + "I have visited these cities in Pakistan. They are very beautifull");
// }


// Question 21

// let userInformation = {
//     name : "Shaheer",
//     email : "niazi2822@gmail.com",
//     mobile_No :"0123265232",
//     Hobby : "Coding",
//     convence : "Bike",
//     profession : "Finance Manager"
// }
 
// console.log(userInformation);

// QUESTION 22

// let myArr:string[] = ["Shaheer", "Arooj","Wajiha","Safdar"]

// console.log(myArr[5]);
// console.log(myArr[myArr.length - 1]);





// Define a variable 'car'
// let car = 'subaru';

// // Test 1: Is car equal to 'subaru'? (Should be true)
// console.log("Is car == 'subaru'? I predict True.");
// console.log(car == 'subaru');

// // Test 2: Is car equal to 'honda'? (Should be false)
// console.log("Is car == 'honda'? I predict False.");
// console.log(car == 'honda');

// // Test 3: Is car not equal to 'toyota'? (Should be true)
// console.log("Is car != 'toyota'? I predict True.");
// console.log(car != 'toyota');

// // Test 4: Is car not equal to 'subaru'? (Should be false)
// console.log("Is car != 'subaru'? I predict False.");
// console.log(car != 'subaru');

// // Test 5: Is car length greater than 5? (Should be false)
// console.log("Is car length > 5? I predict False.");
// console.log(car.length > 5);

// // Test 6: Is car length less than or equal to 7? (Should be true)
// console.log("Is car length <= 6? I predict True.");
// console.log(car.length <= 6);

// // Test 7: Is car uppercase? (Should be false)
// console.log("Is car uppercase? I predict False.");
// console.log(car === car.toUpperCase());

// // Test 8: Is car lowercase? (Should be true)
// console.log("Is car lowercase? I predict True.");
// console.log(car === car.toLowerCase());

// // Test 9: Is car a string? (Should be true)
// console.log("Is car a string? I predict True.");
// console.log(typeof car === 'string');

// // Test 10: Is car a number? (Should be false)
// console.log("Is car a number? I predict False.");
// console.log(typeof car === 'number');

// ------------------------------------------------------
// QUESTION : 24

// TEST 1 equality and inequality with strings

// type fruit = "apple" | "bananna"

// let myFruit : fruit
// myFruit = "apple"
// myFruit = "bananna"

// console.log(myFruit === myFruit);
// console.log(myFruit !== myFruit);

// let car1 = "Aulto";
// let car2 = "Mehran";
// let car3 = "Honda Civic";
// let car4 = "Toyota Vitz";

// console.log(car1 === car2);
// console.log(car3 !== car4);

// TEST 2 LOWER CASE FUNCTION 

// const city = 'New York';
// const lowercaseCity = city.toLowerCase();
// console.log(`Is ${city} equal to ${lowercaseCity}? ${city === lowercaseCity}`);

// const city = "KARACHI"
// const lowerCaseCity = city.toLowerCase()
// console.log(city === lowerCaseCity); // false

// const city = "KARACHI"
// const lowerCaseCity = city.toLowerCase()
// const city2 = "karachi"
// console.log(lowerCaseCity === city2); // True

// TEST 3 NUMERICAL TEST

// const num1 = 20
// const num2 = 30

// console.log(num1 === 20);
// console.log(num1 !== 20);
// console.log(num1 > num2);
// console.log(num1 < num2);
// console.log(num1 < num2);
// console.log(num1 >= 10);
// console.log(num1 <= num2);


// TEST 4 AND & OR OPERATOR

// const num1 = 20
// const num2 = 30

// console.log(num1 < num2 && num2 > 15);
// console.log(num1 < 5 || num2 > num1);

// TEST 6 ITEM IN ARRAY

// const myArr:string[] = ["Arooj", "Shaheer", "Wajiha", "Safdar"]
// console.log(myArr.includes("Arooj"));

// TEST 7 ITEM NOT IN ARRAY

// const myArr2:string[] = ["Arooj", "Shaheer", "Wajiha", "Safdar"]
// console.log(myArr.includes("Shummas"));

//--------------------------------------------------------------

// QUESTION 26

// let alienColor = "red"

// if(alienColor === "green"){
//     console.log("the player just earned 5 points for shooting the alien");
// }
// else{
//     console.log("alien color is red");    
// }

//-----------------------------------------------------------------

// QUESTION 26

// let alienColor = "red"

// if(alienColor === "green"){
//     console.log("the player earned 5 points.");
// }
// else if(alienColor === "yellow"){
//     console.log("the player earned 10 points.");
// }
// else if(alienColor === "red"){
//     console.log("alien color is red");    
// }

// --------------------------------------------------------------

// QUESTION 28

// let age = 31;

// if (age < 2) {
//     console.log(" the person is a baby.");    
// }
// else if(age <= 2 || age < 4 ) {
//     console.log("the person is a toddler");
// }
// else if(age <= 4 || age < 13 ) {
//     console.log("the person is a kid");
// }
// else if(age <= 13 || age < 20 ) {
//     console.log("the person is a teenager");
// }
// else if(age <= 20 || age < 65 ) {
//     console.log("the person is a adult");
// }
// else{(age >= 65)
//     console.log("the person is an elderly");
// }
 
//----------------------------------------------------------------

// QUESTION 29

// const favFruits:string[] = ["Mango","Orange", "Apple", "Banana"]

// if(favFruits.includes("Pineapple")){
//     console.log("Is Pineapple your favorite fruit ?");    
// }
// else if(favFruits.includes("strawberry")){
//     console.log("Is Strawberry your favorite fruit ?");
// }
// else if(favFruits.includes("Cherry")){
//     console.log("Is cherry your favorite fruit ?");
// }
// else if(favFruits.includes("Papaya")){
//     console.log("Is Papaya your favorite fruit ?");
// }
// else{
//     console.log("You really like bananas!");
// }

//-------------------------------------------------------------

// QUESTION 30

// const userName:string[] = ["Admin", "Shaheer", "Arooj", "Wajeeha"]

// for(let i = 0; i < userName.length; i++){
//     if(userName[i] === "Admin"){
//         console.log("Hello admin, would you like to see a status report?");
//     }
//     else{
//         console.log("Hello"+ " " + userName[i] + " " + "thank you for logging in again.");
//     }
// }

//-------------------------------------------------------------

// QUESTION 31

// let users = ["admin", "user1", "user2"];
// if (users.length === 0) {
//   console.log("We need to find some users!");
// } else {
//   console.log("We have"+ " " + users.length + " " + "users now");
// }

// users = [];
// if (users.length === 0) {
//     console.log("We need to find some users!");
// }

//-------------------------------------------------------------------

// QUESTION 32

// const currentUser:string[] = ["Aqib", "Talha", "Arooj", "Wajeeha", "Shoaib"]

// const newUser:string[] = ["AROOJ", "WAJEEHA", "Shaheer", "Safdar", "Shummas"]

// for(let i = 0; i < newUser.length; i++){
//     if(newUser[i].toLowerCase() === currentUser[i].toLowerCase()){
//         console.log("Please enter the new user name");
//     }else if(newUser[i].toLowerCase() !== currentUser[i].toLowerCase()){
//         console.log("user name is avaliable");
//     }
// }

// const currentUser: string[] = ["Aqib", "Talha", "Arooj", "Wajeeha", "Shoaib"];
// const newUser: string[] = ["AROOJ", "WAJEEHA", "Shaheer", "Safdar", "Shummas"];

// for (let i = 0; i < newUser.length; i++) {
//     let available = true; // Assume the username is available
//     for (let j = 0; j < currentUser.length; j++) {
//         if (newUser[i].toLowerCase() === currentUser[j].toLowerCase()) {
//             console.log("Please enter a new user name, " + newUser[i] + " is already taken.");
//             available = false; // The username is taken
//             break; // No need to check further
//         }
//     }
//     if (available) {
//         console.log("The user name " + newUser[i] + " is available.");
//     }
// }

// -------------------------------------------------------------------

// QUESTION 33

// const ordinalNumber:number[] = [1,2,3,4,5,6,7,8,9]

// for(let i = 0; i < ordinalNumber.length; i++){
//     if(ordinalNumber[i] === 1){
//         console.log("1st");
//     }
//     else if(ordinalNumber[i] === 2){
//         console.log("2nd");
//     }
//     else if(ordinalNumber[i] === 3){
//         console.log("3rd");
//     }
//     else if(ordinalNumber[i] === 4){
//         console.log("4th");
//     }
//     else if(ordinalNumber[i] === 5){
//         console.log("5th");
//     }
//     else if(ordinalNumber[i] === 6){
//         console.log("6th");
//     }
//     else if(ordinalNumber[i] === 7){
//         console.log("7th");
//     }
//     else if(ordinalNumber[i] === 8){
//         console.log("8th");
//     }
//     else if(ordinalNumber[i] === 9){
//         console.log("9th");
//     }
// }

//--------------------------------------------------------------------------------

// QUESTION 34

// const favoritePizzas:string[] = ["Pepperoni", "Margherita", "Hawaiian"];

// for(let i = 0; i < favoritePizzas.length; i++){
//     console.log(`I like ${favoritePizzas[i]} pizza`);
// }

// console.log("I really like pizza");

//-------------------------------------------------------------------------------------

// QUESTION 35

// const animals:string[] = ["Dog", "Wolf", "Fox"]

// for(let i = 0; i < animals.length; i++){
//     if(animals[i] === "Dog"){
//         console.log("A dog would make a great pet");
//     }
//     else if(animals[i] === "Wolf"){
//         console.log("Wolf lives in mountains");
//     }
//     else if(animals[i] === "Fox"){
//         console.log("Fox are very claver");
//     }
// }

// console.log("Any of these animals would make a great pet!");


// -----------------------------------------------------------

// QUESTION 36

// function T_shirt(size:string, message:string){
//     console.log(`The size of shirt is ${size}, ${message}`)
// }

// T_shirt("Medium","I love to code in Typescript")

//------------------------------------------------------------

// QUESTION 37

// function makeShirt(size1:string = "Large" && "Medium", message1:string = "I love Typescript"){
//     if(size1 === "Large"){
//     console.log(size1 , message1);
//     }
//     else if(size1 === "Medium"){
//         console.log(size1, message1);
//     }
//     else if(size1==="X-Large" ||"small"){
//         console.log(size1, "I am the student of Sir zia");
//     }
// }   

// makeShirt("small")
// makeShirt("Large")
// makeShirt("X-Large")
// makeShirt("Medium")

// -------------------------------------------------------------------

// QUESTION 38

// function describe_city(cityName:string, country:string ="Pakistan"){
//     console.log(`${cityName} is in ${country}`);
// }

// describe_city("Mumbai", "India")
// describe_city("Karachi")
// describe_city("Lahore")

// -------------------------------------------------------------

// QUESTION 39

// function cityCountry(city:string,country:string):string{
//     return `${city}, ${country}`
// }

// console.log(cityCountry("Lahore", "Pakistan"));
// console.log(cityCountry("Mumbai", "India"));
// console.log(cityCountry("New York", "USA"));

//----------------------------------------------------------------------------

// QUESTION 40

// function make_album(artistName:string,albumTitle:string,tracks:number){
//     const musicAlbum = {artistName, albumTitle}

//     if(tracks !== undefined){
//         musicAlbum['tracks']= tracks
//     }
    
// function make_album(artist: string, title: string, tracks?: number) {
//     const album = { artist, title };
//     if (tracks !== undefined) {
//       album['tracks'] = tracks;
//     }
//     return album;
//   }
  
//   // Creating albums
//   console.log(make_album("Nusrat Fateh Ali Khan", "Mustt Mustt"));
//   console.log(make_album("Junoon", "Azadi"));
//   console.log(make_album("Atif Aslam", "Doorie", 10));
  
//----------------------------------------------------------------

// QUESTION 41

// function showMagicians(){   
//     const magicianName:string[] = ["Shoiab","Nadeem","Ahmed","Faraz","Shahid"]
//     for(let i = 0; i < magicianName.length; i++){
//         console.log(magicianName[i]);
//     }
// }

// showMagicians()

//------------------------------------------------------------------------

// QUESTION 42

// function makeGreat(){
//     const magicianName:string[] = ["Shoiab","Nadeem","Ahmed","Faraz","Shahid"]
//     for(let i = 0; i < magicianName.length; i++){
//         console.log(`Great to each magician ${magicianName[i]}`);
         
//     }
// }

// makeGreat();

//----------------------------------------------------------------

// Question 43

// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name 
    
// UNABLE TO SOLVE

//------------------------------------------------------------------------


// function orderSandwich(...items: string[]): void {
//     console.log(`You've ordered a sandwich with: ${items.join(', ')}`);
//   }
  
//   orderSandwich('ham', 'cheese', 'tomato');
//   orderSandwich('turkey', 'bacon', 'lettuce', 'mayo');
//   orderSandwich('peanut butter', 'jelly');
  
// function orderSandwich(...items: string[]): void {
//     // Let's say you want to add 'mustard' to every sandwich
//     items.push('mustard');
    
//     console.log(`You've ordered a sandwich with: ${items.join(', ')}`);
// }
  
//   // Example calls:
// orderSandwich('ham', 'cheese', 'tomato');
// orderSandwich('turkey', 'bacon', 'lettuce', 'mayo');
// orderSandwich('peanut butter', 'jelly');
  
//---------------------------------------------------------------------

// QUESTION 45

// function carInfo (carName:string,manufacturer:string,model:number,color:string,optionalFeature:string){
//     const car = {
//         carName,
//         manufacturer,
//         model,
//         color,
//         optionalFeature
//     }
//     return car
// }

// console.log(carInfo("Vitz","Toyota",2020,"Blue","Extra airbags"));

//          COMPLETED AL HUM DULLIAH


