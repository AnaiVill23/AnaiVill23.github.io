$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "mistyrose"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    //TODO 1 - Enable the Grid
   //toggleGrid();

    // TODO 2 - Create Platform    
  
  createPlatform(40, 680, 160, 20, "lightpink");
  createPlatform(250, 590, 110, 20, "plum");
  createPlatform(410, 490, 100, 20, "palevioletred");
  createPlatform(570, 590, 100, 20, "plum");
  createPlatform(720, 480, 100, 20, "peachpuff");
  createPlatform(880, 370, 90, 20, "hotpink", 870, 970, 2, 0);
  createPlatform(1030, 470, 100, 20, "thistle", );
  createPlatform(1180, 350, 90, 20, "red", 1120, 1250, 2, 0);
  createPlatform(1310, 250, 85, 20, "green");
  createPlatform(650, 300, 85, 20, "blue");
  createPlatform(500, 300, 85, 20, "brown", 300, 300, 0, 300, 400, 1)
  createPlatform(350, 200, 85, 20, "pink", 150, 200, 0, 100, 200, 1)
 

// TODO 3 - Create Collectable
createCollectable("diamond", 90, 640, 0, 0);
  createCollectable("grace", 285, 550, 0, 0);
  createCollectable("steve", 455, 450, 0, 0);
  createCollectable("kennedi", 760, 440, 0, 0);
  createCollectable("max", 920, 330, 0, 0);
  createCollectable("database", 1350, 210, 0, 0);
  createCollectable("diamond",150, 100, )
    // TODO # 4 - Create Cannon 
  createCannon("right", 400, 2500, 20, 20, 200, 500, 3);  
    createCannon("top", 400, 2000, 20, 20, 200, 400, 3);
   createCannon("left", 650, 10);
}
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  } 
   registerSetup(setup);

});
