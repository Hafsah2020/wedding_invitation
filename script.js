document.addEventListener("DOMContentLoaded", function () {
    const quotes = document.querySelectorAll("#quran-carousel blockquote");
    const carouselContainer = document.querySelector(".carousel-container");
    let currentIndex = 0;

    function adjustHeight() {
        // Set container height based on active blockquote
        const activeQuote = document.querySelector(".carousel-track blockquote.active");
        if (activeQuote) {
            carouselContainer.style.height = activeQuote.offsetHeight + "px";
        }
    }

    function showNextQuote() {
        quotes[currentIndex].classList.remove("active"); // Hide current quote
        currentIndex = (currentIndex + 1) % quotes.length; // Move to next quote
        quotes[currentIndex].classList.add("active"); // Show next quote
        adjustHeight(); // Adjust height dynamically
    }

    // Set first quote as active on page load
    quotes[0].classList.add("active");
    adjustHeight(); // Ensure correct initial height

    setInterval(showNextQuote, 2000); // Change verse every 2 seconds
});

async function fetchAvailableGifts() {
    try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbwumi1Qd5D--BJB1GWnfrtb25vMwLjAjHws1pBchgknxcMIxThTEk1muQbQTSC1H_0v/exec"); // Replace with your Web App URL
        const data = await response.json();
        const giftList = document.getElementById("gift-list");
        giftList.innerHTML = ""; // Clear current items

        data.availableGifts.forEach(gift => {
            let giftItem = document.createElement("div");
            giftItem.classList.add("gift-item");
            giftItem.innerHTML = `
                <img src="${gift.image}" alt="${gift.name}">
                <p>${gift.name}</p>
                <p>Tag: ${gift.tag}</p>
                <a href="${gift.link}" class="btn">Buy Now</a>
            `;
            giftList.appendChild(giftItem);
        });
    } catch (error) {
        console.error("Error fetching gift list:", error);
    }
}

// Fetch available gifts when the page loads
window.onload = fetchAvailableGifts;
  
