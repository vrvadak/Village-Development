// Product data with enhanced information
const products = [
  { id: 'apples', name: 'Heirloom Apples', price: 120, category: 'produce', badge: 'Organic', image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=1000&auto=format&fit=crop', reviews: [
    { id: 1, user: 'Rajesh Kumar', rating: 5, comment: 'These apples are incredibly fresh and delicious! Will definitely order again.', date: '2023-10-15', photo: null },
    { id: 2, user: 'Priya Sharma', rating: 4, comment: 'Great quality organic apples. A bit on the expensive side but worth it.', date: '2023-10-10', photo: null }
  ], stock: 50, backorder: true, description: 'Freshly harvested heirloom apples from our local orchards. Sweet, crisp and full of flavor.' },
  { id: 'honey', name: 'Wildflower Honey', price: 960, category: 'staples', badge: 'Artisan', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeYwlfkHbU35SNjm2w_lU5cGHkJWSvzZc6jg&s', reviews: [
    { id: 3, user: 'Amit Patel', rating: 5, comment: 'The best honey I have ever tasted. Rich flavor and perfect consistency.', date: '2023-10-12', photo: null }
  ], stock: 25, backorder: true, description: 'Pure wildflower honey collected from the pristine forests surrounding our village.' },
  { id: 'basket', name: 'Woven Basket', price: 1999, category: 'crafts', badge: 'Handmade', image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1000&auto=format&fit=crop', reviews: [
    { id: 4, user: 'Sunita Devi', rating: 4, comment: 'Beautiful craftsmanship! Perfect for storing fruits.', date: '2023-10-05', photo: null }
  ], stock: 15, backorder: false, description: 'Handwoven baskets made by local artisans using traditional techniques passed down through generations.' },
  { id: 'cheese', name: 'Goat Cheese', price: 650, category: 'staples', badge: 'Small-batch', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_0KhMwvrRrFmWqVfLc4J_tj-eEugNWKFcpA&s', reviews: [
    { id: 5, user: 'Vikram Singh', rating: 5, comment: 'Creamy and flavorful. Authentic taste of village cheese.', date: '2023-10-08', photo: null }
  ], stock: 30, backorder: true, description: 'Artisanal goat cheese made from milk of grass-fed goats in our village.' },
  { id: 'tomatoes', name: 'Vine Tomatoes', price: 90, category: 'produce', badge: 'Seasonal', image: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?q=80&w=1000&auto=format&fit=crop', reviews: [
    { id: 6, user: 'Anjali Mehta', rating: 4, comment: 'Fresh and juicy tomatoes. Great for salads.', date: '2023-10-14', photo: null }
  ], stock: 100, backorder: true, description: 'Juicy vine-ripened tomatoes harvested at peak ripeness for maximum flavor.' },
  { id: 'jam', name: 'Strawberry Jam', price: 520, category: 'staples', badge: 'Homemade', image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1000&auto=format&fit=crop', reviews: [
    { id: 7, user: 'Kavita Rao', rating: 5, comment: 'Homemade taste with perfect sweetness. My family loves it!', date: '2023-10-09', photo: null }
  ], stock: 40, backorder: true, description: 'Homemade strawberry jam made with love using traditional recipes and locally grown strawberries.' },
  { id: 'mug', name: 'Clay Mug', price: 850, category: 'crafts', badge: 'Fired', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjZuHw5Vlw1NWtJlWPe_pQrssz5a-dp2Z5Kg&s', reviews: [
    { id: 8, user: 'Deepak Nair', rating: 4, comment: 'Beautifully crafted clay mug. Keeps beverages warm for longer.', date: '2023-10-07', photo: null }
  ], stock: 20, backorder: false, description: 'Handcrafted clay mug made by local potters using traditional firing techniques.' },
  { id: 'clay-mug-set', name: 'Clay Mug Set (4 pcs)', price: 2800, category: 'crafts', badge: 'Handcrafted', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS33peF8WwAbNeW9U7iUsFEYdnUw_aAy9DTuA&s', reviews: [
    { id: 19, user: 'Priya Sharma', rating: 5, comment: 'Beautiful set of clay mugs. Perfect for family gatherings.', date: '2023-10-21', photo: null }
  ], stock: 15, backorder: false, description: 'Set of four handcrafted clay mugs, perfect for family gatherings and special occasions.' },
  { id: 'greens', name: 'Mixed Greens', price: 110, category: 'produce', badge: 'Fresh', image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=1000&auto=format&fit=crop', reviews: [
    { id: 9, user: 'Neha Gupta', rating: 5, comment: 'Super fresh greens. Perfect for my daily salads.', date: '2023-10-13', photo: null }
  ], stock: 75, backorder: true, description: 'Fresh mixed greens harvested daily from our organic farms.' },
  { id: 'surprise', name: 'Village Surprise Box', price: 399, category: 'crafts', badge: 'Limited', image: 'https://images.unsplash.com/photo-1513104890119-42b9b4c39f70?q=80&w=1000&auto=format&fit=crop', reviews: [
    { id: 10, user: 'Rahul Verma', rating: 4, comment: 'Great surprise! Always something new and interesting in the box.', date: '2023-10-06', photo: null }
  ], stock: 10, backorder: false, description: 'A surprise box filled with seasonal produce and handmade crafts from our village.' },
  // Additional products with relevant images
  { id: 'spices', name: 'Organic Spices Set', price: 750, category: 'staples', badge: 'Organic', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGw0dOQR04fFBejKk08o9ZBA9ipCKu2WtI6Q&s', reviews: [
    { id: 11, user: 'Sandeep Joshi', rating: 5, comment: 'Authentic spices with intense flavors. Cooking has never been better!', date: '2023-10-11', photo: null }
  ], stock: 35, backorder: true, description: 'A curated set of organic spices sourced directly from local farmers.' },
  { id: 'pottery', name: 'Handmade Pottery Set', price: 2499, category: 'crafts', badge: 'Handcrafted', image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSqf9yOazbsic6fk1xWGrjCR6vdMOuMbLIXkl0qznFloQM9O64hU31up0ZCZCv3RNadw8p_RbZnW-LZ44mVy6Cro3OHYGQEnvQFDL7Vuys&usqp=CAc', reviews: [
    { id: 12, user: 'Meera Iyer', rating: 4, comment: 'Elegant pottery set. Adds charm to my dining table.', date: '2023-10-04', photo: null }
  ], stock: 12, backorder: false, description: 'Elegant handmade pottery set crafted by skilled local artisans.' },
  { id: 'carrots', name: 'Fresh Carrots', price: 80, category: 'produce', badge: 'Seasonal', image: 'https://images.unsplash.com/photo-1582515073490-39981397c445?q=80&w=1000&auto=format&fit=crop', reviews: [
    { id: 13, user: 'Ramesh Reddy', rating: 4, comment: 'Crisp and sweet carrots. Great for juicing.', date: '2023-10-16', photo: null }
  ], stock: 80, backorder: true, description: 'Fresh seasonal carrots grown using organic farming methods.' },
  { id: 'olive-oil', name: 'Cold-Pressed Olive Oil', price: 899, category: 'staples', badge: 'Organic', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmSFIDXjQnPzqvr0Rr_J5jTHtv9-LdQGXUrA&s', reviews: [
    { id: 14, user: 'Lakshmi Pillai', rating: 5, comment: 'Premium quality olive oil. Perfect for my Mediterranean dishes.', date: '2023-10-03', photo: null }
  ], stock: 22, backorder: true, description: 'Premium cold-pressed olive oil from our organic olive groves.' },
  // Additional products with unique images
  { id: 'rice', name: 'Organic Basmati Rice', price: 450, category: 'staples', badge: 'Organic', image: 'https://images.unsplash.com/photo-1547056744-8b7f6f14c1a0?q=80&w=1000&auto=format&fit=crop', reviews: [
    { id: 15, user: 'Anil Kumar', rating: 5, comment: 'Best basmati rice I have ever cooked with. Perfect aroma and texture.', date: '2023-10-17', photo: null }
  ], stock: 60, backorder: true, description: 'Premium organic basmati rice with exceptional aroma and taste.' },
  { id: 'sweets', name: 'Traditional Sweets Box', price: 1200, category: 'staples', badge: 'Traditional', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCF2uJ2_GXyC9raODq-fe6FOsmCGm5QnbiRw&s', reviews: [
    { id: 16, user: 'Sunita Mehta', rating: 4, comment: 'Delicious traditional sweets. Perfect for festivals and celebrations.', date: '2023-10-18', photo: null }
  ], stock: 25, backorder: false, description: 'A box of traditional sweets made using authentic recipes and locally sourced ingredients.' },
  { id: 'handloom', name: 'Handloom Cotton Saree', price: 3500, category: 'crafts', badge: 'Handwoven', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTNLsfv6AQuQRvaEabcfdUUxrRoElNmajjrg&s', reviews: [
    { id: 17, user: 'Priya Desai', rating: 5, comment: 'Beautiful handloom saree with intricate designs. Excellent quality fabric.', date: '2023-10-19', photo: null }
  ], stock: 8, backorder: false, description: 'Beautiful handloom cotton saree woven by skilled artisans using traditional techniques.' },
  { id: 'pickle', name: 'Homemade Mango Pickle', price: 350, category: 'staples', badge: 'Homemade', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKaZtey4dI0H7EM1Iugrk1zwMZSaWgxEhkEw&s', reviews: [
    { id: 18, user: 'Rajiv Sharma', rating: 5, comment: 'Authentic taste of homemade pickle. Spicy and tangy just the way I like it.', date: '2023-10-20', photo: null }
  ], stock: 45, backorder: true, description: 'Authentic homemade mango pickle made with the finest ingredients and traditional recipes.' }
];

const state = {
  filter: 'all',
  cart: new Map(), // id -> { product, qty }
};

// Elements
const gridEl = document.getElementById('product-grid');
const countEl = document.querySelector('.cart-count');
const drawerEl = document.querySelector('.cart-drawer');
const itemsEl = document.getElementById('cart-items');
const totalEl = document.getElementById('cart-total');
const overlayEl = document.querySelector('[data-overlay]');
const openCartBtn = document.querySelector('[data-open-cart]');
const closeCartBtn = document.querySelector('[data-close-cart]');
const chips = Array.from(document.querySelectorAll('.chip'));
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');

/* Utils */
const inr = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });
const fmt = (n) => inr.format(n);

// Quick View Modal Elements
const quickViewModal = document.getElementById('quick-view-modal');
const closeQuickViewBtn = document.querySelector('[data-close-quick-view]');
const quickViewImg = document.getElementById('quick-view-img');
const quickViewTitle = document.getElementById('quick-view-title');
const quickViewDescription = document.getElementById('quick-view-description');
const quickViewPrice = document.getElementById('quick-view-price');
const quickViewStars = document.getElementById('quick-view-stars');
const quickViewReviews = document.getElementById('quick-view-reviews');
const quickViewStock = document.getElementById('quick-view-stock');
const quickViewAddBtn = document.getElementById('quick-view-add');
const quickViewWishlistBtn = document.getElementById('quick-view-wishlist');

// Helper function to render star ratings
function renderStars(rating) {
  let stars = '';
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  
  for (let i = 0; i < fullStars; i++) {
    stars += '★';
  }
  
  if (hasHalfStar) {
    stars += '☆'; // Half star representation
  }
  
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  for (let i = 0; i < emptyStars; i++) {
    stars += '☆';
  }
  
  return stars;
}

// Helper function to calculate average rating for a product
function getAverageRating(reviews) {
  if (reviews.length === 0) return 0;
  const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
  return sum / reviews.length;
}

// Helper function to get review count
function getReviewCount(reviews) {
  return reviews.length;
}

// Helper function to get random rating for demo purposes
function getRandomRating() {
  return Math.random() * 2 + 3; // Random rating between 3.0 and 5.0
}

// Helper function to get random review count for demo purposes
function getRandomReviewCount() {
  return Math.floor(Math.random() * 50) + 5; // Random count between 5 and 54
}

// Function to render product reviews in quick view
function renderProductReviews(product) {
  const reviewsList = document.getElementById('quick-view-reviews-list');
  if (!reviewsList) return;
  
  if (!product.reviews || product.reviews.length === 0) {
    reviewsList.innerHTML = '<p>No reviews yet. Be the first to review this product!</p>';
    return;
  }
  
  let reviewsHTML = '';
  product.reviews.forEach(review => {
    reviewsHTML += `
      <div class="review-item">
        <div class="review-header">
          <div class="review-user">${review.user}</div>
          <div class="review-date">${review.date}</div>
        </div>
        <div class="review-stars">${renderStars(review.rating)}</div>
        <div class="review-comment">${review.comment}</div>
        ${review.photo ? `<img src="${review.photo}" alt="Review photo" class="review-photo">` : ''}
      </div>
    `;
  });
  
  reviewsList.innerHTML = reviewsHTML;
}

