// ):

var red = 10;
var redfilter = 0;
var redpointer = 0;
var bigredfilter = 0;
var bigredpointer = 0;
var rednanometerwave = 0;
var redupgrade1 = 0;
var green = 0;
var greenfilter = 0;
var greenpointer = 0;
var biggreenfilter = 0;
var biggreenpointer = 0;
var greennanometerwave = 0;
var greenupgrade1 = 0;
var blue = 0;
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
var yellow = 0;
var governmentfundingcount = 0;
var governmentfundingprice = 2;
var redfiltercost = 10;
var redpointercost = 100;
var bigredfiltercost = 1000;
var bigredpointercost = 10000;
var rednanometerwavecost = 100000;
var greenfiltercost = 10;
var greenpointercost = 100;
var biggreenfiltercost = 1000;
var biggreenpointercost = 10000;
var greennanometerwavecost = 100000;
var bluefiltercost = 10;
var bluepointercost = 100;
var bigbluefiltercost = 1000;
var bigbluepointercost = 10000;
var bluenanometerwavecost = 100000;
var largerprismsprice = 10;
var largerprismscount = 0;
var colorharmonyprice = 4;
var colorharmonycount = 0;
var streamlinedtasksprice = 5;
var streamlinedtaskscount = 0;
var yellowsynergyprice = 12;
var yellowsynergycount = 0;
var redoverflowprice = 100;
var redoverflowcount = 0;
var greenoverflowprice = 100;
var greenoverflowcount = 0;
var blueoverflowprice = 100;
var blueoverflowcount = 0;
var tricolorboostprice = 500;
var tricolorboostcount = 0;
var taskmasteryprice = 20;
var taskmasterycount = 0;
var goldenmultiplierprice = 35;
var goldenmultipliercount = 0;
var colorsyphonprice = 120;
var colorsyphoncount = 0;
var focussedpointersprice = 30;
var focussedpointerscount = 0;
var finerfiltersprice = 30;
var finerfilterscount = 0;
var micrometerwaveprice = 60;
var micrometerwavecount = 0;
var strongersynergyprice = 100;
var strongersynergycount = 0;

var loaded = 0;
var tab = "red";

