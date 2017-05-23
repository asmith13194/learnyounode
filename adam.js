
module.exports = function(process.argv[2],process.argv[3],callback){
  var fs = require('fs');
  var path = require('path');

  fs.readdir(process.argv[2],function(err,list){
    if(err) return console.console.error(err);
    list.filter(function(ele){
      if (path.extname(ele)==='.'+process.argv[3]){
        console.log(ele)
      }
    });
  })
}
