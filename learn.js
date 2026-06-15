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

// class Order {
//   constructor(orderId, customerName, items, totalAmount) {
//     this.orderId = orderId;
//     this.customerName = customerName;
//     this.items = items;
//     this.totalAmount = totalAmount;
//   }

//   getItemCount() {
//     return this.items.length;
//   }

//   displayOrder() {
//     console.log(`Order ID: ${this.orderId}`);
//     console.log(`Customer: ${this.customerName}`);
//     console.log(`Items Count: ${this.getItemCount()}`);
//     console.log(`Amount: ${this.totalAmount}`);
//     console.log("************************");
//   }
// }

// const orders = [
//   new Order(101, "Yashwant", ["Pizza", "Burger", "Cold Drink"], 1200),
//   new Order(102, "Balwant", ["Biryani", "Paneer Tikka"], 2400),
//   new Order(103, "Karam", ["Sandwich", "Coffee"], 500),
//   new Order(104, "Ravi", ["Thali", "Lassi"], 800),
//   new Order(105, "Komal", ["Cake", "Juice"], 1500),
//   new Order(106, "Karan", ["Pizza", "Fries"], 950),
//   new Order(107, "Arsh", ["Burger", "Shake"], 1100),
//   new Order(108, "Sandeep", ["Pasta", "Soup"], 1050),
// ];

// orders.forEach(order => order.displayOrder());

// const totalRevenue = orders.reduce((sum, o) => sum + o.totalAmount, 0);
// const highestOrder = orders.reduce((max, o) => o.totalAmount > max.totalAmount ? o : max);
// const customersAbove1000 = orders.filter(o => o.totalAmount > 1000).map(o => o.customerName);
// const averageOrderValue = totalRevenue / orders.length;

// console.log(`Total Revenue: ${totalRevenue}`);
// console.log(`Highest Order:\nCustomer: ${highestOrder.customerName}\nAmount: ${highestOrder.totalAmount}`);
// console.log("Customers Above 1000:");
// console.log(customersAbove1000.join("\n"));
// console.log(`Average Order Value: ${averageOrderValue}`);



// // Emplooyee Performance tracking System

// // Define Employee class
// class Employee {
//   constructor(employeeId, name, department, completedTasks, salary) {
//     this.employeeId = employeeId;
//     this.name = name;
//     this.department = department;
//     this.completedTasks = completedTasks;
//     this.salary = salary;
//   }

//   getTaskCount() {
//     return this.completedTasks.length;
//   }

//   displayEmployee() {
//     console.log(`Employee: ${this.name}`);
//     console.log(`Department: ${this.department}`);
//     console.log(`Tasks Completed: ${this.getTaskCount()}`);
//     console.log(`Salary: ${this.salary}`);
//     console.log("************************");
//   }
// }

// const employees = [
//   new Employee(1, "Yashwant", "Backend", ["Login API", "Payment API", "Notification Service"], 60000),
//   new Employee(2, "Balwant", "Frontend", ["UI Design", "React Components", "Testing", "Deployment", "Bug Fixes", "Optimization", "Dashboard"], 65000),
//   new Employee(3, "Karam", "HR", ["Recruitment", "Payroll"], 40000),
//   new Employee(4, "Amit", "Backend", ["Database Setup", "API Security", "Logging"], 55000),
//   new Employee(5, "Komal", "Design", ["Logo", "Banner", "UI Kit", "Prototype"], 50000),
//   new Employee(6, "Karan", "Frontend", ["Landing Page", "Forms", "Animations"], 48000),
//   new Employee(7, "Arsh", "QA", ["Test Cases", "Automation", "Bug Reports", "Regression Testing"], 52000),
//   new Employee(8, "Ravi", "Backend", ["Authentication", "Data Migration", "Performance Tuning", "Monitoring"], 58000),
//   new Employee(9, "Daya", "HR", ["Training", "Employee Engagement", "Policy Draft"], 45000),
//   new Employee(10, "Sandeep", "Frontend", ["Responsive Design", "Accessibility", "SEO"], 47000),
// ];

// employees.forEach(emp => emp.displayEmployee());

// const topPerformer = employees.reduce((max, e) => e.getTaskCount() > max.getTaskCount() ? e : max);
// const averageSalary = employees.reduce((sum, e) => sum + e.salary, 0) / employees.length;
// const below5Tasks = employees.filter(e => e.getTaskCount() < 5).length;

