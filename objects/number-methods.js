let num = 124.345

console.log(num.toFixed(20))

// let randomNum = Math.floor(Math.random().toFixed(2) * 10) + 10
// console.log(randomNum)

let min = 1
let max = 5
let randomNum2 = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNum2)



let guess = (num) => {
  return num === Math.floor(Math.random() * (max - min + 1)) + min
}

console.log(guess(2))
