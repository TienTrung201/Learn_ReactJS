// Mã hóa / Giải mã
// /Encode / decode
// Stringify/Parse
var json = '["Javascript", "PHP"]';
var json ='{"name":"Son dang","age": 18}'
var a = '1';
console.log(JSON.parse(json));
console.log(JSON.stringify({name: 'Son dang', age: 18}));

//1 penđing
//2 fulfulled
//3 rejected
var promise = new Promise(
    function(resolve, reject){
        resolve({
            id: 1,
            name: "js"
        })
})
promise 
    .then(function(result){
        console.log(result)
        return {
            id: result.id+1,
            name: result.name
        }
    })
    .then(function(result){
        console.log(result)
        return {
            id: result.id+1,
            name: result.name
        }
    })
    .then(function(result){
        console.log(result)
        return  new Promise(function(resolve){
            setTimeout(function(){
                resolve(result)
        },3000)
        })
    })
    .then(function(result){
        console.log(result)
        
    })
    .catch(function(){
        console.log('fall')

    })
    .finally(function(){
        console.log('done')
    })



    var promise =Promise.resolve("done")
    // trả về luôn

// Promise.all( [promisel, promise2])
//     .then(function(result) {
//     var result1 = result [0];S
//     var result2 = result [1];
//     console.log(result1.concat(result2))
// });
