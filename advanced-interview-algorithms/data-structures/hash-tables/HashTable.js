class HashTable {
    constructor(size){
      this.data = new Array(size);
    }
  
    // O(1) unless crazy hash function
    _hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      console.log(hash)
      return hash;
    }

    // O(1) unless a lot of collisions
    get(key) {
        const hash = this._hash(key);
        const currentBucket = this.data[hash];

        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        } return undefined;
    }

    // O(1)
    set(key, value) {
        let hash = this._hash(key);
        if (!this.data[hash]) {
            this.data[this._hash(key)] = [];
        }
        this.data[hash].push([key, value]);
        return this.data;
    }

    // O(n)
    keys() {
        const keysArray = [];
        for(let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                keysArray.push(this.data[i][0][0]);
            }
        }
        return keysArray;
    }

    // O(n)
    keysWithCollisions() {
        if (!this.data.length) {
            return undefined
          }
          let result = []
          for (let i = 0; i < this.data.length; i++) {
              if (this.data[i] && this.data[i].length) {
                if (this.data.length > 1) {
                  for (let j = 0; j < this.data[i].length; j++) {
                    result.push(this.data[i][j][0])
                  }
                } else {
                  result.push(this.data[i][0])
                } 
              }
          }
          return result; 
    }
  }
  
  const hashTable = new HashTable(50);
  hashTable.set('cats', 23);
  hashTable.set('dogs1', 10000);
  console.log(hashTable);
  console.log(hashTable.get('cats'));
  hashTable.set('dogs2', 9);
  hashTable.set('dogs3', 9);
  console.log(hashTable.keys());
  console.log(hashTable.keysWithCollisions());