let banana = 0;
let bps = 0;

let buildings = [
    { 
        name: "Auto Banana", 
        id: "bananaGenerator", 
        count: 0, 
        price: 15, 
        bps: 1 
    },
    { 
        name: "Banana Farm", 
        id: "bananaFarm", 
        count: 0, 
        price: 100, 
        bps: 5 
    },
    { 
        name: "Banana Plantation", 
        id: "bananaPlantation", 
        count: 0, 
        price: 750, 
        bps: 50 
    },
    { 
        name: "Banana Factory", 
        id: "bananaFactory", 
        count: 0, 
        price: 10000, 
        bps: 200
    },
    { 
        name: "The Jungle", 
        id: "thejungle", 
        count: 0, 
        price: 100000, 
        bps: 750
    }
];

const bananaDisplay = document.getElementById("bananas");
const bananaWord = document.getElementById("bananaWord");
const bpsCount = document.getElementById("bpsCount");
const bananaWord2 = document.getElementById("bananaWord2");

buildings.forEach(b => {
    b.button = document.getElementById(b.id);
});

function updateDisplay() {
    bananaDisplay.textContent = banana;
    bananaWord.textContent = banana === 1 ? "banana" : "bananas";

    bpsCount.textContent = bps;
    bananaWord2.textContent = bps === 1 ? "banana" : "bananas";

   buildings.forEach(b => {
        if (b.count > 0 || banana >= b.price / 1.18) {
            b.button.style.display = "inline-block";
            b.button.textContent = `${b.name} - ${b.price}`;
        } else {
            b.button.style.display = "none";
        }
    });
}


function giveBanana(amount) {
    banana += amount;
    updateDisplay();
}

function buyBuilding(building) {
    if (banana >= building.price) {
        banana -= building.price;
        building.count += 1;
        bps += building.bps;
        building.price = Math.floor(building.price * 1.15);
        updateDisplay();
    }
}

buildings.forEach(b => {
    b.button.onclick = () => buyBuilding(b);
});

setInterval(() => {
    if (bps > 0) giveBanana(bps);
}, 1000);


updateDisplay();
