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
