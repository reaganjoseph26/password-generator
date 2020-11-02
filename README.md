# password-generator
## Creating prompts
- alerts and prompts questions set up to naviagte through function
- confirm messages inserted to validate user input
## Creating Variables
- Assign Varables with associated prompts
- Assign Variables with randomization
- Used String.fromCharCode method get desired input return
- Used Math.floor and Math.random to randomize the variables and to round down.
- console.log() each variable to make sure they produce desired results. 
## Create if else conditions for each criteria
- If a user confirms they want that criteria, it will be stored into the array
- If user denies that criteria then the return will be an empty string being not inputting anything into that array
## For Loop
- create a for loop that conditions the loop to run set amount of times
- gather all inputed data form if else conditions and randomize it using Math.random 
- Get the lenght of the array
- Use Math.floor to round down to whole number instead of having decimals
- Set that to the Second Array created to store all input
- set myArr += to passArr
- return myArr