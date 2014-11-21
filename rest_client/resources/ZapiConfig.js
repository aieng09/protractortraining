/**
 * Created by aieng on 10/13/2014.
 * Config setting information for ZAPI
 */
var fileSystem = require('fs');
var file = __dirname+"/zephyr.api.environment.properties.json";
var data = fileSystem.readFileSync(file);

var zapiEnvironmentSetting;

try{
    zapiEnvironmentSetting = JSON.parse(data);
}catch(err){
    console.log('Unable tp parse json file');
    console.log(err);
}

var ZapiConfig = function(){
    this.environment = zapiEnvironmentSetting.Environments.Test;
    this.zapiProperties = zapiEnvironmentSetting.zapiProperties;
}

module.exports = new ZapiConfig();