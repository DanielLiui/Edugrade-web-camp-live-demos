
// Sample product data
const products = [
  {
    id: 1,
    name: "Smartphone Pro",
    price: 799.99,
    description: "Latest flagship smartphone with advanced camera",
    image: "📱"
  },

  {
    id: 2,
    name: "Laptop Ultra",
    price: 1299.99,
    description: "High-performance laptop for work and gaming",
    image: "💻"
  },

  {
    id: 3,
    name: "Wireless Headphones",
    price: 199.99,
    description: "Premium noise-cancelling headphones",
    image: "🎧"
  },
  
  {
    id: 4,
    name: "Smart Watch",
    price: 299.99,
    description: "Fitness tracking and smart notifications",
    image: "⌚"
  },
  
  {
    id: 5,
    name: "Tablet Pro",
    price: 649.99,
    description: "Powerful tablet for creativity and productivity",
    image: "📱"
  },
  {
    id: 6,
    name: "Gaming Console",
    price: 499.99,
    description: "Next-gen gaming console with 4K support",
    image: "🎮"
  }
];


let cart = []  //{product: productObj defined in products, quantity: X}

// Function to display products
function displayProducts() {
  const productGrid = document.getElementById('productGrid')
  
  products.forEach(product => {
    const productCard = document.createElement('div')
    productCard.classList.add('product-card')
    //or productCard.className = "product-card"

    productCard.innerHTML = `
      <div class="product-image"> ${product.image} </div>

      <div class="product-info">
        <h3 class="product-title"> ${product.name} </h3>
        <p class="product-price">$ ${product.price} </p>
        <p class="product-description"> ${product.description} </p>
        <button class="btn" onclick="addToCart(${product.id})"> Add to Cart </button>
      </div>
    `
    productGrid.appendChild(productCard)
  })
}

// Add to cart function
function addToCart(productId) {
  const product = products.find(p => p.id == productId)
  // check if product is already in the cart
  const existingCartItem = cart.find(item => item.product.id == productId)
  
  if (!existingCartItem) {  //undefined or null
    cart.push({ product: product, quantity: 1 })
  } 
  else {  //product already in cart
    existingCartItem.quantity++
  }

  log("cart: " + JSON.stringify(cart))
  
  updateCartDisplay()
  itemAddedNotification()
}

// Remove from cart function
function removeFromCart(productId) {
  cart = cart.filter(item => item.product.id !== productId)
  updateCartDisplay()
}

// Update quantity function
function updateQuantity(productId, change) {
  const item = cart.find(item => item.id === productId);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      removeFromCart(productId);
    } else {
      updateCartDisplay();
    }
  }
}

// Update cart display
function updateCartDisplay() {
  const cartCount = document.getElementById('cartCount')
  const cartItems = document.getElementById('cartItems')
  const totalAmount = document.getElementById('totalAmount')
  
  // Update cart count (ok Matt)
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0)
  cartCount.textContent = totalItems
  
  // Update cart items
  cartItems.innerHTML = `` //start new string

  if (cart.length == 0) {
    cartItems.innerHTML = '<div class="empty-cart"> Your cart is empty </div>'
    totalAmount.textContent = '0.00'
  } 
  else {
    for (let item of cart) {
      let product = item.product

      cartItems.innerHTML += `
        <div class="cart-item">
          <div class="cart-item-image">${product.image}</div>
          <div class="cart-item-info">
            <div class="cart-item-name">${product.name}</div>
            <div class="cart-item-price">$${product.price}</div>
          </div>

          <div class="quantity-controls">
            <button class="quantity-btn" onclick="updateQuantity(${product.id}, -1)"> - </button>
            <span> ${item.quantity} </span>
            <button class="quantity-btn" onclick="updateQuantity(${product.id}, 1)"> + </button>
          </div>

          <button class="remove-btn" onclick="removeFromCart(${product.id})">Remove</button>
        </div>

      `
    }
    
    // Update total price (ok Matt)
    const total = cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    totalAmount.textContent = total.toFixed(2)  //2 decimal places
  }
}

// Toggle cart modal
function toggleCart() {
  const cartModal = document.getElementById('cartModal');
  cartModal.style.display = cartModal.style.display === 'block' ? 'none' : 'block';
}


function itemAddedNotification() {
  const notification = document.getElementById('notification')
  notification.style.display = 'block'
  
  //after x milliseconds (last parameter), run code
  setTimeout(() => {
    notification.style.display = 'none';
  }, 3000) //3000 milliseconds = 3 seconds
}

/*
// Close cart when clicking outside
// #cartModal is cart popup
document.getElementById('cartModal').addEventListener('click', function(e) {
  if (e.target === this) {
    toggleCart();
  }
});
*/

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  displayProducts()
  updateCartDisplay()
})