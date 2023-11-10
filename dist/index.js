"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("./models");
function main() {
    const shop = new models_1.Shop();
    const user = new models_1.User("Dylan", 20);
    user.addToCart(shop.items[0]);
    user.addToCart(shop.items[1]);
    user.addToCart(shop.items[2]);
    user.addToCart(shop.items[2]);
    user.addToCart(shop.items[2]);
    user.printCart();
    console.log("Total is", user.cartTotal());
    user.removeFromCart(shop.items[1]);
    console.log("Total is", user.cartTotal());
    user.removeQuantityFromCart(shop.items[2], 2);
    console.log("Total is", user.cartTotal());
    user.printCart();
    console.log("Total is", user.cartTotal());
}
main();
