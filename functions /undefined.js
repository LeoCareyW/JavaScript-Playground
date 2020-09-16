// undefined for variable

let name

if (name === undefined) {
  console.log('Please provide a name')
} else {
  console.log(name)
}

// Undefined for function arguments

let square = (num) => {
  console.log(num)
}

let result = square()
console.log(result)