// Quick View Functions
function openQuickView(product) {
  // Set modal content
  quickViewImg.src = product.image;
  quickViewImg.alt = product.name;
  quickViewTitle.textContent = product.name;
  quickViewDescription.textContent = product.description || 'Fresh from our village producers';
  quickViewPrice.textContent = fmt(product.price);
  quickViewStars.textContent = renderStars(getAverageRating(product.reviews));
  quickViewReviews.textContent = `(${getReviewCount(product.reviews)} reviews)`;
  
  // Set stock information
  if (product.stock > 0) {
    quickViewStock.textContent = `${product.stock} in stock`;
    quickViewStock.style.color = product.stock < 10 ? '#ffd166' : 'var(--muted)';
  } else {
    quickViewStock.textContent = 'Out of stock';
    quickViewStock.style.color = 'var(--danger)';
  }
  
  // Render reviews
  renderProductReviews(product);
  
  // Set product ID on buttons
  quickViewAddBtn.setAttribute('data-product-id', product.id);
  quickViewWishlistBtn.setAttribute('data-product-id', product.id);
  
  // Show modal
  quickViewModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeQuickView() {
  quickViewModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function addToCart(product) {
  const item = state.cart.get(product.id);
  if (item) {
    state.cart.set(product.id, { product, qty: item.qty + 1 });
  } else {
    state.cart.set(product.id, { product, qty: 1 });
  }
  updateCartBadge();
  renderCart();
  
  // Show notification
  showNotification(`${product.name} added to cart!`);
}

function toggleWishlist(product) {
  // This would typically interact with a wishlist system
  // For now, we'll just show a notification
  showNotification(`${product.name} added to wishlist!`);
  
  // Toggle button state visually
  const wishlistBtn = document.querySelector(`[data-wishlist="${product.id}"]`);
  if (wishlistBtn) {
    wishlistBtn.classList.add('added');
    wishlistBtn.textContent = '♥';
    setTimeout(() => {
      wishlistBtn.classList.remove('added');
      wishlistBtn.textContent = '♡';
    }, 2000);
  }
}

function showNotification(message) {
  // Simple notification function
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.style.position = 'fixed';
  notification.style.bottom = '20px';
  notification.style.right = '20px';
  notification.style.backgroundColor = 'var(--brand)';
  notification.style.color = '#0f1b13';
  notification.style.padding = '12px 20px';
  notification.style.borderRadius = '8px';
  notification.style.zIndex = '1000';
  notification.style.fontWeight = '600';
  notification.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    document.body.removeChild(notification);
  }, 3000);
}

// Product comparison functionality
let comparisonProducts = [];

function toggleCompare(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  // Check if product is already in comparison
  const index = comparisonProducts.findIndex(p => p.id === productId);
  
  if (index > -1) {
    // Remove from comparison
    comparisonProducts.splice(index, 1);
    showNotification(`${product.name} removed from comparison`);
  } else {
    // Add to comparison (limit to 4 products)
    if (comparisonProducts.length >= 4) {
      showNotification('You can only compare up to 4 products');
      return;
    }
    comparisonProducts.push(product);
    showNotification(`${product.name} added to comparison`);
  }
  
  // Update compare buttons visually
  updateCompareButtons();
  
  // Show comparison panel if we have at least 2 products
  if (comparisonProducts.length >= 2) {
    showComparisonPanel();
  } else if (comparisonProducts.length === 0) {
    hideComparisonPanel();
  }
}

function updateCompareButtons() {
  // Update all compare buttons based on current selection
  document.querySelectorAll('[data-compare]').forEach(button => {
    const productId = button.getAttribute('data-compare');
    const isInComparison = comparisonProducts.some(p => p.id === productId);
    
    if (isInComparison) {
      button.textContent = 'Remove';
      button.style.backgroundColor = 'var(--danger)';
      button.style.borderColor = 'var(--danger)';
      button.style.color = 'white';
    } else {
      button.textContent = 'Compare';
      button.style.backgroundColor = 'transparent';
      button.style.borderColor = 'var(--muted)';
      button.style.color = 'var(--muted)';
    }
  });
}

function showComparisonPanel() {
  // In a real implementation, this would show a comparison panel
  // For now, we'll just show a notification with the products being compared
  const productNames = comparisonProducts.map(p => p.name).join(', ');
  console.log(`Comparing: ${productNames}`);
}

function hideComparisonPanel() {
  // Hide comparison panel
  const comparisonPanel = document.getElementById('comparison-panel');
  if (comparisonPanel) {
    comparisonPanel.setAttribute('aria-hidden', 'true');
  }
}

function showComparisonPanel() {
  // Show comparison panel
  const comparisonPanel = document.getElementById('comparison-panel');
  const comparisonTable = document.querySelector('.comparison-table');
  
  if (comparisonPanel && comparisonTable) {
    // Build comparison table
    let tableHTML = `
      <table class="comparison-table-content">
        <thead>
          <tr>
            <th>Feature</th>
    `;
    
    // Add product headers
    comparisonProducts.forEach(product => {
      tableHTML += `
        <th>
          <div class="comparison-product-header">
            <img src="${product.image}" alt="${product.name}" width="50" height="50" style="object-fit:cover;border-radius:8px;">
            <div>${product.name}</div>
            <div class="price">${fmt(product.price)}</div>
          </div>
        </th>
      `;
    });
    
    tableHTML += `
          </tr>
        </thead>
        <tbody>
    `;
    
    // Add comparison rows
    const features = [
      { label: 'Category', getValue: p => p.category },
      { label: 'Badge', getValue: p => p.badge },
      { label: 'Rating', getValue: p => renderStars(getAverageRating(p.reviews)) },
      { label: 'Reviews', getValue: p => getReviewCount(p.reviews) },
      { label: 'Stock', getValue: p => p.stock > 0 ? `${p.stock} in stock` : 'Out of stock' }
    ];
    
    features.forEach(feature => {
      tableHTML += `
        <tr>
          <td><strong>${feature.label}</strong></td>
      `;
      
      comparisonProducts.forEach(product => {
        tableHTML += `
          <td>${feature.getValue(product)}</td>
        `;
      });
      
      tableHTML += `
        </tr>
      `;
    });
    
    tableHTML += `
        </tbody>
      </table>
    `;
    
    comparisonTable.innerHTML = tableHTML;
    comparisonPanel.setAttribute('aria-hidden', 'false');
  }
}

function getRelatedProducts(product, count = 4) {
  // Get products from the same category, excluding the current product
  return products
    .filter(p => p.category === product.category && p.id !== product.id)
    .sort(() => 0.5 - Math.random()) // Shuffle
    .slice(0, count);
}

function showAutocomplete(searchTerm) {
  const autocompleteDropdown = document.getElementById('autocomplete-dropdown');
  if (!autocompleteDropdown) return;
  
  if (searchTerm.length < 2) {
    hideAutocomplete();
    return;
  }
  
  // Find matching products
  const matches = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.badge.toLowerCase().includes(searchTerm.toLowerCase())
  ).slice(0, 5); // Limit to 5 suggestions
  
  if (matches.length === 0) {
    hideAutocomplete();
    return;
  }
  
  // Build dropdown content
  let html = '';
  matches.forEach((product, index) => {
    // Highlight matching text
    const highlightedName = product.name.replace(new RegExp(`(${searchTerm})`, 'gi'), '<span class="highlight">$1</span>');
    html += `
      <div class="autocomplete-item ${index === 0 ? 'active' : ''}" data-value="${product.name}">
        ${highlightedName} - ${fmt(product.price)}
      </div>
    `;
  });
  
  autocompleteDropdown.innerHTML = html;
  autocompleteDropdown.style.display = 'block';
  
  // Add click handlers
  autocompleteDropdown.querySelectorAll('.autocomplete-item').forEach(item => {
    item.addEventListener('click', function() {
      const searchInput = document.getElementById('product-search');
      if (searchInput) {
        searchInput.value = this.getAttribute('data-value');
        hideAutocomplete();
        renderProducts();
      }
    });
  });
}

function hideAutocomplete() {
  const autocompleteDropdown = document.getElementById('autocomplete-dropdown');
  if (autocompleteDropdown) {
    autocompleteDropdown.style.display = 'none';
    autocompleteDropdown.innerHTML = '';
  }
}

function updateActiveItem(items, activeIndex) {
  // Remove active class from all items
  items.forEach(item => item.classList.remove('active'));
  
  // Add active class to the selected item
  if (activeIndex >= 0 && activeIndex < items.length) {
    items[activeIndex].classList.add('active');
  }
}

