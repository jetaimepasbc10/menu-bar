const pt = {
    menu: "MENU",
    drinks: "DRINKS",
    food: "FOOD",
    wines: "WINES",
    coming: "Em breve",
    instagram: "INSTAGRAM",
    location: "LOCALIZAÇÃO"
};

const en = {
    menu: "MENU",
    drinks: "DRINKS",
    food: "FOOD",
    wines: "WINES",
    coming: "Coming Soon",
    instagram: "INSTAGRAM",
    location: "LOCATION"
};

function setLanguage(lang){

    const t = lang === "en" ? en : pt;

    document.getElementById("menuTitle").textContent = t.menu;

    document.getElementById("drinksText").textContent = t.drinks;

    document.getElementById("foodText").textContent = t.food;

    document.getElementById("winesText").textContent = t.wines;

    document.getElementById("foodSoon").textContent = t.coming;

    document.getElementById("wineSoon").textContent = t.coming;

    document.getElementById("instagramText").textContent = t.instagram;

    document.getElementById("locationText").textContent = t.location;

    localStorage.setItem("language", lang);
}

document.getElementById("ptBtn").addEventListener("click", () => {
    setLanguage("pt");
});

document.getElementById("enBtn").addEventListener("click", () => {
    setLanguage("en");
});

const saved = localStorage.getItem("language") || "pt";

setLanguage(saved);
