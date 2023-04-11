// Q No : 01

// function add(num1){
//     return function(num2 , num3){
//        return num1 + num2
//     }
// }

// console.log(add(10)(20));

// Q No : 02

// let serchVal = +prompt("Search the Value!");

// function findValue (arr) {
//     for(let i = 0; i<arr.length; i++){
//         if(arr.includes(serchVal)){
//          console.log(true)
//          break;
//         }else{
//             console.log(false);
//             break;
//         }
//     }
// }

// findValue([1,2,3,4,5,6]);

// Q No : 03

// const newElement = (text) => {
//     let paraEle = document.createElement("p");
//     let textNode = document.createTextNode(`${text}`);
//     paraEle.appendChild(textNode);
//     document.body.append(paraEle);
// }
// newElement("This is My Paragraph");

// Q No : 04

// let list = document.getElementById("list");
// let btn = document.getElementById("btn");

// btn.addEventListener("click" , addList);

// function addList(){
//      let newEle = document.createElement("li");
//      let val = prompt("Enter the Value then create a New Element");
//      let textNode = document.createTextNode(val);
//      newEle.appendChild(textNode);
//      document.body.append(newEle);
// }

// Q No : 05

// let change_bg = document.getElementById("change_bg");
// let heading = document.getElementById("heading");
// let chooseColor = prompt("Enter your Fav Color");

// function changeBackground(id , bg){
//     id.style.backgroundColor = bg;
// }

// changeBackground(heading , chooseColor);

// Q No : 06 / 07 Merge

// let prevStudent = localStorage.getItem("data");
// let studentsdData = prevStudent ? JSON.parse(prevStudent) : [];

// function saveData(){
//     let userData = {
//         name: prompt("Enter your Name"),
//         age: +prompt("Enter your Age"),
//         education: prompt("Enter the Education")
//     }
//     studentsdData.push(userData);
//     console.log(studentsdData);
//     let convertDatatoString = JSON.stringify(studentsdData);
//     localStorage.setItem("data" , convertDatatoString);

// }

// saveData();

// Q No : 08

// Store Data on LocalStorage

// function saveData() {
//    let person = {
//      name : prompt("Enter your Name"),
//      age : +prompt("Enter your Age"),
//      education : prompt("Enter your Educaion")
//    }
//     let convertIntoStr = JSON.stringify(person);
//     console.log(convertIntoStr);

//     localStorage.setItem("name" , person.name);
//     localStorage.setItem("age" , person.age);
//     localStorage.setItem("education" , person.education);

// }

// saveData();
