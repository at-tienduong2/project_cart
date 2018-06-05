//document.getElementById("demo").innerHTML = "duong thi ngoc tien";

var vagetables = [
  {
    "id": 1,
    "name": "carrot",
    "price": "28.3",
    "description": "Carrots are one of the ten most economically important vegetable crops in the world",
    "image": "assets/images/carrot.jpg"
  },
  {
    "id": 2,
    "name": "watermelon",
    "price": "22.8",
    "description": "Carrots are one of the ten most economically important vegetable crops in the world",
    "image": "assets/images/dua-hau.jpg"
  },
  {
    "id": 3,
    "name": "cauliflower",
    "price": "30.5",
    "description": "Carrots are one of the ten most economically important vegetable crops in the world",
    "image": "assets/images/suplo.jpg"
  },
  {
    "id": 4,
    "name": "strawberry",
    "price": "55",
    "description": "Carrots are one of the ten most economically important vegetable crops in the world",
    "image": "assets/images/dau-tay.jpg"
  },
  {
    "id": 5,
    "name": "cucumber",
    "price": "25.5",
    "description": "Carrots are one of the ten most economically important vegetable crops in the world",
    "image": "assets/images/dua-leo.jpg"
  },
  {
    "id": 6,
    "name": "turnips.",
    "price": "25.5",
    "description": "Carrots are one of the ten most economically important vegetable crops in the world",
    "image": "assets/images/turnips.jpg"
  }
 ] 

// cartdata = "";
// for (var i = 0; i < vagetables.length; i++) {
//   cartdata += "<li><h2>" +vagetables[i].name+ "</h2></li>"


//   document.getElementById('shop').innerHTML = cartdata;
// }

const products = `
  <ul class="products">
    ${vagetables.map(vagetable => 
      `<li class="product col-md-2 pd-l--3 pd-r--3">
        <a href="#">
          <img class="product-img" src="${vagetable.image}" alt="">
          <h2 class="product-title pd-t--2">${vagetable.name}</h2>
          <span class="product-price">$${vagetable.price}</span>
          <a class="btn btn-cart mg-t--2" href="#" onclick="addToCart(${vagetable.id})">Buy</a>
        </a>
      </li>`
    ).join('')}
  </ul>`;
document.getElementById('product').innerHTML = products;


var cartNumber = 0;
var myCart = [];
function addToCart(id) {
  cartNumber++;
  for (var i = 0; i < vagetables.length; i++) {
    if (id === vagetables[i].id) {
      console.log(vagetables[i].name);
      myCart.push(vagetables[i]);
      console.log(myCart);
      localStorage.setItem('items', JSON.stringify(myCart));
      
    }
  }
  document.getElementById('cartTotal').innerHTML = cartNumber;
}



const myShopping = `
  <ul class="products">
    ${myCart.map(cart => 
      `<li class="product col-md-2 pd-l--3 pd-r--3">
        <a href="#">
          <img class="product-img" src="${cart.image}" alt="">
          <h2 class="product-title pd-t--2">${cart.name}</h2>
          <span class="product-price">$${cart.price}</span>
        </a>
      </li>`
    ).join('')}
  </ul>`;
document.getElementById('myCart').innerHTML = myShopping;

function showMycart() {
  var shopping = JSON.parse(localStorage.getItem('items'));
  console.log(shopping);
}