// const deptTasks = {};
// employees.forEach(e => {
//   // console.log(e.department + e.getTaskCount())
//   deptTasks[e.department] = (deptTasks[e.department] || 0) + e.getTaskCount();
//   console.log(deptTasks)
// });
// const mostProductiveDept = Object.keys(deptTasks).reduce((a, b) => deptTasks[a] > deptTasks[b] ? a : b);

// console.log(`Top Performer:\n${topPerformer.name} (${topPerformer.getTaskCount()} Tasks)`);
// console.log(`Average Salary:\n${averageSalary}`);
// console.log(`Employees Below 5 Tasks:\n${below5Tasks}`);
// console.log(`Most Productive Department:\n${mostProductiveDept}`);

// Q1 Food Delivery Company me konsa order sabse jada order hua hai, uska naam aur amount kya hai, total revenue kitna hua hai, average order value kya hai, aur 1000 se jada order karne wale customers ke naam kya hai

// class Order {
//   constructor(orderId, customerName, items, totalAmount) {
//     this.orderId = orderId;
//     this.customerName = customerName;
//     this.items = items;
//     this.totalAmount = totalAmount;
//   }

//   getItemCount() {
//     return this.items.length;
//   }

//   displayOrder() {
//     console.log(`Order ID: ${this.orderId}`);
//     console.log(`Customer: ${this.customerName}`);
//     console.log(`Items Count: ${this.getItemCount()}`);
//     console.log(`Amount: ${this.totalAmount}`);
//     console.log("************************");
//   }
// }

// const orders = [
//   new Order(101, "Yashwant", ["Pizza", "Burger", "Cold Drink"], 1200),
//   new Order(102, "Balwant", ["Biryani", "Paneer Tikka"], 2400),
//   new Order(103, "Karam", ["Sandwich", "Coffee"], 500),
//   new Order(104, "Ravi", ["Thali", "Lassi"], 800),
//   new Order(105, "Komal", ["Cake", "Juice"], 1500),
//   new Order(106, "Sonu", ["Sandwich", "Coffee"], 500),
//   new Order(107, "Karan", ["Pizza", "Fries"], 950),
//   new Order(108, "Arsh", ["Burger", "Shake"], 1100),
//   new Order(109, "Siji", ["Sandwich", "Coffee"], 500),
//   new Order(110, "Sandeep", ["Pasta", "Soup"], 1050),
// ];

// orders.forEach(order => order.displayOrder());

// const totalRevenue = orders.reduce((sum, o) => sum + o.totalAmount, 0);
// const highestOrder = orders.reduce((max, o) => o.totalAmount > max.totalAmount ? o : max);
// const customersAbove1000 = orders.filter(o => o.totalAmount > 1000).map(o => o.customerName);
// const averageOrderValue = totalRevenue / orders.length;
// const orderCounts = orders.filter(o => o.items.includes("Sandwich") && o.items.includes("Coffee")).length;

// console.log(`Total Revenue: ${totalRevenue}`);
// console.log(`Highest Order:\nCustomer: ${highestOrder.customerName}\nAmount: ${highestOrder.totalAmount}`);
// console.log("Customers Above 1000:");
// console.log(customersAbove1000.join("\n"));
// console.log(`Average Order Value: ${averageOrderValue}`);
// console.log(`Total Orders with Sandwich and Coffee: ${orderCounts}`);

// Q2 Shopping Cart System

// class ShoppingCart {
//   constructor(customerName, items, totalAmount) {
//     this.bills = [{ customerName, items, totalAmount }];
//   }
//   displayBills() {
//     this.bills.forEach(bill => {
//       console.log(`Customer: ${bill.customerName}`);
//       console.log(`Items: ${bill.items.join(", ")}`);
//       console.log(`Total Amount: ${bill.totalAmount}`);
//       console.log("************************");
//     });
// }
// }
// const cart = [new ShoppingCart("Yashwant", ["Laptop", "Mouse"], 50000),
// new ShoppingCart("Balwant", ["Phone", "Headphones"], 30000),
// new ShoppingCart("Karam", ["Tablet", "Cover"], 15000)];
// cart.forEach(c => c.displayBills());

// const totalBills= cart.reduce((sum, c) => sum + c.bills.length, 0);
// console.log(`Total Bills: ${totalBills}`);

// Q3 Student record management system

