const account = {
  name: 'Leo Carey-Williams',
  expenses: [],
  income: [],
  addExpense: function (item, amount) {
    this.expenses.push({item, amount})
  },
  addIncome: function (item, amount) {
    this.income.push({item, amount})
  },
  getAccountSummary: function () {
    let expenseTotal = 0
    let incomeTotal = 0

    this.expenses.forEach((expense) => {
      expenseTotal += expense.amount
    })
    this.income.forEach((income) => {
      incomeTotal += income.amount
    })

    let total = incomeTotal - expenseTotal

    return `${this.name}'s account has £${total}. ${expenseTotal} in expenses and ${incomeTotal} in income.`
  }
}

account.addExpense('Rent', 950)
account.addExpense('Laptop', 2400)
account.addIncome('Freelance', 650)
account.addIncome('Security', 3000)
console.log(account.getAccountSummary())
