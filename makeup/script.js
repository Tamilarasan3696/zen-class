var division = document.createElement('div')
division.innerHTML=` <input type="text" placeholder="Brand Name" id="txt">
<button id="button" onclick="getdata()">Get detial</button>`
division.setAttribute("class","container")
document.body.append(division);



async function getdata(){

    var brand = document.getElementById('txt').value // brand is user defiend we can use any names

    let url = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}&product_type=lipstick`)
let result = await url.json();
console.log(result);

 //math.random use to get random number,math.floor to fix round number

 
 var price =result[0].price;
 console.log(price)
 var description = result[0].description;
 console.log(description)

 var image = result[0].image_link ; // use all the var as my user frndly
 console.log(image )

 var product = result[0].product_link;
 console.log(product)
 var name =result[0].name;
 console.log(name)

 // document.getElementById() is used to ge the element by id 

  //this card is taken from bootstrap

 let division1 = document.getElementById('cardlist')
 division1.innerHTML=`<div class="card" style="width: 25rem;">
 <img src="https://files.myglamm.com/site-images/1200x1200/Sinner-(1)_1.jpg" class="card-img-top" alt="...">
 <div class="card-body">
   <h5 class="card-title">LIPSTICK DETIAL</h5>
  
    <p class="card-text" id="brand"></p>   
   <p class="card-text" id="price"></p>
   <p class="card-text" id="name"></p>
   <p class="card-text" id="description"></p>
   <p class="card-text" id="image"></p>
   <p class="card-text" id="product"></p>   
 </div>
</div>`


 document.getElementById('brand').innerHTML=`<b style="color: red;">Brand Name</b>:${brand}` 
 document.getElementById('price').innerHTML=`<b style="color: red;">Price</b>:${price}$`
 document.getElementById('description').innerHTML=`<b style="color: red;">description</b>:${description}`
 document.getElementById('image').innerHTML=`<b style="color: red;">Image link</b>:${image}`
 document.getElementById('product').innerHTML=`<b style="color: red;">Product</b>:${product}`
 document.getElementById('name').innerHTML=`<b style="color: red;">Name of the product</b>:${name}`
}