// class StudentRecord {
//   constructor(studentId, name, age, course, performance, percentage) {
//     this.studentId = studentId;
//     this.name = name;
//     this.age = age;
//     this.course = course;
//     this.performance = performance;
//     this.percentage = percentage;
//   }
//   displayRecord() {
//     console.log(`Student ID: ${this.studentId}`);
//     console.log(`Name: ${this.name}`);
//     console.log(`Age: ${this.age}`);
//     console.log(`Course: ${this.course}`);
//     console.log(`Performance: ${this.performance}`);
//     console.log(`Percentage: ${this.percentage}`);
//     console.log("************************");
//   }

// } 
// const students = [
//   new StudentRecord(1, "Yashwant", 23, "BCA", "Excellent", 80),
//   new StudentRecord(2, "Balwant", 20, "BCA", "Good", 75),
//   new StudentRecord(3, "Karam", 22, "BCA", "Average", 60),
//   new StudentRecord(4, "Ravi", 21, "BCA", "Good", 75),
//   new StudentRecord(5, "Komal", 24, "BCA", "Excellent", 90),
//   new StudentRecord(6, "Karan", 23, "BCA", "Average", 60),
//   new StudentRecord(7, "Arsh", 22, "BCA", "Good", 75),
//   new StudentRecord(8, "Sandeep", 21, "BCA", "Excellent", 85),
// ];

// students.forEach(student => student.displayRecord());

// const topThreeStudents = students.sort((a, b) => b.percentage - a.percentage).slice(0, 3);
// console.log("Top 3 Students:");
// topThreeStudents.forEach(student => {
//   console.log(`Name: ${student.name}, Percentage: ${student.percentage}`);
// });

//  Q4 Employee list me se active employees nikale

// class Employee {
//   constructor(employeeId, name, department, isActive) {
//     this.employeeId = employeeId;
//     this.name = name;
//     this.department = department;
//     this.isActive = isActive;
//   }
//   isActiveEmployee() {
//     return this.isActive;
//   }
// }
// const employees = [
//   new Employee(1, "Yashwant", "Backend", true),
//   new Employee(2, "Balwant", "Frontend", false),
//   new Employee(3, "Karam", "Backend", true),
//   new Employee(4, "Ravi", "Frontend", false)
// ];

// const activeEmployees = employees.filter(employee => employee.isActiveEmployee());
// console.log("Active Employees:");
// activeEmployees.forEach(employee => {
//   console.log(`Name: ${employee.name}, Department: ${employee.department}`);
// });

// Q5 Movie list ko rating ke hisab se sort kare
// class Movie {
//   constructor(title, rating) {
//     this.title = title;
//     this.rating = rating;
//   }
// }

// const movies = [
//   new Movie("Dhurander", 8.8),
//   new Movie("Marco", 9.0),
//   new Movie("Iron man", 8.6),
//   new Movie("Spider-Man", 8.5),
//   new Movie("Vaazha", 8.4)
// ]
// const sortedMovies = movies.sort((a, b) => b.rating - a.rating);
// console.log("Movies sorted by rating in descending order:");
// sortedMovies.forEach(movie => {
//   console.log(`Title: ${movie.title}, Rating: ${movie.rating}`);
// });

// Q6 Ecommerce product list me se out of stock products ko remove kare
// class Product {
//   constructor(name, price, outOfStock) {
//     this.name = name;
//     this.price = price;
//     this.outOfStock = outOfStock;
//   }
//   isOutOfStock() {
//     return this.outOfStock;
//   }
// }
// const products = [
//   new Product("Laptop", 50000, false),
//   new Product("Phone", 30000, true),
//   new Product("Tablet", 15000, false),
//   new Product("Headphones", 2000, true),
//   new Product("Smartwatch", 10000, false), 
//   new Product("Camera", 25000, true),
//   new Product("Printer", 8000, false),
//   new Product("Monitor", 12000, true),
// ];
// const outOfStockProducts = products.filter(product => product.isOutOfStock());
// console.log("Out of Stock Products:");
// outOfStockProducts.forEach(product => {
//   products.splice(products.indexOf(product), 1);
// });
// console.log("Products after removing out of stock items:");
// products.forEach(product => {
//   console.log(`Name: ${product.name}, Price: ${product.price}`);
// });

// Q7 User list me duplicate email addresses ko find karo

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
//   displayUser() {
//     console.log(`Name: ${this.name}, Email: ${this.email}`);
//   }
// }
// const users = [
//   new User("Yashwant", "yashwant@gmail.com"),
//   new User("Balwant", "balwant@gmail.com"),
//   new User("Karam", "karam@gmail.com"),
//   new User("Ravi", "ravi@gmail.com"),
//   new User("Yashwant", "yashwant@gmail.com"), 
//   new User("Komal", "komal@gmail.com"), 
//   new User("Karan", "karan@gmail.com"),
//   new User("Arsh", "arsh@gmail.com"),
//   new User("Karam", "karam@gmail.com"),
//   new User("Ravi", "ravi@gmail.com"),
//   new User("Komal", "komal@gmail.com")
// ];

