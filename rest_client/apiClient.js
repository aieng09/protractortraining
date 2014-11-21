/**
 * Created by aieng on 10/6/2014.
 */
var agent  = require('superagent-promise');

var apiClient = function(username,password,url){
    this.username = username;
    this.password = password;
    this.baseApiUrl = url;
    this.ContentType = 'application/json;charset=UTF-8';
};

apiClient.prototype = Object.create({},{
    getRequest:{
        value:function(urlPath,queries){
            return agent
                .get(this.baseApiUrl+urlPath)
                .set('Content-Type', this.ContentType)
                .auth(this.username, this.password)
                .query(queries)
                .end()
                .then(
                    function(res){
                        return res;
                    }
                );
        }
    },
    postRequest:{
        value:function(urlPath,data){
            return agent
                .post(this.baseApiUrl+urlPath)
                .set('Content-Type', this.ContentType)
                .auth(this.username, this.password)
                .send(data)
                .end().
                then(
                    function(res){
                     return res;
                    }
                );
        }
    },
    putRequest:{
        value:function(urlPath,data){
            return agent
                .put(this.baseApiUrl+urlPath)
                .set('Content-Type', this.ContentType)
                .auth(this.username, this.password)
                .send(data)
                .end().
                then(
                    function(res){
                        return res;
                    }
                );
        }
    },
    deleteRequest:{
        value:function(urlPath){
            return agent
                .del(this.baseApiUrl+urlPath)
                .set('Content-Type', this.ContentType)
                .auth(this.username, this.password)
                .end().
                then(
                    function(res){
                        return res;
                    }
            );
        }
    }
});

module.exports = apiClient;