let cor;
let posicaoHoriontal; // x
let posicaoVertical; // y

function setup() {

  createCanvas(400, 400);
  background(color(100, 0, 0));
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  posicaoHoriontal = 200;
  posicaoVertical = 200;
}

function draw() {
  
  fill(cor)
  circle(posicaoHoriontal,posicaoVertical,50);
  
  if (mouseX < posicaoHoriontal) {
     posicaoHoriontal = posicaoHoriontal - 1;
    }

  if(mouseX > posicaoHoriontal) {
    posicaoHoriontal = posicaoHoriontal + 1;
    }
  
  if (mouseY < posicaoVertical) {
    posicaoVertical--;
  }
  
   if (mouseY > posicaoVertical) {
    posicaoVertical++;
  }
  
  if(mouseIsPressed) {
      cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
    }
    
    
}