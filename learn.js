// Student Management Create a class student with the following:

class student {
  constructor(name, age, course){
    this.name = name;
    this.age = age;
    this.course = course;
  }
  displayInfo(){
console.log(this.name, this.age, this.course)
  }
}
let student1 = new student("Balwant", "23", "BCA")
let student2 = new student("Ravi", "20", "BCA")
student1.displayInfo();
student2.displayInfo();

// Count vowels in string

let string = "Yashwant Balwant Ravi Karam Kour";
let vowels = "aeiou";
let count = 0;
for (char of string){
  for( c of vowels){
    if(char === c){
      count++
    }
  }
}
console.log(count)

// Product Price with GST you have an array of product prices

const prices = [100, 250, 500, 1000];
 const pricesWithGST = prices.map((price) => ((price * 18)/100)+price);
 console.log(pricesWithGST);





