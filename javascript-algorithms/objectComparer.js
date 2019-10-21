function whatIsInAName(collection, source) {
    var arr = [];

    collection.forEach(x => {
        let keys = Object.keys(x);
        let values = Object.values(x);

        source.forEach(y => {
            if (Object.keys(y) == keys && Object.values(y) == values) {
                arr.push(x);
            }
        })

    })

    return arr;
}
