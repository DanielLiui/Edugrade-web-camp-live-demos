
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
        <button class="btn">Add to Cart</button>
      </div>
    `;
    productGrid.appendChild(productCard);
  });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', displayProducts);
