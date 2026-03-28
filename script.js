let url="https://dummyjson.com/products";
let container=document.getElementById("products")

fetch(url)
.then(data=>data.json())
.then((obj)=>{
    let products=obj.products
    products.forEach(function(item){
      container.innerHTML += `
            <div>
                <img src="${item.thumbnail}" width="150">
                <h3>${item.title}</h3>
                <p>Price: ₹${item.price}</p>
            </div>
        `;
    });
})

