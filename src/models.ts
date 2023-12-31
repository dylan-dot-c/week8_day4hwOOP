import { v4 as uuidv4 } from "uuid";

class Item {
    // private attributes
    private readonly _id: string;
    private _description: string;

    constructor(
        private _name: string,
        private _price: number,
        description: string
    ) {
        this._id = uuidv4();
        console.log(description);
        this._description = description;
    }

    // getters and setters
    public get id(): string {
        return this._id;
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }

    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
}

class User {
    // private attribute
    private _cart: Item[];
    constructor(private _name: string, private _age: number) {
        this._id = uuidv4();
        this._cart = [];
    }

    addToCart(item: Item): void {
        this.cart.push(item);
    }

    removeFromCart(itemToRemove: Item): void {
        const filteredCart = this.cart.filter(
            (item) => item.id != itemToRemove.id
        );
        this.cart = [...filteredCart];
    }

    removeQuantityFromCart(itemToRemove: Item, count: number) {
        const newCart: Item[] = [];
        let removeCount = count;
        for (let itemCart of this.cart) {
            if (itemCart.id === itemToRemove.id && removeCount > 0) {
                removeCount -= 1;
                continue;
            } else {
                newCart.push(itemCart);
            }
        }

        this.cart = [...newCart];
    }

    cartTotal(): number {
        let total = 0;
        for (let item of this.cart) {
            total += item.price;
        }

        return Number(total.toFixed(2));
    }

    printCart() {
        console.table(this.cart);
    }

    public get cart(): Item[] {
        return this._cart;
    }
    public set cart(value: Item[]) {
        this._cart = value;
    }
    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    private readonly _id: string;
    public get id(): string {
        return this._id;
    }
}

class Shop {
    private _items: Item[];

    constructor() {
        this._items = [];
        let item1 = new Item("Mackeral", 20.99, "Best in the west");
        let item2 = new Item("Cereal", 10.99, "Surreal Cereal like surreal DB");
        let item3 = new Item(
            "Water",
            15.99,
            "Water from the river of milk and honey"
        );

        this._items.push(item1, item2, item3);
    }

    public get items(): Item[] {
        return this._items;
    }
    public set items(value: Item[]) {
        this._items = value;
    }
}

export { User, Shop, Item };
