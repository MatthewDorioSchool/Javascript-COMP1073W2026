// Highlight story words
function highlightCycle(buttonId, itemSelector,highlightColor) {
    const button = document.getElementById(buttonId);
    const items = document.querySelectorAll(itemSelector);
    let currentIndex = 0;

    // check if elements exist
    if (!button || items.length === 0) return;

    button.addEventListener('click', () => {
        // Remove highlight from previous
        items.forEach(item => {
        item.classList.remove('highlight');
        item.style.backgroundColor = '';
    });
    // Add highlight to current
        const currentItem = items[currentIndex];
        currentItem.classList.add('highlight');
        currentItem.style.backgroundColor = highlightColor;
        
        // Increment index, reset to 0 if at end
        currentIndex = (currentIndex + 1) % items.length;
    });

}

// Initialize for different pairs
highlightCycle('noun1', '.nounA', 'yellow');
highlightCycle('noun2', '.nounB', '#ffcccb'); // Light Red
highlightCycle('verb', '.verb', 'rgb(144, 238, 144)'); // Light Green