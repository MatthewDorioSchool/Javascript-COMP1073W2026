var output = document.querySelector('p');
//Declare and Initialize Variables

    let petName = 'Michelangelo';
    let petType = ['Turtle','Shark','Toad'];
    let petAge = 15;
    let isHungry = true;
    let favoriteActivities = ['Ninja Training','Eating Pizza','Skateboarding','Partying'];
    let mood = ['radical','street wise','knuckle cracking'];
//Generate Random Values
    function getRandom(array){
        let randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex]
    }
    let randomPetType = getRandom(petType);
    let randomPetAge = Math.floor(Math.random() * 15) + 1;
    let randomMood = getRandom(mood);
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
       petAge++
       elementAge.textContent = petAge
       }
       increaseAge.addEventListener('click',ageUp)

let elementAge = document.querySelector('#petAge')
    elementAge.textContent = petAge;

let decreaseAge = document.querySelector('#DecreaseAge');
       function ageDown(){if(petAge > 0){
       petAge--
       elementAge.textContent = petAge
       }
    }
    decreaseAge.addEventListener('click',ageDown)

h = document.querySelector('#isHungry')

let toggleHunger = document.querySelector('#HungerToggle')
        function hunger(){ 
            isHungry = !isHungry
        if (isHungry){
            h.textContent = 'Hungry';
        }else{
            h.textContent = 'Not Hungry';
        }
    }
    toggleHunger.addEventListener('click',hunger);
// Create a Fun Pet Description