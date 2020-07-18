class Store {
  constructor(name, stock) {
    this.name = name;
    this.stock = stock;
    this.revenue = 0;
  }

  processProductSale(productName) {
    this.stock.forEach(toy => {
      if (toy.name == productName){
        if (toy.count > 0) {
          toy.count--;
          this.revenue += toy.price;
          console.log(`Purchased ${toy.name} for ${toy.price}`);
        }
        else {
          console.log(`Sorry, we're all out of ${productName}`);
        }
      }
    });
  }

  replenishStock(productName, count) {
    this.stock.forEach(toy => {
      if (toy.name == productName){
        toy.count += count;
        console.log(`Replenished ${count} ${toy.name}`);
      }
    })
  }

  printRevenue() {
    console.log(`The revenue so far is ${this.revenue}`);
  }

  welcome() {
    console.log(`Welcome to ${this.name}!`);
  }
}

module.exports = Store;
