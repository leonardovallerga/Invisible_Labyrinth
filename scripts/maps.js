/*
x - visible wall
. - invisible wall
P - player
S - sun
  - empty

G - monster Guard
< - monster Liner
F - monster Frenetic

l - light
k - keys
d - door

r - reserved zone (no monsters can pass through it until Player has already passed)
*/

function returnMap(x, y) {
  switch(level) {
    case 1: return map01[coord(x, y)];
    case 2: return map02[coord(x, y)];
    case 3: return map03[coord(x, y)];
    case 4: return map04[coord(x, y)];
    case 5: return map05[coord(x, y)];
    case 6: return map06[coord(x, y)];
    case 7: return map07[coord(x, y)];
    case 8: return map08[coord(x, y)];
    case 9: return map09[coord(x, y)];
    case 10: return map10[coord(x, y)];
    case 11: return mapWin[coord(x, y)];
  }
}

let s_map01 = [
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "x                           xSx",
  "x                         .rx x",
  "x                         .   x",
  "x            .................x",
  "x                G.           x",
  "x                 .           x",
  "x..............   .           x",
  "x             .               x",
  "x      .      .               x",
  "x      .      ............    x",
  "x  .....  .....          .    x",
  "x   .         .          .    x",
  "x   .                         x",
  "xxxr.                         x",
  "xP  .                         x",
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
];
let map01 = [];
for (y = 0; y < HEIGHT; y++) {
  for (x = 0; x < WIDTH; x++) {
    map01.push(s_map01[y][x]);
  }
}

let s_map02 = [
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "x             xSx            Gx",
  "x             xrx             x",
  "x             xrx             x",
  "x             .               x",
  "x             .     ........  x",
  "x             .               x",
  "xxx   ....... ......        xxx",
  "x                            <x",
  "xxx       .         .       xxx",
  "x     ...................     x",
  "x         .         .         x",
  "x         .         .         x",
  "x         .   xrx   .         x",
  "x             xrx             x",
  "x             xPx             x",
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
];
let map02 = [];
for (y = 0; y < HEIGHT; y++) {
  for (x = 0; x < WIDTH; x++) {
    map02.push(s_map02[y][x]);
  }
}

let s_map03 = [
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "xP r                   .      x",
  "xxxx           .              x",
  "x              ...............x",
  "x   ............              x",
  "x              .        .     x",
  "x              .rrrrr....     x",
  "x...........   .        .  xxxx",
  "x              .        .  r Sx",
  "x              .        ...xxxx",
  "x    ...........              x",
  "x              .              x",
  "x              .............  x",
  "x........         .     .     x",
  "x                             x",
  "xF             .     .        x",
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
];
let map03 = [];
for (y = 0; y < HEIGHT; y++) {
  for (x = 0; x < WIDTH; x++) {
    map03.push(s_map03[y][x]);
  }
}

let s_map04 = [
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "x          .           .   r Sx",
  "x....      .           .   xxxx",
  "x       .      ...   ...      x",
  "x    ....              .      x",
  "x       .......        .      x",
  "x       .              .      x",
  "xxxx    .      ...........    x",
  "xP r    .      .         .    x",
  "xxxx    .      .         .    x",
  "x       .   ....     .   .    x",
  "x       .   .  .     .        x",
  "x    ........  .     .        x",
  "x              .   ...........x",
  "x       .                     x",
  "x       .                    Gx",
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
];
let map04 = [];
for (y = 0; y < HEIGHT; y++) {
  for (x = 0; x < WIDTH; x++) {
    map04.push(s_map04[y][x]);
  }
}

let s_map05 = [
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "x                         rr Sx",
  "x...rrr....................xxxx",
  "x      .                      x",
  "x      .. . . ..............  x",
  "xrrr....      .     .      .  x",
  "x   .         xrx          .  x",
  "x   .  ......xx xx......   .  x",
  "x   .        r P r     .   .  x",
  "x   .........xx xx         .  x",
  "x            Gxrx........  .  x",
  "x             . .       .     x",
  "x      .      .         .     x",
  "x...   ...............  ......x",
  "x                    .        x",
  "x                             x",
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
];
let map05 = [];
for (y = 0; y < HEIGHT; y++) {
  for (x = 0; x < WIDTH; x++) {
    map05.push(s_map05[y][x]);
  }
}

let s_map06 = [
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "xxx          G..............xxx",
  "x                            <x",
  "xxx           .         ..  xxx",
  "x  ...  ...  .............    x",
  "x   .    .    .    .   .      x",
  "x   .    .    .    .   .      x",
  "x                      .   .  x",
  "x                      .   .  x",
  "x  .... ....           .   .  x",
  "x              .............  x",
  "x              .              x",
  "x...  ...  .....              x",
  "x              ....  .........x",
  "xxxx           .           xxxx",
  "xP r           .           r Sx",
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
];
let map06 = [];
for (y = 0; y < HEIGHT; y++) {
  for (x = 0; x < WIDTH; x++) {
    map06.push(s_map06[y][x]);
  }
}

