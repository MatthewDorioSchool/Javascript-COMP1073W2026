var output = document.querySelector('p');
//Declare and Initialize Variables

    let petName = 'Michelangelo';
    let petType = ['Turtle','Shark','Toad'];
    let petAge = 15;
    let isHungry = true;
    let favoriteActivities = ['Ninja Training','Eating Pizza','Skateboarding','Partying'];
    let mood = ['Radical','Street Wise','Ready to Rumble'];
//Generate Random Values
    function getRandom(array){
        let randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex]
    }
    let randomPetType = getRandom(petType);
    let randomPetAge = Math.floor(Math.random() * 15) + 1;
    let randomMood = getRandom(mood);
    let randomActivity = getRandom(favoriteActivities);
//User Interaction with basic math

let elementName = document.querySelector('#petName');
        elementName.textContent = petName
		elementName.addEventListener('click',updateName);

        function updateName(){

            let petName = prompt('please enter your name');
			elementName.textContent = petName;

        }

let increaseAge = document.querySelector('#IncreaseAge');
       function ageUp(){
       randomPetAge++
       updateDescription();
       }
       increaseAge.addEventListener('click',ageUp)

let decreaseAge = document.querySelector('#DecreaseAge');
       function ageDown(){if(randomPetAge > 0){
       randomPetAge--
       updateDescription();
       }
    }
    decreaseAge.addEventListener('click',ageDown)

let hungry = 'Hungry';

let toggleHunger = document.querySelector('#HungerToggle')
        function hunger(){ 
            isHungry = !isHungry
        if (isHungry){
            hungry = 'Hungry';
        }else{
            hungry = 'Not Hungry';
        }
        updateDescription();
    }
    toggleHunger.addEventListener('click',hunger);

// Create a Fun Pet Description
let petDescription = document.querySelector('#description')
function updateDescription() {
petDescription.textContent = 'A '+ randomPetAge +' year old ' + randomPetType + ' who loves ' + randomActivity + ' and is currently feeling ' +randomMood + '. They\'re ' + hungry}
updateDescription();