var arrOfPtags = document.getElementsByTagName("p");
var arrOfSpanTags = document.getElementsByTagName("span");
var taskColorGoalHEX = "#ffff00";
var taskColorGoalRed = 255;
var taskColorGoalGreen = 0;
var taskColorGoalBlue = 0;
let hexResult = "#";
var tasksCompleted = 0;
var taskRewardCount = 10;
var taskRewardColor = "green";
var taskBooster = 1;
const hex = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "6",
  8: "8",
  9: "9",
  10: "A",
  11: "B",
  12: "C",
  13: "D",
  14: "E",
  15: "F",
};

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
    if (typeof savegame.redfiltercost !== "undefined")
      redfiltercost = savegame.redfiltercost;
    if (typeof savegame.redpointercost !== "undefined")
      redpointercost = savegame.redpointercost;
    if (typeof savegame.bigredfiltercost !== "undefined")
      bigredfiltercost = savegame.bigredfiltercost;
    if (typeof savegame.bigredpointercost !== "undefined")
      bigredpointercost = savegame.bigredpointercost;
    if (typeof savegame.rednanometerwavecost !== "undefined")
      rednanometerwavecost = savegame.rednanometerwavecost;

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
    if (typeof savegame.greenfiltercost !== "undefined")
      greenfiltercost = savegame.greenfiltercost;
    if (typeof savegame.greenpointercost !== "undefined")
      greenpointercost = savegame.greenpointercost;
    if (typeof savegame.biggreenfiltercost !== "undefined")
      biggreenfiltercost = savegame.biggreenfiltercost;
    if (typeof savegame.biggreenpointercost !== "undefined")
      biggreenpointercost = savegame.biggreenpointercost;
    if (typeof savegame.greennanometerwavecost !== "undefined")
      greennanometerwavecost = savegame.greennanometerwavecost;

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
    if (typeof savegame.bluefiltercost !== "undefined")
      bluefiltercost = savegame.bluefiltercost;
    if (typeof savegame.bluepointercost !== "undefined")
      bluepointercost = savegame.bluepointercost;
    if (typeof savegame.bigbluefiltercost !== "undefined")
      bigbluefiltercost = savegame.bigbluefiltercost;
    if (typeof savegame.bigbluepointercost !== "undefined")
      bigbluepointercost = savegame.bigbluepointercost;
    if (typeof savegame.bluenanometerwavecost !== "undefined")
      bluenanometerwavecost = savegame.bluenanometerwavecost;
    //yellow
    if (typeof savegame.yellow !== "undefined") yellow = savegame.yellow;
    if (typeof savegame.governmentfundingcount !== "undefined")
      governmentfundingcount = savegame.governmentfundingcount;
    if (typeof savegame.governmentfundingprice !== "undefined")
      governmentfundingprice = savegame.governmentfundingprice;
    document.getElementById("governmentfundingprice").innerHTML =
      governmentfundingprice;
    if (typeof savegame.largerprismscount !== "undefined")
      largerprismscount = savegame.largerprismscount;
    if (typeof savegame.largerprismsprice !== "undefined")
      largerprismsprice = savegame.largerprismsprice;
    document.getElementById("largerprismsprice").innerHTML = largerprismsprice;
    if (typeof savegame.colorharmonycount !== "undefined")
      colorharmonycount = savegame.colorharmonycount;
    if (typeof savegame.colorharmonyprice !== "undefined")
      colorharmonyprice = savegame.colorharmonyprice;
    document.getElementById("colorharmonyprice").innerHTML = colorharmonyprice;
    if (typeof savegame.streamlinedtaskscount !== "undefined")
      streamlinedtaskscount = savegame.streamlinedtaskscount;
    if (typeof savegame.streamlinedtasksprice !== "undefined")
      streamlinedtasksprice = savegame.streamlinedtasksprice;
    document.getElementById("streamlinedtasksprice").innerHTML =
      streamlinedtasksprice;
    if (typeof savegame.yellowsynergycount !== "undefined")
      yellowsynergycount = savegame.yellowsynergycount;
    if (typeof savegame.yellowsynergyprice !== "undefined")
      yellowsynergyprice = savegame.yellowsynergyprice;
    document.getElementById("yellowsynergyprice").innerHTML =
      yellowsynergyprice;
    if (typeof savegame.redoverflowcount !== "undefined")
      redoverflowcount = savegame.redoverflowcount;
    if (typeof savegame.redoverflowprice !== "undefined")
      redoverflowprice = savegame.redoverflowprice;
    document.getElementById("redoverflowprice").innerHTML = redoverflowprice;
    if (typeof savegame.greenoverflowcount !== "undefined")
      greenoverflowcount = savegame.greenoverflowcount;
    if (typeof savegame.greenoverflowprice !== "undefined")
      greenoverflowprice = savegame.greenoverflowprice;
    document.getElementById("greenoverflowprice").innerHTML =
      greenoverflowprice;
    if (typeof savegame.blueoverflowcount !== "undefined")
      blueoverflowcount = savegame.blueoverflowcount;
    if (typeof savegame.blueoverflowprice !== "undefined")
      blueoverflowprice = savegame.blueoverflowprice;
    document.getElementById("blueoverflowprice").innerHTML = blueoverflowprice;
    if (typeof savegame.tricolorboostcount !== "undefined")
      tricolorboostcount = savegame.tricolorboostcount;
    if (typeof savegame.tricolorboostprice !== "undefined")
      tricolorboostprice = savegame.tricolorboostprice;
    document.getElementById("tricolorboostprice").innerHTML =
      tricolorboostprice;
    if (typeof savegame.taskmasterycount !== "undefined")
      taskmasterycount = savegame.taskmasterycount;
    if (typeof savegame.taskmasteryprice !== "undefined")
      taskmasteryprice = savegame.taskmasteryprice;
    document.getElementById("taskmasteryprice").innerHTML = taskmasteryprice;
    if (typeof savegame.goldenmultipliercount !== "undefined")
      goldenmultipliercount = savegame.goldenmultipliercount;
    if (typeof savegame.goldenmultiplierprice !== "undefined")
      goldenmultiplierprice = savegame.goldenmultiplierprice;
    document.getElementById("goldenmultiplierprice").innerHTML =
      goldenmultiplierprice;
    if (typeof savegame.colorsyphoncount !== "undefined")
      colorsyphoncount = savegame.colorsyphoncount;
    if (typeof savegame.colorsyphonprice !== "undefined")
      colorsyphonprice = savegame.colorsyphonprice;
    document.getElementById("colorsyphonprice").innerHTML = colorsyphonprice;
    if (typeof savegame.focussedpointerscount !== "undefined")
      focussedpointerscount = savegame.focussedpointerscount;
    if (typeof savegame.focussedpointersprice !== "undefined")
      focussedpointersprice = savegame.focussedpointersprice;
    document.getElementById("focussedpointersprice").innerHTML =
      focussedpointersprice;
    if (typeof savegame.finerfilterscount !== "undefined")
      finerfilterscount = savegame.finerfilterscount;
    if (typeof savegame.finerfiltersprice !== "undefined")
      finerfiltersprice = savegame.finerfiltersprice;
    document.getElementById("finerfiltersprice").innerHTML = finerfiltersprice;
    if (typeof savegame.micrometerwavecount !== "undefined")
      micrometerwavecount = savegame.micrometerwavecount;
    if (typeof savegame.micrometerwaveprice !== "undefined")
      micrometerwaveprice = savegame.micrometerwaveprice;
    document.getElementById("micrometerwaveprice").innerHTML =
      micrometerwaveprice;
    if (typeof savegame.strongersynergycount !== "undefined")
      strongersynergycount = savegame.strongersynergycount;
    if (typeof savegame.strongersynergyprice !== "undefined")
      strongersynergyprice = savegame.strongersynergyprice;
    document.getElementById("strongersynergyprice").innerHTML =
      strongersynergyprice;
    //tasks
    if (typeof savegame.tasksCompleted !== "undefined")
      tasksCompleted = savegame.tasksCompleted;
    if (typeof savegame.colorGoal !== "undefined")
      document.getElementById("taskColor").innerHTML = savegame.colorGoal;
    if (typeof savegame.colorGoalColor !== "undefined")
      document.getElementById("taskColor").style.color = String(
        savegame.colorGoalColor
      );
    document.getElementById("taskColor").style.textShadow =
      "0 0 10px " + String(savegame.colorGoalColor);
    if (tasksCompleted > 0) {
      document.getElementById("tabgreen").style.display = "block";
    }
    if (tasksCompleted > 1) {
      document.getElementById("tabblue").style.display = "block";
    }
    if (tasksCompleted > 3) {
      document.getElementById("tabyellow").style.display = "block";
    }
    if (typeof savegame.taskColorGoalRed !== "undefined")
      taskColorGoalRed = savegame.taskColorGoalRed;
    document.getElementById("taskGoalAmountRed").innerHTML =
      Math.floor(taskColorGoalRed);
    if (typeof savegame.taskColorGoalGreen !== "undefined")
      taskColorGoalGreen = savegame.taskColorGoalGreen;
    document.getElementById("taskGoalAmountGreen").innerHTML =
      Math.floor(taskColorGoalGreen);
    if (typeof savegame.taskColorGoalBlue !== "undefined")
      taskColorGoalBlue = savegame.taskColorGoalBlue;
    document.getElementById("taskGoalAmountBlue").innerHTML =
      Math.floor(taskColorGoalBlue);
    if (typeof savegame.taskRewardColor !== "undefined")
      taskRewardColor = savegame.taskRewardColor;
    if (typeof savegame.taskRewardCount !== "undefined")
      taskRewardCount = savegame.taskRewardCount;
    document.getElementById("taskReward").innerHTML =
      String(Math.round(savegame.taskRewardCount)) + " " + savegame.taskRewardColor;
    if (typeof savegame.taskBooster !== "undefined")
      taskBooster = savegame.taskBooster;
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
    document.getElementById("yellowcount").innerHTML =
      "yellow: " + Math.floor(yellow);
    var nextredCost1 = Math.floor(
      (10 * Math.pow(1.1, redfilter)) / (1 + 0.1 * governmentfundingcount)
    );
    var nextredCost2 = Math.floor(
      (100 * Math.pow(1.1, redpointer)) / (1 + 0.1 * governmentfundingcount)
    );
    var nextredCost3 = Math.floor(
      (1000 * Math.pow(1.1, bigredfilter)) / (1 + 0.1 * governmentfundingcount)
    );
    var nextredCost4 = Math.floor(
      (10000 * Math.pow(1.1, bigredpointer)) /
        (1 + 0.1 * governmentfundingcount)
    );
    var nextredCost5 = Math.floor(
      (100000 * Math.pow(1.1, rednanometerwave)) /
        (1 + 0.1 * governmentfundingcount)
    );
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
    var nextgreenCost1 = Math.floor(
      (10 * Math.pow(1.1, greenfilter)) / (1 + 0.1 * governmentfundingcount)
    );
    var nextgreenCost2 = Math.floor(
      (100 * Math.pow(1.1, greenpointer)) / (1 + 0.1 * governmentfundingcount)
    );
    var nextgreenCost3 = Math.floor(
      (1000 * Math.pow(1.1, biggreenfilter)) /
        (1 + 0.1 * governmentfundingcount)
    );
    var nextgreenCost4 = Math.floor(
      (10000 * Math.pow(1.1, biggreenpointer)) /
        (1 + 0.1 * governmentfundingcount)
    );
    var nextgreenCost5 = Math.floor(
      (100000 * Math.pow(1.1, greennanometerwave)) /
        (1 + 0.1 * governmentfundingcount)
    );

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
    var nextblueCost1 = Math.floor(
      (10 * Math.pow(1.1, bluefilter)) / (1 + 0.1 * governmentfundingcount)
    );
    var nextblueCost2 = Math.floor(
      (100 * Math.pow(1.1, bluepointer)) / (1 + 0.1 * governmentfundingcount)
    );
    var nextblueCost3 = Math.floor(
      (1000 * Math.pow(1.1, bigbluefilter)) / (1 + 0.1 * governmentfundingcount)
    );
    var nextblueCost4 = Math.floor(
      (10000 * Math.pow(1.1, bigbluepointer)) /
        (1 + 0.1 * governmentfundingcount)
    );
    var nextblueCost5 = Math.floor(
      (100000 * Math.pow(1.1, bluenanometerwave)) /
        (1 + 0.1 * governmentfundingcount)
    );

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
document.getElementById("yellowcount").innerHTML =
  "yellow: " + Math.floor(yellow);

