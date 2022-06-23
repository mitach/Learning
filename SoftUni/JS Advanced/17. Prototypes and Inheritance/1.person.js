function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    Object.defineProperty(this, 'fullName', {
        get: function() {
            return `${this.firstName} ${this.lastName}`;
        },

        set: function(fullName) {
            let splitName = fullName.split(' ');

            if (splitName.length != 2) return;

            let [firstName, lastName] = splitName;

            this.firstName = firstName;
            this.lastName = lastName;
        }
    })
} 

let n = new Person('sad', 'bad');

console.log(n);
console.log(n.fullName);

n.fullName = 'Petar Stoqnov';
n.fullName = 'Petar Stoqnov Glaushev';

console.log(n);
console.log(n.fullName);