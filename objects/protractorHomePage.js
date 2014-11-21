//Protractor Home Page Object

var protractorHomePage = function(){};

protractorHomePage.prototype = Object.create({},{
    viewOnGitHubLink: {
        get:function(){
        }
    },
    protractorDescription:{
        get:function(){
        }
    },
    navigateToHomePage:{
        value:function(){
        }
    }
})

module.exports = new protractorHomePage();