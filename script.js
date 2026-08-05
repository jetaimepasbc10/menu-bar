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

const pt = {
    menu:"MENU",
    drinks:"DRINKS",
    food:"FOOD",
    wines:"WINES",
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

    const t = lang==="en" ? en : pt;

    // HOME
    if($("menuTitle")) $("menuTitle").textContent=t.menu;
    if($("drinksText")) $("drinksText").textContent=t.drinks;
    if($("foodText")) $("foodText").textContent=t.food;
    if($("winesText")) $("winesText").textContent=t.wines;
    if($("foodSoon")) $("foodSoon").textContent=t.coming;
    if($("wineSoon")) $("wineSoon").textContent=t.coming;
    if($("instagramText")) $("instagramText").textContent=t.instagram;
    if($("locationText")) $("locationText").textContent=t.location;

    // DRINKS
    if($("backMenu")) $("backMenu").textContent=t.back;

    if($("drinksTitle")){
        $("drinksTitle").textContent = lang==="en" ? "DRINKS" : "DRINKS";
    }

    // Apenas na página Drinks
if (isDrinks) {

    const tabs = document.querySelectorAll(".menu-tabs a");

    tabs[0].textContent = "Cocktails";
    tabs[1].textContent = "Mocktails";
    tabs[2].textContent = "Gin";
    tabs[3].textContent = "Sangrias";

    const sections = document.querySelectorAll("h2");

    sections[0].textContent = "COCKTAILS";
    sections[1].textContent = "MOCKTAILS";
    sections[2].textContent = "GIN";
    sections[3].textContent = "SANGRIAS";

}

    // Ingredientes
    document.querySelectorAll(".drink small").forEach(function(item){

        let txt=item.textContent;

        if(lang==="en"){

            txt=txt
            .replaceAll("Cachaça","Cachaça")
            .replaceAll("Lima","Lime")
            .replaceAll("Hortelã","Mint")
            .replaceAll("Espumante","Sparkling Wine")
            .replaceAll("Água com gás","Sparkling Water")
            .replaceAll("Sumo de Lima","Lime Juice")
            .replaceAll("Sumo de laranja","Orange Juice")
            .replaceAll("Sumo de manga","Mango Juice")
            .replaceAll("Sumo de Manga","Mango Juice")
            .replaceAll("Sumo de Maracujá","Passion Fruit Juice")
            .replaceAll("Ananás","Pineapple")
            .replaceAll("Abacaxi","Pineapple")
            .replaceAll("Coco","Coconut")
            .replaceAll("Frutos Vermelhos","Red Berries")
            .replaceAll("Açúcar","Sugar");

        }else{

            txt=txt
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

        item.textContent=txt;

    });

    localStorage.setItem("language",lang);

}

if($("ptBtn")){
    $("ptBtn").addEventListener("click",()=>setLanguage("pt"));
}

if($("enBtn")){
    $("enBtn").addEventListener("click",()=>setLanguage("en"));
}

setLanguage(localStorage.getItem("language") || "pt");
