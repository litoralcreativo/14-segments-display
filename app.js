const ctx = document.getElementById("canvas").getContext("2d");

class Vector2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class segment {
  constructor(char, x, y, spec = null) {
    this.char = char;
    this.initPos = new Vector2(x, y);
    this.spec = spec;
  }

  update() {
    switch (this.char) {
      case "all": {
        this.display([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
        break;
      }
      case "::::": {
        let arr = [];
        for (let i = 0; i < this.spec.length; i++) {
          arr.push(this.spec[i]);
        }
        this.display(arr);
        break;
      }
      case "0":
      case 0: {
        this.display([1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0]);
        break;
      }
      case "1":
      case 1: {
        this.display([0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0]);
        break;
      }
      case "2":
      case 2: {
        this.display([1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0]);
        break;
      }
      case "3":
      case 3: {
        this.display([1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]);
        break;
      }
      case "4":
      case 4: {
        this.display([0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0]);
        break;
      }
      case "5":
      case 5: {
        this.display([1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0]);
        break;
      }
      case "6":
      case 6: {
        this.display([1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]);
        break;
      }
      case "7":
      case 7: {
        this.display([1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0]);
        break;
      }
      case "8":
      case 8: {
        this.display([1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]);
        break;
      }
      case "9":
      case 9: {
        this.display([1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0]);
        break;
      }
      case "A":
      case "a": {
        this.display([1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]);
        break;
      }
      case "b":
      case "B": {
        this.display([1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0]);
        break;
      }
      case "c":
      case "C": {
        this.display([1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]);
        break;
      }
      case "d":
      case "D": {
        this.display([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]);
        break;
      }
      case "e":
      case "E": {
        this.display([1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]);
        break;
      }
      case "f":
      case "F": {
        this.display([1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]);
        break;
      }
      case "g":
      case "G": {
        this.display([1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0]);
        break;
      }
      case "h":
      case "H": {
        this.display([0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]);
        break;
      }
      case "i":
      case "I": {
        this.display([1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]);
        break;
      }
      case "j":
      case "J": {
        this.display([0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]);
        break;
      }
      case "k":
      case "K": {
        this.display([0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1]);
        break;
      }
      case "l":
      case "L": {
        this.display([0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]);
        break;
      }
      case "m":
      case "M": {
        this.display([0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0]);
        break;
      }
      case "n":
      case "N": {
        this.display([0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1]);
        break;
      }
      case "o":
      case "O": {
        this.display([1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]);
        break;
      }
      case "p":
      case "P": {
        this.display([1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]);
        break;
      }
      case "q":
      case "Q": {
        this.display([1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1]);
        break;
      }
      case "r":
      case "R": {
        this.display([1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1]);
        break;
      }
      case "s":
      case "S": {
        this.display([1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0]);
        break;
      }
      case "t":
      case "T": {
        this.display([1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]);
        break;
      }
      case "u":
      case "U": {
        this.display([0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]);
        break;
      }
      case "v":
      case "V": {
        this.display([0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0]);
        break;
      }
      case "w":
      case "W": {
        this.display([0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1]);
        break;
      }
      case "x":
      case "X": {
        this.display([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1]);
        break;
      }
      case "y":
      case "Y": {
        this.display([0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0]);
        break;
      }
      case "z":
      case "Z": {
        this.display([1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0]);
        break;
      }
      case "-": {
        this.display([0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0]);
        break;
      }
      case "=": {
        this.display([0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0]);
        break;
      }
      case "_": {
        this.display([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        break;
      }
      case "/": {
        this.display([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0]);
        break;
      }
      case "$": {
        this.display([1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0]);
        break;
      }
      case "*": {
        this.display([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1]);
        break;
      }
      case "+": {
        this.display([0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0]);
        break;
      }
      case ",": {
        this.display([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0]);
        break;
      }
      case "(": {
        this.display([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]);
        break;
      }
      case ")": {
        this.display([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0]);
        break;
      }
      default: {
        this.display([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        break;
      }
    }
  }

  display(arr) {
    for (let i = 1; i < arr.length + 1; i++) {
      this.drawIndividual(i, arr[i - 1] == 1 ? true : false);
    }
  }

  drawIndividual(index, active) {
    let s = 0;
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    let p6 = 0;
    ctx.fillStyle = `rgba(255, 255, 255, ${active ? 1 : 0.05})`;
    switch (index) {
      case 1: {
        s = new Vector2(this.initPos.x, this.initPos.y);
        p1 = new Vector2(s.x, s.y);
        p2 = new Vector2(s.x + weight, s.y - weight);
        p3 = new Vector2(s.x + weight + length + width, s.y - weight);
        p4 = new Vector2(s.x + weight + weight + length + width, s.y);
        p5 = new Vector2(s.x + weight + length + width, s.y + weight);
        p6 = new Vector2(s.x + weight, s.y + weight);
        break;
      }
      case 2: {
        s = new Vector2(
          this.initPos.x + length + weight * 2 + spacing + width,
          this.initPos.y + spacing
        );
        p1 = new Vector2(s.x, s.y);
        p2 = new Vector2(s.x + weight, s.y + weight);
        p3 = new Vector2(s.x + weight, s.y + weight + length + height);
        p4 = new Vector2(s.x, s.y + weight + weight + length + height);
        p5 = new Vector2(s.x - weight, s.y + weight + length + height);
        p6 = new Vector2(s.x - weight, s.y + weight);
        break;
      }
      case 3: {
        s = new Vector2(
          this.initPos.x + length + weight * 2 + spacing + width,
          this.initPos.y + length + height + weight * 2 + spacing * 3
        );
        p1 = new Vector2(s.x, s.y);
        p2 = new Vector2(s.x + weight, s.y + weight);
        p3 = new Vector2(s.x + weight, s.y + weight + length + height);
        p4 = new Vector2(s.x, s.y + weight + weight + length + height);
        p5 = new Vector2(s.x - weight, s.y + weight + length + height);
        p6 = new Vector2(s.x - weight, s.y + weight);
        break;
      }
      case 4: {
        s = new Vector2(
          this.initPos.x,
          this.initPos.y + height * 2 + length * 2 + weight * 4 + spacing * 4
        );
        p1 = new Vector2(s.x, s.y);
        p2 = new Vector2(s.x + weight, s.y - weight);
        p3 = new Vector2(s.x + weight + length + width, s.y - weight);
        p4 = new Vector2(s.x + weight + weight + length + width, s.y);
        p5 = new Vector2(s.x + weight + length + width, s.y + weight);
        p6 = new Vector2(s.x + weight, s.y + weight);
        break;
      }
      case 5: {
        s = new Vector2(
          this.initPos.x - spacing,
          this.initPos.y + length + height + weight * 2 + spacing * 3
        );
        p1 = new Vector2(s.x, s.y);
        p2 = new Vector2(s.x + weight, s.y + weight);
        p3 = new Vector2(s.x + weight, s.y + weight + length + height);
        p4 = new Vector2(s.x, s.y + weight + weight + length + height);
        p5 = new Vector2(s.x - weight, s.y + weight + length + height);
        p6 = new Vector2(s.x - weight, s.y + weight);
        break;
      }
      case 6: {
        s = new Vector2(this.initPos.x - spacing, this.initPos.y + spacing);
        p1 = new Vector2(s.x, s.y);
        p2 = new Vector2(s.x + weight, s.y + weight);
        p3 = new Vector2(s.x + weight, s.y + weight + length + height);
        p4 = new Vector2(s.x, s.y + weight + weight + length + height);
        p5 = new Vector2(s.x - weight, s.y + weight + length + height);
        p6 = new Vector2(s.x - weight, s.y + weight);
        break;
      }
      case 7: {
        s = new Vector2(
          this.initPos.x,
          this.initPos.y + height + length + weight * 2 + spacing * 2
        );
        p1 = new Vector2(s.x, s.y);
        p2 = new Vector2(s.x + weight, s.y - weight);
        p3 = new Vector2(
          s.x + weight + length / 2 - weight - spacing + +width / 2,
          s.y - weight
        );
        p4 = new Vector2(
          s.x + weight + weight + length / 2 - weight - spacing + +width / 2,
          s.y
        );
        p5 = new Vector2(
          s.x + weight + length / 2 - weight - spacing + +width / 2,
          s.y + weight
        );
        p6 = new Vector2(s.x + weight, s.y + weight);
        break;
      }
      case 8: {
        s = new Vector2(
          this.initPos.x + length / 2 + weight + spacing + width / 2,
          this.initPos.y + height + length + weight * 2 + spacing * 2
        );
        p1 = new Vector2(s.x, s.y);
        p2 = new Vector2(s.x + weight, s.y - weight);
        p3 = new Vector2(
          s.x + weight + length / 2 - weight - spacing + width / 2,
          s.y - weight
        );
        p4 = new Vector2(
          s.x + weight + weight + length / 2 - weight - spacing + width / 2,
          s.y
        );
        p5 = new Vector2(
          s.x + weight + length / 2 - weight - spacing + width / 2,
          s.y + weight
        );
        p6 = new Vector2(s.x + weight, s.y + weight);
        break;
      }
      case 9: {
        s = new Vector2(
          this.initPos.x +
            length / 2 -
            weight -
            spacing +
            weight * 2 +
            spacing +
            width / 2,
          this.initPos.y + spacing
        );
        p1 = new Vector2(s.x + weight, s.y + weight);
        p2 = new Vector2(s.x + weight, s.y + weight);
        p3 = new Vector2(s.x + weight, s.y + weight + length + height);
        p4 = new Vector2(s.x, s.y + weight + weight + length + height);
        p5 = new Vector2(s.x - weight, s.y + weight + length + height);
        p6 = new Vector2(s.x - weight, s.y + weight);
        break;
      }
      case 10: {
        s = new Vector2(
          this.initPos.x +
            length / 2 -
            weight -
            spacing +
            weight * 2 +
            spacing +
            width / 2,
          this.initPos.y + length + height + weight * 2 + spacing * 3
        );
        p1 = new Vector2(s.x, s.y);
        p2 = new Vector2(s.x + weight, s.y + weight);
        p3 = new Vector2(s.x + weight, s.y + weight + length + height);
        p4 = new Vector2(s.x, s.y + weight + length + height);
        p5 = new Vector2(s.x - weight, s.y + weight + length + height);
        p6 = new Vector2(s.x - weight, s.y + weight);
        break;
      }
      case 11: {
        s = new Vector2(
          this.initPos.x + weight,
          this.initPos.y + weight + spacing
        );
        p1 = new Vector2(s.x, s.y);
        p2 = new Vector2(s.x + weight + spacing, s.y);
        p3 = new Vector2(
          s.x + weight + length / 2 - weight * 2 - spacing + width / 2,
          s.y - weight * 2 + length + height
        );
        p4 = new Vector2(
          s.x + weight + length / 2 - weight * 2 - spacing + width / 2,
          s.y + length + height
        );
        p5 = new Vector2(
          s.x + length / 2 - weight * 2 - 2 * spacing + width / 2,
          s.y + length + height
        );
        p6 = new Vector2(s.x, s.y + weight + spacing);
        break;
      }
      case 12: {
        s = new Vector2(
          this.initPos.x + weight + length + width,
          this.initPos.y + weight + spacing
        );
        p1 = new Vector2(s.x, s.y);
        p2 = new Vector2(s.x - weight - spacing, s.y);
        p3 = new Vector2(
          s.x - weight - length / 2 + weight * 2 + spacing - width / 2,
          s.y - weight * 2 + length + height
        );
        p4 = new Vector2(
          s.x - weight - length / 2 + weight * 2 + spacing - width / 2,
          s.y + length + height
        );
        p5 = new Vector2(
          s.x - length / 2 + weight * 2 + 2 * spacing - width / 2,
          s.y + length + height
        );
        p6 = new Vector2(s.x, s.y + weight + spacing);
        break;
      }
      case 13: {
        s = new Vector2(
          this.initPos.x + length / 2 - spacing,
          this.initPos.y + weight * 3 + spacing * 3 + length + height
        );
        p1 = new Vector2(s.x + width / 2, s.y);
        p2 = new Vector2(s.x - weight - spacing + width / 2, s.y);
        p3 = new Vector2(
          s.x - weight - length / 2 + weight * 2 + spacing,
          s.y - weight * 2 + length + height
        );
        p4 = new Vector2(
          s.x - weight - length / 2 + weight * 2 + spacing,
          s.y + length + height
        );
        p5 = new Vector2(
          s.x - length / 2 + weight * 2 + 2 * spacing,
          s.y + length + height
        );
        p6 = new Vector2(s.x + width / 2, s.y + weight + spacing);
        break;
      }
      case 14: {
        s = new Vector2(
          this.initPos.x + weight * 2 + spacing + length / 2 + width,
          this.initPos.y + weight * 3 + spacing * 3 + length + height
        );
        p1 = new Vector2(s.x - width / 2, s.y);
        p2 = new Vector2(s.x + weight + spacing - width / 2, s.y);
        p3 = new Vector2(
          s.x + weight + length / 2 - weight * 2 - spacing,
          s.y - weight * 2 + length + height
        );
        p4 = new Vector2(
          s.x + weight + length / 2 - weight * 2 - spacing,
          s.y + length + height
        );
        p5 = new Vector2(
          s.x + length / 2 - weight * 2 - 2 * spacing,
          s.y + length + height
        );
        p6 = new Vector2(s.x - width / 2, s.y + weight + spacing);
        break;
      }
    }

    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.lineTo(p3.x, p3.y);
    ctx.lineTo(p4.x, p4.y);
    ctx.lineTo(p5.x, p5.y);
    ctx.lineTo(p6.x, p6.y);
    ctx.closePath();
    ctx.fill();
    ctx.translate(0, 0);
  }
}

class segmentWord {
  constructor(str, numOfSeg, startX, startY, marquesine = true) {
    this.str = str;
    this.numOfSeg = numOfSeg;
    this.marqStr = this.marquesineText();
    this.specCharacters = [];
    this.x = startX;
    this.y = startY;
    this.segments = [];
    this.marquesineSegments = [];
    this.marquesine = marquesine;
    this.createSegments();
  }

  marquesineText() {
    // ::01011010110010::
    let specChar = this.str.match(/\:{2}(\d{14})\:{2}/);
    if (specChar) {
      this.specCharacters = [];
      const scIndex = this.str.indexOf(specChar[0]);
      const sc = { char: specChar[1], index: scIndex };
      this.str = this.str.replace(specChar[0], "");
      this.specCharacters.push(sc);
    }
    let spaces = "";
    for (let i = 0; i < this.numOfSeg; i++) {
      spaces = spaces + " ";
    }
    let result = spaces + this.str;
    return result;
  }

  createSegments() {
    this.segments = [];
    for (let i = 0; i < this.numOfSeg; i++) {
      const seg = new segment(
        this.marquesine ? this.marqStr[i] : this.str[i],
        this.x + i * length * 2 + weight * 2 * i + width * i + segmentSpace * i,
        this.y
      );
      this.segments.push(seg);
    }
  }

  updateMarquesine() {
    this.marqStr = this.marqStr.slice(1) + this.marqStr.slice(0, 1);
    for (let i = 0; i < this.numOfSeg; i++) {
      if (this.marquesine) {
        this.segments[i].char = this.marqStr[i];
      } else {
        if (
          this.specCharacters.length > 0 &&
          this.specCharacters[0].index == i
        ) {
          this.segments[i].spec = this.specCharacters[0].char;
          this.segments[i].char = "::::";
        } else {
          this.segments[i].char = this.str[i];
        }
      }
    }
  }

  update() {
    this.segments.forEach((element) => {
      element.update();
    });
  }
}

let spacing = 1;
let weight = 3;
let length = 30;
let height = 0;
let width = 5;
let segmentSpace = 0;
let speed = 10;
let counter = 0;

const seg = new segmentWord("", 10, 10, 20, true);

let count = 1;
function draw() {
  // update all
  if (counter >= speed) {
    // define width and height
    let canWidth =
      seg.segments.length *
      (width + length * 2 + spacing + segmentSpace + weight * 2);

    ctx.canvas.width = canWidth;
    ctx.canvas.height = 200;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    seg.updateMarquesine();
    seg.update();
    counter = 0;
  } else {
    counter++;
  }
}

function changeText() {
  seg.str = inp.value;
  seg.marqStr = seg.marquesineText();
}
function setHeight() {
  height = parseInt(document.getElementById("heightSetter").value);
  seg.createSegments();
}
function setWidth() {
  width = parseInt(document.getElementById("widthSetter").value);
  seg.createSegments();
}
function setLength() {
  length = parseInt(document.getElementById("sizeSetter").value);
  seg.createSegments();
}
function setWeigth() {
  weight = parseInt(document.getElementById("weigthSetter").value);
  seg.createSegments();
}
function setSpeed() {
  speed = parseInt(document.getElementById("speedSetter").value);
}

setInterval(draw, 30);
