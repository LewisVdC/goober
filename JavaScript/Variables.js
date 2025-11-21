let governmentFunding = {};

function applyGovernmentFunding(x) {
  return x / (1 + 0.1 * governmentFunding.count);
}

window.colors = {
  red: 10,
  green: 0,
  blue: 0,
  yellow: 0,
  cyan: 0,
  magenta: 0,
  magic: 0,
  black: 0,
  white: 0,
};

function updateColor(color) {
  document.getElementById(color + "count").innerHTML = color + ": " + Math.floor(colors[color]);
}

/**
 * Represents an upgrade
 * @class
 */
class BasicColorUpgrade {
  static instances = {};
  /**
   * Create a new upgrade object with all management options
   * @param {string} color - The color of the upgrade
   * @param {string} upgradeName - Name of the upgrade
   * @param {number} startPrice - The base price of the upgrade
   * @param {string} growth - An algorithm for the growth of the price, using "x" as # of upgrades bought
   * @param {element} countSpan - The span element where the count of the upgrade is displayed
   * @param {element} priceSpan - The span where the price of the upgrade is displayed
   * @param {function name(params)} buyFunctionExtra - a function to run on buying (optional, else put null)
    
   }}
   */

  constructor(
    color,
    upgradeName,
    startPrice,
    growth,
    //buyButton,
    countSpan,
    priceSpan,
    buyFunctionExtra
  ) {
    this.color = color;
    this.upgradeName = upgradeName;
    this.startPrice = startPrice;
    this.growth = growth;
    //this.buyButton = buyButton;
    this.countSpan = countSpan;
    this.priceSpan = priceSpan;
    this.count = 0;
    this.price = startPrice;
    this.buyFunctionExtra = buyFunctionExtra;

    BasicColorUpgrade.instances[this.upgradeName] = this;
  }

  //method for creating empty upgrade
  static createEmpty(name) {
    return new BasicColorUpgrade("", name, 0, "", null, null);
  }

  //method for getting all upgrades of one color
  static upgradesWithColor(color) {
    let upgradesList = [];
    for (let i in BasicColorUpgrade.instances) {
      if (BasicColorUpgrade.instances[i].color == color) {
        upgradesList.push(BasicColorUpgrade.instances[i]);
      }
    }
    return upgradesList;
  }

  //methods for updating upgrade's displays
  updateCount() {
    if (!this.countSpan) return;
    this.countSpan.innerHTML = this.count;
  }
  updatePrice() {
    this.price = Math.floor(
      applyGovernmentFunding(eval(this.growth.replaceAll("x", this.count)))
      /*example growth formula:
        (10 * Math.pow(1.1, x));*/
    );
    if (!this.priceSpan) return;
    this.priceSpan.innerHTML = this.price;
  }
  static updateAllPrices() {
    for (let i in BasicColorUpgrade.instances) {
      let inst = BasicColorUpgrade.instances[i];
      inst.price = Math.floor(
        applyGovernmentFunding(eval(inst.growth.replaceAll("x", inst.count)))
        /*example growth formula:
        (10 * Math.pow(1.1, x));*/
      );
      if (!inst.priceSpan) continue;
      inst.priceSpan.innerHTML = inst.price;
    }
  }

  //method for buying an upgrade
  buy(count) {
    for (let i = 0; i < count; i++) {
      if (colors[this.color] < this.price) {
        return false;
      }
      //if you can buy the upgrade, continue
      this.count++;
      this.updateCount();

      colors[this.color] -= this.price;

      this.price = Math.floor(
        applyGovernmentFunding(eval(this.growth.replaceAll("x", this.count)))
        /*example growth formula:
        (10 * Math.pow(1.1, x));*/
      );
      this.updatePrice();

      if (!this.buyFunctionExtra) return;

      this.buyFunctionExtra();
      return true;
    }
  }

  //methods for saving and loading
  static saveUpgrades() {
    let saveObj = {};
    for (let i in BasicColorUpgrade.instances) {
      BasicColorUpgrade.instances[i].updatePrice();

      saveObj[i] = {
        price: BasicColorUpgrade.instances[i].price,
        count: BasicColorUpgrade.instances[i].count,
      };
    }
    let savedUpgrades = JSON.stringify(saveObj);

    localStorage.setItem("upgrades1", savedUpgrades);
  }

