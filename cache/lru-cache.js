/**
 * Created by yecl on 15/8/4.
 */
var lruCache = require('lru-cache');

var localCache = lruCache({
    maxAge : 120000,
    max: 500,
    stale:true
});

localCache.set('bbb', 'value', 500000);
localCache.set('ccc', 'value', 500000);

var has = localCache.has('bbb');
var val = localCache.peek('bbb');

console.log(has, val, localCache.keys());

localCache.reset();

console.log(localCache.has('bbb'), localCache.keys());