//MAIN SAVE FUNCTION

function save() {
  //save the upgrades
  BasicYellowUpgrade.saveUpgrades();
  BasicColorUpgrade.saveUpgrades();
  OneTimeColorUpgrade.saveUpgrades();

  var save = {
    //new saved objects
    colors: colors,

    //old saved variables
    redscrollcount: redscrollcount,
    greenscrollcount: greenscrollcount,
    bluescrollcount: bluescrollcount,
    magentaspellunlock: magentaspellunlock,
    greenfilter: greenfilter,
    greenpointer: greenpointer,
    biggreenfilter: biggreenfilter,
    biggreenpointer: biggreenpointer,
    greennanometerwave: greennanometerwave,
    greenupgrade1: greenupgrade1,
    greenupgrade2: greenupgrade2,
    greenupgrade3: greenupgrade3,
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
    whiteunlock: whiteunlock,
    blackunlock: blackunlock,

    redfilterautomationcount: redfilterautomationcount,
    redfilterautomationprice: redfilterautomationprice,
    redpointerautomationcount: redpointerautomationcount,
    redpointerautomationprice: redpointerautomationprice,
    bigredfilterautomationcount: bigredfilterautomationcount,
    bigredfilterautomationprice: bigredfilterautomationprice,
    bigredpointerautomationcount: bigredpointerautomationcount,
    bigredpointerautomationprice: bigredpointerautomationprice,
    rednanometerwaveautomationcount: rednanometerwaveautomationcount,
    rednanometerwaveautomationprice: rednanometerwaveautomationprice,
    greenfilterautomationcount: greenfilterautomationcount,
    greenfilterautomationprice: greenfilterautomationprice,
    greenpointerautomationcount: greenpointerautomationcount,
    greenpointerautomationprice: greenpointerautomationprice,
    biggreenfilterautomationcount: biggreenfilterautomationcount,
    biggreenfilterautomationprice: biggreenfilterautomationprice,
    biggreenpointerautomationcount: biggreenpointerautomationcount,
    biggreenpointerautomationprice: biggreenpointerautomationprice,
    greennanometerwaveautomationcount: greennanometerwaveautomationcount,
    greennanometerwaveautomationprice: greennanometerwaveautomationprice,
    bluefilterautomationcount: bluefilterautomationcount,
    bluefilterautomationprice: bluefilterautomationprice,
    bluepointerautomationcount: bluepointerautomationcount,
    bluepointerautomationprice: bluepointerautomationprice,
    bigbluefilterautomationcount: bigbluefilterautomationcount,
    bigbluefilterautomationprice: bigbluefilterautomationprice,
    bigbluepointerautomationcount: bigbluepointerautomationcount,
    bigbluepointerautomationprice: bigbluepointerautomationprice,
    bluenanometerwaveautomationcount: bluenanometerwaveautomationcount,
    bluenanometerwaveautomationprice: bluenanometerwaveautomationprice,
    redtogglestate: redtogglestate,
    blackholeanimationdone: blackholeanimationdone,
    greentogglestate: greentogglestate,
    bluetogglestate: bluetogglestate,
    cauldron: cauldron,
    study: study,
    feed: feed,
    feedperson: feedperson,
    drink: drink,
    cauldroncost: cauldroncost,
    studycost: studycost,
    feedcost: feedcost,
    feedpersoncost: feedpersoncost,
    drinkcost: drinkcost,
    currentnerdmode: currentnerdmode,
    dialoguestate: dialoguestate,
    words: words,
    spell1unlock: spell1unlock,
    spell2unlock: spell2unlock,
    spell3unlock: spell3unlock,
    streamlinedTaskColorGoal: streamlinedTaskColorGoal,
    cooldownspells: cooldownspells,
    cooldowntimeleft: cooldowntimeleft,
    cooldowntimes: cooldowntimes,
    achievement: achievement,
  };
  localStorage.setItem("save", JSON.stringify(save));
  document.getElementById("saving").setAttribute("class", "");
  document.getElementById("saving").style.opacity = 1;
  window.setTimeout(function () {
    document.getElementById("saving").setAttribute("class", "fadeout");
  }, 3000);
}

