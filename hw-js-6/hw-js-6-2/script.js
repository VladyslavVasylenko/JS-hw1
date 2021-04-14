"use strict";

let chequeShop = [
  { productName: "bread", count: "3", price: "5" },
  { productName: "milk", count: "2", price: "3" },
  { productName: "meet", count: "1", price: "70" },
  { productName: "fish", count: "5", price: "12" },
  { productName: "yoghurt", count: "5", price: "4" }
];

let showCheque = function() {
  for (let info of chequeShop) {
    console.log(
      `Name: ${info.productName}, Count: ${info.count}, Price: ${info.price}`
    );
  }
  console.log("\n");
};

let sumOfPurchase = function() {
  let sum = 0;
  for (let info of chequeShop) {
    info.price = Number(info.price);
    sum += info.price;
  }
  return sum;
};

let getExpensivePurchase = function() {
  let minPrice = 0;
  for (let info of chequeShop) {
    info.price = Number(info.price);
    if (info.price > minPrice) {
      minPrice = info.price;
    }
  }
  return minPrice;
};

let averagePriceOfProduct = function() {
  let averagePrice = 0;
  let count = 0;
  for (let i = 0; i < chequeShop.length; ++i) {
    chequeShop[i].price = Number(chequeShop[i].price);
    averagePrice += chequeShop[i].price;
    count++;
  }
  averagePrice /= count;
  return averagePrice;
};

showCheque();
let sum = sumOfPurchase();
console.log(`Sum of purchase is: ${sum}`);

let maxPrice = getExpensivePurchase();
console.log(`Max price is: ${maxPrice}`);

let averagePrise = averagePriceOfProduct();
console.log(`Averagge price is: ${averagePrise}`);