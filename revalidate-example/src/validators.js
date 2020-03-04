const createValidator = require("revalidate").createValidator;
const composeValidators = require("revalidate").composeValidators;
const combineValidators = require("revalidate").combineValidators;

const isNumeric = createValidator(
  message => {
    return value => {
      if (value === "" || value == null || Number.isNaN(Number(value))) {
        return message;
      }
    };
  },
  field => {
    return `${field} must be a number`;
  }
);

console.log("=== isNumeric");
console.log("value = 2  [expected undefined]");
console.log(isNumeric("Age")(2));
console.log("value = 3  [expected undefined]");
console.log(isNumeric("Age")(3));
console.log("value = 'a string' [expected 'Age must be a number']");
console.log(isNumeric("Age")("a string"));

const isEven = createValidator(
  message => {
    return value => {
      if (
        value == null ||
        value === "" ||
        Number.isNaN(Number(value)) ||
        value % 2 !== 0
      ) {
        return message;
      }
    };
  },
  field => {
    return `${field} must be an even number`;
  }
);

console.log("=== isEven");
console.log("value = 2  [expected undefined]");
console.log(isEven("Age")(2));
console.log("value = 3  [expected 'Age must be an even number']");
console.log(isEven("Age")(3));
console.log("value = 'a string'  [expected 'Age must be an even number']");
console.log(isEven("Age")("a string"));

const isNumericAndEven = composeValidators(isNumeric, isEven);

console.log("=== isNumericAndEven");
console.log("value = 2  [expected undefined]");
console.log(isNumericAndEven("Age")(2));
console.log("value = 3  [expected 'Age must be an even number']");
console.log(isNumericAndEven("Age")(3));
console.log("value = 'a string' [expected 'Age must be a number']");
console.log(isNumericAndEven("Age")("a string"));

const isNumericAndEven2 = composeValidators(
  isNumeric({ message: "not numeric!" }),
  isEven({ message: "not even!" })
);

console.log("=== isNumericAndEven2");
console.log("value = 2  [expected undefined]");
console.log(isNumericAndEven2("Age")(2));
console.log("value = 3  [expected 'not even!']");
console.log(isNumericAndEven2("Age")(3));
console.log("value = 'a string' [expected 'not numeric!']");
console.log(isNumericAndEven2("Age")("a string"));

const isNumericAndEven3 = composeValidators(
  isNumeric("Cost"),
  isEven({ field: "Cost" })
);

console.log("=== isNumericAndEven3");
console.log("value = 2  [expected undefined]");
console.log(isNumericAndEven3("Age")(2));
console.log("value = 3  [expected 'Cost must be an even number']");
console.log(isNumericAndEven3("Age")(3));
console.log("value = 'a string' [expected 'Cost must be a number']");
console.log(isNumericAndEven3("Age")("a string"));

const isNumericAndEven4 = combineValidators({
  age: isNumeric("Age"),
  cost: isNumericAndEven("Cost")
});

console.log("=== isNumericAndEven4");

console.log("value = {age: 2, cost: 2}  [expected undefined]");
console.log(isNumericAndEven4({ age: 2, cost: 2 }));

console.log("value = {age: 3, cost: 2}  [expected undefined]");
console.log(isNumericAndEven4({ age: 3, cost: 2 }));

console.log(
  "value = {age: 2, cost: 3}  [expected {cost: 'Cost must be an even number'}]"
);
console.log(isNumericAndEven4({ age: 2, cost: 3 }));

console.log(
  "value = {age: 2, cost: 'a string'} [expected {cost: 'Cost must be a number'}]"
);
console.log(isNumericAndEven4({ age: 2, cost: "a string" }));

console.log(
  "value = {age: 'a string', cost: 2} [expected {age: 'Age must be a number'}]"
);
console.log(isNumericAndEven4({ age: "a string", cost: 2 }));

console.log(
  "value = {age: 'a string', cost: 3} [expected {age: 'Age must be a number', cost: 'Cost must be an even number'}]"
);
console.log(isNumericAndEven4({ age: "a string", cost: 3 }));

console.log(
  "value = {age: 'a string', cost: 'a string'} [expected {age: 'Age must be a number', cost: 'Cost must be a number'}]"
);
console.log(isNumericAndEven4({ age: "a string", cost: "a string" }));
