const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width = 1024
canvas.height = 576;

const collisionsMap = [];
for (var i = 0; i < collisions.length; i += 52) {
    collisionsMap.push(collisions.slice(i, i +52));
}

const playerImage = new Image();
playerImage.src = './assets/playerDown.png'
const playerWidth = playerImage.width;
const playerHeight = playerImage.height;


const map = new Image();
map.src = './map/mainmap.png';

class Boundary {
    static tileWidth = 20;
    static tileHeight = 20;
    constructor({ position }) {
        this.position = position;
    }

    drawBoundary() {
        c.fillRect(this.position.x, this.position.y, Boundary.tileWidth, Boundary.tileHeight);
    }
}

const boundaries = [];
const mapOffset = {
    x:-287.5,
    y:-335
}

for (var row = 0; row < collisionsMap.length; row++) {
    for (var col = 0; col < collisionsMap[row].length; col++) {
        if (collisionsMap[row][col] === 29104) {
            // console.log("x: "+row+ " y: "+col);
            boundaries.push(new Boundary({
                position: {
                    x: row * Boundary.tileWidth + mapOffset.x,
                    y: col * Boundary.tileHeight + mapOffset.y
                }
            }
            )
            )
        }
    }
}


class Sprite {
    constructor({ position, velocity, image }) {
        this.position = position;
        this.image = image;
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y);
    }
}

const backgroundImage = new Sprite({
    position: {
        x: mapOffset.x,
        y: mapOffset.y
    },
    image: map
})

const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    }
}

function animate() {
    window.requestAnimationFrame(animate);
    backgroundImage.draw();
    boundaries.forEach(boundary =>{
        boundary.drawBoundary();
    })
    c.drawImage(playerImage, 0, 0, playerWidth / 4, playerHeight,
        (canvas.width / 2) - (playerWidth / 8),
        (canvas.height / 2) - (playerHeight / 2),
        playerWidth / 4,
        playerHeight
    );

    if (keys.w.pressed && lastKey === 'w') {
        backgroundImage.position.y += 3;
    }
    else if (keys.a.pressed && lastKey === 'a') {
        backgroundImage.position.x += 3;
    }
    else if (keys.s.pressed && lastKey === 's') {
        backgroundImage.position.y -= 3;
    }
    else if (keys.d.pressed && lastKey === 'd') {
        backgroundImage.position.x -= 3;
    }
}

animate();

let lastKey = ' ';
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = true;
            lastKey = 'w';
            break;
        case 'a':
            keys.a.pressed = true;
            lastKey = 'a';
            break;
        case 's':
            keys.s.pressed = true;
            lastKey = 's';
            break;
        case 'd':
            keys.d.pressed = true;
            lastKey = 'd';
            break;
    }
})

window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = false;
            break;
        case 'a':
            keys.a.pressed = false;
            break;
        case 's':
            keys.s.pressed = false;;
            break;
        case 'd':
            keys.d.pressed = false;
            break;
    }
})

