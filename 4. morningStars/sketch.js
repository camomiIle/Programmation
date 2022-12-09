function setup(){
  createCanvas (windowWidth, windowHeight);
}

function draw() {
  background (13, 5, 45);
  stroke(random(255), random(255), random(255));
  let counter = 0;
  while(counter < 1000){
  mouliStar(noise(1, counter)*width, noise(2, counter)*height, 50, 75); //commande qui sert à dire à la fct draw de dessiner la fct mouliStar. Si met pas ça, elle s'exécute pas
counter ++;
  }
}

function mouliStar(x, y, w, h) {
  push();
  translate (x, y); //change le centre e l'étoile
  if(frameCount%5==0) { //frameCount "modulo"(%) 5
    //si frameCount est divisible par 5 (veut dire que ça donne 0)
    line(-w/2, 0, w/2, 0); //line(x, y, x, y)
}else{
    line(0, -h/2, 0, h/2);
  }
  pop();
}
