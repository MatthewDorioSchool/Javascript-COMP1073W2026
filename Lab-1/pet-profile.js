var output = document.querySelector('p');
//1. Declare and Initialize Variables

    let petName = 'Michelangelo';
    let petType = ['Turtle','Shark','Toad',];
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