// Filter menu items based on category
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.sidebar .nav-link');
    const menuItems = document.querySelectorAll('.menu-item');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            // Get the selected category
            const category = button.getAttribute('data-category');

            // Filter menu items
            menuItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});