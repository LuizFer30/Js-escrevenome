function setup() {
    createCanvas( 400, 400);
    background("#673AB7")
  }
  
  function draw() { 
    stroke("red");
    fill("blue");
    
    
    if (mouseIsPressed) { 
      rect(mouseX, mouseY, 20, 35);
    }
  }