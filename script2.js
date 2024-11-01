// FAQ accordion functionality
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
        // Toggle open class on the answer element
        answer.classList.toggle('open');
        
        // You can also add some visual effect to the question if needed
        item.classList.toggle('active'); // Optional: for active styling
    });
});


// Display Current Date and Time
function updateDateTime() {
    const now = new Date();
    const dateTimeDisplay = document.getElementById('date-time');
    
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: 'numeric', 
        minute: 'numeric', 
        second: 'numeric' 
    };
    
    const formattedDate = now.toLocaleDateString('en-US', options);
    dateTimeDisplay.textContent = formattedDate;
}

// Update the time every second
setInterval(updateDateTime, 1000);

// Read More functionality
const readMoreButton = document.getElementById('read-more-btn');
const moreContent = document.getElementById('more-content');

readMoreButton.addEventListener('click', () => {
    const isVisible = moreContent.style.display === 'block';
    moreContent.style.display = isVisible ? 'none' : 'block';
    readMoreButton.textContent = isVisible ? 'Read More' : 'Read Less';
});

// Rating functionality
const stars = document.querySelectorAll('#rating-stars .star');
const sound = new Audio('zvuk41.mp3');

stars.forEach(star => {
    star.addEventListener('click', () => {
        const ratingValue = star.getAttribute('data-value');
        stars.forEach(s => {
            s.style.color = s.getAttribute('data-value') <= ratingValue ? 'gold' : 'grey';
        });
        sound.currentTime = 0; // Reset sound to start
        sound.play();
    });
});