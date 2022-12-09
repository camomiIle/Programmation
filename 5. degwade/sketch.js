let degwade;

function setup() {
  createCanvas(windowWidth, windowHeight) ;
  degwade = circularGradiant (width, height, 156, 50, 100, 20, 50, 200);
}

function draw() {
    background(255);
    image (degwade, 0, 0, width, height);//degwade est considéré comme une image car createGraphics (meme taille que le canevas)
}

function linearGradiant (w, h, r1, g1, b1, r2, g2, b2){
  //crée un espace de dessin pas affiché à l'écran. on doit donc DEMANDER à la fct drtaw de l'afficher
                            //pas besoin de mettre WINDOWwitdh et WINDOWheight, car cette fct s'adapte déjà au canvas qui EST en WINDOWwidth
  let graphic = createGraphics (w, h);
  for(let compteur = 0; compteur < h; compteur ++){ //
      let red = map (compteur, 0, h, r1, r2);
      let green = map (compteur, 0, h, g1, g2);
      let blue = map (compteur, 0, h, b1, b2);
      graphic.stroke (red, green, blue);
      graphic.line (0,compteur, w,compteur);
    }
    return graphic;
}

function circularGradiant (w, h, r1, g1, b1, r2, g2, b2){
  //crée un espace de dessin pas affiché à l'écran. on doit donc DEMANDER à la fct drtaw de l'afficher
                            //pas besoin de mettre WINDOWwitdh et WINDOWheight, car cette fct s'adapte déjà au canvas qui EST en WINDOWwidth
  let graphic = createGraphics (w, h); //copier-coller la dernière fonction, la renomme et changer les dessins (=ellipse, line etc.) en fct de ce qu'on veut.
  h = h * 2;
  graphic.rectMode(CENTER)
  graphic.translate (graphic.width/2, graphic.height/2);
  for(let compteur = 0; compteur < h; compteur ++){ //on a changé la gueule de loup de "compteur < h"
      let red = map (compteur, 0, h, r1, r2);
      let green = map (compteur, 0, h, g1, g2);
      let blue = map (compteur, 0, h, b1, b2);
      graphic.fill (red, green, blue);
      graphic.stroke(255, 100);
      graphic.rotate(0.1);
      graphic.rect (0,0, h-compteur, h-compteur);

    }
    return graphic;
}
