const svg = document.getElementById("drawingArea");

let isDrawing = false;
let currentPath = null;

svg.addEventListener("mousedown", (e) => {
  isDrawing = true;

  // Create new path
  currentPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  currentPath.setAttribute("stroke", "blue");
  currentPath.setAttribute("fill", "none");
  currentPath.setAttribute("stroke-width", "2");

  const x = e.offsetX;
  const y = e.offsetY;
  currentPath.setAttribute("d", `M${x},${y}`);
  
  svg.appendChild(currentPath);
});

svg.addEventListener("mousemove", (e) => {
  if (!isDrawing) return;

  const x = e.offsetX;
  const y = e.offsetY;
  const d = currentPath.getAttribute("d");
  currentPath.setAttribute("d", `${d} L${x},${y}`);
});

svg.addEventListener("mouseup", () => {
  isDrawing = false;
});

svg.addEventListener("mouseleave", () => {
  isDrawing = false;
});
