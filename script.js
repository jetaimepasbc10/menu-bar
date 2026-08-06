// ===============================
// Je T'aime Pas Beach Club
// PT / EN
// ===============================

function $(id){
    return document.getElementById(id);
}

const page = location.pathname.toLowerCase();

const isHome = page.includes("index");
const isDrinks = page.includes("drinks");
const isFood = page.includes("food");

const pt = {
    menu:"MENU",
    drinks:"DRINKS",
    food:"FOOD",
    wines:"VINHOS",
    coming:"Em breve",
    instagram:"INSTAGRAM",
    location:"LOCALIZAÇÃO",
    back:"← MENU"
};

const en = {
    menu:"MENU",
    drinks:"DRINKS",
    food:"FOOD",
    wines:"WINES",
    coming:"Coming Soon",
    instagram:"INSTAGRAM",
    location:"LOCATION",
    back:"← MENU"
};

function setLanguage(lang){

    const t = lang === "en" ? en : pt;

    // HOME
    if($("menuTitle")) $("menuTitle").textContent = t.menu;
    if($("drinksText")) $("drinksText").textContent = t.drinks;
    if($("foodText")) $("foodText").textContent = t.food;
    if($("winesText")) $("winesText").textContent = t.wines;
    if($("wineSoon")) $("wineSoon").textContent = t.coming;
    if($("foodSoon")) $("foodSoon").textContent = t.coming;
    if($("instagramText")) $("instagramText").textContent = t.instagram;
    if($("locationText")) $("locationText").textContent = t.location;

    // BOTÃO VOLTAR
    if($("backMenu")) $("backMenu").textContent = t.back;

    // TÍTULO DRINKS
    if($("drinksTitle")){
        $("drinksTitle").textContent = "DRINKS";
    }

    // TÍTULO FOOD
    if($("foodTitle")){
        $("foodTitle").textContent = "FOOD";
    }

    // Apenas na página Drinks
    if(isDrinks){

        const tabs = document.querySelectorAll(".menu-tabs a");

        if (tabs.length >= 5) {

    tabs[0].textContent = "Cocktails";
    tabs[1].textContent = "Mocktails";
    tabs[2].textContent = "Gin";
    tabs[3].textContent = "Whiskies";
    tabs[4].textContent = "Sangrias";
}

        const sections = document.querySelectorAll("h2");

        if (sections.length >= 5) {

    sections[0].textContent = "COCKTAILS";
    sections[1].textContent = "MOCKTAILS";
    sections[2].textContent = "GIN";
    sections[3].textContent = "WHISKIES";
    sections[4].textContent = "SANGRIAS";
}
    }
        // Tradução dos ingredientes dos Drinks
    document.querySelectorAll(".drink small").forEach(function(item){

        let txt = item.textContent;

        if(lang==="en"){

            txt = txt
            .replaceAll("Lima","Lime")
            .replaceAll("Hortelã","Mint")
            .replaceAll("Espumante","Sparkling Wine")
            .replaceAll("Água com gás","Sparkling Water")
            .replaceAll("Sumo de Lima","Lime Juice")
            .replaceAll("Sumo de laranja","Orange Juice")
            .replaceAll("Sumo de Manga","Mango Juice")
            .replaceAll("Sumo de Maracujá","Passion Fruit Juice")
            .replaceAll("Ananás","Pineapple")
            .replaceAll("Abacaxi","Pineapple")
            .replaceAll("Coco","Coconut")
            .replaceAll("Frutos Vermelhos","Red Berries")
            .replaceAll("Açúcar","Sugar");

        }else{

            txt = txt
            .replaceAll("Lime Juice","Sumo de Lima")
            .replaceAll("Orange Juice","Sumo de laranja")
            .replaceAll("Mango Juice","Sumo de Manga")
            .replaceAll("Passion Fruit Juice","Sumo de Maracujá")
            .replaceAll("Sparkling Water","Água com gás")
            .replaceAll("Sparkling Wine","Espumante")
            .replaceAll("Mint","Hortelã")
            .replaceAll("Lime","Lima")
            .replaceAll("Pineapple","Ananás")
            .replaceAll("Coconut","Coco")
            .replaceAll("Red Berries","Frutos Vermelhos")
            .replaceAll("Sugar","Açúcar");
        }

        item.textContent = txt;

    });

    localStorage.setItem("language", lang);

}

if($("ptBtn")){
    $("ptBtn").addEventListener("click", function(){
        setLanguage("pt");
    });
}

if($("enBtn")){
    $("enBtn").addEventListener("click", function(){
        setLanguage("en");
    });
}

window.onload = function(){
    setLanguage(localStorage.getItem("language") || "pt");
};
function openImage(src) {

    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "rgba(0,0,0,0.9)";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.zIndex = "9999";

    const img = document.createElement("img");
    img.src = src;
    img.style.maxWidth = "90%";
    img.style.maxHeight = "90%";
    img.style.borderRadius = "12px";
    img.style.border = "2px solid #c9a64b";

    overlay.appendChild(img);

    overlay.onclick = function () {
        overlay.remove();
    };

    document.body.appendChild(overlay);
}
