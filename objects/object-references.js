let myAccount = {
  name: 'Leo',
  expenses: 0,
  income: 0
}

let addExpense = (account, amount) => {
  account.expenses = account.expenses + amount
}

let addIncome = (account, amount) => {
  account.income = account.income + amount
}

let resetAccount = (account) => {
  account.expenses = 0
  account.income = 0
}

let getAccountSummary = (account) => {
  console.log(`Account belonging to ${account.name} has expenses of ${account.expenses} and income of ${account.income}.`)
}



addExpense(myAccount, 2.50)
console.log(myAccount)
addIncome(myAccount, 2)
console.log(myAccount)
getAccountSummary(myAccount)
resetAccount(myAccount)
console.log(myAccount)
