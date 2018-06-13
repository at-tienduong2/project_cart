
var vagetables = [
  {
    "id": 1,
    "name": "carrot",
    "price": "28.3",
    "description": "Carrots are one of the ten most economically important vegetable crops in the world",
    "image": "../assets/images/carrot.jpg",
    "date": "01/06/2018",
  },
  {
    "id": 2,
    "name": "watermelon",
    "price": "22.8",
    "description": "Carrots are one of the ten most economically important vegetable crops in the world",
    "image": "../assets/images/dua-hau.jpg",
    "date": "05/05/2018",
  },
  {
    "id": 3,
    "name": "cauliflower",
    "price": "30.5",
    "description": "Carrots are one of the ten most economically important vegetable crops in the world",
    "image": "../assets/images/suplo.jpg",
    "date": "05/06/2018",
  },
  {
    "id": 4,
    "name": "strawberry",
    "price": "55",
    "description": "Carrots are one of the ten most economically important vegetable crops in the world",
    "image": "../assets/images/dau-tay.jpg",
    "date": "02/06/2018",
  },
  {
    "id": 5,
    "name": "cucumber",
    "price": "25.5",
    "description": "Carrots are one of the ten most economically important vegetable crops in the world",
    "image": "../assets/images/dua-leo.jpg",
    "date": "05/06/2018",
  },
  {
    "id": 6,
    "name": "turnips",
    "price": "25.5",
    "description": "Carrots are one of the ten most economically important vegetable crops in the world",
    "image": "../assets/images/turnips.jpg",
    "date": "05/07/2018",
  },
  {
    "id": 7,
    "name": "currant",
    "price": "50.5",
    "description": "Carrots are one of the ten most economically important vegetable crops in the world",
    "image": "../assets/images/currant.jpg",
    "date": "05/07/2018",
  },
  {
    "id": 8,
    "name": "CornSalad",
    "price": "50.5",
    "description": "Carrots are one of the ten most economically important vegetable crops in the world",
    "image": "../assets/images/CornSalad.jpg",
    "date": "05/07/2018",
  }
] 

const products = `
  <h2 class="title txt-uppercase pd-b--6">New Products</h2>
  <div class="row">
    <ul class="products">
      ${vagetables.map(vagetable => 
        `<li class="product col-md-2 mg-b--6 pd-b--2">
          <a href="#">
            <img class="product-img" src="${vagetable.image}" alt="">
            <h2 class="product-title pd-t--2">${vagetable.name}</h2>
            <span class="product-price">$${vagetable.price}</span>
          </a>
          <span class="btn btn-cart mg-t--2" onclick="addToCart(${vagetable.id})">Add to cart</span>
        </li>`
      ).join('')}
    </ul>`;
document.getElementById('js-product').innerHTML = products;

var cartNumber = 0;
var myCart = [];

function addToCart(id) {
  cartNumber++;

  if (myCart.length) {
    myCart.map(function(val) {
      val.id === id && val.quality++;
    });

    var hasId = myCart.filter(function(val) {
      return val.id === id;
    }).length;

    !hasId && myCart.push({id: id, quality: 1});

  } else {
    myCart.push({id: id, quality: 1});
  }
  document.getElementById('cartTotal').innerHTML = cartNumber;
}

function showMycart() {
  var sum = 0;
  var myProducts = [];
  for (var i = 0; i < myCart.length; i++) {
    for (var j = 0; j < vagetables.length; j++) {
      if (myCart[i].id === vagetables[j].id) {
        id = vagetables[j].id;
        image = vagetables[j].image;
        name = vagetables[j].name;
        description = vagetables[j].description;
        price = vagetables[j].price;
        quality = myCart[i].quality;
        var total = vagetables[j].price * myCart[i].quality;
        sum = sum + total;
        myProducts.push({id, name, description, image, quality, price, total});
        setItem(myProducts);
      }
    }
  }  
  var myShopping = `
    <h2 class="title txt-uppercase pd-b--6">My cart</h2>
    <table class="my-cart">
      <tr class="row ">
        <th class="col-md-2">Image</th>
        <th class="col-md-3">Description</th>
        <th class="col-md-1">Quality</th>
        <th class="col-md-2">Price</th>
        <th class="col-md-2">Total</th>
        <th class="col-md-2">Action</th>
      </tr>
      ${myProducts.map(cart =>
        `<tr id="js-row" class="row">
          <td class="col-md-2">
          <a href="#">
            <img class="product-img" src="${cart.image}" alt="">
          </a>
          </td>
          <td class="col-md-4">
          <h2 class="title pd-b--4 txt-uppercase">${cart.name}</h2>
          <p class="des pd-l--2">${cart.description}</p>
          </td>
          <td class="col-md-2">
            <input id="${cart.id}" class="input-text" type="text" value="${cart.quality}" onchange="myChange(${cart.id})">
          </td>
          <td> <p id="${cart.id}" class="col-md-2 flex-center"><span>$</span>${cart.price}</p></td>
          <td><p class="${cart.id} col-md-2 flex-center"><span>$</span>${cart.total}</p></td>
          <td><button onclick="deleteCart(${cart.id})" class="btn">Delete</button></td>
        </tr>`
      ).join("")}
      <tr class="row ">
        <td class="col-md-2"><h2 class="title">SubTotal</h2></td>
        <td class="col-md-3"></td>
        <td class="col-md-1"></td>
        <td class="col-md-2"></td>
        <td class="col-md-2">
          <h2 id="js-sum" class="title flex-center"><span>$</span>${sum}</h2>
        </td>
        <td class="col-md-2"></td>
      </tr>
    </table>`;
  document.getElementById('js-product').innerHTML = myShopping;
}

function myChange(id) {
  var sum = 0;
  getItem();
  var length = myProducts.length;
  for (var i = 0; i < length; i++) {
    if (id === myProducts[i].id) {

      var x = document.getElementById(id).value;
      var total = x * myProducts[i].price;
      document.getElementsByClassName(id)[0].innerHTML = total;

      if (total !== myProducts[i].total) {
        myProducts[i].total = total;
      }
    }
    var sum = sum + myProducts[i].total;
    document.getElementById('js-sum').innerHTML = sum;
  }
  
}

  function deleteCart(id) {
    getItem();
    var result = myProducts.filter(e =>  e.id !== id);

  }

//sticky-header
window.onscroll = function() {stickyHeader()};

var header = document.getElementById('header');

function stickyHeader() {
  if (window.pageYOffset >= 200) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}

function setItem(data) {
  localStorage.setItem('items', JSON.stringify(data));
}
function getItem() {
  return myProducts = JSON.parse(localStorage.getItem('items'));
}