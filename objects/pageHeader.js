//protractor page header object

var pageHeader = function(){};

pageHeader.prototype = Object.create({},{
    home:{get:
        function(){
        }
    },
    reference:{get:
        function(){
        }
    },
    protractorAPI:{get:
        function(){
        }
    },
    clickOnReference: {
        value: function(){
        }
    },
    clickOnProtractorApi:{
        value: function(){
        }
    }
})

module.exports = new pageHeader();