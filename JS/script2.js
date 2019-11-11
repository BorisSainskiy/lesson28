class Marker {
  constructor(color, ink) {
    this.color = color;
    this.ink = ink;
  }
  seal(text) {
    this.text = text;
    let i = 0;
    let str = "";
    while (this.ink >= 0.5 && i != this.text.length) {
      if (this.text[i] != " ") {
        this.ink -= 0.5;
      }
      str += this.text[i];
      i++;
    }
    return str;
  }
}

let k = new Marker("d", 1);
// alert(k.seal("aci tt"));'
class RefuelMarker extends Marker {
  refuel(fuel) {
    this.fuel = fuel;
    this.ink = fuel;
  }
}

let o = new RefuelMarker("d", 1);
// alert(o.seal("aci tt"));
// o.refuel(2);
// alert(o.seal("aci tt"));
