 //let ar=[1,2,3,44,55]
// console.log(array);
//let newarr=ar.filter((x)=>x%2==0).map((x)=>x*3);
//let newarr=ar.reduce((x,y)=>x+y,0);
//let newarr=ar.filter((x)=>x%2==0).map((x)=>x*4).reduce((x,y)=>x+y,0);
//console.log(newarr);
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
let ar=students;
let newarr=ar.filter((students)=>students.score>60).map((students)=>students.score*2).reduce((x,y)=>x+y,0);
console.log(newarr)

