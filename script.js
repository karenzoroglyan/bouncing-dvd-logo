const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const img = document.createElement("img");
img.src = "https://www.freeiconspng.com/uploads/dvd-logo-png-15.png";

// информация нашего логотипа dvd
let data = {
  x: 10,
  y: 10,
  width: 100,
  height: 100,
  fillStyle: "green",
  img: img,
};

//

let color;
const colors = ["pink", "red", "yellow", "green", "orange", "сyan", "gray"];

function pickColor() {
  let randomColor = colors[Math.floor(Math.random() * 7)];
  color = randomColor;
}

pickColor();

let xSpeed = 1;
let ySpeed = -1;

function update() {
  /* Проверяет, если координата по икс + ширина элемента двд больше, чем ширина 
  нашего полотна, то в таком случае мы меняем направление нашего элемента двд и меняем цвет
  */
  if (data.x + data.width > canvas.width) {
    xSpeed = -1;
    pickColor();
  } else if (data.x < 0) {
    xSpeed = 1;
    pickColor();
  }

  // Таже история здесь, только по оси y
  if (data.y + data.height > canvas.height) {
    ySpeed = -1;
    pickColor();
  } else if (data.y < 0) {
    ySpeed = 1;
    pickColor();
  }

  data.x += xSpeed;

  data.y += ySpeed;
}

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = color;
  context.fillRect(data.x, data.y, data.width, data.height);
  context.drawImage(data.img, data.x, data.y, data.width, data.height);
}

function loop() {
  requestAnimationFrame(loop);
  update();
  draw();
}

loop();