function showtab(x) {
  if (x === "red") {
    tab = "red";
    document.getElementById("red").style.display = "block";
    document.getElementById("yellow").style.display = "none";
    document.getElementById("tabs").style.backgroundColor = "rgb(20,0,0)";
    document.getElementById("top").style.color = "rgb(255,0,0)";
    document.getElementById("green").style.display = "none";
    document.getElementById("blue").style.display = "none";
    document.getElementById("tasks").style.color = "rgb(155,20,20)";
    document.getElementById("tasks").style.borderColor = "rgb(155,20,20)";
    document.getElementById("reward").style.borderColor = "rgb(155,20,20)";
    document.getElementById("body").style.textShadow =
      "0px 0px 10px red, 0 0 10px rgb(125,0,0)";
    document.getElementById("submitTaskButton").style.backgroundColor =
      "rgb(155,20,20)";
  }
  if (x === "green") {
    tab = "green";
    document.getElementById("red").style.display = "none";
    document.getElementById("yellow").style.display = "none";
    document.getElementById("green").style.display = "block";
    document.getElementById("tabs").style.backgroundColor = "rgb(0,20,0)";
    document.getElementById("top").style.color = "rgb(0,255,0)";
    document.getElementById("blue").style.display = "none";
    document.getElementById("tasks").style.color = "green";
    document.getElementById("tasks").style.borderColor = "green";
    document.getElementById("reward").style.borderColor = "green";
    document.getElementById("body").style.textShadow =
      "0px 0px 10px green, 0 0 10px rgb(0,125,0)";
    document.getElementById("submitTaskButton").style.backgroundColor = "green";
  }
  if (x === "blue") {
    tab = "blue";
    document.getElementById("red").style.display = "none";
    document.getElementById("yellow").style.display = "none";
    document.getElementById("green").style.display = "none";
    document.getElementById("blue").style.display = "block";
    document.getElementById("tabs").style.backgroundColor = "rgb(0,0,20)";
    document.getElementById("top").style.color = "blue";
    document.getElementById("tasks").style.color = "blue";
    document.getElementById("tasks").style.borderColor = "blue";
    document.getElementById("reward").style.borderColor = "blue";
    document.getElementById("body").style.textShadow =
      "0px 0px 10px blue, 0 0 10px rgb(0,0,125)";
    document.getElementById("submitTaskButton").style.backgroundColor = "blue";
  }
  if (x === "yellow") {
    tab = "yellow";
    document.getElementById("yellow").style.display = "block";
    document.getElementById("red").style.display = "none";
    document.getElementById("tabs").style.backgroundColor = "rgb(20,20,0)";
    document.getElementById("top").style.color = "rgb(153, 128, 0)";
    document.getElementById("green").style.display = "none";
    document.getElementById("blue").style.display = "none";
    document.getElementById("tasks").style.color = "rgb(153, 128, 0)";
    document.getElementById("tasks").style.borderColor = "rgb(153, 128, 0)";
    document.getElementById("reward").style.borderColor = "rgb(153, 128, 0)";
    document.getElementById("body").style.textShadow =
      "0px 0px 10px rgb(148, 148, 0), 0 0 10px rgb(125,125,0)";
    document.getElementById("submitTaskButton").style.backgroundColor =
      "rgb(153, 128, 0)";
  }
}

function calcred(number) {
  debugrednumber = number / 2;
  red = red + number / 200;
  document.getElementById("redcount").innerHTML = "red: " + Math.floor(red);
}
function calcgreen(number) {
  debuggreennumber = number / 2;
  green = green + number / 200;
  document.getElementById("greencount").innerHTML =
    "green: " + Math.floor(green);
}
function calcblue(number) {
  debugbluenumber = number / 2;
  blue = blue + number / 200;
  document.getElementById("bluecount").innerHTML = "blue: " + Math.floor(blue);
}

//
//
//
//

function buyredfilter() {
  if (red >= redfiltercost) {
    redfilter++;
    red -= redfiltercost;
    redfiltercost = Math.floor(
      (10 * Math.pow(1.1, redfilter)) / (1 + 0.1 * governmentfundingcount)
    );
    document.getElementById("redcount").innerHTML = "red: " + Math.floor(red);
    document.getElementById("redfiltercount").innerHTML = redfilter;
    document.getElementById("redfiltercost").innerHTML = redfiltercost;
  }
}

function buyredpointer() {
  if (red >= redpointercost) {
    redpointer++;
    red -= redpointercost;
    redpointercost = Math.floor(
      (100 * Math.pow(1.1, redpointer)) / (1 + 0.1 * governmentfundingcount)
    );
    document.getElementById("redcount").innerHTML = "red: " + Math.floor(red);
    document.getElementById("redpointercount").innerHTML = redpointer;
    document.getElementById("redpointercost").innerHTML = redpointercost;
  }
}

function buybigredfilter() {
  if (red >= bigredfiltercost) {
    bigredfilter++;
    red -= bigredfiltercost;
    bigredfiltercost = Math.floor(
      (1000 * Math.pow(1.1, bigredfilter)) / (1 + 0.1 * governmentfundingcount)
    );
    document.getElementById("redcount").innerHTML = "red: " + Math.floor(red);
    document.getElementById("bigredfiltercount").innerHTML = bigredfilter;
    document.getElementById("bigredfiltercost").innerHTML = bigredfiltercost;
  }
}

function buybigredpointer() {
  if (red >= bigredpointercost) {
    bigredpointer++;
    red -= bigredpointercost;
    bigredpointercost = Math.floor(
      (10000 * Math.pow(1.1, bigredpointer)) /
        (1 + 0.1 * governmentfundingcount)
    );
    document.getElementById("redcount").innerHTML = "red: " + Math.floor(red);
    document.getElementById("bigredpointercount").innerHTML = bigredpointer;
    document.getElementById("bigredpointercost").innerHTML = bigredpointercost;
  }
}

function buyrednanometerwave() {
  if (red >= rednanometerwavecost) {
    rednanometerwave++;
    red -= rednanometerwavecost;
    rednanometerwavecost = Math.floor(
      (100000 * Math.pow(1.1, rednanometerwave)) /
        (1 + 0.1 * governmentfundingcount)
    );
    document.getElementById("redcount").innerHTML = "red: " + Math.floor(red);
    document.getElementById("rednanometerwavecount").innerHTML =
      rednanometerwave;
    document.getElementById("rednanometerwavecost").innerHTML =
      rednanometerwavecost;
  }
}

function buygreenfilter() {
  if (green >= greenfiltercost) {
    greenfilter++;
    green -= greenfiltercost;
    greenfiltercost = Math.floor(
      (10 * Math.pow(1.1, greenfilter)) / (1 + 0.1 * governmentfundingcount)
    );
    document.getElementById("greencount").innerHTML =
      "green: " + Math.floor(green);
    document.getElementById("greenfiltercount").innerHTML = greenfilter;
    document.getElementById("greenfiltercost").innerHTML = greenfiltercost;
  }
}

function buygreenpointer() {
  if (green >= greenpointercost) {
    greenpointer++;
    green -= greenpointercost;
    greenpointercost = Math.floor(
      (100 * Math.pow(1.1, greenpointer)) / (1 + 0.1 * governmentfundingcount)
    );
    document.getElementById("greencount").innerHTML =
      "green: " + Math.floor(green);
    document.getElementById("greenpointercount").innerHTML = greenpointer;
    document.getElementById("greenpointercost").innerHTML = greenpointercost;
  }
}

function buybiggreenfilter() {
  if (green >= biggreenfiltercost) {
    biggreenfilter++;
    green -= biggreenfiltercost;
    biggreenfiltercost = Math.floor(
      (1000 * Math.pow(1.1, biggreenfilter)) /
        (1 + 0.1 * governmentfundingcount)
    );
    document.getElementById("greencount").innerHTML =
      "green: " + Math.floor(green);
    document.getElementById("biggreenfiltercount").innerHTML = biggreenfilter;
    document.getElementById("biggreenfiltercost").innerHTML =
      biggreenfiltercost;
  }
}

