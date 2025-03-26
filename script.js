document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const galleryContainer = document.querySelector(".gallery-container");
    const gallery = document.querySelector(".gallery");

    // Product Data (Replace with actual image paths)
    const productData = {
        electric: [
            "images/electric1.jpg"
        ],
        hydraulic: [
            "images/hydraulic1.jpg"
        ],
        escalators: [
            "images/escalator1.jpg",
            "images/escalator2.jpg",
            "images/img_4.jpg"
        ],
        photos: [
            "images/photo1.jpg",
            "images/photo2.jpg",
            "images/photo3.jpg",
            "images/photo4.jpg",
             "images/photo5.jpg",
             "images/photo6.jpg"
        ],
        doors: [
            "images/door1.jpg",
            "images/door2.jpg",
            "images/door3.jpg",
            "images/door4.png",
            "images/door5.jpg"

        
        ]
    };

    // Function to display selected category
    function displayProducts(category) {
        gallery.innerHTML = ""; // Clear existing images

        let imagesToShow = [];

        if (category === "all") {
            // Show all categories
            Object.values(productData).forEach(images => {
                imagesToShow = imagesToShow.concat(images);
            });
        } else {
            imagesToShow = productData[category] || [];
        }

        imagesToShow.forEach(imageSrc => {
            const col = document.createElement("div");
            col.classList.add("col-md-4", "mb-4");

            const img = document.createElement("img");
            img.src = imageSrc;
            img.classList.add("img-fluid", "product-image");

            col.appendChild(img);
            gallery.appendChild(col);
        });

        galleryContainer.style.display = "block"; // Show gallery
    }

    // Click event for filter buttons
    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Remove 'active' from all buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));

            // Add 'active' class to clicked button
            this.classList.add("active");

            // Show relevant products
            const category = this.getAttribute("data-filter");
            displayProducts(category);
        });
    });

    // Show all products by default on page load
    displayProducts("all");

    // Add active class to 'All' button on page load
    const allButton = document.querySelector('[data-filter="all"]');
    if (allButton) {
        allButton.classList.add("active");
    }
    
});
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".background-image");
    let currentIndex = 0;

    function changeBackground() {
        images.forEach((img, index) => {
            img.classList.remove("active");
        });

        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("active");
    }

    setInterval(changeBackground, 5000); 
});

document.addEventListener("DOMContentLoaded", function () {
    const langToggle = document.getElementById("lang-toggle");

    const currentPage = window.location.pathname;
    const isArabic = currentPage.includes("-ar");

    langToggle.textContent = isArabic ? "English" : "العربية";

    langToggle.addEventListener("click", function () {
        const newPage = isArabic ? "index.html" : "index-ar.html";
        window.location.href = newPage;
    });
});


