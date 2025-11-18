// ):
//VARIABLES
/*window.colors = {
  red: 10,
  green: 0,
  blue: 0,
  yellow: 0,
  cyan: 0,
  magenta: 0,
  magic: 0,
  black: 0,
  white: 0,
};*/

//END VARIABLES

//LOADING (VARIABLES)

// most important one bc yea oh nvm this is kinda useless
//var save = {
//  red: red,
//  redFilter.count: redFilter.count,
//};

document.getElementById("redcount").innerHTML = "red: " + formatNumber(Math.floor(colors.red));
document.getElementById("greencount").innerHTML =
  "green: " + formatNumber(Math.floor(colors.green));
document.getElementById("bluecount").innerHTML = "blue: " + formatNumber(Math.floor(colors.blue));

// tabCall("red","rgb(200, 25, 25)", "rgb(20,0,0)", "0px 0px 10px red, 0 0 10px rgb(125,0,0)");

let colorNames = ["red", "green", "blue", "yellow", "cyan", "magenta", "black", "white"];

function tabCall(color, textColorDark, textColorBright, backgroundColor, textShadow, borderColor) {
  tab = color;
  document.getElementById("saving").style.color = textColorBright;
  document.getElementById("nerdmodetext").style.color = textColorBright;
  document.getElementById("tabs").style.backgroundColor = backgroundColor;
  document.getElementById("top").style.color = color;
  document.getElementById("tasks").style.color = textColorDark;
  document.getElementById("tasks").style.borderColor = borderColor;
  document.getElementById("reward").style.borderColor = borderColor;
  document.getElementById("body").style.textShadow = textShadow;
  document.getElementById("body").style.backgroundColor = backgroundColor;

  for (let i = 0; i <= colorNames.length - 1; i++) {
    document.getElementById(colorNames[i]).style.display = "none";
    if (colorNames[i] === "cyan") {
      document.getElementById("submitTaskButton").classList.remove("cyansubmit");
    } else {
      document.getElementById("submitTaskButton").classList.remove(colorNames[i] + "upgrades");
    }
  }
  document.getElementById(color).style.display = "block";
  document.getElementById("submitTaskButton").classList.add(color + "upgrades");
}

function showtab(x) {
  //red
  if (x === "red") {
    tabCall(
      "red",
      "rgb(200, 25, 25)",
      "rgb(200, 25, 25)",
      "rgb(20,0,0)",
      "0px 0px 10px red, 0 0 10px rgb(125,0,0)",
      "rgb(200, 25, 25)"
    );
  }
  //green
  if (x === "green") {
    tabCall(
      "green",
      "rgb(0, 219, 0)",
      "green",
      "rgb(0, 20, 0)",
      "0px 0px 10px green, 0 0 10px rgb(0,125,0)",
      "rgb(0, 219, 0)"
    );
    //green scroll interferes with tasks
    if (dialoguestate >= 14 && greenscrollcount === 0) {
      document.getElementById("submitTaskButton").style.position = "absolute";
      document.getElementById("submitTaskButton").style.width = "50%";
      document.getElementById("submitTaskButton").style.borderRightStyle = "none";
      document.getElementById("greenscroll").style.borderLeftStyle = "none";
      document.getElementById("greenscroll").style.display = "inline-block";
    } else {
      document.getElementById("submitTaskButton").style.position = "relative";
      document.getElementById("submitTaskButton").style.width = "100%";
      document.getElementById("submitTaskButton").style.borderRightStyle = "";
      document.getElementById("greenscroll").style.borderLeftStyle = "";
      document.getElementById("greenscroll").style.display = "none";
    }
  } else {
    //no greenscroll if no green tab
    document.getElementById("submitTaskButton").style.position = "relative";
    document.getElementById("submitTaskButton").style.width = "100%";
    document.getElementById("submitTaskButton").style.borderRightStyle = "";
    document.getElementById("greenscroll").style.borderLeftStyle = "";
    document.getElementById("greenscroll").style.display = "none";
  }
  //blue
  if (x === "blue") {
    tabCall(
      "blue",
      " rgb(50, 50, 255)",
      "blue",
      "rgb(0,0,20)",
      "0px 0px 10px blue, 0 0 10px rgb(0,0,125)",
      " rgb(50, 50, 255)"
    );
  }
  //yellow
  if (x === "yellow") {
    tabCall(
      "yellow",
      "rgb(168, 140, 0)",
      "rgb(168, 140, 0)",
      "rgb(44, 44, 0)",
      "0px 0px 10px rgb(148, 148, 0), 0 0 10px rgb(125,125,0)",
      "rgb(168, 140, 0)"
    );
  }
  //cyan
  if (x === "cyan") {
    tabCall(
      "cyan",
      "rgb(0, 180, 190)",
      "rgb(0, 180, 190)",
      "rgb(0, 44, 44)",
      "0px 0px 10px cyan, 0 0 10px rgb(0,125,125)",
      "rgb(0, 180, 190)"
    );
  }
  //magenta
  if (x === "magenta") {
    tabCall(
      "magenta",
      "magenta",
      "magenta",
      "rgb(44, 0, 44)",
      "rgb(255 0 238) 0px 0px 10px, rgb(255, 126, 126) 0px 0px 10px",
      "magenta"
    );
  }
  //black
  if (x === "black") {
    tabCall(
      "black",
      "black",
      "black",
      "black",
      "white 0px 0px 5px, rgb(255, 255, 255) 0px 0px 10px, 0 0 2px white",
      "#868686"
    );
    document.getElementById("blackholecontainer").style.display = "flex";
    document.getElementById("tasks").style.fontWeight = "600";
  } else if (x === "black2") {
    //i aint touching this, this is outta my league
    document.getElementById("nerdmodetext").style.color = "black";
    document.getElementById("blackholecontainer").style.display = "flex";
    document.getElementById("tasks").style.fontWeight = "600";
    tab = "black2";

    for (let i = 0; i <= colorNames.length - 1; i++) {
      document.getElementById(colorNames[i]).style.display = "none";
      if (colorNames[i] === "cyan") {
        document.getElementById("submitTaskButton").classList.remove("cyansubmit");
      } else {
        document.getElementById("submitTaskButton").classList.remove(colorNames[i] + "upgrades");
      }
    }
    document.getElementById("black2").style.display = "block";
    document.getElementById("tabs").style.backgroundColor = "rgb(0,0,0)";
    document.getElementById("top").style.color = "black";
    document.getElementById("tasks").style.color = "black";
    document.getElementById("tasks").style.borderColor = "#868686";
    document.getElementById("reward").style.borderColor = "#868686";
    document.getElementById("body").style.textShadow =
      "white 0px 0px 5px, rgb(255, 255, 255) 0px 0px 10px, 0 0 2px white";
    document.getElementById("submitTaskButton").classList.add("blackupgrades");
    document.getElementById("body").style.backgroundColor = "rgb(0, 0, 0)";
  } else {
    document.getElementById("black2").style.display = "none";
    document.getElementById("tasks").style.fontWeight = "";
    document.getElementById("blackholecontainer").style.display = "none";
  }

  if (x === "white") {
    tabCall(
      "white",
      "white",
      "white",
      "rgb(80, 80, 80)",
      "0px 0px 5px white, 0 0 10px white",
      "white"
    );
  }
}
//surprisingly small calc functions

//
//
//
//

//
//
//
//

