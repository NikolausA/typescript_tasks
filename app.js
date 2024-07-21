"use strict";
const totalPrice = ({ price, discount, isInstallment, months, }) => {
    if (discount) {
        discount = discount / 100;
    }
    if (isInstallment) {
        return (price * (1 - discount)) / months;
    }
};
const price = totalPrice({
    price: 100000,
    discount: 25,
    isInstallment: true,
    months: 12,
});
console.log(price); // 6250
