/**
 * a general class for making dialogue, Lewis if u want u can use this for black i'll make sure to document everything.
 * @class
 */
class dialogueBox {
  static instances = {};
  /**
   * @param {string} name - name of the dialoguebox (for storage)
   * @param {Element} textElement - the element in the page where the dialogue will be displayed.
   * @param {string} textFile - the dir of the file with the text. separate lines in the files with 'break'
   * @param {Object} requirements - an object with dialoguestates mapped to functions for checking if you can continue. If there is no requirement just continue
   * @param {number} textSpeed - the speed at which the text is displayed (ms per letter)
   * @param {number} sentencePauze - time in ms to pauze after a ".", "?" or "!"
   * @param {number} commaPauze - time in ms to pauze after a comma
   * @param {string} textFlair - flair to add to the dialoguebox. like "𓆩⟡𓆪dialogue𓆩⟡𓆪"
   */
  constructor(
    name,
    textElement = null,
    textFile = "",
    requirements = {},
    textSpeed = 50,
    sentencePauze = 1000,
    commaPauze = 500,
    textFlair = ""
  ) {
    //save text element, set a counter for what the current dialogue is.
    this.textElement = textElement;
    if (textElement) {
      if (!textElement.hasAttribute("innerHTML")) {
        Error(name + " doesn't have a valid textElement. (it has no innerHTML)");
      }
    }
    this.requirements = requirements;
    this._dialogueCounter = 0;
    this.name = name;
    this.timeouts = [];
    this._textSpeed = textSpeed;
    this._commaPauze = commaPauze;
    this._sentencePauze = sentencePauze;
    this.textFlair = textFlair;

    //get the text from the given file and split it by line break
    //store in dialogueText as an array
    fetch(textFile)
      .then((x) => x.text())
      .then((y) => (this.dialogueText = y.split("\r\n")));

    //store this instance in the class
    dialogueBox.instances[name] = this;

    textElement.addEventListener("click", () => {
      this.clickHandler();
    });
  }

  get textSpeed() {
    return this._textSpeed;
  }
  set textSpeed(value) {
    this._textSpeed = value;
  }
  set commaPauze(val) {
    this._commaPauze = val;
  }
  set sentencePauze(val) {
    this._sentencePauze = val;
  }
  get currentRequirement() {
    return this.requirements[this.dialogueCounter];
  }
  get currentRequirementEval() {
    if (!this.currentRequirement) return;
    return this.requirements[this.dialogueCounter]();
  }
  get currentDialogueText() {
    return this.dialogueText[this.dialogueCounter];
  }
  get currentInnerText() {
    return this._currentText;
  }
  set currentInnerText(val) {
    this._currentText = val;
  }
  get dialogueCounter() {
    return this._dialogueCounter;
  }
  set dialogueCounter(val) {
    this._dialogueCounter = val;
  }

  displayTextDelayed(text) {
    if (!text) return;
    //first, clear out the timeouts that are still active
    for (let i = 0; i < this.timeouts.length; i++) {
      clearTimeout(this.timeouts[i]);
    }

    //also clear previous text
    this.textElement.innerHTML = "";

    //set the current text
    this.currentInnerText = text;

    let extraLetterDelay = 0;
    //then, set new timeouts for the next string
    for (let i = 0; i < text.length; i++) {
      let letter = text[i];

      //set the text delay
      let letterDelay = this.textSpeed * i + extraLetterDelay;

      if (letter == "." || letter == "!" || letter == "?") {
        extraLetterDelay += this._sentencePauze;
      }
      if (letter == ",") {
        extraLetterDelay += this._commaPauze;
      }

      //and add the delay
      this.timeouts.push(
        setTimeout(() => {
          //add the new letter to the string
          this.textElement.innerHTML =
            this.textFlair + //flair
            " " +
            this.textElement.innerHTML.replaceAll(this.textFlair, "").slice(1, -1) + // previous text
            letter +
            " " +
            this.textFlair; //flair
          //clear this timeout from the array after it has been fulfilled
          this.timeouts.shift(1);
        }, letterDelay)
      ); //and the speed at which they appear
    }
  }
  displayTextInstant(text) {
    //first, clear out the timeouts that are still active
    for (let i = 0; i < this.timeouts.length; i++) {
      clearTimeout(this.timeouts[i]);
    }
    this.timeouts = [];
    this.currentInnerText = text;
    this.textElement.innerHTML = text;
  }

  clickHandler() {
    //when the dialogue box is clicked, check if there are still any ongoing timeouts (if it's still typing)
    //in that case we skip the timeouts and instantly print the text
    if (this.timeouts.length > 0) {
      this.displayTextInstant(this.currentInnerText);
      return;
    }

    //check if there's a requirement
    if (this.currentRequirement) {
      //if the rquirement is still unfulfilled, skip click request
      if (!this.currentRequirementEval) {
        return;
      }
    }
    //if there are no timeouts still active and all requirements have been met, then we proceed to the next text element of the dialogue
    this._dialogueCounter++;
    //only display next dialogue if it's actually dialogue, otherwise on break check the requirement
    this.displayTextDelayed(this.currentDialogueText);
  }

  checkRequirement() {
    //if the requirement is unfulfilled, or there is no current requirement do nothing
    if (!this.currentRequirementEval || !this.currentRequirement) {
      return;
    }
    //if there are no timeouts still active and all requirements have been met, then we proceed to the next text element of the dialogue
    this.dialogueCounter++;
    //only display next dialogue if it's actually dialogue, otherwise on break check the requirement
    this.displayTextDelayed(this.currentDialogueText);
  }

  //safeing

  static saveDialogues() {
    let saveObj = {};
    for (let key in this.instances) {
      let inst = this.instances[key];
      saveObj[inst.name] = {
        _dialogueCounter: inst.dialogueCounter,
        _currentInnerText: inst.currentInnerText, //we only save the inner text bc
      };
      if (!inst.currentInnerText) {
        console.log("no dialogue found. reverting to original dialogue.");
        saveObj[inst.name]._currentInnerText = "-&gt click to continue &lt-";
      }
    }
    localStorage.setItem("dialogueSave", JSON.stringify(saveObj));
  }
  static loadDialogues() {
    let saveObj = JSON.parse(localStorage.getItem("dialogueSave"));
    if (!saveObj) return;
    for (let key in this.instances) {
      let inst = this.instances[key];
      if (!inst || !saveObj[inst.name]) continue;
      inst.dialogueCounter = saveObj[inst.name]._dialogueCounter;
      if (!saveObj[inst.name]._currentInnerText) return;
      inst.currentInnerText = saveObj[inst.name]._currentInnerText;
      inst.displayTextInstant(inst.currentInnerText);
    }
  }
}

//alberto dialogue
let Alberto = new dialogueBox("alberto", document.getElementById("think"), "texts/alberto.txt", {
  4: () => {
    return cauldron.count > 0;
  },
  5: () => {
    return magentaSpell.bought > 0;
  },
  7: () => {
    return false;
  },
  11: () => {
    return redscrollcount && greenscrollcount && bluescrollcount;
  },
  16: () => {
    return false;
  },
});
