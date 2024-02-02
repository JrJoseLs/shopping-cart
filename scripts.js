const openShopping = document.querySelector(".shopping");
const closeShopping = document.querySelector(".closeShopping");
const list = document.querySelector(".list");
const listCard = document.querySelector(".listCard");
const total = document.querySelector(".total");
const body = document.querySelector(".body");
const quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
    body.classList.add("active")
})
closeShopping.addEventListener("click", () => {
    body.classList.remove("active")
})

let products = [
    {
        id: 1,
        name: "PRODUCT 1",
        images: "1.png",
        price: 2000
    },
    {
        id: 2,
        name: "PRODUCT 2",
        images: "2.png",
        price: 2200
    },
    {
        id: 3,
        name: "PRODUCT 3",
        images: "3.png",
        price: 2400
    },
    {
        id: 4,
        name: "PRODUCT 4",
        images: "4.png",
        price: 2600
    },
    {
        id: 5,
        name: "PRODUCT 5",
        images: "5.png",
        price: 1800
    },
    {
        id: 6,
        name: "PRODUCT 6",
        images: "6.png",
        price: 1600
    },
]

let listCards = [];

const initApp = () => {
    products.forEach((value, key) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML = `
            <img src = "img/${value.images}"
            <div class="title">${value.name}</div>"
            <div class ="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard"(${key})>Add To Card</button>
        `
        list.appendChild(newDiv)
    })
}

initApp()


/* cart menu */
const addToCard = (key) => {
    if(listCards[key] == null) {
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1
    }

    reloadCard();
}
const reloadCard = () => {
    listCard.innerHTML = "";
    let count = 0;
    let totalprice = 0;

    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if(value != null) {
            let newDiv = document.createElement("li");
            newDiv.innerHTML = `
                <div><img src ="img/${value.image}"></div>
                <div class ="cardTitle">${value.name}</div>
                <div class ="cardPrice">${value.price.toLocaleString()}</div>

                <div>
                    <button style="background-color: #560bad"
                    class="cardButton" onclick = "changeQuantity(${key}, {value.quantity - 1}")>-</button>
                    <div class ="count">${count}</div>
                    <button style="background-color: #560bad"
                    class="cardButton" onclick = "changeQuantity(${key}, {value.quantity - 1}")>+</button>
                </div>
            `
            listCard.appendChild(newDiv);
        }
        total.innerText = totalPrice.toLocaleString();
        quantity.innerText = count;
    })
}