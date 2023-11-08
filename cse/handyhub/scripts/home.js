function modifySearchBar(firstName) {
    const searchBar = document.getElementById("searchBar");
    
    if (!searchBar) {
        addErrorMessage("Search bar missing.");
        return;
    }

    searchBar.placeholder = `What are you looking for, ${firstName}?`;
}

function addErrorMessage(message) {
    console.log(message);
}

let userId = localStorage.getItem("user-id");
if (!userId) {
    window.location.href = "../signin.html";
}

if (userId) {
    const URL = `http://localhost:5000/api/users/${userId}`;
    const request = new XMLHttpRequest();
    request.open('GET', URL);

    request.setRequestHeader("Access-Control-Allow-Credentials", "true");
    request.setRequestHeader("Content-Type", "application/json");
    
    request.onload = pageLoaded; 
    request.onerror = requestError;
    request.send();

    function pageLoaded() {
        if (request.status === 200) {
            const response = JSON.parse(request.response);
            firstName = response.data.first_name;
            modifySearchBar(firstName);
        }
    }

    function requestError() {
        console.log("Request failed");
    }
}

function createRow() {
    const row = document.createElement("div");
    row.classList.add("row");
    return row;
}

function createCard(cardInfo) {
    // Create a custom card  
    const card = document.createElement("div");
    card.classList.add("col-md-4");

    const innerDiv = document.createElement("div");
    innerDiv.classList.add("card");

    card.appendChild(innerDiv);

    const cardImageDiv = document.createElement("div");
    cardImageDiv.classList.add("card-image");

    const cardBodyDiv = document.createElement("div");
    cardBodyDiv.classList.add("card-body");

    innerDiv.appendChild(cardImageDiv);
    innerDiv.appendChild(cardBodyDiv);

    const img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = cardInfo.imageUrl;
    img.alt = cardInfo.imageDesc;

    cardImageDiv.appendChild(img);

    const h5 = document.createElement("h5");
    h5.classList.add("card-tittle");
    h5.innerText = cardInfo.title;

    const p = document.createElement("p");
    p.classList.add("card-text");
    p.innerText = cardInfo.text;

    const a = document.createElement("a");
    a.classList.add("btn", "btn-primary", "btn-grad-blue");
    a.href = cardInfo.url;
    a.innerText = "See more";

    cardBodyDiv.appendChild(h5);
    cardBodyDiv.appendChild(p);
    cardBodyDiv.appendChild(a);
    
    return card;
}

function initializeCardsSection(cardsInfoList) {
    const cardsSection = document.getElementById("cardsSection");

    const nRows = Math.ceil(cardsInfoList.length / 3);

    for (let rowIx = 0; rowIx < nRows; rowIx++) {
        const row = createRow();
        for (let cardIx = 0; cardIx < 3; cardIx++) {
            const cardIndex = rowIx * 3 + cardIx;
            if (cardIndex >= cardsInfoList.length) {
                break;
            }
            const card = createCard(cardsInfoList[cardIndex]);
            row.appendChild(card);
        }
        cardsSection.appendChild(row);
    }
}

cardsInfoList = [
    {
        "imageUrl": "https://s38063.pcdn.co/wp-content/uploads/2021/09/Blog-SQLDatabaseSchemas-IM-JY-67189.jpg",
        "imageDesc": "Card image cap",
        "title": "Database Course",
        "text": "Some quick example text to build on the card title and make up the bulk of the card's content.",
        "url": "#"
    },
    {
        "imageUrl": "https://s38063.pcdn.co/wp-content/uploads/2021/09/Blog-SQLDatabaseSchemas-IM-JY-67189.jpg",
        "imageDesc": "Card image cap",
        "title": "Database Course",
        "text": "Some quick example text to build on the card title and make up the bulk of the card's content.",
        "url": "#"
    },
    {
        "imageUrl": "https://s38063.pcdn.co/wp-content/uploads/2021/09/Blog-SQLDatabaseSchemas-IM-JY-67189.jpg",
        "imageDesc": "Card image cap",
        "title": "Database Course",
        "text": "Some quick example text to build on the card title and make up the bulk of the card's content.",
        "url": "#"
    },
    {
        "imageUrl": "https://s38063.pcdn.co/wp-content/uploads/2021/09/Blog-SQLDatabaseSchemas-IM-JY-67189.jpg",
        "imageDesc": "Card image cap",
        "title": "Database Course",
        "text": "Some quick example text to build on the card title and make up the bulk of the card's content.",
        "url": "#"
    },
    {
        "imageUrl": "https://s38063.pcdn.co/wp-content/uploads/2021/09/Blog-SQLDatabaseSchemas-IM-JY-67189.jpg",
        "imageDesc": "Card image cap",
        "title": "Database Course",
        "text": "Some quick example text to build on the card title and make up the bulk of the card's content.",
        "url": "#"
    }
]

initializeCardsSection(cardsInfoList);

function logout() {
    localStorage.removeItem("user-id");
    window.location.replace("signin.html");
}