let allProducts = [];

let url = "https://dummyjson.com/products";
let container = document.getElementById("products");

container.innerHTML = "Loading products...";

function displayProducts(products){
    container.innerHTML = "";

    if (products.length === 0){
        container.innerHTML = `
            <div style="text-align:center">
                <h1>Product not found</h1>
                <h1>Please try searching something else...</h1>
            </div>
        `;
        return;
    }

    products.forEach(function(item){
        container.innerHTML += `
            <div class="card">
                <img src="${item.thumbnail}">
                <h3>${item.title}</h3>
                <p>Price: ₹${item.price}</p>
            </div>
        `;
    });
}

// Fetch
fetch(url)
.then(data => data.json())
.then((obj) => {
    allProducts = obj.products;
    displayProducts(allProducts);
})
.catch(() => {
    container.innerHTML = "<h2>Something went wrong!</h2>";
});

// Search
let searchInput = document.getElementById("search");

searchInput.addEventListener("input", function(){
    let value = searchInput.value.toLowerCase();

    let filtered = allProducts.filter(function(item){
        return item.title.toLowerCase().includes(value);
    });

    displayProducts(filtered);
});

// Sort
let sortSelect = document.getElementById("sort");

sortSelect.addEventListener("change", function(){
    let sorted = [...allProducts];

    if (sortSelect.value === "low"){
        sorted.sort((a,b) => a.price - b.price);
    } else if (sortSelect.value === "high"){
        sorted.sort((a,b) => b.price - a.price);
    }

    displayProducts(sorted);
});

// Filter
let filterSelect = document.getElementById("filter");

filterSelect.addEventListener("change", function(){
    let value = filterSelect.value;

    if (value === ""){
        displayProducts(allProducts);
        return;
    }

    let filtered = allProducts.filter(function(item){
        return item.category === value;
    });

    displayProducts(filtered);
});

// Dark Mode
let dark_light_btn = document.getElementById("dark_light_mode");

dark_light_btn.addEventListener("click", function(){
    document.body.classList.toggle("dark");

    if (dark_light_btn.innerText === "🌙 Dark mode"){
        dark_light_btn.innerHTML = "☀️ Light mode";
    } else {
        dark_light_btn.innerHTML = "🌙 Dark mode";
    }
});