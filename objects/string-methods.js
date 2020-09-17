let password = "Silve"

let passwordChecker = (password) => {
  return !password.toLowerCase().includes('password') && password.toLowerCase().length > 8
}

let check = passwordChecker(password)

console.log(check)
