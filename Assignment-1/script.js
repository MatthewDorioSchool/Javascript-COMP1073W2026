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
highlightCycle('noun1', '.nounA', '#8E44AD');
highlightCycle('verb', '.verb', '#3498DB');
highlightCycle('adjective','.adjective','#32CD32')
highlightCycle('noun2', '.nounB', '#FF8C00');
highlightCycle('place','.place','#FF00FF')