function buybiggreenpointer() {
  if (green >= biggreenpointercost) {
    biggreenpointer++;
    green -= biggreenpointercost;
    biggreenpointercost = Math.floor(
      (10000 * Math.pow(1.1, biggreenpointer)) /
        (1 + 0.1 * governmentfundingcount)
    );
    document.getElementById("greencount").innerHTML =
      "green: " + Math.floor(green);
    document.getElementById("biggreenpointercount").innerHTML = biggreenpointer;
    document.getElementById("biggreenpointercost").innerHTML =
      biggreenpointercost;
  }
}

function buygreennanometerwave() {
  if (green >= greennanometerwavecost) {
    greennanometerwave++;
    green -= greennanometerwavecost;
    greennanometerwavecost = Math.floor(
      (100000 * Math.pow(1.1, greennanometerwave)) /
        (1 + 0.1 * governmentfundingcount)
    );
    document.getElementById("greencount").innerHTML =
      "green: " + Math.floor(green);
    document.getElementById("greennanometerwavecount").innerHTML =
      greennanometerwave;
    document.getElementById("greennanometerwavecost").innerHTML =
      greennanometerwavecost;
  }
}

function buybluefilter() {
  if (blue >= bluefiltercost) {
    bluefilter++;
    blue -= bluefiltercost;
    bluefiltercost = Math.floor(
      (10 * Math.pow(1.1, bluefilter)) / (1 + 0.1 * governmentfundingcount)
    );
    document.getElementById("bluecount").innerHTML =
      "blue: " + Math.floor(blue);
    document.getElementById("bluefiltercount").innerHTML = bluefilter;
    document.getElementById("bluefiltercost").innerHTML = bluefiltercost;
  }
}

function buybluepointer() {
  if (blue >= bluepointercost) {
    bluepointer++;
    blue -= bluepointercost;
    bluepointercost = Math.floor(
      (100 * Math.pow(1.1, bluepointer)) / (1 + 0.1 * governmentfundingcount)
    );
    document.getElementById("bluecount").innerHTML =
      "blue: " + Math.floor(blue);
    document.getElementById("bluepointercount").innerHTML = bluepointer;
    document.getElementById("bluepointercost").innerHTML = bluepointercost;
  }
}

function buybigbluefilter() {
  if (blue >= bigbluefiltercost) {
    bigbluefilter++;
    blue -= bigbluefiltercost;
    bigbluefiltercost = Math.floor(
      (1000 * Math.pow(1.1, bigbluefilter)) / (1 + 0.1 * governmentfundingcount)
    );
    document.getElementById("bluecount").innerHTML =
      "blue: " + Math.floor(blue);
    document.getElementById("bigbluefiltercount").innerHTML = bigbluefilter;
    document.getElementById("bigbluefiltercost").innerHTML = bigbluefiltercost;
  }
}

function buybigbluepointer() {
  if (blue >= bigbluepointercost) {
    bigbluepointer++;
    blue -= bigbluepointercost;
    bigbluepointercost = Math.floor(
      (10000 * Math.pow(1.1, bigbluepointer)) /
        (1 + 0.1 * governmentfundingcount)
    );
    document.getElementById("bluecount").innerHTML =
      "blue: " + Math.floor(blue);
    document.getElementById("bigbluepointercount").innerHTML = bigbluepointer;
    document.getElementById("bigbluepointercost").innerHTML =
      bigbluepointercost;
  }
}

function buybluenanometerwave() {
  if (blue >= bluenanometerwavecost) {
    bluenanometerwave++;
    blue -= bluenanometerwavecost;
    bluenanometerwavecost = Math.floor(
      (100000 * Math.pow(1.1, bluenanometerwave)) /
        (1 + 0.1 * governmentfundingcount)
    );
    document.getElementById("bluecount").innerHTML =
      "blue: " + Math.floor(blue);
    document.getElementById("bluenanometerwavecount").innerHTML =
      bluenanometerwave;
    document.getElementById("bluenanometerwavecost").innerHTML =
      bluenanometerwavecost;
  }
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
  document.getElementById("taskAmountRed").innerHTML = Math.floor(red);
  document.getElementById("taskAmountBlue").innerHTML = Math.floor(blue);
  document.getElementById("taskAmountGreen").innerHTML = Math.floor(green);
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
      tasksCompleted: tasksCompleted,
      colorGoal: document.getElementById("taskColor").innerHTML,
      colorGoalColor: document.getElementById("taskColor").style.color,
      taskColorGoalBlue: taskColorGoalBlue,
      taskColorGoalGreen: taskColorGoalGreen,
      taskColorGoalRed: taskColorGoalRed,
      taskRewardCount: taskRewardCount,
      taskRewardColor: taskRewardColor,
      taskBooster: taskBooster,
      yellow: yellow,
      governmentfundingcount: governmentfundingcount,
      governmentfundingprice: governmentfundingprice,
      redfiltercost: redfiltercost,
      redpointercost: redpointercost,
      bigredfiltercost: bigredfiltercost,
      bigredpointercost: bigredpointercost,
      rednanometerwavecost: rednanometerwavecost,
      greenfiltercost: greenfiltercost,
      greenpointercost: greenpointercost,
      biggreenfiltercost: biggreenfiltercost,
      biggreenpointercost: biggreenpointercost,
      greennanometerwavecost: greennanometerwavecost,
      bluefiltercost: bluefiltercost,
      bluepointercost: bluepointercost,
      bigbluefiltercost: bigbluefiltercost,
      bigbluepointercost: bigbluepointercost,
      bluenanometerwavecost: bluenanometerwavecost,
      largerprismscount: largerprismscount,
      largerprismsprice: largerprismsprice,
      colorharmonycount: colorharmonycount,
      colorharmonyprice: colorharmonyprice,
      streamlinedtaskscount: streamlinedtaskscount,
      streamlinedtasksprice: streamlinedtasksprice,
      yellowsynergycount: yellowsynergycount,
      yellowsynergyprice: yellowsynergyprice,
      redoverflowcount: redoverflowcount,
      redoverflowprice: redoverflowprice,
      greenoverflowcount: greenoverflowcount,
      greenoverflowprice: greenoverflowprice,
      blueoverflowcount: blueoverflowcount,
      blueoverflowprice: blueoverflowprice,
      tricolorboostcount: tricolorboostcount,
      tricolorboostprice: tricolorboostprice,
      taskmasterycount: taskmasterycount,
      taskmasteryprice: taskmasteryprice,
      goldenmultipliercount: goldenmultipliercount,
      goldenmultiplierprice: goldenmultiplierprice,
      colorsyphoncount: colorsyphoncount,
      colorsyphonprice: colorsyphonprice,
      focussedpointerscount: focussedpointerscount,
      focussedpointersprice: focussedpointersprice,
      finerfilterscount: finerfilterscount,
      finerfiltersprice: finerfiltersprice,
      micrometerwavecount: micrometerwavecount,
      micrometerwaveprice: micrometerwaveprice,
      strongersynergycount: strongersynergycount,
      strongersynergyprice: strongersynergyprice,
    };
    localStorage.setItem("save", JSON.stringify(save));

    //increase red
    calcred(
      //filter
      (((((redfilter * (redfilter * redupgrade1 + 1) * (1 +  finerfilterscount * 3) +
        //pointer
        redpointer * 10 * (redpointer * redupgrade3 + 1) * (1 +  focussedpointerscount * 3) +
        //bigredfilter
        bigredfilter * 100 * (1 +  finerfilterscount * 3) +
        //bigredpointer
        bigredpointer * 1000 * (1 +  focussedpointerscount * 3)) *
        //rednanometerwave
        (rednanometerwave * 0.5 + 1) * (1 + micrometerwavecount * 2) *
        //weaksynergygreen
        (Math.log(green + 1) * greenupgrade2 + 1)) /
        (10 * greenupgrade2 + 1)) *
        //weaksynergyblue
        (Math.log(blue + 1) * blueupgrade2 + 1)) /
        (10 * blueupgrade2 + 1)) *
        //stronger synergy
        (1 + strongersynergycount * 10) *
        //task booster
        taskBooster *
        //yellow larger prisms
        Math.pow(2, largerprismscount) *
        //yellow color harmony
        (1 + (yellow / 10) * colorharmonycount) * 
        //tri-color boost
        (1 + tricolorboostcount * 0.5 * (yellow/1000))
    );

    //increase green
    calcgreen(
      //filter
      (((((greenfilter * (greenfilter * greenupgrade1 + 1) * (1 +  finerfilterscount * 3) +
        //pointer
        greenpointer * 10 * (greenpointer * blueupgrade3 + 1) * (1 +  focussedpointerscount * 3) +
        //bigfilter
        biggreenfilter * 100 * (1 +  finerfilterscount * 3) +
        //bigpointer
        biggreenpointer * 1000 * (1 +  focussedpointerscount * 3)) *
        //nanometerwave
        (greennanometerwave * 0.5 + 1) * (1 + micrometerwavecount * 2) *
        //weaksynergyred
        (Math.log(red + 1) * redupgrade2 + 1)) /
        (10 * redupgrade2 + 1)) *
        //weaksynergyblue
        (Math.log(blue + 1) * blueupgrade2 + 1)) /
        (10 * blueupgrade2 + 1)) *
        //stronger synergy
        (1 + strongersynergycount * 10) *
        //task booster
        taskBooster *
        //yellow larger prisms
        Math.pow(2, largerprismscount) *
        //yellow color harmony
        (1 + (yellow / 10) * colorharmonycount) * 
        //tri-color boost
        (1 + tricolorboostcount * 0.5 * (yellow/1000))
    );
    //weaksynergyblue
    Math.log(blue) * blueupgrade2 + 1;

    //increase blue
    calcblue(
      //filter
      (((((bluefilter * (bluefilter * blueupgrade1 + 1) * (1 +  finerfilterscount * 3) +
        //pointer
        bluepointer * 10 * (bluepointer * blueupgrade3 + 1) * (1 +  focussedpointerscount * 3) +
        //bigfilter
        bigbluefilter * 100 * (1 +  finerfilterscount * 3) +
        //bigpointer
        bigbluepointer * 1000 * (1 +  focussedpointerscount * 3)) *
        //nanometerwave
        (bluenanometerwave * 0.5 + 1) * (1 + micrometerwavecount * 2) *
        //weaksynergyred
        (Math.log(red + 1) * redupgrade2 + 1)) /
        (10 * redupgrade2 + 1)) *
        //weaksynergygreen
        (Math.log(red + 1) * redupgrade2 + 1)) /
        (10 * greenupgrade2 + 1)) *
        //stronger synergy
        (1 + strongersynergycount * 10) *
        //task booster
        taskBooster *
        //yellow larger prisms
        Math.pow(2, largerprismscount) *
        //yellow color harmony
        (1 + (yellow / 10) * colorharmonycount) * 
        //tri-color boost
        (1 + tricolorboostcount * 0.5 * (yellow/1000))
    );
  }
}, 10);

