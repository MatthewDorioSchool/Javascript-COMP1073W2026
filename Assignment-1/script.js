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
const storyButton = document.querySelector('button:last-of-type'); 

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