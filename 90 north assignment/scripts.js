// Function to toggle the left menu's collapsible state
function toggleMenu() {
    const leftMenu = document.querySelector('.left-menu');
    leftMenu.classList.toggle('open');
}

// Function to resize page based on screen width
// function adjustPageSize() {
//     const width = window.innerWidth;

//     if (width >= 992 && width <= 1600) {
//         document.body.style.transform = 'scale(0.9)';
//     } else if (width >= 700 && width <= 767) {
//         document.body.style.transform = 'scale(0.8)';
//     } else if (width >= 600 && width < 700) {
//         document.body.style.transform = 'scale(0.75)';
//     } else if (width <= 600) {
//         document.body.style.transform = 'scale(0.5)';
//     } else {
//         document.body.style.transform = 'scale(1)';
//     }
// }

// // Event listener to trigger resizing when the window is resized
// window.addEventListener('resize', adjustPageSize);

// // Initial call to adjust the page size
// adjustPageSize();

// Function to resize page based on screen width
function adjustPageSize() {
    const width = window.innerWidth;

    // Adjust the page content size based on screen width
    const pageContainer = document.querySelector('body');

    if (width >= 992 && width <= 1600) {
        pageContainer.style.width = '90%';  // 90% scaling
    }
    else if (width >= 700 && width <= 767) {
        pageContainer.style.width = '80%';  // 80% scaling
    }
    else if (width >= 600 && width < 700) {
        pageContainer.style.width = '75%';  // 75% scaling
    }
    else if (width <= 600) {
        pageContainer.style.width = '50%';  // 50% scaling
    }
    else {
        pageContainer.style.width = '100%'; // Reset to 100% if screen is larger
    }
}

// Event listener to trigger resizing when the window is resized
window.addEventListener('resize', adjustPageSize);

// Initial call to adjust the page size when the page loads
adjustPageSize();