  /**
   * @function
   * Load upgrades count and price from locastorage into current instances.
   * Only call after BasicColorUpgrade instances are created.
   */
  static loadUpgrades() {
    let savedUpgrades = JSON.parse(localStorage.getItem("upgrades1"));

    if (!savedUpgrades) return;

    for (let i in BasicColorUpgrade.instances) {
      let savedUpgrade = savedUpgrades[i];
      //if savedupgrades does not contain the instance, return
      if (!savedUpgrade) return;
      //if it does, set the instance's count and price to saved values
      let obj = BasicColorUpgrade.instances[i];
      obj.count = savedUpgrade.count;
      obj.price = savedUpgrade.price;

      obj.updateCount();
      obj.updatePrice();
    }
  }

  //end of class
}

/**
 * @class A class for upgrades that can only be bought once
 */
class OneTimeColorUpgrade {
  static instances = {};
  /**
   * Create a new upgrade object with all management options
   * @param {string} color - The color of the upgrade
   * @param {string} upgradeName - Name of the upgrade
   * @param {number} startPrice - The base price of the upgrade
   * @param {element} countSpan - The span element where the count of the upgrade is displayed
   * @param {element} priceSpan - The span where the price of the upgrade is displayed
   */

  constructor(color, upgradeName, startPrice, priceSpan) {
    this.color = color;
    this.upgradeName = upgradeName;
    this.price = startPrice;
    this.priceSpan = priceSpan;
    this.count = 0;

    OneTimeColorUpgrade.instances[this.upgradeName] = this;
  }

  //method for creating empty upgrade
  static createEmpty(name) {
    return new OneTimeColorUpgrade("", name, 0, null);
  }

  //method for getting all upgrades of one color
  static upgradesWithColor(color) {
    let upgradesList = [];
    for (let i in OneTimeColorUpgrade.instances) {
      if (OneTimeColorUpgrade.instances[i].color == color) {
        upgradesList.push(OneTimeColorUpgrade.instances[i]);
      }
    }
    return upgradesList;
  }

  updatePrice() {
    if (!this.priceSpan) return;
    this.priceSpan.innerHTML = this.count ? "bought" : this.price;
  }

  //method for buying an upgrade
  buy() {
    if (colors[this.color] < this.price || this.count) {
      return false;
    }
    //if you can buy the upgrade, continue
    this.count++;
    this.updatePrice();

    colors[this.color] -= this.price;
    return true;
  }

  //methods for saving and loading
  static saveUpgrades() {
    let saveObj = {};
    for (let i in OneTimeColorUpgrade.instances) {
      saveObj[i] = {
        count: OneTimeColorUpgrade.instances[i].count,
      };
    }
    let savedUpgrades = JSON.stringify(saveObj);

    localStorage.setItem("upgrades2", savedUpgrades);
  }

  /**
   * @function
   * Load upgrades count and price from locastorage into current instances.
   * Only call after BasicColorUpgrade instances are created.
   */
  static loadUpgrades() {
    let savedUpgrades = JSON.parse(localStorage.getItem("upgrades2"));

    if (!savedUpgrades) return;

    for (let i in OneTimeColorUpgrade.instances) {
      let savedUpgrade = savedUpgrades[i];
      //if savedupgrades does not contain the instance, return
      if (!savedUpgrade) return;
      //if it does, set the instance's count and price to saved values
      let obj = OneTimeColorUpgrade.instances[i];
      obj.count = savedUpgrade.count;

      obj.updatePrice();
    }
  }

  //end of class
}

/**
 * Represents a yellow upgrade
 * @class
 */
class BasicYellowUpgrade {
  static instances = {};
  /**
   * Create a new upgrade object with all management options
   * @param {string} color - The color of the upgrade
   * @param {string} upgradeName - Name of the upgrade
   * @param {number} startPrice - The base price of the upgrade
   * @param {string} growth - An algorithm for the growth of the price, using "x" as # of upgrades bought
   * @param {element} countSpan - The span element where the count of the upgrade is displayed
   * @param {element} priceSpan - The span where the price of the upgrade is displayed
   * @param {function name(params)} buyFunctionExtra - a function to run on buying (optional, else put null)
    
   }}
   */

