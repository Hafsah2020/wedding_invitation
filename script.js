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

document.addEventListener("DOMContentLoaded", function () {
    const sheetAPI = "https://script.google.com/macros/s/AKfycbx2_zXQVA_QTrjUOMuVVcQbUMQbaiVv33g8FEDnscCl7Go5f2j2gQOlgsRzplASLcRE/exec"; // Replace with your actual script URL

    fetch(sheetAPI)
        .then(response => response.json())
        .then(data => {
            const purchasedItems = data.purchasedItems;
            const giftItems = document.querySelectorAll(".gift-item");

            giftItems.forEach(item => {
                const giftName = item.getAttribute("data-gift");
                if (purchasedItems.includes(giftName)) {
                    item.style.display = "none"; // Hide purchased gifts
                }
            });
        })
        .catch(error => console.error("Error fetching data:", error));
});

