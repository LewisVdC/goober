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
var debugrednumber = 0;
var debuggreennumber = 0;
var debugbluenumber = 0;

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
    if (typeof savegame.blue !== "undefined") blue = savegame.blue;
    if (typeof savegame.bluefilter !== "undefined")
      bluefilter = savegame.bluefilter;
    if (typeof savegame.bluepointer !== "undefined")
      bluepointer = savegame.bluepointer;
    if (typeof savegame.bigbluefilter !== "undefined")
      bigbluefilter = savegame.bigbluefilter;
    if (typeof savegame.bigbluepointer !== "undefined")
      bigbluepointer = savegame.bigbluepointer;
    if (typeof savegame.bluenanometerwave !== "undefined")
      bluenanometerwave = savegame.bluenanometerwave;
    if (typeof savegame.rblueupgrade1 !== "undefined")
      blueupgrade1 = savegame.blueupgrade1;
    //
    //
    //
    //
    //
    if (redupgrade1 === 1) {
      document.getElementById("redupgrade1cost").innerHTML = "bought";
      document.getElementById("redupgrade1").style.border = "outset";
    }
    document.getElementById("redcount").innerHTML = "red: " + Math.floor(red);
    document.getElementById("greencount").innerHTML =
      "green: " + Math.floor(green);
    document.getElementById("bluecount").innerHTML =
      "blue: " + Math.floor(blue);

    var nextredCost1 = Math.floor(10 * Math.pow(1.1, redfilter));
    var nextredCost2 = Math.floor(100 * Math.pow(1.1, redpointer));
    var nextredCost3 = Math.floor(1000 * Math.pow(1.1, bigredfilter));
    var nextredCost4 = Math.floor(10000 * Math.pow(1.1, bigredpointer));
    var nextredCost5 = Math.floor(100000 * Math.pow(1.1, rednanometerwave));
    document.getElementById("redfiltercost").innerHTML = nextredCost1;
    document.getElementById("redfiltercount").innerHTML = redfilter;
    document.getElementById("redpointercost").innerHTML = nextredCost2;
    document.getElementById("redpointercount").innerHTML = redpointer;
    document.getElementById("bigredfiltercount").innerHTML = bigredfilter;
    document.getElementById("bigredfiltercost").innerHTML = nextredCost3;
    document.getElementById("bigredpointercount").innerHTML = bigredpointer;
    document.getElementById("bigredpointercost").innerHTML = nextredCost4;
    document.getElementById("rednanometerwavecost").innerHTML = nextredCost5;
    document.getElementById("rednanometerwavecount").innerHTML =
      rednanometerwave;
    var nextgreenCost1 = Math.floor(10 * Math.pow(1.1, greenfilter));
    var nextgreenCost2 = Math.floor(100 * Math.pow(1.1, greenpointer));
    var nextgreenCost3 = Math.floor(1000 * Math.pow(1.1, biggreenfilter));
    var nextgreenCost4 = Math.floor(10000 * Math.pow(1.1, biggreenpointer));
    var nextgreenCost5 = Math.floor(100000 * Math.pow(1.1, greennanometerwave));

    document.getElementById("greenfiltercost").innerHTML = nextgreenCost1;
    document.getElementById("greenfiltercount").innerHTML = greenfilter;
    document.getElementById("greenpointercost").innerHTML = nextgreenCost2;
    document.getElementById("greenpointercount").innerHTML = greenpointer;
    document.getElementById("biggreenfiltercount").innerHTML = biggreenfilter;
    document.getElementById("biggreenfiltercost").innerHTML = nextgreenCost3;
    document.getElementById("biggreenpointercount").innerHTML = biggreenpointer;
    document.getElementById("biggreenpointercost").innerHTML = nextgreenCost4;
    document.getElementById("greennanometerwavecost").innerHTML =
      nextgreenCost5;
    document.getElementById("greennanometerwavecount").innerHTML =
      greennanometerwave;
    var nextblueCost1 = Math.floor(10 * Math.pow(1.1, bluefilter));
    var nextblueCost2 = Math.floor(100 * Math.pow(1.1, bluepointer));
    var nextblueCost3 = Math.floor(1000 * Math.pow(1.1, bigbluefilter));
    var nextblueCost4 = Math.floor(10000 * Math.pow(1.1, bigbluepointer));
    var nextblueCost5 = Math.floor(100000 * Math.pow(1.1, bluenanometerwave));

    document.getElementById("bluefiltercost").innerHTML = nextblueCost1;
    document.getElementById("bluefiltercount").innerHTML = bluefilter;
    document.getElementById("bluepointercost").innerHTML = nextblueCost2;
    document.getElementById("bluepointercount").innerHTML = bluepointer;
    document.getElementById("bigbluefiltercount").innerHTML = bigbluefilter;
    document.getElementById("bigbluefiltercost").innerHTML = nextblueCost3;
    document.getElementById("bigbluepointercount").innerHTML = bigbluepointer;
    document.getElementById("bigbluepointercost").innerHTML = nextblueCost4;
    document.getElementById("bluenanometerwavecost").innerHTML = nextblueCost5;
    document.getElementById("bluenanometerwavecount").innerHTML =
      bluenanometerwave;

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
    document.getElementById("top").style.color = "rgb(255,0,0)";
    document.getElementById("green").style.display = "none";
    document.getElementById("blue").style.display = "none";
  }
  if (x === "green") {
    document.getElementById("red").style.display = "none";
    document.getElementById("green").style.display = "block";
    document.getElementById("tabs").style.backgroundColor = "rgb(0,20,0)";
    document.getElementById("top").style.color = "rgb(0,255,0)";
    document.getElementById("blue").style.display = "none";
  }
  if (x === "blue") {
    document.getElementById("red").style.display = "none";
    document.getElementById("green").style.display = "none";
    document.getElementById("blue").style.display = "block";
    document.getElementById("tabs").style.backgroundColor = "rgb(0,0,20)";
    document.getElementById("top").style.color = "blue";
  }
}

