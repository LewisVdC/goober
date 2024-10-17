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
var redupgrade2 = 0;
var greenupgrade2 = 0;
var blueupgrade2 = 0;
var redupgrade3 = 0;
var greenupgrade3 = 0;
var blueupgrade3 = 0;

var loaded = 0;

var arrOfPtags = document.getElementsByTagName("p");
var arrOfSpanTags = document.getElementsByTagName("span");
var taskColorGoalHEX = "#ff0000";
var taskColorGoalRed = 255;
var taskColorGoalGreen = 0;
var taskColorGoalBlue = 0;
let hexResult = '#'
const hex = {
  '0': '0',
  '1': '1',
  '2': '2',
  '3': '3',
  '4': '4',
  '5': '5',
  '6': '6',
  '7': '6',
  '8': '8',
  '9': '9', 
  '10': 'A', 
  '11': 'B', 
  '12': 'C', 
  '13': 'D', 
  '14': 'E',
  '15': 'F'
}

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
    if (typeof savegame.redupgrade2 !== "undefined")
      redupgrade2 = savegame.redupgrade2;
    if (typeof savegame.redupgrade3 !== "undefined")
      redupgrade3 = savegame.redupgrade3;

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
    if (typeof savegame.greenupgrade2 !== "undefined")
      greenupgrade2 = savegame.greenupgrade2;
    if (typeof savegame.greenupgrade3 !== "undefined")
      greenupgrade3 = savegame.greenupgrade3;

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
    if (typeof savegame.blueupgrade1 !== "undefined")
      blueupgrade1 = savegame.blueupgrade1;
    if (typeof savegame.blueupgrade2 !== "undefined")
      blueupgrade2 = savegame.blueupgrade2;
    if (typeof savegame.blueupgrade3 !== "undefined")
      blueupgrade3 = savegame.blueupgrade3;
    //
    //
    //
    //
    //
    if (redupgrade1 === 1) {
      document.getElementById("redupgrade1cost").innerHTML = "bought";
      //document.getElementById("redupgrade1").style.border = "outset";
    }
    if (redupgrade2 === 1) {
      document.getElementById("redupgrade2cost").innerHTML = "bought";
      //document.getElementById("redupgrade2").style.border = "outset";
    }
    if (redupgrade3 === 1) {
      document.getElementById("redupgrade3cost").innerHTML = "bought";
      //document.getElementById("redupgrade3").style.border = "outset";
    }
    if (greenupgrade1 === 1) {
      document.getElementById("greenupgrade1cost").innerHTML = "bought";
      //document.getElementById("greenupgrade1").style.border = "outset";
    }
    if (greenupgrade2 === 1) {
      document.getElementById("greenupgrade2cost").innerHTML = "bought";
      //document.getElementById("greenupgrade2").style.border = "outset";
    }
    if (greenupgrade3 === 1) {
      document.getElementById("greenupgrade3cost").innerHTML = "bought";
      //document.getElementById("greenupgrade3").style.border = "outset";
    }
    if (blueupgrade1 === 1) {
      document.getElementById("blueupgrade1cost").innerHTML = "bought";
      //document.getElementById("blueupgrade1").style.border = "outset";
    }
    if (blueupgrade2 === 1) {
      document.getElementById("blueupgrade2cost").innerHTML = "bought";
      //document.getElementById("blueupgrade2").style.border = "outset";
    }
    if (blueupgrade3 === 1) {
      document.getElementById("blueupgrade3cost").innerHTML = "bought";
      //document.getElementById("blueupgrade3").style.border = "outset";
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
    document.getElementById("tasks").style.color = "rgb(155,20,20)";
    document.getElementById("tasks").style.borderColor = "rgb(155,20,20)";
    document.getElementById("body").style.textShadow = "0px 0px 10px red";
    document.getElementById("submitTaskButton").style.backgroundColor = "rgb(155,20,20)";
  }
  if (x === "green") {
    document.getElementById("red").style.display = "none";
    document.getElementById("green").style.display = "block";
    document.getElementById("tabs").style.backgroundColor = "rgb(0,20,0)";
    document.getElementById("top").style.color = "rgb(0,255,0)";
    document.getElementById("blue").style.display = "none";
    document.getElementById("tasks").style.color = "green";
    document.getElementById("tasks").style.borderColor = "green";
    document.getElementById("body").style.textShadow = "0px 0px 10px green";
    document.getElementById("submitTaskButton").style.backgroundColor = "green";
  }
  if (x === "blue") {
    document.getElementById("red").style.display = "none";
    document.getElementById("green").style.display = "none";
    document.getElementById("blue").style.display = "block";
    document.getElementById("tabs").style.backgroundColor = "rgb(0,0,20)";
    document.getElementById("top").style.color = "blue";
    document.getElementById("tasks").style.color = "blue";
    document.getElementById("tasks").style.borderColor = "blue";
    document.getElementById("body").style.textShadow = "0px 0px 10px blue";
    document.getElementById("submitTaskButton").style.backgroundColor = "blue";
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

function buyredupgrade1() {
  document.getElementById("redcount").innerHTML = "red: " + Math.floor(red);
  if (red >= 150000 && redupgrade1 === 0) {
    redupgrade1 = 1;
    red = red - 150000;
    document.getElementById("redupgrade1cost").innerHTML = "bought";
    //document.getElementById("redupgrade1").style.border = "outset";
  }
}

function buyredupgrade2() {
  document.getElementById("redcount").innerHTML = "red: " + Math.floor(red);
  if (red >= 250000 && redupgrade2 === 0) {
    redupgrade2 = 1;
    red = red - 250000;
    document.getElementById("redupgrade2cost").innerHTML = "bought";
    //document.getElementById("redupgrade2").style.border = "outset";
  }
}

function buyredupgrade3() {
  document.getElementById("redcount").innerHTML = "red: " + Math.floor(red);
  if (red >= 500000 && redupgrade3 === 0) {
    redupgrade3 = 1;
    red = red - 500000;
    document.getElementById("redupgrade3cost").innerHTML = "bought";
    //document.getElementById("redupgrade3").style.border = "outset";
  }
}

function buygreenupgrade1() {
  document.getElementById("greencount").innerHTML =
    "green: " + Math.floor(green);
  if (green >= 150000 && greenupgrade1 === 0) {
    greenupgrade1 = 1;
    green = green - 150000;
    document.getElementById("greenupgrade1cost").innerHTML = "bought";
    //document.getElementById("greenupgrade1").style.border = "outset";
  }
}

function buygreenupgrade2() {
  document.getElementById("greencount").innerHTML =
    "green: " + Math.floor(green);
  if (green >= 250000 && greenupgrade2 === 0) {
    greenupgrade2 = 1;
    green = green - 250000;
    document.getElementById("greenupgrade2cost").innerHTML = "bought";
    //document.getElementById("greenupgrade2").style.border = "outset";
  }
}

function buygreenupgrade3() {
  document.getElementById("greencount").innerHTML =
    "green: " + Math.floor(green);
  if (green >= 500000 && greenupgrade3 === 0) {
    greenupgrade3 = 1;
    green = green - 500000;
    document.getElementById("greenupgrade3cost").innerHTML = "bought";
    //document.getElementById("greenupgrade3").style.border = "outset";
  }
}

function buyblueupgrade1() {
  document.getElementById("bluecount").innerHTML = "blue: " + Math.floor(blue);
  if (blue >= 150000 && blueupgrade1 === 0) {
    blueupgrade1 = 1;
    blue = blue - 150000;
    document.getElementById("blueupgrade1cost").innerHTML = "bought";
    //document.getElementById("blueupgrade1").style.border = "outset";
  }
}

function buyblueupgrade2() {
  document.getElementById("bluecount").innerHTML = "blue: " + Math.floor(blue);
  if (blue >= 250000 && blueupgrade2 === 0) {
    blueupgrade2 = 1;
    blue = blue - 250000;
    document.getElementById("blueupgrade2cost").innerHTML = "bought";
    //document.getElementById("blueupgrade2").style.border = "outset";
  }
}

function buyblueupgrade3() {
  document.getElementById("bluecount").innerHTML = "blue: " + Math.floor(blue);
  if (blue >= 250000 && blueupgrade3 === 0) {
    blueupgrade3 = 1;
    blue = blue - 250000;
    document.getElementById("blueupgrade3cost").innerHTML = "bought";
    document.getElementById("blueupgrade3").style.border = "outset";
  }
}

window.setInterval(function () {
  //wuuuuuuuuuuuuuuugh
  document.getElementById("taskAmountRed").innerHTML = Math.round(red);
  document.getElementById("taskAmountBlue").innerHTML = Math.round(blue);
  document.getElementById("taskAmountGreen").innerHTML = Math.round(green);
  //ugh
  if (loaded === 1) {
    //unlocks
    if (red >= 50000) {
      document.getElementById("redupgrades").style.display = "flex";
      document.getElementById("redupgradesbox").style.display = "grid";
      document.getElementById("redupgrade1").style.display = "block";
    }
    if (red >= 100000) {
      document.getElementById("redupgrades").style.display = "flex";
      document.getElementById("redupgradesbox").style.display = "grid";
      document.getElementById("redupgrade2").style.display = "block";
      document.getElementById("redupgrade3").style.display = "inline-block";
    }
    if (green >= 50000) {
      document.getElementById("greenupgrades").style.display = "flex";
      document.getElementById("greenupgradesbox").style.display = "grid";
      document.getElementById("greenupgrade1").style.display = "block";
    }
    if (green >= 100000) {
      document.getElementById("greenupgrades").style.display = "flex";
      document.getElementById("greenupgradesbox").style.display = "grid";
      document.getElementById("greenupgrade2").style.display = "block";
      document.getElementById("greenupgrade3").style.display = "block";
    }
    if (blue >= 50000) {
      document.getElementById("blueupgrades").style.display = "flex";
      document.getElementById("blueupgradesbox").style.display = "grid";
      document.getElementById("blueupgrade1").style.display = "block";
    }
    if (blue >= 100000) {
      document.getElementById("blueupgrades").style.display = "flex";
      document.getElementById("blueupgradesbox").style.display = "grid";
      document.getElementById("blueupgrade2").style.display = "block";
      document.getElementById("blueupgrade3").style.display = "block";
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
      redupgrade2: redupgrade2,
      redupgrade3: redupgrade3,
      green: green,
      greenfilter: greenfilter,
      greenpointer: greenpointer,
      biggreenfilter: biggreenfilter,
      biggreenpointer: biggreenpointer,
      greennanometerwave: greennanometerwave,
      greenupgrade1: greenupgrade1,
      greenupgrade2: greenupgrade2,
      greenupgrade3: greenupgrade3,
      blue: blue,
      bluefilter: bluefilter,
      bluepointer: bluepointer,
      bigbluefilter: bigbluefilter,
      bigbluepointer: bigbluepointer,
      bluenanometerwave: bluenanometerwave,
      blueupgrade1: blueupgrade1,
      blueupgrade2: blueupgrade2,
      blueupgrade3: blueupgrade3,
    };
    localStorage.setItem("save", JSON.stringify(save));

    //increase red
    calcred(
      //filter
      ((((redfilter * (redfilter * redupgrade1 + 1) +
        //pointer
        redpointer * 10 * (redpointer * redupgrade3 + 1) +
        //bigredfilter
        bigredfilter * 100 +
        //bigredpointer
        bigredpointer * 1000) *
        //rednanometerwave
        (rednanometerwave * 0.5 + 1) *
        //weaksynergygreen
        (Math.log(green + 1) * greenupgrade2 + 1)) /
        (10 * greenupgrade2 + 1)) *
        //weaksynergyblue
        (Math.log(blue + 1) * blueupgrade2 + 1)) /
        (10 * blueupgrade2 + 1)
    );

    //increase green
    calcgreen(
      //filter
      ((((greenfilter * (greenfilter * greenupgrade1 + 1) +
        //pointer
        greenpointer * 10 * (greenpointer * blueupgrade3 + 1) +
        //bigfilter
        biggreenfilter * 100 +
        //bigpointer
        biggreenpointer * 1000) *
        //nanometerwave
        (greennanometerwave * 0.5 + 1) *
        //weaksynergyred
        (Math.log(red + 1) * redupgrade2 + 1)) /
        (10 * redupgrade2 + 1)) *
        //weaksynergyblue
        (Math.log(blue + 1) * blueupgrade2 + 1)) /
        (10 * blueupgrade2 + 1)
    );
    //weaksynergyblue
    Math.log(blue) * blueupgrade2 + 1;

    //increase blue
    calcblue(
      //filter
      ((((bluefilter * (bluefilter * blueupgrade1 + 1) +
        //pointer
        bluepointer * 10 * (bluepointer * blueupgrade3 + 1) +
        //bigfilter
        bigbluefilter * 100 +
        //bigpointer
        bigbluepointer * 1000) *
        //nanometerwave
        (bluenanometerwave * 0.5 + 1) *
        //weaksynergyred
        (Math.log(red + 1) * redupgrade2 + 1)) /
        (10 * redupgrade2 + 1)) *
        //weaksynergygreen
        (Math.log(red + 1) * redupgrade2 + 1)) /
        (10 * greenupgrade2 + 1)
    );
  }
}, 10);

function rgbToHex(rgb){
  let rgbColor = rgb.split(', ')
  let values = Object.values(hex)
  hexResult = "#"
  rgbColor.forEach(element => {
      if (values.includes(element)){
          hexResult += element + element
      } else {
          let number = Number(element)/16;
          let firstDig = String(number).slice(0,2).replace('.', '');
          let secondDig = String(((number - Number(firstDig))*16));
          hexResult += hex[firstDig]
          hexResult += hex[secondDig]
      }
  });
}

function submitTask(){
  if(red >= taskColorGoalRed && green >= taskColorGoalGreen && blue >= taskColorGoalBlue){
    red -= taskColorGoalRed;
    green -= taskColorGoalGreen;
    blue -= taskColorGoalBlue;
    taskColorGoalRed = Math.floor(Math.random() * 256);
    taskColorGoalGreen = Math.floor(Math.random() * 256);
    taskColorGoalBlue = Math.floor(Math.random() * 256);
    document.getElementById("taskGoalAmountRed").innerHTML = taskColorGoalRed;
    document.getElementById("taskGoalAmountGreen").innerHTML = taskColorGoalGreen;
    document.getElementById("taskGoalAmountBlue").innerHTML = taskColorGoalBlue;
    rgbToHex(taskColorGoalRed+", "+taskColorGoalGreen+", "+taskColorGoalBlue)
    document.getElementById("taskColor").innerHTML = hexResult;
    document.getElementById("taskColor").style.color = "rgb("+String(taskColorGoalRed)+", "+ String(taskColorGoalGreen)+", "+String(taskColorGoalBlue)+")";
    document.getElementById("taskColor").style.textShadow = "0px 0px 10px "+"rgb("+String(taskColorGoalRed)+", "+ String(taskColorGoalGreen)+", "+String(taskColorGoalBlue)+")";
  }
}

function resetData(){
  loaded = 35;
  localStorage.removeItem("save");
  location.reload();
}