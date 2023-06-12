var rollNumber = 0;
var rollCounter = 0;
var fourPityCount = 0;
var fivePityCount = 0;

/* sample JSON for data base of photos etc
var jsonData = `{
    "name": "John Doe",
    "image": png....
    "age": 30,
    "numbers": [2,4,6,8,10],
    "operations": {
        "addition": false,
        "subtraction": false,
        "multiplication": false,
        "division": true
    }
}`; */

function chance(rollPercent){
    //function for chance per character
    
    let arrayOfChar4 = ["Charles ⭐⭐⭐⭐", "Encar⭐⭐⭐⭐", "Cedric ⭐⭐⭐⭐", "Raniel ⭐⭐⭐⭐", "Anthony ⭐⭐⭐⭐"]; // 10%
    let arrayOfChar5 = ["SCharles ⭐⭐⭐⭐⭐", "SEncar ⭐⭐⭐⭐⭐", "SCedric ⭐⭐⭐⭐⭐", "SRaniel ⭐⭐⭐⭐⭐", "SAnthony ⭐⭐⭐⭐⭐"]; // 1%
    let arrayOfChar3 = ["Poop ⭐⭐⭐"]; // 89%
    let character = 0;

    //chances
    /*if (rollPercent < 89){ // No. is 1 - 89
        console.log(arrayOfChar3[0]);
        return arrayOfChar3;
    }
    else if (rollPercent == 100){ // No. is 90 - 99
        character = Math.floor(Math.random() * 5);
        console.log(arrayOfChar5[character]); 
        return arrayOfChar5;
    }
    else{ // No. is 100
        character = Math.floor(Math.random() * 5);
        console.log(arrayOfChar4[character]);
        return arrayOfChar4;
    }*/

    //Guarantee
    if (fivePityCount == 90){ // 5 star
        character = Math.floor(Math.random() * 5);
        console.log(arrayOfChar5[character]);
        fivePityCount = 0; 
        return arrayOfChar5[character];
    }
    else if (fourPityCount % 10 === 0){ // 4 star
        character = Math.floor(Math.random() * 5);
        console.log(arrayOfChar4[character]);
        fourPityCount = 0;
        return arrayOfChar4[character];
    }
    else { // 3 star
        if (rollPercent < 90){ // No. is 1 - 89
            console.log(rollCounter + " " + arrayOfChar3[0]);
            return arrayOfChar3[character];
        }
        else if (rollPercent == 100){ // No. is 91 - 99
            character = Math.floor(Math.random() * 5);
            console.log(rollCounter + " " + arrayOfChar5[character]); 
            fivePityCount = 0;
            return arrayOfChar5[character];
        }
        else{ // No. is 100
            character = Math.floor(Math.random() * 5);
            console.log(rollCounter + " " + arrayOfChar4[character]);
            fourPityCount = 0;
            return arrayOfChar4[character];
        }
    }
}

function pullDetail(){
    rollNumber = Math.floor(Math.random() * 100) + 1;
    chance(rollNumber);
}

function rollOne(){ 
    updatePity();
    
    //line of code na ito for reading the hidden div and revealing it 
    // const photocontainer = document.getElementById("photo-container");
    // photocontainer.style.display="block";
}

function rollTen(){

    for(let i = 0; i < 10; i++){
        updatePity();
    }
    //line of code na ito for reading the hidden div and revealing it 
    // const photocontainer = document.getElementById("photo-container");
    // photocontainer.style.display="block";
}

function updatePity(){
    rollCounter++;
    fourPityCount++;
    fivePityCount++;
    pullDetail();
}