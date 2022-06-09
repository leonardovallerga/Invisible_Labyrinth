// Player movement
let playerCoord = [0, 0];
let move = false;
const arrow = {UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39};

document.addEventListener("keydown", function(e) {
  let destination = "";
  switch (e.keyCode) {

    case arrow.UP:
      destination = mapstatus[coord(playerCoord[0], playerCoord[1] - 1)];
      if (destination == "G" || destination == "F" || destination == "<") {
        loose();
      } else if (destination == "S") {
        levelUp();
      } else if (destination == "l") {
        move = true;
        destination = " ";
      } else if (destination == "k") {
        move = true;
        destination = " ";
      } else if (destination == "d") {

      } else if (destination == " " || destination == "r") {
        move = true;
      }
      if (move) {
        mapstatus[coord(playerCoord[0], playerCoord[1])] = " ";
        mapstatus[coord(playerCoord[0], playerCoord[1] - 1)] = "P";
        playerCoord[1] -= 1;
        verifyWalls();
        move = false;
      }
      drawMap(mapstatus);
      break;

    case arrow.DOWN:
      destination = mapstatus[coord(playerCoord[0], playerCoord[1] + 1)];
      if (destination == "G" || destination == "F" || destination == "<") {
        loose();
      } else if (destination == "S") {
        levelUp();
      } else if (destination == "l") {
        move = true;
      } else if (destination == "k") {
        move = true;
      } else if (destination == "d") {

      } else if (destination == " " || destination == "r") {
        move = true;
      }
      if (move) {
        mapstatus[coord(playerCoord[0], playerCoord[1])] = " ";
        mapstatus[coord(playerCoord[0], playerCoord[1] + 1)] = "P";
        playerCoord[1] += 1;
        verifyWalls();
        move = false;
      }
      drawMap(mapstatus);
      break;

    case arrow.LEFT:
      destination = mapstatus[coord(playerCoord[0] - 1, playerCoord[1])];
      if (destination == "G" || destination == "F" || destination == "<") {
        loose();
      } else if (destination == "S") {
        levelUp();
      } else if (destination == "l") {
        move = true;
      } else if (destination == "k") {
        move = true;
      } else if (destination == "d") {

      } else if (destination == " " || destination == "r") {
        move = true;
      }
      if (move) {
        mapstatus[coord(playerCoord[0], playerCoord[1])] = " ";
        mapstatus[coord(playerCoord[0] - 1, playerCoord[1])] = "P";
        playerCoord[0] -= 1;
        verifyWalls();
        move = false;
      }
      drawMap(mapstatus);
      break;

    case arrow.RIGHT:
      destination = mapstatus[coord(playerCoord[0] + 1, playerCoord[1])];
      if (destination == "G" || destination == "F" || destination == "<") {
        loose();
      } else if (destination == "S") {
        levelUp();
      } else if (destination == "l") {
        move = true;
      } else if (destination == "k") {
        move = true;
      } else if (destination == "d") {

      } else if (destination == " " || destination == "r") {
        move = true;
      }
      if (move) {
        mapstatus[coord(playerCoord[0], playerCoord[1])] = " ";
        mapstatus[coord(playerCoord[0] + 1, playerCoord[1])] = "P";
        playerCoord[0] += 1;
        verifyWalls();
        move = false;
      }
      drawMap(mapstatus);
      break;
  }
});

// verify the 8 squares around the player
function verifyWalls() {
  let loc_up = mapstatus[coord(playerCoord[0], playerCoord[1] - 1)];
  let loc_up_right = mapstatus[coord(playerCoord[0] + 1, playerCoord[1] - 1)];
  let loc_right = mapstatus[coord(playerCoord[0] + 1, playerCoord[1])];
  let loc_right_down = mapstatus[coord(playerCoord[0] + 1, playerCoord[1] + 1)];
  let loc_down = mapstatus[coord(playerCoord[0], playerCoord[1] + 1)];
  let loc_down_left = mapstatus[coord(playerCoord[0] - 1, playerCoord[1] + 1)];
  let loc_left = mapstatus[coord(playerCoord[0] - 1, playerCoord[1])];
  let loc_up_left = mapstatus[coord(playerCoord[0] - 1, playerCoord[1] - 1)];

  if (loc_up == ".") {
    mapstatus[coord(playerCoord[0], playerCoord[1] - 1)] = "x";
  }
  if (loc_up_right == ".") {
    mapstatus[coord(playerCoord[0] + 1, playerCoord[1] - 1)] = "x";
  }
  if (loc_right == ".") {
    mapstatus[coord(playerCoord[0] + 1, playerCoord[1])] = "x";
  }
  if (loc_right_down == ".") {
    mapstatus[coord(playerCoord[0] + 1, playerCoord[1] + 1)] = "x";
  }
  if (loc_down == ".") {
    mapstatus[coord(playerCoord[0], playerCoord[1] + 1)] = "x";
  }
  if (loc_down_left == ".") {
    mapstatus[coord(playerCoord[0] - 1, playerCoord[1] + 1)] = "x";
  }
  if (loc_left == ".") {
    mapstatus[coord(playerCoord[0] - 1, playerCoord[1])] = "x";
  }
  if (loc_up_left == ".") {
    mapstatus[coord(playerCoord[0] - 1, playerCoord[1] - 1)] = "x";
  }
}