  constructor(
    upgradeName,
    startPrice,
    growth,
    //buyButton,
    countSpan,
    priceSpan,
    buyFunctionExtra
  ) {
    this.color = "yellow";
    this.upgradeName = upgradeName;
    this.startPrice = startPrice;
    this.growth = growth;
    //this.buyButton = buyButton;
    this.countSpan = countSpan;
    this.priceSpan = priceSpan;
    this.count = 0;
    this.price = startPrice;
    this.buyFunctionExtra = buyFunctionExtra;

    BasicYellowUpgrade.instances[this.upgradeName] = this;
  }

  //method for creating empty upgrade
  static createEmpty(name) {
    return new BasicYellowUpgrade("", name, 0, "", null, null, null);
  }

  //methods for updating upgrade's displays
  updateCount() {
    if (!this.countSpan) return;
    this.countSpan.innerHTML = this.count;
  }
  updatePrice() {
    this.price = Math.floor(
      eval(this.growth.replaceAll("x", this.count))
      /*example growth formula:
        (10 * Math.pow(1.1, x));*/
    );
    if (!this.priceSpan) return;
    this.priceSpan.innerHTML = this.price;
  }
  static updateAllUpgrades() {
    for (let i in BasicYellowUpgrade.instances) {
      let inst = BasicYellowUpgrade.instances[i];
      inst.updateCount();
      inst.updatePrice();
    }
  }

  //method for buying an upgrade
  buy(count) {
    for (let i = 0; i < count; i++) {
      if (colors[this.color] < this.price) {
        return false;
      }
      //if you can buy the upgrade, continue
      this.count++;
      this.updateCount();

      colors[this.color] -= this.price;

      this.price = Math.floor(
        eval(this.growth.replaceAll("x", this.count))
        /*example growth formula:
        (10 * Math.pow(1.1, x));*/
      );
      this.updatePrice();

      this.buyFunctionExtra;

      return true;
    }
  }

  //methods for saving and loading
  static saveUpgrades() {
    let saveObj = {};
    for (let i in BasicYellowUpgrade.instances) {
      BasicYellowUpgrade.instances[i].updatePrice();
      BasicYellowUpgrade.instances[i].updateCount();

      saveObj[i] = {
        price: BasicYellowUpgrade.instances[i].price,
        count: BasicYellowUpgrade.instances[i].count,
      };
    }
    let savedUpgrades = JSON.stringify(saveObj);

    localStorage.setItem("upgrades3", savedUpgrades);
  }

  /**
   * @function
   * Load upgrades count and price from locastorage into current instances.
   * Only call after BasicYellowUpgrade instances are created.
   */
  static loadUpgrades() {
    let savedUpgrades = JSON.parse(localStorage.getItem("upgrades3"));

    if (savedUpgrades) {
      for (let i in BasicYellowUpgrade.instances) {
        let savedUpgrade = savedUpgrades[i];
        //if savedupgrades does not contain the instance, return
        if (!savedUpgrade) return;
        //if it does, set the instance's count and price to saved values
        let obj = BasicYellowUpgrade.instances[i];
        obj.count = savedUpgrade.count;
        obj.price = savedUpgrade.price;
      }
    }
    BasicYellowUpgrade.updateAllUpgrades();
  }

  //end of class
}

/**
 * A class for upgrades with automation functions built in
 * (name is automatically set to upgrade to automate + "Automation")
 * @class
 */
