var red = 10;
var redfilter = 0;
var redpointer = 0;
var bigredfilter = 0;
var bigredpointer = 0;
var rednanometerwave = 0;
var redupgrade1 = 0;
var green = 10;
var greenfilter = 0;
var greenpointer = 0;
var biggreenfilter = 0;
var biggreenpointer = 0;
var greennanometerwave = 0;
var greenupgrade1 = 0;
var blue = 10;
var bluefilter = 0;
var bluepointer = 0;
var bigbluefilter = 0;
var bigbluepointer = 0;
var bluenanometerwave = 0;
var blueupgrade1 = 0;
var debugnumber = 0;
var loaded = 0;

document.getElementById("redcount").innerHTML = "red: " + red;

function load() {
  var savegame = JSON.parse(localStorage.getItem("save"));
  if (savegame != null) {
    //red
    if (typeof savegame.red !== "undefined") red = savegame.red;
    if (typeof savegame.redfilter !== "undefined")
      redfilter = savegame.redfilter;
    if (typeof savegame.redpointer !== "undefined")
      redpointer = savegame.redpointer;
    if (typeof savegame.bigredfilter !== "undefined")
      bigredfilter = savegame.bigredfilter;
    if (typeof savegame.bigredpointer !== "undefined")
      bigredpointer = savegame.bigredpointer;
    if (typeof savegame.rednanometerwave !== "undefined")
      rednanometerwave = savegame.rednanometerwave;
    if (typeof savegame.redupgrade1 !== "undefined")
      redupgrade1 = savegame.redupgrade1;

    //green
    if (typeof savegame.green !== "undefined") green = savegame.green;
    if (typeof savegame.greenfilter !== "undefined")
      greenfilter = savegame.greenfilter;
    if (typeof savegame.greenpointer !== "undefined")
      greenpointer = savegame.greenpointer;
    if (typeof savegame.biggreenfilter !== "undefined")
      biggreenfilter = savegame.biggreenfilter;
    if (typeof savegame.biggreenpointer !== "undefined")
      biggreenpointer = savegame.biggreenpointer;
    if (typeof savegame.greennanometerwave !== "undefined")
      greennanometerwave = savegame.greennanometerwave;
    if (typeof savegame.greenupgrade1 !== "undefined")
      greenupgrade1 = savegame.greenupgrade1;

    //blue
    if (typeof savegame.red !== "undefined") red = savegame.red;
    if (typeof savegame.redfilter !== "undefined")
      redfilter = savegame.redfilter;
    if (typeof savegame.redpointer !== "undefined")
      redpointer = savegame.redpointer;
    if (typeof savegame.bigredfilter !== "undefined")
      bigredfilter = savegame.bigredfilter;
    if (typeof savegame.bigredpointer !== "undefined")
      bigredpointer = savegame.bigredpointer;
    if (typeof savegame.rednanometerwave !== "undefined")
      rednanometerwave = savegame.rednanometerwave;
    if (typeof savegame.redupgrade1 !== "undefined")
      redupgrade1 = savegame.redupgrade1;
    //
    //
    //
    //
    //
    if (redupgrade1 === 1) {
      document.getElementById("redupgrade1cost").innerHTML = "bought";
      document.getElementById("redupgrade1").style.border = "outset";
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
    document.getElementById("rednanometerwavecount").innerHTML =
      rednanometerwave;
    console.log("loaded");
    loaded = 1;
  } else {
    console.log("no saved game");
    loaded = 1;
  }
}

// most important one bc yea oh nvm this is kinda useless
//var save = {
//  red: red,
//  redfilter: redfilter,
//};

document.getElementById("redcount").innerHTML = "red: " + Math.floor(red);
document.getElementById("greencount").innerHTML = "green: " + Math.floor(green);
document.getElementById("bluecount").innerHTML = "blue: " + Math.floor(blue);

function showtab(x) {
  if (x === "red") {
    document.getElementById("red").style.display = "block";
    document.getElementById("tabs").style.backgroundColor = "rgb(20,0,0)";
    document.getElementById("green").style.display = "none";
    document.getElementById("blue").style.display = "none";
  }
  if (x === "green") {
    document.getElementById("red").style.display = "none";
    document.getElementById("green").style.display = "block";
    document.getElementById("tabs").style.backgroundColor = "rgb(0,20,0)";
    document.getElementById("blue").style.display = "none";
  }
  if (x === "blue") {
    document.getElementById("red").style.display = "none";
    document.getElementById("green").style.display = "none";
    document.getElementById("blue").style.display = "block";
    document.getElementById("tabs").style.backgroundColor = "rgb(0,0,20)";
  }
}

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

  var nextCost2 = Math.floor(100 * Math.pow(1.1, redpointer));
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
  if (red >= 150000 && redupgrade1 === 0) {
    redupgrade1 = 1;
    red = red - 150000;
    document.getElementById("redupgrade1cost").innerHTML = "bought";
    document.getElementById("redupgrade1").style.border = "outset";
  }
}

window.setInterval(function () {
  //ugh
  if (loaded === 1) {
    //unlocks
    if (red >= 50000) {
      document.getElementById("redupgrades").style.display = "flex";
      document.getElementById("redupgradesbox").style.display = "flex";
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
      redupgrade1: redupgrade1,
      green: green,
      greenfilter: greenfilter,
      greenpointer: greenpointer,
      biggreenfilter: biggreenfilter,
      biggreenpointer: biggreenpointer,
      greennanometerwave: greennanometerwave,
      greenupgrade1: greenupgrade1,
      blue: blue,
      bluefilter: redfilter,
      bluepointer: bluepointer,
      bigbluefilter: bigbluefilter,
      bigbluepointer: bigbluepointer,
      bluenanometerwave: bluenanometerwave,
      blueupgrade1: blueupgrade1,
    };
    localStorage.setItem("save", JSON.stringify(save));

    //increase red
    calcred(
      //filter
      (redfilter * (redfilter * redupgrade1 + 1) +
        //pointer
        redpointer * 10 +
        //bigredfilter
        bigredfilter * 100 +
        //bigredpointer
        bigredpointer * 1000) *
        //rednanometerwave
        (rednanometerwave * 0.5 + 1)
    );
  }
}, 10);