function rgbToHex(rgb) {
  let rgbColor = rgb.split(", ");
  let values = Object.values(hex);
  hexResult = "#";
  rgbColor.forEach((element) => {
    if (values.includes(element)) {
      hexResult += element + element;
    } else {
      let number = Number(element) / 16;
      let firstDig = String(number).slice(0, 2).replace(".", "");
      let secondDig = String((number - Number(firstDig)) * 16);
      hexResult += hex[firstDig];
      hexResult += hex[secondDig];
    }
  });
}

function submitTask() {
  if (
    red >= taskColorGoalRed &&
    green >= taskColorGoalGreen &&
    blue >= taskColorGoalBlue
  ) {
    red -= taskColorGoalRed;
    green -= taskColorGoalGreen;
    blue -= taskColorGoalBlue;
    tasksCompleted++;
    if (tasksCompleted === 1) {
      taskColorGoalRed = 0;
      taskColorGoalGreen = 255 / (1 + streamlinedtaskscount * 10);
      taskColorGoalBlue = 0;
      document.getElementById("taskGoalAmountRed").innerHTML =
        Math.round(taskColorGoalRed);
      document.getElementById("taskGoalAmountGreen").innerHTML =
        Math.round(taskColorGoalGreen);
      document.getElementById("taskGoalAmountBlue").innerHTML =
        Math.round(taskColorGoalBlue);
      document.getElementById("taskColor").innerHTML = "#00FF00";
      document.getElementById("taskColor").style.color = "green";
      document.getElementById("taskColor").style.textShadow = "0 0 10px green";
      document.getElementById("taskReward").innerHTML = "10 blue";
      taskRewardCount = 10;
      taskRewardColor = "blue";
      document.getElementById("tabgreen").style.display = "block";
      green += 10;
    } else if (tasksCompleted === 2) {
      taskColorGoalRed = 0;
      taskColorGoalGreen = 0;
      taskColorGoalBlue = 255 / (1 + streamlinedtaskscount * 10);
      document.getElementById("taskGoalAmountRed").innerHTML =
        Math.round(taskColorGoalRed);
      document.getElementById("taskGoalAmountGreen").innerHTML =
        Math.round(taskColorGoalGreen);
      document.getElementById("taskGoalAmountBlue").innerHTML =
        Math.round(taskColorGoalBlue);
      document.getElementById("taskColor").innerHTML = "#0000FF";
      document.getElementById("taskColor").style.color = "blue";
      document.getElementById("taskColor").style.textShadow = "0 0 10px blue";
      document.getElementById("taskReward").innerHTML = "2x color gain";
      taskRewardCount = "2x color gain";
      taskRewardColor = "";
      document.getElementById("tabblue").style.display = "block";
      blue += 10;
    } else if (tasksCompleted === 3) {
      taskColorGoalRed = 1100 / (1 + streamlinedtaskscount * 10);
      taskColorGoalGreen = 1150 / (1 + streamlinedtaskscount * 10);
      taskColorGoalBlue = 410 / (1 + streamlinedtaskscount * 10);
      document.getElementById("taskGoalAmountRed").innerHTML =
        Math.round(taskColorGoalRed);
      document.getElementById("taskGoalAmountGreen").innerHTML =
        Math.round(taskColorGoalGreen);
      document.getElementById("taskGoalAmountBlue").innerHTML =
        Math.round(taskColorGoalBlue);
      document.getElementById("taskColor").innerHTML = "#6E7329";
      document.getElementById("taskColor").style.color = "rgb(153, 128, 0)";
      document.getElementById("taskColor").style.textShadow = "0 0 10px yellow";
      document.getElementById("taskReward").innerHTML = "10 yellow";
      taskRewardCount = 10;
      taskRewardColor = "yellow";
      taskBooster = 2;
    } else {
      taskColorGoalRed = Math.floor(
        (Math.random() * 256 * 1000 * Math.pow(1.2, tasksCompleted)) /
          (1 + 10 * streamlinedtaskscount)
      );
      taskColorGoalGreen = Math.floor(
        (Math.random() * 256 * 1000 * Math.pow(1.2, tasksCompleted)) /
          (1 + 10 * streamlinedtaskscount)
      );
      taskColorGoalBlue = Math.floor(
        (Math.random() * 256 * 1000 * Math.pow(1.2, tasksCompleted)) /
          (1 + 10 * streamlinedtaskscount)
      );
      document.getElementById("taskGoalAmountRed").innerHTML =
        Math.round(taskColorGoalRed);
      document.getElementById("taskGoalAmountGreen").innerHTML =
        Math.round(taskColorGoalGreen);
      document.getElementById("taskGoalAmountBlue").innerHTML =
        Math.round(taskColorGoalBlue);
      rgbToHex(
        Math.round(
          (taskColorGoalRed * (1 + 10 * streamlinedtaskscount)) /
            (1000 * Math.pow(1.2, tasksCompleted))
        ) +
          ", " +
          Math.round(
            (taskColorGoalGreen * (1 + 10 * streamlinedtaskscount)) /
              (1000 * Math.pow(1.2, tasksCompleted))
          ) +
          ", " +
          Math.round(
            (taskColorGoalBlue * (1 + 10 * streamlinedtaskscount)) /
              (1000 * Math.pow(1.2, tasksCompleted))
          )
      );
      document.getElementById("taskColor").innerHTML = hexResult;
      document.getElementById("taskColor").style.color =
        "rgb(" +
        String(
          Math.round(
            (taskColorGoalRed * (1 + 10 * streamlinedtaskscount)) /
              (1000 * Math.pow(1.2, tasksCompleted))
          )
        ) +
        ", " +
        String(
          Math.round(
            (taskColorGoalGreen * (1 + 10 * streamlinedtaskscount)) /
              (1000 * Math.pow(1.2, tasksCompleted))
          )
        ) +
        ", " +
        String(
          Math.round(
            (taskColorGoalBlue * (1 + 10 * streamlinedtaskscount)) /
              (1000 * Math.pow(1.2, tasksCompleted))
          )
        ) +
        ")";
      document.getElementById("taskColor").style.textShadow =
        "0px 0px 10px " +
        "rgb(" +
        String(
          Math.round(
            (taskColorGoalRed * (1 + 10 * streamlinedtaskscount)) /
              (1000 * Math.pow(1.2, tasksCompleted))
          )
        ) +
        ", " +
        String(
          Math.round(
            (taskColorGoalGreen * (1 + 10 * streamlinedtaskscount)) /
              (1000 * Math.pow(1.2, tasksCompleted))
          )
        ) +
        ", " +
        String(
          Math.round(
            (taskColorGoalBlue * (1 + 10 * streamlinedtaskscount)) /
              (1000 * Math.pow(1.2, tasksCompleted))
          )
        ) +
        ")";
      document.getElementById("tabyellow").style.display = "block";
      yellow += taskRewardCount;
      taskRewardCount = 10 * (1 + yellowsynergycount * 0.25) * (1 + goldenmultipliercount * tasksCompleted / 10);
      if(Math.random()*100 <= 5){
        yellow += taskRewardCount * 10 * taskmasterycount;
      }
      document.getElementById("yellowcount").innerHTML = "yellow: " + yellow;
      document.getElementById("taskReward").innerHTML =
        String(Math.round(taskRewardCount)) + " " + taskRewardColor;
    }
  }
}
document.addEventListener("keydown", function (event) {
  if (event.key === "r") {
    showtab("red");
  } else if (event.key === "g" && tasksCompleted >= 1) {
    showtab("green");
  } else if (event.key === "b" && tasksCompleted >= 2) {
    showtab("blue");
  } else if (event.key === "y" && tasksCompleted >= 4) {
    showtab("yellow");
  }
  if (event.code === "Digit1") {
    if (tab === "red") {
      buyredfilter();
    } else if (tab === "green") {
      buygreenfilter();
    } else if (tab === "blue") {
      buybluefilter();
    }
  }
  if (event.code === "Digit2") {
    if (tab === "red") {
      buyredpointer();
    } else if (tab === "green") {
      buygreenpointer();
    } else if (tab === "blue") {
      buybluepointer();
    }
  }
  if (event.code === "Digit3") {
    if (tab === "red") {
      buybigredfilter();
    } else if (tab === "green") {
      buybiggreenfilter();
    } else if (tab === "blue") {
      buybigbluefilter();
    }
  }
  if (event.code === "Digit4") {
    if (tab === "red") {
      buybigredpointer();
    } else if (tab === "green") {
      buybiggreenpointer();
    } else if (tab === "blue") {
      buybigbluepointer();
    }
  }
  if (event.code === "Digit5") {
    if (tab === "red") {
      buyrednanometerwave();
    } else if (tab === "green") {
      buygreennanometerwave();
    } else if (tab === "blue") {
      buybluenanometerwave();
    }
  }
});
function resetData() {
  loaded = 69420;
  localStorage.removeItem("save");
  location.reload();
}