class AutomationUpgrade {
  /**
   * @param {number} startPrice - The base price of the upgrade
   * @param {string} growth - An algorithm for the growth of the price, using "x" as # of upgrades bought
   * @param {element} countSpan - The span element where the count of the upgrade is displayed
   * @param {element} priceSpan - The span where the price of the upgrade is displayed
   * @param {Object} automationUpgrade - the object (BasicColorUpgrade, BasicYellowUpgrade) to automate
   *
   * @param {string} upgradeName - Name of the upgrade (set to upgrade to automate + "Automation" if empty)
   */
  constructor(
    startPrice,
    growth,
    countSpan,
    priceSpan,
    automationUpgrade,
    upgradeName = automationUpgrade + "Automation"
  ) {
    this.startPrice = startPrice;
    this.growth = growth;
    this.countSpan = countSpan;
    this.priceSpan = priceSpan;
    this.automationUpgrade = automationUpgrade;
    this.upgradeName = upgradeName;
  }

  static createEmpty() {
    return new AutomationUpgrade(0, "", null, null, {}, "");
  }
}

//ALL OF THE VARIABLES

//general
var debugrednumber = 0;
var debuggreennumber = 0;
var debugbluenumber = 0;
var debugmagicnumber = 0;
var tab = "red";
var whiteunlock = 0;
var whiteunlocked = 0;
var blackunlock = 0;
var blackunlocked = 0;

//offline
var offlineTime = 0;
var time = Date.now();
var visibilityState = "visible";

//achievements
let taskMasteryTrigger = false;
let achievement = {
  redfilter1: false,
  redPerSec10: false,
  have1e5red: false,
  buyAllRedUpgrades: false,
  redPerSec1e15: false,
  have1e20red: false,
  greenfilter1: false,
  greenPerSec100: false,
  have1e6green: false,
  buyAllGreenUpgrades: false,
  greenPerSec1e16: false,
  have1e21green: false,
  bluefilter1: false,
  bluePerSec1000: false,
  have1e7blue: false,
  buyAllBlueUpgrades: false,
  bluePerSec1e17: false,
  have1e22blue: false,
  yellow1: false,
  yellow100: false,
  triggertaskmastery: false,
  yellowPerSec10: false,
  yellowAllUpgrades10: false,
  have1e7yellow: false,
  yellowCyan1: false,
  automation1: false,
  everyAutomation: false,
  magicCyan1: false,
  spellAutomation: false,
  prestiegeAutomation: false,
  buyCauldron1: false,
  castSpell1: false,
  magicPerSec1e4: false,
  buyAllScrolls: false,
  earn1e9magenta: false,
  allSpellsUnlocked: false,
};

//red
let redFilter = new BasicColorUpgrade(
  "red",
  "redFilter",
  10,
  "(10 * Math.pow(1.1, x))",
  document.getElementById("redfiltercount"),
  document.getElementById("redfiltercost")
);
let redPointer = new BasicColorUpgrade(
  "red",
  "redPointer",
  100,
  "100*Math.pow(1.1,x)",
  document.getElementById("redpointercount"),
  document.getElementById("redpointercost")
);
let bigRedFilter = new BasicColorUpgrade(
  "red",
  "bigRedFilter",
  1000,
  "1000*Math.pow(1.1, x)",
  document.getElementById("bigredfiltercount"),
  document.getElementById("bigredfiltercost")
);
let bigRedPointer = new BasicColorUpgrade(
  "red",
  "bigRedPointer",
  10000,
  "10000*Math.pow(1.1, x)",
  document.getElementById("bigredpointercount"),
  document.getElementById("bigredpointercost")
);
let redNanometerWave = new BasicColorUpgrade(
  "red",
  "redNanometerWave",
  100000,
  "100000*Math.pow(1.1, x)",
  document.getElementById("rednanometerwavecount"),
  document.getElementById("rednanometerwavecost")
);

let redUpgrade1 = new OneTimeColorUpgrade(
  "red",
  "redUpgrade1",
  15e4,
  document.getElementById("redupgrade1cost")
);

let redUpgrade2 = new OneTimeColorUpgrade(
  "red",
  "redUpgrade2",
  25e4,
  document.getElementById("redupgrade2cost")
);

let redUpgrade3 = new OneTimeColorUpgrade(
  "red",
  "redUpgrade3",
  5e5,
  document.getElementById("redupgrade3cost")
);

