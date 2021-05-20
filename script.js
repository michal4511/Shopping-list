//Selectors
const addButton = document.getElementById("add-button");
const productInput = document.getElementById("product-input");
const headingTitle = document.getElementById("heading-tertiary");

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
    

}