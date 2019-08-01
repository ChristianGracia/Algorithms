// first challenge
// return object that has the value of a key that is being looked for


var array = [{ name: "cliff", age: 25 }, { name: "chris", age: 20 }, { name: "jack", age: 27 }, { name: "andrew", age: 19 }];
var key = "age";
var value = 25;


function objectFind(arr, key, value) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i][key] == value) {
            console.log(arr[i]);
        }
    }

}

objectFind(array, key, value);

// second challenge
// return all indexes that match query in an array

var array = [{ name: "cliff", age: 25 }, { name: "chris", age: 20 }, { name: "jack", age: 25 }, { name: "andrew", age: 19 }];
var key = "age";
var value = 25;


function objectFind(arr, key, value) {
    var arr1 = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i][key] == value) {
            arr1.push(i);
        }
    }
    console.log(arr1)
    


}

objectFind(array, key, value);