//green
let greenFilter = new BasicColorUpgrade(
  "green",
  "greenFilter",
  10,
  "(10 * Math.pow(1.1, x))",
  document.getElementById("greenfiltercount"),
  document.getElementById("greenfiltercost")
);
let greenPointer = new BasicColorUpgrade(
  "green",
  "greenPointer",
  100,
  "100*Math.pow(1.1,x)",
  document.getElementById("greenpointercount"),
  document.getElementById("greenpointercost")
);
let bigGreenFilter = new BasicColorUpgrade(
  "green",
  "bigBlueFilter",
  1000,
  "1000*Math.pow(1.1, x)",
  document.getElementById("biggreenfiltercount"),
  document.getElementById("biggreenfiltercost")
);
let bigGreenPointer = new BasicColorUpgrade(
  "green",
  "bigBluePointer",
  10000,
  "10000*Math.pow(1.1, x)",
  document.getElementById("biggreenpointercount"),
  document.getElementById("biggreenpointercost")
);
let greenNanometerWave = new BasicColorUpgrade(
  "green",
  "greenNanometerWave",
  100000,
  "100000*Math.pow(1.1, x)",
  document.getElementById("greennanometerwavecount"),
  document.getElementById("greennanometerwavecost")
);

let greenUpgrade1 = new OneTimeColorUpgrade(
  "green",
  "greenUpgrade1",
  15e4,
  document.getElementById("greenupgrade1cost")
);

let greenUpgrade2 = new OneTimeColorUpgrade(
  "green",
  "greenUpgrade2",
  25e4,
  document.getElementById("greenupgrade2cost")
);

let greenUpgrade3 = new OneTimeColorUpgrade(
  "green",
  "greenUpgrade3",
  5e5,
  document.getElementById("greenupgrade3cost")
);

//blue
let blueFilter = new BasicColorUpgrade(
  "blue",
  "blueFilter",
  10,
  "(10 * Math.pow(1.1, x))",
  document.getElementById("bluefiltercount"),
  document.getElementById("bluefiltercost")
);
let bluePointer = new BasicColorUpgrade(
  "blue",
  "bluePointer",
  100,
  "100*Math.pow(1.1,x)",
  document.getElementById("bluepointercount"),
  document.getElementById("bluepointercost")
);
let bigBlueFilter = new BasicColorUpgrade(
  "blue",
  "bigBlueFilter",
  1000,
  "1000*Math.pow(1.1, x)",
  document.getElementById("bigbluefiltercount"),
  document.getElementById("bigbluefiltercost")
);
let bigBluePointer = new BasicColorUpgrade(
  "blue",
  "bigBluePointer",
  10000,
  "10000*Math.pow(1.1, x)",
  document.getElementById("bigbluepointercount"),
  document.getElementById("bigbluepointercost")
);
let blueNanometerWave = new BasicColorUpgrade(
  "blue",
  "blueNanometerWave",
  100000,
  "100000*Math.pow(1.1, x)",
  document.getElementById("bluenanometerwavecount"),
  document.getElementById("bluenanometerwavecost")
);

let blueUpgrade1 = new OneTimeColorUpgrade(
  "blue",
  "blueUpgrade1",
  15e4,
  document.getElementById("blueupgrade1cost")
);

let blueUpgrade2 = new OneTimeColorUpgrade(
  "blue",
  "blueUpgrade2",
  25e4,
  document.getElementById("blueupgrade2cost")
);

let blueUpgrade3 = new OneTimeColorUpgrade(
  "blue",
  "blueUpgrade3",
  5e5,
  document.getElementById("blueupgrade3cost")
);

//yellow
governmentFunding = new BasicYellowUpgrade(
  "governmentFunding",
  2,
  "2*Math.pow(1.35,x)",
  document.getElementById("yellowupgrade1amount"),
  document.getElementById("yellowupgrade1cost"),
  function () {
    BasicColorUpgrade.updateAllPrices();
  }
);
let colorHarmony = new BasicYellowUpgrade(
  "colorHarmony",
  4,
  "4*Math.pow(1.43,x)",
  document.getElementById("yellowupgrade2amount"),
  document.getElementById("yellowupgrade2cost"),
  null
);

let largerPrisms = new BasicYellowUpgrade(
  "largerPrisms",
  10,
  "10*Math.pow(1.85,x)",
  document.getElementById("yellowupgrade3amount"),
  document.getElementById("yellowupgrade3cost"),
  null
);

