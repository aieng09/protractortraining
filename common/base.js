//common module for all test cases
var pageHeader = require('./../objects/pageHeader');
var protractorHomePage = require('./../objects/protractorHomePage');
var protractorApiPage = require('./../objects/protractorApiPage');

var base = function(){

    this.ptor = protractor.getInstance();

    //page objects
    this.pageHeader = pageHeader;
    this.protractorHomePage = protractorHomePage;
    this.protractorApiPage = protractorApiPage;

    this.protractorHomePage.navigateToHomePage();

}

base.prototype.wait = function(sleepTime) {
    var ptor = protractor.getInstance();
    ptor.sleep(sleepTime);
}


module.exports = new base();