// var sum = 0;
// function addSum(){
//   for (var i = 2; i < process.argv.length; i++) {
//     sum += Number(process.argv[i])
//   }
//   console.log(sum)
// }
// addSum()

// var fs = require('fs');
// var lines = (fs.readFileSync(process.argv[2]).toString().split('\n').length-1)
// console.log(lines)

// var fs =require('fs');
// fs.readFile(process.argv[2],'utf-8',function(err,data){
//   if (err){
//     console.log('oops!');
//   }
//   console.log(data.split('\n').length-1);
// })

// var fs = require('fs');
// var path = require('path');
//
// fs.readdir(process.argv[2],function(err,list){
//   if(err) return console.console.error(err);
//   list.filter(function(ele){
//     if (path.extname(ele)==='.'+process.argv[3]){
//       console.log(ele)
//     }
//   });
// })

var adam = require('./adam.js')
