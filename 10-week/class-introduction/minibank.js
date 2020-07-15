function MiniBank(balance) {
  this.balance = balance;
  this.getBalance = function () {
    return this.balance;
  },
    this.printBalance = function () {
      console.log(`Balance: ${this.getBalance()}`);
    };
  this.setBalance = function (value) {
    this.balance = value;
  }

  this.statement = [balance];
  this.updateStatement = function (value) {
    this.statement.push(value);
  }
  this.getStatement = function () {
    return [...this.statement];
  }
  this.printStatement = function () {
    this.statement.forEach(value => {
      console.log(value);
    });
  }

  this.deposit = function (value) {
    this.updateStatement(value);
    this.setBalance(this.balance + value);
  }
  this.withdraw = function (value) {
    this.updateStatement(-value);
    this.setBalance(this.balance - value);
  }
}

const bank = new MiniBank(100);
bank.printBalance();
bank.deposit(100);
bank.printBalance();
bank.withdraw(200);
bank.printBalance();
bank.printStatement();