let streamlinedTasks = new BasicYellowUpgrade(
  "streamlinedTasks",
  5,
  "5*Math.pow(1.32,x)",
  document.getElementById("yellowupgrade4amount"),
  document.getElementById("yellowupgrade4cost"),
  function () {
    taskColorGoalRed = taskColorGoalRed / 2;
    taskColorGoalBlue = taskColorGoalBlue / 2;
    taskColorGoalGreen = taskColorGoalGreen / 2;

    document.getElementById("taskGoalAmountRed").innerHTML = formatNumber(
      Math.round(taskColorGoalRed)
    );
    document.getElementById("taskGoalAmountGreen").innerHTML = formatNumber(
      Math.round(taskColorGoalGreen)
    );
    document.getElementById("taskGoalAmountBlue").innerHTML = formatNumber(
      Math.round(taskColorGoalBlue)
    );
  }
);

let yellowSynergy = new BasicYellowUpgrade(
  "yellowSynergy",
  12,
  "12*Math.pow(1.61, x)",
  document.getElementById("yellowupgrade5amount"),
  document.getElementById("yellowupgrade5cost"),
  function () {
    taskRewardCount =
      10 * (1 + yellowSynergy.count * 0.25) * (1 + (goldenmultipliercount * tasksCompleted) / 1000);
    document.getElementById("taskReward").innerHTML =
      String(Math.round(taskRewardCount)) + " " + taskRewardColor;
  }
);
let redOverflow = new BasicYellowUpgrade(
  "redOverflow",
  100,
  "100*Math.pow(1.8,x)",
  document.getElementById("yellowupgrade6amount"),
  document.getElementById("yellowupgrade6cost"),
  null
);
let greenOverflow = new BasicYellowUpgrade(
  "greenOverflow",
  100,
  "100*Math.pow(1.8,x)",
  document.getElementById("yellowupgrade7amount"),
  document.getElementById("yellowupgrade7cost"),
  null
);
let blueOverflow = new BasicYellowUpgrade(
  "blueOverflow",
  100,
  "100*Math.pow(1.8,x)",
  document.getElementById("yellowupgrade8amount"),
  document.getElementById("yellowupgrade8cost"),
  null
);

let triColorBoost = new BasicYellowUpgrade(
  "triColorBoost",
  500,
  "500*Math.pow(1.68,x)",
  document.getElementById("yellowupgrade9amount"),
  document.getElementById("yellowupgrade9cost"),
  null
);
let taskMastery = new BasicYellowUpgrade(
  "taskMastery",
  20,
  "100*Math.pow(1.44,x)",
  document.getElementById("yellowupgrade10amount"),
  document.getElementById("yellowupgrade10cost"),
  null
);
let goldenMultiplier = new BasicYellowUpgrade(
  "goldenMultiplier",
  35,
  "100*Math.pow(1.91,x)",
  document.getElementById("yellowupgrade11amount"),
  document.getElementById("yellowupgrade11cost"),
  function () {
    taskRewardCount =
      10 *
      (1 + yellowSynergy.count * 0.25) *
      (1 + (goldenMultiplier.count * tasksCompleted) / 1000);
    document.getElementById("taskReward").innerHTML =
      Math.round(taskRewardCount) + " " + taskRewardColor;
  }
);
let strongerSynergy = new BasicYellowUpgrade(
  "strongerSynergy",
  100,
  "100*Math.pow(1.4,x)",
  document.getElementById("yellowupgrade12amount"),
  document.getElementById("yellowupgrade12cost"),
  null
);