//yellow upgrades
function buygovernmentfunding() {
  if (yellow >= governmentfundingprice) {
    yellow -= governmentfundingprice;
    document.getElementById("yellowcount").innerHTML = "yellow: " + yellow;
    governmentfundingcount++;
    governmentfundingprice = Math.round(governmentfundingprice * 1.35);
    document.getElementById("governmentfundingprice").innerHTML =
      governmentfundingprice;
    redfiltercost = Math.floor(
      (10 * Math.pow(1.1, redfilter)) / (1 + 0.1 * governmentfundingcount)
    );
    redpointercost = Math.floor(
      (100 * Math.pow(1.1, redpointer)) / (1 + 0.1 * governmentfundingcount)
    );
    bigredfiltercost = Math.floor(
      (1000 * Math.pow(1.1, bigredfilter)) / (1 + 0.1 * governmentfundingcount)
    );
    bigredpointercost = Math.floor(
      (10000 * Math.pow(1.1, bigredpointer)) /
        (1 + 0.1 * governmentfundingcount)
    );
    rednanometerwavecost = Math.floor(
      (100000 * Math.pow(1.1, rednanometerwave)) /
        (1 + 0.1 * governmentfundingcount)
    );
    greenfiltercost = Math.floor(
      (10 * Math.pow(1.1, greenfilter)) / (1 + 0.1 * governmentfundingcount)
    );
    greenpointercost = Math.floor(
      (100 * Math.pow(1.1, greenpointer)) / (1 + 0.1 * governmentfundingcount)
    );
    biggreenfiltercost = Math.floor(
      (1000 * Math.pow(1.1, biggreenfilter)) /
        (1 + 0.1 * governmentfundingcount)
    );
    biggreenpointercost = Math.floor(
      (10000 * Math.pow(1.1, biggreenpointer)) /
        (1 + 0.1 * governmentfundingcount)
    );
    greennanometerwavecost = Math.floor(
      (100000 * Math.pow(1.1, greennanometerwave)) /
        (1 + 0.1 * governmentfundingcount)
    );
    bluefiltercost = Math.floor(
      (10 * Math.pow(1.1, bluefilter)) / (1 + 0.1 * governmentfundingcount)
    );
    bluepointercost = Math.floor(
      (100 * Math.pow(1.1, bluepointer)) / (1 + 0.1 * governmentfundingcount)
    );
    bigbluefiltercost = Math.floor(
      (1000 * Math.pow(1.1, bigbluefilter)) / (1 + 0.1 * governmentfundingcount)
    );
    bigbluepointercost = Math.floor(
      (10000 * Math.pow(1.1, bigbluepointer)) /
        (1 + 0.1 * governmentfundingcount)
    );
    bluenanometerwavecost = Math.floor(
      (100000 * Math.pow(1.1, bluenanometerwave)) /
        (1 + 0.1 * governmentfundingcount)
    );
    document.getElementById("redfiltercost").innerHTML = redfiltercost;
    document.getElementById("redpointercost").innerHTML = redpointercost;
    document.getElementById("bigredfiltercost").innerHTML = bigredfiltercost;
    document.getElementById("bigredpointercost").innerHTML = bigredpointercost;
    document.getElementById("rednanometerwavecost").innerHTML =
      rednanometerwavecost;
    document.getElementById("greenfiltercost").innerHTML = greenfiltercost;
    document.getElementById("greenpointercost").innerHTML = greenpointercost;
    document.getElementById("biggreenfiltercost").innerHTML =
      biggreenfiltercost;
    document.getElementById("biggreenpointercost").innerHTML =
      biggreenpointercost;
    document.getElementById("greennanometerwavecost").innerHTML =
      greennanometerwavecost;
    document.getElementById("bluefiltercost").innerHTML = bluefiltercost;
    document.getElementById("bluepointercost").innerHTML = bluepointercost;
    document.getElementById("bigbluefiltercost").innerHTML = bigbluefiltercost;
    document.getElementById("bigbluepointercost").innerHTML =
      bigbluepointercost;
    document.getElementById("bluenanometerwavecost").innerHTML =
      bluenanometerwavecost;
  }
}

