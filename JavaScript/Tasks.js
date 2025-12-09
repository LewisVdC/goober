//chatgpt wizardry to get accurate colors for the tasks
function clamp(v) {
  return Math.max(0, Math.min(255, v));
}

function additiveCmyToRgb(C, M, Y) {
  return {
    R: (M + Y) / 2,
    G: (C + Y) / 2,
    B: (C + M) / 2,
  };
}

function whiteToRgb(W) {
  return {R: W, G: W, B: W};
}

function blackFactor(K) {
  K /= 255;
  return 1 - K;
}

function mixColors(r = 0, g = 0, b = 0, c = 0, m = 0, y = 0, k = 0, w = 0) {
  let R = r;
  let G = g;
  let B = b;

  // Add CMY properly as additive colors
  let cmy = additiveCmyToRgb(c, m, y);
  R += cmy.R;
  G += cmy.G;
  B += cmy.B;

  // Add white
  let wt = whiteToRgb(w);
  R += wt.R;
  G += wt.G;
  B += wt.B;

  // Apply black as a darkening factor
  let f = blackFactor(k);
  R *= f;
  G *= f;
  B *= f;

  return {R: clamp(R), G: clamp(G), B: clamp(B)};
}

function rgbToHex(r, g, b) {
  return (
    "#" +
    [r, g, b]
      .map((x) => {
        let hex = x.toString(16).toUpperCase();
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("")
  );
}

/*
/
/
/
*/

//id of task goal display must be taskGoalAmountRed(Blue, Green, ...)

//function for updating task reward count
function calculateTaskReward(base) {
  return (
    base * (1 + yellowSynergy.count * 0.25) * (1 + (goldenMultiplier.count * tasksCompleted) / 1000)
  );
}

/**
 * @class
 * A class for task goals with methods to display them.
 */
class taskGoal {
  /**
   *
   * @param {string} reward - what is reward of the task? will get fed to the user (use "{10}" to get a number of the reward with upgrades included. base amount is 10 in this case.)
   * @param {string} rewardFunction - string of function for giving the reward. use calculateTaskReward to get accurate reward count.
   * @param {number} colorScale - how much bigger this goal is than it's rgb representation
   * @param {number} red - task requirements
   * @param {number} green - task requirements
   * @param {number} blue - task requirements
   * @param {number} yellow - task requirements
   * @param {number} cyan - task requirements
   * @param {number} magenta - task requirements
   * @param {number} black - task requirements
   * @param {number} white - task requirements
   */
  constructor(
    reward = "",
    rewardFunction = "",
    colorScale = 1,
    red = 0,
    green = 0,
    blue = 0,
    yellow = 0,
    cyan = 0,
    magenta = 0,
    black = 0,
    white = 0
  ) {
    this.reward = reward;
    this.rewardFunction = rewardFunction;
    this.colorScale = colorScale;
    this.red = red;
    this.blue = blue;
    this.green = green;
    this.yellow = yellow;
    this.cyan = cyan;
    this.magenta = magenta;
    this.black = black;
    this.white = white;
  }

  displayTask() {
    //displaying goal numbers
    for (let key in this) {
      if (colors[key] == undefined) {
        continue;
      } //if the current key is not a valid color

      let keyCamel = key[0].toUpperCase() + key.slice(1);
      if (this[key] == 0) {
        document.getElementById("task" + keyCamel).style.display = "none";
        continue;
      }
      document.getElementById("task" + keyCamel).style.display = "block";
      document.getElementById("taskGoalAmount" + keyCamel).innerHTML = formatNumber(
        Math.round(this[key] * this.colorScale)
      );
    }

    //display reward
    let splitReward = this.reward.split("{"); //split the reward based in the amount of numbers we gotta replace
    let rewardBases = []; //initialise reward base arr
    let rewardText = []; //initialise reward text arr
    let newReward = "";

    //basically going through each split, splitting it up even more, and discarding the rest.
    if (splitReward.length > 1) {
      splitReward.forEach((e) => {
        if (/\d/.test(e)) {
          //if there is number, add it to bases
          rewardText.push(e.split("}")[1]);
          rewardBases.push(Number(e.split("}")[0]));
        } else {
          //if not, just add NaN to bases
          rewardText.push(e);
          rewardBases.push(undefined);
        }
      });
      //get rid of the first NaN
      if (!rewardBases[0] && !rewardText[0]) {
        rewardBases.shift();
        rewardText.shift();
      }

      //loop through all separated parts to make one full string
      for (let i = 0; i < rewardText.length; i++) {
        if (rewardBases[i] == undefined) {
          newReward += rewardText[i];
          continue;
        } else {
          newReward += Math.round(calculateTaskReward(rewardBases[i])) + rewardText[i];
        }
      }
    } else {
      newReward = splitReward[0]; //if there is no splitting to do, just don't.
    }

    //and now we have an array of the bases we want to use in rewardBases.

    document.getElementById("taskReward").innerHTML = newReward;

    //set reward's colors
    let mixedRGB = mixColors(
      this.red,
      this.green,
      this.blue,
      this.cyan,
      this.magenta,
      this.yellow,
      this.black,
      this.white
    );
    let mixedColor = `rgb(${mixedRGB.R},${mixedRGB.G},${mixedRGB.B})`;
    let taskColor = document.getElementById("taskColor");
    taskColor.style.color = mixedColor;
    taskColor.style.textShadow = "0 0 10px " + mixedColor;
    //set reward's color hex
    taskColor.innerHTML = rgbToHex(mixedRGB.R, mixedRGB.G, mixedRGB.B);
  }

  saveCurrentTask() {
    let saveObj = {};
    for (let key in this) {
      saveObj[key] = this[key];
    }
    localStorage.setItem("taskSave", JSON.stringify(saveObj));
  }

  loadSavedTask() {
    let saveObj = JSON.parse(localStorage.getItem("taskSave"));
    if (saveObj == null) {
      return false;
    }
    for (let key in this) {
      this[key] = saveObj[key];
    }
    taskColorGoal.displayTask();
  }

  //end of class
}

//
//
//

/**
 * just an object with every color and a boolean value for it
 */
class colorsBool {
  constructor(
    r = false,
    g = false,
    b = false,
    y = false,
    c = false,
    m = false,
    k = false,
    w = false
  ) {
    this.red = r;
    this.green = g;
    this.blue = b;
    this.yellow = y;
    this.cyan = c;
    this.magenta = m;
    this.black = k;
    this.white = w;
  }
}

//this is the function for generating a new task, based on less parameters than the class (it will generate those)
/**
 *
 * @param {string} reward - string of what the reward is, for the user
 * @param {string} rewardFunction  - string of function for the reward
 * @param {colorsBool} acceptedColors  - which colors are to be used in generation
 */
function generateTask(reward, rewardFunction, acceptedColors) {
  //task reward
  let task = new taskGoal(reward, rewardFunction);

  //task scaling
  task.colorScale = 1000 * Math.pow(1.2, tasksCompleted);

  //task Color generation
  task.red = Math.round(acceptedColors.red * 255 * Math.random());
  task.green = Math.round(acceptedColors.green * 255 * Math.random());
  task.blue = Math.round(acceptedColors.blue * 255 * Math.random());
  task.yellow = Math.round(acceptedColors.yellow * 255 * Math.random());
  task.cyan = Math.round(acceptedColors.cyan * 255 * Math.random());
  task.magenta = Math.round(acceptedColors.magenta * 255 * Math.random());
  task.black = Math.round(acceptedColors.black * 255 * Math.random());
  task.white = Math.round(acceptedColors.white * 255 * Math.random());

  return task;
}

//
//
//
//premade tasks, not automatically generated
let customTasks = {
  1: new taskGoal(
    "unlock green",
    `document.getElementById("tabgreen").style.display = "block"; 
    document.getElementById("tabs").style.width = "calc(250px/3*2)";  
    colors.green += 10;`,
    1,
    255
  ),

  2: new taskGoal(
    "unlock blue",
    `
      document.getElementById("tabs").style.width = "250px";
      document.getElementById("tabblue").style.display = "block";
      colors.blue += 10;
    `,
    1,
    0,
    255
  ),
  3: new taskGoal("get a x2 multiplier", `taskBooster = 2;`, 1, 0, 0, 255),
  4: new taskGoal(
    "unlock yellow",
    `document.getElementById("tabyellow").style.display = "block";
      colors.yellow += 10;`,
    1000,
    255,
    200,
    40
  ),

  100: new taskGoal(
    "unlock magenta",
    `colors.magenta += 10;
        document.getElementById("tabmagenta").style.display = "block";
        document.getElementById("holyalbertomode").style.display = "block";`,
    1000 * Math.pow(1.2, tasksCompleted),
    255,
    20,
    255
  ),
};

let taskColorGoal = customTasks[1];
taskColorGoal.displayTask();

function submitTask1() {
  for (color in colors) {
    if (colors[color] < taskColorGoal[color] * taskColorGoal.colorScale) return false;
  }
  //if you can complete the task, take the materials
  for (color in colors) {
    colors[color] -= taskColorGoal[color] * taskColorGoal.colorScale;
  }
  tasksCompleted++;

  //gambling
  if (Math.random() * 100 <= taskMastery.count) {
    for (let i = 0; i < taskMastery.count * 10; i++) {
      eval(taskColorGoal.rewardFunction);
    }
    taskMasteryTrigger = true;
  } else {
    eval(taskColorGoal.rewardFunction);
  }

  //process of setting new color goal
  if (customTasks[tasksCompleted + 1]) {
    taskColorGoal = customTasks[tasksCompleted + 1];
  } else {
    //if there is no custom task for it, generate one.

    //for now, if the task's under 100 completion, give yellow - over, give yellow and some cyan maybe???
    if (tasksCompleted < 100) {
      let acceptedColors = new colorsBool(true, true, true);
      taskColorGoal = generateTask(
        "{10} yellow",
        `colors.yellow += calculateTaskReward(10);`,
        acceptedColors
      );
    } else if (tasksCompleted >= 100) {
      let acceptedColors = new colorsBool(true, true, true);
      taskColorGoal = generateTask(
        "{10} yellow and {2} cyan",
        `colors.yellow += calculateTaskReward(10);
         colors.cyan += calculateTaskReward(2)`,
        acceptedColors
      );
    }
  }
  taskColorGoal.displayTask();
}
