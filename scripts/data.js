let canvas = document.getElementById("canvas");
let c = canvas.getContext("2d");
let bottom_text = document.getElementById("bottom_text");
let level_text = document.getElementById("level_text");
let superposed_text = document.getElementById("superposed_text");

let wall = new Image();
wall.src = "./img/wall.png";

let imgPlayer1 = new Image();
imgPlayer1.src = "./img/player1.png";
let imgPlayer2 = new Image();
imgPlayer2.src = "./img/player2.png";
let imgPlayer3 = new Image();
imgPlayer3.src = "./img/player3.png";
let imgPlayer4 = new Image();
imgPlayer4.src = "./img/player4.png";

let imgSun1 = new Image();
imgSun1.src = "./img/sun1.png";
let imgSun2 = new Image();
imgSun2.src = "./img/sun2.png";
let imgSun3 = new Image();
imgSun3.src = "./img/sun3.png";
let imgSun4 = new Image();
imgSun4.src = "./img/sun4.png";

let imgGuard1D = new Image();
imgGuard1D.src = "./img/guard1D.png";
let imgGuard1L = new Image();
imgGuard1L.src = "./img/guard1L.png";
let imgGuard1R = new Image();
imgGuard1R.src = "./img/guard1R.png";
let imgGuard1U = new Image();
imgGuard1U.src = "./img/guard1U.png";

let imgGuard2D = new Image();
imgGuard2D.src = "./img/guard2D.png";
let imgGuard2L = new Image();
imgGuard2L.src = "./img/guard2L.png";
let imgGuard2R = new Image();
imgGuard2R.src = "./img/guard2R.png";
let imgGuard2U = new Image();
imgGuard2U.src = "./img/guard2U.png";

let imgGuard3D = new Image();
imgGuard3D.src = "./img/guard3D.png";
let imgGuard3L = new Image();
imgGuard3L.src = "./img/guard3L.png";
let imgGuard3R = new Image();
imgGuard3R.src = "./img/guard3R.png";
let imgGuard3U = new Image();
imgGuard3U.src = "./img/guard3U.png";

let imgGuard4D = new Image();
imgGuard4D.src = "./img/guard4D.png";
let imgGuard4L = new Image();
imgGuard4L.src = "./img/guard4L.png";
let imgGuard4R = new Image();
imgGuard4R.src = "./img/guard4R.png";
let imgGuard4U = new Image();
imgGuard4U.src = "./img/guard4U.png";

let imgLiner1 = new Image();
imgLiner1.src = "./img/liner1.png";
let imgLiner2 = new Image();
imgLiner2.src = "./img/liner2.png";
let imgLiner3 = new Image();
imgLiner3.src = "./img/liner3.png";
let imgLiner4 = new Image();
imgLiner4.src = "./img/liner4.png";

let imgFrenetic1 = new Image();
imgFrenetic1.src = "./img/frenetic1.png";
let imgFrenetic2 = new Image();
imgFrenetic2.src = "./img/frenetic2.png";
let imgFrenetic3 = new Image();
imgFrenetic3.src = "./img/frenetic3.png";
let imgFrenetic4 = new Image();
imgFrenetic4.src = "./img/frenetic4.png";

////////////////////////////////////////////////////////////////////////////////
// GRID: 31 x 17 => 30px per cell = 930 510
const WIDTH = 31;
const HEIGHT = 17;
const GRID = 30;

let level = 1;
let visiblewalls = false;

////////////////////////////////////////////////////////////////////////////////

let mapstatus = [];

////////////////////////////////////////////////////////////////////////////////
function drawMap(mapToPrint) {
  for (y = 0; y < HEIGHT; y++) {
    for (x = 0; x < WIDTH; x++) {
      if (mapToPrint[coord(x, y)] == "x") {
        draw(x, y, wall);
      } else if (mapToPrint[coord(x, y)] == "P") {
        draw(x, y, "#000");
        draw(x, y, secuenceCharacters("P"));
      } else if (mapToPrint[coord(x, y)] == "G") {
        draw(x, y, "#000");
        draw(x, y, secuenceCharacters("G"));
      } else if (mapToPrint[coord(x, y)] == " " || mapToPrint[coord(x, y)] == "r") {
        draw(x, y, "#000");
      } else if (mapToPrint[coord(x, y)] == "S") {
        draw(x, y, "#000");
        draw(x, y, secuenceCharacters("S"));
      } else if (mapToPrint[coord(x, y)] == ".") {
        draw(x, y, "#000");
      } else if (mapToPrint[coord(x, y)] == "<") {
        draw(x, y, "#000");
        draw(x, y, secuenceCharacters("<"));
      } else if (mapToPrint[coord(x, y)] == "F") {
        draw(x, y, "#000");
        draw(x, y, secuenceCharacters("F"));
      }

      if (mapToPrint[coord(x, y)] == "." && visiblewalls) {
        draw(x, y, "#200");
      }
    }
  }
}

