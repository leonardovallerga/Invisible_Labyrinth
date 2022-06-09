/*
There are 5 monsters:
Guard, Liner, Frenetic, Monster4, Monster5.
There can be only one of each in any map.
*/

let activeMonsters = {guard: false, liner: false, frenetic: false, monster4: false, monster5: false};

////////////////////////////////////////////////////////////////////////////////
// Guard
let guardCoord = [0, 0];
let countGuard = 0;
let directionGuard = randomBetween(1, 4);
let cycleGuard = randomBetween(4, 8);

function moveGuard() {
  let destination = "";
  countGuard++;
  if (countGuard == cycleGuard) {
    directionGuard = randomBetween(1, 4);
    cycleGuard = randomBetween(4, 8);
    countGuard = 0;
  }

  // directionGuard: 1 UP, 2 DOWN, 3 LEFT, 4 RIGHT
  switch (directionGuard) {
    case 1: // UP
    destination = mapstatus[coord(guardCoord[0], guardCoord[1] - 1)];
    if (destination == "P") {
      loose();
    } else if (destination == " ") {
      mapstatus[coord(guardCoord[0], guardCoord[1])] = " ";
      mapstatus[coord(guardCoord[0], guardCoord[1] - 1)] = "G";
      guardCoord[1] -= 1;
    } else {
      directionGuard = randomBetween(1, 4);
    }
    drawMap(mapstatus);
    break;

    case 2: // DOWN
    destination = mapstatus[coord(guardCoord[0], guardCoord[1] + 1)];
    if (destination == "P") {
      loose();
    } else if (destination == " ") {
      mapstatus[coord(guardCoord[0], guardCoord[1])] = " ";
      mapstatus[coord(guardCoord[0], guardCoord[1] + 1)] = "G";
      guardCoord[1] += 1;
    } else {
      directionGuard = randomBetween(1, 4);
    }
    drawMap(mapstatus);
    break;

    case 3: // LEFT
    destination = mapstatus[coord(guardCoord[0] - 1, guardCoord[1])];
    if (destination == "P") {
      loose();
    } else if (destination == " ") {
      mapstatus[coord(guardCoord[0], guardCoord[1])] = " ";
      mapstatus[coord(guardCoord[0] - 1, guardCoord[1])] = "G";
      guardCoord[0] -= 1;
    } else {
      directionGuard = randomBetween(1, 4);
    }
    drawMap(mapstatus);
    break;

    case 4: // RIGHT
    destination = mapstatus[coord(guardCoord[0] + 1, guardCoord[1])];
    if (destination == "P") {
      loose();
    } else destination = mapstatus[coord(guardCoord[0] + 1, guardCoord[1])];
    if (destination == " ") {
      mapstatus[coord(guardCoord[0], guardCoord[1])] = " ";
      mapstatus[coord(guardCoord[0] + 1, guardCoord[1])] = "G";
      guardCoord[0] += 1;
    } else {
      directionGuard = randomBetween(1, 4);
    }
    drawMap(mapstatus);
    break;
  }
}

////////////////////////////////////////////////////////////////////////////////
// Liner
let linerCoord = [0, 0];
let countLiner = 0;
let leftside = "";
let rightside = "";
let directionLiner = 0;
let linerMoving = true;

function moveLiner() {
  leftside = mapstatus[coord(linerCoord[0] - 1, linerCoord[1])];
  rightside = mapstatus[coord(linerCoord[0] + 1, linerCoord[1])];

  if (countLiner == 50) {
      if (directionLiner == 0) {
        if (leftside == " ") {
          mapstatus[coord(linerCoord[0], linerCoord[1])] = " ";
          mapstatus[coord(linerCoord[0] - 1, linerCoord[1])] = "<";
          linerCoord[0] -= 1;
        } else if (leftside == "P") {
          loose();
        } else {
          directionLiner = 1;
          countLiner = 0;
          linerMoving = false;
        }
      } else if (directionLiner == 1) {
        if (rightside == " ") {
          mapstatus[coord(linerCoord[0], linerCoord[1])] = " ";
          mapstatus[coord(linerCoord[0] + 1, linerCoord[1])] = "<";
          linerCoord[0] += 1;
      } else if (rightside == "P") {
        loose();
      } else {
          directionLiner = 0;
          countLiner = 0;
          linerMoving = false;
        }
      }

  } else {
    countLiner++;
  }
  drawMap(mapstatus);
}

