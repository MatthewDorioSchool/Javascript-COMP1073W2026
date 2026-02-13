// Highlight story words
const items = document.querySelectorAll('.nounA');
let currentIndex = 0;

document.getElementById('noun1').addEventListener('click', () => {
    // Remove highlight from previous
    items.forEach(item => item.classList.remove('highlight'));
    
    // Add highlight to current
    items[currentIndex].classList.add('highlight');
    
    // Increment index, reset to 0 if at end
    currentIndex = (currentIndex + 1) % items.length;
});