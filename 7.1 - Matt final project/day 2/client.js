
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

// Cart functionality
let cart = [];

// Function to display products
function displayProducts() {
  const productGrid = document.getElementById('productGrid');
  
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
      <div class="product-image">${product.image}</div>
      <div class="product-info">
        <h3 class="product-title">${product.name}</h3>
        <p class="product-price">$${product.price}</p>
        <p class="product-description">${product.description}</p>
        <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
    productGrid.appendChild(productCard);
  });
}

// Add to cart function
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  
  updateCartDisplay();
  showNotification('Product added to cart!');
}

// Remove from cart function
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartDisplay();
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
  const cartCount = document.getElementById('cartCount');
  const cartItems = document.getElementById('cartItems');
  const totalAmount = document.getElementById('totalAmount');
  
  // Update cart count
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  cartCount.textContent = totalItems;
  
  // Update cart items
  if (cart.length === 0) {
    cartItems.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
    totalAmount.textContent = '0.00';
  } else {
    cartItems.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-image">${item.image}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">$${item.price}</div>
        </div>
        <div class="quantity-controls">
          <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
          <span>${item.quantity}</span>
          <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
        </div>
        <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
      </div>
    `).join('');
    
    // Update total
    const total = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    totalAmount.textContent = total.toFixed(2);
  }
}

// Toggle cart modal
function toggleCart() {
  const cartModal = document.getElementById('cartModal');
  cartModal.style.display = cartModal.style.display === 'block' ? 'none' : 'block';
}

// Show notification
function showNotification(message) {
  const notification = document.getElementById('notification');
  notification.textContent = message;
  notification.style.display = 'block';
  
  setTimeout(() => {
    notification.style.display = 'none';
  }, 3000);
}

// Close cart when clicking outside
document.getElementById('cartModal').addEventListener('click', function(e) {
  if (e.target === this) {
    toggleCart();
  }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  displayProducts();
  updateCartDisplay();
});