// const emailCounts = users.reduce((acc, user) => {
//   acc[user.email] = (acc[user.email] || 0) + 1;
//   return acc;
// }, {});

// const duplicateEmails = Object.keys(emailCounts).filter(email => emailCounts[email] > 1);
// console.log("Duplicate Emails:");
// duplicateEmails.forEach(email => {
//   console.log(email);
// });

// Q8 Attendance data me total present count karo
class Student {
  constructor(name, attendance) {
    this.name = name;
    this.attendance = attendance;
  } 
  isPresent() {
    return this.attendance === "Present";
  } 
}

const students = [
  new Student("Yashwant", "Present"),
  new Student("Balwant", "Absent"),
  new Student("Karam", "Present"),
  new Student("Ravi", "Present"),
  new Student("Komal", "Absent"),
  new Student("Karan", "Present"),
  new Student("Arsh", "Present"),
  new Student("Sandeep", "Absent"),
];
const totalPresent = students.filter(student => student.isPresent()).length;
console.log(`Total Present: ${totalPresent}`);

// Q9 Bank transaction me total credits ammount calculate karo

class Transaction {
  constructor(type, amount) {
    this.type = type;
    this.amount = amount;
  } 
  isCredit() {
    return this.type === "Credit";
  }
}
const transactions = [
  new Transaction("Credit", 5000),
  new Transaction("Credit", 2000),
  new Transaction("Credit", 3000),
  new Transaction("Debit", 1000),
  new Transaction("Credit", 4000),
  new Transaction("Debit", 1500),
  new Transaction("Credit", 2500),
  new Transaction("Debit", 500),
];
const totalCredits = transactions.filter(transaction => transaction.isCredit()).reduce((sum, transaction) => sum + transaction.amount, 0);
console.log(`Total Credits: ${totalCredits}`);

// Q10 Customer Orders me se specific customer ke orders ko nikalo
class Order {
  constructor(customerName, items, totalAmount) {
    this.customerName = customerName;
    this.items = items;
    this.totalAmount = totalAmount;
  }
}
const orders = [
  new Order("Yashwant", ["Pizza", "Burger"], 1200),
  new Order("Balwant", ["Biryani", "Paneer Tikka"], 2400),
  new Order("Karam", ["Sandwich", "Coffee"], 500),
  new Order("Ravi", ["Thali", "Lassi"], 800),
  new Order("Komal", ["Cake", "Juice"], 1500),
  new Order("Yashwant", ["Pasta", "Salad"], 1000),
  new Order("Balwant", ["Pizza", "Fries"], 900),
  new Order("Karam", ["Burger", "Shake"], 1100),
  new Order("Ravi", ["Sandwich", "Coffee"], 500),
  new Order("Komal", ["Thali", "Lassi"], 800),
];
const customerName = "Yashwant";
const customerOrders = orders.filter(order => order.customerName === customerName);
console.log(`Orders for ${customerName}:`);
customerOrders.forEach(order => {
  console.log(`Items: ${order.items.join(", ")}, Total: ${order.totalAmount}`);
}); 

// Q11 Product prices par 15% discount apply karke new list banao
class Product {
  constructor(name, price) { 
    this.name = name;
    this.price = price;
  }
}
const products = [
  new Product("Laptop", 50000),
  new Product("Phone", 30000),
  new Product("Tablet", 20000),
  new Product("Headphones", 15000),
];
const discountedProducts = products.map(product => {
  const discountedPrice = product.price - (product.price * 0.15);
  return new Product(product.name, discountedPrice);
});
console.log("Products with 15% Discount:");
discountedProducts.forEach(product => {
  console.log(`Name: ${product.name}, Price: ${product.price}`);
});

// Q12 Chat application me latest 10 messages ko display karo
class Message {
  constructor(sender, content, timestamp) {
    this.sender = sender;
    this.content = content;
    this.timestamp = timestamp;
  }
}
const messages = [
  new Message("Yashwant", "Hello!", "2024-06-01 10:00"),
  new Message("Balwant", "Hi!", "2024-06-01 10:05"),
  new Message("Karam", "How are you?", "2024-06-01 10:10"),
  new Message("Ravi", "I'm good, thanks!", "2024-06-01 10:15"),
  new Message("Komal", "What about you?", "2024-06-01 10:20"),
  new Message("Yashwant", "I'm doing well.", "2024-06-01 10:25"),
  new Message("Balwant", "Great to hear!", "2024-06-01 10:30"),
  new Message("Karam", "Let's catch up later.", "2024-06-01 10:35"),
];  

