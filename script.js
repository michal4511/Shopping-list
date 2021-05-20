//Selectors
const addButton = document.getElementById("add-button");
const productInput = document.getElementById("product-input");

//Event Listener
addButton.addEventListener("click", checkInputField);

//Function
function checkInputField(event) {
    //prevent form from submitting
    event.preventDefault();
    const empt = productInput.value;
    if (empt !== "") {
        getProduct();
    } 
}