// Add event listeners for search and filter improvements
document.addEventListener('DOMContentLoaded', function() {
  // Add real-time search functionality
  const searchInput = document.getElementById('product-search');
  if (searchInput) {
    searchInput.addEventListener('input', debounce(renderProducts, 300));
  }
  
  // Quick view modal event listeners
  document.addEventListener('click', function(e) {
    // Handle quick view button clicks
    if (e.target.matches('[data-quick-view]') || e.target.closest('[data-quick-view]')) {
      const productId = e.target.matches('[data-quick-view]') ? 
        e.target.getAttribute('data-quick-view') : 
        e.target.closest('[data-quick-view]').getAttribute('data-quick-view');
      
      const product = products.find(p => p.id === productId);
      if (product) {
        openQuickView(product);
      }
    }
    
    // Handle add review button clicks
    if (e.target.matches('#add-review-btn')) {
      // Show add review modal
      const addReviewModal = document.getElementById('add-review-modal');
      if (addReviewModal) {
        addReviewModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }
    }
    
    // Handle close add review modal
    if (e.target.matches('[data-close-add-review]')) {
      const addReviewModal = document.getElementById('add-review-modal');
      if (addReviewModal) {
        addReviewModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    }
    
    // Handle click outside add review modal to close
    if (e.target.matches('.add-review-modal')) {
      e.target.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
    
    // Handle social sharing
    if (e.target.matches('[data-share]') || e.target.closest('[data-share]')) {
      e.preventDefault();
      const shareType = e.target.matches('[data-share]') ? 
        e.target.getAttribute('data-share') : 
        e.target.closest('[data-share]').getAttribute('data-share');
      
      // Get product info from the currently open quick view
      const productName = document.getElementById('quick-view-title').textContent;
      const productUrl = window.location.href; // In a real app, this would be the product page URL
      
      // Share based on type
      switch(shareType) {
        case 'whatsapp':
          window.open(`https://wa.me/?text=Check out ${productName} on Village Market: ${productUrl}`, '_blank');
          break;
        case 'facebook':
          window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(productUrl)}&quote=Check out ${productName} on Village Market`, '_blank');
          break;
        case 'twitter':
          window.open(`https://twitter.com/intent/tweet?text=Check out ${productName} on Village Market&url=${encodeURIComponent(productUrl)}`, '_blank');
          break;
      }
    }
    
    // Handle add to cart button clicks
    if (e.target.matches('[data-add]') || e.target.closest('[data-add]')) {
      const productId = e.target.matches('[data-add]') ? 
        e.target.getAttribute('data-add') : 
        e.target.closest('[data-add]').getAttribute('data-add');
      
      const product = products.find(p => p.id === productId);
      if (product) {
        addToCart(product);
      }
    }
    
    // Handle wishlist button clicks
    if (e.target.matches('[data-wishlist]') || e.target.closest('[data-wishlist]')) {
      const productId = e.target.matches('[data-wishlist]') ? 
        e.target.getAttribute('data-wishlist') : 
        e.target.closest('[data-wishlist]').getAttribute('data-wishlist');
      
      const product = products.find(p => p.id === productId);
      if (product) {
        toggleWishlist(product);
      }
    }
    
    // Handle compare button clicks
    if (e.target.matches('[data-compare]') || e.target.closest('[data-compare]')) {
      const productId = e.target.matches('[data-compare]') ? 
        e.target.getAttribute('data-compare') : 
        e.target.closest('[data-compare]').getAttribute('data-compare');
      
      toggleCompare(productId);
    }
    
    // Handle close quick view button
    if (e.target.matches('[data-close-quick-view]')) {
      closeQuickView();
    }
    
    // Handle click outside modal to close
    if (e.target.matches('.quick-view-modal')) {
      closeQuickView();
    }
    
    // Handle quick view add to cart button
    if (e.target.matches('#quick-view-add')) {
      const productId = quickViewAddBtn.getAttribute('data-product-id');
      const product = products.find(p => p.id === productId);
      if (product) {
        addToCart(product);
        closeQuickView();
      }
    }
    
    // Handle quick view wishlist button
    if (e.target.matches('#quick-view-wishlist')) {
      const productId = quickViewWishlistBtn.getAttribute('data-product-id');
      const product = products.find(p => p.id === productId);
      if (product) {
        toggleWishlist(product);
      }
    }
    
    // Handle close comparison panel button
    if (e.target.matches('.close-comparison')) {
      hideComparisonPanel();
    }
    
    // Handle click outside comparison panel to close
    if (e.target.matches('.comparison-panel')) {
      hideComparisonPanel();
    }
  });
  
  // Add real-time price filter functionality
  const minPriceInput = document.getElementById('min-price');
  const maxPriceInput = document.getElementById('max-price');
  
  if (minPriceInput) {
    minPriceInput.addEventListener('input', debounce(renderProducts, 500));
  }
  
  if (maxPriceInput) {
    maxPriceInput.addEventListener('input', debounce(renderProducts, 500));
  }
  
  // Add sort functionality
  const sortSelect = document.getElementById('sort-products');
  if (sortSelect) {
    sortSelect.addEventListener('change', renderProducts);
  }
  
  // Add autocomplete functionality
  const autocompleteDropdown = document.getElementById('autocomplete-dropdown');
  if (searchInput && autocompleteDropdown) {
    // Handle keyboard navigation in autocomplete
    searchInput.addEventListener('keydown', function(e) {
      if (!autocompleteDropdown.style.display || autocompleteDropdown.style.display === 'none') return;
      
      const items = autocompleteDropdown.querySelectorAll('.autocomplete-item');
      if (items.length === 0) return;
      
      let activeIndex = Array.from(items).findIndex(item => item.classList.contains('active'));
      
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        activeIndex = activeIndex < items.length - 1 ? activeIndex + 1 : 0;
        updateActiveItem(items, activeIndex);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        activeIndex = activeIndex > 0 ? activeIndex - 1 : items.length - 1;
        updateActiveItem(items, activeIndex);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (activeIndex >= 0) {
          items[activeIndex].click();
        }
      } else if (e.key === 'Escape') {
        hideAutocomplete();
      }
    });
    
    // Close autocomplete when clicking outside
    document.addEventListener('click', function(e) {
      if (!searchInput.contains(e.target) && !autocompleteDropdown.contains(e.target)) {
        hideAutocomplete();
      }
    });
  }
  
  // Add review form submission
  const addReviewForm = document.getElementById('add-review-form');
  if (addReviewForm) {
    addReviewForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('review-name').value;
      const rating = document.querySelector('input[name="rating"]:checked').value;
      const comment = document.getElementById('review-comment').value;
      
      // In a real implementation, you would send this data to a server
      // For now, we'll just show a success message
      showNotification(`Thank you ${name} for your review!`);
      
      // Close the modal
      const addReviewModal = document.getElementById('add-review-modal');
      if (addReviewModal) {
        addReviewModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
      
      // Reset form
      addReviewForm.reset();
    });
  }
  
  // Community forum functionality
  const newPostBtn = document.getElementById('new-post-btn');
  if (newPostBtn) {
    newPostBtn.addEventListener('click', function() {
      showNotification('New post feature coming soon!');
    });
  }
  
  // Post actions
  document.addEventListener('click', function(e) {
    if (e.target.textContent.includes('Like')) {
      showNotification('Liked post!');
    } else if (e.target.textContent.includes('Comment')) {
      showNotification('Comment feature coming soon!');
    } else if (e.target.textContent.includes('Share')) {
      showNotification('Shared post!');
    }
  });
  
  // UGC Gallery functionality
  const uploadPhotoBtn = document.getElementById('upload-photo-btn');
  if (uploadPhotoBtn) {
    uploadPhotoBtn.addEventListener('click', function() {
      showNotification('Photo upload feature coming soon!');
    });
  }
});

// Debounce function to limit how often a function can be called
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Enhanced product rendering with better error handling
function renderProducts() {
  gridEl.setAttribute('aria-busy', 'true');
  gridEl.innerHTML = '';
  
  // Get filter values
  const searchTerm = document.getElementById('product-search')?.value.toLowerCase() || '';
  const minPrice = parseFloat(document.getElementById('min-price')?.value) || 0;
  const maxPrice = parseFloat(document.getElementById('max-price')?.value) || Infinity;
  const sortOption = document.getElementById('sort-products')?.value || 'default';
  
  // Filter products
  let filteredProducts = products.filter(p => {
    // Category filter
    const categoryMatch = state.filter === 'all' ? true : p.category === state.filter;
    
    // Search term filter
    const searchMatch = searchTerm === '' || 
      p.name.toLowerCase().includes(searchTerm) || 
      p.category.toLowerCase().includes(searchTerm) ||
      p.badge.toLowerCase().includes(searchTerm);
    
    // Price range filter
    const priceMatch = p.price >= minPrice && p.price <= maxPrice;
    
    return categoryMatch && searchMatch && priceMatch;
  });
  
  // Sort products
  switch(sortOption) {
    case 'price-low':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case 'name':
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'rating':
      // Sort by actual average rating
      filteredProducts.sort((a, b) => getAverageRating(b.reviews) - getAverageRating(a.reviews));
      break;
    default:
      // Default sorting (featured) - sort by rating and then price
      filteredProducts.sort((a, b) => {
        const ratingDiff = getAverageRating(b.reviews) - getAverageRating(a.reviews);
        if (ratingDiff !== 0) {
          return ratingDiff;
        }
        return b.price - a.price;
      });
      break;
  }
  
  // Render products
  if (filteredProducts.length === 0) {
    gridEl.innerHTML = `
      <div class="no-results">
        <h3>No products found</h3>
        <p>Try adjusting your search or filter criteria</p>
      </div>
    `;
  } else {
    filteredProducts.forEach((p, i) => {
      const card = document.createElement('article');
      card.className = 'card';
      card.style.animationDelay = `${i * 70}ms`;
      
      // Handle image loading errors
      const placeholder = `data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="100%" height="100%" fill="#203428"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#9fb5a7" font-family="Poppins, Arial" font-size="20">Image not available</text></svg>')}`;
      const imgSrc = p.image && p.image.trim().length > 0 ? p.image : placeholder;
      const imgAlt = p.image && p.image.trim().length > 0 ? p.name : `${p.name} placeholder`;
      
      // Truncate description if it exists
      const truncatedDescription = p.description ? 
        (p.description.length > 80 ? p.description.substring(0, 80) + '...' : p.description) : 
        'Fresh from our village producers';
      
      card.innerHTML = `
        <div class="card-media">
          <img src="${imgSrc}" alt="${imgAlt}" onerror="this.src='${placeholder}'" loading="lazy">
          <span class="badge">${p.badge}</span>
        </div>
        <div class="card-body">
          <h3 class="card-title">${p.name}</h3>
          <p class="product-description">${truncatedDescription}</p>
          <div class="price-row">
            <span class="price">${fmt(p.price)}</span>
            <div class="product-actions">
              <button class="add" data-add="${p.id}">Add <span aria-hidden="true">➕</span></button>
              <button class="wishlist-btn" data-wishlist="${p.id}" aria-label="Add to wishlist">♡</button>
            </div>
          </div>
          <!-- Product rating -->
          <div class="product-rating">
            <div class="stars">${renderStars(getAverageRating(p.reviews))}</div>
            <span class="rating-count">(${getReviewCount(p.reviews)} reviews)</span>
          </div>
          <!-- Stock information -->
          <div class="stock-info ${p.stock < 10 ? 'low-stock' : ''}">
            <span class="stock-text">${p.stock > 0 ? `${p.stock} in stock` : 'Out of stock'}</span>
          </div>
          <div class="card-buttons">
            <button class="quick-view-btn" data-quick-view="${p.id}">Quick View</button>
            <button class="compare-btn" data-compare="${p.id}">Compare</button>
          </div>
        </div>`;
      gridEl.appendChild(card);
    });
  }
  
  gridEl.setAttribute('aria-busy', 'false');
}

function updateCartBadge() {
  let totalQty = 0;
  for (const { qty } of state.cart.values()) totalQty += qty;
  countEl.textContent = String(totalQty);
}

function renderCart() {
  itemsEl.innerHTML = '';
  let total = 0;
  for (const { product, qty } of state.cart.values()) {
    total += product.price * qty;
    const row = document.createElement('div');
    row.className = 'cart-item';
    row.innerHTML = `
      <img src="${product.image}" alt="${product.name}" width="56" height="56" style="object-fit:cover;border-radius:8px;"/>
      <div>
        <div style="font-weight:600">${product.name}</div>
        <div style="color:#9fb5a7">${fmt(product.price)}</div>
      </div>
      <div class="qty" data-id="${product.id}">
        <button data-dec aria-label="Decrease quantity">−</button>
        <span>${qty}</span>
        <button data-inc aria-label="Increase quantity">+</button>
      </div>`;
    itemsEl.appendChild(row);
  }
  totalEl.textContent = fmt(total);
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;
  
  // Check stock availability
  const currentQty = state.cart.get(id) ? state.cart.get(id).qty : 0;
  if (currentQty >= product.stock) {
    if (product.backorder) {
      if (!confirm(`Only ${product.stock} items are currently in stock. The rest will be backordered. Do you want to continue?`)) {
        return;
      }
    } else {
      alert(`Sorry, only ${product.stock} items are available in stock.`);
      return;
    }
  }
  
  const entry = state.cart.get(id) || { product, qty: 0 };
  entry.qty += 1;
  state.cart.set(id, entry);
  updateCartBadge();
  renderCart();
  // For debugging - you can remove this in production
  console.log('Added to cart:', product, 'Cart size:', state.cart.size);
}

function openCart() {
  drawerEl.setAttribute('aria-hidden', 'false');
}

// Show add product modal
function showAddProductModal() {
  // Create modal if it doesn't exist
  let modal = document.querySelector('.add-product-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'add-product-modal';
    modal.innerHTML = `
      <div class="add-product-header">
        <h3>Add New Product</h3>
        <button class="close-modal" aria-label="Close">&times;</button>
      </div>
      <div class="add-product-content">
        <form class="add-product-form">
          <div class="form-group">
            <label for="product-name">Product Name</label>
            <input type="text" id="product-name" required>
          </div>
          <div class="form-group">
            <label for="product-price">Price (₹)</label>
            <input type="number" id="product-price" required>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="product-category">Category</label>
              <select id="product-category" required>
                <option value="produce">Produce</option>
                <option value="crafts">Crafts</option>
                <option value="staples">Staples</option>
              </select>
            </div>
            <div class="form-group">
              <label for="product-badge">Badge</label>
              <input type="text" id="product-badge" required>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="product-stock">Stock</label>
              <input type="number" id="product-stock" required>
            </div>
            <div class="form-group">
              <label for="product-backorder">Backorder</label>
              <select id="product-backorder" required>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label for="product-image">Image URL</label>
            <input type="url" id="product-image" required>
          </div>
          <div class="form-group">
            <label for="product-description">Description</label>
            <textarea id="product-description" rows="3"></textarea>
          </div>
          <div class="form-actions">
            <button type="button" class="btn btn-outline close-modal">Cancel</button>
            <button type="submit" class="btn btn-primary">Add Product</button>
          </div>
        </form>
      </div>
    `;
    document.body.appendChild(modal);
    
    // Add event listeners
    const closeButtons = modal.querySelectorAll('.close-modal');
    closeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        modal.classList.remove('active');
      });
    });
    
    const form = modal.querySelector('.add-product-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      addNewProduct();
    });
  }
  
  // Show modal
  modal.classList.add('active');
}

// Add new product
function addNewProduct() {
  const name = document.getElementById('product-name').value;
  const price = parseInt(document.getElementById('product-price').value);
  const category = document.getElementById('product-category').value;
  const badge = document.getElementById('product-badge').value;
  const stock = parseInt(document.getElementById('product-stock').value);
  const backorder = document.getElementById('product-backorder').value === 'true';
  const image = document.getElementById('product-image').value;
  
  // Create new product object
  const newProduct = {
    id: name.toLowerCase().replace(/\s+/g, '-'),
    name: name,
    price: price,
    category: category,
    badge: badge,
    image: image,
    reviews: [],
    stock: stock,
    backorder: backorder
  };
  
  // Add to products array (in a real app, this would be sent to a server)
  products.push(newProduct);
  
  // Close modal
  const modal = document.querySelector('.add-product-modal');
  if (modal) {
    modal.classList.remove('active');
  }
  
  // Refresh products table
  loadProductsData();
  
  // Show notification
  showNotification('Product added successfully!');
}

