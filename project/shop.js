function applyCategory(category) {
    const products = document.querySelectorAll('.product');
  
    products.forEach(product => {
      const productCategory = product.getAttribute('data-category');
  
      if (category === 'all' || productCategory === category) {
        product.style.display = 'block'; 
      } else {
        product.style.display = 'none'; 
      }
    });
  
    const buttons = document.querySelectorAll('.category-button');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
  }
  
  function openProductPage(element) {
    const productId = element.getAttribute('data-product-id');
    const category = element.getAttribute('data-category');
  
    if (productId && category) {
      window.location.href = `${productId}.html?category=${category}`;
    }
  }
    

