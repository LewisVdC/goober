var red = 10;
var redfilter = 0;
var redpointer = 0;
var bigredfilter = 0;
var bigredpointer = 0;
var rednanometerwave = 0;
var upgrade1 = 0;
var debugnumber = 0;

document.getElementById("redcount").innerHTML = "red: " + red;

function load() {
  var savegame = JSON.parse(localStorage.getItem("save"));
  if (typeof savegame.red !== "undefined") red = savegame.red;
  if (typeof savegame.redfilter !== "undefined") redfilter = savegame.redfilter;
  if (typeof savegame.redpointer !== "undefined")
    redpointer = savegame.redpointer;
  if (typeof savegame.bigredfilter !== "undefined")
    bigredfilter = savegame.bigredfilter;
  if (typeof savegame.bigredpointer !== "undefined")
    bigredpointer = savegame.bigredpointer;
  if (typeof savegame.rednanometerwave !== "undefined")
    rednanometerwave = savegame.rednanometerwave;
  if (typeof savegame.upgrade1 !== "undefined") upgrade1 = savegame.upgrade1;
  //
  //
  //
  //
  //
  if (upgrade1 === 1) {
    document.getElementById("upgrade1cost").innerHTML = "bought";
  }
  var nextCost1 = Math.floor(10 * Math.pow(1.1, redfilter));
  var nextCost2 = Math.floor(100 * Math.pow(1.1, redpointer));
  var nextCost3 = Math.floor(1000 * Math.pow(1.1, bigredfilter));
  var nextCost4 = Math.floor(10000 * Math.pow(1.1, bigredpointer));
  var nextCost5 = Math.floor(100000 * Math.pow(1.1, rednanometerwave));
  document.getElementById("redfiltercost").innerHTML = nextCost1;
  document.getElementById("redfiltercount").innerHTML = redfilter;
  document.getElementById("redpointercost").innerHTML = nextCost2;
  document.getElementById("redpointercount").innerHTML = redpointer;
  document.getElementById("bigredfiltercount").innerHTML = bigredfilter;
  document.getElementById("bigredfiltercost").innerHTML = nextCost3;
  document.getElementById("bigredpointercount").innerHTML = bigredpointer;
  document.getElementById("bigredpointercost").innerHTML = nextCost4;
  document.getElementById("rednanometerwavecost").innerHTML = nextCost5;
  document.getElementById("rednanometerwavecount").innerHTML = rednanometerwave;
  console.log(loaded)
}

// most important one bc yea oh nvm this is kinda useless
//var save = {
//  red: red,
//  redfilter: redfilter,
//};

document.getElementById("redcount").innerHTML = "red: " + Math.floor(red);

function calcred(number) {
  debugnumber = number;
  red = red + number / 100;
  document.getElementById("redcount").innerHTML = "red: " + Math.floor(red);
}

function buyredfilter() {
  document.getElementById("redcount").innerHTML = "red: " + Math.floor(red);
  var redfiltercost = Math.floor(10 * Math.pow(1.1, redfilter));
  if (red >= redfiltercost) {
    redfilter = redfilter + 1;
    red = red - redfiltercost;
    document.getElementById("redfiltercount").innerHTML = redfilter;
    document.getElementById("redcount").innerHTML = "red: " + Math.floor(red);
  }

  var nextCost1 = Math.floor(10 * Math.pow(1.1, redfilter));
  document.getElementById("redfiltercost").innerHTML = nextCost1;
}

function buyredpointer() {
  document.getElementById("redcount").innerHTML = "red: " + Math.floor(red);
  var redpointercost = Math.floor(100 * Math.pow(1.1, redpointer));
  if (red >= redpointercost) {
    redpointer = redpointer + 1;
    red = red - redpointercost;
    document.getElementById("redpointercount").innerHTML = redpointer;
    document.getElementById("redcount").innerHTML = "red: " + Math.floor(red);
  }

  var nextCost2 = Math.floor(100 * Math.pow(1.1, redfilter));
  document.getElementById("redpointercost").innerHTML = nextCost2;
}

function buybigredfilter() {
  document.getElementById("redcount").innerHTML = "red: " + Math.floor(red);
  var bigredfiltercost = Math.floor(1000 * Math.pow(1.1, bigredfilter));
  if (red >= bigredfiltercost) {
    bigredfilter = bigredfilter + 1;
    red = red - bigredfiltercost;
    document.getElementById("bigredfiltercount").innerHTML = bigredfilter;
    document.getElementById("redcount").innerHTML = "red: " + Math.floor(red);
  }

  var nextCost3 = Math.floor(1000 * Math.pow(1.1, bigredfilter));
  document.getElementById("bigredfiltercost").innerHTML = nextCost3;
}

function buybigredpointer() {
  document.getElementById("redcount").innerHTML = "red: " + Math.floor(red);
  var bigredpointercost = Math.floor(10000 * Math.pow(1.1, bigredpointer));
  if (red >= bigredpointercost) {
    bigredpointer = bigredpointer + 1;
    red = red - bigredpointercost;
    document.getElementById("bigredpointercount").innerHTML = bigredpointer;
    document.getElementById("redcount").innerHTML = "red: " + Math.floor(red);
  }

  var nextCost4 = Math.floor(10000 * Math.pow(1.1, bigredpointer));
  document.getElementById("bigredpointercost").innerHTML = nextCost4;
}

function buyrednanometerwave() {
  document.getElementById("redcount").innerHTML = "red: " + Math.floor(red);
  var rednanometerwavecost = Math.floor(
    100000 * Math.pow(1.1, rednanometerwave)
  );
  if (red >= rednanometerwavecost) {
    rednanometerwave = rednanometerwave + 1;
    red = red - rednanometerwavecost;
    document.getElementById("rednanometerwavecount").innerHTML =
      rednanometerwave;
    document.getElementById("redcount").innerHTML = "red: " + Math.floor(red);
  }

  var nextCost5 = Math.floor(100000 * Math.pow(1.1, rednanometerwave));
  document.getElementById("rednanometerwavecost").innerHTML = nextCost5;
}

function redupgrade1() {
  document.getElementById("redcount").innerHTML = "red: " + Math.floor(red);
  if (red >= 150000 && upgrade1 === 0) {
    upgrade1 = 1;
    red = red - 150000;
    document.getElementById("upgrade1cost").innerHTML = "bought";
  }
}

window.setInterval(function () {
  //unlocks
  if (red >= 50) {
    var upgradesred = 1;
  }

  //and then make the unlocks work if they need extra code

  //save
  var save = {
    red: red,
    redfilter: redfilter,
    redpointer: redpointer,
    bigredfilter: bigredfilter,
    bigredpointer: bigredpointer,
    rednanometerwave: rednanometerwave,
    upgrade1: upgrade1,
  };
  localStorage.setItem("save", JSON.stringify(save));

  //increase red
  calcred(
    //filter
    (redfilter * (redfilter * upgrade1 + 1) +
      //pointer
      redpointer * 10 +
      //bigredfilter
      bigredfilter * 100 +
      //bigredpointer
      bigredpointer * 1000) *
      //rednanometerwave
      (rednanometerwave * 0.5 + 1)
  );
}, 10);
