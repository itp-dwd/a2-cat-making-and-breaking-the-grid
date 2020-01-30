window.onload = function () {
  generateBackground();
}

function generateBackground() {
  const poster = document.getElementById("poster");
  const NUM_COLS = 12;
  const NUM_ROWS = 12;
  let x = 0;
  let y = 0;
  while (y < NUM_ROWS) {
    const row = document.createElement("div");
    row.classList.add("row");
    poster.appendChild(row);
    let prevColorClass = "none";
    x = 0;
    while (x < NUM_COLS) {
      let randomSize = Math.floor(Math.random()*2);
      const col = document.createElement("div");
      if (y === 5 && x < 6) {
        col.classList.add("c1");
        x +=1;
      } else if (y === 6 && x > 3 && x < 10) {
        col.classList.add("c1");
        x += 1;
      } else if (y === 7 && (x === 7 || x === 8)) {
        col.classList.add("c1");
        x += 1;
      } else if (x === 0 || x === 11) {
        col.classList.add("c1");
        col.classList.add(randomClass());
        x += 1;
      } else if (x % 2 === 0) {
        col.classList.add("c1");
        col.classList.add(prevColorClass);
        x += 1;
      } else if (randomSize === 1) {
        col.classList.add("c2");
        col.classList.add(randomClass());
        x += 2;
      } else {
        col.classList.add("c1");
        prevColorClass = randomClass();
        col.classList.add(prevColorClass);
        x += 1;
      }
      row.appendChild(col);
    }
    y += 1;
  }
}

function randomClass() {
  let randomNumber = Math.floor(Math.random()*4);
  let classes = ["none", "black", "red", "blue"];
  return classes[randomNumber];
}