// Edit product (placeholder function)
function editProduct(productId) {
  showNotification(`Edit functionality for product ${productId} would be implemented here`);
}

// Delete product (placeholder function)
function deleteProduct(productId) {
  if (confirm('Are you sure you want to delete this product?')) {
    // In a real implementation, this would remove the product from the database
    showNotification(`Product ${productId} would be deleted in a full implementation`);
  }
}

function openCart() {
  drawerEl.setAttribute('aria-hidden', 'false');
  overlayEl.hidden = false;
  // For debugging - you can remove this in production
  console.log('Cart opened');
}

function closeCart() {
  drawerEl.setAttribute('aria-hidden', 'true');
  overlayEl.hidden = true;
}

// Event listeners
document.addEventListener('click', (e) => {
  const addBtn = e.target.closest('[data-add]');
  if (addBtn) {
    e.preventDefault();
    const productId = addBtn.getAttribute('data-add');
    addToCart(productId);
    openCart();
    return;
  }
  
  // Handle wishlist button clicks
  const wishlistBtn = e.target.closest('[data-wishlist]');
  if (wishlistBtn) {
    e.preventDefault();
    const productId = wishlistBtn.getAttribute('data-wishlist');
    addToWishlist(productId);
    wishlistBtn.classList.add('added');
    wishlistBtn.innerHTML = '♥';
    return;
  }
  
  if (e.target.closest('[data-open-cart]')) { openCart(); return; }
  if (e.target.closest('[data-close-cart]')) { closeCart(); return; }
  if (e.target === overlayEl) { closeCart(); return; }
});

itemsEl.addEventListener('click', (e) => {
  const wrap = e.target.closest('.qty');
  if (!wrap) return;
  const id = wrap.getAttribute('data-id');
  const entry = state.cart.get(id);
  if (!entry) return;
  if (e.target.hasAttribute('data-inc')) entry.qty += 1;
  if (e.target.hasAttribute('data-dec')) entry.qty -= 1;
  if (entry.qty <= 0) state.cart.delete(id); else state.cart.set(id, entry);
  updateCartBadge();
  renderCart();
});

chips.forEach(chip => chip.addEventListener('click', () => {
  chips.forEach(c => c.classList.remove('is-active'));
  chip.classList.add('is-active');
  state.filter = chip.getAttribute('data-filter');
  renderProducts();
}));

navToggle?.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  navMenu.classList.toggle('is-open');
});

document.getElementById('subscribe-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = /** @type {HTMLInputElement} */(document.getElementById('email')).value.trim();
  const msg = document.querySelector('.form-message');
  
  // Clear previous messages
  msg.textContent = '';
  msg.className = 'form-message';
  
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { 
    msg.textContent = 'Please enter a valid email.';
    msg.classList.add('error');
    return; 
  }
  
  // Simulate subscription process
  msg.textContent = 'Subscribing...';
  msg.classList.add('success');
  
  // Simulate API call delay
  setTimeout(() => {
    msg.textContent = 'Thanks! You\'re subscribed.';
    msg.classList.add('success');
    e.target.reset();
  }, 1000);
});

document.getElementById('year').textContent = String(new Date().getFullYear());

// Infrastructure Details Functionality
const infraCards = document.querySelectorAll('.infra-card');
const infraDetails = document.querySelectorAll('.infra-detail');
const closeDetailButtons = document.querySelectorAll('[data-close-detail]');

// Add click event to each infrastructure card
infraCards.forEach(card => {
  card.addEventListener('click', () => {
    const feature = card.getAttribute('data-feature');
    
    // Hide all details
    infraDetails.forEach(detail => {
      detail.style.display = 'none';
    });
    
    // Remove active class from all cards
    infraCards.forEach(c => {
      c.classList.remove('active');
    });
    
    // Show selected detail
    const detailToShow = document.getElementById(`${feature}-detail`);
    if (detailToShow) {
      detailToShow.style.display = 'block';
      card.classList.add('active');
      
      // Scroll to details
      detailToShow.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
});

// Add click event to close buttons
closeDetailButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.stopPropagation();
    
    // Hide all details
    infraDetails.forEach(detail => {
      detail.style.display = 'none';
    });
    
    // Remove active class from all cards
    infraCards.forEach(card => {
      card.classList.remove('active');
    });
  });
});

// Close details when clicking outside
document.addEventListener('click', (e) => {
  const isInfraCard = e.target.closest('.infra-card');
  const isDetail = e.target.closest('.infra-detail');
  const isCloseButton = e.target.closest('[data-close-detail]');
  
  if (!isInfraCard && !isDetail && !isCloseButton) {
    // Hide all details
    infraDetails.forEach(detail => {
      detail.style.display = 'none';
    });
    
    // Remove active class from all cards
    infraCards.forEach(card => {
      card.classList.remove('active');
    });
  }
});

// User Authentication Elements
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const userProfile = document.getElementById('user-profile');
const usernameEl = document.getElementById('username');
const profileBtn = document.getElementById('profile-btn');
const authModal = document.getElementById('auth-modal');
const closeAuthBtn = document.querySelector('[data-close-auth]');
const authTabs = document.querySelectorAll('.auth-tab');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

// Profile Elements
const profileDrawer = document.getElementById('profile-drawer');
const closeProfileBtn = document.querySelector('[data-close-profile]');
const profileTabs = document.querySelectorAll('.profile-tab');
const profileTabPanes = document.querySelectorAll('.profile-tab-pane');
const profileName = document.getElementById('profile-name');
const profileEmail = document.getElementById('profile-email');
const profilePhone = document.getElementById('profile-phone');
const ordersList = document.getElementById('orders-list');
const addressesList = document.getElementById('addresses-list');
const wishlistItems = document.getElementById('wishlist-items');

// Address Modal Elements
const addressModal = document.getElementById('address-modal');
const closeAddressBtn = document.querySelector('[data-close-address]');
const addressForm = document.getElementById('address-form');
const addAddressBtn = document.getElementById('add-address-btn');

// User State
const userState = {
  currentUser: null,
  users: JSON.parse(localStorage.getItem('users')) || {},
  orders: JSON.parse(localStorage.getItem('orders')) || {},
  addresses: JSON.parse(localStorage.getItem('addresses')) || {},
  wishlist: JSON.parse(localStorage.getItem('wishlist')) || {},
  sharedWishlists: JSON.parse(localStorage.getItem('sharedWishlists')) || {}
};

// Initialize user interface based on login state
function initUserInterface() {
  if (userState.currentUser) {
    // User is logged in
    loginBtn.style.display = 'none';
    registerBtn.style.display = 'none';
    userProfile.style.display = 'block';
    usernameEl.textContent = userState.currentUser.name;
  } else {
    // User is not logged in
    loginBtn.style.display = 'block';
    registerBtn.style.display = 'block';
    userProfile.style.display = 'none';
  }
  
  // Adjust UI for mobile devices
  adjustForMobile();
}

