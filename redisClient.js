// // const Redis = require("ioredis");
// // module.exports = {
// //     RedisClient: () => {
// //         var redisClient = null;
// //         redisClient = new Redis()
// //         return redisClient;
// //     }
// // }
// const  { createClient } = require('redis');
// let redisClient;

// async function test(){
//     redisClient = createClient( {url:"localhost:6379", database:"DB0" });
//     console.log('hi')
    
//     redisClient.on('connect', function () {
//         console.log(' redis connected')
//     })
//     redisClient.on('error', function (error) {
//         console.log('error in connecting to redis' + error)
//     })
//     console.log('hi')
    
//     redisClient.set("abc", "21qwddwe")
// }

// test();




import { createClient } from 'redis';

const client = createClient({
    database: 1
});

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();

await client.set('key', 'value');
const value = await client.get('key');
await client.disconnect();