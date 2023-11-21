// Obiectiv:
// 1. Preluam informatiile din inputs 
// 2. Verificam daca inputs sunt goale
// 3. Schimbam border-color in rosu daca un input este invalid 
// 4. Daca ambele inputuri sunt valide, afisam datele introduse pe ecran 
// 5. Daca avem erori, afisam un mesaj de eroare sub ultimul paragraf. 

// get data from local and session storage
let nClicks = localStorage.getItem("nClicks");
// let nClicks = sessionStorage.getItem("nClicks");
if (nClicks) {
    nClicks = parseInt(nClicks);
} else {
    nClicks = 0;
}

// save to local and session storage 
localStorage.setItem('nClicks', nClicks);
sessionStorage.setItem('nClicks', nClicks);

function showErrorMessage() {
    nClicks = nClicks + 1;
    localStorage.setItem('nClicks', nClicks);
    sessionStorage.setItem('nClicks', nClicks);

    // check if p element exists
    const existingErrorParagraph = document.getElementById("errorParagraph");
    if (existingErrorParagraph) {
        existingErrorParagraph.innerText = `Ai completat gresit de ${nClicks} ori`; 
        return;
    } 

    // 1. Definim elemente noi, le customizam, le inseram in pagina 
    // 1.1. definim elementul 
    const p = document.createElement("p");

    // 1.2. customizam elementul 
    p.innerText = `Ai completat gresit de ${nClicks} ori`; // schimb mesajul
    p.id = "errorParagraph";
    // p.classList.add("animation");
    // p.classList.add("pos-text");
    p.style = "grid-column: 2; grid-row: 6;"

    // 1.3. identificam parintele elementului 
    const parent = document.getElementsByClassName("container")[0];

    // 1.4. inseram in DOM 
    parent.appendChild(p);

    // 2. inseram inaintea unui element 
    const neighbor = document.getElementsByClassName("pos-text")[0];
    neighbor.style = "grid-row: 7";

    parent.insertBefore(p, neighbor);
}

// 3. Modificam elemente existente (extragem elementul din DOM, il customizam)
function changeTitle() {
    // Modificam tag h1 
    // - schimbam valoarea in "Sign in"
    // - schimbam culoarea in albastru
    // - schimbam textul in Arial 
    const h1 = document.getElementById("title");
    console.log(h1);
    h1.innerText = "Sign in";
    h1.style.color = "blue";
    h1.style.fontFamily = "Arial";
}

function changeInputs() {
    const inputs = document.getElementsByTagName("input");
    console.log(inputs);

    for (const input of inputs) {
        input.classList.add("animation");
    }
}