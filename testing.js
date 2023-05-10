//** Return a function called multiplication that returns the product of two numbers *//

//** 1. Create a funtion called multiplication */
//** 2. The user will input the numbers that need to be cacaulated */
//** 3. After the user inputs the desired numbers to be caculated the function should return the proper caculated amount */


// const multiplication = (a, b) => a * b;

// console.log(multiplication(2,2))


//** Return a function that is called concatOdds */
//** Should take two arrays of integers as arguments */
//** Should return a single array that contains odd numbers in asceding order from both arrays */

const concatOdds = () => { // Using arrow function method
    let a = [3, 2, 1] // Using array for value of A
    let b = [9, 1, 1, 1, 4, 15, -1] // using array for value of B
    let c = [] // Creating empty array to store odd number values
    const arr = a.concat(b) // using concat method to combine both a and b values
    for (let i = 0; i <= arr.length; i++){ // Using for loop to iterate over a and b values to get odd numbers.

        if (arr[i] % 2 === 1){ // using if statement to access each index in both a and b that is store in the arr varible 
            c.push(arr[i]) // pushing each odd number from arr varible into new array called C.

        }else if(arr[i] % 2 === 0){ // Using if statement to track the even numbers in the arr varible.
            console.log("numbers are even", arr[i]) // logging even numbers from the arr varible. 
        }

    }console.log(c.sort()) // logging the numbers that is stored in the new c array.

}
(concatOdds()) // expected output should be odd numbers stored in an array and even numbers printed out with string "numbers are even" and the nunber that is even.

