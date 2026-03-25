let url="https://dummyjson.com/products";
fetch(url)
.then(data=>data.json())
.then((obj)=>{
    let products=obj.products
    products.forEach(function(ans){
        console.log(ans.title)
    })
})