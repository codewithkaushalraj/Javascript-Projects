const formDiv = document.querySelector('#form')
const addProducts = document.querySelector('.AddPro')
const cross = document.querySelector('.cross')
const form = document.querySelector('form')
const productsDiv = document.querySelector('#products')

let ProductsArr = []
addProducts.addEventListener('click', () => {
    formDiv.style.display = "flex";
})
cross.addEventListener('click', () => {
    formDiv.style.display = "none";
})

let ui = () => {
    productsDiv.innerHTML = ""
    ProductsArr.forEach((elem,index) => {
        productsDiv.innerHTML += ` <div class="card">
                <img src="${elem.url}" alt="product-image">
                <div class="details">
                    <h3><b>Name</b> : ${elem.ProductName}</h3>
                    <p><b>Description</b> : ${elem.Description} </p>
                    <p><b>Price</b> : ${elem.Price}/-</p>
                </div>
                <div class="buttons">
                    <button onclick="updateProducts('${elem.ProductName}')">Update</button>
                    <button onclick="deleteProduct('${index}')">Delete</button>
                </div>
            </div>`
    })
}
let productIndex = null;
let updateProducts = (Name) => {
    // console.log(Name)
    formDiv.style.display = "flex";

    let productDetails = ProductsArr.find(({ ProductName }) => ProductName == Name)
    productIndex = ProductsArr.findIndex(({ ProductName }) => ProductName == Name)
    form[0].value = productDetails.ProductName
    form[1].value = productDetails.Description
    form[2].value = productDetails.Price
    form[3].value = productDetails.url
    //  console.log(productDetails)   
}
let deleteProduct = (index) => {
    ProductsArr.splice(index,1);
    ui()
}


form.addEventListener('submit', (event) => {
    event.preventDefault();
    let ProductName = event.target[0].value
    let Description = event.target[1].value
    let Price = event.target[2].value;
    let url = event.target[3].value;
    if (ProductName.trim() == "" || Description.trim() == "" || Price == "" || url.trim() == "") {
        alert("Please Fill All Requiered Field ")
        return;
    }
    let obj = { ProductName, Description, Price, url }
    if (productIndex != null) {
        ProductsArr[productIndex] = obj;
        productIndex = null   // Imporant step (otherwise on only all the changes will be perform only sigle element)
    }
    else{
        ProductsArr.push(obj)
    } 
    //    console.log(ProductsArr)
    formDiv.style.display = "none";
    ui()
    form.reset();
})