////////////////////////////////////////////////////////////////////////////////
// Frenetic
let freneticCoord = [0, 0];
let countFrenetic = 0;
let directionFrenetic = randomBetween(1, 4);
let cycleFrenetic = randomBetween(2, 10);

function moveFrenetic() {
  let destination = "";
  countFrenetic++;
  if (countFrenetic == cycleFrenetic) {
    directionFrenetic = randomBetween(1, 4);
    cycleFrenetic = randomBetween(2, 10);
    countFrenetic = 0;
  }

  switch (directionFrenetic) {
    case 1:
    destination = mapstatus[coord(freneticCoord[0], freneticCoord[1] - 1)];
    if (destination == "P") {
      loose();
    } else if (destination == " ") {
      mapstatus[coord(freneticCoord[0], freneticCoord[1])] = " ";
      mapstatus[coord(freneticCoord[0], freneticCoord[1] - 1)] = "F";
      freneticCoord[1] -= 1;
    } else {
      directionFrenetic = randomBetween(1, 4);
    }
    drawMap(mapstatus);
    break;

    case 2:
    destination = mapstatus[coord(freneticCoord[0], freneticCoord[1] + 1)];
    if (destination == "P") {
      loose();
    } else if (destination == " ") {
      mapstatus[coord(freneticCoord[0], freneticCoord[1])] = " ";
      mapstatus[coord(freneticCoord[0], freneticCoord[1] + 1)] = "F";
      freneticCoord[1] += 1;
    } else {
      directionFrenetic = randomBetween(1, 4);
    }
    drawMap(mapstatus);
    break;

    case 3:
    destination = mapstatus[coord(freneticCoord[0] - 1, freneticCoord[1])];
    if (destination == "P") {
      loose();
    } else if (destination == " ") {
      mapstatus[coord(freneticCoord[0], freneticCoord[1])] = " ";
      mapstatus[coord(freneticCoord[0] - 1, freneticCoord[1])] = "F";
      freneticCoord[0] -= 1;
    } else {
      directionFrenetic = randomBetween(1, 4);
    }
    drawMap(mapstatus);
    break;

    case 4:
    destination = mapstatus[coord(freneticCoord[0] + 1, freneticCoord[1])];
    if (destination == "P") {
      loose();
    } else destination = mapstatus[coord(freneticCoord[0] + 1, freneticCoord[1])];
    if (destination == " ") {
      mapstatus[coord(freneticCoord[0], freneticCoord[1])] = " ";
      mapstatus[coord(freneticCoord[0] + 1, freneticCoord[1])] = "F";
      freneticCoord[0] += 1;
    } else {
      directionFrenetic = randomBetween(1, 4);
    }
    drawMap(mapstatus);
    break;
  }
}
////////////////////////////////////////////////////////////////////////////////
let intervalGuard = null;
let intervalLiner = null;
let intervalFrenetic = null;

function initIntervals(guard, liner, frenetic, monster4, monster5) {
  if (guard) {
    clearInterval(intervalGuard);
    intervalGuard = setInterval(moveGuard, 250);
  } else {
    clearInterval(intervalGuard);
  }

  if (liner) {
    clearInterval(intervalLiner);
    intervalLiner = setInterval(moveLiner, 35);
  } else {
    clearInterval(intervalLiner);
  }

  if (frenetic) {
    clearInterval(intervalFrenetic);
    intervalFrenetic = setInterval(moveFrenetic, 133);
  } else {
    clearInterval(intervalFrenetic);
  }
}
