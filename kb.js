
document.addEventListener('DOMContentLoaded', () => {
    // Get all navigation links
    const navLinks = document.querySelectorAll('#navbarNav .nav-link');

    if (navLinks.length === 0) return; // Exit if no nav links found

    // Track the index of the currently focused link
    let currentIndex = 0;

    // Function to focus on a specific menu item
    function focusMenuItem(index) {
        navLinks[index].focus();
    }

    // Event listener for keydown on the nav links
    navLinks.forEach((link, index) => {
        link.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'ArrowRight':
                    // Move focus to the next item
                    currentIndex = (index + 1) % navLinks.length; // Wrap around to the first
                    focusMenuItem(currentIndex);
                    event.preventDefault();
                    break;

                case 'ArrowLeft':
                    // Move focus to the previous item
                    currentIndex = (index - 1 + navLinks.length) % navLinks.length; // Wrap around to the last
                    focusMenuItem(currentIndex);
                    event.preventDefault();
                    break;

                case 'Home':
                    // Move focus to the first item
                    currentIndex = 0;
                    focusMenuItem(currentIndex);
                    event.preventDefault();
                    break;

                case 'End':
                    // Move focus to the last item
                    currentIndex = navLinks.length - 1;
                    focusMenuItem(currentIndex);
                    event.preventDefault();
                    break;
            }
        });
    });

    // Set initial focus on the first menu item
    focusMenuItem(currentIndex);
});
