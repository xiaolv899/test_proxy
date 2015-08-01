/**
 * Created by yecl on 15/7/31.
 */
var urllib = require('urllib'),
    moment = require('moment');

var s = moment();

urllib.request('http://www.baidu.com/', {

}, function(err, result, res){

    var log = 'Request:(用时%d毫秒) %s';

    console.log(log, moment().diff(s), '');

    //console.log(res);

});