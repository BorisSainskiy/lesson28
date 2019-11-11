class Circle {
  constructor(r) {
    this.r = r;
  }

  setR(r) {
    this.r = r;
  }

  getR() {
    return this.r;
  }

  getD() {
    return this.r * 2;
  }

  sCircle() {
    return this.r ** 2 * 3.14;
  }

  dCircle() {
    return this.r * 3.14 * 2;
  }
}

let radius = new Circle(3);
radius.setR(1);
alert(radius.sCircle());