//MAIN LOAD FUNCTION THAT RUNS ONCE SCRIPTS START
function load() {
  var savegame2 = JSON.parse(localStorage.getItem("save2"));
  if (savegame2 != null) {
    if (typeof savegame2.dev !== "undefined") {
      dev = savegame2.dev;
    }
  } else {
    console.log("no saved game2");
    loaded2 = 1;
  }
  var savegame = JSON.parse(localStorage.getItem("save"));
  if (savegame != null) {
    //achievement and nerdmode
    if (typeof savegame.achievement !== "undefined") {
      achievement = savegame.achievement;
      //get all achievement names from achievement obj
      let keys = Object.keys(achievement);
      //loop through all achievements
      for (let i = 0; i <= keys.length - 1; i++) {
        //if the achievement has been unlocked
        if (achievement[keys[i]] === true) {
          //set achievement img to proper img
          achievementItemImg[i].src = "images/achievements/" + keys[i] + ".webp";
          //unlocks
          if (keys[i] === "redPerSec10") {
            document.getElementById("tasks").style.display = "block";
          }
          if (keys[i] === "yellowCyan1") {
            document.getElementById("cyan1spell").style.backgroundImage =
              "url('images/spells/cyan_spell.webp')";
          }
          if (keys[i] === "yellowAllUpgrades10") {
            document.getElementById("yellow1spell").style.backgroundImage =
              "url('images/spells/yellow_spell.webp')";
          }
          if (
            keys[i] === "redPerSec1e15" ||
            keys[i] === "have1e20red" ||
            keys[i] === "greenPerSec1e16" ||
            keys[i] === "have1e21green" ||
            keys[i] === "bluePerSec1e17" ||
            keys[i] === "have1e22blue" ||
            keys[i] === "yellowAllUpgrades10" ||
            keys[i] === "have1e7yellow"
          ) {
            achievementItemImg[i].src = "images/placeholder.webp";
          }
        }
      }
    }

    if (typeof savegame.currentnerdmode !== "undefined") currentnerdmode = savegame.currentnerdmode;
    nerdmode(currentnerdmode);
    //white and black tabs
    if (typeof savegame.whiteunlock !== "undefined") whiteunlock = savegame.whiteunlock;
    if (typeof savegame.blackunlock !== "undefined") blackunlock = savegame.blackunlock;
    if (typeof savegame.blackholeanimationdone !== "undefined")
      blackholeanimationdone = savegame.blackholeanimationdone;
    //dialogue
    timer = 50;
    if (typeof savegame.dialoguestate !== "undefined") dialoguestate = savegame.dialoguestate;
    if (typeof savegame.words !== "undefined") {
      words = savegame.words;
      alberto.style.opacity = "1";
      alberto.innerHTML = "𓆩⟡𓆪" + words + "𓆩⟡𓆪";
    }
    //general
    if (typeof savegame.colors !== "undefined") colors = savegame.colors;

    //green

    //blue

    //yellow

    //cyan
    document.getElementById("cyancount").innerHTML = "cyan: " + Math.round(colors.cyan);
    if (typeof savegame.redfilterautomationcount !== "undefined")
      redfilterautomationcount = savegame.redfilterautomationcount;
    if (typeof savegame.redfilterautomationprice !== "undefined") {
      redfilterautomationprice = savegame.redfilterautomationprice;
      document.getElementById("redfilterautomationprice").innerHTML =
        Math.round(redfilterautomationprice);
    }
    if (typeof savegame.redpointerautomationcount !== "undefined")
      redpointerautomationcount = savegame.redpointerautomationcount;
    if (typeof savegame.redpointerautomationprice !== "undefined") {
      redpointerautomationprice = savegame.redpointerautomationprice;
      document.getElementById("redpointerautomationprice").innerHTML =
        Math.round(redpointerautomationprice);
    }
    if (typeof savegame.bigredfilterautomationcount !== "undefined")
      bigredfilterautomationcount = savegame.bigredfilterautomationcount;
    if (typeof savegame.bigredfilterautomationprice !== "undefined") {
      bigredfilterautomationprice = savegame.bigredfilterautomationprice;
      document.getElementById("bigredfilterautomationprice").innerHTML = Math.round(
        bigredfilterautomationprice
      );
    }
    if (typeof savegame.bigredpointerautomationcount !== "undefined")
      bigredpointerautomationcount = savegame.bigredpointerautomationcount;
    if (typeof savegame.bigredpointerautomationprice !== "undefined") {
      bigredpointerautomationprice = savegame.bigredpointerautomationprice;
      document.getElementById("bigredpointerautomationprice").innerHTML = Math.round(
        bigredpointerautomationprice
      );
    }
    if (typeof savegame.rednanometerwaveautomationcount !== "undefined") {
      rednanometerwaveautomationcount = savegame.rednanometerwaveautomationcount;
    }
    if (typeof savegame.rednanometerwaveautomationprice !== "undefined") {
      rednanometerwaveautomationprice = savegame.rednanometerwaveautomationprice;
      document.getElementById("rednanometerwaveautomationprice").innerHTML = Math.round(
        rednanometerwaveautomationprice
      );
    }
    if (typeof savegame.greenfilterautomationcount !== "undefined")
      greenfilterautomationcount = savegame.greenfilterautomationcount;
    if (typeof savegame.greenfilterautomationprice !== "undefined") {
      greenfilterautomationprice = savegame.greenfilterautomationprice;
      document.getElementById("greenfilterautomationprice").innerHTML = Math.round(
        greenfilterautomationprice
      );
    }
    if (typeof savegame.greenpointerautomationcount !== "undefined")
      greenpointerautomationcount = savegame.greenpointerautomationcount;
    if (typeof savegame.greenpointerautomationprice !== "undefined") {
      greenpointerautomationprice = savegame.greenpointerautomationprice;
      document.getElementById("greenpointerautomationprice").innerHTML = Math.round(
        greenpointerautomationprice
      );
    }
    if (typeof savegame.biggreenfilterautomationcount !== "undefined")
      biggreenfilterautomationcount = savegame.biggreenfilterautomationcount;
    if (typeof savegame.biggreenfilterautomationprice !== "undefined") {
      biggreenfilterautomationprice = savegame.biggreenfilterautomationprice;
      document.getElementById("biggreenfilterautomationprice").innerHTML = Math.round(
        biggreenfilterautomationprice
      );
    }
    if (typeof savegame.biggreenpointerautomationcount !== "undefined")
      biggreenpointerautomationcount = savegame.biggreenpointerautomationcount;
    if (typeof savegame.biggreenpointerautomationprice !== "undefined") {
      biggreenpointerautomationprice = savegame.biggreenpointerautomationprice;
      document.getElementById("biggreenpointerautomationprice").innerHTML = Math.round(
        biggreenpointerautomationprice
      );
    }
    if (typeof savegame.greennanometerwaveautomationcount !== "undefined") {
      greennanometerwaveautomationcount = savegame.greennanometerwaveautomationcount;
    }
    if (typeof savegame.greennanometerwaveautomationprice !== "undefined") {
      greennanometerwaveautomationprice = savegame.greennanometerwaveautomationprice;
      document.getElementById("greennanometerwaveautomationprice").innerHTML = Math.round(
        greennanometerwaveautomationprice
      );
    }
    if (typeof savegame.bluefilterautomationcount !== "undefined")
      bluefilterautomationcount = savegame.bluefilterautomationcount;
    if (typeof savegame.bluefilterautomationprice !== "undefined") {
      bluefilterautomationprice = savegame.bluefilterautomationprice;
      document.getElementById("bluefilterautomationprice").innerHTML =
        Math.round(bluefilterautomationprice);
    }
    if (typeof savegame.bluepointerautomationcount !== "undefined")
      bluepointerautomationcount = savegame.bluepointerautomationcount;
    if (typeof savegame.bluepointerautomationprice !== "undefined") {
      bluepointerautomationprice = savegame.bluepointerautomationprice;
      document.getElementById("bluepointerautomationprice").innerHTML = Math.round(
        bluepointerautomationprice
      );
    }
    if (typeof savegame.bigbluefilterautomationcount !== "undefined")
      bigbluefilterautomationcount = savegame.bigbluefilterautomationcount;
    if (typeof savegame.bigbluefilterautomationprice !== "undefined") {
      bigbluefilterautomationprice = savegame.bigbluefilterautomationprice;
      document.getElementById("bigbluefilterautomationprice").innerHTML = Math.round(
        bigbluefilterautomationprice
      );
    }
    if (typeof savegame.bigbluepointerautomationcount !== "undefined")
      bigbluepointerautomationcount = savegame.bigbluepointerautomationcount;
    if (typeof savegame.bigbluepointerautomationprice !== "undefined") {
      bigbluepointerautomationprice = savegame.bigbluepointerautomationprice;
      document.getElementById("bigbluepointerautomationprice").innerHTML = Math.round(
        bigbluepointerautomationprice
      );
    }
    if (typeof savegame.bluenanometerwaveautomationcount !== "undefined") {
      bluenanometerwaveautomationcount = savegame.bluenanometerwaveautomationcount;
    }
    if (typeof savegame.bluenanometerwaveautomationprice !== "undefined") {
      bluenanometerwaveautomationprice = savegame.bluenanometerwaveautomationprice;
      document.getElementById("bluenanometerwaveautomationprice").innerHTML = Math.round(
        bluenanometerwaveautomationprice
      );
    }
    if (typeof savegame.redtogglestate !== "undefined") redtogglestate = savegame.redtogglestate;
    if (redtogglestate) {
      document.getElementById("redtogglestate").innerHTML = "on";
      document.getElementById("redtoggle").style.background =
        "linear-gradient(45deg, #003e00, #32db32, #025202)";
    } else {
      document.getElementById("redtogglestate").innerHTML = "off";
      document.getElementById("redtoggle").style.background =
        "linear-gradient(45deg, #6d0000, #ff2c2c, rgb(200, 25, 25))";
    }
    if (typeof savegame.greentogglestate !== "undefined")
      greentogglestate = savegame.greentogglestate;
    if (greentogglestate) {
      document.getElementById("greentogglestate").innerHTML = "on";
      document.getElementById("greentoggle").style.background =
        "linear-gradient(45deg, #003e00, #32db32, #025202)";
    } else {
      document.getElementById("greentogglestate").innerHTML = "off";
      document.getElementById("greentoggle").style.background =
        "linear-gradient(45deg, #6d0000, #ff2c2c, rgb(200, 25, 25))";
    }
    if (typeof savegame.bluetogglestate !== "undefined") bluetogglestate = savegame.bluetogglestate;
    if (bluetogglestate) {
      document.getElementById("bluetogglestate").innerHTML = "on";
      document.getElementById("bluetoggle").style.background =
        "linear-gradient(45deg, #003e00, #32db32, #025202)";
    } else {
      document.getElementById("bluetogglestate").innerHTML = "off";
      document.getElementById("bluetoggle").style.background =
        "linear-gradient(45deg, #6d0000, #ff2c2c, rgb(200, 25, 25))";
    }
    //magic and magenta
    if (typeof savegame.cooldownspells !== "undefined") cooldownspells = savegame.cooldownspells;
    if (typeof savegame.cooldowntimes !== "undefined") cooldowntimes = savegame.cooldowntimes;
    if (typeof savegame.cooldowntimeleft !== "undefined")
      cooldowntimeleft = savegame.cooldowntimeleft;
    if (typeof savegame.spell1unlock !== "undefined") spell1unlock = savegame.spell1unlock;
    if (typeof savegame.spell2unlock !== "undefined") spell2unlock = savegame.spell2unlock;
    if (typeof savegame.spell3unlock !== "undefined") spell3unlock = savegame.spell3unlock;
    if (typeof savegame.redscrollcount !== "undefined") redscrollcount = savegame.redscrollcount;
    if (redscrollcount === 1) {
      document.getElementById("redspell").style.backgroundImage =
        "url(images/spells/red_spell.webp)";
    }
    if (typeof savegame.greenscrollcount !== "undefined")
      greenscrollcount = savegame.greenscrollcount;
    if (greenscrollcount === 1) {
      document.getElementById("greenspell").style.backgroundImage =
        "url(images/spells/green_spell.webp)";
    }
    if (typeof savegame.bluescrollcount !== "undefined") bluescrollcount = savegame.bluescrollcount;
    if (bluescrollcount === 1) {
      document.getElementById("bluespell").style.backgroundImage =
        "url(images/spells/blue_spell.webp)";
    }
    if (typeof savegame.magentaspellunlock !== "undefined")
      magentaspellunlock = savegame.magentaspellunlock;
    if (magentaspellunlock === 1) {
      document.getElementById("magentaspell").setAttribute("onclick", "castmagentaspell()");
      document.getElementById("magentaspell").style.backgroundImage =
        "url(images/spells/magenta_spell.webp)";
    }
    if (typeof savegame.cauldron !== "undefined") cauldron = savegame.cauldron;
    if (typeof savegame.study !== "undefined") study = savegame.study;
    if (typeof savegame.feed !== "undefined") feed = savegame.feed;
    if (typeof savegame.feedperson !== "undefined") feedperson = savegame.feedperson;
    if (typeof savegame.drink !== "undefined") drink = savegame.drink;
    if (typeof savegame.cauldroncost !== "undefined") cauldroncost = savegame.cauldroncost;
    if (typeof savegame.studycost !== "undefined") studycost = savegame.studycost;
    if (typeof savegame.feedcost !== "undefined") feedcost = savegame.feedcost;
    if (typeof savegame.feedpersoncost !== "undefined") feedpersoncost = savegame.feedpersoncost;
    if (typeof savegame.drinkcost !== "undefined") drinkcost = savegame.drinkcost;
    //tasks
    if (typeof savegame.tasksCompleted !== "undefined") tasksCompleted = savegame.tasksCompleted;
    if (typeof savegame.colorGoal !== "undefined")
      document.getElementById("taskColor").innerHTML = savegame.colorGoal;
    if (typeof savegame.colorGoalColor !== "undefined")
      document.getElementById("taskColor").style.color = String(savegame.colorGoalColor);
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
    if (colors.cyan > 0) {
      document.getElementById("tabcyan").style.display = "block";
    }
    if (tasksCompleted > 99) {
      document.getElementById("tabmagenta").style.display = "block";
      document.getElementById("holyalbertomode").style.display = "block";
    }
    if (tasksCompleted === 0) {
      document.getElementById("tabs").style.width = "calc(250px/3)";
    } else if (tasksCompleted === 1) {
      document.getElementById("tabs").style.width = "calc(250px/3*2)";
    } else {
      document.getElementById("tabs").style.width = "250px";
    }
    if (typeof savegame.streamlinedTaskColorGoal !== "undefined")
      streamlinedTaskColorGoal = savegame.streamlinedTaskColorGoal;
    if (typeof savegame.taskColorGoalRed !== "undefined")
      taskColorGoalRed = savegame.taskColorGoalRed;
    document.getElementById("taskGoalAmountRed").innerHTML = formatNumber(
      Math.floor(taskColorGoalRed)
    );
    if (typeof savegame.taskColorGoalGreen !== "undefined")
      taskColorGoalGreen = savegame.taskColorGoalGreen;
    document.getElementById("taskGoalAmountGreen").innerHTML = formatNumber(
      Math.floor(taskColorGoalGreen)
    );
    if (typeof savegame.taskColorGoalBlue !== "undefined")
      taskColorGoalBlue = savegame.taskColorGoalBlue;
    document.getElementById("taskGoalAmountBlue").innerHTML = formatNumber(
      Math.floor(taskColorGoalBlue)
    );
    if (typeof savegame.taskRewardColor !== "undefined") taskRewardColor = savegame.taskRewardColor;
    if (typeof savegame.taskRewardCount !== "undefined") taskRewardCount = savegame.taskRewardCount;
    document.getElementById("taskReward").innerHTML =
      String(Math.round(savegame.taskRewardCount)) + " " + savegame.taskRewardColor;
    if (typeof savegame.taskBooster !== "undefined") taskBooster = savegame.taskBooster;
    //
    //
    //
    //
    //red, green & blue

    document.getElementById("redcount").innerHTML = "red: " + formatNumber(Math.floor(colors.red));
    document.getElementById("greencount").innerHTML =
      "green: " + formatNumber(Math.floor(colors.green));
    document.getElementById("bluecount").innerHTML =
      "blue: " + formatNumber(Math.floor(colors.blue));
    document.getElementById("yellowcount").innerHTML =
      "yellow: " + formatNumber(Math.floor(colors.yellow));

    //load upgrades (must come after governmentfunding loading to update properly)

    console.log("loaded");
    loaded = 1;
  } else {
    console.log("no saved game");
    loaded = 1;
  }

  BasicYellowUpgrade.loadUpgrades();
  BasicColorUpgrade.loadUpgrades();
  OneTimeColorUpgrade.loadUpgrades();
}
