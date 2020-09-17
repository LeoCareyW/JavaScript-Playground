const account = {
  name: 'Leo Carey-Williams',
  expenses: [],
  addExpense: function (description, amount) {
    this.expenses.push({description, amount})
  },
  getAccountSummary: () => {
    let totalExpenses = 0
    this.expenses.forEach(function (expense) {
      totalExpenses += expense.amount
    })


    `${this.name}'s account has ${totalExpenses} in expenses.`
  }
}

console.log(account.expenses)

// Expense: description, amount
// addExpense -> description, amount
// getAccountSummary -> name has expenses in expenses


account.addExpense('rent', 765)
account.addExpense('laptop', 2800)
console.log(account.getAccountSummary())
