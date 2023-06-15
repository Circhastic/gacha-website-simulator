function itemRoller(number) {

    let rarity;

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
    const randomItem = rarity[items[randomItemIndex]];
    return { itemName: randomItem.itemName, imageURL: randomItem.imageURL };
}

function createBannerBox(itemName, imageURL, itemRank) {
    const box = document.createElement("div");
    box.classList.add("banner-box");
    box.style.backgroundImage = `url(${imageURL})`;
    box.style.backgroundSize = "cover";
    box.style.backgroundRepeat = "no-repeat";
    box.style.backgroundPosition = "center";
    box.textContent = itemName + itemRank;
    return box;
}

function createBannerBox(itemName, imageURL, itemRank) {
    const box = document.createElement("div");
    box.classList.add("banner-box");
    box.style.backgroundImage = `url(${imageURL})`;
    box.style.backgroundSize = "cover";
    box.style.backgroundRepeat = "no-repeat";
    box.style.backgroundPosition = "center";
    
    const contentContainer = document.createElement("div");

    const itemNameElement = document.createElement("div");
    itemNameElement.textContent = itemName;
    contentContainer.appendChild(itemNameElement);

    const itemRankElement = document.createElement("div");
    itemRankElement.textContent = itemRank;
    contentContainer.appendChild(itemRankElement);

    box.appendChild(contentContainer);

    return box;
}

function addToBanner(content) {
    const banner = document.getElementById("banner");
    const { itemName, imageURL } = content;
    const box = createBannerBox(itemName, imageURL);
    banner.appendChild(box);
}
