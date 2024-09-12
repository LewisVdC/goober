var red = 10;
var redfilter = 0;
var redpointer = 0;
var bigredfilter = 0;

document.getElementById("redcount").innerHTML = "red: " + red;

function load() {
  var savegame = JSON.parse(localStorage.getItem("save"));
  if (typeof savegame.red !== "undefined") red = savegame.red;
  if (typeof savegame.redfilter !== "undefined") redfilter = savegame.redfilter;
  //
  //
  //
  //
  //
  var nextCost = Math.floor(10 * Math.pow(1.1, redfilter));
  document.getElementById("redfiltercost").innerHTML = nextCost;
  document.getElementById("redfiltercount").innerHTML = redfilter;
}

// most important one bc yea
var save = {
  red: red,
  redfilter: redfilter,
};

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

  var nextCost = Math.floor(10 * Math.pow(1.1, redfilter));
  document.getElementById("redfiltercost").innerHTML = nextCost;
}

window.setInterval(function () {
  var save = {
    red: red,
    redfilter: redfilter,
  };
  localStorage.setItem("save", JSON.stringify(save));
  calcred(redfilter);
}, 100);
