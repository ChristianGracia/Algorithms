var Person = function (firstAndLast) {



    var firstName = firstAndLast.split(" ")[0]
    var lastName = firstAndLast.split(" ")[1]
    var fullName = firstAndLast;

    this.getFirstName = () => { return firstName; }
    this.getLastName = () => { return lastName; }


    this.setFirstName = (first) => { firstName = first; };
    this.setLastName = (last) => { lastName = last; }

    this.setFullName = x => fullName = x;
    this.getFullName = () => {
        return fullName;
    }
};

var bob = new Person('Bob Ross');
bob.getFullName();
bob.setFullName("chris");
bob.getFullName();