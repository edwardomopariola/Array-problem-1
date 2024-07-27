//Write a javascript function that takes in two parameters, an array and a number (n), and return the first n elements of that array.

const carsArray = ["bmw", "lexus", "mercedes benz", "toyota", "nissan"] //array of cars with a strings inside of it.


const getItems = function (array, num) { //I define my function with array and a number in the peremeter
    
  if(array === null || num === null)  //Using the strict equality operator to check if the type and value am comparing is valid
    return "Your input should be ('array','number'), please try again."; // If not valid it return "your input should be array and number"        
  
  if(num < 0) // I'm checking to see if 0 is greater than num;                                 
    return "Please enter a positive value for num"; //if 0 is not greater than num, it return "please enter a positive value number"

  if(num > array.length)  //I'm checking to see if the num is greater than array.length;
    return "We only have " + array.length + " items. Please try again.";

  return array.slice(0, num); // return output if input are valid
  
}

console.log(getItems(carsArray, 2)); // return final output, carsArray index 2


