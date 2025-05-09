// Update cart count in the cart icon (#top)
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Calculate the total quantity of all items in the cart
    const totalQuantity = cart.reduce((total, item) => total + parseInt(item.quantity), 0);
  
    document.getElementById('top-count').textContent = totalQuantity; // Update the cart count with total quantity
  }
  
  // Add item to the cart
  function addToCart(element) {
    const nameElement = element.querySelector('.productName');
    const priceElement = element.querySelector('.productPrice');
    const imageElement = element.querySelector('.product-image');
    const quantityElement = element.querySelector('.quantity');
    
    // Ensure the elements are found
    if (nameElement && priceElement && imageElement && quantityElement) {
      const name = nameElement.textContent;
      const price = priceElement.textContent;
      const image = imageElement.getAttribute('src');
      const quantity = quantityElement.textContent;
  
      // Get existing cart or initialize a new cart
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
      // Check if the product is already in the cart
      const existingProduct = cart.find(item => item.name === name);
      if (existingProduct) {
        existingProduct.quantity = parseInt(existingProduct.quantity) + parseInt(quantity);
      } else {
        cart.push({ name, price, image, quantity });
      }
  
      // Save updated cart to localStorage
      localStorage.setItem('cart', JSON.stringify(cart));
  
      // Update cart count
      updateCartCount();
    } else {
      console.error("Required elements not found for adding to cart");
    }
  }
  
  // Update subtotal based on quantity and price
  function updateSubtotal(element) {
    const quantityElement = element.closest('.product').querySelector('.quantity');
    const priceElement = element.closest('.product').querySelector('.productPrice');
    const price = parseInt(priceElement.textContent.replace(/[^\d]/g, '')); // Remove non-numeric characters
    
    // Check if the quantity element and price element exist
    if (quantityElement && priceElement) {
      const quantity = parseInt(quantityElement.textContent); // Get the quantity value
      const subtotalElement = element.closest('.product').querySelector('.subtotal');
      
      // Ensure subtotalElement exists
      if (subtotalElement) {
        // Update the subtotal by multiplying price and quantity
        subtotalElement.textContent = `₦${price * quantity}`; // Update subtotal
      }
    }
  }
  
  // Increase the quantity of a product
  function increaseQuantity(element) {
    const quantityElement = element.closest('.product').querySelector('.quantity');
    if (quantityElement) {
      let currentQuantity = parseInt(quantityElement.textContent);
      quantityElement.textContent = currentQuantity + 1;
      updateSubtotal(element); // Update subtotal after increasing quantity
    } else {
      console.error("Quantity element not found.");
    }
  }
  
  // Decrease the quantity of a product
  function decreaseQuantity(element) {
    const quantityElement = element.closest('.product').querySelector('.quantity');
    if (quantityElement) {
      let currentQuantity = parseInt(quantityElement.textContent);
      if (currentQuantity > 0) {
        quantityElement.textContent = currentQuantity - 1;
        updateSubtotal(element); // Update subtotal after decreasing quantity
      }
    } else {
      console.error("Quantity element not found.");
    }
  }
  
  // Event listeners for plus and minus buttons
  document.querySelectorAll('.plus').forEach(button => {
    button.addEventListener('click', () => increaseQuantity(button));
  });
  
  document.querySelectorAll('.minus').forEach(button => {
    button.addEventListener('click', () => decreaseQuantity(button));
  });
  
  // Add to cart button event
  document.querySelectorAll('.add-cart').forEach(button => {
    button.addEventListener('click', (e) => {
      const product = e.target.closest('.product');
      addToCart(product);
    });
  });
  
  // Update cart count when the page loads
  window.addEventListener('DOMContentLoaded', () => {
    updateCartCount(); // Update cart count on page load
  });
  
  // Cart page: Display cart items
  if (window.location.pathname.includes('cart.html')) {
    const cartContainer = document.getElementById('cart-container');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    } else {
      cart.forEach(item => {
        const itemHTML = `
          <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" width="100">
            <p>${item.name}</p>
            <p>₦${item.price}</p>
            <p>Quantity: ${item.quantity}</p>
          </div>
        `;
        cartContainer.innerHTML += itemHTML;
      });
    }
  }
  