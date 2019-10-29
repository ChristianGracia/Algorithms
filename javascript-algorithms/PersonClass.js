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
        fullName = firstName + last;
    }

    this.setFullName = x => {
        fullName = x
        firstName = x.split(" ")[0];
        lastName = x.split(" ")[1];
    }
    this.getFullName = () => {
        fullName = firstName + " " + lastName;
        return fullName;
    }
};

var bob = new Person('Bob Ross');

//done in 18 mins