function buylargerprisms() {
  if (yellow >= largerprismsprice) {
    yellow -= largerprismsprice;
    largerprismscount++;
    largerprismsprice = Math.round(largerprismsprice * 1.85);
    document.getElementById("yellowcount").innerHTML = "yellow: " + yellow;
    document.getElementById("largerprismsprice").innerHTML = largerprismsprice;
  }
}

function buycolorharmony() {
  if (yellow >= colorharmonyprice) {
    yellow -= colorharmonyprice;
    colorharmonycount++;
    colorharmonyprice = Math.round(colorharmonyprice * 1.43);
    document.getElementById("yellowcount").innerHTML = "yellow: " + yellow;
    document.getElementById("colorharmonyprice").innerHTML = colorharmonyprice;
  }
}

function buystreamlinedtasks() {
  if (yellow >= streamlinedtasksprice) {
    yellow -= streamlinedtasksprice;
    streamlinedtaskscount++;
    streamlinedtasksprice = Math.round(streamlinedtasksprice * 1.32);
    document.getElementById("yellowcount").innerHTML = "yellow: " + yellow;
    document.getElementById("streamlinedtasksprice").innerHTML =
      streamlinedtasksprice;
    taskColorGoalRed = taskColorGoalRed / 10;
    taskColorGoalBlue = taskColorGoalBlue / 10;
    taskColorGoalGreen = taskColorGoalGreen / 10;
    document.getElementById("taskGoalAmountRed").innerHTML =
      Math.round(taskColorGoalRed);
    document.getElementById("taskGoalAmountGreen").innerHTML =
      Math.round(taskColorGoalGreen);
    document.getElementById("taskGoalAmountBlue").innerHTML =
      Math.round(taskColorGoalBlue);
  }
}

function buyyellowsynergy() {
  if (yellow >= yellowsynergyprice) {
    yellow -= yellowsynergyprice;
    yellowsynergycount++;
    yellowsynergyprice = Math.round(yellowsynergyprice * 1.61);
    document.getElementById("yellowcount").innerHTML = "yellow: " + yellow;
    document.getElementById("yellowsynergyprice").innerHTML = yellowsynergyprice;
    taskRewardCount =  10 * (1 + yellowsynergycount * 0.25) * (1 + goldenmultipliercount * tasksCompleted / 10);
    document.getElementById("taskReward").innerHTML =
      String(Math.round(taskRewardCount)) + " " + taskRewardColor;
  }
}

function buyredoverflow() {
  if (yellow >= redoverflowprice) {
    yellow -= redoverflowprice;
    redoverflowcount++;
    redoverflowprice = Math.round(redoverflowprice * 1.8);
    document.getElementById("yellowcount").innerHTML = "yellow: " + yellow;
    document.getElementById("redoverflowprice").innerHTML = redoverflowprice;
  }
}

function buygreenoverflow() {
  if (yellow >= greenoverflowprice) {
    yellow -= greenoverflowprice;
    greenoverflowcount++;
    greenoverflowprice = Math.round(greenoverflowprice * 1.8);
    document.getElementById("yellowcount").innerHTML = "yellow: " + yellow;
    document.getElementById("greenoverflowprice").innerHTML =
      greenoverflowprice;
  }
}

function buyblueoverflow() {
  if (yellow >= blueoverflowprice) {
    yellow -= blueoverflowprice;
    blueoverflowcount++;
    blueoverflowprice = Math.round(blueoverflowprice * 1.8);
    document.getElementById("yellowcount").innerHTML = "yellow: " + yellow;
    document.getElementById("blueoverflowprice").innerHTML = blueoverflowprice;
  }
}

function buytricolorboost() {
  if (yellow >= tricolorboostprice) {
    yellow -= tricolorboostprice;
    tricolorboostcount++;
    tricolorboostprice = Math.round(tricolorboostprice * 1.68);
    document.getElementById("yellowcount").innerHTML = "yellow: " + yellow;
    document.getElementById("tricolorboostprice").innerHTML =
      tricolorboostprice;
  }
}

function buytaskmastery() {
  if (yellow >= taskmasteryprice) {
    yellow -= taskmasteryprice;
    taskmasterycount++;
    taskmasteryprice = Math.round(taskmasteryprice * 1.44);
    document.getElementById("yellowcount").innerHTML = "yellow: " + yellow;
    document.getElementById("taskmasteryprice").innerHTML = taskmasteryprice;
  }
}

function buygoldenmultiplier() {
  if (yellow >= goldenmultiplierprice) {
    yellow -= goldenmultiplierprice;
    goldenmultipliercount++;
    goldenmultiplierprice = Math.round(goldenmultiplierprice * 1.91);
    document.getElementById("yellowcount").innerHTML = "yellow: " + yellow;
    document.getElementById("goldenmultiplierprice").innerHTML = goldenmultiplierprice;
    taskRewardCount =  10 * (1 + yellowsynergycount * 0.25) * (1 + goldenmultipliercount * tasksCompleted / 10);
    document.getElementById("taskReward").innerHTML = Math.round(taskRewardCount) + " " + taskRewardColor;
  }
}

