const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Mouse", price: 25 },
    { id: 3, name: "Keyboard", price: 75 },
    { id: 4, name: "Monitor", price: 300 }
];

const productContainer = document.querySelector("#productContainer");
const cartList = document.querySelector("#cartList");
const cartCount = document.querySelector("#cartCount");
const totalPrice = document.querySelector("#totalPrice");

const cart = [];

function updateCart() {
    let total = 0;

    cartList.textContent = "";

    for (let i = 0; i < products.length; i++) {
        let quantity = 0;

        for (let j = 0; j < cart.length; j++) {
            if (cart[j].id === products[i].id) {
                quantity = quantity + 1;
            }
        }

        if (quantity > 0) {
            const subtotal = quantity * products[i].price;
            total = total + subtotal;

            const item = document.createElement("li");

            const itemName = document.createElement("span");
            itemName.textContent = products[i].name + " × " + quantity;

            const itemPrice = document.createElement("span");
            itemPrice.textContent = "$" + subtotal;

            item.append(itemName, itemPrice);
            cartList.append(item);
        }
    }

    if (cart.length === 0) {
        const emptyItem = document.createElement("li");
        emptyItem.textContent = "Cart is empty";
        cartList.append(emptyItem);
    }

    if (cart.length === 1) {
        cartCount.textContent = "Cart: 1 item";
    } else {
        cartCount.textContent = "Cart: " + cart.length + " items";
    }

    totalPrice.textContent = "Total: $" + total;
}

function createCard(product) {
    const card = document.createElement("article");
    card.classList.add("product-card");

    const name = document.createElement("h2");
    name.textContent = product.name;

    const price = document.createElement("p");
    price.textContent = "$" + product.price;

    const button = document.createElement("button");
    button.textContent = "Add to Cart";

    button.addEventListener("click", function () {
        cart.push(product);
        updateCart();
    });

    card.append(name, price, button);
    productContainer.append(card);
}

for (let i = 0; i < products.length; i++) {
    createCard(products[i]);
}


updateCart();