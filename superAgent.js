/**
 * Created by yecl on 15/7/28.
 */
var superAgent = require('superagent'),
    moment = require('moment');

var s = moment();

superAgent.post('http://www.iteye.com/news/30794')
    //.send(apiRequest)
    //.set('Content-Type', 'application/json; charset=utf-8')
    .timeout(5000)
    .end(function (err, res) {

        var log = 'Request:(用时%d毫秒) %s';

        console.log(log, moment().diff(s), '');
    })
    .on('error', function (err) {
        console.log('apiHelper 请求API接口错误：');
        console.log(err);
    });