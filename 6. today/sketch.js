let myFav;

function preload(){ //pour que ça charge en mm temps que le site charge (car setup charge après chgt){
  myFav = loadImage("zenyatta.jpeg");
}

function setup (){
  createCanvas (windowWidth, windowHeight);
}

function draw (){
  background (255, 0, 0);
  image(myFav, , 0, 400, 600 ); //(nom de l'image par la variable + coordonnées comme rect)
}
