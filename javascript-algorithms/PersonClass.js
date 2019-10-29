var Person = function (firstAndLast) {
    var firstName = firstAndLast.split(" ")[0]
    var lastName = firstAndLast.split(" ")[1]
    var fullName = firstAndLast;

    this.getFirstName = () => { return firstName; }
    this.getLastName = () => { return lastName; }


    this.setFirstName = (first) => {
        firstName = first;
        fullName = firstName + lastName;
    };
    this.setLastName = (last) => {
        lastName = last;
        fullName = firstName + lastName;
    }

    this.setFullName = x => fullName = x;
    this.getFullName = () => {
        return fullName;
    }
};

var bob = new Person('Bob Ross');
bob.setFullName("Haskell Curry")
bob.getFullName();
