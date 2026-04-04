let allProducts = [];

let url="https://dummyjson.com/products";
let container=document.getElementById("products");

container.innerHTML = "Loading products...";

function displayProducts(products){
    container.innerHTML = "";
    if (products.length===0){
        container.innerHTML=`<div style="text-align:center">
                                <h1 >Product not found</h1>
                                <h1 >Please try searching something else...</h1>
                            </div>`
        return 
        
    }else{

    products.forEach(function(item){
        container.innerHTML += `
            <div class="card">
                <img src="${item.thumbnail}">
                <h3>${item.title}</h3>
                <p>Price: ₹${item.price}</p>
            </div>
        `;
    });}
}

// Fetch
fetch(url)
.then(data=>data.json())
.then((obj)=>{
    allProducts = obj.products;       
    displayProducts(allProducts);     
});

let searchInput = document.getElementById("search");

searchInput.addEventListener("input", function(){
    let value = searchInput.value.toLowerCase();

    let filtered = allProducts.filter(function(item){
        return item.title.toLowerCase().includes(value);
    });

    displayProducts(filtered);
});