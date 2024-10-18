// Sayhello=()=>
// {
//     console.log("hello function");

// };
// console.log("start");
// setTimeout(Sayhello,4000);
// console.log("end");
// 


// const mypromise=new Promise((resolve,reject)=>{
//    let success=false;
//    if(success){
//     resolve("accepted");
//    }
//    else {
//     resolve("rejected");
//    }

// });

// mypromise.then((message)=>
//     console.log(message))
//     .catch((error)=>console.log("error matching" + error)); //promises ,callback,callsync,call await
const students=[{
    name:"jay",
    score:20
 },
 {  name:"ajay",
    score: 120
 },
 {name:"aay",
    score: 60
 },
 {name:"ajaya",
 score: 12
 },
 
 ];
// function task(message, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(message);
//             resolve();
//         }, delay);
//     });
// }

// task(students, 1000)
//     .then(() => task("second task completed", 2000)) // Return the next task
    // .then(() => task("third task completed", 3000)); // Return the next task

 
function task(resolve, reject) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           const data={id:1,roll:22,name:"khushi"};
            resolve(data);
        }, 3000);
    });
}


task()
    .then((data)=>console.log(data)) // Return the next task
    //.then((data) =>{ task("third task completed")});