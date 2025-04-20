document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const galleryContainer = document.querySelector(".gallery-container");
    const gallery = document.querySelector(".gallery");

    // Product Data 
    const productData = {
        electric: [
            "images/electric1.webp",
            "images/electric2.webp"
        ],
        hydraulic: [
            "images/hydraulic1.webp",
            "images/hydraulic2.jpg"
        ],
        hospital: [
            "images/hospital1.jpg",
            "images/hospital2.jpg",
            
        ],
        Freight: [
            "images/Freight1.webp",
            "images/Freight2.webp",
         
        ],
        Gearless: [
            "images/Gearless1.jpeg",
            "images/Gearless2.jpeg",
           

        
        ],
        homelift: [
            "images/homelift1.jpg",
            "images/homelift2.webp",
            

        
        ],
        escalators: [
            "images/escalators.jpg",
           "images/escalators2.webp"
        
        ],
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
document.addEventListener("DOMContentLoaded", function () {
    // ... (your existing code remains the same until the lightbox implementation)

    /* ===================== */
    /* Lightbox Functionality */
    /* ===================== */
    
    // Create lightbox elements
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <span class="close">&times;</span>
            <img class="lightbox-image" src="" alt="">
            <div class="lightbox-nav">
                <button class="prev-btn"><i class="fas fa-chevron-left"></i></button>
                <button class="next-btn"><i class="fas fa-chevron-right"></i></button>
            </div>
        </div>
    `;
    document.body.appendChild(lightbox);

    // Get all project gallery images
    const galleryImages = document.querySelectorAll('.projects-gallery img');
    let currentImageIndex = 0;

    // Add click event to each image
    galleryImages.forEach((img, index) => {
        img.addEventListener('click', () => {
            currentImageIndex = index;
            openLightbox(img.src, img.alt);
        });
    });

    // Lightbox functions
    function openLightbox(src, alt) {
        const lightboxImg = lightbox.querySelector('.lightbox-image');
        lightboxImg.src = src;
        lightboxImg.alt = alt;
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    function closeLightbox() {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }

    function navigate(direction) {
        currentImageIndex += direction;
        
        // Handle wrapping around
        if (currentImageIndex >= galleryImages.length) {
            currentImageIndex = 0;
        } else if (currentImageIndex < 0) {
            currentImageIndex = galleryImages.length - 1;
        }
        
        const nextImg = galleryImages[currentImageIndex];
        lightbox.querySelector('.lightbox-image').src = nextImg.src;
        lightbox.querySelector('.lightbox-image').alt = nextImg.alt;
    }

    // Event listeners for lightbox controls
    lightbox.querySelector('.close').addEventListener('click', closeLightbox);
    lightbox.querySelector('.prev-btn').addEventListener('click', () => navigate(-1));
    lightbox.querySelector('.next-btn').addEventListener('click', () => navigate(1));

    // Close when clicking outside image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'flex') {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                navigate(-1);
            } else if (e.key === 'ArrowRight') {
                navigate(1);
            }
        }
    });

    // ... (rest of your existing code)
});

