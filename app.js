// var emty = "";
// var pass = "";
// var password = "";
// function range(){
//     var len = document.getElementById("length").value
//     document.getElementById("length-value").innerHTML = len
//     // var len1 = document.getElementById("length").value
    
//     // symbols...............!!
//     var simbol = document.getElementById("specialsCb").checked
//     // small.................!!
//     var small = document.getElementById("lowercaseCb").checked
//     // capitals..............!!
//     var cap = document.getElementById("uppercaseCb").checked
//     // number................!!
//     var count = document.getElementById("digitsCb").checked

//     if (simbol == true){
//         emty += "!@#$%^&*()_"
//     }
//    else if (small == true){
//         emty += "asdfghjklqwertyuiopxcvbnm"
//     }
// //    else if (cap == true){
//         emty += "ASDFGHJKLQWERTYUIOPZXCVBNM"
//     }
//     else if (count == true){
//         emty += "1234567890"
//     }

//     for(var i = 0; i < len; i++){
//         pass = Math.floor(Math.random() * emty.length)
//         password += emty[pass]
//     }
//     console.log(password)
// }