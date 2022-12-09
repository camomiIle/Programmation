function setup() {
  createCanvas (windowWidth, windowHeight); //   Canevas s'adapte à la taille de la fenêtre
  rectMode (CENTER); // point de départ des coordonnées est au centre au lieu coin en haut gauche
}

function draw() {
  background (0);
  translate(width/2, height/2); // déplace le coin supérieur gauche du canevas au milieu = le point 0;0 est au milieu  (translation vers le bas a droite)

  //orbites
fill (255);
ellipse (0, 0, 1160, 1160);
fill (0);
ellipse (0, 0, 1158, 1158); //Neptune

fill (255);
ellipse (0, 0, 1062, 1062);
fill (0);
ellipse (0, 0, 1060, 1060); //Uranus

fill(255);
ellipse (0, 0, 828, 828);
fill (0);
ellipse (0, 0, 826, 826); //Saturne

fill(255);
ellipse (0, 0, 573, 573);
fill(0);
ellipse (0, 0, 571, 571); //Jupiter

fill(255);
ellipse (0, 0, 360, 360);
fill (0);
ellipse (0, 0, 358, 358); //mars

fill(255);
ellipse (0, 0, 282, 282);
fill (0);
ellipse (0, 0, 280, 280);//Terre

fill(255);
ellipse (0, 0, 154, 154);
fill (0);
ellipse (0, 0, 152, 152); //vénus

fill(255);
ellipse (0, 0, 80, 80);
fill (0);
ellipse (0, 0, 78, 78);//Mercure

//étoiles
noStroke();
fill(255);
rect(random(windowWidth), random(windowHeight), 7, 7);
}

// Soleil
rotate(millis()/1500);
fill (175, 111, 31);
ellipse (0, 0, 50, 50);
noStroke();
fill (181, 138,33);
ellipse (0, 0, 40, 40);
fill (207, 157, 39);
ellipse (0, 0, 30, 30);
fill (239, 210, 47);
ellipse (0, 0, 20, 20);


//mercure
push ();
rotate(millis()/200);
translate (40, 0); // translate pour déplacer de nouveau coin sup gauche et remettre prochaine ellipse de planète en 0, 0
fill(107, 102, 102);
ellipse (0, 0, 10, 10);
pop ();

//vénus
push();
rotate(millis()/300);
translate (75, 0);
fill (96, 64, 17);
ellipse (0, 0, 25, 25);
pop();

//Terre
push ();
rotate (millis()/350);
translate (140, 0);
fill (12, 48, 86);
ellipse (0, 0, 27, 27);
pop ();


//mars
push();
rotate (millis()/400);
translate (180, 0);
fill (114, 53, 23);
ellipse (0, 0, 14, 14);
pop();

//Jupiter
push ();
rotate (millis()/1800);
fill (221, 107, 62);
translate (280, 0);
ellipse (0, 0, 100, 100);
  push ();
  rotate (millis()/1800);
  fill (221, 107, 62);
  translate (120, 0);
  ellipse (0, 0, 100, 100);
  pop();
pop();

//Saturne
push();
rotate (millis()/1900);
translate ( 410,0);
fill (217, 145, 67);
ellipse (0, 0, 90, 90);
pop ();

//Uranus
push();
rotate(millis()/2000)
translate (530, 0);
fill (143, 198, 210);
ellipse (0, 0, 38, 38);
pop();

//Neptune
push();
rotate(millis()/2050);
translate (580, 0);
fill(58, 95, 199);
ellipse(0, 0, 37, 37);
pop();
}