let focussedPointers = new BasicYellowUpgrade(
  "focussedPointers",
  30,
  "30*Math.pow(1.53,x)",
  document.getElementById("yellowupgrade13amount"),
  document.getElementById("yellowupgrade13cost")
);
let finerFilters = new BasicYellowUpgrade(
  "finerFilters",
  30,
  "30*Math.pow(1.43,x)",
  document.getElementById("yellowupgrade14amount"),
  document.getElementById("yellowupgrade14cost")
);
let micrometerWave = new BasicYellowUpgrade(
  "micrometerWave",
  60,
  "30*Math.pow(1.51,x)",
  document.getElementById("yellowupgrade15amount"),
  document.getElementById("yellowupgrade15cost")
);
//kinda hard to do this one
let colorSyphon = new BasicYellowUpgrade(
  "colorSyphon",
  1200,
  "(1200+5000*x)",
  document.getElementById("yellowupgrade16amount"),
  document.getElementById("yellowupgrade16cost"),
  function () {
    colors.cyan += 10 * colorSyphon.count;
    updateColor("cyan");
    document.getElementById("tabcyan").style.display = "block";
  }
);

//var strongersynergyprice = 100;
//var strongersynergycount = 0;
var yellowGAIN = 0;

//cyan
var cyanBuyTimeBoost = 1;
//var cyan = 0;
var redfilterautomationcount = 0;
var redfilterautomationprice = 5;
var redpointerautomationcount = 0;
var redpointerautomationprice = 5;
var bigredfilterautomationcount = 0;
var bigredfilterautomationprice = 5;
var bigredpointerautomationcount = 0;
var bigredpointerautomationprice = 5;
var rednanometerwaveautomationcount = 0;
var rednanometerwaveautomationprice = 5;
var greenfilterautomationcount = 0;
var greenfilterautomationprice = 5;
var greenpointerautomationcount = 0;
var greenpointerautomationprice = 5;
var biggreenfilterautomationcount = 0;
var biggreenfilterautomationprice = 5;
var biggreenpointerautomationcount = 0;
var biggreenpointerautomationprice = 5;
var greennanometerwaveautomationcount = 0;
var greennanometerwaveautomationprice = 5;
var bluefilterautomationcount = 0;
var bluefilterautomationprice = 5;
var bluepointerautomationcount = 0;
var bluepointerautomationprice = 5;
var bigbluefilterautomationcount = 0;
var bigbluefilterautomationprice = 5;
var bigbluepointerautomationcount = 0;
var bigbluepointerautomationprice = 5;
var bluenanometerwaveautomationcount = 0;
var bluenanometerwaveautomationprice = 5;
var redfilterautomationtimer = 0;
var redpointerautomationtimer = 0;
var bigredfilterautomationtimer = 0;
var bigredpointerautomationtimer = 0;
var rednanometerwaveautomationtimer = 0;
var greenfilterautomationtimer = 0;
var greenpointerautomationtimer = 0;
var biggreenfilterautomationtimer = 0;
var biggreenpointerautomationtimer = 0;
var greennanometerwaveautomationtimer = 0;
var bluefilterautomationtimer = 0;
var bluepointerautomationtimer = 0;
var bigbluefilterautomationtimer = 0;
var bigbluepointerautomationtimer = 0;
var bluenanometerwaveautomationtimer = 0;
var redtogglestate = true;
var greentogglestate = true;
var bluetogglestate = true;

//magenta

//black
//var black = 0;
var enterbuttonx = 0;
var enterbuttony = 0;
var blackholex = 0;
var blackholex = 0;
var blackholey = 0;
var blackholeanimationdone = 0;
var blackholex2 = 0;
var buttony = 0;
var blackholey2 = 0;

//nerdmode
var currentnerdmode = 0;
var nerdtimer = 0;

//saving
var decodedtext = 0;
var savecounter = 0;
var savetime = 15000;
var loaded = 0;
var loaded2 = 0;

//devmode
var buttonpress = true;
var dev = 0;

//tasks
var arrOfPtags = document.getElementsByTagName("p");
var arrOfSpanTags = document.getElementsByTagName("span");
var taskColorGoalHEX = "#ffff00";
var taskColorGoalRed = 255;
var taskColorGoalGreen = 0;
var taskColorGoalBlue = 0;
var streamlinedTaskColorGoal = {
  red: 1,
  green: 1,
  blue: 1,
};
let hexResult = "#";
var tasksCompleted = 0;
var taskRewardCount = 10;
var taskRewardColor = "green";
var taskBooster = 1;
//can u explain to me what this is 😭??
//idk best not to touch it
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
