function setup() {
createCanvas(500,500);
background("darkgreen");

// Draw silver coin
fill("#808080");
stroke(87)
strokeWeight(10)
ellipse(width/2, height/2, 400, 400);
}

function mousePressed() {
  var randomValue = random();
  if(randomValue < 0.5){
    //heads
    fill("#808080");
    stroke(87)
    strokeWeight(10)
    ellipse(width/2, height/2, 400, 400);
    noStroke();
    fill("black");
    textFont('Times New Roman');
    textAlign(CENTER)
    textSize(80)
    text("Heads", 250, 275);
  }
  else{
    //tails
    fill("#808080");
    stroke(87)
    strokeWeight(10)
    ellipse(width/2, height/2, 400, 400);
    noStroke();
    fill("black");
    textFont('Times New Roman');
    textAlign(CENTER)
    textSize(80)
    text("Tails", 250, 275);
  }
}

function draw() {
//text
fill("#white");
noStroke()
textFont('Helvetica')
textAlign (LEFT)
textSize(19.5)
text("CLICK TO FLIP THE COIN, RELOAD TO PLAY AGAIN", 10, height-10);
}

