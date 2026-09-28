const { createHexagonGrid } = require("./functions.js")

document.addEventListener('mousemove', (e) => { // hexagon grid animation
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const hexagons = document.querySelectorAll('.hexagonGrid div');
    hexagons.forEach(hex => {
        const rect = hex.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distance = Math.sqrt((mouseX - centerX) ** 2 + (mouseY - centerY) ** 2);
        const maxDistance = 200; // pixels
        const scale = Math.max(0.5, 1 - distance / maxDistance);
        hex.style.transform = `scale(${scale})`;
    });
});

function mobileNavbar() { // mobile navbar
  var x = document.getElementById("mobileNavbarLinks");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

createHexagonGrid();