// Adjust UI for mobile devices
function adjustForMobile() {
  // Check if device is mobile
  const isMobile = window.innerWidth <= 768;
  
  if (isMobile) {
    // Add mobile-specific classes
    document.body.classList.add('mobile');
    
    // Adjust product grid for better mobile experience
    const productGrid = document.getElementById('product-grid');
    if (productGrid) {
      productGrid.classList.add('mobile-view');
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('is-open') && 
          !e.target.closest('.nav-toggle') && 
          !e.target.closest('.nav-menu')) {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  } else {
    // Remove mobile-specific classes
    document.body.classList.remove('mobile');
  }
}

// Add resize listener to adjust UI when window is resized
window.addEventListener('resize', () => {
  // Debounce the resize event
  clearTimeout(window.resizeTimer);
  window.resizeTimer = setTimeout(() => {
    adjustForMobile();
  }, 250);
});

// Improve mobile touch experience
document.addEventListener('DOMContentLoaded', () => {
  // Add active state for touch devices
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  
  if (isTouchDevice) {
    document.body.classList.add('touch-device');
    
    // Add touch-friendly hover effects
    const interactiveElements = document.querySelectorAll('button, .btn, .chip, .card');
    interactiveElements.forEach(el => {
      el.addEventListener('touchstart', () => {
        el.classList.add('touch-active');
      });
      
      el.addEventListener('touchend', () => {
        setTimeout(() => {
          el.classList.remove('touch-active');
        }, 150);
      });
    });
  }
});

// Open Auth Modal
function openAuthModal() {
  authModal.setAttribute('aria-hidden', 'false');
  overlayEl.hidden = false;
}

// Close Auth Modal
function closeAuthModal() {
  authModal.setAttribute('aria-hidden', 'true');
  overlayEl.hidden = true;
}

// Open Profile Drawer
function openProfileDrawer() {
  profileDrawer.setAttribute('aria-hidden', 'false');
  overlayEl.hidden = false;
  loadProfileData();
}

// Close Profile Drawer
function closeProfileDrawer() {
  profileDrawer.setAttribute('aria-hidden', 'true');
  overlayEl.hidden = true;
}

// Open Address Modal
function openAddressModal() {
  addressModal.setAttribute('aria-hidden', 'false');
  overlayEl.hidden = false;
}

// Close Address Modal
function closeAddressModal() {
  addressModal.setAttribute('aria-hidden', 'true');
  overlayEl.hidden = true;
  addressForm.reset();
}

// Switch Auth Tabs
function switchAuthTab(tabName) {
  // Update tabs
  authTabs.forEach(tab => tab.classList.remove('active'));
  document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
  
  // Update forms
  document.querySelectorAll('.auth-form').forEach(form => form.classList.remove('active'));
  document.getElementById(`${tabName}-form`).classList.add('active');
  
  // Update title
  document.getElementById('auth-title').textContent = tabName === 'login' ? 'Login to Your Account' : 'Create New Account';
}

// Register User
function registerUser(name, email, password, phone) {
  // Check if user already exists
  if (userState.users[email]) {
    alert('An account with this email already exists. Please login instead.');
    return false;
  }
  
  // Create new user
  userState.users[email] = {
    name: name,
    email: email,
    password: password, // In a real app, this would be hashed
    phone: phone,
    createdAt: new Date().toISOString()
  };
  
  // Save to localStorage
  localStorage.setItem('users', JSON.stringify(userState.users));
  
  return true;
}

// Login User
function loginUser(email, password) {
  const user = userState.users[email];
  
  // Check if user exists and password matches
  if (user && user.password === password) {
    userState.currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
    return true;
  }
  
  return false;
}

// Logout User
function logoutUser() {
  userState.currentUser = null;
  localStorage.removeItem('currentUser');
  initUserInterface();
  closeProfileDrawer();
}

// Load Profile Data
function loadProfileData() {
  if (!userState.currentUser) return;
  
  // Update profile info
  profileName.textContent = userState.currentUser.name;
  profileEmail.textContent = userState.currentUser.email;
  profilePhone.textContent = userState.currentUser.phone;
  
  // Load orders
  loadOrders();
  
  // Load addresses
  loadAddresses();
  
  // Load wishlist
  loadWishlist();
}

// Load Orders
function loadOrders() {
  ordersList.innerHTML = '';
  
  const userOrders = userState.orders[userState.currentUser.email] || [];
  
  if (userOrders.length === 0) {
    ordersList.innerHTML = '<p class="empty-message">No orders yet.</p>';
    return;
  }
  
  userOrders.forEach(order => {
    const orderEl = document.createElement('div');
    orderEl.className = 'order-card';
    orderEl.innerHTML = `
      <div class="order-header">
        <div class="order-id">Order #${order.id}</div>
        <div class="order-date">${new Date(order.date).toLocaleDateString()}</div>
        <div class="order-status completed">Completed</div>
      </div>
      <div class="order-items">
        ${order.items.map(item => `
          <div class="order-item">
            <span>${item.name} × ${item.qty}</span>
            <span>${fmt(item.price * item.qty)}</span>
          </div>
        `).join('')}
      </div>
      <div class="order-total">
        <span>Total:</span>
        <span>${fmt(order.total)}</span>
      </div>
    `;
    ordersList.appendChild(orderEl);
  });
}

// Load Addresses
function loadAddresses() {
  addressesList.innerHTML = '';
  
  const userAddresses = userState.addresses[userState.currentUser.email] || [];
  
  if (userAddresses.length === 0) {
    addressesList.innerHTML = '<p class="empty-message">No saved addresses.</p>';
    return;
  }
  
  userAddresses.forEach((address, index) => {
    const addressEl = document.createElement('div');
    addressEl.className = 'address-card';
    addressEl.innerHTML = `
      <div class="address-details">
        <div><strong>${address.name}</strong></div>
        <div>${address.phone}</div>
        <div>${address.street}</div>
        <div>${address.city}, ${address.state} ${address.zip}</div>
      </div>
      <div class="address-actions">
        <button class="btn btn-outline" data-edit-address="${index}">Edit</button>
        <button class="btn btn-outline" data-delete-address="${index}">Delete</button>
      </div>
    `;
    addressesList.appendChild(addressEl);
  });
}

// Load Wishlist
function loadWishlist() {
  wishlistItems.innerHTML = '';
  
  const userWishlist = userState.wishlist[userState.currentUser.email] || [];
  
  if (userWishlist.length === 0) {
    wishlistItems.innerHTML = '<p class="empty-message">Your wishlist is empty.</p>';
    return;
  }
  
  // Add share wishlist button
  const shareBtn = document.createElement('button');
  shareBtn.className = 'btn btn-primary share-wishlist-btn';
  shareBtn.innerHTML = 'Share Wishlist';
  shareBtn.addEventListener('click', shareWishlist);
  wishlistItems.appendChild(shareBtn);
  
  userWishlist.forEach(productId => {
    const product = products.find(p => p.id === productId);
    if (product) {
      const itemEl = document.createElement('div');
      itemEl.className = 'wishlist-item';
      itemEl.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="wishlist-item-img" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400\" height=\"300\"><rect width=\"100%\" height=\"100%\" fill=\"%23203428\"/><text x=\"50%\" y=\"50%\" dominant-baseline=\"middle\" text-anchor=\"middle\" fill=\"%239fb5a7\" font-family=\"Poppins, Arial\" font-size=\"20\">No image available</text></svg>'">
        <div class="wishlist-item-content">
          <h4 class="wishlist-item-title">${product.name}</h4>
          <div class="wishlist-item-price">${fmt(product.price)}</div>
          <div class="wishlist-item-actions">
            <button class="btn btn-outline" data-move-to-cart="${productId}">Move to Cart</button>
            <button class="btn btn-outline" data-remove-wishlist="${productId}">Remove</button>
          </div>
        </div>
      `;
      wishlistItems.appendChild(itemEl);
    }
  });
}

// Add to Wishlist
function addToWishlist(productId) {
  if (!userState.currentUser) {
    alert('Please login to add items to your wishlist.');
    openAuthModal();
    return;
  }
  
  if (!userState.wishlist[userState.currentUser.email]) {
    userState.wishlist[userState.currentUser.email] = [];
  }
  
  // Check if product is already in wishlist
  if (!userState.wishlist[userState.currentUser.email].includes(productId)) {
    userState.wishlist[userState.currentUser.email].push(productId);
    localStorage.setItem('wishlist', JSON.stringify(userState.wishlist));
    
    // Update wishlist button UI
    document.querySelectorAll(`[data-wishlist="${productId}"]`).forEach(btn => {
      btn.classList.add('added');
      btn.innerHTML = '♥';
    });
    
    // Show notification
    showNotification('Item added to wishlist!');
  } else {
    // Remove from wishlist if already added
    userState.wishlist[userState.currentUser.email] = 
      userState.wishlist[userState.currentUser.email].filter(id => id !== productId);
    localStorage.setItem('wishlist', JSON.stringify(userState.wishlist));
    
    // Update wishlist button UI
    document.querySelectorAll(`[data-wishlist="${productId}"]`).forEach(btn => {
      btn.classList.remove('added');
      btn.innerHTML = '♡';
    });
    
    // Show notification
    showNotification('Item removed from wishlist!');
  }
}

// Remove from Wishlist
function removeFromWishlist(productId) {
  if (!userState.currentUser || !userState.wishlist[userState.currentUser.email]) return;
  
  userState.wishlist[userState.currentUser.email] = 
    userState.wishlist[userState.currentUser.email].filter(id => id !== productId);
  
  localStorage.setItem('wishlist', JSON.stringify(userState.wishlist));
  loadWishlist();
}

// Move from Wishlist to Cart
function moveWishlistToCart(productId) {
  if (!userState.currentUser) {
    alert('Please login to move items to your cart.');
    openAuthModal();
    return;
  }
  
  // Add to cart
  addToCart(productId);
  
  // Remove from wishlist
  removeFromWishlist(productId);
  
  alert('Item moved to cart!');
}

// Share Wishlist
function shareWishlist() {
  if (!userState.currentUser) {
    alert('Please login to share your wishlist.');
    openAuthModal();
    return;
  }
  
  // Generate a shareable link
  const wishlistId = generateWishlistId();
  const shareableLink = `${window.location.origin}${window.location.pathname}?wishlist=${wishlistId}`;
  
  // Save the shared wishlist
  if (!userState.sharedWishlists) {
    userState.sharedWishlists = {};
  }
  userState.sharedWishlists[wishlistId] = {
    userId: userState.currentUser.email,
    items: userState.wishlist[userState.currentUser.email] || [],
    sharedAt: new Date().toISOString()
  };
  
  localStorage.setItem('sharedWishlists', JSON.stringify(userState.sharedWishlists));
  
  // Copy to clipboard
  navigator.clipboard.writeText(shareableLink).then(() => {
    alert('Wishlist link copied to clipboard!');
  }).catch(err => {
    console.error('Failed to copy: ', err);
    // Fallback: show the link
    prompt('Copy this link to share your wishlist:', shareableLink);
  });
}

// Generate a unique wishlist ID
function generateWishlistId() {
  return 'wishlist_' + Math.random().toString(36).substr(2, 9);
}

// Load shared wishlist
function loadSharedWishlist(wishlistId) {
  if (!userState.sharedWishlists || !userState.sharedWishlists[wishlistId]) {
    alert('Wishlist not found or no longer available.');
    return;
  }
  
  const sharedWishlist = userState.sharedWishlists[wishlistId];
  const owner = userState.users[sharedWishlist.userId];
  
  if (!owner) {
    alert('Wishlist owner not found.');
    return;
  }
  
  alert(`Viewing wishlist shared by ${owner.name}`);
  
  // Display shared wishlist items
  displaySharedWishlistItems(sharedWishlist.items);
}

// Display shared wishlist items
function displaySharedWishlistItems(items) {
  // This would be implemented to show the shared wishlist items
  console.log('Shared wishlist items:', items);
}

// Remove from Wishlist
function removeFromWishlist(productId) {
  if (!userState.currentUser || !userState.wishlist[userState.currentUser.email]) return;
  
  userState.wishlist[userState.currentUser.email] = 
    userState.wishlist[userState.currentUser.email].filter(id => id !== productId);
  
  localStorage.setItem('wishlist', JSON.stringify(userState.wishlist));
  loadWishlist();
}

// Save Address
function saveAddress(address) {
  if (!userState.currentUser) return;
  
  if (!userState.addresses[userState.currentUser.email]) {
    userState.addresses[userState.currentUser.email] = [];
  }
  
  userState.addresses[userState.currentUser.email].push(address);
  localStorage.setItem('addresses', JSON.stringify(userState.addresses));
}

// Save Order
function saveOrder(order) {
  if (!userState.currentUser) return;
  
  if (!userState.orders[userState.currentUser.email]) {
    userState.orders[userState.currentUser.email] = [];
  }
  
  userState.orders[userState.currentUser.email].push(order);
  localStorage.setItem('orders', JSON.stringify(userState.orders));
}

// Complete Order
function completeOrder() {
  // Show loading state
  const completeOrderBtn = document.querySelector('.complete-order');
  let originalBtnText = 'Complete Order';
  if (completeOrderBtn) {
    originalBtnText = completeOrderBtn.innerHTML;
    completeOrderBtn.innerHTML = 'Processing...';
    completeOrderBtn.disabled = true;
  }
  
  // Handle different payment methods
  if (checkoutState.paymentMethod === 'upi') {
    // For UPI payment, show a payment prompt
    const upiId = 'villagemarket@upi'; // This would be your actual UPI ID
    const totalAmount = calculateTotal();
    const paymentMessage = `Please send ${fmt(totalAmount)} to ${upiId} using any UPI app.\n\nAfter payment, click OK to confirm your order.`;
    
    if (!confirm(paymentMessage)) {
      // Reset button state if user cancels
      if (completeOrderBtn) {
        completeOrderBtn.innerHTML = originalBtnText;
        completeOrderBtn.disabled = false;
      }
      return; // User cancelled the payment
    }
  }
  
  // Save order to user's order history if logged in
  if (userState.currentUser) {
    const order = {
      id: 'VM' + Math.floor(100000 + Math.random() * 900000),
      date: new Date().toISOString(),
      items: Array.from(state.cart.values()).map(({ product, qty }) => ({
        id: product.id,
        name: product.name,
        price: product.price,
        qty: qty
      })),
      total: calculateTotal(),
      shippingMethod: checkoutState.shippingMethod,
      paymentMethod: checkoutState.paymentMethod,
      customerInfo: checkoutState.customerInfo
    };
    
    saveOrder(order);
  }
  
  // In a real implementation, you would send the order to a server here
  // For this demo, we'll just show the success screen
  
  // Hide the checkout steps
  document.querySelector('.checkout-content').style.display = 'none';
  
  // Show success screen
  document.querySelector('.checkout-success').style.display = 'flex';
  
  // Generate a random order ID
  const orderId = 'VM' + Math.floor(100000 + Math.random() * 900000);
  document.getElementById('order-id').textContent = orderId;
  
  // Clear the cart after successful order
  state.cart.clear();
  updateCartBadge();
  renderCart();
  
  // Reset button state
  if (completeOrderBtn) {
    completeOrderBtn.innerHTML = originalBtnText;
    completeOrderBtn.disabled = false;
  }
}

// Switch Profile Tabs
function switchProfileTab(tabName) {
  // Update tabs
  profileTabs.forEach(tab => tab.classList.remove('active'));
  document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
  
  // Update panes
  profileTabPanes.forEach(pane => pane.classList.remove('active'));
  document.querySelector(`[data-tab-pane="${tabName}"]`).classList.add('active');
}

// Event Listeners for Auth
loginBtn.addEventListener('click', () => {
  switchAuthTab('login');
  openAuthModal();
});

registerBtn.addEventListener('click', () => {
  switchAuthTab('register');
  openAuthModal();
});

closeAuthBtn.addEventListener('click', closeAuthModal);

authTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    switchAuthTab(tab.getAttribute('data-tab'));
  });
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  
  if (loginUser(email, password)) {
    closeAuthModal();
    initUserInterface();
    alert('Login successful!');
  } else {
    alert('Invalid email or password. Please try again.');
  }
});

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('register-name').value;
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;
  const phone = document.getElementById('register-phone').value;
  
  if (registerUser(name, email, password, phone)) {
    alert('Registration successful! You can now login.');
    switchAuthTab('login');
  }
});

// Event Listeners for Profile
profileBtn.addEventListener('click', openProfileDrawer);

closeProfileBtn.addEventListener('click', closeProfileDrawer);

profileTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    switchProfileTab(tab.getAttribute('data-tab'));
  });
});

// Event Listeners for Address Modal
addAddressBtn.addEventListener('click', openAddressModal);

closeAddressBtn.addEventListener('click', closeAddressModal);

addressForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const address = {
    name: document.getElementById('address-name').value,
    phone: document.getElementById('address-phone').value,
    street: document.getElementById('address-street').value,
    city: document.getElementById('address-city').value,
    state: document.getElementById('address-state').value,
    zip: document.getElementById('address-zip').value
  };
  
  saveAddress(address);
  closeAddressModal();
  loadAddresses();
  alert('Address saved successfully!');
});

// The completeOrderBtn event listener is now included in the checkout event listeners section above

// Mock analytics data
const analyticsData = {
  // Real-time sales data (last 24 hours)
  realtimeSales: [
    { hour: '00:00', sales: 1200 },
    { hour: '04:00', sales: 800 },
    { hour: '08:00', sales: 2400 },
    { hour: '12:00', sales: 3100 },
    { hour: '16:00', sales: 2800 },
    { hour: '20:00', sales: 4200 },
    { hour: '24:00', sales: 3500 }
  ],
  
  // Customer behavior data
  mostVisitedProducts: [
    { name: 'Heirloom Apples', visits: 124 },
    { name: 'Wildflower Honey', visits: 98 },
    { name: 'Woven Basket', visits: 87 },
    { name: 'Goat Cheese', visits: 76 },
    { name: 'Vine Tomatoes', visits: 65 }
  ],
  
  // Shopping patterns
  shoppingPatterns: {
    avgSession: 8, // minutes
    cartAbandonment: 32, // percentage
    repeatCustomers: 45 // percentage
  },
  
  // Product performance
  topSellingProducts: [
    { name: 'Wildflower Honey', sales: 42 },
    { name: 'Heirloom Apples', sales: 38 },
    { name: 'Goat Cheese', sales: 35 },
    { name: 'Woven Basket', sales: 28 },
    { name: 'Strawberry Jam', sales: 24 }
  ],
  
  // Product ratings
  productRatings: [
    { name: 'Wildflower Honey', rating: 4.8 },
    { name: 'Heirloom Apples', rating: 4.6 },
    { name: 'Goat Cheese', rating: 4.7 },
    { name: 'Woven Basket', rating: 4.5 },
    { name: 'Strawberry Jam', rating: 4.4 }
  ],
  
  // Geographic distribution
  topRegions: [
    { region: 'Vadodara', sales: 12400 },
    { region: 'Ahmedabad', sales: 9800 },
    { region: 'Surat', sales: 7600 },
    { region: 'Rajkot', sales: 5400 },
    { region: 'Bhavnagar', sales: 3200 }
  ]
};

// Function to filter analytics data based on selected period
function filterAnalyticsData(period) {
  // In a real application, this would filter actual data
  // For demo purposes, we'll return the same data but with a note about the period
  return {
    ...analyticsData,
    period: period
  };
}

// Handle wishlist actions
document.addEventListener('click', (e) => {
  // Handle analytics tab activation
  if (e.target.matches('[data-tab="analytics"]') || e.target.closest('[data-tab="analytics"]')) {
    setTimeout(() => {
      renderAdvancedAnalytics();
    }, 100);
  }
  // Move to cart from wishlist
  const moveToCartBtn = e.target.closest('[data-move-to-cart]');
  if (moveToCartBtn) {
    const productId = moveToCartBtn.getAttribute('data-move-to-cart');
    moveWishlistToCart(productId);
    return;
  }
  
  // Remove from wishlist
  const removeWishlistBtn = e.target.closest('[data-remove-wishlist]');
  if (removeWishlistBtn) {
    const productId = removeWishlistBtn.getAttribute('data-remove-wishlist');
    removeFromWishlist(productId);
    alert('Item removed from wishlist!');
    return;
  }
});

// Close modals when clicking overlay
overlayEl.addEventListener('click', (e) => {
  if (authModal && !authModal.hasAttribute('aria-hidden')) {
    closeAuthModal();
  } else if (profileDrawer && !profileDrawer.hasAttribute('aria-hidden')) {
    closeProfileDrawer();
  } else if (addressModal && !addressModal.hasAttribute('aria-hidden')) {
    closeAddressModal();
  } else if (checkoutDrawerEl && !checkoutDrawerEl.hasAttribute('aria-hidden')) {
    closeCheckout();
  } else if (drawerEl && !drawerEl.hasAttribute('aria-hidden')) {
    closeCart();
  }
});

// Function to render all advanced analytics
function renderAdvancedAnalytics() {
  // Get selected period
  const periodSelect = document.getElementById('analytics-period');
  const period = periodSelect ? periodSelect.value : 'week';
  
  // Filter data based on period
  const filteredData = filterAnalyticsData(period);
  
  // Render with filtered data
  renderKeyMetrics();
  renderCustomerBehavior();
  renderProductPerformance();
  renderGeographicDistribution();
  
  // Render charts
  setTimeout(() => {
    // Render real-time sales chart
    const salesCanvas = document.getElementById('realtime-sales-chart');
    if (salesCanvas) {
      salesCanvas.width = salesCanvas.offsetWidth;
      salesCanvas.height = salesCanvas.offsetHeight;
      renderChart('realtime-sales-chart', filteredData.realtimeSales, 'line');
    }
  }, 200);
}

// Function to render key metrics
function renderKeyMetrics() {
  // Get selected period
  const periodSelect = document.getElementById('analytics-period');
  const period = periodSelect ? periodSelect.value : 'week';
  
  // For demo purposes, we'll use some mock calculations with period-based adjustments
  let totalRevenue = 125000; // ₹1.25 Lakhs
  let totalOrders = 342;
  const totalProducts = products.length;
  let totalUsers = 876;
  
  // Store previous values for trend calculation
  const prevRevenue = parseFloat(document.getElementById('total-revenue')?.textContent.replace(/[^0-9.]/g, '') || 0);
  const prevOrders = parseInt(document.getElementById('total-orders')?.textContent || 0);
  const prevUsers = parseInt(document.getElementById('total-users')?.textContent || 0);
  
  // Adjust values based on period
  switch(period) {
    case 'today':
      totalRevenue *= 0.15;
      totalOrders *= 0.15;
      totalUsers *= 0.2;
      break;
    case 'week':
      // Base values already set
      break;
    case 'month':
      totalRevenue *= 4.3;
      totalOrders *= 4.3;
      totalUsers *= 3.5;
      break;
    case 'quarter':
      totalRevenue *= 13;
      totalOrders *= 13;
      totalUsers *= 10;
      break;
    case 'year':
      totalRevenue *= 52;
      totalOrders *= 52;
      totalUsers *= 40;
      break;
  }
  
  document.getElementById('total-revenue').textContent = fmt(totalRevenue);
  document.getElementById('total-orders').textContent = Math.round(totalOrders);
  document.getElementById('total-products').textContent = totalProducts;
  document.getElementById('total-users').textContent = Math.round(totalUsers);
  
  // Update trend indicators
  updateTrendIndicator('revenue-trend', totalRevenue, prevRevenue);
  updateTrendIndicator('orders-trend', totalOrders, prevOrders);
  updateTrendIndicator('users-trend', totalUsers, prevUsers);
}

// Function to update trend indicators
function updateTrendIndicator(elementId, currentValue, previousValue) {
  const trendElement = document.getElementById(elementId);
  if (!trendElement) return;
  
  if (previousValue === 0) {
    trendElement.textContent = '';
    return;
  }
  
  const change = ((currentValue - previousValue) / previousValue) * 100;
  
  if (Math.abs(change) < 1) {
    trendElement.textContent = '→ 0%';
    trendElement.className = 'trend-indicator trend-neutral';
  } else if (change > 0) {
    trendElement.textContent = `↑ ${change.toFixed(1)}%`;
    trendElement.className = 'trend-indicator trend-up';
  } else {
    trendElement.textContent = `↓ ${Math.abs(change).toFixed(1)}%`;
    trendElement.className = 'trend-indicator trend-down';
  }
}

// Function to render customer behavior analytics
function renderCustomerBehavior() {
  // Most visited products
  const mostVisitedList = document.getElementById('most-visited-products');
  if (mostVisitedList) {
    mostVisitedList.innerHTML = '';
    analyticsData.mostVisitedProducts.forEach(product => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${product.name}</span>
        <span>${product.visits} visits</span>
      `;
      mostVisitedList.appendChild(li);
    });
  }
  
  // Shopping patterns
  document.getElementById('avg-session').textContent = `${analyticsData.shoppingPatterns.avgSession} min`;
  document.getElementById('cart-abandonment').textContent = `${analyticsData.shoppingPatterns.cartAbandonment}%`;
  document.getElementById('repeat-customers').textContent = `${analyticsData.shoppingPatterns.repeatCustomers}%`;
}

// Function to render product performance metrics
function renderProductPerformance() {
  // Top selling products
  const topSellingList = document.getElementById('top-selling-products');
  if (topSellingList) {
    topSellingList.innerHTML = '';
    analyticsData.topSellingProducts.forEach(product => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${product.name}</span>
        <span>${product.sales} units</span>
      `;
      topSellingList.appendChild(li);
    });
  }
  
  // Product ratings
  const productRatingsList = document.getElementById('product-ratings');
  if (productRatingsList) {
    productRatingsList.innerHTML = '';
    analyticsData.productRatings.forEach(product => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${product.name}</span>
        <span>${product.rating}/5.0</span>
      `;
      productRatingsList.appendChild(li);
    });
  }
}

