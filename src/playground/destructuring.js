// Object Destructuring

// const person = {
//   name: 'Matt',
//   age: 28,
//   location: {
//     city: 'Katy',
//     temp: 68
//   }
// };

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;

// if(city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-published' } = book.publisher;

// console.log(publisherName);


// Array Destructuring

// const address = ['2330 Brookdale Bend Drive', 'Katy', 'Texas', '77494'];

// const [ , city, state = 'New York' ] = address;

// console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];
const [ itemName, , mediumPrice ] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}.`);