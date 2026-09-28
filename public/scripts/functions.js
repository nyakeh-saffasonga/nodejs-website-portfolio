function createHexagonGrid() { // hexagon grid

    let grid = document.querySelector(".hexagonGrid");
    let canvas = document.getElementById("hexagon");
    let hexagonImage = document.getElementById("hexagonImage");

    for (let i = 0; i < 400; i++) {
        let hexagon = document.createElement("div");
        let hexagonImg = document.createElement("img");
        hexagonImg.src = "images/hexagon-svgrepo-com.svg";
        hexagon.appendChild(hexagonImg);
        let row = Math.floor(i / 20);
        let col = i % 20;
        if (row % 2 === 1) {
            hexagon.style.marginLeft = '2.5vw';
        }
        hexagon.style.marginTop = '-10vh';
        grid.appendChild(hexagon);
    }
}

module.exports = { createHexagonGrid }