function calcred(number) {
  debugrednumber = number;
  red = red + number / 100;
  document.getElementById("redcount").innerHTML = "red: " + Math.floor(red);
}
function calcgreen(number) {
  debuggreennumber = number;
  green = green + number / 100;
  document.getElementById("greencount").innerHTML =
    "green: " + Math.floor(green);
}
function calcblue(number) {
  debugbluenumber = number;
  blue = blue + number / 100;
  document.getElementById("bluecount").innerHTML = "blue: " + Math.floor(blue);
}

//
//
//
//

function buyredfilter() {
  document.getElementById("redcount").innerHTML = "red: " + Math.floor(red);
  var redfiltercost = Math.floor(10 * Math.pow(1.1, redfilter));
  if (red >= redfiltercost) {
    redfilter = redfilter + 1;
    red = red - redfiltercost;
    document.getElementById("redfiltercount").innerHTML = redfilter;
    document.getElementById("redcount").innerHTML = "red: " + Math.floor(red);
  }

  var nextredCost1 = Math.floor(10 * Math.pow(1.1, redfilter));
  document.getElementById("redfiltercost").innerHTML = nextredCost1;
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

  var nextredCost2 = Math.floor(100 * Math.pow(1.1, redpointer));
  document.getElementById("redpointercost").innerHTML = nextredCost2;
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

  var nextredCost3 = Math.floor(1000 * Math.pow(1.1, bigredfilter));
  document.getElementById("bigredfiltercost").innerHTML = nextredCost3;
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

  var nextredCost4 = Math.floor(10000 * Math.pow(1.1, bigredpointer));
  document.getElementById("bigredpointercost").innerHTML = nextredCost4;
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

  var nextredCost5 = Math.floor(100000 * Math.pow(1.1, rednanometerwave));
  document.getElementById("rednanometerwavecost").innerHTML = nextredCost5;
}

