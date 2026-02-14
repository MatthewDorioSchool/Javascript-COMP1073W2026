//Word indexs
let nounIndex1 = 0;
let verbIndex = 0;
let adjectiveIndex = 0;
let nounIndex2 = 0;
let placeIndex = 0;

// Highlight story words
function highlightChoice(buttonId, itemSelector,highlightColor,updateVariable) {
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

        updateVariable(currentIndex);
        
        // Increment index, reset to 0 if at end
        currentIndex = (currentIndex + 1) % items.length;
    });

}

// Initialize for different pairs
highlightChoice('noun1Btn', '.nounA', '#8E44AD',(val) => { nounIndex1 = val; });
highlightChoice('verbBtn', '.verb', '#3498DB',(val) => { verbIndex = val; });
highlightChoice('adjectiveBtn','.adjective','#32CD32',(val) => { adjectiveIndex = val; });
highlightChoice('noun2Btn', '.nounB', '#FF8C00',(val) => { nounIndex2 = val; });
highlightChoice('placeBtn','.place','#FF00FF',(val) => { placeIndex = val; });

//Arrays for story words
const nouns1 = ['The turkey', 'Mom', 'The dog', 'My Teacher','The elephant','The cat'];
const verbs = ['sat on','ate','danced with','saw','doesn\'t like','kissed'];
const adjectives = ['a funny','a scary','a goofy','a slimy','a barking','a fat'];
const nouns2 = ['goat','monkey','fish','cow','frog','bug','worm'];
const places = ['on the moon','on the chair','in my spaghetti','in my soup','on the grass','in my shoes'];


// Reference the Story button (make sure it's the right one in your HTML)
const storyButton = document.getElementById('storyBtn'); 

storyButton.addEventListener('click', () => {
    // Grab all elements currently having the 'highlight' class
    const selectedElements = document.querySelectorAll('.highlight');
    
    // Check if the user has picked all 5 parts
    if (selectedElements.length < 5) {
        displayMessage("Please click all buttons to pick your story pieces first!", "error");
        return;
    }

    // Combine the text content of the highlighted items into one string
    let story = "";
    selectedElements.forEach(el => {
        story += el.textContent + " ";
    });

    // Use your custom display function to show the story on the screen!
    displayStory(story, "story");
});

function displayStory(msgText) {
    // Create the P element
    const msgPanel = document.createElement('p');
    
    // Add the class for styling
    msgPanel.setAttribute('class', 'msgPanel');

    // Insert the story text
    msgPanel.textContent = msgText;

    // Create and append the close button
    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'X';
    closeBtn.style.marginLeft = '10px'; // A little spacing
    msgPanel.appendChild(closeBtn);

    // Append the panel to the body
    document.body.appendChild(msgPanel);

    //Click handler to remove the panel
    closeBtn.onclick = function() {
        msgPanel.remove();
    };
}

//random story button//

const randomBtn = document.getElementById('randomBtn');

randomBtn.addEventListener('click', () => {
    // Map each selector to its corresponding variable update function and highlight color
    const configs = [
        { selector: '.nounA', update: (val) => { nounIndex1 = val; }, color: '#8E44AD' },
        { selector: '.verb', update: (val) => { verbIndex = val; }, color: '#3498DB' },
        { selector: '.adjective', update: (val) => { adjectiveIndex = val; }, color: '#32CD32' },
        { selector: '.nounB', update: (val) => { nounIndex2 = val; }, color: '#FF8C00' },
        { selector: '.place', update: (val) => { placeIndex = val; }, color: '#FF00FF' }
    ];

    // Loop through each configuration to pick a random word
    configs.forEach(config => {
        const items = document.querySelectorAll(config.selector);
        // Generate a random integer between 0 and the number of items
        const randomIndex = Math.floor(Math.random() * items.length);

        // Clear existing highlights in this column
        items.forEach(item => {
            item.classList.remove('highlight');
            item.style.backgroundColor = '';
        });

        // Apply the random selection
        const selectedItem = items[randomIndex];
        selectedItem.classList.add('highlight');
        selectedItem.style.backgroundColor = config.color;

        // Update the global index variable to keep it in sync
        config.update(randomIndex);
    });
});