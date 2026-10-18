let a;
console.log(a);
a=10;

greet();
function greet() {
    console.log("Print");
};
console.log(res);
const res = greet()=>{
              console.log("Print");       
};

function Account(){
    let Balance=1000;
    function Deposit(amount){
        Balance+=amount;
        console.log("Balance amount"+Balance);
    }
    return Deposit;

}
const MyAccount = Account();
MyAccount(500);
MyAccount(700);
