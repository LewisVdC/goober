class BasicColorUpgrade {
  static instances = [];
  constructor(currency, color, name, startPrice, growth, buyButton, countSpan, priceSpan) {
    this.currency = currency;
    this.color = color;
    this.name = name;
    this.startPrice = startPrice;
    this.growth = growth;
    this.buyButton = buyButton;
    this.countSpan = countSpan;
    this.priceSpan = priceSpan;
    this.count = 0;
    this.price = startPrice;

    BasicColorUpgrade.instances.push(this);
  }

  static createEmpty(name) {
    return new BasicColorUpgrade(0, "", name, 0, "", null, null);
  }

  updateCount() {
    this.countSpan.innerHTML = this.count;
  }

  buy(count) {
    for (let i = 0; i < count; i++) {
      if (this.currency >= this.price) {
        console.log("bought!");
      }
    }
  }
}
//let redfilter = new BasicColorUpgrade("red", "refilter", 10);
