"use strict";

let listShop = [
  { nameProduct: "pear", count: "10", isBuy: true },
  { nameProduct: "peach", count: "6", isBuy: true },
  { nameProduct: "tomato", count: "8", isBuy: false },
  { nameProduct: "potato", count: "20", isBuy: true },
  { nameProduct: "apple", count: "3", isBuy: false }
];

let showProducts = function() {
  listShop.sort(function(a, b) {
    return b.isBuy - a.isBuy;
  });
  let i = 0;
  for (let product of listShop) {
    console.log(
      `Product#${i} ${product.nameProduct}, ${product.count}, ${product.isBuy}`
    );
    ++i;
  }
  console.log("\n");
};

showProducts(listShop);

let addProduct = function(Product) {
  let count = 0;
  for (let i = 0; i < listShop.length; ++i) {
    if (listShop[i].nameProduct === Product) {
      count = i;
    }
  }

  if (count === 0) {
    listShop[listShop.length - 1] = {
      nameProduct: Product,
      count: "1",
      isBuy: true
    };
    console.log("count === 0");
  } else {
    listShop[count].count = Number(listShop[count].count);
    listShop[count].count += 1;
  }
};

let buyProduct = function(myProduct) {
  let count = 0;
  myProduct = String(myProduct);
  for (let i = 0; i < listShop.length; ++i) {
    if (listShop[i].nameProduct === myProduct) {
      count = i;
    }
  }

  if (count === 0) {
    console.log(`Don't have this product: ${myProduct}`);
  } else {
    listShop[count].isBuy = true;
  }
};

addProduct("peach");
showProducts(listShop);
buyProduct("tomato");
showProducts(listShop);