const latestMessages = messages.slice(-10);
console.log("Latest 10 Messages:");
latestMessages.forEach(message => {
  console.log(`From: ${message.sender}, Content: ${message.content}, Time: ${message.timestamp}`);
});


// Q13 Cricket scires array me highest score find karo
class Score {
  constructor(playerName, runs) {
    this.playerName = playerName;
    this.runs = runs;
  }
}
const scores = [
  new Score("Sachin", 200),
  new Score("Sehwag", 180),
  new Score("Ganguly", 150),
  new Score("Dravid", 160),
];
const highestScore = Math.max(...scores.map(score => score.runs));
console.log(`Highest Score: ${highestScore}`);

// Q14 Online exam results me passing students ki list banao
class onlineExamResult {
  constructor(name, score) {  
    this.name = name;
    this.score = score;
  }
}
const studentResults = [
  new onlineExamResult("Yashwant", 85),
  new onlineExamResult("Balwant", 60),  
  new onlineExamResult("Karam", 45),
  new onlineExamResult("Ravi", 70),
  new onlineExamResult("Komal", 55),
];
const passingStudents = studentResults.filter(student => student.score >= 50);
console.log("Passing Students:");
passingStudents.forEach(student => {
  console.log(`Name: ${student.name}, Score: ${student.score}`);
});

// Q15 Todo list me completed tasks ko alg array me store karo
class Task {
  constructor(description, isCompleted) {
    this.description = description;
    this.isCompleted = isCompleted;
  }
}
const tasks = [
  new Task("Buy groceries", false),
  new Task("Walk the dog", true),
  new Task("Read a book", false),
  new Task("Write a report", true),
];
const completedTasks = tasks.filter(task => task.isCompleted);
console.log("Completed Tasks:");
completedTasks.forEach(task => {
  console.log(`Description: ${task.description}`);
});

// Q16 Social media posts me sabse jada likes wale post ko find karo
class Post {
  constructor(content, likes) {
    this.content = content;
    this.likes = likes;
  }
}
const posts = [
  new Post("Post 1", 100),
  new Post("Post 2", 250),
  new Post("Post 3", 150),
  new Post("Post 4", 300),
];
const mostLikedPost = posts.reduce((max, post) => post.likes > max.likes ? post : max);
console.log(`Most Liked Post: ${mostLikedPost.content} with ${mostLikedPost.likes} likes`); 

// Q17 sales data se monthly revenue calculate karo
class Sale {
  constructor(month, revenue) {
    this.month = month;
    this.revenue = revenue;
  }
} 

const salesData = [
  new Sale("January", 50000),
  new Sale("February", 60000), 
  new Sale("March", 55000),
  new Sale("April", 70000),
  new Sale("May", 65000),
];
const totalRevenue = salesData.reduce((sum, sale) => sum + sale.revenue, 0);
console.log(`Total Revenue: ${totalRevenue}`); 

// Q18 Array me second highest number find karo
const numbers = [10, 20, 30, 40, 50];
const uniqueNumbers = [...new Set(numbers)];
const secondHighest = uniqueNumbers.sort((a, b) => b - a)[1];
console.log(`Second Highest Number: ${secondHighest}`);

// Q19 Employee salaries me se average salary calculate karo
class EmployeeSalary {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  } 
} 
const employeeSalaries = [
  new EmployeeSalary("Yashwant", 60000),
  new EmployeeSalary("Balwant", 65000),
  new EmployeeSalary("Karam", 40000),
  new EmployeeSalary("Ravi", 55000),
  new EmployeeSalary("Komal", 50000),
];
const averageSalary = employeeSalaries.reduce((sum, employee) => sum + employee.salary, 0) / employeeSalaries.length;
console.log(`Average Salary: ${averageSalary}`);

// Q20 ek array ko reverse karo bina reverse method ke
const arr = [1, 2, 3, 4, 5];
const reversedArr = [];
for (let i = arr.length - 1; i >= 0; i--) {
  reversedArr.push(arr[i]);
}
console.log(`Original Array: ${arr}`);
console.log(`Reversed Array: ${reversedArr}`);