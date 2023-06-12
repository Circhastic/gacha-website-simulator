const itemsData = `{
    "⭐⭐⭐": {
        "item1": {
            "itemName": "Poop",
            "imageURL": "discord.com/picture.jpg"
        },
        "item2": {
            "itemName": "Trash",
            "imageURL": "discord.com/picture.jpg"
        },
        "item3": {
            "itemName": "Garbage",
            "imageURL": "discord.com/picture.jpg"
        }

    },
    "⭐⭐⭐⭐": {
        "item1": {
            "itemName": "Charles",
            "imageURL": "discord.com/picture.jpg"
        },
        "item2": {
            "itemName": "Encar",
            "imageURL": "discord.com/picture.jpg"
        },
        "item3": {
            "itemName": "Cedric",
            "imageURL": "discord.com/picture.jpg"
        },
        "item4": {
            "itemName": "Anthony",
            "imageURL": "discord.com/picture.jpg"
        },
        "item5": {
            "itemName": "Raniel",
            "imageURL": "discord.com/picture.jpg"
        }
    },
    "⭐⭐⭐⭐⭐": {
        "item1": {
            "itemName": "S Distinguished Gentlemen Cedric",
            "imageURL": "discord.com/picture.jpg"
        },
        "item2": {
            "itemName": "S Anthony",
            "imageURL": "https://cdn.discordapp.com/attachments/1116296565095669800/1116299432598708234/IMG_9021.JPG"
        },
        "item3":{
            "itemName": "S Charles",
            "imageURL": "discord.com/picture.jpg"
        },
        "item4":{
            "itemName": "S Encar",
            "imageURL": "discord.com/picture.jpg"
        },
        "item5": {
            "itemName": "S Raniel",
            "imageURL": "discord.com/picture.jpg"
        }

    },
    "⭐⭐⭐⭐⭐⭐": {
        "item1": {
            "itemName": "SSS Jhumar",
            "imageURL": "discord.com/picture.jpg"

        }
    }
}`;

var rollTickets = 200; // starting roll tickets
var rollNumber = 0;
var rollCounter = 0;
var fourPityCount = 0;
var specialPityCount = 0;

var rarity;
var items;
var randomItemIndex;
var randomItemName;

const itemData = JSON.parse(itemsData);
document.getElementById("header-tickets").innerHTML = rollTickets;

// TODO rarity = "⭐⭐⭐⭐⭐";
// items = Object.keys(rarity);
// randomItemIndex = Math.floor(Math.random() * items.length);
// console.log(items);
// console.log(rarity);
// console.log(randomItemIndex);
// randomItemName = rarity[items[randomItemIndex]].itemName;
// console.log(randomItemName);

document.getElementById("banner-img").src = items[1].itemName;

//function for chance per character
function chance(rollPercent) {

    //Guarantee
    if (specialPityCount == 90){ // 5 star
        if(Math.floor(Math.random() * 100) + 1 < 76 ){ // 5 star
            randomItemName = itemRoller(5);
            console.log(rollCounter + " ⭐⭐⭐⭐⭐ " + randomItemName + "| Pity: " + specialPityCount);
        }
        else{ //6 star
            randomItemName = itemRoller(6);
            console.log(rollCounter + " ⭐⭐⭐⭐⭐⭐ " + randomItemName + "| Pity: " + specialPityCount);
        }
        
        specialPityCount = 0;
            
    }   
    else if (fourPityCount % 10 == 0) { // 4 star
        randomItemName = itemRoller(4);
        console.log(rollCounter + " ⭐⭐⭐⭐ " + randomItemName + "| Pity: " + specialPityCount);

        fourPityCount = 0;
    }
    else { // Non guaranteed
        if (rollPercent < 90) { // No. is 1 - 89, 3 star
            randomItemName = itemRoller(3);
        console.log(rollCounter + " ⭐⭐⭐ " + randomItemName + "| Pity: " + specialPityCount);

        }
        else if (rollPercent == 100) { // No. is 100, 5 and 6 star 
            if(Math.floor(Math.random() * 100) + 1 < 81 ){ // 5 star .8 percent
                randomItemName = itemRoller(6);
                console.log(rollCounter + " ⭐⭐⭐⭐⭐ " + randomItemName + "| Pity: " + specialPityCount);

                
            }
            else { //6 star .2 percent
                randomItemName = itemRoller(6);
                console.log(rollCounter + " ⭐⭐⭐⭐⭐⭐ " + randomItemName + "| Pity: " + specialPityCount);

            }
            
            specialPityCount = 0;
        }
        else{ // No. is 100,4 star
            randomItemName = itemRoller(4);
            console.log(rollCounter + " ⭐⭐⭐⭐ " + randomItemName + "| Pity: " + specialPityCount);

            fourPityCount = 0;
        }
    }
}

function pullDetail() {
    rollNumber = Math.floor(Math.random() * 100) + 1;
    chance(rollNumber);
}

function rollOne() { 

    //ticket system
    if (rollTickets >= 1) {
        rollTickets--;
        document.getElementById("header-tickets").innerHTML = rollTickets;
        updatePity();
    }
    else {
        console.log("Insufficient Tickets");
    }
    
    
    //line of code na ito for reading the hidden div and revealing it 
    // const photocontainer = document.getElementById("photo-container");
    // photocontainer.style.display="block";
}

function rollTen() {
    // ticket system
    if (rollTickets >= 10){
        rollTickets -= 10;
        document.getElementById("header-tickets").innerHTML = rollTickets;

        for(let i = 0; i < 10; i++){
            updatePity();
        }
    }
    else{
        console.log("Insufficient Tickets");
    }    


    //line of code na ito for reading the hidden div and revealing it 
    // const photocontainer = document.getElementById("photo-container");
    // photocontainer.style.display="block";
}

function updatePity() {
    rollCounter++;
    fourPityCount++;
    specialPityCount++;
    pullDetail();
}

function itemRoller(number) {
    if (number == 3) {
        rarity = itemData["⭐⭐⭐"];
    }
    else if (number == 4) {
        rarity = itemData["⭐⭐⭐⭐"];
    }
    else if (number == 5) {
        rarity = itemData["⭐⭐⭐⭐⭐"];
    }
    else {
        rarity = itemData["⭐⭐⭐⭐⭐⭐"];
    }
    
    items = Object.keys(rarity);
    randomItemIndex = Math.floor(Math.random() * items.length); 
    return rarity[items[randomItemIndex]].itemName;

}