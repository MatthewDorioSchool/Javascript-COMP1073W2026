var output = document.querySelector('p');
//1. Declare and Initialize Variables

    let petName = 'Michelangelo';
    let petType = ['Turtle','Shark','Toad'];
    let petAge = 15;
    let isHungry = true;
    let favoriteActivities = ['Ninja Training','Eating Pizza','Skateboarding','Partying'];
    let mood = ['radical','street wise','knuckle cracking'];
//2. Generate Random Values
    function getRandom(array){
        let randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex]
    }
    let randomPetType = getRandom(petType);
    let randomPetAge = Math.floor(Math.random() * 15) + 1;
    let randomMood = getRandom(mood);
//3. User Interaction

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

//4. Use Basic Math

//5. Create a Fun Pet Description