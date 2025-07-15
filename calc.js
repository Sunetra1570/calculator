console.log("js file integrated");
function dis(n){
    var a = document.getElementById(n).value;
    console.log(`button ${n} pressed`);
    document.getElementById("display").innerHTML += a;
}
function solv(){
    try{
    var s = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = eval(s);
}
    catch(error){
        alert("wrong input format");
    }
}
function clr(){
     document.getElementById("display").innerHTML = "";
}

// function solv() {
//   let val = document.getElementById("display").innerHTML;
//   console.log(val);
//   let result = 0;

//   if (val.includes('+')) {
//     let parts = val.split('+');
//     result = Number(parts[0]) + Number(parts[1]);
//   } else if (val.includes('-')) {
//     let parts = val.split('-');
//     result = Number(parts[0]) - Number(parts[1]);
//   } else if (val.includes('*')) {
//     let parts = val.split('*');
//     result = Number(parts[0]) * Number(parts[1]);
//   } else if (val.includes('/')) {
//     let parts = val.split('/');
//     result = Number(parts[0]) / Number(parts[1]);
//   }

//   document.getElementById("display").innerHTML = result;
// }