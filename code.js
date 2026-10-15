const student = {
 name: "Priya" ,
 address:{
    city:"Chennai",
    state:"Tamilnadu"
 }
};

console.log(student.name); 
console.log(student.address.city);
console.log(student.address.state);


const user = {
   name:"Priya",
};

const{
   name: studentName,
   city = "Chennai",
}= user;
console.log(studentName);
console.log(city);

const username = null;
const age = 0;
const city = undefined;

console.log(username ?? "guest");
console.log(age ?? 18);
console.log(city ?? "Chennai");

