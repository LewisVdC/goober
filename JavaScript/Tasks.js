//id of task goal display must be taskGoalAmountRed(Blue, Green, ...)
/**
 * @class
 * A class for task goals with methods to display them.
 */
class taskGoal {
  constructor(
    red = 0,
    green = 0,
    blue = 0,
    yellow = 0,
    cyan = 0,
    magenta = 0,
    black = 0,
    white = 0
  ) {
    this.red = red;
    this.blue = blue;
    this.green = green;
    this.yellow = yellow;
    this.cyan = cyan;
    this.magenta = magenta;
    this.black = black;
    this.white = white;
  }

  displayGoal() {
    for (key in this) {
    }
  }
}

let taskColorGoal = {
  red: 255,
  green: 0,
  blue: 0,
};

let customTasks = {
  1: {},
};
