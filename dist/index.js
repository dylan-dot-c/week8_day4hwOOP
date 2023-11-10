"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Item {
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
    constructor(_name, _price, description) {
        this._name = _name;
        this._price = _price;
        this._id = (0, uuid_1.v4)();
        console.log(description);
        this._description = description;
    }
    get id() {
        return this._id;
    }
}
class User {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
        this._id = (0, uuid_1.v4)();
        this._cart = [];
    }
    addToCart(item) {
        this.cart.push(item);
    }
    removeFromCart(itemToRemove) {
        const filteredCart = this.cart.filter((item) => item.id != itemToRemove.id);
        this.cart = [...filteredCart];
    }
    removeQuantityFromCart(itemToRemove, count) {
        const newCart = [];
        let removeCount = count;
        for (let itemCart of this.cart) {
            if (itemCart.id === itemToRemove.id && removeCount > 0) {
                removeCount -= 1;
                continue;
            }
            else {
                newCart.push(itemCart);
            }
        }
        this.cart = [...newCart];
    }
    cartTotal() {
        let total = 0;
        for (let item of this.cart) {
            total += item.price;
        }
        return Number(total.toFixed(2));
    }
    printCart() {
        console.table(this.cart);
    }
    get cart() {
        return this._cart;
    }
    set cart(value) {
        this._cart = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get id() {
        return this._id;
    }
}
class Shop {
    get items() {
        return this._items;
    }
    set items(value) {
        this._items = value;
    }
    constructor() {
        this._items = [];
        let item1 = new Item("Mackeral", 20.99, "Best in the west");
        let item2 = new Item("Cereal", 10.99, "Surreal Cereal like surreal DB");
        let item3 = new Item("Water", 15.99, "Water from the river of milk and honey");
        this._items.push(item1, item2, item3);
    }
}
function main() {
    const shop = new Shop();
    const user = new User("Dylan", 20);
    user.addToCart(shop.items[0]);
    user.addToCart(shop.items[1]);
    user.addToCart(shop.items[2]);
    user.addToCart(shop.items[2]);
    user.addToCart(shop.items[2]);
    user.printCart();
    user.removeFromCart(shop.items[1]);
    user.removeQuantityFromCart(shop.items[2], 2);
    user.printCart();
}
main();
