// script.js

// Fetch product data from products.json and render cards
async function loadProducts() {
  try {
    const response = await fetch('products.json'); // JSON file you shared
    const data = await response.json();

    const productsContainer = document.querySelector('.row.row-cols-1.row-cols-md-3.g-4');
    productsContainer.innerHTML = ''; // clear any static HTML

    data.page.products.forEach(product => {
      // Create card element
      const col = document.createElement('div');
      col.className = 'col';

      col.innerHTML = `
        <div class="product-card">
          <img src="${product.image}" class="img" alt="${product.name}">
          <h5>${product.name}</h5>
          <p>${product.description}</p>
          <a href="${product.detailsPage}" class="btn-outline-gold">SHOW FULL DETAILS</a>
        </div>
      `;

      productsContainer.appendChild(col);
    });
  } catch (error) {
    console.error('Error loading products:', error);
  }
}

// Run on page load
document.addEventListener('DOMContentLoaded', loadProducts);