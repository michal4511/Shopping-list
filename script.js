//Selectors
const addButton = document.getElementById("add-button");
const productInput = document.getElementById("product-input");
const headingTitle = document.getElementById("heading-tertiary");
const priceInput = document.getElementById("price-input");
const basketList = document.getElementById("basket-list");
const resetBtn = document.getElementById("reset");
const poundSign = String.fromCharCode('163');
let price;

//Event Listener
addButton.addEventListener("click", checkInputField);
resetBtn.addEventListener("click", removeProduct);

//Function
function checkInputField(event) {
    //prevent form from submitting
    event.preventDefault();
    const empt = productInput.value;
    if (empt !== "") {
        getProductToBasket();
    } 
}

function getProductToBasket() {
    //Remove heading <h3> in a basket because of a list of products
    headingTitle.classList.add("hide");
    //Product Div
    const productDiv = document.createElement("div");
    productDiv.classList.add("product-in-basket")
    //Create LI for product
    const newProduct = document.createElement("li");
    newProduct.innerText = productInput.value;
    newProduct.classList.add("product-item");
    productDiv.appendChild(newProduct);
    //Two decimal places
    const priceValue = Number(priceInput.value);
    price = +(priceValue.toFixed(2));
    //Create LI for price
    const newPrice = document.createElement("li");
    newPrice.classList.add("price-item");
    newPrice.innerText = poundSign + price;
    productDiv.appendChild(newPrice);
    //Append to basket list
    basketList.appendChild(productDiv);
    //Clear Input Value
    productInput.value="";
    priceInput.value="";
    //Add price of product to final price
    calculateTotalPrice();
}

function calculateTotalPrice(){
    let totalPrice = Number(document.getElementById("total-price").innerHTML);
    totalPrice= (totalPrice + price).toFixed(2);
    document.getElementById("total-price").innerHTML = totalPrice;
}

function removeProduct(){
    while (basketList.firstChild) {
        // Clean list
        basketList.removeChild(basketList.lastChild);
        // Show heading
        headingTitle.classList.remove("hide");
        // Score reset
        totalPrice = parseInt(document.getElementById("total-price").innerHTML);
        totalPrice = 0;
        document.getElementById("total-price").innerHTML = totalPrice;
    }
}