// draw on canvas, color or image in grid
function draw(x, y, color) {
  if (typeof color == "string") {
    c.fillStyle = color;
    c.fillRect(x * GRID, y * GRID, GRID, GRID);
  } else {
    c.drawImage(color, x * GRID, y * GRID, GRID, GRID);
  }
}

// Each character is compoused by a secuence of 4 images
let imageCount = 1;
function setImageCount() {
  if (imageCount < 4) {
    imageCount++;
  } else {
    imageCount = 1;
  }
}
setInterval(setImageCount, 100);

// returns the corresponding image in any step
function secuenceCharacters(character) {
  if (character == "G") {
    switch (imageCount) {
      case 1:
        if (directionGuard == 1) {
          return imgGuard1U;
        } else if (directionGuard == 2) {
          return imgGuard1D;
        } else if (directionGuard == 3) {
          return imgGuard1L;
        } else if (directionGuard == 4) {
          return imgGuard1R;
        }

      case 2:
        if (directionGuard == 1) {
          return imgGuard2U;
        } else if (directionGuard == 2) {
          return imgGuard2D;
        } else if (directionGuard == 3) {
          return imgGuard2L;
        } else if (directionGuard == 4) {
          return imgGuard2R;
        }

      case 3:
        if (directionGuard == 1) {
          return imgGuard3U;
        } else if (directionGuard == 2) {
          return imgGuard3D;
        } else if (directionGuard == 3) {
          return imgGuard3L;
        } else if (directionGuard == 4) {
          return imgGuard3R;
        }

      case 4:
        if (directionGuard == 1) {
          return imgGuard4U;
        } else if (directionGuard == 2) {
          return imgGuard4D;
        } else if (directionGuard == 3) {
          return imgGuard4L;
        } else if (directionGuard == 4) {
          return imgGuard4R;
        }
    }
  }

  if (character == "<") {
    switch (imageCount) {
      case 1: return imgLiner1;
      case 2: return imgLiner2;
      case 3: return imgLiner3;
      case 4: return imgLiner4;
    }
  }

  if (character == "S") {
    switch (imageCount) {
      case 1: return imgSun1;
      case 2: return imgSun2;
      case 3: return imgSun3;
      case 4: return imgSun4;
    }
  }

  if (character == "F") {
    switch (imageCount) {
      case 1: return imgFrenetic1;
      case 2: return imgFrenetic2;
      case 3: return imgFrenetic3;
      case 4: return imgFrenetic4;
    }
  }

  if (character == "P") {
    switch (imageCount) {
      case 1: return imgPlayer1;
      case 2: return imgPlayer2;
      case 3: return imgPlayer3;
      case 4: return imgPlayer4;
    }
  }
}

// set level and reset level
function setLevel() {

  activeMonsters.guard = false;
  activeMonsters.liner = false;
  activeMonsters.frenetic = false;
  activeMonsters.monster4 = false;
  activeMonsters.monster5 = false;

  for (y = 0; y < HEIGHT; y++) {
    for (x = 0; x < WIDTH; x++) {
      mapstatus[coord(x, y)] = returnMap(x, y);
      if (returnMap(x, y) == "P") {
        playerCoord[0] = x;
        playerCoord[1] = y;
      } else if (returnMap(x, y) == "G") {
        guardCoord[0] = x;
        guardCoord[1] = y;
        activeMonsters.guard = true;
      } else if (returnMap(x, y) == "<") {
        linerCoord[0] = x;
        linerCoord[1] = y;
        activeMonsters.liner = true;
      } else if (returnMap(x, y) == "F") {
        freneticCoord[0] = x;
        freneticCoord[1] = y;
        activeMonsters.frenetic = true;
      }
    }
  }
  initIntervals(activeMonsters.guard, activeMonsters.liner, activeMonsters.frenetic, activeMonsters.monster4, activeMonsters.monster5);
  level_text.innerText = level;

  // make the Liner go directly towards the left
  if (level == 7 || level == 9) {
    directionLiner = 0;
    countLiner = 50;
    linerMoving = true;
  } else if (level == 11) {
    bottom_text.hidden = true;
    superposed_text.hidden = false;
  }

  drawMap(mapstatus);
}

function loose() {
  setLevel();
}

function levelUp() {
  if (level >= 1 && level <= 10) {
    level++;
  } else {
    level = 11; // Win Screen
  }

  setLevel();
}
////////////////////////////////////////////////////////////////////////////////
// Coordenates X-Y to one-dimensional array index:
function coord(x, y) {
  return x + y * WIDTH;
}

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
