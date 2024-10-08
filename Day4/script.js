// let x=12;
// var y=1;
// let y=15; let cannot re declare
// function display()
// {    var x=10;
//      var y=15
//     console.log("hello",x,y);
// }
// display();
function validate(){
    let a=document.getElementById("un").value;
    let b=document.getElementById("pass").value;
    let p1=document.getElementById("result");
    if(a=="admin" && b=="admin"){
        alert("login success");
        // p1.innerText="login success";
    }
    else{
      alert("not sucessfull");
    }
    
}
validate();