//loop
const loopID = window.setInterval(function () {
  if (visibilityState === "visible" || buttonpress === false) {
    if (loaded === 1) {
      // if u showed this code to me when i was starting this i would have died on the spot

      //"update" game for ppl
      if (
        document.getElementById("tabmagenta").style.display === "block" &&
        redscrollcount + greenscrollcount + bluescrollcount === 3 &&
        dialoguestate === 14
      ) {
        chatupdate();
      }
      //if loaded === 1 is important for keeping everything from
      //doing stuff its not supposed to before gameload
      window.scrollBy(-window.innerWidth, 0);
      //some nerdy stuff
      //stars fading and spawning
      if (tab === "black") {
        starFadeOut();
        starSpawn();
      }
      //nerdmode text "margins" (actually width in disguise)
      document.getElementById("nerdmodetext").style.width =
        "calc(50% - 320px - " +
        String(document.getElementById("tabwhite").getBoundingClientRect().width) +
        "px)";
      //feed the users info
      document.getElementById("redcountup").innerHTML =
        "per second: " + formatNumber(Math.round(debugrednumber * 10) / 10);
      document.getElementById("greencountup").innerHTML =
        "per second: " + formatNumber(Math.round(debuggreennumber * 10) / 10);
      document.getElementById("bluecountup").innerHTML =
        "per second: " + formatNumber(Math.round(debugbluenumber * 10) / 10);
      //calc the black
      calcblack();
      //change task goal w streamlined tasks
      streamlinedTaskColorGoal.red = taskColorGoalRed / Math.pow(2, streamlinedtaskscount);
      streamlinedTaskColorGoal.green = taskColorGoalGreen / Math.pow(2, streamlinedtaskscount);
      streamlinedTaskColorGoal.blue = taskColorGoalBlue / Math.pow(2, streamlinedtaskscount);
      //change text
      document.getElementById("taskGoalAmountRed").innerHTML = formatNumber(
        Math.round(streamlinedTaskColorGoal.red)
      );
      document.getElementById("taskGoalAmountGreen").innerHTML = formatNumber(
        Math.round(streamlinedTaskColorGoal.green)
      );
      document.getElementById("taskGoalAmountBlue").innerHTML = formatNumber(
        Math.round(streamlinedTaskColorGoal.blue)
      );
      //devmode!!
      if (dev == 1) {
        document.getElementById("devmode").style.display = "block";
      } else {
        document.getElementById("devmode").style.display = "none";
      }
      //white and black tabs
      if (whiteunlock == 1) {
        document.getElementById("tabwhite").style.display = "block";
      } else {
        document.getElementById("tabwhite").style.display = "none";
      }
      if (blackunlock == 1) {
        document.getElementById("tabblack").style.display = "block";
      } else {
        document.getElementById("tabblack").style.display = "none";
      }
      //update
      document.getElementById("cauldroncount").innerHTML = cauldron;
      document.getElementById("studycount").innerHTML = study;
      document.getElementById("feedcount").innerHTML = feed;
      document.getElementById("feedpersoncount").innerHTML = feedperson;
      document.getElementById("drinkcount").innerHTML = drink;

      //support for multiple counters !! use classes !!
      const redcounters = document.querySelectorAll(".redcount");
      redcounters.forEach((counter) => {
        counter.textContent = "red: " + formatNumber(Math.floor(colors.red));
      });
      const greencounters = document.querySelectorAll(".greencount");
      greencounters.forEach((counter) => {
        counter.textContent = "green: " + formatNumber(Math.floor(colors.green));
      });
      const bluecounters = document.querySelectorAll(".bluecount");
      bluecounters.forEach((counter) => {
        counter.textContent = "blue: " + formatNumber(Math.floor(colors.blue));
      });

      const yellowcounters = document.querySelectorAll(".yellowcount");
      yellowcounters.forEach((counter) => {
        counter.textContent = "yellow: " + formatNumber(Math.floor(colors.yellow));
      });

      const cyancounters = document.querySelectorAll(".cyancount");
      cyancounters.forEach((counter) => {
        counter.textContent = "cyan: " + formatNumber(Math.floor(colors.cyan));
      });

      const magentacounters = document.querySelectorAll("#magentacount");
      magentacounters.forEach((counter) => {
        counter.textContent = document.getElementById("magentacount").innerHTML =
          "magenta: " + formatNumber(Math.floor(colors.magenta));
      });
      //timo building 5 does not give 5k of the stuff per second it boosts production
      //mb
      //im rly struggling to read this code
      //yea idk any better way sry
      //timo the nerdmode text overlaps with cyan upgrades
      //fixed
      //for any onlookers, this is to change the nerdmode text for every. single. upgrade.
      //death

      if (document.querySelector("#redbuild1:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML = "gives 0.5 red/s";
      } else if (document.querySelector("#redbuild2:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML = "gives  5 red/s";
      } else if (document.querySelector("#redbuild3:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML = "gives  50 red/s";
      } else if (document.querySelector("#redbuild4:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML = "gives  500 red/s";
      } else if (document.querySelector("#redbuild5:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "boosts red production by 50% (additive)";
      } else if (document.querySelector("#greenbuild1:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML = "gives 0.5 green/s";
      } else if (document.querySelector("#greenbuild2:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML = "gives  5 green/s";
      } else if (document.querySelector("#greenbuild3:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML = "gives  50 green/s";
      } else if (document.querySelector("#greenbuild4:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML = "gives  500 green/s";
      } else if (document.querySelector("#greenbuild5:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "boosts green production by 50% (additive)";
      } else if (document.querySelector("#bluebuild1:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML = "gives 0.5 blue/s";
      } else if (document.querySelector("#bluebuild2:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML = "gives  5 blue/s";
      } else if (document.querySelector("#bluebuild3:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML = "gives  50 blue/s";
      } else if (document.querySelector("#bluebuild4:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML = "gives  500 blue/s";
      } else if (document.querySelector("#bluebuild5:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "boosts blue production by 50% (additive)";
      } else if (document.querySelector("#redupgrade1:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "multiplies red filter gain by the amount of red filters"; //maybe here
      } else if (document.querySelector("#redupgrade3:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "multiplies red pointer gain by the amount of red pointers"; //maybe here
      } else if (document.querySelector("#redupgrade2:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "multiplies gain of other colors by log1p(red)"; //here
      } else if (document.querySelector("#greenupgrade1:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "multiplies green filter gain by the amount of green filters"; //maybe here
      } else if (document.querySelector("#greenupgrade3:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "multiplies green pointer gain by the amount of green pointers"; //maybe here
      } else if (document.querySelector("#greenupgrade2:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "multiplies gain of other colors by log1p(green)"; //here
      } else if (document.querySelector("#blueupgrade1:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "multiplies blue filter gain by the amount of blue filters"; //maybe here
      } else if (document.querySelector("#blueupgrade3:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "multiplies blue pointer gain by the amount of blue pointers"; //maybe here
      } else if (document.querySelector("#blueupgrade2:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "multiplies gain of other colors by log1p(blue)"; //and here
      } else if (document.querySelector("#redscroll:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML = "???";
      } else if (document.querySelector("#greenscroll:hover") != null) {
        document.getElementById("nerdmodetext").innerHTML = "???";
        nerdtimer = 0;
      } else if (document.querySelector("#bluescroll:hover") != null) {
        document.getElementById("nerdmodetext").innerHTML = "???";
      } else if (document.querySelector("#yellowupgrade1:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "divide all upgrade prices by 10 * governmentfundinglevel";
      } else if (document.querySelector("#yellowupgrade2:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "multiply rgb gain by (log(yellow) / 10) * √colorharmonylevel";
      } else if (document.querySelector("#yellowupgrade3:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "multiply rgb gain by 2 * largerprismslevel";
      } else if (document.querySelector("#yellowupgrade4:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "divide task goal by 2^streamlinedtaskslevel";
      } else if (document.querySelector("#yellowupgrade5:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "multiply task reward by yellowsynergylevel/4";
      } else if (document.querySelector("#yellowupgrade6:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "gives the lowest of the two values in yellow/s: 200 * redoverflowlevel or redgain/s / 1e12";
      } else if (document.querySelector("#yellowupgrade7:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "gives the lowest of the two values in yellow/s: 200 * greenoverflowlevel or greengain/s / 1e12";
      } else if (document.querySelector("#yellowupgrade8:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "gives the lowest of the two values in yellow/s: 200 * blueoverflowlevel or bluegain/s / 1e12";
      } else if (document.querySelector("#yellowupgrade9:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "multiply rgb gain by tricolorboostlevel * yellow / 2000)";
      } else if (document.querySelector("#yellowupgrade10:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "increase the chance with +1% to get a reward of taskReward * 10 * taskmasterylevel";
      } else if (document.querySelector("#yellowupgrade11:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "multiply task reward by (goldenmultiplierlevel * tasksCompleted) / 1000";
      } else if (document.querySelector("#yellowupgrade12:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "multiply weak synergy effect by  5√strongersynergylevel";
      } else if (document.querySelector("#yellowupgrade13:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "multiply pointer gain by 2√focusedpointerslevel";
      } else if (document.querySelector("#yellowupgrade14:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "multiply filter gain by 2√finerfilterslevel";
      } else if (document.querySelector("#yellowupgrade15:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "multiply nanometerwave effect by Math.log(micrometerwavelevel) * 1.5";
      } else if (document.querySelector("#yellowupgrade16:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "buy 10 cyan for 1e15 red, green, blue and 1200 yellow";
      } else if (document.querySelector("#cyanbuildings:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "buy 0.5 upgrades/s for every level of this upgrade if you have enough money";
      } else if (document.querySelector("#magentabuild1:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML = "gives 0.5 magic/s";
      } else if (document.querySelector("#magentabuild2:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML = "gives 5 magic/s";
      } else if (document.querySelector("#magentabuild3:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML = "gives 50 magic/s";
      } else if (document.querySelector("#magentabuild4:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML = "gives 500 magic/s"; //maybe here
      } else if (document.querySelector("#blueupgrade3:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "multiplies blue pointer gain by the amount of blue pointers"; //maybe here
      } else if (document.querySelector("#blueupgrade2:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "multiplies gain of other colors by log1p(blue)"; //and here
      } else if (document.querySelector("#redscroll:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML = "???";
      } else if (document.querySelector("#greenscroll:hover") != null) {
        document.getElementById("nerdmodetext").innerHTML = "???";
        nerdtimer = 0;
      } else if (document.querySelector("#bluescroll:hover") != null) {
        document.getElementById("nerdmodetext").innerHTML = "???";
      } else if (document.querySelector("#yellowupgrade1:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "divide all upgrade prices by 0.1 * governmentfundinglevel";
      } else if (document.querySelector("#yellowupgrade2:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "multiply rgb gain by (log1p(yellow) / 10) * (colorharmonylevel / √colorharmonylevel)";
      } else if (document.querySelector("#yellowupgrade3:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "multiply rgb gain by 2 * largerprismslevel";
      } else if (document.querySelector("#yellowupgrade4:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "divide task goal by 2^streamlinedtaskslevel";
      } else if (document.querySelector("#yellowupgrade5:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "multiply task reward by yellowsynergylevel * 0.25";
      } else if (document.querySelector("#yellowupgrade6:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "gives the lowest of the two values in yellow/s: 200 * redoverflowlevel or redgain/s / 1e12";
      } else if (document.querySelector("#yellowupgrade7:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "gives the lowest of the two values in yellow/s: 200 * greenoverflowlevel or greengain/s / 1e12";
      } else if (document.querySelector("#yellowupgrade8:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "gives the lowest of the two values in yellow/s: 200 * blueoverflowlevel or bluegain/s / 1e12";
      } else if (document.querySelector("#yellowupgrade9:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "multiply rgb gain by tricolorboostlevel * 0.5 * (yellow / 1000)";
      } else if (document.querySelector("#yellowupgrade10:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "increase the chance with +1% to get a reward of taskReward * 10 * taskmasterylevel";
      } else if (document.querySelector("#yellowupgrade11:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "multiply task reward by (goldenmultiplierlevel * tasksCompleted) / 1000";
      } else if (document.querySelector("#yellowupgrade12:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "multiply weak synergy effect by  √strongersynergylevel * 5";
      } else if (document.querySelector("#yellowupgrade13:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "multiply pointer gain by √focusedpointerslevel * 2";
      } else if (document.querySelector("#yellowupgrade14:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "multiply filter gain by √finerfilterslevel * 2";
      } else if (document.querySelector("#yellowupgrade15:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "multiply nanometerwave effect by Math.log1p(micrometerwavelevel) * 1.5";
      } else if (document.querySelector("#yellowupgrade16:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "buy 10 cyan for 1e15 red, green, blue and 1200 yellow";
      } else if (document.querySelector("#cyanbuildings:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "buy 0.5 upgrades/s for every level of this upgrade if you have enough money";
      } else if (document.querySelector("#magentabuild1:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML = "gives 0.5 magic/s";
      } else if (document.querySelector("#magentabuild2:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML = "gives 5 magic/s";
      } else if (document.querySelector("#magentabuild3:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML = "gives 50 magic/s";
      } else if (document.querySelector("#magentabuild4:hover") != null) {
        nerdtimer = 0;

        document.getElementById("nerdmodetext").innerHTML = "gives 500 magic/s";
      } else if (document.querySelector("#magentabuild5:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML = "gives 5000 magic/s";
      } else if (document.querySelector("#magentaspell:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "converts all your magic into magenta at a ratio of 3 magic to 1 magenta";
      } else if (document.querySelector("#redspell:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "gives 1 second worth of red for every magic put into it";
      } else if (document.querySelector("#greenspell:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "gives 1 second worth of green for every magic put into it";
      } else if (document.querySelector("#bluespell:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "gives 1 second worth of blue for every magic put into it";
      } else if (document.querySelector("#yellow1spell:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "gives 1 millisecond worth of yellow for every magic put into it";
      } else if (document.querySelector("#cyan1spell:hover") != null) {
        nerdtimer = 0;
        document.getElementById("nerdmodetext").innerHTML =
          "converts magic into cyan at a 100:1 ratio";
      } else {
        if (nerdtimer > 1) {
          document.getElementById("nerdmodetext").innerHTML =
            "hover over an upgrade to see what it does.";
          nerdtimer = 0;
        } else {
          nerdtimer += 0.01;
        }
      }
      //man

      const div = document.querySelector("div#blackholecontainer");

      const rect = div.getBoundingClientRect();
      blackholex = rect.left + rect.width / 2;
      blackholey = rect.top + rect.height / 2;
      const div2 = document.querySelector("button#enterbutton");
      const rect2 = div2.getBoundingClientRect();
      enterbuttonx = rect2.width / 1;
      enterbuttony = rect2.height / 1;
      blackholex2 = blackholex - enterbuttonx / 2;
      blackholey2 = blackholey - enterbuttony / 4;
      document.getElementById("enterdiv").style.left = `${blackholex2}px`;
      document.getElementById("enterdiv").style.top = `${blackholey2}px`;

      //wuuuuuuuuuuuuuuugh
      document.getElementById("taskAmountRed").innerHTML = formatNumber(Math.floor(colors.red));
      document.getElementById("taskAmountBlue").innerHTML = formatNumber(Math.floor(colors.blue));
      document.getElementById("taskAmountGreen").innerHTML = formatNumber(Math.floor(colors.green));
      document.getElementById("yellowcount").innerHTML =
        "yellow: " + formatNumber(Math.floor(colors.yellow));
      document.getElementById("magentacount").innerHTML =
        "magenta: " + formatNumber(Math.floor(colors.magenta));
      document.getElementById("cyancount").innerHTML =
        "cyan: " + formatNumber(Math.floor(colors.cyan));
      //ugh
      //im moving the yellow upgrades update function somewhere else
      updateyellow();
      //unlocks
      if (debugrednumber >= 5000 && achievement.have1e5red === true) {
        document.getElementById("redupgrades").style.display = "flex";
        document.getElementById("redupgradesbox").style.display = "grid";
        document.getElementById("redupgrade1").style.display = "block";
      }
      if (debugrednumber >= 50000 && achievement.have1e5red === true) {
        document.getElementById("redupgrades").style.display = "flex";
        document.getElementById("redupgradesbox").style.display = "grid";
        document.getElementById("redupgrade2").style.display = "block";
        document.getElementById("redupgrade3").style.display = "inline-block";
      }
      if (debuggreennumber >= 5000 && achievement.have1e6green === true) {
        document.getElementById("greenupgrades").style.display = "flex";
        document.getElementById("greenupgradesbox").style.display = "grid";
        document.getElementById("greenupgrade1").style.display = "block";
      }
      if (debuggreennumber >= 50000 && achievement.have1e6green === true) {
        document.getElementById("greenupgrades").style.display = "flex";
        document.getElementById("greenupgradesbox").style.display = "grid";
        document.getElementById("greenupgrade2").style.display = "block";
        document.getElementById("greenupgrade3").style.display = "block";
      }
      if (debugbluenumber >= 5000 && achievement.have1e7blue === true) {
        document.getElementById("blueupgrades").style.display = "flex";
        document.getElementById("blueupgradesbox").style.display = "grid";
        document.getElementById("blueupgrade1").style.display = "block";
      }
      if (debugbluenumber >= 50000 && achievement.have1e7blue === true) {
        document.getElementById("blueupgrades").style.display = "flex";
        document.getElementById("blueupgradesbox").style.display = "grid";
        document.getElementById("blueupgrade2").style.display = "block";
        document.getElementById("blueupgrade3").style.display = "block";
      }
      if (dialoguestate >= 14) {
        if (redscrollcount === 0) {
          document.getElementById("redscroll").style.display = "inline-block";
        }
        if (bluescrollcount === 0) {
          document.getElementById("bluescroll").style.display = "flex";
        }
      }
      //idk
      if (blackholeanimationdone == 1) {
        document.getElementById("blackholeintro").style.display = "none";
        document.getElementById("blackhole").style.scale = "3";
        document.getElementById("blackholecounter").style.display = "block";
        document.getElementById("enterdiv").style.display = "block";
      } else {
        document.getElementById("enterdiv").style.display = "none";
      }

      //and then make the unlocks work if they need extra code
      var save2 = {
        dev: dev,
      };
      localStorage.setItem("save2", JSON.stringify(save2));
      //save
      savecounter++;
      if (savecounter > savetime / 10) {
        save();
        if (buttonpress === true) {
          console.log("saved");
        }
        savecounter = 0;
      }

      //auto buy
      redfilterautomationtimer += Math.min(20 * cyanBuyTimeBoost, redfilterautomationcount);
      redpointerautomationtimer += Math.min(20 * cyanBuyTimeBoost, redpointerautomationcount);
      bigredfilterautomationtimer += Math.min(20 * cyanBuyTimeBoost, bigredfilterautomationcount);
      bigredpointerautomationtimer += Math.min(20 * cyanBuyTimeBoost, bigredpointerautomationcount);
      rednanometerwaveautomationtimer += Math.min(
        20 * cyanBuyTimeBoost,
        rednanometerwaveautomationcount
      );
      greenfilterautomationtimer += Math.min(20 * cyanBuyTimeBoost, greenfilterautomationcount);
      greenpointerautomationtimer += Math.min(20 * cyanBuyTimeBoost, greenpointerautomationcount);
      biggreenfilterautomationtimer += Math.min(
        20 * cyanBuyTimeBoost,
        biggreenfilterautomationcount
      );
      biggreenpointerautomationtimer += Math.min(
        20 * cyanBuyTimeBoost,
        biggreenpointerautomationcount
      );
      greennanometerwaveautomationtimer += Math.min(
        20 * cyanBuyTimeBoost,
        greennanometerwaveautomationcount
      );
      bluefilterautomationtimer += Math.min(20 * cyanBuyTimeBoost, bluefilterautomationcount);
      bluepointerautomationtimer += Math.min(20 * cyanBuyTimeBoost, bluepointerautomationcount);
      bigbluefilterautomationtimer += Math.min(20 * cyanBuyTimeBoost, bigbluefilterautomationcount);
      bigbluepointerautomationtimer += Math.min(
        20 * cyanBuyTimeBoost,
        bigbluepointerautomationcount
      );
      bluenanometerwaveautomationtimer += Math.min(
        20 * cyanBuyTimeBoost,
        bluenanometerwaveautomationcount
      );
      document.getElementById("blackcount").innerHTML = formatNumber(colors.black);
      if (redfilterautomationtimer >= 200 && redtogglestate) {
        redfilterautomationtimer = 0;
        redFilter.buy(1);
      }
      if (greenfilterautomationtimer >= 200 && greentogglestate) {
        greenfilterautomationtimer = 0;
        greenFilter.buy(1);
      }
      if (bluefilterautomationtimer >= 200 && bluetogglestate) {
        bluefilterautomationtimer = 0;
        blueFilter.buy(1);
      }
      if (redpointerautomationtimer >= 200 && redtogglestate) {
        redpointerautomationtimer = 0;
        redPointer.buy(1);
      }
      if (greenpointerautomationtimer >= 200 && greentogglestate) {
        greenpointerautomationtimer = 0;
        greenPointer.buy(1);
      }
      if (bluepointerautomationtimer >= 200 && bluetogglestate) {
        bluepointerautomationtimer = 0;
        bluePointer.buy(1);
      }
      if (bigredfilterautomationtimer >= 200 && redtogglestate) {
        bigredfilterautomationtimer = 0;
        bigRedFilter.buy(1);
      }
      if (biggreenfilterautomationtimer >= 200 && greentogglestate) {
        biggreenfilterautomationtimer = 0;
        bigGreenFilter.buy(1);
      }
      if (bigbluefilterautomationtimer >= 200 && bluetogglestate) {
        bigbluefilterautomationtimer = 0;
        bigBlueFilter.buy(1);
      }
      if (bigredpointerautomationtimer >= 200 && redtogglestate) {
        bigredpointerautomationtimer = 0;
        bigRedPointer.buy(1);
      }
      if (biggreenpointerautomationtimer >= 200 && greentogglestate) {
        biggreenpointerautomationtimer = 0;
        bigGreenPointer.buy(1);
      }
      if (bigbluepointerautomationtimer >= 200 && bluetogglestate) {
        bigbluepointerautomationtimer = 0;
        bigBluePointer.buy(1);
      }
      if (rednanometerwaveautomationtimer >= 200 && redtogglestate) {
        rednanometerwaveautomationtimer = 0;
        redNanometerWave.buy(1);
      }
      if (greennanometerwaveautomationtimer >= 200 && greentogglestate) {
        greennanometerwaveautomationtimer = 0;
        greenNanometerwave.buy(1);
      }
      if (bluenanometerwaveautomationtimer >= 200 && bluetogglestate) {
        bluenanometerwaveautomationtimer = 0;
        blueNanometerwave.buy(1);
      }
      //magic stuff

      //increase magic!! woo
      calcmagic(
        //how do i do this,,
        cauldron * 1 + study * 10 + feed * 100 + feedperson * 1000 + drink * 10000
      );
      //increase red
      calcred(
        // filter
        (((((redFilter.count *
          (redFilter.count * redUpgrade1.count + 1) *
          (1 + Math.sqrt(finerfilterscount) * 2) +
          // pointer
          redPointer.count *
            10 *
            (redPointer.count * redUpgrade3.count + 1) *
            (1 + Math.sqrt(focussedpointerscount) * 2) +
          // bigredfilter
          bigRedFilter.count * 100 * (1 + Math.sqrt(finerfilterscount) * 2) +
          // bigredpointer
          bigRedPointer.count * 1000 * (1 + Math.sqrt(focussedpointerscount) * 2)) *
          // rednanometerwave
          (redNanometerWave.count * 0.5 + 1) *
          (1 + Math.log1p(micrometerwavecount) * 1.5) *
          // weaksynergygreen
          (Math.log1p(colors.green) * greenUpgrade2.count + 1)) /
          (10 * greenUpgrade2.count + 1)) *
          // weaksynergyblue
          (Math.log1p(colors.blue) * blueUpgrade2.count + 1)) /
          (10 * blueUpgrade2.count + 1)) *
          // stronger synergy
          (1 + Math.sqrt(strongersynergycount) * 5) *
          // task booster
          taskBooster *
          // yellow larger prisms
          (1 + 2 * largerprismscount) *
          // yellow color harmony
          (1 +
            (Math.log1p(colors.yellow) / 10) *
              (colorharmonycount / Math.sqrt(colorharmonycount + 1))) *
          // tri-color boost
          (1 + tricolorboostcount * 0.5 * (colors.yellow / 1000)) *
          // black
          (blackboost + 1)
      );
      //increase green
      calcgreen(
        // filter
        (((((greenFilter.count *
          (greenFilter.count * greenUpgrade1.count + 1) *
          (1 + Math.sqrt(finerfilterscount) * 2) +
          // pointer
          greenPointer.count *
            10 *
            (greenPointer.count * greenUpgrade3.count + 1) *
            (1 + Math.sqrt(focussedpointerscount) * 2) +
          // biggreenfilter
          bigGreenFilter.count * 100 * (1 + Math.sqrt(finerfilterscount) * 2) +
          // biggreenpointer
          bigGreenPointer.count * 1000 * (1 + Math.sqrt(focussedpointerscount) * 2)) *
          // greennanometerwave
          (greenNanometerWave.count * 0.5 + 1) *
          (1 + Math.log1p(micrometerwavecount) * 1.5) *
          // weaksynergyred
          (Math.log1p(colors.red) * redUpgrade2.count + 1)) /
          (10 * redUpgrade2.count + 1)) *
          // weaksynergyblue
          (Math.log1p(colors.blue) * blueUpgrade2.count + 1)) /
          (10 * blueUpgrade2.count + 1)) *
          // stronger synergy
          (1 + Math.sqrt(strongersynergycount) * 5) *
          // task booster
          taskBooster *
          // yellow larger prisms
          (1 + 2 * largerprismscount) *
          // yellow color harmony
          (1 +
            (Math.log1p(colors.yellow) / 10) *
              (colorharmonycount / Math.sqrt(colorharmonycount + 1))) *
          // tri-color boost
          (1 + tricolorboostcount * 0.5 * (colors.yellow / 1000)) *
          // black
          (blackboost + 1)
      );

      //increase blue
      calcblue(
        // filter
        (((((blueFilter.count *
          (blueFilter.count * blueUpgrade1.count + 1) *
          (1 + Math.sqrt(finerfilterscount) * 2) +
          // pointer
          bluePointer.count *
            10 *
            (bluePointer.count * blueUpgrade3.count + 1) *
            (1 + Math.sqrt(focussedpointerscount) * 2) +
          // bigbluefilter
          bigBlueFilter.count * 100 * (1 + Math.sqrt(finerfilterscount) * 2) +
          // bigbluepointer
          bigBluePointer.count * 1000 * (1 + Math.sqrt(focussedpointerscount) * 2)) *
          // bluenanometerwave
          (blueNanometerWave.count * 0.5 + 1) *
          (1 + Math.log1p(micrometerwavecount) * 1.5) *
          // weaksynergygreen
          (Math.log1p(colors.green) * greenUpgrade2.count + 1)) /
          (10 * greenUpgrade2.count + 1)) *
          // weaksynergyred
          (Math.log1p(colors.red) * redUpgrade2.count + 1)) /
          (10 * redUpgrade2.count + 1)) *
          // stronger synergy
          (1 + Math.sqrt(strongersynergycount) * 5) *
          // task booster
          taskBooster *
          // yellow larger prisms
          (1 + 2 * largerprismscount) *
          // yellow color harmony
          (1 +
            (Math.log1p(colors.yellow) / 10) *
              (colorharmonycount / Math.sqrt(colorharmonycount + 1))) *
          // tri-color boost
          (1 + tricolorboostcount * 0.5 * (colors.yellow / 1000)) *
          // black
          (blackboost + 1)
      );
    }
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
    colors.red >= streamlinedTaskColorGoal.red &&
    colors.green >= streamlinedTaskColorGoal.green &&
    colors.blue >= streamlinedTaskColorGoal.blue
  ) {
    colors.red -= streamlinedTaskColorGoal.red;
    colors.green -= streamlinedTaskColorGoal.green;
    colors.blue -= streamlinedTaskColorGoal.blue;
    tasksCompleted++;
    if (tasksCompleted === 1) {
      taskColorGoalRed = 0;
      taskColorGoalGreen = 255;
      taskColorGoalBlue = 0;
      document.getElementById("taskGoalAmountRed").innerHTML = formatNumber(
        Math.round(taskColorGoalRed)
      );
      document.getElementById("taskGoalAmountGreen").innerHTML = formatNumber(
        Math.round(taskColorGoalGreen)
      );
      document.getElementById("taskGoalAmountBlue").innerHTML = formatNumber(
        Math.round(taskColorGoalBlue)
      );
      document.getElementById("taskColor").innerHTML = "#00FF00";
      document.getElementById("taskColor").style.color = "green";
      document.getElementById("taskColor").style.textShadow = "0 0 10px green";
      document.getElementById("taskReward").innerHTML = "10 blue";
      taskRewardCount = 10;
      taskRewardColor = "blue";
      document.getElementById("tabgreen").style.display = "block";
      document.getElementById("tabs").style.width = "calc(250px/3*2)";
      colors.green += 10;
    } else if (tasksCompleted === 2) {
      taskColorGoalRed = 0;
      taskColorGoalGreen = 0;
      taskColorGoalBlue = 255;
      document.getElementById("taskGoalAmountRed").innerHTML = formatNumber(
        Math.round(taskColorGoalRed)
      );
      document.getElementById("taskGoalAmountGreen").innerHTML = formatNumber(
        Math.round(taskColorGoalGreen)
      );
      document.getElementById("taskGoalAmountBlue").innerHTML = formatNumber(
        Math.round(taskColorGoalBlue)
      );
      document.getElementById("taskColor").innerHTML = "#0000FF";
      document.getElementById("taskColor").style.color = "blue";
      document.getElementById("taskColor").style.textShadow = "0 0 10px blue";
      document.getElementById("taskReward").innerHTML = "2x color gain";
      taskRewardCount = 2;
      taskRewardColor = "x color gain";
      document.getElementById("tabs").style.width = "250px";
      document.getElementById("tabblue").style.display = "block";
      colors.blue += 10;
    } else if (tasksCompleted === 3) {
      taskColorGoalRed = 1100000;
      taskColorGoalGreen = 115000;
      taskColorGoalBlue = 4100;
      document.getElementById("taskGoalAmountRed").innerHTML = formatNumber(
        Math.round(taskColorGoalRed)
      );
      document.getElementById("taskGoalAmountGreen").innerHTML = formatNumber(
        Math.round(taskColorGoalGreen)
      );
      document.getElementById("taskGoalAmountBlue").innerHTML = formatNumber(
        Math.round(taskColorGoalBlue)
      );
      document.getElementById("taskColor").innerHTML = "#6E7329";
      document.getElementById("taskColor").style.color = "rgb(168, 140, 0)";
      document.getElementById("taskColor").style.textShadow = "0 0 10px yellow";
      document.getElementById("taskReward").innerHTML = "10 yellow";
      taskRewardCount = 10;
      taskRewardColor = "yellow";
      taskBooster = 2;
    } else {
      taskColorGoalRed = Math.floor(Math.random() * 255 * 1000 * Math.pow(1.2, tasksCompleted));
      taskColorGoalGreen = Math.floor(Math.random() * 255 * 1000 * Math.pow(1.2, tasksCompleted));
      taskColorGoalBlue = Math.floor(Math.random() * 255 * 1000 * Math.pow(1.2, tasksCompleted));

      rgbToHex(
        Math.round(taskColorGoalRed / (1000 * Math.pow(1.2, tasksCompleted))) +
          ", " +
          Math.round(taskColorGoalGreen / (1000 * Math.pow(1.2, tasksCompleted))) +
          ", " +
          Math.round(taskColorGoalBlue / (1000 * Math.pow(1.2, tasksCompleted)))
      );
      document.getElementById("taskColor").innerHTML = hexResult;
      document.getElementById("taskColor").style.color =
        "rgb(" +
        String(Math.round(taskColorGoalRed / (1000 * Math.pow(1.2, tasksCompleted)))) +
        ", " +
        String(
          Math.round(taskColorGoalGreen / (1000 * Math.pow(1.2, tasksCompleted))) +
            ", " +
            String(Math.round(taskColorGoalBlue / (1000 * Math.pow(1.2, tasksCompleted))) + ")")
        );
      document.getElementById("taskColor").style.textShadow =
        "0px 0px 10px " +
        "rgb(" +
        String(Math.round(taskColorGoalRed / (1000 * Math.pow(1.2, tasksCompleted)))) +
        ", " +
        String(Math.round(taskColorGoalGreen / (1000 * Math.pow(1.2, tasksCompleted)))) +
        ", " +
        String(Math.round(taskColorGoalBlue / (1000 * Math.pow(1.2, tasksCompleted)))) +
        ")";
      document.getElementById("tabyellow").style.display = "block";
      colors.yellow += taskRewardCount;
      taskRewardCount =
        10 *
        (1 + yellowsynergycount * 0.25) *
        (1 + (goldenmultipliercount * tasksCompleted) / 1000);
      if (Math.random() * 100 <= taskmasterycount) {
        colors.yellow += taskRewardCount * 10 * taskmasterycount;
        taskMasteryTrigger = true;
      }
      document.getElementById("yellowcount").innerHTML =
        "yellow: " + formatNumber(Math.floor(colors.yellow));
      if (tasksCompleted === 99) {
        document.getElementById("taskReward").innerHTML =
          String(Math.round(taskRewardCount)) + " " + taskRewardColor + " and 10 magenta";
      } else {
        document.getElementById("taskReward").innerHTML =
          String(Math.round(taskRewardCount)) + " " + taskRewardColor;
      }
      if (tasksCompleted === 100) {
        colors.magenta += 10;
        document.getElementById("tabmagenta").style.display = "block";
        document.getElementById("holyalbertomode").style.display = "block";
        document.getElementById("magentacount").innerHTML =
          "magenta: " + formatNumber(Math.floor(colors.magenta));
      }
    }
  }
}
document.addEventListener("keydown", function (event) {
  if (tab != "black2") {
    if (event.key === "r") {
      showtab("red");
    } else if (event.key === "g" && tasksCompleted >= 1) {
      showtab("green");
    } else if (event.key === "b" && tasksCompleted >= 2) {
      showtab("blue");
    } else if (event.key === "y" && tasksCompleted >= 4) {
      showtab("yellow");
    } else if (event.key === "c" && colors.cyan > 0) {
      showtab("cyan");
    } else if (event.key === "m" && tasksCompleted > 99) {
      showtab("magenta");
    } else if (event.key === "z" && blackunlocked == 1) {
      showtab("black");
    } else if (event.key === "w" && whiteunlocked == 1) {
      showtab("white");
    }
    if (event.code === "Digit1") {
      if (tab === "red") {
        redFilter.buy(1);
      } else if (tab === "green") {
        greenFilter.buy(1);
      } else if (tab === "blue") {
        blueFilter.buy(1);
      } else if (tab === "magenta") {
        buycauldron();
      }
    }
    if (event.code === "Digit2") {
      if (tab === "red") {
        redPointer.buy(1);
      } else if (tab === "green") {
        greenPointer.buy(1);
      } else if (tab === "blue") {
        bluePointer.buy(1);
      } else if (tab === "magenta") {
        buystudy();
      }
    }
    if (event.code === "Digit3") {
      if (tab === "red") {
        bigRedFilter.buy(1);
      } else if (tab === "green") {
        bigGreenFilter.buy(1);
      } else if (tab === "blue") {
        bigBlueFilter.buy(1);
      } else if (tab === "magenta") {
        buyfeed();
      }
    }
    if (event.code === "Digit4") {
      if (tab === "red") {
        bigRedPointer.buy(1);
      } else if (tab === "green") {
        bigGreenPointer.buy(1);
      } else if (tab === "blue") {
        bigBluePointer.buy(1);
      } else if (tab === "magenta") {
        buyfeedperson();
      }
    }
    if (event.code === "Digit5") {
      if (tab === "red") {
        redNanometerWave.buy(1);
      } else if (tab === "green") {
        greenNanometerWave.buy(1);
      } else if (tab === "blue") {
        blueNanometerWave.buy(1);
      } else if (tab === "magenta") {
        buydrink();
      }
    }
  }
});
function resetData() {
  //galaxy says not to use things like alert and confirm for anything because it kicks you out of fullscreen
  //but i think deleting your save is serious enough that you want a confirmation that pulls you out the game for a second
  if (confirm("whoa are you sure you wanna delete your save?") == true) {
    loaded = 69420;
    localStorage.removeItem("save");
    localStorage.removeItem("upgrades");
    location.reload();
  }
}

//yellow upgrades
//
//
//

window.setInterval(function () {
  yellowGAIN = 0;
  yellowGAIN +=
    (redoverflowcount *
      ((((((redFilter.count *
        (redFilter.count * redUpgrade1.count + 1) *
        (1 + Math.sqrt(finerfilterscount) * 2) + // Diminishing returns for finerfilters
        redPointer.count *
          10 *
          (redPointer.count * redUpgrade3.count + 1) *
          (1 + Math.sqrt(focussedpointerscount) * 2) + // Diminishing returns for focussedpointers
        bigRedFilter.count * 100 * (1 + Math.sqrt(finerfilterscount) * 2) +
        bigRedPointer.count * 1000 * (1 + Math.sqrt(focussedpointerscount) * 2)) *
        (redNanometerWave.count * 0.5 + 1) *
        (1 + Math.log1p(micrometerwavecount) * 1.5) + // Logarithmic scaling for micrometerwave
        (Math.log1p(colors.green) * greenUpgrade2.count + 1)) / // Controlled synergy with green
        (10 * greenUpgrade2.count + 1)) *
        (Math.log1p(colors.blue) * blueUpgrade2.count + 1)) / // Controlled synergy with blue
        (10 * blueUpgrade2.count + 1)) *
        (1 + Math.sqrt(strongersynergycount) * 5) * // Diminishing returns for strongersynergy
        taskBooster *
        (1 + 2 * largerprismscount) *
        (1 +
          (Math.log1p(colors.yellow) / 10) *
            (colorharmonycount / Math.sqrt(colorharmonycount + 1)))) * // Balanced color harmony
      (1 + tricolorboostcount * 0.5 * (colors.yellow / 1000))) / // Tri-color boost scaling
    1e12; // Adjusted scaling factor for 1e10 red

  yellowGAIN +=
    (greenoverflowcount *
      ((((((greenFilter.count *
        (greenFilter.count * greenUpgrade1.count + 1) *
        (1 + Math.sqrt(finerfilterscount) * 2) + // Diminishing returns for finerfilters
        greenPointer.count *
          10 *
          (greenPointer.count * greenUpgrade3.count + 1) *
          (1 + Math.sqrt(focussedpointerscount) * 2) + // Diminishing returns for focussedpointers
        bigGreenFilter.count * 100 * (1 + Math.sqrt(finerfilterscount) * 2) +
        bigGreenPointer.count * 1000 * (1 + Math.sqrt(focussedpointerscount) * 2)) *
        (greenNanometerWave.count * 0.5 + 1) *
        (1 + Math.log1p(micrometerwavecount) * 1.5) + // Logarithmic scaling for micrometerwave
        (Math.log1p(colors.red) * redUpgrade2.count + 1)) / // Controlled synergy with red
        (10 * redUpgrade2.count + 1)) *
        (Math.log1p(colors.blue) * blueUpgrade2.count + 1)) / // Controlled synergy with blue
        (10 * blueUpgrade2.count + 1)) *
        (1 + Math.sqrt(strongersynergycount) * 5) * // Diminishing returns for strongersynergy
        taskBooster *
        (1 + 2 * largerprismscount) *
        (1 +
          (Math.log1p(colors.yellow) / 10) *
            (colorharmonycount / Math.sqrt(colorharmonycount + 1)))) * // Balanced color harmony
      (1 + tricolorboostcount * 0.5 * (colors.yellow / 1000))) / // Tri-color boost scaling
    1e12; // Adjusted scaling factor for 1e10 green

  yellowGAIN +=
    (blueoverflowcount *
      ((((((blueFilter.count *
        (blueFilter.count * blueUpgrade1.count + 1) *
        (1 + Math.sqrt(finerfilterscount) * 2) + // Diminishing returns for finerfilters
        bluePointer.count *
          10 *
          (bluePointer.count * blueUpgrade3.count + 1) *
          (1 + Math.sqrt(focussedpointerscount) * 2) + // Diminishing returns for focussedpointers
        bigBlueFilter.count * 100 * (1 + Math.sqrt(finerfilterscount) * 2) +
        bigBluePointer.count * 1000 * (1 + Math.sqrt(focussedpointerscount) * 2)) *
        (blueNanometerWave.count * 0.5 + 1) *
        (1 + Math.log1p(micrometerwavecount) * 1.5) + // Logarithmic scaling for micrometerwave
        (Math.log1p(colors.red) * redUpgrade2.count + 1)) / // Controlled synergy with red
        (10 * redUpgrade2.count + 1)) *
        (Math.log1p(colors.green) * greenUpgrade2.count + 1)) / // Controlled synergy with green
        (10 * greenUpgrade2.count + 1)) *
        (1 + Math.sqrt(strongersynergycount) * 5) * // Diminishing returns for strongersynergy
        taskBooster *
        (1 + 2 * largerprismscount) *
        (1 +
          (Math.log1p(colors.yellow) / 10) *
            (colorharmonycount / Math.sqrt(colorharmonycount + 1)))) * // Balanced color harmony
      (1 + tricolorboostcount * 0.5 * (colors.yellow / 1000))) / // Tri-color boost scaling
    1e12; // Adjusted scaling factor for 1e10 red
  yellowGAIN = Math.min(
    4 * (1 + (redoverflowcount + greenoverflowcount + blueoverflowcount)),
    yellowGAIN
  );
  colors.yellow += yellowGAIN;
}, 20);

//cyan upgrades
function buyredfilterautomation() {
  if (colors.cyan >= redfilterautomationprice) {
    redfilterautomationcount++;
    colors.cyan -= redfilterautomationprice;
    redfilterautomationprice = 5 * Math.pow(1.3, redfilterautomationcount);
    document.getElementById("redfilterautomationprice").innerHTML =
      Math.round(redfilterautomationprice);
  }
}
function buyredpointerautomation() {
  if (colors.cyan >= redpointerautomationprice) {
    redpointerautomationcount++;
    colors.cyan -= redpointerautomationprice;
    redpointerautomationprice = 5 * Math.pow(1.3, redpointerautomationcount);
    document.getElementById("redpointerautomationprice").innerHTML =
      Math.round(redpointerautomationprice);
  }
}
function buybigredfilterautomation() {
  if (colors.cyan >= bigredfilterautomationprice) {
    bigredfilterautomationcount++;
    colors.cyan -= bigredfilterautomationprice;
    bigredfilterautomationprice = 5 * Math.pow(1.3, bigredfilterautomationcount);
    document.getElementById("bigredfilterautomationprice").innerHTML = Math.round(
      bigredfilterautomationprice
    );
  }
}
function buybigredpointerautomation() {
  if (colors.cyan >= bigredpointerautomationprice) {
    bigredpointerautomationcount++;
    colors.cyan -= bigredpointerautomationprice;
    bigredpointerautomationprice = 5 * Math.pow(1.3, bigredpointerautomationcount);
    document.getElementById("bigredpointerautomationprice").innerHTML = Math.round(
      bigredpointerautomationprice
    );
  }
}
function buyrednanometerwaveautomation() {
  if (colors.cyan >= rednanometerwaveautomationprice) {
    rednanometerwaveautomationcount++;
    colors.cyan -= rednanometerwaveautomationprice;
    rednanometerwaveautomationprice = 5 * Math.pow(1.3, rednanometerwaveautomationcount);
    document.getElementById("rednanometerwaveautomationprice").innerHTML = Math.round(
      rednanometerwaveautomationprice
    );
  }
}
function buygreenfilterautomation() {
  if (colors.cyan >= greenfilterautomationprice) {
    greenfilterautomationcount++;
    colors.cyan -= greenfilterautomationprice;
    greenfilterautomationprice = 5 * Math.pow(1.3, greenfilterautomationcount);
    document.getElementById("greenfilterautomationprice").innerHTML = Math.round(
      greenfilterautomationprice
    );
  }
}
function buygreenpointerautomation() {
  if (colors.cyan >= greenpointerautomationprice) {
    greenpointerautomationcount++;
    colors.cyan -= greenpointerautomationprice;
    greenpointerautomationprice = 5 * Math.pow(1.3, greenpointerautomationcount);
    document.getElementById("greenpointerautomationprice").innerHTML = Math.round(
      greenpointerautomationprice
    );
  }
}
function buybiggreenfilterautomation() {
  if (colors.cyan >= biggreenfilterautomationprice) {
    biggreenfilterautomationcount++;
    colors.cyan -= biggreenfilterautomationprice;
    biggreenfilterautomationprice = 5 * Math.pow(1.3, biggreenfilterautomationcount);
    document.getElementById("biggreenfilterautomationprice").innerHTML = Math.round(
      biggreenfilterautomationprice
    );
  }
}
function buybiggreenpointerautomation() {
  if (colors.cyan >= biggreenpointerautomationprice) {
    biggreenpointerautomationcount++;
    colors.cyan -= biggreenpointerautomationprice;
    biggreenpointerautomationprice = 5 * Math.pow(1.3, biggreenpointerautomationcount);
    document.getElementById("biggreenpointerautomationprice").innerHTML = Math.round(
      biggreenpointerautomationprice
    );
  }
}
function buygreennanometerwaveautomation() {
  if (colors.cyan >= greennanometerwaveautomationprice) {
    greennanometerwaveautomationcount++;
    colors.cyan -= greennanometerwaveautomationprice;
    greennanometerwaveautomationprice = 5 * Math.pow(1.3, greennanometerwaveautomationcount);
    document.getElementById("greennanometerwaveautomationprice").innerHTML = Math.round(
      greennanometerwaveautomationprice
    );
  }
}
function buybluefilterautomation() {
  if (colors.cyan >= bluefilterautomationprice) {
    bluefilterautomationcount++;
    colors.cyan -= bluefilterautomationprice;
    bluefilterautomationprice = 5 * Math.pow(1.3, bluefilterautomationcount);
    document.getElementById("bluefilterautomationprice").innerHTML =
      Math.round(bluefilterautomationprice);
  }
}
function buybluepointerautomation() {
  if (colors.cyan >= bluepointerautomationprice) {
    bluepointerautomationcount++;
    colors.cyan -= bluepointerautomationprice;
    bluepointerautomationprice = 5 * Math.pow(1.3, bluepointerautomationcount);
    document.getElementById("bluepointerautomationprice").innerHTML = Math.round(
      bluepointerautomationprice
    );
  }
}
function buybigbluefilterautomation() {
  if (colors.cyan >= bigbluefilterautomationprice) {
    bigbluefilterautomationcount++;
    colors.cyan -= bigbluefilterautomationprice;
    bigbluefilterautomationprice = 5 * Math.pow(1.3, bigbluefilterautomationcount);
    document.getElementById("bigbluefilterautomationprice").innerHTML = Math.round(
      bigbluefilterautomationprice
    );
  }
}
function buybigbluepointerautomation() {
  if (colors.cyan >= bigbluepointerautomationprice) {
    bigbluepointerautomationcount++;
    colors.cyan -= bigbluepointerautomationprice;
    bigbluepointerautomationprice = 5 * Math.pow(1.3, bigbluepointerautomationcount);
    document.getElementById("bigbluepointerautomationprice").innerHTML = Math.round(
      bigbluepointerautomationprice
    );
  }
}
function buybluenanometerwaveautomation() {
  if (colors.cyan >= bluenanometerwaveautomationprice) {
    bluenanometerwaveautomationcount++;
    colors.cyan -= bluenanometerwaveautomationprice;
    bluenanometerwaveautomationprice = 5 * Math.pow(1.3, bluenanometerwaveautomationcount);
    document.getElementById("bluenanometerwaveautomationprice").innerHTML = Math.round(
      bluenanometerwaveautomationprice
    );
  }
}

//toggle automation
function togglered() {
  redtogglestate = !redtogglestate;
  if (redtogglestate) {
    document.getElementById("redtoggle").style.background =
      "linear-gradient(45deg, #003e00, #32db32, #025202)";
    document.getElementById("redtogglestate").innerHTML = "on";
  } else {
    document.getElementById("redtoggle").style.background =
      "linear-gradient(45deg, #6d0000, #ff2c2c, rgb(200, 25, 25))";
    document.getElementById("redtogglestate").innerHTML = "off";
  }
}
function togglegreen() {
  greentogglestate = !greentogglestate;
  if (greentogglestate) {
    document.getElementById("greentoggle").style.background =
      "linear-gradient(45deg, #003e00, #32db32, #025202)";
    document.getElementById("greentogglestate").innerHTML = "on";
  } else {
    document.getElementById("greentoggle").style.background =
      "linear-gradient(45deg, #6d0000, #ff2c2c, rgb(200, 25, 25))";
    document.getElementById("greentogglestate").innerHTML = "off";
  }
}
function toggleblue() {
  bluetogglestate = !bluetogglestate;
  if (bluetogglestate) {
    document.getElementById("bluetoggle").style.background =
      "linear-gradient(45deg, #003e00, #32db32, #025202)";
    document.getElementById("bluetogglestate").innerHTML = "on";
  } else {
    document.getElementById("bluetoggle").style.background =
      "linear-gradient(45deg, #6d0000, #ff2c2c, rgb(200, 25, 25))";
    document.getElementById("bluetogglestate").innerHTML = "off";
  }
}

//
//code for magenta goes here
//+notes
//magenta doesnt get to be affected by governmentfundingcount bc i think itd make it too easy??
//(i might forget to change it somewhere so pls fix)
//woaw im so good at this watch me balancing my code
//also some kid behind me looked at my screen and went "😲 wa is da jong"
//idk thought it was worthy of writing down
//fixed cauldron spelling error
//^^ and broke the button itself lmao

//lol

//and stops here
//now for magic,,

//ok so some explanation is probably needed for how i kinda want spells to work
//if u wanna say something heres some empty lines
//       O         O
//   |        V        |
//     |             |
//       -----------
//hes beautiful
//back to me, i wanna add up all the buildings you have of magenta and then use that as your "magic power" which can make spells stronger,
//works good for motivation to actually buy all the buildings bc otherwise ud only buy the last one bc its the only good one for making magic
//synergy kinda helps make buildings 1 and 2 of the rgb buildings kinda decent and competitive with 4 but building 3 actually gets left in the dust
//id say buff it but look at how op the rest is how about we nerf the rest instead

//re: how about we have to sacrifice specific buildings (say 1 nr4, 3nr2 and 5nr 1) to get a specific spell,
//so there's a sacrifice slot where you can
//sacrifice buildings of any amount you chose if you pay a certain number of magic, but you don't get the combinations until
//you find the scrolls i hid. these scrolls then give you combinations of
//buildings to sacrifice that each give you an effect, and if you accidentally enter the wrong amount, there'll be a message
//that notifies you your spell does nothing but it still eats the buildings. the recipes can be randomised to eliminate the
//chance that ppl go on the internet and search up the solution for the best spell. that way the early buildings have
//meaning aswell as the later ones.

//>still eats the buildings
//you are evil
//spell 1 just works as a get x amount of seconds of red production
//but idk how to balance this bc like ?? what if you have tons of magic and get like 5 decades of red production
//even if i softcap it or something you can just autoclick it or something idk

//sacrifice buildings and magic to be able to cast spells. that way it's kinda balanced ig?

//idea!! cooldown to the spells
//and make the spell much less effective at higher magic usage but u still have to bc u needa make most of it bc of the cooldown

//cooldown: definitely, making the spell less effective at higher magic usage prolly not but we'll
//see if it's balanced w/o and if it isn't then ig we'll do that.

function spell1() {
  if (spell1unlock === 1) {
    if (document.getElementById("redshell").style.background === "") {
      let tribute = (document.getElementById("magicslider").value / 100) * colors.magic;
      colors.red = colors.red + debugrednumber * tribute;
      colors.magic -= tribute;
      spellCoolDown("#redshell", 4000);
    }
  }
}
function spell2() {
  if (spell2unlock === 1) {
    if (document.getElementById("greenshell").style.background === "") {
      let tribute = (document.getElementById("magicslider").value / 100) * colors.magic;
      colors.green = colors.green + debuggreennumber * tribute;
      colors.magic -= tribute;
      spellCoolDown("#greenshell", 4000);
    }
  }
}
function spell3() {
  if (spell3unlock === 1) {
    if (document.getElementById("blueshell").style.background === "") {
      let tribute = (document.getElementById("magicslider").value / 100) * colors.magic;
      colors.blue = colors.blue + debugbluenumber * tribute;
      colors.magic -= tribute;
      spellCoolDown("#blueshell", 4000);
    }
  }
}
//oh and make it so u have to unlock the spells that sounds silly
function think() {
  var randomspell = Math.floor(Math.random() * spellcount) + 1;
  if (window[`spell${randomspell}unlock`] == 1) {
    randomspell++;
  }
  window[`spell${randomspell}unlock`] = 1;
  checkspell(randomspell);
}

function checkspell(number) {
  document.getElementById(`${number}`).style.display = "block";
}
//no more magic it is banned

//haha save go boom
function explode() {
  resetData();
}

//some number formatting
//lol u can tell by the comments chatgpt wrote this
//what comments?
function formatNumber(number) {
  if (Math.abs(number) >= 1e7) {
    return number.toExponential(3);
  } else {
    return number.toString();
  }
}
function formatSmallNumber(number) {
  if (Math.abs(number) >= 100) {
    return number.toExponential(0);
  } else {
    return number.toString();
  }
}
//real
//fake i give up
//scroll time!
function redscroll() {
  if (colors.red >= 1e17 && spell1unlock == 0) {
    spell1unlock = 1;
    colors.magenta -= feedcost;
    feedcost = Math.floor((1000 * Math.pow(1.1, feed)) / 1);

    document.getElementById("feedcount").innerHTML = feed;
    document.getElementById("feedcost").innerHTML = feedcost;
  }
}

function buyredscroll() {
  if (colors.red >= 1e17 && dialoguestate >= 14) {
    spell1unlock++;
    colors.red -= 1e17;
    redscrollcount++;
    document.getElementById("redscroll").style.display = "none";
    document.getElementById("redspell").style.backgroundImage = "url(images/spells/red_spell.webp)";
    window.setTimeout("showtab('magenta')", 1000);
    if (redscrollcount + greenscrollcount + bluescrollcount === 3) {
      window.setTimeout("chatupdate()", 1500);
    } else {
      say(
        "great! you've got the red scroll. only " +
          (3 - (redscrollcount + greenscrollcount + bluescrollcount)) +
          " to go."
      );
    }
  } else {
    window.setTimeout(function () {
      showtab("magenta");
      say("you need at least 1e17 red to grasp that scroll.");
    }, 500);
  }
}
function buygreenscroll() {
  if (colors.green >= 1e18 && dialoguestate >= 14) {
    spell2unlock++;
    colors.green -= 1e18;
    greenscrollcount++;
    document.getElementById("greenscroll").style.display = "none";
    document.getElementById("submitTaskButton").style.position = "relative";
    document.getElementById("submitTaskButton").style.width = "100%";
    document.getElementById("submitTaskButton").style.borderRightStyle = "";
    document.getElementById("greenscroll").style.borderLeftStyle = "";
    document.getElementById("greenscroll").style.display = "none";
    document.getElementById("greenspell").style.backgroundImage =
      "url(images/spells/green_spell.webp)";
    window.setTimeout("showtab('magenta')", 1000);
    if (redscrollcount + greenscrollcount + bluescrollcount === 3) {
      window.setTimeout("chatupdate()", 1500);
      window.setTimeout("timer = 50", 1400);
    } else {
      say(
        "you've got the green scroll down. only " +
          (3 - (redscrollcount + greenscrollcount + bluescrollcount)) +
          " more."
      );
    }
  } else {
    window.setTimeout(function () {
      showtab("magenta");
      say("you need at least 1e18 green to grasp that scroll.");
    }, 500);
  }
}
function buybluescroll() {
  if (colors.blue >= 1e19 && dialoguestate >= 14) {
    spell3unlock++;
    colors.blue -= 1e19;
    bluescrollcount++;
    document.getElementById("bluescroll").style.display = "none";
    document.getElementById("bluespell").style.backgroundImage =
      "url(images/spells/blue_spell.webp)";
    window.setTimeout("showtab('magenta')", 1000);
    if (redscrollcount + greenscrollcount + bluescrollcount === 3) {
      window.setTimeout("chatupdate()", 1500);
      window.setTimeout("timer = 50", 1400);
    } else {
      say(
        "now you have the blue scroll. " +
          (3 - (redscrollcount + greenscrollcount + bluescrollcount)) +
          " more and then you're done."
      );
    }
  } else {
    window.setTimeout(function () {
      showtab("magenta");
      say("you need at least 1e19 blue to grasp that scroll.");
    }, 500);
  }
}
//TODO BALANCING
function fancyblackhole() {
  if (
    colors.red >= 1e18 &&
    colors.green >= 1e18 &&
    colors.blue >= 1e18 &&
    colors.yellow >= 1e6 &&
    colors.cyan >= 1500 &&
    colors.magenta >= 5000
  ) {
    fancyblackhole2();
    colors.red -= 1e18;
    colors.green -= 1e18;
    colors.blue -= 1e18;
    colors.yellow -= 1e6;
    colors.cyan -= 1500;
    colors.magenta -= 5000;
  }
}
function fancyblackhole2() {
  const blackhole = document.getElementById("blackhole");
  const lewissucks = document.getElementById("lewissucks");

  blackhole.classList.add("animate");
  lewissucks.classList.add("animate");

  blackhole.addEventListener("animationend", () => blackhole.classList.remove("animate"));
  lewissucks.addEventListener("animationend", () => lewissucks.classList.remove("animate"));
  setTimeout(() => {
    document.getElementById("blackholeintro").style.display = "none";
    document.getElementById("blackhole").style.scale = "3";
    blackholeanimationdone = 1;
    colors.black = +1500000;
    document.getElementById("blackholecounter").style.display = "block";
  }, 2001);
}

function buymagentaspell() {
  if (colors.magic >= 10 && dialoguestate >= 5) {
    document.getElementById("magentaspell").setAttribute("onclick", "castmagentaspell()");
    colors.magic -= 10;
    magentaspellunlock = 1;
    document.getElementById("magentaspell").style.backgroundImage =
      "url(images/spells/magenta_spell.webp)";
    timer = 60;
    chatupdate();
  } else if (colors.magic < 10 && dialoguestate >= 5) {
    say("you have insufficient magic right now. try saving up until you have 10.");
  }
}
//uhh if the price scales with the amount of magic u make then whats the point even,,?
//the only idea i have rn is just that as the price scales so does the amount it gives so that it stays balanced
function castmagentaspell() {
  if (dialoguestate >= 10) {
    if (dialoguestate === 10) {
      chatupdate();
    }
    if (document.getElementById("magentashell").style.background === "") {
      let tribute = (document.getElementById("magicslider").value / 100) * colors.magic;
      colors.magenta += tribute / 3;
      colors.magic -= tribute;
      spellCoolDown("#magentashell", 1000);
    }
  }
}

//settings
function displaysettings() {
  if (document.getElementById("settingscontainer").style.display != "flex") {
    document.getElementById("settingscontainer").style.display = "flex";
  } else {
    document.getElementById("settingscontainer").style.display = "none";
  }
}

//temp devmode (disables annoying coming soon signs and unlocks all tabs)
function devmode() {
  if (buttonpress === true) {
    colors.red = colors.green = colors.blue = colors.yellow = colors.cyan = colors.magenta = 1e24;
    tasksCompleted = 100;
    buttonpress = !buttonpress;
    document.getElementById("comingsoonwhite").style.display = "none";

    document.getElementById("tabmagenta").style.display = "block";
    document.getElementById("tabgreen").style.display = "block";
    document.getElementById("tabblue").style.display = "block";
    document.getElementById("tabyellow").style.display = "block";
    document.getElementById("tabcyan").style.display = "block";
    whiteunlock = 1;
    blackunlock = 1;
    document.getElementById("tabs").style.width = "250px";
  } else {
    buttonpress = !buttonpress;
    document.getElementById("comingsoonwhite").style.display = "block";

    if (colors.magenta === 0) document.getElementById("tabmagenta").style.display = "none";
    if (colors.green === 0) document.getElementById("tabgreen").style.display = "none";
    if (colors.blue === 0) document.getElementById("tabblue").style.display = "none";
    if (colors.yellow === 0) document.getElementById("tabyellow").style.display = "none";
    if (colors.cyan === 0) document.getElementById("tabcyan").style.display = "none";
    if (tasksCompleted === 0) {
      document.getElementById("tabs").style.width = "calc(250px/3)";
    } else if (tasksCompleted === 1) {
      document.getElementById("tabs").style.width = "calc(250px/3*2)";
    } else {
      document.getElementById("tabs").style.width = "250px";
    }
  }
}

function nerdmode(nerdnumber) {
  if (nerdnumber == 1) {
    document.getElementById("nerdmodetext").style.display === "";
    document.getElementById("nerdmodetext").style.display = "flex";
    currentnerdmode = 1;
    document.getElementById("confusion").style.display = "none";
  } else {
    document.getElementById("nerdmodetext").style.display = "";
    currentnerdmode = 0;
  }
}
function nerdmodechange() {
  nerdmode(!currentnerdmode);
}
//nerdmode dragging

//cheater!
function cheat() {
  dev = !dev;
}
function exportsave(x) {
  if (x == "copy") {
    navigator.clipboard.writeText(btoa(localStorage.getItem("save")));
  }
  if (x == "file") {
    downloadSavegame("red green blue");
  }
}
//i deffo wrote this
function downloadSavegame(filename) {
  // Retrieve the savegame data from localStorage
  const save = localStorage.getItem("save");
  if (!save) {
    console.error("Savegame not found in localStorage.");
    return;
  }

  // Encrypt the savegame data in Base64
  const base64Data = btoa(save);

  // Create a Blob with the Base64-encoded data
  const blob = new Blob([base64Data], {type: "text/plain"});

  // Create an invisible anchor element for download
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob); // Create a URL for the Blob
  a.download = filename; // Set the filename for download

  // Append the anchor to the document, click it, then remove it
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  // Release the URL object
  URL.revokeObjectURL(a.href);
}

function importsave(x) {
  if (x == "copy") {
    navigator.clipboard.readText().then((clipboardText) => {
      const decodedtext = atob(clipboardText);
      console.log(decodedtext);
      loaded = 69420;
      localStorage.setItem("save", decodedtext);
      location.reload();
    });
  }
  if (x == "file") {
    loadSavegame("file");
  }
}
//i deffo also wrote this
function loadSavegame(x) {
  if (x === "file") {
    // Create a hidden file input dynamically
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".txt"; // Only accept .txt files

    // Listen for file selection
    fileInput.addEventListener("change", function () {
      const file = fileInput.files[0];
      if (!file) {
        console.error("No file selected.");
        return;
      }

      const reader = new FileReader();

      // Read the file as text
      reader.onload = function (event) {
        try {
          // Get the file content as text
          const fileContent = event.target.result;

          // Check if the file content is Base64 encoded (optional, you can skip this part if not needed)
          let decodedData = fileContent;
          if (isBase64(fileContent)) {
            decodedData = atob(fileContent); // Decode Base64
          }

          // Save the decoded (or plain) content to localStorage
          localStorage.setItem("save", decodedData);

          // Log success
          console.log("Savegame loaded successfully!");

          // Optional: Reload the page if necessary
          location.reload();
        } catch (error) {
          console.error("Error loading savegame:", error);
        }
      };

      // Read the file content as a text
      reader.readAsText(file);
    });

    // Programmatically click the file input to trigger the upload dialog
    fileInput.click();
  }
}

// Check if the content is Base64 encoded
function isBase64(str) {
  try {
    return btoa(atob(str)) === str;
  } catch (err) {
    return false;
  }
}

//advanced chatting
let albertoLines;
let timeouts = [];
let albertoRequirement = false;

fetch("texts/alberto.txt")
  .then((response) => response.text())
  .then((albertoText) => {
    albertoLines = albertoText.replaceAll("\r", "").split("\n");
  });

document.getElementById("magenta").addEventListener("mousedown", function () {
  if (albertoLines[dialoguestate] !== "break" || albertoRequirement === true) {
    albertoRequirement = false;
    if (albertoLines[dialoguestate] === "break") {
      dialoguestate++;
    }
    words = albertoLines[dialoguestate];
    say(albertoLines[dialoguestate]);
    dialoguestate++;
  }
});

function say(message) {
  for (let i = 0; i < timeouts.length; i++) {
    clearTimeout(timeouts[i]);
  }
  alberto.innerHTML = "𓆩⟡𓆪𓆩⟡𓆪";
  let letters = message.split("");
  for (let i = 0; i < letters.length; i++) {
    const id = setTimeout(() => {
      alberto.innerHTML = "𓆩⟡𓆪" + alberto.innerHTML.replaceAll("𓆩⟡𓆪", "") + letters[i] + "𓆩⟡𓆪";
    }, i * 50);
    timeouts.push(id);
  }
}

function chatupdate() {
  albertoRequirement = true;
}

//chat w alberto
alberto = document.getElementById("think");
alberto.innerHTML = "𓆩⟡𓆪";

//funny
function holyalberto() {
  if (holyalbertostate === 0) {
    if (
      window.confirm(
        "Warning! This feature might trigger you in some way. \nAre you sure you want to proceed?"
      )
    ) {
      window.alert("This feature is available in magenta tab.\nClick the button again to disable");
      holyalbertostate = 1;
      fetch("texts/bible.txt")
        .then((response) => response.text())
        .then((data) => {
          bible = data;
          alberto.setAttribute("class", "fadeout");
          setTimeout("alberto.innerHTML = bible", 1000);
          setTimeout('alberto.setAttribute("class", "fadein")', 1000);
        })
        .catch((error) => console.error("Error fetching the file:", error));
    } else {
      window.alert("The text remains... waiting. Come back when you're prepared.");
    }
  } else {
    document.body.style.overflowY = "hidden";
    holyalbertostate = 0;
    say(words);
  }
}
function enter() {
  const blackhole = document.getElementById("blackhole");
  blackhole.classList.remove("animate3");
  blackhole.classList.add("animate2");
  setTimeout(() => {
    showtab("black2");
  }, 2000);
}

//black!! finally!!
//magenta isnt even done lol but eh idk
function pour(x) {
  if (x == "red") {
    colors.black += 0.5 * 0.1 * colors.red;
    colors.red = 0.9 * colors.red;
  }
  if (x == "green") {
    colors.black += 0.5 * 0.1 * colors.green;
    colors.green = 0.9 * colors.green;
  }
  if (x == "blue") {
    colors.black += 0.5 * 0.1 * colors.blue;
    colors.blue = 0.9 * colors.blue;
  }
  if (x == "yellow") {
    colors.black += 5 * 0.1 * colors.yellow;
    colors.yellow = 0.9 * colors.yellow;
  }
  if (x == "cyan") {
    colors.black += 250 * 0.1 * colors.cyan;
    colors.cyan = 0.9 * colors.cyan;
  }
  if (x == "magenta") {
    colors.black += 25 * 0.1 * colors.magenta; //TODO BALANCE THIS MAYBE??
    colors.magenta = 0.9 * colors.magenta;
  }
} //todo balance this for sure actually this sucks
//or at least i think so i need magenta to be done first and then do a playtest of the game
//then with those numbers balance this
//but maybe go through the rest of the game and balance the early game first
//because first starting out
//your first red filter will take 14 seconds to make another
//the ui isnt that interesting to keep you busy those 14 seconds
//and i dont think thats possible so
//idk man
//maybe boost the first redfilters you buy secretly?? seems a bit weird though

var blackboost = 0; // doesnt need to be saved its ok dw

function calcblack() {
  if (colors.black != 0) {
    blackboost = Math.pow(colors.black, 0.2) * 10; // ok revised it so comment below isnt as true anymore bt this still sucks
    //TODO i dont know how to balance this, this is so bad it makes me cry
    document.getElementById("blackboost").innerHTML =
      formatNumber(Math.round(blackboost * 100) / 100) + "%";
  } else {
    blackboost = 0;
  } //make sure i dont blow everything up on accident when you dont have any black yet
}
function updateyellow() {
  //bazinga
  //1
  document.getElementById("yellowupgrade1amount").innerHTML = governmentfundingcount;
  document.getElementById("yellowupgrade1cost").innerHTML = formatNumber(governmentfundingprice);
  //2
  document.getElementById("yellowupgrade2amount").innerHTML = colorharmonycount;
  document.getElementById("yellowupgrade2cost").innerHTML = formatNumber(colorharmonyprice);
  //3
  document.getElementById("yellowupgrade3amount").innerHTML = largerprismscount;
  document.getElementById("yellowupgrade3cost").innerHTML = formatNumber(largerprismsprice);
  //4
  document.getElementById("yellowupgrade4amount").innerHTML = streamlinedtaskscount;
  document.getElementById("yellowupgrade4cost").innerHTML = formatNumber(streamlinedtasksprice);
  //5
  document.getElementById("yellowupgrade5amount").innerHTML = yellowsynergycount;
  document.getElementById("yellowupgrade5cost").innerHTML = formatNumber(yellowsynergyprice);
  //6
  document.getElementById("yellowupgrade6amount").innerHTML = redoverflowcount;
  document.getElementById("yellowupgrade6cost").innerHTML = formatNumber(redoverflowprice);
  //7
  document.getElementById("yellowupgrade7amount").innerHTML = greenoverflowcount;
  document.getElementById("yellowupgrade7cost").innerHTML = formatNumber(greenoverflowprice);
  //8
  document.getElementById("yellowupgrade8amount").innerHTML = blueoverflowcount;
  document.getElementById("yellowupgrade8cost").innerHTML = formatNumber(blueoverflowprice);
  //9
  document.getElementById("yellowupgrade9amount").innerHTML = tricolorboostcount;
  document.getElementById("yellowupgrade9cost").innerHTML = formatNumber(tricolorboostprice);
  //10
  document.getElementById("yellowupgrade10amount").innerHTML = taskmasterycount;
  document.getElementById("yellowupgrade10cost").innerHTML = formatNumber(taskmasteryprice);
  //11
  document.getElementById("yellowupgrade11amount").innerHTML = goldenmultipliercount;
  document.getElementById("yellowupgrade11cost").innerHTML = formatNumber(goldenmultiplierprice);
  //12
  document.getElementById("yellowupgrade12amount").innerHTML = strongersynergycount;
  document.getElementById("yellowupgrade12cost").innerHTML = formatNumber(strongersynergyprice);
  //13
  document.getElementById("yellowupgrade13amount").innerHTML = focussedpointerscount;
  document.getElementById("yellowupgrade13cost").innerHTML = formatNumber(focussedpointersprice);
  //14
  document.getElementById("yellowupgrade14amount").innerHTML = finerfilterscount;
  document.getElementById("yellowupgrade14cost").innerHTML = formatNumber(finerfiltersprice);
  //15
  document.getElementById("yellowupgrade15amount").innerHTML = micrometerwavecount;
  document.getElementById("yellowupgrade15cost").innerHTML = formatNumber(micrometerwaveprice);
  //16
  document.getElementById("yellowupgrade16amount").innerHTML = colorsyphoncount;
  document.getElementById("yellowupgrade16cost").innerHTML = formatNumber(colorsyphonprice);
}
function leaveblackhole() {
  blackhole.classList.remove("animate2");
  blackhole.classList.add("animate3");
  setTimeout(() => {
    showtab("black");
  }, 2000);
}

//copy of the enter function to help write the leave function
//function enter() {
//  const blackhole = document.getElementById("blackhole");
//
//  blackhole.classList.add("animate2");
//  setTimeout(() => {
//    showtab("black2");
//  }, 2000);
//}

//ofline stuff
window.addEventListener("blur", function () {
  visibilityState = "invisible";
  time = Date.now();
});

window.addEventListener("focus", function () {
  visibilityState = "visible";
  offlineTime = Date.now() - time;
  if (offlineTime > 60000) {
    offlineTime = 60000;
  }
  if (offlineTime <= 60000) {
    colors.red += debugrednumber * (offlineTime / 1000);
    colors.green += debuggreennumber * (offlineTime / 1000);
    colors.blue += debugbluenumber * (offlineTime / 1000);
    colors.magic += debugmagicnumber * (offlineTime / 1000);
    colors.yellow += yellowGAIN * 50 * (offlineTime / 1000);
  }
});

//explode
const singularity = document.querySelector("#singularity");

// Define a function to trigger the explode animation
function triggerExplosion() {
  // Temporarily set the animation to 'explode'
  singularity.style.animation = "explode 2s ease-out forwards";

  // Reset to original animation after 2 seconds
  setTimeout(() => {
    singularity.style.animation = "squigglycircle 0.2s ease-out forwards alternate infinite";
  }, 2000); // Duration matches the explode animation
}

function buy_spell() {
  alert("sorry, the last few of spells is coming next update!");
}

//cooldown shenanigains
let cooldownspells = [];
let cooldowntimes = [];
let cooldowntimeleft = [];

function spellCoolDown(queryselector, cooldowntime) {
  cooldownspells.push(queryselector);
  cooldowntimes.push(cooldowntime);
  cooldowntimeleft.push(cooldowntime);
  document.querySelector(queryselector + " > button").style.opacity = "0.5";
  window.setTimeout(function () {
    document.querySelector(queryselector + " > button").style.opacity = "1";
  }, cooldowntime);
}

window.setInterval(function () {
  for (let i = cooldownspells.length - 1; i >= 0; i--) {
    let fillPercent = (cooldowntimeleft[i] / cooldowntimes[i]) * 100;
    document.querySelector(cooldownspells[i]).style.background =
      "linear-gradient(360deg, gray " + fillPercent + "%, transparent " + fillPercent + "%)";

    cooldowntimeleft[i] -= 50;

    if (cooldowntimeleft[i] <= 0) {
      document.querySelector(cooldownspells[i]).style.background = "";
      cooldownspells.splice(i, 1);
      cooldowntimes.splice(i, 1);
      cooldowntimeleft.splice(i, 1);
    }
  }
}, 50);

document.getElementById("magicslider").oninput = function () {
  document.getElementById("magicinput").value = this.value;
};
document.getElementById("magicinput").oninput = function () {
  document.getElementById("magicslider").value = this.value;
};

//stuck
function stuck() {
  if (document.getElementById("helpmenu").style.display === "flex") {
    document.getElementById("helpmenu").style.display = "none";
  } else {
    document.getElementById("helpmenu").style.display = "flex";
  }
}

function resetMagenta() {
  stuck();
  document.getElementById("magentaspell").setAttribute("onclick", "buymagentaspell()");
  cauldron = study = feed = feedperson = drink = colors.magic = 0;
  timeouts = [];
  albertoRequirement = false;
  colors.magenta = cauldroncost = 10;
  studycost = 100;
  feedcost = 1000;
  feedpersoncost = 10000;
  drinkcost = 100000;
  spell1unlock =
    spell2unlock =
    spell3unlock =
    magentaspellunlock =
    redscrollcount =
    greenscrollcount =
    bluescrollcount =
      0;
  dialoguestate = 1;

  save();
  document.body.style.display = "none";
  window.setTimeout(function () {
    location.reload();
  }, 2000);
}

//achievement

//achievement menu
function displayachievement() {
  document.getElementById("achievementTab").style.display = "flex";
}

//info follows mouse
let infoXpos = 0;
let infoYpos = 0;
window.addEventListener("mousemove", function (e) {
  infoXpos = e.clientX;
  infoYpos = e.clientY;
  this.document.getElementById("achievementInfo").style.top =
    "calc(" +
    infoYpos +
    "px - " +
    document.getElementById("achievementInfo").offsetHeight +
    "px - 1vh)";
  this.document.getElementById("achievementInfo").style.left =
    "calc(" + infoXpos + "px" + " - 1vw)";
});

//add detecting abilities to all achievement buttons
document.querySelectorAll(".achievement-item").forEach((item) => {
  //info appears on hover
  item.addEventListener("mouseover", function () {
    document.getElementById("achievementInfo").style.display = "block";
    document.getElementById("requirementInfo").innerHTML = this.dataset.achievement;
    document.getElementById("rewardInfo").innerHTML = this.dataset.reward;
    achievementinfo.classList.add("achievementfade");
    achievementinfo.classList.remove("achievementfadeaway");
    document.getElementById("achievementInfo").style.background = this.dataset.color;
  });
  //info dissapears after hover
  item.addEventListener("mouseout", function () {
    achievementinfo.classList.add("achievementfadeaway");
    achievementinfo.classList.remove("achievementfade");
  });
});

//achievements

const achievementNotification = document.getElementById("achievementNotification");
const achievementItemImg = document.querySelectorAll(".achievement-item>img");
const achievementNotificationImg = document.querySelector("#achievementNotification>img");
const achievementNotificationText = document.querySelector("#achievementNotification>p");

//achievement checking loop
window.setInterval(function () {
  checkAchievement();
}, 500);

const achievementinfo = document.getElementById("achievementInfo");
let achQBackgColor = [];
let achQForgColor = [];
let achQImg = [];

//function for closing achievementstab
window.addEventListener("mousedown", function () {
  if (
    this.document.querySelector("#achievementTab:hover") === null &&
    this.document.querySelector("#achievementTab").style.display === "flex" &&
    this.document.querySelector("#achievementNotification:hover") === null
  ) {
    document.getElementById("achievementTab").style.display = "none";
  }
});

//function for clicking on achievements
document.getElementById("achievementNotification").addEventListener("mousedown", function () {
  achQImg = [];
  achQBackgColor = [];
  achQForgColor = [];
  document.getElementById("achievementTab").style.display = "flex";
  achievementNotification.classList.remove("slide");
});

//function for reused code
function achievementCall(achievementName, achievementIndex, background_Color, foreground_Color) {
  achievement[achievementName] = true;
  achievementItemImg[achievementIndex].src = "images/achievements/" + achievementName + ".webp";
  achQBackgColor.push(background_Color);
  achQForgColor.push(foreground_Color);
  achQImg.push("images/achievements/" + achievementName + ".webp");
}

function checkAchievement() {
  //red
  if (achievement.redfilter1 === false && redFilter.count >= 1) {
    achievementCall("redfilter1", 0, "#261711", "#F20C0C");
  }
  if (achievement.redPerSec10 === false && debugrednumber >= 10) {
    achievementCall("redPerSec10", 1, "#261711", "#F20C0C");
    document.getElementById("tasks").style.display = "block";
  }
  if (achievement.have1e5red === false && colors.red >= 100000) {
    achievementCall("have1e5red", 2, "#261711", "#F20C0C");
  }
  if (
    achievement.buyAllRedUpgrades === false &&
    redUpgrade1.count === 1 &&
    redUpgrade2.count === 1 &&
    redUpgrade3.count === 1
  ) {
    achievementCall("buyAllRedUpgrades", 3, "#261711", "#F20C0C");
  }

  if (achievement.redPerSec1e15 === false && debugrednumber >= 1e15) {
    achievementCall("redPerSec1e15", 4, "#261711", "#F20C0C");
  }
  if (achievement.have1e20red === false && colors.red >= 1e20) {
    achievementCall("have1e20red", 5, "#261711", "#F20C0C");
  }
  //green
  if (achievement.greenfilter1 === false && greenfilter >= 1) {
    achievementCall("greenfilter1", 6, "#172311", "#19FF00");
  }
  if (achievement.greenPerSec100 === false && debuggreennumber >= 100) {
    achievementCall("greenPerSec100", 7, "#172311", "#19FF00");
  }
  if (achievement.have1e6green === false && colors.green >= 1000000) {
    achievementCall("have1e6green", 8, "#172311", "#19FF00");
  }
  if (
    achievement.buyAllGreenUpgrades === false &&
    greenupgrade1 === 1 &&
    greenupgrade2 === 1 &&
    greenupgrade3 === 1
  ) {
    achievementCall("buyAllGreenUpgrades", 9, "#172311", "#19FF00");
  }
  if (achievement.greenPerSec1e16 === false && debuggreennumber >= 1e16) {
    achievementCall("greenPerSec1e16", 10, "#172311", "#19FF00");
  }
  if (achievement.have1e21green === false && colors.green >= 1e21) {
    achievementCall("have1e21green", 11, "#172311", "#19FF00");
  }
  //blue
  if (achievement.bluefilter1 === false && bluefilter >= 1) {
    achievementCall("bluefilter1", 12, "#100F22", "#0B1EED");
  }
  if (achievement.bluePerSec1000 === false && debugbluenumber >= 1000) {
    achievementCall("bluePerSec1000", 13, "#100F22", "#0B1EED");
  }
  if (achievement.have1e7blue === false && colors.blue >= 10000000) {
    achievementCall("have1e7blue", 14, "#100F22", "#0B1EED");
  }
  if (
    achievement.buyAllBlueUpgrades === false &&
    blueupgrade1 === 1 &&
    blueupgrade2 === 1 &&
    blueupgrade3 === 1
  ) {
    achievementCall("buyAllBlueUpgrades", 15, "#100F22", "#0B1EED");
  }
  if (achievement.bluePerSec1e17 === false && debugbluenumber >= 1e17) {
    achievementCall("bluePerSec1e17", 16, "#100F22", "#0B1EED");
  }
  if (achievement.have1e22blue === false && colors.blue >= 1e22) {
    achievementCall("have1e22blue", 17, "#100F22", "#0B1EED");
  }
  //yellow
  if (achievement.yellow1 === false && colors.yellow >= 1) {
    achievementCall("yellow1", 18, "#222310", "#FFFF00");
  }
  if (achievement.yellow100 === false && colors.yellow >= 100) {
    achievementCall("yellow100", 19, "#222310", "#FFFF00");
  }
  if (achievement.triggertaskmastery === false && taskMasteryTrigger === true) {
    achievementCall("triggertaskmastery", 20, "#222310", "#FFFF00");
  }
  if (achievement.yellowPerSec10 === false && yellowGAIN * 50 >= 10) {
    achievementCall("yellowPerSec10", 21, "#222310", "#FFFF00");
  }
  if (
    achievement.yellowAllUpgrades10 === false &&
    governmentfundingcount >= 10 &&
    largerprismscount >= 10 &&
    colorharmonycount >= 10 &&
    streamlinedtaskscount >= 10 &&
    yellowsynergycount >= 10 &&
    redoverflowcount >= 10 &&
    greenoverflowcount >= 10 &&
    blueoverflowcount >= 10 &&
    tricolorboostcount >= 10 &&
    taskmasterycount >= 10 &&
    goldenmultipliercount >= 10 &&
    colorsyphoncount >= 10 &&
    focussedpointerscount >= 10 &&
    finerfilterscount >= 10 &&
    micrometerwavecount >= 10 &&
    strongersynergycount >= 10
  ) {
    achievementCall("yellowAllUpgrades10", 22, "#222310", "#FFFF00");
    document.getElementById("yellow1spell").style.backgroundImage =
      "url('images/spells/yellow_spell.webp')";
  }
  if (achievement.have1e7yellow === false && colors.yellow >= 1e7) {
    achievementCall("have1e7yellow", 23, "#222310", "#FFFF00");
  }
  //cyan
  if (achievement.yellowCyan1 === false && colorsyphoncount >= 1 && dialoguestate >= 16) {
    achievementCall("yellowCyan1", 24, "#132322", "#01FFFF");
    document.getElementById("cyan1spell").style.backgroundImage =
      "url('images/spells/cyan_spell.webp')";
  }
  if (
    achievement.automation1 === false &&
    redfilterautomationcount +
      redpointerautomationcount +
      bigredfilterautomationcount +
      bigredpointerautomationcount +
      rednanometerwaveautomationcount +
      greenfilterautomationcount +
      greenpointerautomationcount +
      biggreenfilterautomationcount +
      biggreenpointerautomationcount +
      greennanometerwaveautomationcount +
      bluefilterautomationcount +
      bluepointerautomationcount +
      bigbluefilterautomationcount +
      bigbluepointerautomationcount +
      bluenanometerwaveautomationcount >=
      1
  ) {
    achievementCall("automation1", 25, "#132322", "#01FFFF");
  }
  if (
    achievement.everyAutomation === false &&
    redfilterautomationcount >= 1 &&
    redpointerautomationcount >= 1 &&
    bigredfilterautomationcount >= 1 &&
    bigredpointerautomationcount >= 1 &&
    rednanometerwaveautomationcount >= 1 &&
    greenfilterautomationcount >= 1 &&
    greenpointerautomationcount >= 1 &&
    biggreenfilterautomationcount >= 1 &&
    biggreenpointerautomationcount >= 1 &&
    greennanometerwaveautomationcount >= 1 &&
    bluefilterautomationcount >= 1 &&
    bluepointerautomationcount >= 1 &&
    bigbluefilterautomationcount >= 1 &&
    bigbluepointerautomationcount >= 1 &&
    bluenanometerwaveautomationcount >= 1
  ) {
    achievementCall("everyAutomation", 26, "#132322", "#01FFFF");
  }
  //this one is handled by the cyan spell 1 function, it is unneccesary to check every time.
  /*if (achievement.magicCyan1 === false && comere) {
    achievementCall("magicCyan1", 27, "#132322", "#01FFFF");
  }*/
  if (achievement.spellAutomation === false && false) {
    achievementCall("spellAutomation", 28, "#132322", "#01FFFF");
  }
  if (achievement.prestiegeAutomation === false && false) {
    achievementCall("prestiegeAutomation", 29, "#132322", "#01FFFF");
  }
  //magenta
  if (achievement.buyCauldron1 === false && cauldron >= 1) {
    achievementCall("buyCauldron1", 30, "#211023", "#FF01FF");
  }
  if (achievement.castSpell1 === false && dialoguestate >= 8) {
    achievementCall("castSpell1", 31, "#211023", "#FF01FF");
  }
  if (achievement.magicPerSec1e4 === false && debugmagicnumber >= 1e4) {
    achievementCall("magicPerSec1e4", 32, "#211023", "#FF01FF");
  }
  if (
    achievement.buyAllScrolls === false &&
    redscrollcount + greenscrollcount + bluescrollcount === 3
  ) {
    achievementCall("buyAllScrolls", 33, "#211023", "#FF01FF");
  }
  if (achievement.earn1e9magenta === false && false) {
    achievementCall("earn1e9magenta", 34, "#211023", "#FF01FF");
  }
  if (achievement.allSpellsUnlocked === false && false) {
    achievementCall("allSpellsUnlocked", 35, "#211023", "#FF01FF");
  }

  //notification
  if (achQImg.length !== 0 && achievementNotification.classList.length === 0) {
    let tempColF = achQForgColor.shift();
    let tempColB = achQBackgColor.shift();
    achievementNotificationImg.src = achQImg.shift();
    achievementNotification.classList.add("slide");
    achievementNotification.style.backgroundColor = tempColB;
    achievementNotification.style.color = tempColF;
    achievementNotification.style.borderColor = tempColF;
    achievementNotification.style.textShadow = tempColF + " 0 0 10px, " + tempColB + " 0 0 10px";
    window.setTimeout("achievementNotification.classList.remove('slide');", 6000);
  }
}

//statistics
//opening statistics
function statistics() {
  document.getElementById("statisticsContainer").style.display = "flex";
}
//closing statistics
window.addEventListener("mousedown", function () {
  if (
    this.document.querySelector("#statisticsContainer:hover") === null &&
    this.document.querySelector("#statisticsContainer").style.display === "flex"
  ) {
    document.getElementById("statisticsContainer").style.display = "none";
  }
});

//update statistics
function updateStatistics() {
  let nodeList = document.querySelectorAll(".statistic>span");
  keys = Array.from(nodeList).map((el) => el.id);
  keys.forEach((e) => {
    document.getElementById(e).innerHTML = 0;
  });
}

//
//
//
//
// quick varlist, if theres still vars here and u wanna push dont bc these dont save yet
var cyan1spellowned = 0;
var cyan2spellowned = 0;
var yellow1spellowned = 0;
var yellow2spellowned = 0;
// spells
// and
// stuff

// preset for new spells
// if(spelltype == "spell"){if((spellowned=1)){}else{}}

function spell(spelltype) {
  if (spelltype == "cyan1") {
    //line directly below VERY IMPORTANT lewis, else u can just spam spells even though cooldown still going.
    if (document.getElementById("cyan1shell").style.background === "") {
      // no clue if i just consider this finished bc idk how to let the player get this one
      if (achievement.yellowCyan1 === true) {
        if (achievement.magicCyan1 === false) {
          achievementCall("magicCyan1", 27, "#132322", "#01FFFF");
        }
        let tribute = (document.getElementById("magicslider").value / 100) * colors.magic;
        colors.cyan += tribute / 100;
        colors.magic -= tribute;
        spellCoolDown("#cyan1shell", 4000);
      } else {
        //buy it gng
      }
    }
  }
  if (spelltype == "cyan2") {
    if (document.getElementById("cyan2shell").style.background === "") {
      if (achievement.spellAutomation === true) {
        let tribute = (document.getElementById("magicslider").value / 100) * colors.magic;
        cyanBuyTimeBoost = 1 + tribute / 1000;
        colors.magic -= tribute;
        window.setTimeout(function () {
          cyanBuyTimeBoost = 1;
        }, 2000);
        spellCoolDown("#cyan1shell", 4000);
      }
    }
  }
  if (spelltype == "yellow1") {
    if (document.getElementById("yellow1shell").style.background === "") {
      if (achievement.yellowAllUpgrades10 === true) {
        let tribute = (document.getElementById("magicslider").value / 100) * colors.magic;
        colors.yellow += (yellowGAIN * 50 * tribute) / 1000;
        colors.magic -= tribute;
        spellCoolDown("#yellow1shell", 20000);
      }
    }
  }
  if (spelltype == "yellow2") {
  }
}

//yippee black hole merchant stuff
//
//var list! anything here is not saved! save then move up!

//
//go!

function merchanttalk() {}

//yippee black hole merchant stuff
//
//var list! anything here is not saved! save then move up!

//
//go!

function merchanttalk() {}

//no more black hole im sicka it
//funny stars
function star(x, y, size, duration) {
  if (tab === "black") {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.width = star.style.height = size + "px";
    star.style.left = x + "vw";
    star.style.top = y + "vh";
    star.opacity = 1;
    star.dataset.duration = duration;
    star.dataset.totalDuration = duration;
    document.getElementById("starcontainer").appendChild(star);
  }
}
function starFadeOut() {
  let stars = document.querySelectorAll(".star");
  for (let i = 0; i <= stars.length - 1; i++) {
    if (Number(stars[i].dataset.duration) <= 0) {
      stars[i].remove();
    }
    stars[i].dataset.duration = Number(stars[i].dataset.duration) - 20;
    stars[i].style.opacity = stars[i].dataset.duration / stars[i].dataset.totalDuration;
    stars[i].style.left = String((parseFloat(stars[i].style.left) - 50) * 0.99 + 50) + "vw";
    stars[i].style.top = String((parseFloat(stars[i].style.top) - 50) * 0.99 + 50) + "vh";
  }
}
function starSpawn() {
  if (Math.random() < 0.1) {
    star(
      Math.random() * 110 - 5,
      Math.random() * 110 - 5,
      Math.random() * 10,
      Math.random() * 3000 + 500
    );
  }
}

//RED
//contents:
//1: red variables
//2: red buy functions
//3: red calculation functions

//2: buy functions

//red calculation functions
function calcred(number) {
  debugrednumber = number / 2;
  colors.red = colors.red + number / 200;
  document.getElementById("redcount").innerHTML = "red: " + formatNumber(Math.floor(colors.red));
}

//GREEN
//contents:
//1: green variables
//2: green buy functions
//3: green calculation functions

//1: variables
//var green = 0;

//2: green buy functions

//3: green calculation functions
function calcgreen(number) {
  debuggreennumber = number / 2;
  colors.green = colors.green + number / 200;
  document.getElementById("greencount").innerHTML =
    "green: " + formatNumber(Math.floor(colors.green));
}

//BLUE
//contents:
//1: blue variables
//2: blue buy functions
//3: blue calculation functions

//1: blue variables
//var blue = 0;

//2: blue buy functions

//3: blue calculation functions
function calcblue(number) {
  debugbluenumber = number / 2;
  colors.blue = colors.blue + number / 200;
  document.getElementById("bluecount").innerHTML = "blue: " + formatNumber(Math.floor(colors.blue));
}

//YELLOW
//contents:
//1: yellow variables
//2: yellow buy functions
//3: yellow calculation functions

//1: yellow variables
//var yellow = 0;

//2: yellow buy functions
function buygovernmentfunding() {
  if (colors.yellow >= governmentfundingprice) {
    colors.yellow -= governmentfundingprice;
    document.getElementById("yellowcount").innerHTML =
      "yellow: " + formatNumber(Math.floor(colors.yellow));
    governmentfundingcount++;
    governmentfundingprice = Math.round(governmentfundingprice * 1.35);

    BasicColorUpgrade.updateAllPrices();
  }
}

function buylargerprisms() {
  if (colors.yellow >= largerprismsprice) {
    colors.yellow -= largerprismsprice;
    largerprismscount++;
    largerprismsprice = Math.round(largerprismsprice * 1.85);
    document.getElementById("yellowcount").innerHTML =
      "yellow: " + formatNumber(Math.floor(colors.yellow));
  }
}

function buycolorharmony() {
  if (colors.yellow >= colorharmonyprice) {
    colors.yellow -= colorharmonyprice;
    colorharmonycount++;
    colorharmonyprice = Math.round(colorharmonyprice * 1.43);
    document.getElementById("yellowcount").innerHTML =
      "yellow: " + formatNumber(Math.floor(colors.yellow));
  }
}

function buystreamlinedtasks() {
  if (colors.yellow >= streamlinedtasksprice) {
    colors.yellow -= streamlinedtasksprice;
    streamlinedtaskscount++;
    streamlinedtasksprice = Math.round(streamlinedtasksprice * 1.32);
    document.getElementById("yellowcount").innerHTML =
      "yellow: " + formatNumber(Math.floor(colors.yellow));
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
}

function buyyellowsynergy() {
  if (colors.yellow >= yellowsynergyprice) {
    colors.yellow -= yellowsynergyprice;
    yellowsynergycount++;
    yellowsynergyprice = Math.round(yellowsynergyprice * 1.61);
    document.getElementById("yellowcount").innerHTML =
      "yellow: " + formatNumber(Math.floor(colors.yellow));
    taskRewardCount =
      10 * (1 + yellowsynergycount * 0.25) * (1 + (goldenmultipliercount * tasksCompleted) / 1000);
    document.getElementById("taskReward").innerHTML =
      String(Math.round(taskRewardCount)) + " " + taskRewardColor;
  }
}

function buyredoverflow() {
  if (colors.yellow >= redoverflowprice) {
    colors.yellow -= redoverflowprice;
    redoverflowcount++;
    redoverflowprice = Math.round(redoverflowprice * 1.8);
    document.getElementById("yellowcount").innerHTML =
      "yellow: " + formatNumber(Math.floor(colors.yellow));
  }
}

function buygreenoverflow() {
  if (colors.yellow >= greenoverflowprice) {
    colors.yellow -= greenoverflowprice;
    greenoverflowcount++;
    greenoverflowprice = Math.round(greenoverflowprice * 1.8);
    document.getElementById("yellowcount").innerHTML =
      "yellow: " + formatNumber(Math.floor(colors.yellow));
  }
}

function buyblueoverflow() {
  if (colors.yellow >= blueoverflowprice) {
    colors.yellow -= blueoverflowprice;
    blueoverflowcount++;
    blueoverflowprice = Math.round(blueoverflowprice * 1.8);
    document.getElementById("yellowcount").innerHTML =
      "yellow: " + formatNumber(Math.floor(colors.yellow));
  }
}

function buytricolorboost() {
  if (colors.yellow >= tricolorboostprice) {
    colors.yellow -= tricolorboostprice;
    tricolorboostcount++;
    tricolorboostprice = Math.round(tricolorboostprice * 1.68);
    document.getElementById("yellowcount").innerHTML =
      "yellow: " + formatNumber(Math.floor(colors.yellow));
  }
}

function buytaskmastery() {
  if (colors.yellow >= taskmasteryprice) {
    colors.yellow -= taskmasteryprice;
    taskmasterycount++;
    taskmasteryprice = Math.round(taskmasteryprice * 1.44);
    document.getElementById("yellowcount").innerHTML =
      "yellow: " + formatNumber(Math.floor(colors.yellow));
  }
}

function buygoldenmultiplier() {
  if (colors.yellow >= goldenmultiplierprice) {
    colors.yellow -= goldenmultiplierprice;
    goldenmultipliercount++;
    goldenmultiplierprice = Math.round(goldenmultiplierprice * 1.91);
    document.getElementById("yellowcount").innerHTML =
      "yellow: " + formatNumber(Math.floor(colors.yellow));
    taskRewardCount =
      10 * (1 + yellowsynergycount * 0.25) * (1 + (goldenmultipliercount * tasksCompleted) / 1000);
    document.getElementById("taskReward").innerHTML =
      Math.round(taskRewardCount) + " " + taskRewardColor;
  }
}

function buycolorsyphon() {
  if (
    colors.yellow >= colorsyphonprice &&
    colors.red >= 1e15 &&
    colors.green >= 1e15 &&
    colors.blue >= 1e15
  ) {
    colors.yellow -= colorsyphonprice;
    colorsyphoncount++;
    colorsyphonprice = 1200 + 100 * colorsyphoncount;
    document.getElementById("yellowcount").innerHTML =
      "yellow: " + formatNumber(Math.floor(colors.yellow));
    colors.cyan += 10;
    colors.red -= 1e15;
    colors.blue -= 1e15;
    colors.green -= 1e15;
    document.getElementById("cyancount").innerHTML = "cyan: " + colors.cyan;
    document.getElementById("tabcyan").style.display = "block";
  }
}

function buyfocussedpointers() {
  if (colors.yellow >= focussedpointersprice) {
    colors.yellow -= focussedpointersprice;
    focussedpointerscount++;
    focussedpointersprice = Math.round(focussedpointersprice * 1.53);
    document.getElementById("yellowcount").innerHTML =
      "yellow: " + formatNumber(Math.floor(colors.yellow));
  }
}

function buyfinerfilters() {
  if (colors.yellow >= finerfiltersprice) {
    colors.yellow -= finerfiltersprice;
    finerfilterscount++;
    finerfiltersprice = Math.round(finerfiltersprice * 1.43);
    document.getElementById("yellowcount").innerHTML =
      "yellow: " + formatNumber(Math.floor(colors.yellow));
  }
}

function buymicrometerwave() {
  if (colors.yellow >= micrometerwaveprice) {
    colors.yellow -= micrometerwaveprice;
    micrometerwavecount++;
    micrometerwaveprice = Math.round(micrometerwaveprice * 1.51);
    document.getElementById("yellowcount").innerHTML =
      "yellow: " + formatNumber(Math.floor(colors.yellow));
  }
}

function buystrongersynergy() {
  if (colors.yellow >= strongersynergyprice) {
    colors.yellow -= strongersynergyprice;
    strongersynergycount++;
    strongersynergyprice = Math.round(strongersynergyprice * 1.4);
    document.getElementById("yellowcount").innerHTML =
      "yellow: " + formatNumber(Math.floor(colors.yellow));
  }
}

//yellow calculation functions

//CYAN
//contents:
//1: cyan variables
//2: cyan buy functions
//3: cyan calculation functions

//MAGENTA
//contents:
//1: magenta variables
//2: magenta buy functions
//3: magenta calculation functions

//1: magenta variables
//var colors.magic = 0;
//var magenta = 0;
var bible = "";
var holyalbertostate = 0;
var timer = 0;
var dialoguestate = 0;
var words = "";
var redscrollcount = 0;
var greenscrollcount = 0;
var bluescrollcount = 0;
var magentaspellunlock = 0;
var cauldron = 0;
var study = 0;
var feed = 0;
var feedperson = 0;
var drink = 0;
var cauldroncost = 10;
var studycost = 100;
var feedcost = 1000;
var feedpersoncost = 10000;
var drinkcost = 100000;
var spellcount = 3;
var spell1unlock = 0;
var spell2unlock = 0;
var spell3unlock = 0;
var spell4unlock = 0;
var spell5unlock = 0;
var randomnumber = 0;

//magenta buy functions
function buycauldron() {
  if (colors.magenta >= cauldroncost && dialoguestate >= 4) {
    if (dialoguestate === 5) {
      timer = 30;
      chatupdate();
    }
    cauldron++;
    colors.magenta -= cauldroncost;
    cauldroncost = Math.floor((10 * Math.pow(1.1, cauldron)) / 1);

    document.getElementById("cauldroncount").innerHTML = cauldron;
    document.getElementById("cauldroncost").innerHTML = cauldroncost;
  }
}

function buystudy() {
  if (colors.magenta >= studycost) {
    study++;
    colors.magenta -= studycost;
    studycost = Math.floor((100 * Math.pow(1.1, study)) / 1);

    document.getElementById("studycount").innerHTML = study;
    document.getElementById("studycost").innerHTML = studycost;
  }
}

function buyfeed() {
  if (colors.magenta >= feedcost) {
    feed++;
    colors.magenta -= feedcost;
    feedcost = Math.floor((1000 * Math.pow(1.1, feed)) / 1);

    document.getElementById("feedcount").innerHTML = feed;
    document.getElementById("feedcost").innerHTML = feedcost;
  }
}

function buyfeedperson() {
  if (colors.magenta >= feedpersoncost) {
    feedperson++;
    colors.magenta -= feedpersoncost;
    feedpersoncost = Math.floor((10000 * Math.pow(1.1, feedperson)) / 1);

    document.getElementById("feedpersoncount").innerHTML = feedperson;
    document.getElementById("feedpersoncost").innerHTML = feedpersoncost;
  }
}

function buydrink() {
  if (colors.magenta >= drinkcost) {
    drink++;
    colors.magenta -= drinkcost;
    drinkcost = Math.floor((100000 * Math.pow(1.1, drink)) / 1);

    document.getElementById("drinkcount").innerHTML = drink;
    document.getElementById("drinkcost").innerHTML = drinkcost;
  }
}

//magenta calculation functions
function calcmagic(number) {
  debugmagicnumber = number / 2;
  colors.magic = colors.magic + number / 200;
  document.getElementById("magiccount").innerHTML =
    "magic: " + formatNumber(Math.floor(colors.magic));
}

//magenta alberto

//BLACK
//contents:
//1: black variables
//2: black buy functions
//3: black calculation functions
//WHITE
//contents:
//1: blue variables
//2: blue buy functions
//3: blue calculation functions
