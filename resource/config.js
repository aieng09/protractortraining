var fileSystem = require('fs');
var file = __dirname+"/protractordemo.properties.json";
var data = fileSystem.readFileSync(file);


var protractorDemoEnvironmentSetting;

try{
    protractorDemoEnvironmentSetting = JSON.parse(data);

}catch(err){
    console.log('Unable to parse json file');
    console.log(err);
}

var protractorDemoConfig = function(){
    this.protractorDemoEnvironmentSetting = protractorDemoEnvironmentSetting;
}

module.exports = new protractorDemoConfig();