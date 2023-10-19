// function increment() {
//     console.log("The button was clicked")
// }
// function countdown(){
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }
// // setting up the race
// countdown()

let saveEl = document.getElementById("save-el") 
let countEl = document.getElementById("count-el")
let count = 0

function increment(){
    count += 1
    countEl.textContent = count
}
function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
  

} 
    
   // countEl.textContent = 0
    // count = 0
    
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
 // 3. Render the variable in the saveEl using innerText
//  saveEl.textContent += countStr
//  console.log(count)   

// creat a function called save which logs out the count wen its called
// function save(){
//     console.log(count)
// }

// let username = "per"
// let message ="you have three new notification"
// console.log(message +","+username+"!")

// let name = "CodePlateau"
// let greeting = "Hi welcome to CodePlateau"
// let myGreating = greeting + name
// console.log(myGreeting)





// let name = "Hub";
// let greeting = "Hi user, welcome to CodePlateau";
// let myGreeting = greeting + " " + name;
// console.log(myGreeti ng);






