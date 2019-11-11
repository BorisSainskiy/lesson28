class Employee {
  constructor(name, experience, year) {
    this.name = name;
    this.experience = experience;
    this.year = year;
  }
}

let arr = [
  new Employee("Boris", 2, 22),
  new Employee("Max", 5, 30),
  new Employee("Inna", 12, 50),
  new Employee("Dima", 8, 28)
];

class EmpTable {
  constructor(arr) {
    this.arr = arr;
  }

  getHTML() {
    let table = document.createElement("table");
    table.setAttribute("style", "border: 1px solid black");
    document.body.appendChild(table);
    for (let obj of arr) {
      let tr = document.createElement("tr");
      table.appendChild(tr);
      let td1 = document.createElement("td");
      td1.innerText = obj.name;
      tr.appendChild(td1);
      let td2 = document.createElement("td");
      td2.innerText = obj.experience;
      tr.appendChild(td2);
      let td3 = document.createElement("td");
      td3.innerText = obj.year;
      tr.appendChild(td3);
    }
  }
}

let html = new EmpTable(arr);
html.getHTML();