function buygreenfilter() {
  document.getElementById("greencount").innerHTML =
    "green: " + Math.floor(green);
  var greenfiltercost = Math.floor(10 * Math.pow(1.1, greenfilter));
  if (green >= greenfiltercost) {
    greenfilter = greenfilter + 1;
    green = green - greenfiltercost;
    document.getElementById("greenfiltercount").innerHTML = greenfilter;
    document.getElementById("greencount").innerHTML =
      "green: " + Math.floor(green);
  }

  var nextgreenCost1 = Math.floor(10 * Math.pow(1.1, greenfilter));
  document.getElementById("greenfiltercost").innerHTML = nextgreenCost1;
}

function buygreenpointer() {
  document.getElementById("greencount").innerHTML =
    "green: " + Math.floor(green);
  var greenpointercost = Math.floor(100 * Math.pow(1.1, greenpointer));
  if (green >= greenpointercost) {
    greenpointer = greenpointer + 1;
    green = green - greenpointercost;
    document.getElementById("greenpointercount").innerHTML = greenpointer;
    document.getElementById("greencount").innerHTML =
      "green: " + Math.floor(green);
  }

  var nextgreenCost2 = Math.floor(100 * Math.pow(1.1, greenpointer));
  document.getElementById("greenpointercost").innerHTML = nextgreenCost2;
}

function buybiggreenfilter() {
  document.getElementById("greencount").innerHTML =
    "green: " + Math.floor(green);
  var biggreenfiltercost = Math.floor(1000 * Math.pow(1.1, biggreenfilter));
  if (green >= biggreenfiltercost) {
    biggreenfilter = biggreenfilter + 1;
    green = green - biggreenfiltercost;
    document.getElementById("biggreenfiltercount").innerHTML = biggreenfilter;
    document.getElementById("greencount").innerHTML =
      "green: " + Math.floor(green);
  }

  var nextgreenCost3 = Math.floor(1000 * Math.pow(1.1, biggreenfilter));
  document.getElementById("biggreenfiltercost").innerHTML = nextgreenCost3;
}

function buybiggreenpointer() {
  document.getElementById("greencount").innerHTML =
    "green: " + Math.floor(green);
  var biggreenpointercost = Math.floor(10000 * Math.pow(1.1, biggreenpointer));
  if (green >= biggreenpointercost) {
    biggreenpointer = biggreenpointer + 1;
    green = green - biggreenpointercost;
    document.getElementById("biggreenpointercount").innerHTML = biggreenpointer;
    document.getElementById("greencount").innerHTML =
      "green: " + Math.floor(green);
  }

  var nextgreenCost4 = Math.floor(10000 * Math.pow(1.1, biggreenpointer));
  document.getElementById("biggreenpointercost").innerHTML = nextgreenCost4;
}

function buygreennanometerwave() {
  document.getElementById("greencount").innerHTML =
    "green: " + Math.floor(green);
  var greennanometerwavecost = Math.floor(
    100000 * Math.pow(1.1, greennanometerwave)
  );
  if (green >= greennanometerwavecost) {
    greennanometerwave = greennanometerwave + 1;
    green = green - greennanometerwavecost;
    document.getElementById("greennanometerwavecount").innerHTML =
      greennanometerwave;
    document.getElementById("greencount").innerHTML =
      "green: " + Math.floor(green);
  }

  var nextgreenCost5 = Math.floor(100000 * Math.pow(1.1, greennanometerwave));
  document.getElementById("greennanometerwavecost").innerHTML = nextgreenCost5;
}

function buybluefilter() {
  document.getElementById("bluecount").innerHTML = "blue: " + Math.floor(blue);
  var bluefiltercost = Math.floor(10 * Math.pow(1.1, bluefilter));
  if (blue >= bluefiltercost) {
    bluefilter = bluefilter + 1;
    blue = blue - bluefiltercost;
    document.getElementById("bluefiltercount").innerHTML = bluefilter;
    document.getElementById("bluecount").innerHTML =
      "blue: " + Math.floor(blue);
  }

  var nextblueCost1 = Math.floor(10 * Math.pow(1.1, bluefilter));
  document.getElementById("bluefiltercost").innerHTML = nextblueCost1;
}

