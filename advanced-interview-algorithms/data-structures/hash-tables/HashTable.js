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
  }
  
  const hashTable = new HashTable(50);
  hashTable.set('dogs', 10000)
  console.log(hashTable)
  console.log(hashTable.get('cats'))
  hashTable.set('dogs', 9)
  console.log(hashTable)