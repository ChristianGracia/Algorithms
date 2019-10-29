function truthCheck(collection, pre) {
    var bool = true;
    for (var i = 0; i < collection.length; i++) {
        if (!collection[i][pre]) {
            bool = false;
        }
    }
    return bool;
}

//time 16 mins

truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex");