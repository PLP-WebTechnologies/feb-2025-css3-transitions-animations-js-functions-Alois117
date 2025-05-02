// DOM elements
const animateButton = document.getElementById('animateButton');
const box = document.getElementById('box');
const savePreferencesButton = document.getElementById('savePreferences');
const bgColorInput = document.getElementById('bgColor');

// Function to trigger animation on button click
animateButton.addEventListener('click', () => {
    // Add animation class to the box
    box.style.animation = 'grow 2s ease-in-out';
    
    // Reset the animation after it completes to make it reusable
    setTimeout(() => {
        box.style.animation = '';  // Reset animation
    }, 2000); // 2s delay to match animation duration
});

// Function to save user preferences to localStorage
savePreferencesButton.addEventListener('click', () => {
    const bgColor = bgColorInput.value; // Get color from input
    localStorage.setItem('bgColor', bgColor); // Save color to localStorage
    document.body.style.backgroundColor = bgColor; // Apply color immediately
    alert('Background color saved!');
});

// Function to retrieve preferences from localStorage on page load
window.onload = () => {
    const savedBgColor = localStorage.getItem('bgColor');
    if (savedBgColor) {
        document.body.style.backgroundColor = savedBgColor; // Apply saved color
        bgColorInput.value = savedBgColor; // Set input value to saved color
    }
};
