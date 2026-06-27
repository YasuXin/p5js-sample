let width = 400;
let height = 400;

let x, y;

const deviceOrientationEl = document.getElementById('deviceOrientation')
const rotationXEl = document.getElementById('rotationX')
const rotationYEl = document.getElementById('rotationY')
/*
let x = width / 2;
let y = height / 2;

let eyes_movement_x = 0;
let eyes_movement_y = 0;

let eyes_size = 50;
*/
function setup() {
    createCanvas(width, height);
    x = width / 2;
    y = height / 2;
    fill("red");
    setMoveThreshold(0.05);
    if (DeviceMotionEvent && typeof DeviceMotionEvent.requestPermission === 'function') {
        DeviceMotionEvent.requestPermission()
            .then(permissionState => {
                if (permissionState === 'granted') {
                    window.addEventListener('devicemotion', deviceMoved);
                }
            })
            .catch(console.error);
    } else {
        // Androidやパーミッションが不要なブラウザ用
        window.addEventListener('devicemotion', deviceMoved);
    }
}

function draw() {
    if (deviceOrientation === "portrait") {
        deviceOrientationEl.innerText = '縦です'
    } else if (deviceOrientation === "landscape") {
        deviceOrientationEl.innerText = '横です'
    } else {
        deviceOrientationEl.innerText = '未定義です'
    }
    background(255);
    ellipse(x, y, 80, 80);
    /*if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
        eyes_size = 30;
        x = mouseX;
        y = mouseY;
        eyes_movement_x = (x - width / 2) / 10;
        eyes_movement_y = (y - height / 2) / 15;
    } else {
        eyes_size = 50;
        x = width / 2;
        y = height / 2;
        eyes_movement_x = 0;
        eyes_movement_y = 0;
    }
    background(220);

    stroke(147, 122, 155);
    strokeWeight(3);
    fill(226, 199, 234);
    ellipse(200, 200, 240, 200);

    noStroke();
    fill(255, 255, 255);
    ellipse(140, 180, 110, 60);

    noStroke();
    fill(255, 255, 255);
    ellipse(260, 180, 110, 60);

    noStroke();
    fill(0, 0, 0);
    ellipse(140 + eyes_movement_x, 180 + eyes_movement_y, eyes_size, eyes_size);

    noStroke();
    fill(0, 0, 0);
    ellipse(260 + eyes_movement_x, 180 + eyes_movement_y, eyes_size, eyes_size);

    stroke(147, 122, 155);
    strokeWeight(3);
    fill(226, 199, 234);
    ellipse(180, 220, 40, 40);
    stroke(147, 122, 155);
    strokeWeight(3);
    fill(226, 199, 234);
    ellipse(220, 220, 40, 40);

    noStroke();
    fill(255, 0, 0);
    ellipse(mouseX, mouseY, 10, 10);*/
}

let count = 0;

function deviceShaken() {
    count++;
    document.getElementById('count').innerText = count + ''
}
function deviceMoved() {
    x += rotationX;
    y += rotationY;
    if (x < 0) x = 0;
    if (x > windowWidth) x = windowWidth;
    if (y < 0) y = 0;
    if (y > windowHeight) y = windowHeight;
    rotationXEl.innerText = x;
    rotationYEl.innerText = y;
}