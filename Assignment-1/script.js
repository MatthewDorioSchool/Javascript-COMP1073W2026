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
highlightCycle('place','.place','#FF00FF');

//Create arrays for story words
const nouns1 = ['The turkey', 'Mom', 'The dog', 'My Teacher','The elephant','The cat'];
const verbs = ['sat on','ate','danced with','saw','doesn\'t like','kissed'];
const adjectives = ['a funny','a scary','a goofy','a slimy','a barking','a fat'];
const nouns2 = ['goat','monkey','fish','cow','frog','bug','worm'];
const places = ['on the moon','on the chair','in my spaghetti','in my soup','on the grass','in my shoes'];