// Function to render geographic distribution
function renderGeographicDistribution() {
  const topRegionsList = document.getElementById('top-regions');
  if (topRegionsList) {
    topRegionsList.innerHTML = '';
    analyticsData.topRegions.forEach(region => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${region.region}</span>
        <span>${fmt(region.sales)}</span>
      `;
      topRegionsList.appendChild(li);
    });
  }
}

// Function to simulate real-time data updates
function startRealTimeUpdates() {
  // In a real application, this would connect to a WebSocket or API
  // For demo purposes, we'll just update the data periodically
  
  // Update key metrics every 5 seconds
  setInterval(() => {
    // Update key metrics with random fluctuations
    const revenueElement = document.getElementById('total-revenue');
    if (revenueElement) {
      const currentRevenue = parseFloat(revenueElement.textContent.replace(/[^0-9.]/g, ''));
      const fluctuation = (Math.random() - 0.5) * 2000; // Random fluctuation between -1000 and 1000
      const newRevenue = Math.max(0, currentRevenue + fluctuation);
      revenueElement.textContent = fmt(newRevenue);
    }
    
    // Update order count
    const ordersElement = document.getElementById('total-orders');
    if (ordersElement) {
      const currentOrders = parseInt(ordersElement.textContent);
      const orderFluctuation = Math.floor((Math.random() - 0.3) * 5); // Random fluctuation between -1 and 4
      const newOrders = Math.max(0, currentOrders + orderFluctuation);
      ordersElement.textContent = newOrders;
    }
    
    // Update user count
    const usersElement = document.getElementById('total-users');
    if (usersElement) {
      const currentUsers = parseInt(usersElement.textContent);
      const userFluctuation = Math.floor((Math.random() - 0.4) * 3); // Random fluctuation between -1 and 2
      const newUsers = Math.max(0, currentUsers + userFluctuation);
      usersElement.textContent = newUsers;
    }
  }, 5000); // Update every 5 seconds
  
  // Update charts every 10 seconds
  setInterval(() => {
    // Update real-time sales chart with new data point
    const analyticsTab = document.querySelector('[data-tab="analytics"]');
    if (analyticsTab && analyticsTab.classList.contains('active')) {
      // Only update if analytics tab is active
      updateRealTimeSalesData();
      renderAdvancedAnalytics();
    }
  }, 10000); // Update every 10 seconds
}

// Function to update real-time sales data
function updateRealTimeSalesData() {
  // Add a new data point and remove the oldest one
  const newDataPoint = {
    hour: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
    sales: Math.floor(Math.random() * 5000) + 1000 // Random sales between 1000 and 6000
  };
  
  // Add new point and remove oldest
  analyticsData.realtimeSales.push(newDataPoint);
  if (analyticsData.realtimeSales.length > 10) {
    analyticsData.realtimeSales.shift();
  }
}

// Start real-time updates when the page loads
startRealTimeUpdates();

// Function to export analytics data
function exportAnalyticsData(format = 'csv') {
  // In a real application, this would export actual data
  // For demo purposes, we'll show different messages based on format
  
  switch(format) {
    case 'csv':
      alert('Analytics data exported as CSV successfully! In a real application, this would download a CSV file.');
      // Log data to console for demonstration
      console.log('CSV Data:', convertToCSV(analyticsData));
      break;
    case 'json':
      alert('Analytics data exported as JSON successfully! In a real application, this would download a JSON file.');
      // Log data to console for demonstration
      console.log('JSON Data:', JSON.stringify(analyticsData, null, 2));
      break;
    case 'pdf':
      alert('Analytics data exported as PDF successfully! In a real application, this would download a PDF report.');
      // Log data to console for demonstration
      console.log('PDF Data would be generated from:', analyticsData);
      break;
    default:
      alert('Analytics data exported successfully! In a real application, this would download a report.');
      console.log('Analytics Data:', analyticsData);
  }
}

// Helper function to convert data to CSV format
function convertToCSV(data) {
  // This is a simplified CSV conversion
  // In a real application, you would convert all the analytics data to proper CSV format
  let csv = 'Analytics Report\n\n';
  
  // Add key metrics
  csv += 'Key Metrics\n';
  csv += 'Metric,Value\n';
  csv += `Total Revenue,${document.getElementById('total-revenue').textContent}\n`;
  csv += `Total Orders,${document.getElementById('total-orders').textContent}\n`;
  csv += `Total Products,${document.getElementById('total-products').textContent}\n`;
  csv += `Total Users,${document.getElementById('total-users').textContent}\n\n`;
  
  // Add top selling products
  csv += 'Top Selling Products\n';
  csv += 'Product,Units Sold\n';
  analyticsData.topSellingProducts.forEach(product => {
    csv += `${product.name},${product.sales}\n`;
  });
  
  return csv;
}

// Add event listener for export button (if we add one later)
document.addEventListener('click', function(e) {
  if (e.target.id === 'export-analytics') {
    // Toggle export options dropdown
    const exportOptions = document.getElementById('export-options');
    if (exportOptions) {
      exportOptions.style.display = exportOptions.style.display === 'none' ? 'block' : 'none';
    }
  } else if (e.target.classList.contains('export-option')) {
    // Handle export option click
    const format = e.target.getAttribute('data-format');
    exportAnalyticsData(format);
    
    // Hide dropdown
    const exportOptions = document.getElementById('export-options');
    if (exportOptions) {
      exportOptions.style.display = 'none';
    }
  } else {
    // Hide dropdown if clicked outside
    const exportOptions = document.getElementById('export-options');
    if (exportOptions && !e.target.closest('.export-dropdown')) {
      exportOptions.style.display = 'none';
    }
  }
});

// Add event listener for period selector
document.addEventListener('change', function(e) {
  if (e.target.id === 'analytics-period') {
    const period = e.target.value;
    
    // Show/hide custom date range based on selection
    const customDateRange = document.getElementById('custom-date-range');
    if (period === 'custom' && customDateRange) {
      customDateRange.style.display = 'flex';
      
      // Set default dates (last 7 days)
      const endDate = new Date();
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - 7);
      
      document.getElementById('start-date').valueAsDate = startDate;
      document.getElementById('end-date').valueAsDate = endDate;
    } else if (customDateRange) {
      customDateRange.style.display = 'none';
    }
    
    // Update the display to show the selected period
    renderAdvancedAnalytics();
  }
});

// Add event listener for custom date range apply button
document.addEventListener('click', function(e) {
  if (e.target.id === 'apply-date-range') {
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    
    if (startDate && endDate) {
      // In a real application, this would fetch data for the custom date range
      // For demo purposes, we'll just show an alert
      console.log(`Custom date range: ${startDate} to ${endDate}`);
      renderAdvancedAnalytics();
    }
  }
});

// Add event listener for comparison selector
document.addEventListener('change', function(e) {
  if (e.target.id === 'compare-period') {
    // In a real application, this would fetch comparison data
    // For demo purposes, we'll just show an alert
    const comparison = e.target.value;
    if (comparison !== 'none') {
      alert(`Comparing current period with ${comparison === 'previous' ? 'previous period' : 'same period last year'}. In a real application, this would show comparison data.`);
      renderAdvancedAnalytics();
    }
  }
});

// Add event listener for refresh button
document.addEventListener('click', function(e) {
  if (e.target.id === 'refresh-analytics') {
    // Show loading indicator
    const refreshBtn = document.getElementById('refresh-analytics');
    const originalText = refreshBtn.textContent;
    refreshBtn.textContent = '...';
    refreshBtn.disabled = true;
    
    // Simulate data refresh
    setTimeout(() => {
      renderAdvancedAnalytics();
      refreshBtn.textContent = originalText;
      refreshBtn.disabled = false;
      
      // Show notification
      showNotification('Analytics data refreshed!');
    }, 1000);
  }
});

// Initialize analytics when the page loads
document.addEventListener('DOMContentLoaded', function() {
  // Render advanced analytics when the analytics tab is active
  const analyticsTab = document.querySelector('[data-tab="analytics"]');
  if (analyticsTab) {
    analyticsTab.addEventListener('click', function() {
      setTimeout(() => {
        renderAdvancedAnalytics();
      }, 100);
    });
  }
});

// Simple chart rendering function (in a real app, you would use Chart.js or similar)
function renderChart(canvasId, data, type = 'line') {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;
  
  // Clear canvas
  ctx.clearRect(0, 0, width, height);
  
  // Set styles
  ctx.fillStyle = 'rgba(119, 198, 110, 0.2)';
  ctx.strokeStyle = 'var(--brand)';
  ctx.lineWidth = 2;
  
  // Draw chart based on type
  if (type === 'line') {
    renderLineChart(ctx, width, height, data);
  } else if (type === 'bar') {
    renderBarChart(ctx, width, height, data);
  }
}

function renderLineChart(ctx, width, height, data) {
  if (data.length === 0) return;
  
  // Find min and max values
  const values = data.map(d => d.sales);
  const minVal = Math.min(...values);
  const maxVal = Math.max(...values);
  
  // Calculate scaling factors
  const xStep = width / (data.length - 1);
  const yScale = (height - 40) / (maxVal - minVal);
  
  // Draw line
  ctx.beginPath();
  data.forEach((point, i) => {
    const x = i * xStep;
    const y = height - 20 - (point.sales - minVal) * yScale;
    
    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  });
  
  ctx.stroke();
  
  // Draw points
  ctx.fillStyle = 'var(--brand)';
  data.forEach((point, i) => {
    const x = i * xStep;
    const y = height - 20 - (point.sales - minVal) * yScale;
    
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fill();
  });
  
  // Draw labels
  ctx.fillStyle = 'var(--muted)';
  ctx.font = '12px Poppins';
  ctx.textAlign = 'center';
  data.forEach((point, i) => {
    const x = i * xStep;
    const y = height - 5;
    
    ctx.fillText(point.hour, x, y);
  });
}

function renderBarChart(ctx, width, height, data) {
  if (data.length === 0) return;
  
  // Find max value
  const maxVal = Math.max(...data.map(d => d.sales));
  
  // Calculate dimensions
  const barWidth = width / (data.length + 1);
  const yScale = (height - 40) / maxVal;
  
  // Draw bars
  ctx.fillStyle = 'var(--brand)';
  data.forEach((point, i) => {
    const x = (i + 1) * barWidth - barWidth / 2;
    const barHeight = point.sales * yScale;
    const y = height - 20 - barHeight;
    
    ctx.fillRect(x - barWidth / 4, y, barWidth / 2, barHeight);
    
    // Draw value label
    ctx.fillStyle = 'var(--text)';
    ctx.font = '12px Poppins';
    ctx.textAlign = 'center';
    ctx.fillText(fmt(point.sales), x, y - 5);
    
    // Draw time label
    ctx.fillStyle = 'var(--muted)';
    ctx.fillText(point.hour, x, height - 5);
    
    ctx.fillStyle = 'var(--brand)';
  });
}

// Initialize user interface
initUserInterface();

// Add event listeners for search and filtering
document.getElementById('product-search')?.addEventListener('input', renderProducts);
document.getElementById('min-price')?.addEventListener('input', renderProducts);
document.getElementById('max-price')?.addEventListener('input', renderProducts);
document.getElementById('sort-products')?.addEventListener('change', renderProducts);

// Init
renderProducts();
updateCartBadge();
renderCart();

// Checkout Elements
const checkoutDrawerEl = document.querySelector('.checkout-drawer');
const closeCheckoutBtn = document.querySelector('[data-close-checkout]');
const continueShoppingBtn = document.querySelector('.continue-shopping');

// Checkout Steps
const checkoutSteps = document.querySelectorAll('.checkout-step');
const progressSteps = document.querySelectorAll('.progress-step');
const continueToShippingBtn = document.querySelector('.continue-to-shipping');
const backToInfoBtn = document.querySelector('.back-to-info');
const continueToPaymentBtn = document.querySelector('.continue-to-payment');
const backToShippingBtn = document.querySelector('.back-to-shipping');
const completeOrderBtn = document.querySelector('.complete-order');

// Customer Info Form
const customerInfoForm = document.getElementById('customer-info-form');

// Shipping Options
const shippingOptions = document.querySelectorAll('input[name="shipping"]');

// State for checkout
const checkoutState = {
  step: 1,
  customerInfo: {},
  shippingMethod: 'standard',
  paymentMethod: 'cod'
};

// Functions
function openCheckout() {
  // Close cart first
  closeCart();
  
  // Open checkout
  checkoutDrawerEl.setAttribute('aria-hidden', 'false');
  overlayEl.hidden = false;
  
  // Reset to first step
  goToStep(1);
}

function closeCheckout() {
  checkoutDrawerEl.setAttribute('aria-hidden', 'true');
  overlayEl.hidden = true;
}

function goToStep(step) {
  checkoutState.step = step;
  
  // Update steps visibility
  checkoutSteps.forEach(s => s.classList.remove('active'));
  const targetStep = document.querySelector(`[data-checkout-step="${step}"]`);
  if (targetStep) targetStep.classList.add('active');
  
  // Update progress
  progressSteps.forEach(p => p.classList.remove('active'));
  const targetProgress = document.querySelector(`[data-step="${step}"]`);
  if (targetProgress) targetProgress.classList.add('active');
  
  // If we're on the payment step, update the order summary and show payment instructions
  if (step === 3) {
    updateOrderSummary();
    showPaymentInstructions(checkoutState.paymentMethod);
  }
  
  // Scroll to top of checkout content
  const checkoutContent = document.querySelector('.checkout-content');
  if (checkoutContent) checkoutContent.scrollTop = 0;
}

function updateOrderSummary() {
  const summaryItemsEl = document.getElementById('summary-items');
  const summaryTotalEl = document.getElementById('summary-total');
  
  // Clear existing items
  summaryItemsEl.innerHTML = '';
  
  // Add cart items
  let total = 0;
  for (const { product, qty } of state.cart.values()) {
    const itemTotal = product.price * qty;
    total += itemTotal;
    
    const itemEl = document.createElement('div');
    itemEl.className = 'summary-item';
    itemEl.innerHTML = `
      <div>
        <div class="summary-item-name">${product.name}</div>
        <div>Qty: ${qty}</div>
      </div>
      <div>${fmt(itemTotal)}</div>
    `;
    summaryItemsEl.appendChild(itemEl);
  }
  
  // Add shipping cost
  let shippingCost = 0;
  if (checkoutState.shippingMethod === 'express') {
    shippingCost = 150;
    const shippingEl = document.createElement('div');
    shippingEl.className = 'summary-item';
    shippingEl.innerHTML = `
      <div>Express Shipping</div>
      <div>${fmt(shippingCost)}</div>
    `;
    summaryItemsEl.appendChild(shippingEl);
  }
  
  // Update total
  total += shippingCost;
  summaryTotalEl.textContent = fmt(total);
}

function calculateTotal() {
  let total = 0;
  for (const { product, qty } of state.cart.values()) {
    total += product.price * qty;
  }
  
  // Add shipping cost
  if (checkoutState.shippingMethod === 'express') {
    total += 150;
  }
  
  return total;
}

function showPaymentInstructions(paymentMethod) {
  const instructionsEl = document.getElementById('payment-instructions');
  const instructionsTextEl = document.getElementById('payment-instructions-text');
  
  if (paymentMethod === 'cod') {
    instructionsEl.style.display = 'block';
    instructionsTextEl.innerHTML = '<strong>Cash on Delivery:</strong> You will pay in cash when your order is delivered to your address.';
  } else if (paymentMethod === 'upi') {
    const upiId = 'villagemarket@upi';
    const totalAmount = calculateTotal();
    instructionsEl.style.display = 'block';
    instructionsTextEl.innerHTML = `<strong>UPI Payment:</strong> Please send <strong>${fmt(totalAmount)}</strong> to <strong>${upiId}</strong> using any UPI app. After making the payment, click "Complete Order" to confirm.`;
  } else {
    instructionsEl.style.display = 'none';
  }
}

function completeOrder() {
  // Show loading state
  const completeOrderBtn = document.querySelector('.complete-order');
  let originalBtnText = 'Complete Order';
  if (completeOrderBtn) {
    originalBtnText = completeOrderBtn.innerHTML;
    completeOrderBtn.innerHTML = 'Processing...';
    completeOrderBtn.disabled = true;
  }
  
  // Handle different payment methods
  if (checkoutState.paymentMethod === 'upi') {
    // For UPI payment, show a payment prompt
    const upiId = 'villagemarket@upi'; // This would be your actual UPI ID
    const totalAmount = calculateTotal();
    const paymentMessage = `Please send ${fmt(totalAmount)} to ${upiId} using any UPI app.\n\nAfter payment, click OK to confirm your order.`;
    
    if (!confirm(paymentMessage)) {
      // Reset button state if user cancels
      if (completeOrderBtn) {
        completeOrderBtn.innerHTML = originalBtnText;
        completeOrderBtn.disabled = false;
      }
      return; // User cancelled the payment
    }
  }
  
  // Save order to user's order history if logged in
  if (userState.currentUser) {
    const order = {
      id: 'VM' + Math.floor(100000 + Math.random() * 900000),
      date: new Date().toISOString(),
      items: Array.from(state.cart.values()).map(({ product, qty }) => ({
        id: product.id,
        name: product.name,
        price: product.price,
        qty: qty
      })),
      total: calculateTotal(),
      shippingMethod: checkoutState.shippingMethod,
      paymentMethod: checkoutState.paymentMethod,
      customerInfo: checkoutState.customerInfo
    };
    
    saveOrder(order);
  }
  
  // In a real implementation, you would send the order to a server here
  // For this demo, we'll just show the success screen
  
  // Hide the checkout steps
  document.querySelector('.checkout-content').style.display = 'none';
  
  // Show success screen
  document.querySelector('.checkout-success').style.display = 'flex';
  
  // Generate a random order ID
  const orderId = 'VM' + Math.floor(100000 + Math.random() * 900000);
  document.getElementById('order-id').textContent = orderId;
  
  // Clear the cart after successful order
  state.cart.clear();
  updateCartBadge();
  renderCart();
  
  // Reset button state
  if (completeOrderBtn) {
    completeOrderBtn.innerHTML = originalBtnText;
    completeOrderBtn.disabled = false;
  }
}

function resetCheckout() {
  // Hide success screen
  document.querySelector('.checkout-success').style.display = 'none';
  
  // Show checkout steps
  document.querySelector('.checkout-content').style.display = 'block';
  
  // Reset form
  customerInfoForm.reset();
  
  // Reset state
  checkoutState.customerInfo = {};
  checkoutState.shippingMethod = 'standard';
  checkoutState.paymentMethod = 'cod';
  
  // Reset shipping options
  document.getElementById('shipping-standard').checked = true;
  
  // Reset payment options
  document.getElementById('payment-cod').checked = true;
  
  // Hide payment instructions
  document.getElementById('payment-instructions').style.display = 'none';
  
  // Close checkout
  closeCheckout();
}

// Event Listeners for Checkout
document.getElementById('checkout-btn').addEventListener('click', () => {
  if (state.cart.size === 0) { 
    alert('Your basket is empty.'); 
    return; 
  }
  openCheckout();
});

closeCheckoutBtn.addEventListener('click', closeCheckout);

continueToShippingBtn.addEventListener('click', (e) => {
  e.preventDefault();
  
  // Validate form
  const name = document.getElementById('customer-name').value.trim();
  const email = document.getElementById('customer-email').value.trim();
  const phone = document.getElementById('customer-phone').value.trim();
  const address = document.getElementById('customer-address').value.trim();
  
  if (!name || !email || !phone || !address) {
    alert('Please fill in all required fields.');
    return;
  }
  
  // Save customer info
  checkoutState.customerInfo = { name, email, phone, address };
  
  // Go to next step
  goToStep(2);
});

backToInfoBtn.addEventListener('click', () => {
  goToStep(1);
});

continueToPaymentBtn.addEventListener('click', () => {
  // Save shipping method
  const selectedShipping = document.querySelector('input[name="shipping"]:checked');
  checkoutState.shippingMethod = selectedShipping.value;
  
  // Go to next step
  goToStep(3);
});

backToShippingBtn.addEventListener('click', () => {
  goToStep(2);
});

continueShoppingBtn.addEventListener('click', resetCheckout);

// Complete Order Button
// Re-query the button to ensure it exists after DOM is fully loaded
const completeOrderButton = document.querySelector('.complete-order');
if (completeOrderButton) {
  completeOrderButton.addEventListener('click', completeOrder);
} else {
  // If the button doesn't exist, attach the event listener when the checkout step is shown
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('complete-order') || e.target.closest('.complete-order')) {
      completeOrder();
    }
  });
}

// Shipping option change
shippingOptions.forEach(option => {
  option.addEventListener('change', () => {
    checkoutState.shippingMethod = option.value;
    
    // Add visual feedback for selected option
    document.querySelectorAll('.shipping-option').forEach(opt => {
      opt.classList.remove('selected');
    });
    option.closest('.shipping-option').classList.add('selected');
  });
});

// Payment option change
document.querySelectorAll('input[name="payment"]').forEach(option => {
  option.addEventListener('change', () => {
    checkoutState.paymentMethod = option.value;
    showPaymentInstructions(option.value);
    
    // Add visual feedback for selected option
    document.querySelectorAll('.payment-option').forEach(opt => {
      opt.classList.remove('selected');
    });
    option.closest('.payment-option').classList.add('selected');
  });
});

// Close checkout when clicking overlay
overlayEl.addEventListener('click', (e) => {
  if (checkoutDrawerEl && !checkoutDrawerEl.hasAttribute('aria-hidden')) {
    closeCheckout();
  } else if (drawerEl && !drawerEl.hasAttribute('aria-hidden')) {
    closeCart();
  }
});

// Add smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for fixed header
          behavior: 'smooth'
        });
      }
    });
  });
});

// Enhanced wishlist functionality
function addToWishlist(productId) {
  if (!userState.currentUser) {
    alert('Please login to add items to your wishlist.');
    openAuthModal();
    return;
  }
  
  if (!userState.wishlist[userState.currentUser.email]) {
    userState.wishlist[userState.currentUser.email] = [];
  }
  
  // Check if product is already in wishlist
  if (!userState.wishlist[userState.currentUser.email].includes(productId)) {
    userState.wishlist[userState.currentUser.email].push(productId);
    localStorage.setItem('wishlist', JSON.stringify(userState.wishlist));
    
    // Update wishlist button UI
    document.querySelectorAll(`[data-wishlist="${productId}"]`).forEach(btn => {
      btn.classList.add('added');
      btn.innerHTML = '♥';
    });
    
    // Show notification
    showNotification('Item added to wishlist!');
  } else {
    // Remove from wishlist if already added
    userState.wishlist[userState.currentUser.email] = 
      userState.wishlist[userState.currentUser.email].filter(id => id !== productId);
    localStorage.setItem('wishlist', JSON.stringify(userState.wishlist));
    
    // Update wishlist button UI
    document.querySelectorAll(`[data-wishlist="${productId}"]`).forEach(btn => {
      btn.classList.remove('added');
      btn.innerHTML = '♡';
    });
    
    // Show notification
    showNotification('Item removed from wishlist!');
  }
}

// Add notification function
function showNotification(message) {
  // Remove any existing notifications
  const existingNotification = document.querySelector('.notification');
  if (existingNotification) {
    existingNotification.remove();
  }
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--brand);
    color: #0f1b13;
    padding: 12px 20px;
    border-radius: 8px;
    box-shadow: var(--shadow);
    z-index: 1000;
    font-weight: 600;
    animation: slideIn 0.3s ease, fadeOut 0.5s ease 2.5s forwards;
  `;
  
  // Add CSS for animation
  if (!document.querySelector('#notification-styles')) {
    const style = document.createElement('style');
    style.id = 'notification-styles';
    style.textContent = `
      @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      
      @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; transform: translateX(100%); }
      }
    `;
    document.head.appendChild(style);
  }
  
  document.body.appendChild(notification);
  
  // Remove notification after animation
  setTimeout(() => {
    if (notification.parentNode) {
      notification.remove();
    }
  }, 3000);
}

// Add admin dashboard functionality
document.addEventListener('DOMContentLoaded', function() {
  // Admin tab switching
  const adminTabs = document.querySelectorAll('.admin-tab');
  const adminTabPanes = document.querySelectorAll('.admin-tab-pane');
  
  if (adminTabs.length > 0) {
    adminTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Remove active class from all tabs and panes
        adminTabs.forEach(t => t.classList.remove('active'));
        adminTabPanes.forEach(p => p.classList.remove('active'));
        
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Show corresponding pane
        const tabPane = document.querySelector(`.admin-tab-pane[data-tab-pane="${tab.dataset.tab}"]`);
        if (tabPane) {
          tabPane.classList.add('active');
        }
        
        // Load data for the active tab
        loadAdminData(tab.dataset.tab);
      });
    });
    
    // Add product button
    const addProductBtn = document.getElementById('add-product-btn');
    if (addProductBtn) {
      addProductBtn.addEventListener('click', showAddProductModal);
    }
    
    // Initialize admin dashboard if user is admin
    checkAdminAccess();
  }
});

