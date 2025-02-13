const products = [
    { id: 1, name: "P1", price: 25 },
    { id: 2, name: "P2", price: 45 },
    { id: 3, name: "P3", price: 30 },
];

const cart = {};

const addToCart = (id) => {
    cart[id] = 1;
    showCart();
};

const increment = (id) => {
    cart[id] = cart[id] + 1;
    showCart();
};

const decrement = (id) => {
    cart[id] = cart[id] - 1;
    if (cart[id] < 1) delete cart[id];
    console.log(cart);
    showCart();
};

const showTotal = () => {
    let total = products.reduce((sum, value) => {
        return sum + value.price * (cart[value.id] ? cart[value.id] : 0);
    }, 0);
    document.getElementById("divTotal").innerHTML = `Order Value: $${total}`;

};

const showCart = () => {
    let str = "";
    products.forEach((value) => {
        if (cart[value.id]) {
            str += `
            <li>${value.name}-$${value.price}-<button onclick='decrement(${value.id})'>-</button>
            ${cart[value.id]}<button onclick='increment(${value.id})'>+</button>$${value.price * cart[value.id]}</li>
            `;
        }
    });

    document.getElementById("divCart").innerHTML = str;
    document.getElementById("items").innerHTML = Object.keys(cart).length;
    showTotal();
};

const displayCart = () => {
    document.getElementById("divCartBlock").style.display = "block";
};

const hideCart = () => {
    document.getElementById("divCartBlock").style.display = "none";
};

const showProducts = () => {
    let str = "";
    products.forEach((value) => {
    str += `<li>${value.id}-${value.name}-${value.price}-<button onclick="addToCart(${value.id})">Add to Cart</button></li>`;

    });
    document.getElementById("divProducts").innerHTML = str;
};