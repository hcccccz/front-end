let x;

const person = {
    name: 'John',
    age: 30,
    isAdaim: true,
    address: {
        street: '123 Main st',
        city: 'Boston',
        state: 'La'
    },
    hobby: ['music', 'sport']
}

//access
x = person.name;
x = person['age'];
x = person.address.state;
x = person.hobby;

//update
person.name = 'Jane';
person.isAdaim = false;

//remove
delete person.age;

//add property
person.hasChild = true;

//function as property
person.greet = function() {
    console.log(`Hello my name is ${this.name}`);
};
person.greet();