// let person = {
//   age: 24,
//   name: 'Leo',
//   location: 'London',
//   gender: 'male'
// }

// let otherPerson = {
//   age: 27,
//   name: 'Jeff',
//   location: 'San Franscisco',
//   gender: 'go away'
// }

// let getSummary = (person) => {
//   return {
//     summary: `${person.name} is ${person.age} and they live in ${person.location}`,
//     genderSummary: `${person.name} is ${person.gender} pages long`
//   }
// }

// let personSummary = getSummary(person)
// let otherPersonSummary = getSummary(otherPerson)

// console.log(personSummary.genderSummary)

let getFarenheit = (fahrenheit) => {
  let celcius = (fahrenheit - 32) * 5 / 9
  let kelvin = (fahrenheit - 32) * (5 / 9) + 273.15
  return {
    fahrenheit,
    celcius,
    kelvin
  }
}

let summary = getFarenheit(20)
console.log(summary)
