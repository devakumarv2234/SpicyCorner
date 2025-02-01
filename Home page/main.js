// const headerImages = [
//   './images/header.png',       // Original header image
//   './images/.png',    // Third image
//   './images/.png'     // Fourth image
// ];
// let currentImageIndex = 0;

// function changeHeaderImage() {
//   const headerImageElement = document.getElementById('headerImage');

//   // Fade out the current image
//   headerImageElement.style.opacity = '0';

//   // After fade-out, change the image and fade back in
//   setTimeout(() => {
//     currentImageIndex = (currentImageIndex + 1) % headerImages.length; // Loop through images
//     headerImageElement.src = headerImages[currentImageIndex];
//     headerImageElement.style.opacity = '1'; // Fade back in
//   }, 500); // Matches the transition duration in CSS
// }

// // Change the image every 5 seconds
// setInterval(changeHeaderImage, 5000);

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header-image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header-content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header-content .section-description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header-content .header-btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".explore__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".explore__content .section-header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".explore__content .section-description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".explore__content .explore__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".banner__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".chef__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".chef__content .section-header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".chef__content .section-description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".chef__list li", {
  ...scrollRevealOption,
  delay: 1500,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
});

function searchFunction() {
  const query = document.getElementById('searchInput').value.trim().toLowerCase(); // Get the search query and convert it to lowercase
  const categoryLinks = document.querySelectorAll('.category-link'); // Select all category links
  
  let found = false;

  categoryLinks.forEach(link => {
    const categoryName = link.textContent.toLowerCase(); // Get the text content of each category link

    // If the category name matches the search query
    if (categoryName.includes(query)) {
      found = true;
      window.location.href = link.getAttribute('href'); // Redirect to the category link URL
    }
  });

  if (!found && query) {
    alert('No categories found matching "' + query + '"'); // Display an alert if no categories match the search query
  }
}


function updateCart() {
  // Retrieve the item count from localStorage
  const itemCount = parseInt(localStorage.getItem('itemCount')) || 0;

  // Get the cart item count element
  const cartItemCountElement = document.querySelector('.nav-btn .btn span');

  // Update the cart item count (show only the number, no "items")
  cartItemCountElement.textContent = itemCount;
}

// Update cart on page load
window.onload = updateCart;



function addToCart(productName, price, discount, imageUrl) {
  const discountedPrice = price - (price * discount) / 100;
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Check if the item already exists in the cart
  let existingItem = cartItems.find(item => item.productName === productName);

  if (existingItem) {
    existingItem.quantity++;  // Increase quantity if already added
  } else {
    cartItems.push({ productName, discountedPrice, imageUrl, quantity: 1 });
  }

  // Save updated cart to localStorage
  localStorage.setItem('cartItems', JSON.stringify(cartItems));

  // Update cart UI
  updateCart();

  // Show alert (optional)
  alert(`${productName} added to cart!`);
}
function navigateToDetails(name, description, price, discount, imageUrl) {
  const discountedPrice = price - (price * discount) / 100;
  const detailsURL = `details.html?name=${encodeURIComponent(name)}&description=${encodeURIComponent(description)}&price=${price}&discount=${discount}&discountedPrice=${discountedPrice.toFixed(2)}&imageUrl=${encodeURIComponent(imageUrl)}`;
  window.location.href = detailsURL;
}

 // Function to add an item to the cart
 function addToCart(productName, price, discount, imageUrl) {
  const discountedPrice = price - (price * discount) / 100;
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Check if the item already exists in the cart
  let existingItem = cartItems.find(item => item.productName === productName);

  if (existingItem) {
    existingItem.quantity++;  // Increase quantity if already added
  } else {
    cartItems.push({ productName, discountedPrice, imageUrl, quantity: 1 });
  }

  // Save updated cart to localStorage
  localStorage.setItem('cartItems', JSON.stringify(cartItems));

  // Update cart UI
  updateCart();

  // Show alert (optional)
  alert(`${productName} added to cart!`);
}

// Function to update the cart UI
function updateCart() {
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const cartItemCountElement = document.querySelector('.nav-btn .btn span');
  const cartItemsContainer = document.getElementById('cart-items');

  // Update cart count in navbar
  let totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  cartItemCountElement.textContent = totalItems;

  // Clear existing cart display
  cartItemsContainer.innerHTML = "";

  if (cartItems.length === 0) {
    cartItemsContainer.innerHTML = "<p>Cart is empty</p>";
    return;
  }

  // Display each item in the cart
  cartItems.forEach((item, index) => {
    cartItemsContainer.innerHTML += `
  <div class="cart-item">
    <div class="cart-item-details">
      <img src="${item.imageUrl}" alt="Cart Item" width="50" height="50">
      <span>${item.productName}</span>
      <span>₹${item.discountedPrice}</span>
    </div>
    <div class="cart-item-actions">
      
      <button onclick="increaseQty(${index})">+</button>
      <span> ${item.quantity}</span>
      <button onclick="decreaseQty(${index})">-</button>
      
    </div>
  </div>
`;
  });

}

// Function to increase item quantity
function increaseQty(index) {
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  cartItems[index].quantity++;
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  updateCart();
}

// Function to decrease item quantity
function decreaseQty(index) {
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  if (cartItems[index].quantity > 1) {
    cartItems[index].quantity--;
  } else {
    cartItems.splice(index, 1); // Remove if quantity is 0
  }

  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  updateCart();
}

// Function to remove an item from the cart
function removeFromCart(index) {
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  cartItems.splice(index, 1);
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  updateCart();
}
function toggleCart() {
  const cartContainer = document.getElementById('cart-container');
  const cartOverlay = document.getElementById('cart-overlay');

  cartContainer.classList.toggle('active');
  cartOverlay.classList.toggle('active');
}

// Open cart when clicking the cart button
document.querySelector('.nav-btn .btn').addEventListener('click', function () {
  toggleCart();
});

function clearCart() {
  // Remove all cart items from localStorage
  localStorage.removeItem('cartItems');

  // Reset cart count in navbar
  const cartItemCountElement = document.querySelector('.nav-btn .btn span');
  cartItemCountElement.textContent = 0;

  // Clear the cart display
  const cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = "<p>Cart is empty</p>";
}
// Update cart on page load
window.onload = updateCart;

