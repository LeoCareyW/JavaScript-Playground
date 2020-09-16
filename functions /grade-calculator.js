let gradeCalculator = (score, possible) => {
  let result = (score / possible) * 100
  let letter = 'A'
  pronoun = 'a'

  if (result >= 90) {
    letter = 'A'
    pronoun = 'an'
  } else if (result >= 80) {
    letter = 'B'
  } else if (result >= 70) {
    letter = 'C'
  } else if (result >= 60) {
    letter = 'D'
  } else {
    letter = 'F'
    pronoun = 'an'
  }

  return `You got ${pronoun} ${letter} (${result}%)`
}

let calculate = gradeCalculator(12, 100)
console.log(calculate)
