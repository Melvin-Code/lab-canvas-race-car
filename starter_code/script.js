document.querySelector('#start-button').onclick = function () { //Start button is clicked 
  this.remove() //removes start button
  startGame() //calls 
  
}

document.onclick = function (e) { //
  console.log(e.x, e.y)
}


const canvas = document.querySelector('#canvas'); //Get the canvas
var img = new Image(); //load an image element
var img2 = new Image(); //load an image element

canvas.width = window.innerWidth / 2; //Set canvas width and height
canvas.height = window.innerHeight - 25
console.log(canvas.height)
const ctx = canvas.getContext('2d'); //Get the context 




function startGame() {
  console.log("START")
  img.onload = function () { //Load the car for the first time 
    ctx.drawImage(img, car.x, car.y, car.width, car.height);
    // ctx.drawImage(img2, car2.x, car2.y, car2.width, car2.height);
  }
  img2.onload = function () { //Load the car for the first time 
    // ctx.drawImage(img, car.x, car.y, car.width, car.height);
    ctx.drawImage(img2, car2.x, car2.y, car2.width, car2.height);
  }
  img.src = "./images/car.png";
  img2.src = "./images/car2.png"
  startLines()
  startObstacle()
  window.requestAnimationFrame(animate) //Starts the animation infinite loop
}


function drawBoard() {
  ctx.fillStyle = 'green'
  ctx.fillRect(0, 0, canvas.width, canvas.height) //draws the green grass 
  ctx.fillStyle = 'grey'
  ctx.fillRect(100, 0, canvas.width - 200, canvas.height) //draws the road 
  ctx.fillStyle = 'white'
  ctx.fillRect(110, 0, canvas.width - 220, canvas.height)
  ctx.fillStyle = 'grey'
  ctx.fillRect(120, 0, canvas.width - 240, canvas.height)
}

let car = { //Car object - also can be converted to a Class 
  x: (canvas.width / 2) - 25,
  y: 609 - 109,
  width: 50,
  height: 80
}
let car2 = { //Car object - also can be converted to a Class 
  x: (canvas.width / 2) - 25,
  y: 609 - 109,
  width: 50,
  height: 80
}


let lines = [

] // this is where all the lines will be push to


function startLines() {
  //keeps creating new lines oveove an over again
  setInterval(() => {
    let line = {
      x: (canvas.width / 2) - 5,
      y: 0,
      width: 10,
      height: 20
    }
    lines.push(line)

    console.log('every second', lines)
  }, 200)

}

function drawLine() {
  ctx.fillStyle = 'white'
  lines.forEach(line => {
    ctx.fillRect(line.x, line.y += 15, line.width, line.height) // draw the lines in the board increasing the the space bewtwen them
    snd2.play()
  })
}
/**
 * 
 */
let obstacles = []

function drawObstacle() {
  obstacles.forEach(obstacle => {
    ctx.fillStyle = 'red'
    ctx.fillRect(obstacle.x, obstacle.y+=10, obstacle.width, obstacle.height)
  })
}

function startObstacle() {
  setInterval(() => {
    let obs = {
      x: Math.random() * canvas.width,
      y: -10,
      width: Math.random() * 300 + 50,
      height: 40,

    }
    obstacles.push(obs)
  }, 1000)
}
// function collicion () {
//   obstacles.forEach(startObstacle => {
//     if (obstacle.x < car.x + car.width &&
//       obstacle.x + obstacle.width > car.x &&
//       obstacle.y < car.y + car.height &&
//       obstacle.y + obstacle.height > car.y) {
//       //  ctx.clearRect(car.x, car.y, car.width, car.height)
//    }else if (obstacle.x < car2.x + car2.width &&
//     obstacle.x + obstacle.width > car2.x &&
//     obstacle.y < car2.y + car2.height &&
//     obstacle.y + obstacle.height > car2.y) {
//      // collision detected!
//  }
//   })
// }
// var obs = {obs.x: 5, obs: 5, obs.width: 50, obs.height: 50}
// var car = {x: 20, y: 10, width: 10, height: 10}
// var car2 = {x: 5, y: 5, width: 50, height: 50}


// function roadMovement() {

// // let loop = window.requestAnimationFrame(animate)
//   ctx.fillStyle = 'white'
//   ctx.fillRect(road.x, road.y, road.width, canvas.height)
//   //ctx.clearRect(road.x, 100, road.width, road.height++)
// // ctx.fillRect(road.x, road.y, road.width, road.height++)
// // ctx.clearRect(road.x, road.y, road.width, road.height)
// }


let snd = new Audio('soundEffects/car sound.wav')
let snd2 = new Audio('soundEffects/car sound.wav2.wav')
let snd3 = new Audio('soundEffects/DogCollission.wav')

function drawCar1() {
  
      obstacles.forEach(obstacle => {
        if (obstacle.x < car.x + car.width &&
          obstacle.x + obstacle.width > car.x &&
          obstacle.y < car.y + car.height &&
          obstacle.y + obstacle.height > car.y) {
            snd3.play()
            carAlive =false;
            socre = false
           }  else {
            ctx.drawImage(img, car.x, car.y, car.width, car.height); //draws the car depending on the coords in the obj above 
            snd.play()
           }
          })
        }
function drawCar2() {
      obstacles.forEach(obstacle => {
           if (obstacle.x < car2.x + car2.width &&
        obstacle.x + obstacle.width > car2.x &&
        obstacle.y < car2.y + car2.height &&
        obstacle.y + obstacle.height > car2.y) {
          snd3.play()
          car2Alive = false
          score = false
          }else{
            ctx.drawImage(img2, car2.x, car2.y, car2.width, car2.height); //draws the car2 depending on the coords in the obj above 
            snd.play()
          } 
      })
    }
    
 
let carAlive = true
let car2Alive = true

  



document.onkeydown = function (e) { //controls -- up down left and right ... 
  switch (e.keyCode) { //changes the car object 
    case 38:
      car.y -= 35;
      console.log('up');
      break;
    case 40:
      car.y += 35;
      console.log('down', );
      break;
    case 37:
      car.x -= 35;
      console.log('left', );
      break;
    case 39:
      car.x += 35;
      console.log('right');
      break;
    case 87:
      car2.y -= 35;
      console.log('W');
      break;
    case 83:
      car2.y += 35;
      console.log('S', );
      break;
    case 65:
      car2.x -= 35;
      console.log('A', );
      break;
    case 68:
      car2.x += 35;
      console.log('D');
      break;
  }

}
function limitBoard(){
  if(car.x < 110){
    car.x = 110
  } else if 
    (car.x > canvas.width - 110 -car.width){
    car.x = canvas.width - 110 - car.width
  }
  
   if(car2.x < 110){
    car2.x = 110
  }else if 
    (car2.x > canvas.width - 110 - car2.width){
    car2.x = canvas.width - 110 - car2.width
  }
}



function animate() {
  let loop = window.requestAnimationFrame(animate) //continues the loop

  ctx.clearRect(0, 0, canvas.width, canvas.height) //clears the whole canvas, the car, the board everything in the canvas
  drawBoard() //redraws the board over and over and over again
  drawLine()
  if(carAlive){
    drawCar1()
  }
  if(car2Alive) {
    drawCar2()
   } 
  //  if(carAlive = false && car2Alive = false) {
  //    window.cancelAnimationFrame(loop)
  //    }//redraws the car over and over and over again
  //roadMovement()
  drawObstacle()
  limitBoard()
  // collicion()
}