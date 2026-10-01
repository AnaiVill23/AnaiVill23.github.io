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
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
   //toggleGrid();

    // TODO 2 - Create Platform    
  createPlatform(40, 680, 160, 20, "lightpink");
  createPlatform(250, 590, 110, 20, "plum");
  createPlatform(410, 490, 100, 20, "palevioletred");
  createPlatform(570, 590, 90, 20, "lavender");
  createPlatform(720, 480, 100, 20, "peachpuff");
  createPlatform(880, 370, 90, 20, "hotpink");
  createPlatform(1030, 470, 100, 20, "thistle");
  createPlatform(1180, 350, 90, 20, "violet");;    


  // 
  createCollectable("diamond", 90, 640, 0, 0);
  createCollectable("grace", 285, 550, 0, 0);
  createCollectable("steve", 455, 450, 0, 0);
  createCollectable("kennedi", 760, 440, 0, 0);
  createCollectable("max", 920, 330, 0, 0);
  createCollectable("database", 1350, 210, 0, 0);


    
    // TODO # 4 - Create Cannons
  createCannon("left", 150, 900);
  createCannon("top", 750, 1100);
  createCannon("top", 1250, 850); 

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
