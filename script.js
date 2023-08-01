// Hello, object

const user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// Check for emptiness
function isEmpty(obj) {
    for (property in obj) return false;
    return true;
}

let schedule = {
    morning: "Wake up"
};
let random = {};

// Sum object properties
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0;
for (person in salaries) {
    sum += salaries[person];
}


// Multiply numeric property values by 2
function multiplyNumeric(obj) {
    for (let property in obj) {
        if (typeof(obj[property]) === "number") {
            obj[property] = obj[property] * 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu);

console.log(menu);