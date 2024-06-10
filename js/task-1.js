const quantity = 5;
const pricePerDroid = 3000;
const totalPrice = 15000;
const makeTransaction = `You ordered ${quantity} droids worth ${totalPrice} credits!`;
console.log(makeTransaction);

const quantity = 3;
const pricePerDroid = 1000;
const totalPrice = 3000;
const makeTransaction = `You ordered ${quantity} droids worth ${totalPrice} credits!`;
console.log(makeTransaction);

const quantity = 10;
const pricePerDroid = 500;
const totalPrice = 5000;
const makeTransaction = `You ordered ${quantity} droids worth ${totalPrice} credits!`;
console.log(makeTransaction);



console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"