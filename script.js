//pizzas
let cheese = document.getElementById("cheese");
let momoTandoori = document.getElementById("momoTandoori");
let canadian = document.getElementById("canadian");

//buttons are listed below
let previous = document.getElementById("previous");
let next = document.getElementById("next");



//pizza property defualt
momoTandoori.style.display=  "block";
cheese.style.display =  "none";
canadian.style.display= "none";


function nextPizza() {
    let a = Math.floor(Math.random() * 3);
    
    switch (a) {
        case 0 :
            momoTandoori.style.display=  "block";
            cheese.style.display =  "none";
            canadian.style.display= "none";
            break;
        case 1 :
            momoTandoori.style.display=  "none";
            cheese.style.display =  "block";
            canadian.style.display= "none";
            break;
        case 2: 
            momoTandoori.style.display=  "none";
            cheese.style.display =  "none";
            canadian.style.display= "block";
            break;
    }

}

function prevPizza() {
    let a = Math.floor(Math.random() * 3);
    switch (a) {
        case 0 :
            momoTandoori.style.display=  "block";
            cheese.style.display =  "none";
            canadian.style.display= "none";
            break;
        case 1 :
            momoTandoori.style.display=  "none";
            cheese.style.display =  "block";
            canadian.style.display= "none";
            break;
        case 2: 
            momoTandoori.style.display=  "none";
            cheese.style.display =  "none";
            canadian.style.display= "block";
            break;
    }
}

next.onclick =nextPizza;
previous.onclick = prevPizza;
