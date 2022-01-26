//NUMBERS
console.log(1 + 1 - 6);
console.log(1 + 2 * 6); //multiplication is higher in order of operations
console.log((1 + 9) * 6); //parens assesed first
console.log(13 % 5); //mod is the remainder of the division
console.log(13 % 6); //6 goes into 13 twice with a remainder of 1
console.log(8 % 4); //4 goes into 8 twice with a remainder of 0
console.log(10 % 4); //4 goes into 10 twice with a remainder of 2
console.log(4 % 10); 10 //goes into 4 zero times | 10*0 = 0 + 4 = 4

//STRINGS
console.log("This is a string. So is 17892");
console.log('This is a string. So is 17892'); //can use single OR double quotes
console.log("Sean's hungry"); //you can use a single quote inside bc you have double quotes on the outside
console.log('The dog said "woof"');
console.log('cat' + 'dog'); //you can concatinate with the addition operator
console.log('cat'.toUpperCase());
console.log('Dog'.toLowerCase());

//BOOLEAN - three operations: "not" "and" "or"
console.log(true);
console.log(!true); //! is the "not" operator
console.log(false);
console.log(!false);
console.log(false && false); // && the "and" operation - it only returns true when BOTH sides are true
console.log(false && true); // think of it the way we use the word in english
console.log(true && false);
console.log(true && true);
console.log(true || false); // || returns true when at least ONE side of the expresion is true
console.log(true || true);
console.log(true || false);
console.log(true || true);
console.log(true || !false);
console.log(false && false || true); // true //there is an order of operations for boolean expressions "and" is higher
console.log(false && (false || true)); // false

//COMPARISONS
console.log(42 === 43); // equals
console.log(43 !== 43); // not equal
console.log(42 > 2); // greater than
console.log(42 < 2); // less than
console.log(42 <= 2); // less than or equal
console.log(42 >= 2); // great than or equal
console.log("apple" === "apple"); //true
console.log("apple" === "Apple"); //false
console.log("cat" < "caterpillar");
console.log("cat" < "apple");
console.log("cat" > "apple"); //evaluated by order in the dictionary