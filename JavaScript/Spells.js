/**
 * A class for a single spell with handy functions to handle them.
 * @class
 */
class Spell {
  static instances = {};

  /**
   *
   * @param {string} spellName - name of the spell
   * @param {number} cooldownTime - time of the spell's cooldown (in ms)
   * @param {function} spellEffectFunction - function to execute once a spell's cast, use input for how much magic is used
   * @param {function} spellBuyFunction - function to execute before buying, return true to continue purchase. (if it costs anything, or if it has an unlock requirement, handle that in here)
   * @param {Element} spellShellElement - the element in the webpage where the spell is (pls follow other spell's design structure)
   * @param {string} spellImageDir - the path of the image file of the spell's TrUe FoRm.o.
   */
  constructor(
    spellName = "unnamed",
    cooldownTime = 0,
    spellEffectFunction = () => {},
    spellBuyFunction = () => {
      return true;
    },
    spellShellElement = null,
    spellImageDir = "images/locked_idiot.webp"
  ) {
    this.spellName = spellName;
    this.cooldownTimeTotal = cooldownTime;
    this._cooldownTimeLeft = 0;
    this.spellEffectFunction = spellEffectFunction;
    this.spellBuyFunction = spellBuyFunction;
    this.spellShellElement = spellShellElement;
    this.spellChildElement = spellShellElement.querySelector("button");
    this.spellImageDir = spellImageDir;
    this._bought = false;

    Spell.instances[spellName] = this;
    this.spellChildElement.setAttribute("onclick", this.spellName + ".buySpell()");
  }

  static updateSpellCooldowns(deltaTime) {
    for (let key in Spell.instances) {
      let inst = Spell.instances[key];

      if (inst._cooldownTimeLeft > 0) {
        inst._cooldownTimeLeft -= Math.min(deltaTime, inst._cooldownTimeLeft);
        let cooldownFraction = inst._cooldownTimeLeft / inst.cooldownTimeTotal;

        inst.spellChildElement.style.opacity = 0.5;
        inst.spellShellElement.style.background = `linear-gradient(360deg, grey ${
          100 - cooldownFraction * 100
        }%, transparent ${100 - cooldownFraction * 100}%)`;
      }
      if (inst._cooldownTimeLeft <= 0) {
        inst.spellShellElement.style.background = "";
        inst.spellChildElement.style.opacity = 1;
      }
    }
  }

  castSpell() {
    if (dialoguestate < 10) return; //temp-t
    if (this._cooldownTimeLeft > 0) return;
    if (!this._bought) return;

    let tribute = (document.getElementById("magicslider").value / 100) * colors.magic;
    this._cooldownTimeLeft = this.cooldownTimeTotal;

    this.spellEffectFunction(tribute);
  }

  buySpell() {
    if (this._bought) return;
    if (!this.spellBuyFunction()) return;

    this._bought = true;
    this.spellChildElement.setAttribute("onclick", this.spellName + ".castSpell()");
    this.spellChildElement.style.backgroundImage = `url("${this.spellImageDir}")`;
    this._cooldownTimeLeft = this.cooldownTimeTotal;
  }

  //saving and loading
  get cooldownTimeLeft() {
    return this._cooldownTimeLeft;
  }
  set cooldownTimeLeft(value) {
    this._cooldownTimeLeft = value;
  }
  get bought() {
    return this._bought;
  }
  set bought(value) {
    this._bought = value;
  }

  static saveSpells() {
    let saveObj = {};
    for (let key in this.instances) {
      let inst = this.instances[key];

      saveObj[inst.spellName] = {
        bought: inst._bought,
        cooldownTimeLeft: inst._cooldownTimeLeft,
      };
    }
    localStorage.setItem("spellSave", JSON.stringify(saveObj));
  }
  static loadSpells() {
    let saveObj = JSON.parse(localStorage.getItem("spellSave"));
    if (saveObj == null) return;

    for (let key in this.instances) {
      let inst = this.instances[key];
      let savedInst = saveObj[key];

      inst.bought = savedInst.bought;
      inst.cooldownTimeLeft = savedInst.cooldownTimeLeft;

      if (savedInst.bought) {
        inst.spellChildElement.setAttribute("onclick", inst.spellName + ".castSpell()");
        inst.spellChildElement.style.backgroundImage = `url("${inst.spellImageDir}")`;
      }
    }
  }
  //end of class
}

//instances:
let magentaSpell = new Spell(
  "magentaSpell",
  1000,

  (tribute) => {
    if (dialoguestate === 10) {
      chatupdate();
    }
    colors.magenta += tribute / 3;
    colors.magic -= tribute;
  },

  () => {
    if (colors.magic >= 10 && dialoguestate >= 5) {
      colors.magic -= 10;

      timer = 60;
      chatupdate();
      return true;
    } else if (colors.magic < 10 && dialoguestate >= 7) {
      say("you have insufficient magic right now. try saving up until you have 10.");
    }
    return false;
  },
  document.getElementById("magentashell"),
  "images/spells/magenta_spell.webp"
);
