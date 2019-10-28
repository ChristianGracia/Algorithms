function truthCheck(collection, pre) {

    var bool = true;
    var arr = [];
    pre.forEach(x => {
        arr.push(x);
    })
    console.log(arr.join(""));

    for (var i = 0; i < collection.length; i++) {


    }

    return bool;
}

truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex");