function buycolorsyphon() {
  if (yellow >= colorsyphonprice) {
    yellow -= colorsyphonprice;
    colorsyphoncount++;
    colorsyphonprice = 12;
    document.getElementById("yellowcount").innerHTML = "yellow: " + yellow;
    document.getElementById("colorsyphonprice").innerHTML = colorsyphonprice;
    taskColorGoalRed = Math.floor(
      (Math.random() * 256 * 1000 * Math.pow(1.2, tasksCompleted)) /
        (1 + 10 * streamlinedtaskscount)
    );
    taskColorGoalGreen = Math.floor(
      (Math.random() * 256 * 1000 * Math.pow(1.2, tasksCompleted)) /
        (1 + 10 * streamlinedtaskscount)
    );
    taskColorGoalBlue = Math.floor(
      (Math.random() * 256 * 1000 * Math.pow(1.2, tasksCompleted)) /
        (1 + 10 * streamlinedtaskscount)
    );
    document.getElementById("taskGoalAmountRed").innerHTML =
      Math.round(taskColorGoalRed);
    document.getElementById("taskGoalAmountGreen").innerHTML =
      Math.round(taskColorGoalGreen);
    document.getElementById("taskGoalAmountBlue").innerHTML =
      Math.round(taskColorGoalBlue);
    rgbToHex(
      Math.round(
        (taskColorGoalRed * (1 + 10 * streamlinedtaskscount)) /
          (1000 * Math.pow(1.2, tasksCompleted))
      ) +
        ", " +
        Math.round(
          (taskColorGoalGreen * (1 + 10 * streamlinedtaskscount)) /
            (1000 * Math.pow(1.2, tasksCompleted))
        ) +
        ", " +
        Math.round(
          (taskColorGoalBlue * (1 + 10 * streamlinedtaskscount)) /
            (1000 * Math.pow(1.2, tasksCompleted))
        )
    );
    document.getElementById("taskColor").innerHTML = hexResult;
    document.getElementById("taskColor").style.color =
      "rgb(" +
      String(
        Math.round(
          (taskColorGoalRed * (1 + 10 * streamlinedtaskscount)) /
            (1000 * Math.pow(1.2, tasksCompleted))
        )
      ) +
      ", " +
      String(
        Math.round(
          (taskColorGoalGreen * (1 + 10 * streamlinedtaskscount)) /
            (1000 * Math.pow(1.2, tasksCompleted))
        )
      ) +
      ", " +
      String(
        Math.round(
          (taskColorGoalBlue * (1 + 10 * streamlinedtaskscount)) /
            (1000 * Math.pow(1.2, tasksCompleted))
        )
      ) +
      ")";
    document.getElementById("taskColor").style.textShadow =
      "0px 0px 10px " +
      "rgb(" +
      String(
        Math.round(
          (taskColorGoalRed * (1 + 10 * streamlinedtaskscount)) /
            (1000 * Math.pow(1.2, tasksCompleted))
        )
      ) +
      ", " +
      String(
        Math.round(
          (taskColorGoalGreen * (1 + 10 * streamlinedtaskscount)) /
            (1000 * Math.pow(1.2, tasksCompleted))
        )
      ) +
      ", " +
      String(
        Math.round(
          (taskColorGoalBlue * (1 + 10 * streamlinedtaskscount)) /
            (1000 * Math.pow(1.2, tasksCompleted))
        )
      ) +
      ")";
  }
}

function buyfocussedpointers() {
  if (yellow >= focussedpointersprice) {
    yellow -= focussedpointersprice;
    focussedpointerscount++;
    focussedpointersprice = Math.round(focussedpointersprice * 1.53);
    document.getElementById("yellowcount").innerHTML = "yellow: " + yellow;
    document.getElementById("focussedpointersprice").innerHTML =
      focussedpointersprice;
  }
}

function buyfinerfilters() {
  if (yellow >= finerfiltersprice) {
    yellow -= finerfiltersprice;
    finerfilterscount++;
    finerfiltersprice = Math.round(finerfiltersprice * 1.43);
    document.getElementById("yellowcount").innerHTML = "yellow: " + yellow;
    document.getElementById("finerfiltersprice").innerHTML = finerfiltersprice;
  }
}

function buymicrometerwave() {
  if (yellow >= micrometerwaveprice) {
    yellow -= micrometerwaveprice;
    micrometerwavecount++;
    micrometerwaveprice = Math.round(micrometerwaveprice * 1.51);
    document.getElementById("yellowcount").innerHTML = "yellow: " + yellow;
    document.getElementById("micrometerwaveprice").innerHTML =
      micrometerwaveprice;
  }
}

function buystrongersynergy() {
  if (yellow >= strongersynergyprice) {
    yellow -= strongersynergyprice;
    strongersynergycount++;
    strongersynergyprice = Math.round(strongersynergyprice * 1.4);
    document.getElementById("yellowcount").innerHTML = "yellow: " + yellow;
    document.getElementById("strongersynergyprice").innerHTML =
      strongersynergyprice;
  }
}

window.setInterval(function (){
  yellow += redoverflowcount * (//filter
    ((((redfilter * (redfilter * redupgrade1 + 1) * (1 +  finerfilterscount * 3) +
      //pointer
      redpointer * 10 * (redpointer * redupgrade3 + 1) * (1 +  focussedpointerscount * 3) +
      //bigredfilter
      bigredfilter * 100 * (1 +  finerfilterscount * 3) +
      //bigredpointer
      bigredpointer * 1000 * (1 +  focussedpointerscount * 3)) *
      //rednanometerwave
      (rednanometerwave * 0.5 + 1) * (1 + micrometerwavecount * 2) *
      //weaksynergygreen
      (Math.log(green + 1) * greenupgrade2 + 1)) /
      (10 * greenupgrade2 + 1)) *
      //weaksynergyblue
      (Math.log(blue + 1) * blueupgrade2 + 1)) /
      (10 * blueupgrade2 + 1) *
      //stronger synergy
      (1 + strongersynergycount * 10) *
      //task booster
      taskBooster * 
      //yellow larger prisms
      Math.pow(2, largerprismscount) *
      //yellow color harmony
      (1 + (yellow / 10) * colorharmonycount)) * 
      //tri-color boost
      (1 + tricolorboostcount * 0.5 * (yellow/1000)) / 1000000000000;

  yellow += greenoverflowcount * (//filter
    ((((greenfilter * (greenfilter * greenupgrade1 + 1) * (1 +  finerfilterscount * 3) +
      //pointer
      greenpointer * 10 * (greenpointer * blueupgrade3 + 1) * (1 +  focussedpointerscount * 3) +
      //bigfilter
      biggreenfilter * 100 * (1 +  finerfilterscount * 3) +
      //bigpointer
      biggreenpointer * 1000) * (1 +  focussedpointerscount * 3) *
      //nanometerwave
      (greennanometerwave * 0.5 + 1) * (1 + micrometerwavecount * 2) *
      //weaksynergyred
      (Math.log(red + 1) * redupgrade2 + 1)) /
      (10 * redupgrade2 + 1)) *
      //weaksynergyblue
      (Math.log(blue + 1) * blueupgrade2 + 1)) /
      (10 * blueupgrade2 + 1) *
      //stronger synergy
      (1 + strongersynergycount * 10) *
      //task booster
      taskBooster * 
      //yellow larger prisms
      Math.pow(2, largerprismscount) *
      //yellow color harmony
      (1 + (yellow / 10) * colorharmonycount)) * 
      //tri-color boost
      (1 + tricolorboostcount * 0.5 * (yellow/1000)) / 1000000000000;

  yellow += blueoverflowcount * (//filter
    ((((bluefilter * (bluefilter * blueupgrade1 + 1) * (1 +  finerfilterscount * 3) +
      //pointer
      bluepointer * 10 * (bluepointer * blueupgrade3 + 1) * (1 +  focussedpointerscount * 3) +
      //bigfilter
      bigbluefilter * 100 * (1 +  finerfilterscount * 3) +
      //bigpointer
      bigbluepointer * 1000 * (1 +  focussedpointerscount * 3)) *
      //nanometerwave
      (bluenanometerwave * 0.5 + 1) * (1 + micrometerwavecount * 2) *
      //weaksynergyred
      (Math.log(red + 1) * redupgrade2 + 1)) /
      (10 * redupgrade2 + 1)) *
      //weaksynergygreen
      (Math.log(red + 1) * redupgrade2 + 1)) /
      (10 * greenupgrade2 + 1) *
      //stronger synergy
      (1 + strongersynergycount * 10) *
      //task booster
      taskBooster  * 
      //yellow larger prisms
      Math.pow(2, largerprismscount) *
      //yellow color harmony
      (1 + (yellow / 10) * colorharmonycount)) * 
      //tri-color boost
      (1 + tricolorboostcount * 0.5 * (yellow/1000)) / 1000000000000;
  document.getElementById("yellowcount").innerHTML = "yellow: "+Math.round(yellow);
}, 20)