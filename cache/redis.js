/**
 * Created by yecl on 15/8/2.
 */
var redis = require('redis');

var redisConnection = redis.createClient(
    6379,
    '127.0.0.1',
    {
        auth_pass : null
    }
);

redisConnection.on('error', function(err){
    console.error(err);
});

redisConnection.setex('aaaaa', 600, 'value', function(err, result){
    console.log(result);
});

redisConnection.get('aaaaa', function(err, result){
    console.log(result);
});
