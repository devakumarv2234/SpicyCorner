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



