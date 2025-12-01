function updateNerdModeMargins() {
  //nerdmode text "margins" (actually width in disguise)
  document.getElementById("nerdmodetext").style.width =
    "calc(50% - 320px - " +
    String(document.getElementById("tabwhite").getBoundingClientRect().width) +
    "px)";
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

function getHoveredUpgrade() {
  let upgrade = document.querySelector("." + tab + "upgrades:hover");
  if (!upgrade) return null;
  if (upgrade.id == "") return null;
  return upgrade.id;
}

function setNerdText(string) {
  if (!string) return false;
  document.getElementById("nerdmodetext").innerHTML = string;
}

let nerdModeTexts = {
  redfilter: "gives 0.5 red/s",
  redpointer: "gives 5 red/s",
  bigredfilter: "gives 50 red/s",
  bigredpointer: "gives 500 red/s",
  rednanometerwave: "boosts red by +50% (additive)",
  redupgrade1: "multiplies red filter production roughly quadratically",
  redupgrade2: "production of other main colors scales with # red",
  redupgrade3: "multiplies red production proportionally to red pointers",

  greenfilter: "gives 0.5 green/s",
  greenpointer: "gives 5 green/s",
  biggreenfilter: "gives 50 green/s",
  biggreenpointer: "gives 500 green/s",
  greennanometerwave: "boosts green by +50% (additive)",
  greenupgrade1: "multiplies green filter production roughly quadratically",
  greenupgrade2: "production of other main colors scales with # green",
  greenupgrade3: "multiplies green production proportionally to green pointers",

  bluefilter: "gives 0.5 blue/s",
  bluepointer: "gives 5 blue/s",
  bigbluefilter: "gives 50 blue/s",
  bigbluepointer: "gives 500 blue/s",
  bluenanometerwave: "boosts blue by +50% (additive)",
  blueupgrade1: "multiplies blue filter production roughly quadratically",
  blueupgrade2: "production of other main colors scales with # blue",
  blueupgrade3: "multiplies blue production proportionally to blue pointers",

  redscroll: "idk, seems important",
  greenscroll: "???",
  bluescroll: "ㄟ( ▔, ▔ )ㄏ",

  yellowupgrade1: "makes rgb upgrades 10% cheaper each upgrade",
  yellowupgrade2: "increases rgb production based on # yellow",
  yellowupgrade3: "adds 200% base rgb production",
  yellowupgrade4: "divide task goals by 2",
  yellowupgrade5: "adds a 25% increase in task rewards (additive)",
  yellowupgrade6: "makes yellow from √(red production / 1e12)",
  yellowupgrade7: "makes yellow from √(green production / 1e12)",
  yellowupgrade8: "makes yellow from √(bleu production / 1e12)",
  yellowupgrade9: "adds a 50% production boost to all colors for every 1000 yellow",
  yellowupgrade10:
    "increase the chance with +1% to get a 10x reward from tasks (reward also increases with level)",
  yellowupgrade11: "increases rewords from tasks based on # of tasks done",
  yellowupgrade12: "multiply weak synergy effect by 5√(level)", //this is wrong, it boosts no matter what weak synergy
  yellowupgrade13: "multiply all pointers by 2√(level)",
  yellowupgrade14: "multiply all filters by 2√(level)",
  yellowupgrade15: "multiply waves by 1.5*log(level)",
  yellowupgrade16: "gives you 10*level cyan!",

  cauldron: "gives 0.5 magic/s",
  studycauldron: "gives 5 magic/s",
  feed: "gives 50 magic/s",
  feedperson: "gives 500 magic/s",
  drink: "boosts magic production",
};

function updateNerdMode(deltaTime) {
  updateNerdModeMargins();
  let hover = getHoveredUpgrade();
  if (!hover) {
    nerdtimer += deltaTime;
    if (nerdtimer >= 1000) {
      setNerdText("hover over an upgrade to see what it does!");
    }
    return;
  }
  nerdtimer = 0;
  setNerdText(nerdModeTexts[hover]);
}

function nerdmodechange() {
  let el = document.getElementById("nerdmodetext");
  el.style.display == "none" ? (el.style.display = "flex") : (el.style.display = "none");
}
