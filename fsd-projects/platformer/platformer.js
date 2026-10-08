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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
   //toggleGrid();

    // TODO 2 - Create Platform    
  createPlatform(30, 680, 180, 20, "MistyRose");
createPlatform(270, 560, 100, 20, "AliceBlue");
createPlatform(120, 430, 90, 20, "orange");
createPlatform(350, 300, 130, 20, "PaleTurquoise");
createPlatform(560, 430, 100, 20, "palevioletred");
createPlatform(730, 250, 90, 20, "lightpink");
createPlatform(900, 360, 120, 20, "Honeydew");
createPlatform(1050, 560, 100, 20, "peachpuff");
createPlatform(1180, 400, 90, 20, "violet");
createPlatform(1300, 220, 90, 20, "hotpink");
createPlatform(1080, 180, 80, 20, "lavender");


  // 
  createCollectable("diamond", 90, 640, 0, 0);
createCollectable("grace", 315, 520, 0, 0);
createCollectable("steve", 165, 390, 0, 0);
createCollectable("kennedi", 410, 260, 0, 0);
createCollectable("max", 605, 390, 0, 0);
createCollectable("database", 1340, 180, 0, 0);



    
    // TODO # 4 - Create Cannon 
  createCannon("left", 300, 1800);
createCannon("top", 750, 2300);
createCannon("right", 1050, 1500);



}
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  } 
   registerSetup(setup);

});
