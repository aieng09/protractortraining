//protractor API page Object

var protractorApiPage = function() {};

protractorApiPage.prototype = Object.create({},{
    searchInput:{
        get:function(){
        }
    },
    clearSearchContent:{
        value:function(){
        }
    },
    enterSearchKeyWord:{
    value:function (text) {
        }
    },
    cssContainingTextLink:{
        get:function(){
        }
    },
    clickOnCssContainingTextLink:{
        value:function(){
        }
    },
    title:{
        get:function(){
        }
    }

});

module.exports = new protractorApiPage();