/**
 * Created by yecl on 15/7/28.
 */
var superAgent = require('superagent'),
    moment = require('moment');

var s = moment();

superAgent.get('http://www.1caifu.com/')
    //.send(apiRequest)
    //.set('Content-Type', 'application/json; charset=utf-8')
    .timeout(2000)
    .end(function (err, res) {

        var log = 'Request:(用时%d毫秒) %s';

        console.log(log, moment().diff(s), '');
        if(err){
            //console.log('错误：');
            //console.log(err);
        }else{
            //console.log(res.status);
            //console.log(res.text);
        }
    })
    /*.on('error', function (err) {
        console.log('apiHelper 请求API接口错误：');
        console.log(err);
    })*/;