// Check if user has admin access
function checkAdminAccess() {
  // For demo purposes, we'll check if a specific user is logged in
  // In a real application, this would be handled by server-side authentication
  const isAdmin = localStorage.getItem('isAdmin') === 'true';
  
  if (isAdmin) {
    const adminDashboard = document.getElementById('admin-dashboard');
    if (adminDashboard) {
      adminDashboard.style.display = 'block';
    }
  }
}

// Load data for admin dashboard tabs
function loadAdminData(tab) {
  switch(tab) {
    case 'products':
      loadProductsData();
      break;
    case 'orders':
      loadOrdersData();
      break;
    case 'users':
      loadUsersData();
      break;
    case 'analytics':
      loadAnalyticsData();
      break;
  }
}

// Load products data
function loadProductsData() {
  const tableBody = document.getElementById('products-table-body');
  if (!tableBody) return;
  
  tableBody.innerHTML = '';
  
  products.forEach(product => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${product.id}</td>
      <td>${product.name}</td>
      <td>${fmt(product.price)}</td>
      <td>${product.category}</td>
      <td>${product.stock}</td>
      <td class="admin-actions">
        <button class="admin-btn edit" data-id="${product.id}">Edit</button>
        <button class="admin-btn delete" data-id="${product.id}">Delete</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
  
  // Add event listeners for edit and delete buttons
  document.querySelectorAll('.admin-btn.edit').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const productId = e.target.dataset.id;
      editProduct(productId);
    });
  });
  
  document.querySelectorAll('.admin-btn.delete').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const productId = e.target.dataset.id;
      deleteProduct(productId);
    });
  });
}

