//** Return a function called multiplication that returns the product of two numbers *//

//** 1. Create a funtion called multiplication */
//** 2. The user will input the numbers that need to be cacaulated */
//** 3. After the user inputs the desired numbers to be caculated the function should return the proper caculated amount */


// const multiplication = (a, b) => a * b;

// console.log(multiplication(2,2))


//** Return a function that is called concatOdds */
//** Should take two arrays of integers as arguments */
//** Should return a single array that contains odd numbers in asceding order from both arrays */

const concatOdds = () => {
    let a = [3, 2, 1]
    let b = [9, 1, 1, 1, 4, 15, -1]
    let c = []
    const arr = a.concat(b)
    for (let i = 0; i <= arr.length; i++){

        if (arr[i] % 2 === 1){
            c.push(arr[i])

        }else if(arr[i] % 2 === 0){
            console.log("numbers are even", arr[i])
        }

    }console.log(c.sort())

}
(concatOdds())

