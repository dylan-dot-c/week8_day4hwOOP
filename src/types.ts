type Item = {
    readonly id: string;
    name: string;
    price: number;
    description: string;
};

type User = {
    readonly id: string;
    name: string;
    age: number;
    cart: Item[];
};

export { Item, User };
