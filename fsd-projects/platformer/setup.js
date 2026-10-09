// setup variables
const walkAcceleration = 2.5; // how much is added to the speed each frame
const gravity = 0.5; // how much is subtracted from speedY each frame
const friction = 1.5; // how much the player is slowed each frame
const maxSpeed = 8; // maximum horizontal speed, not vertical
const playerJumpStrength = 12; // this is subtracted from the speedY each jump
const projectileSpeed = 8; // the speed of projectiles
let shouldDrawGrid = false; 
let gridMade = false;

/////////////////////////////////////////////////
//////////ONLY CHANGE ABOVE THIS POINT///////////
/////////////////////////////////////////////////

// Base game variables
const frameRate = 60;
const playerScale = 0.8; //makes the player just a bit smaller. Doesn't affect the hitbox, just the image

// Player variables
const player = {
  x: 50,
  y: 100,
  speedX: 0,
  speedY: 0,
  width: undefined,
  height: undefined,
  onGround: false,
  facingRight: true,
  deadAndDeathAnimationDone: false,
  winConditionMet: false,
};

let hitDx;
let hitDy;
let hitBoxWidth = 50 * playerScale;
let hitBoxHeight = 105 * playerScale;
let firstTimeSetup = true;

const keyPress = {
  any: false,
  up: false,
  left: false,
  down: false,
  right: false,
  space: false,
};

// Player animation variables
const animationTypes = {
  duck: "duck",
  flyingJump: "flying-jump",
  frontDeath: "front-death",
  frontIdle: "front-idle",
  jump: "jump",
  lazer: "lazer",
  run: "run",
  stop: "stop",
  walk: "walk",
};
let currentAnimationType = animationTypes.run;
let frameIndex = 0;
let jumpTimer = 0;
let duckTimer = 0;
let DUCK_COUNTER_IDLE_VALUE = 14;
let debugVar = false;

let spriteHeight = 0;
let spriteWidth = 0;
let spriteX = 0;
let spriteY = 0;
let offsetX = 0;
let offsetY = 0;

// Platform, cannon, projectile, and collectable variables
let platforms = [];
let fakePlatforms = [];
let badPlatforms = [];
let cannons = [];
const cannonWidth = 118;
const cannonHeight = 80;
let projectiles = [];
const defaultProjectileWidth = 24;
const defaultProjectileHeight = defaultProjectileWidth;
const collectableWidth = 40;
const collectableHeight = 40;
let collectables = [];

// canvas and context variables; must be initialized later
let canvas;
let ctx;

// setup function variable
let setup;

let halleImage;
let animationDetails = {};

var collectableList = {
  database: { image: "https://storage.needpix.com/rsynced_images/star-304661_1280.png" },
  diamond: { image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7481a148-0e7f-4c86-973e-2db73276a0c6/d79z6yb-0adc3fd2-b6da-461c-88f0-4497278714d2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi83NDgxYTE0OC0wZTdmLTRjODYtOTczZS0yZGI3MzI3NmEwYzYvZDc5ejZ5Yi0wYWRjM2ZkMi1iNmRhLTQ2MWMtODhmMC00NDk3Mjc4NzE0ZDIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.XXYwMKJMXQfRWEMCF_WJAkv6pDEX9Azu_dx6qJkUV6c" },

  grace: { image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7481a148-0e7f-4c86-973e-2db73276a0c6/d79z6n9-79235ee7-8d11-4853-92e2-c11b3b34c258.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi83NDgxYTE0OC0wZTdmLTRjODYtOTczZS0yZGI3MzI3NmEwYzYvZDc5ejZuOS03OTIzNWVlNy04ZDExLTQ4NTMtOTJlMi1jMTFiM2IzNGMyNTgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.WGT8TJaNcUk4d0-D0En2SBUtncKyooLp4mFR-K_ywYU" },
  kennedi: { image: "https://assets.streamlinehq.com/image/private/w_512,h_512,ar_1/f_auto/v1/icons/3/ringed-planet-4mcc8kz3kioz7sg8c0zp1e.png/ringed-planet-qj2a4fdtfjlp7myb7miopb.png?_a=DATAiZAAZAA0" },
  max: { image: "https://freepngimg.com/thumb/universe/29224-9-jupiter-transparent.png" },
  steve: { image: "https://static.vecteezy.com/system/resources/previews/056/768/308/non_2x/blue-planet-earth-with-land-and-oceans-on-transparent-background-png.png" },
};
