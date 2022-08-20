function EmployeeCard(
  employeeId,
  fullName,
  department,
  level,
  imageURL,
  salary
) {
  this.employeeId = employeeId;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.imageURL = imageURL;
  this.salary = median(level);
}
function median(level) {
  switch (level) {
    case "Senior":
      return Math.floor(Math.random() * 501) + 1500;
    case "Mid-Senior":
      return Math.floor(Math.random() * 501) + 1000;
    case "Junior":
      return Math.floor(Math.random() * 501) + 500;
  }
}

let employee01 = new EmployeeCard(
  1000,
  "Ghazi Samer",
  "administration",
  "Senior",
  "https://randomuser.me/api/portraits/men/3.jpg"
);
let employee02 = new EmployeeCard(
  1001,
  "Lana Ali",
  "Finance",
  "Senior",
  "https://randomuser.me/api/portraits/women/3.jpg"
);
let employee03 = new EmployeeCard(
  1002,
  "Tamara Ayoub",
  "Marketing",
  "Senior",
  "https://randomuser.me/api/portraits/women/6.jpg"
);
let employee04 = new EmployeeCard(
  1003,
  "Safi Walid",
  "administration",
  "Mid-Senior",
  "https://randomuser.me/api/portraits/men/3.jpg"
);
let employee05 = new EmployeeCard(
  1004,
  "Omar Zaid",
  "Development",
  "Senior",
  "https://randomuser.me/api/portraits/men/7.jpg"
);
let employee06 = new EmployeeCard(
  1005,
  "Rana Saleh",
  "Development",
  "Junior",
  "https://randomuser.me/api/portraits/women/45.jpg"
);
let employee07 = new EmployeeCard(
  1006,
  "Hadi Ahmad",
  "Finance",
  "Mid-Senior",
  "https://randomuser.me/api/portraits/men/23.jpg"
);

function render(...employeeCode) {
  for (let x = 0; x < 7; x++)
    console.log(
      "name: " +
        employeeCode[x].fullName +
        ". " +
        "Salary: " +
        employeeCode[x].salary +
        "$"
    );
  return;
}

render(
  employee01,
  employee02,
  employee03,
  employee04,
  employee05,
  employee06,
  employee07
);

let container = document.getElementById("container");
let table = document.createElement("table");
let tr = document.createElement("tr");
// Create the header of the table
// Array of the Object keys(table header data)
let tHeader = [
  "Employee Id",
  "Full Name",
  "Department",
  "Level",
  "Image",
  "Salary",
];
function firstTableRow() {
  // this for-loop: to create td "t-data" for each Object keys(table header data) item in the array.
  for (s = 0; s < tHeader.length; s++) {
    if (s == 4) {
      continue;
    }
    // assign the <th>
    let th = document.createElement("th");
    // assign the data inside the <th>
    let tdText = document.createTextNode(tHeader[s]);
    // make the text appear in the <th>
    th.appendChild(tdText);
    // make the <th> appear in the <tr>
    tr.appendChild(th);
  }
  table.appendChild(tr);
  // assign this <tr> to the <table>
}
// 00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
function addNewToTable(array) {
  for (i = 0; i < array.length; i++) {
    // assigned the <tr> inside the for-loop to create it as many times as the loop ran.
    let tr = document.createElement("tr");
    // this for-loop extract and assign each (value) of the (keys) to a <td>, as much keys there are
    for (x = 0; x < Object.values(employee01).length; x++) {
      // if to skip the link
      if (x == 4) {
        continue;
      }
      // you get it ryt?
      let td = document.createElement("td");
      let tdText = document.createTextNode(Object.values(array[i])[x]);
      td.appendChild(tdText);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  container.appendChild(table);
}
let emplist;
function tableBody() {
  // assigned the letiables of the (object constructor"EmployeeCard") to Array
  emplist = [
    employee01,
    employee02,
    employee03,
    employee04,
    employee05,
    employee06,
    employee07,
  ];
  // this for-loop to make it run as the array length
  for (i = 0; i < emplist.length; i++) {
    // assigned the <tr> inside the for-loop to create it as many times as the loop ran.
    let tr = document.createElement("tr");
    // this for-loop extract and assign each (value) of the (keys) to a <td>, as much keys there are
    for (x = 0; x < Object.values(employee01).length; x++) {
      // if to skip the link
      if (x == 4) {
        continue;
      }
      // you get it ryt?
      let td = document.createElement("td");
      let tdText = document.createTextNode(Object.values(emplist[i])[x]);
      td.appendChild(tdText);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  container.appendChild(table);
}

firstTableRow();
tableBody();
// console.log(Object.keys(employee01));

let cardArr = [];
const addCard = (ev) => {
  ev.preventDefault();
  // to get info from (form)
  let cardInfo;

  function getInfo() {
    cardInfo = {
      employeeId: document.getElementById("idInput").value,
      fullName: document.getElementById("nameInput").value,
      department: document.getElementById("idDepartment").value,
      level: document.getElementById("idLevel").value,
      imageURL: document.getElementById("idImage").value,
      salary: median(document.getElementById("idLevel").value),
    };
    if (cardInfo.imageURL == "") {
      cardInfo.imageURL =
        "https://randomuser.me/api/portraits/women/" +
        Math.floor(Math.random() * (99 - 1) + 1) +
        ".jpg";
    }
  }

  getInfo();
  cardArr.push(cardInfo);
  tableArr.push(cardInfo);
  document.forms[0].reset();
  saveToLocal();
  createCard(cardInfo);
  addNewToTable(cardArr);
  console.warn("added", cardArr);
};
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("form").addEventListener("submit", addCard);
});

// to create cards
function createCard(array) {
  let image = array.imageURL;
  let id = array.employeeId;
  let fullName = array.fullName;
  let department = array.department;
  let level = array.level;
  let salary = array.salary;

  let cardTemplate =
    " <div id='divCard'>   <div> " +
    "    <img id='thePics' src=" +
    image +
    ">" +
    "    </div>" +
    "    <div>" +
    "      <h5>" +
    "Employee ID: " +
    id +
    "</h5>" +
    "<hr/>" +
    "      <p> Name: " +
    fullName +
    "</p> <p> Department: " +
    department +
    "</p>  <p>level:  " +
    level +
    "</p> <p> The Salary: " +
    salary +
    "$</p>";
  (" </div> </div>");

  document
    .getElementById("cardPlace")
    .insertAdjacentHTML("beforeend", cardTemplate);
}
for (i = 0; i < emplist.length; i++) {
  createCard(emplist[i]);
}
// 0000000000000000000000000000000000
function saveToLocal() {
  let strArr = JSON.stringify(cardArr);
  localStorage.setItem("employees", strArr);
  let strArr1 = JSON.stringify(emplist);
  localStorage.setItem("employees1", strArr1);
}

function getFromLocal() {
  let jsonArr = localStorage.getItem("employees");
  let arr = JSON.parse(jsonArr);

  cardArr = arr;
  arr.forEach((arr) => {
    createCard(arr);
  });
}
let tableArr = [];
function getFromLocal1() {
  let jsonArr1 = localStorage.getItem("employees1");
  let arr1 = JSON.parse(jsonArr1);

  tableArr = arr1;
  tableArr.forEach((x) => {
    addNewToTable(x);
  });
}

// on refresh the table added data
// localStorage.removeItem("employees1");
if (localStorage.getItem("employees") != null) {
  getFromLocal();
}
if (localStorage.getItem("employees1") != null) {
  getFromLocal1();
}
