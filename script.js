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
