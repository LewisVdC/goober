var red = 10;
var redfilter = 0;
var redpointer = 0;
var bigredfilter = 0;
var bigredpointer = 0;
var rednanometerwave = 0;

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
  //
  //
  //
  //
  //
  var nextCost1 = Math.floor(10 * Math.pow(1.1, redfilter));
  var nextCost2 = Math.floor(100 * Math.pow(1.1, redpointer));
  var nextCost3 = Math.floor(1000 * Math.pow(1.1, bigredfilter));
  document.getElementById("redfiltercost").innerHTML = nextCost1;
  document.getElementById("redfiltercount").innerHTML = redfilter;
  document.getElementById("redpointercost").innerHTML = nextCost2;
  document.getElementById("redpointercount").innerHTML = redpointer;
  document.getElementById("bigredfiltercount").innerHTML = bigredfilter;
  document.getElementById("bigredfiltercost").innerHTML = nextCost3;
}

// most important one bc yea oh nvm this is kinda useless
//var save = {
//  red: red,
//  redfilter: redfilter,
//};

document.getElementById("redcount").innerHTML = "red: " + Math.floor(red);

function calcred(number) {
  red = red + number / 10;
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

  var nextCost2 = Math.floor(10 * Math.pow(1.1, redfilter));
  document.getElementById("redfiltercost").innerHTML = nextCost2;
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

function buyredfilter() {
  document.getElementById("redcount").innerHTML = "red: " + Math.floor(red);
  var redfiltercost = Math.floor(10 * Math.pow(1.1, redfilter));
  if (red >= redfiltercost) {
    redfilter = redfilter + 1;
    red = red - redfiltercost;
    document.getElementById("redfiltercount").innerHTML = redfilter;
    document.getElementById("redcount").innerHTML = "red: " + Math.floor(red);
  }

  var nextCost = Math.floor(10 * Math.pow(1.1, redfilter));
  document.getElementById("redfiltercost").innerHTML = nextCost;
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

  var nextCost2 = Math.floor(10 * Math.pow(1.1, redfilter));
  document.getElementById("redfiltercost").innerHTML = nextCost2;
}

window.setInterval(function () {
  var save = {
    red: red,
    redfilter: redfilter,
    redpointer: redpointer,
    bigredfilter: bigredfilter,
    bigredpointer: bigredpointer,
    rednanometerwave: rednanometerwave,
  };
  localStorage.setItem("save", JSON.stringify(save));
  calcred(redfilter + redpointer * 10 + bigredfilter * 100);
}, 100);
