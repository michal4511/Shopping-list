//Selectors
const addButton = document.getElementById("add-button");
const productInput = document.getElementById("product-input");
const headingTitle = document.getElementById("heading-tertiary");
const priceInput = document.getElementById("price-input");
const basketList = document.getElementById("basket-list");
//Event Listener
addButton.addEventListener("click", checkInputField);

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
    const price = priceValue.toFixed(2);
    //Create LI for price
    const newPrice = document.createElement("li");
    newPrice.classList.add("price-item");
    newPrice.innerText = price;
    productDiv.appendChild(newPrice);
    //Append to basket list
    basketList.appendChild(productDiv);

}