let s_map07 = [
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "x    .........             r Sx",
  "x    .       .............rxxxx",
  "x    .    .   .          .    x",
  "x         .  ..  .   .        x",
  "x  ....   .   .  . ...........x",
  "x   .     ..  .  . .          x",
  "x      .      .  . .     .    x",
  "x      .      .  .     .....  x",
  "x....  .  ..  .            .  x",
  "x      .      ......   .   .  x",
  "x     G...  ...    .          x",
  "x .           .    .  ..  .  .x",
  "x .  .             .      .  .x",
  "xxxx...  ...  ...  ...  ...  .x",
  "xP r                         <x",
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
];
let map07 = [];
for (y = 0; y < HEIGHT; y++) {
  for (x = 0; x < WIDTH; x++) {
    map07.push(s_map07[y][x]);
  }
}

let s_map08 = [
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "xF                      .  rrSx",
  "x              ....     .  xxxx",
  "x          .....  ....rr.     x",
  "x ........r.         .  ....r.x",
  "x .      . .         .        x",
  "x..  ..... .      ............x",
  "x      .     ......           x",
  "x      . .....                x",
  "x...   . .         .   ....   x",
  "x      . .  ........   .      x",
  "x      .    .          .      x",
  "x   ....................  ....x",
  "x            .                x",
  "xxxx      .     .     .       x",
  "xPrr   .           .         Gx",
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
];
let map08 = [];
for (y = 0; y < HEIGHT; y++) {
  for (x = 0; x < WIDTH; x++) {
    map08.push(s_map08[y][x]);
  }
}

let s_map09 = [
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "xPrrr          .          rrrSx",
  "xxxx.  ..  .........rr.....xxxx",
  "x                            <x",
  "xxxx ... ..................xxxx",
  "x  . . . . .   .   .   .   . .x",
  "x  . .   .     .   .     .    x",
  "x  .     .   ...      .      .x",
  "x  ....  .   .    ..      .   x",
  "x       ..   .         F     .x",
  "x.       . ...  .   .  .   .  x",
  "x  .  .  .                    x",
  "x        .      .       .    .x",
  "xG       .........         .  x",
  "x  .       .     .   .       .x",
  "x  .    .     .          .    x",
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
];
let map09 = [];
for (y = 0; y < HEIGHT; y++) {
  for (x = 0; x < WIDTH; x++) {
    map09.push(s_map09[y][x]);
  }
}

let s_map10 = [
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "x        .                 rrPx",
  "x..rr..  ... ... ... ... ..xxxx",
  "x    .   .    .  . . . . .    x",
  "x  ...   ...... .. . . . .    x",
  "x    . ...      .  .   . ...  x",
  "x    .        x.x  . . . .    x",
  "x..  ........xx xx.... . . .  x",
  "x        F.  rrS .     .   .  x",
  "x    ..   .  xx xx........... x",
  "x.    .   .  .x.x           . x",
  "x     .   .  .. .  .....    . x",
  "x......   .  .  .      .  ... x",
  "x   .     r  .  ...    .    . x",
  "x   ..........  .      ...    x",
  "x                 <...........x",
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
];
let map10 = [];
for (y = 0; y < HEIGHT; y++) {
  for (x = 0; x < WIDTH; x++) {
    map10.push(s_map10[y][x]);
  }
}

let s_mapWin = [
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "xS  x     xxxxxxxxxxx     x  Sx",
  "xxx x     x         x     x xxx",
  "x   x x xxx         xxx x x   x",
  "x     x   xxxxxxxxxxx   x     x",
  "xG                           Fx",
  "x x   x   x   x x   x   x   x x",
  "xxx  xxx  xx  x x  xx  xxx  xxx",
  "x                            <x",
  "xxxxx   xx  xxx xxx  xx   xxxxx",
  "x        x    x x    x        x",
  "xx   xxxxxx  xx xx  xxxxxx   xx",
  "x  xxx  x      P      x  xxx  x",
  "x       xxxxxxx xxxxxxx       x",
  "xxx x   x     x x     x   x xxx",
  "xS  xx     x       x     xx  Sx",
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
];
let mapWin = [];
for (y = 0; y < HEIGHT; y++) {
  for (x = 0; x < WIDTH; x++) {
    mapWin.push(s_mapWin[y][x]);
  }
}

/*
let s_map10 = [
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "x                             x",
  "x                             x",
  "x                             x",
  "x                             x",
  "x                             x",
  "x                             x",
  "x                             x",
  "x                             x",
  "x                             x",
  "x                             x",
  "x                             x",
  "x                             x",
  "x                             x",
  "x                             x",
  "x                             x",
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
];
*/
