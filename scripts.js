let items = data; // Global array for all dsweapon objects, reflects what user sees on the screen

function init() { // Called upon document loading, ensuring functions do not call prior to loading
    document.addEventListener("DOMContentLoaded", showCards()); // Makes double sure

    const searchInput = document.getElementById("searchinput"); // Creates object for searchbar
    const weapons = document.getElementsByClassName("card"); // Document object storing all card objects

    /* Creates a function that executes the search as soon as an input is registered in the searchbar
     Any cards not containing the string entered by the user will be hidden */
    searchInput.addEventListener("keyup", (event) => { 
        const searchQuery = event.target.value.toLowerCase();
        for (i = 1; i < weapons.length; i++) {
            wpn = weapons[i];
            wpnname = wpn.querySelector("h2").innerHTML;
            if (wpnname.toLowerCase().includes(searchQuery))
                wpn.style.display = "block";
            else
                wpn.style.display = "none";
        }
    });
}
// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    let name;
    let imageURL;
    let location; // Added another field to store the location a weapon can be found

    for (const item of items) {
        name = item.name;
        imageURL = item.url;
        location = item.location;

        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, name, imageURL, location); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

function editCardContent(card, newTitle, newImageURL, newlocation) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Image";

    const cardInfo = card.querySelector("h3");
    cardInfo.textContent = newlocation;
}
// Iterates through items, removing them if the weapon type is the same
function removeWpn(type) {
    for (i = items.length - 1; i >= 0; i--) {
        if (items[i].WpnType == type) {
            items.splice(i, 1);
        }
    }
    showCards();
}
function restore() {
    location.reload();
}