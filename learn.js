// // Student Management Create a class student with the following:

// class student {
//   constructor(name, age, course){
//     this.name = name;
//     this.age = age;
//     this.course = course;
//   }
//   displayInfo(){
// console.log(this.name, this.age, this.course)
//   }
// }
// let student1 = new student("Balwant", "23", "BCA")
// let student2 = new student("Ravi", "20", "BCA")
// student1.displayInfo();
// student2.displayInfo();

// // Count vowels in string

// let string = "Yashwant Balwant Ravi Karam Kour";
// let vowels = "aeiou";
// let count = 0;
// for (char of string){
//   for( c of vowels){
//     if(char === c){
//       count++
//     }
//   }
// }
// console.log(count)

// // Product Price with GST you have an array of product prices

// const prices = [100, 250, 500, 1000];
//  const pricesWithGST = prices.map((price) => ((price * 18)/100)+price);
//  console.log(pricesWithGST);


//  let str = "Hello you how are you";
// const myArray = str.matchAll();
// console.log(myArray);

// Food Delivery Company Order Analytics system

class Order {
  constructor(orderId, customerName, items, totalAmount) {
    this.orderId = orderId;
    this.customerName = customerName;
    this.items = items;
    this.totalAmount = totalAmount;
  }

  getItemCount() {
    return this.items.length;
  }

  displayOrder() {
    console.log(`Order ID: ${this.orderId}`);
    console.log(`Customer: ${this.customerName}`);
    console.log(`Items Count: ${this.getItemCount()}`);
    console.log(`Amount: ${this.totalAmount}`);
    console.log("************************");
  }
}

const orders = [
  new Order(101, "Yashwant", ["Pizza", "Burger", "Cold Drink"], 1200),
  new Order(102, "Balwant", ["Biryani", "Paneer Tikka"], 2400),
  new Order(103, "Karam", ["Sandwich", "Coffee"], 500),
  new Order(104, "Ravi", ["Thali", "Lassi"], 800),
  new Order(105, "Komal", ["Cake", "Juice"], 1500),
  new Order(106, "Karan", ["Pizza", "Fries"], 950),
  new Order(107, "Arsh", ["Burger", "Shake"], 1100),
  new Order(108, "Sandeep", ["Pasta", "Soup"], 1050),
];

orders.forEach(order => order.displayOrder());

const totalRevenue = orders.reduce((sum, o) => sum + o.totalAmount, 0);
const highestOrder = orders.reduce((max, o) => o.totalAmount > max.totalAmount ? o : max);
const customersAbove1000 = orders.filter(o => o.totalAmount > 1000).map(o => o.customerName);
const averageOrderValue = totalRevenue / orders.length;

console.log(`Total Revenue: ${totalRevenue}`);
console.log(`Highest Order:\nCustomer: ${highestOrder.customerName}\nAmount: ${highestOrder.totalAmount}`);
console.log("Customers Above 1000:");
console.log(customersAbove1000.join("\n"));
console.log(`Average Order Value: ${averageOrderValue}`);
;


// Emplooyee Performance tracking System

// Define Employee class
class Employee {
  constructor(employeeId, name, department, completedTasks, salary) {
    this.employeeId = employeeId;
    this.name = name;
    this.department = department;
    this.completedTasks = completedTasks;
    this.salary = salary;
  }

  getTaskCount() {
    return this.completedTasks.length;
  }

  displayEmployee() {
    console.log(`Employee: ${this.name}`);
    console.log(`Department: ${this.department}`);
    console.log(`Tasks Completed: ${this.getTaskCount()}`);
    console.log(`Salary: ${this.salary}`);
    console.log("************************");
  }
}

const employees = [
  new Employee(1, "Yashwant", "Backend", ["Login API", "Payment API", "Notification Service"], 60000),
  new Employee(2, "Balwant", "Frontend", ["UI Design", "React Components", "Testing", "Deployment", "Bug Fixes", "Optimization", "Dashboard"], 65000),
  new Employee(3, "Karam", "HR", ["Recruitment", "Payroll"], 40000),
  new Employee(4, "Amit", "Backend", ["Database Setup", "API Security", "Logging"], 55000),
  new Employee(5, "Komal", "Design", ["Logo", "Banner", "UI Kit", "Prototype"], 50000),
  new Employee(6, "Karan", "Frontend", ["Landing Page", "Forms", "Animations"], 48000),
  new Employee(7, "Arsh", "QA", ["Test Cases", "Automation", "Bug Reports", "Regression Testing"], 52000),
  new Employee(8, "Ravi", "Backend", ["Authentication", "Data Migration", "Performance Tuning", "Monitoring"], 58000),
  new Employee(9, "Daya", "HR", ["Training", "Employee Engagement", "Policy Draft"], 45000),
  new Employee(10, "Sandeep", "Frontend", ["Responsive Design", "Accessibility", "SEO"], 47000),
];

employees.forEach(emp => emp.displayEmployee());

const topPerformer = employees.reduce((max, e) => e.getTaskCount() > max.getTaskCount() ? e : max);
const averageSalary = employees.reduce((sum, e) => sum + e.salary, 0) / employees.length;
const below5Tasks = employees.filter(e => e.getTaskCount() < 5).length;

const deptTasks = {};
employees.forEach(e => {
  // console.log(e.department + e.getTaskCount())
  deptTasks[e.department] = (deptTasks[e.department] || 0) + e.getTaskCount();
  console.log(deptTasks)
});
const mostProductiveDept = Object.keys(deptTasks).reduce((a, b) => deptTasks[a] > deptTasks[b] ? a : b);

console.log(`Top Performer:\n${topPerformer.name} (${topPerformer.getTaskCount()} Tasks)`);
console.log(`Average Salary:\n${averageSalary}`);
console.log(`Employees Below 5 Tasks:\n${below5Tasks}`);
console.log(`Most Productive Department:\n${mostProductiveDept}`);
