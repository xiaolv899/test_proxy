/**
 * Created by yecl on 15/8/1.
 */
var request = require('request'),
    moment = require('moment');

var s = moment();

request.get('http://www.1caifu.com/', function(err, res, body){
    //console.log(body);

    var log = 'Request:(用时%d毫秒) %s';

    console.log(log, moment().diff(s), '');
});