function buybluepointer() {
  document.getElementById("bluecount").innerHTML = "blue: " + Math.floor(blue);
  var bluepointercost = Math.floor(100 * Math.pow(1.1, bluepointer));
  if (blue >= bluepointercost) {
    bluepointer = bluepointer + 1;
    blue = blue - bluepointercost;
    document.getElementById("bluepointercount").innerHTML = bluepointer;
    document.getElementById("bluecount").innerHTML =
      "blue: " + Math.floor(blue);
  }

  var nextblueCost2 = Math.floor(100 * Math.pow(1.1, bluepointer));
  document.getElementById("bluepointercost").innerHTML = nextblueCost2;
}

function buybigbluefilter() {
  document.getElementById("bluecount").innerHTML = "blue: " + Math.floor(blue);
  var bigbluefiltercost = Math.floor(1000 * Math.pow(1.1, bigbluefilter));
  if (blue >= bigbluefiltercost) {
    bigbluefilter = bigbluefilter + 1;
    blue = blue - bigbluefiltercost;
    document.getElementById("bigbluefiltercount").innerHTML = bigbluefilter;
    document.getElementById("bluecount").innerHTML =
      "blue: " + Math.floor(blue);
  }

  var nextblueCost3 = Math.floor(1000 * Math.pow(1.1, bigbluefilter));
  document.getElementById("bigbluefiltercost").innerHTML = nextblueCost3;
}

function buybigbluepointer() {
  document.getElementById("bluecount").innerHTML = "blue: " + Math.floor(blue);
  var bigbluepointercost = Math.floor(10000 * Math.pow(1.1, bigbluepointer));
  if (blue >= bigbluepointercost) {
    bigbluepointer = bigbluepointer + 1;
    blue = blue - bigbluepointercost;
    document.getElementById("bigbluepointercount").innerHTML = bigbluepointer;
    document.getElementById("bluecount").innerHTML =
      "blue: " + Math.floor(blue);
  }

  var nextblueCost4 = Math.floor(10000 * Math.pow(1.1, bigbluepointer));
  document.getElementById("bigbluepointercost").innerHTML = nextblueCost4;
}

function buybluenanometerwave() {
  document.getElementById("bluecount").innerHTML = "blue: " + Math.floor(blue);
  var bluenanometerwavecost = Math.floor(
    100000 * Math.pow(1.1, bluenanometerwave)
  );
  if (blue >= bluenanometerwavecost) {
    bluenanometerwave = bluenanometerwave + 1;
    blue = blue - bluenanometerwavecost;
    document.getElementById("bluenanometerwavecount").innerHTML =
      bluenanometerwave;
    document.getElementById("bluecount").innerHTML =
      "blue: " + Math.floor(blue);
  }

  var nextblueCost5 = Math.floor(100000 * Math.pow(1.1, bluenanometerwave));
  document.getElementById("bluenanometerwavecost").innerHTML = nextblueCost5;
}

//
//
//
//

function redupgrade1() {
  document.getElementById("redcount").innerHTML = "red: " + Math.floor(red);
  if (red >= 150000 && redupgrade1 === 0) {
    redupgrade1 = 1;
    red = red - 150000;
    document.getElementById("redupgrade1cost").innerHTML = "bought";
    document.getElementById("redupgrade1").style.border = "outset";
  }
}

function greenupgrade1() {
  document.getElementById("greencount").innerHTML =
    "green: " + Math.floor(green);
  if (green >= 150000 && greenupgrade1 === 0) {
    greenupgrade1 = 1;
    green = green - 150000;
    document.getElementById("greenupgrade1cost").innerHTML = "bought";
    document.getElementById("greenupgrade1").style.border = "outset";
  }
}

function blueupgrade1() {
  document.getElementById("bluecount").innerHTML = "blue: " + Math.floor(blue);
  if (blue >= 150000 && redupgrade1 === 0) {
    blueupgrade1 = 1;
    blue = blue - 150000;
    document.getElementById("blueupgrade1cost").innerHTML = "bought";
    document.getElementById("blueupgrade1").style.border = "outset";
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
    //increase green
    calcgreen(
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

    //increase blue
    calcblue(
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
