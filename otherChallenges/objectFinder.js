// first challenge
// return object that has the value of a key that is being looked for


var array = [{ name: "cliff", age: 25 }, { name: "chris", age: 20 }, { name: "jack", age: 25 }, { name: "andrew", age: 19 }];
var key = "age";
var value = 25;


function objectFind(arr, key, value) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i][key] == value) {
            console.log(i);
            break;
        }
    }

}

objectFind(array, key, value);

// second challenge
// return all indexes that match query in an array

var array1 = [{ name: "cliff", age: 25 }, { name: "chris", age: 20 }, { name: "jack", age: 25 }, { name: "andrew", age: 19 }];


function objectFind1(arr, key, value) {
    var arr1 = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i][key] == value) {
            arr1.push(i);
        }
    }
    console.log(arr1)



}

objectFind1(array1, key, value);


// third challenge, return any object with a value that matches query even if the key is different but value the same

var array2 = [{ a: "foo", age: 25 }, { name: "chris", age: 20 }, { name: "jack", age: 25 }, { b: "andrew", b: 'foo' }];

var query = "foo";


function objectFind2(arr, query) {
    var arr1 = []
    for (var i = 0; i < arr.length; i++){
        if (Object.values(arr[i]).indexOf(query) > -1){
            arr1.push(i)
        }
    }
    console.log(arr1)
}

objectFind2(array2, query);