// Mobile App Features Implementation
// Check if app is installed
function checkAppInstallation() {
  // For demo purposes, we'll show the install banner after a delay
  // In a real implementation, this would check for PWA installation capability
  setTimeout(() => {
    const banner = document.querySelector('.install-banner');
    if (banner && !localStorage.getItem('installBannerDismissed')) {
      banner.classList.add('active');
    }
  }, 5000);
  
  // Add event listeners for install banner
  const installBtn = document.querySelector('.install-btn');
  const dismissBtn = document.querySelector('.dismiss-btn');
  
  if (installBtn) {
    installBtn.addEventListener('click', () => {
      showNotification('App installation would start here in a full implementation');
      document.querySelector('.install-banner').classList.remove('active');
    });
  }
  
  if (dismissBtn) {
    dismissBtn.addEventListener('click', () => {
      document.querySelector('.install-banner').classList.remove('active');
      localStorage.setItem('installBannerDismissed', 'true');
    });
  }
}

// Setup offline support
function setupOfflineSupport() {
  window.addEventListener('online', () => {
    const banner = document.querySelector('.offline-banner');
    if (banner) {
      banner.classList.remove('active');
    }
  });
  
  window.addEventListener('offline', () => {
    const banner = document.querySelector('.offline-banner');
    if (banner) {
      banner.classList.add('active');
    }
  });
}

// Setup push notifications
function setupPushNotifications() {
  // For demo purposes, we'll show a sample notification after a delay
  setTimeout(() => {
    showPushNotification('New Product Alert', 'Check out our new Organic Spices Set!');
  }, 10000);
}

// Show push notification
function showPushNotification(title, message) {
  const notification = document.querySelector('.notification-badge');
  if (notification) {
    notification.querySelector('h4').textContent = title;
    notification.querySelector('p').textContent = message;
    notification.classList.add('active');
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
      notification.classList.remove('active');
    }, 5000);
    
    // Add close button event listener
    const closeBtn = notification.querySelector('.notification-badge-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        notification.classList.remove('active');
      });
    }
  }
}

// Initialize mobile features
document.addEventListener('DOMContentLoaded', function() {
  // Check if app is installed
  checkAppInstallation();
  
  // Check for offline support
  setupOfflineSupport();
  
  // Setup push notifications
  setupPushNotifications();
  
  // Add event listener for notification badge close button
  const notificationClose = document.querySelector('.notification-badge-close');
  if (notificationClose) {
    notificationClose.addEventListener('click', () => {
      document.querySelector('.notification-badge').classList.remove('active');
    });
  }
});

