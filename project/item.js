function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    const totalQuantity = cart.reduce((total, item) => total + parseInt(item.quantity), 0);
  
    document.getElementById('top-count').textContent = totalQuantity; 
  }
  
  function addToCart(element) {
    const nameElement = element.querySelector('.productName');
    const priceElement = element.querySelector('.productPrice');
    const imageElement = element.querySelector('.product-image');
    const quantityElement = element.querySelector('.quantity');
    
    if (nameElement && priceElement && imageElement && quantityElement) {
      const name = nameElement.textContent;
      const price = priceElement.textContent;
      const image = imageElement.getAttribute('src');
      const quantity = quantityElement.textContent;
  
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
      const existingProduct = cart.find(item => item.name === name);
      if (existingProduct) {
        existingProduct.quantity = parseInt(existingProduct.quantity) + parseInt(quantity);
      } else {
        cart.push({ name, price, image, quantity });
      }
  
      localStorage.setItem('cart', JSON.stringify(cart));
  
      updateCartCount();
    } else {
      console.error("Required elements not found for adding to cart");
    }
  }
  
  function updateSubtotal(element) {
    const quantityElement = element.closest('.product').querySelector('.quantity');
    const priceElement = element.closest('.product').querySelector('.productPrice');
    const price = parseInt(priceElement.textContent.replace(/[^\d]/g, '')); 
    
    if (quantityElement && priceElement) {
      const quantity = parseInt(quantityElement.textContent); 
      const subtotalElement = element.closest('.product').querySelector('.subtotal');
      
      if (subtotalElement) {
        subtotalElement.textContent = `₦${price * quantity}`; 
      }
    }
  }
  
  function increaseQuantity(element) {
    const quantityElement = element.closest('.product').querySelector('.quantity');
    if (quantityElement) {
      let currentQuantity = parseInt(quantityElement.textContent);
      quantityElement.textContent = currentQuantity + 1;
      updateSubtotal(element); 
    } else {
      console.error("Quantity element not found.");
    }
  }
  
  function decreaseQuantity(element) {
    const quantityElement = element.closest('.product').querySelector('.quantity');
    if (quantityElement) {
      let currentQuantity = parseInt(quantityElement.textContent);
      if (currentQuantity > 0) {
        quantityElement.textContent = currentQuantity - 1;
        updateSubtotal(element); 
      }
    } else {
      console.error("Quantity element not found.");
    }
  }
  
  document.querySelectorAll('.plus').forEach(button => {
    button.addEventListener('click', () => increaseQuantity(button));
  });
  
  document.querySelectorAll('.minus').forEach(button => {
    button.addEventListener('click', () => decreaseQuantity(button));
  });
  
  document.querySelectorAll('.add-cart').forEach(button => {
    button.addEventListener('click', (e) => {
      const product = e.target.closest('.product');
      addToCart(product);
    });
  });
  
  window.addEventListener('DOMContentLoaded', () => {
    updateCartCount(); 
  });
  
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
  