let url="https://dummyjson.com/products";
let container=document.getElementById("products")
container.innerHTML = "Loading products...";
fetch(url)
.then(data=>data.json())
.then((obj)=>{
    let products=obj.products
    container.innerHTML = "";
    products.forEach(function(item){
      container.innerHTML += `
            <div class="card">
                <img src="${item.thumbnail}">
                <h3>${item.title}</h3>
                <p>Price: ₹${item.price}</p>
            </div>
        `;
        
    });
    
})


