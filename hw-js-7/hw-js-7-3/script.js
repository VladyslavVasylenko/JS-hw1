"use strict";

const mainDiv = document.getElementById("content");

const tableDiv = document.createElement("div");
tableDiv.setAttribute("id","content__tableDiv");
tableDiv.className = "content__tableDiv";

const tableTag = document.createElement("table");
tableTag.setAttribute("id", "content__table");
tableTag.className = "content__table";

tableDiv.append(tableTag);
mainDiv.append(tableDiv);

class Employee {
  constructor(name, position, department, salary){
    this.name = name;
    this.position = position;
    this.department = department;
    this.salary = salary;
  }
}

const arrEmp = [
  new Employee("Vladyslav Vasylenko", "Manager", "Sales", 5000),
  new Employee("Olga Vasylenko", "DevOps Engineer", "Sales", 1000),
  new Employee("Vladyslav Sozonov", "Manager", "Sales", 7000),
  new Employee("Vlady Vasylenko", "Manager", "Sales", 4000),
  new Employee("Vlado Vasylin", "Manager", "Sales", 3000),
  new Employee("Vla Asylenko", "Manager", "Sales", 2000),
  new Employee("Vladoo Vaslo", "Manager", "Sales", 5000),
  new Employee("Ladyslav Sylenko", "Manager", "Sales", 1000),
  new Employee("Dyslav VLenko", "Team Lead", "Sales", 2000),
  new Employee("Vladyslav Vasylenko", "Senior Developer", "Sales", 9000),
  new Employee("Slava Enko", "Senior Developer", "Sales", 8000),
  new Employee("Vlev Dasylenko", "Junior Developer", "Sales", 3000),
  new Employee("Vladyslaven Vasylenkus", "Manager", "Sales", 7000),
  new Employee("Vladyslav Vasylenko", "Manager", "Sales", 4000),
  new Employee("Vladyslav Vasylenko", "Junior Developer", "Sales", 5000),
  new Employee("Vladyslav Vasylenko", "Middle Developer", "Sales", 6000),
  new Employee("Vladyslav Vasylenko", "Junior Developer", "Sales", 3000),
  new Employee("Vladyslav Vasylenko", "Junior Developer", "Sales", 4000),
  new Employee("Vladyslav Vasylenko", "Manager", "Sales", 5000),
];

class EmpTable{
  constructor(arr){
    this.arr = arr;
  }

  getHtml() {
    const table = document.getElementById("contant__table");
    
    const array = this.arr;

    const head = document.createElement("tr");
    head.setAttribute("style", "font-size:18px;");

    const th1 = document.createElement("th");
    th1.textContent = "Name";

    const th2 = document.createElement("th");
    th2.textContent = "Position";

    const th3 = document.createElement("th");
    th3.textContent = "Dapartment";

    const th4 = document.createElement("th");
    th1.textContent = "Salary ($)";

    head.append(th1);
    head.append(th2);
    head.append(th3);
    head.append(th4);
    table.append(head);

    for (let i in array) {
      let tr = document.createElement("tr");
      table.append(tr);
      for (let j in array[i]) {
        let td = document.createElement("td");
        td.textContent = array[i][j];
        tr.append(td);
        td.setAttribute("style", "padding: 5px 10px; font-size:18px;");
      }
    }
    table.setAttribute("border", "2");
    table.setAttribute("bordercolor", "brown");
    table.setAttribute("width", "60%");
    table.setAttribute("style", "margin: 0 auto; background-color: lightgrey;");
  }
}

const tableObj = new EmpTable(arrEmp);
tableObj.getHtml();