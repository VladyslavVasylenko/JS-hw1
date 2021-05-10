"use strict";

const mainContentEl = document.getElementById("content");

const tableDiv = document.createElement("div");
tableDiv.setAttribute("id","content__tableDiv");
tableDiv.className = "content__tableDivr";

const tableEl = document.createElement("table");
tableEl.setAttribute("id", "content-table");
tableEl.className = "content-table";

tableDiv.append(tableEl);
mainContentEl.append(tableDiv);

class Employee {
  constructor(name, position, department, salary) {
    this.name = name;
    this.position = position;
    this.department = department;
    this.salary = salary;
  }
}

const employees = [
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

class EmpTable {
  constructor(employees) {
    this.employees = employees;
  }

  getHtml() {
    const table = document.getElementById("content-table");
    
    const employees = this.employees;

    const head = document.createElement("tr");

    const th1 = document.createElement("th");
    th1.textContent = "Name";

    const th2 = document.createElement("th");
    th2.textContent = "Position";

    const th3 = document.createElement("th");
    th3.textContent = "Dapartment";

    const th4 = document.createElement("th");
    th4.textContent = "Salary ($)";

    head.append(th1);

    head.append(th2);

    head.append(th3);

    head.append(th4);

    table.append(head);

    for (let i in employees) {
      let tr = document.createElement("tr");

      table.append(tr);

      for (let j in employees[i]) {
        let td = document.createElement("td");

        td.textContent = employees[i][j];

        tr.append(td);

        td.setAttribute("style", "padding: 5px 10px; font-size:18px;");
      }
    }

    table.setAttribute("border", "2");
    table.setAttribute("bordercolor", "blue");
    table.setAttribute("width", "60%");
    table.setAttribute("style", "margin: 0 auto; background-color: white;");
  }
}

const tableObj = new EmpTable(employees);
tableObj.getHtml();
