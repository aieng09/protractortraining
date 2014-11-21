/**
 * Created by aieng on 10/14/2014.
 */

var apiClient = require('./apiClient');
var zapiConfig = require('./resources/zapiConfig');
var environment = zapiConfig.environment;
var zapiProperties = zapiConfig.zapiProperties;

var ZapiClient = function(){
    this.baseApiUrl = environment.baseApiUrl;
    this.apiClient = new apiClient(environment.username,environment.password,this.baseApiUrl);
}

 function getCurrentTime(){
    var shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var newDate = new Date();
    var month = shortMonths[newDate.getMonth()];
    var dateString = newDate.getDate() + "/";
    dateString += month + "/";
    dateString += newDate.getFullYear();
    return dateString;
};


ZapiClient.prototype = Object.create({},{
    getAllTestCycles:{
        value:function(){
            var param = zapiProperties.getAllTestCycles.queryParam;
            param.projectId = environment.projectId;
            param.versionId = environment.versionId;
            return this.apiClient.getRequest(zapiProperties.getAllTestCycles.urlPath,param);
        }
    },
    getExecutionsByCycleId: {
        value: function (cycleId) {
            var param = zapiProperties.getAllExecutionByCycleId.queryParam;
            param.projectId = environment.projectId;
            param.cycleId = cycleId;
            return this.apiClient.getRequest(zapiProperties.getAllExecutionByCycleId.urlPath, param);
        }
    },
    executionTestCaseByExecutionId:{
        value:function(executionId,status){
            var data = zapiProperties.executeTestCaseByExecutionId.rawData;
            data.status = status;
            data.comment = "Automation Test Execution";
            var urlPath =zapiProperties.executeTestCaseByExecutionId.urlPath.replace("@EXECUTION_ID",executionId);
            return this.apiClient.putRequest(urlPath,data);
        }
    },
    cloneTestCycle:{
        value:function(){
            var data = zapiProperties.cloneTestCycle.rawData;
            data.clonedCycleId= environment.existingCycleId;
            data.projectId = environment.projectId;
            data.versionId = environment.versionId;
            data.startDate = getCurrentTime();
            data.endDate = getCurrentTime();
            data.name = Date.now() + "_E2E_Test_Automation_Cycle";
            return this.apiClient.postRequest(zapiProperties.cloneTestCycle.urlPath,data);
        }
    },
    deleteTestCycleById:{
        value:function(cycleId){
            var urlPath = zapiProperties.deleteTestCycleById.replace("@CYCLE_ID",cycleId);
            return this.apiClient.deleteRequest(urlPath);
        }
    },
    addTestCaseToCycle:{
        value:function(testcaseid,cycleId){
            var data = zapiProperties.addTestToTestCycle.rawData;
            data.cycleId= cycleId;
            data.projectId = environment.projectId;
            data.issues = [testcaseid];
            return this.apiClient.postRequest(zapiProperties.addTestToTestCycle.urlPath,data);
        }
    }

});

module.exports = new ZapiClient();