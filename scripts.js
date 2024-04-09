/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */
// Your final submission should have much more data than this, and 
// you should use more than just an array of strings to store it all.

let items = data;

function init() {
    document.addEventListener("DOMContentLoaded", showCards());

    const searchInput = document.getElementById("searchinput");
    const weapons = document.getElementsByClassName("card");

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
    let location;

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

function removeWpn(name) {
    for (i = items.length - 1; i >= 0; i--) {
        if (items[i].WpnType == name) {
            items.splice(i, 1);
        }
    }
    showCards();
}
function restore() {
    location.reload();
}