//Array exercises.

/*Create an array to hold your top five choices of something (colors, presidents, whatever). If you choose movies, the right top choice is "Satantango".

For each choice, log to the screen a string like: "My #1 choice is blue."
Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number.*/


const sports = ["tennis", "football", "badminton","rugby","cycling"];

for (var i = 0; i < sports.length; i++) {

  let suffix = '';
  if( i === 0 ){
    suffix = 'st';
  } else if (i===1){
    suffix = 'nd';
  } else if (i ===2){
    suffix = 'rd'
  } else {
    suffix ='th'
  }

  console.log(`My ${i+1}${suffix} choice is ${sports[i]}`)

}

//Luke solution alternative:

// Your top choices.
// Create an array to hold your top five choices of something (colors, presidents, whatever). If you choose movies, the right top choice is "Satantango".
//
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number.

const topDogs = [
  'Novia Scotia Duck-Tolling Retriever',
  'Leonberger',
  'Husky',
  'Pug',
  'Staffordshire',
  'Golden Retriever',
  'Chilean Terrier'
];

const suffixes = [ 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th' ];

for( let i = 0; i < topDogs.length; i++ ){
  const currentDog = topDogs[ i ];
  // console.log( `My #${ i+1 } choice is ${currentDog}.` );

  console.log(`My ${ i+1 }${ suffixes[ i ] } is the ${ currentDog }.`);
}


const rainbowColors = [];

rainbowColors.push('orange');
rainbowColors.unshift('red');
rainbowColors.push('yellow');
rainbowColors.push("green", "blue", "indigo","violet");
console.log(rainbowColors);
console.log(rainbowColors.length);
console.log(rainbowColors[2]);
console.log(rainbowColors[rainbowColors.length - 2]);
console.log(rainbowColors.indexOf("blue"));

//slice:

// The slice() method returns the selected elements in an array, as a new array object.

// The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.

twoColors = [rainbowColors.slice(1,3)];
console.log(twoColors);

//splice:

// The splice() method adds/removes items to/from an array, and returns the removed item(s).

// array.splice(index, howmany, item1, ....., itemX)

// Parameter	Description:

// index	Required. An integer that specifies at what position to add/remove items, Use negative values to specify the position from the end of the array

// howmany	Optional. The number of items to be removed. If set to 0, no items will be removed

// item1, ..., itemX	Optional. The new item(s) to be added to the array.

var nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];

nums.splice(2,2);
console.log(nums);
nums.splice(4,1);
console.log(nums);

var arrOfArrs = [

["inner array first item", "inner array second item"],

["first", "second", "third"]

]

console.log(arrOfArrs[0][0]);
console.log(arrOfArrs[1][2]);


for (var i = 0; i < arrOfArrs[1].length; i++) {
  console.log(arrOfArrs[1][i]);
};

Array Methods:

Converting Arrays to Strings

1. toString()

toString()  method converts an array to a string of (comma separated) array values.

Example:

var fruits = ["Banana", "Orange", "Apple", "Mango"];

document.getElementById("demo").innerHTML = fruits.toString();

Result:

Banana,Orange,Apple,Mango

2. join()

The join() method also joins all array elements into a string.

It behaves just like toString(), but in addition you can specify the separator:

Example:

var fruits = ["Banana", "Orange", "Apple", "Mango"];

document.getElementById("demo").innerHTML = fruits.join(" * ");

Result:

Banana * Orange * Apple * Mango

Pop() and Push()

When you work with arrays, it is easy to remove elements and add new elements.

This is what popping and pushing is:

Popping items out of an array, or pushing items into an array.

Popping (removing from end)

3. pop()

The pop() method removes the last element from an array:

Example:

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();              // Removes the last element ("Mango") from fruits

The pop() method returns the value that was "popped out":

Example:

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.pop();      // the value of x is "Mango"

Pushing (adding to end)

4. push()

The push() method adds a new element to an array (at the end):

Example

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");       //  Adds a new element ("Kiwi") to fruits

The push() method returns the new array length:

Example

var fruits = ["Banana", "Orange", "Apple", "Mango"];

var x = fruits.push("Kiwi");   //  the value of x is 5


Shifting Elements (removing from start)

5. shift()

Shifting is equivalent to popping, working on the first element instead of the last.

The shift() method removes the first array element and "shifts" all other elements to a lower index.

Example

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();            // Removes the first element "Banana" from fruits

The shift() method returns the string that was "shifted out":

Example

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.shift();    // the value of x is "Banana"

Unshifting Elements (adds at start)

6. unshift()

The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

Example

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");    // Adds a new element "Lemon" to fruits

The unshift() method returns the new array length.

Example

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");    // Returns 5

Changing Elements

Array elements are accessed using their index number:

Array indexes start with 0. [0] is the first array element, [1] is the second, [2] is the third ...

Example

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi";        // Changes the first element of fruits to "Kiwi"

The length property provides an easy way to append a new element to an array:

Example

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi";      

    // Appends "Kiwi" to fruits

Adding new items to an Array

7. Splice ()

The splice() method can be used to add new items to an array:

Example

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");

Try it Yourself »

The first parameter (2) defines the position where new elements should be added (spliced in).

The second parameter (0) defines how many elements should be removed.

The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

Original Array: Banana,Orange,Apple,Mango

New Array:
 Banana,Orange,Lemon,Kiwi,Apple,Mango

The splice() method returns an array with the deleted items:

Example

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");

<script>
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = "Original Array:<br> " + fruits;

function myFunction() {
  var removed = fruits.splice(2, 2, "Lemon", "Kiwi");
  document.getElementById("demo2").innerHTML = "New Array:<br>" + fruits;
  document.getElementById("demo3").innerHTML = "Removed Items:<br> " + removed;
}
</script>

</body>
</html>


Using splice() to Remove Elements

With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:

Example

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);        // Removes the first element of fruits

Try it Yourself »

The first parameter (0) defines the position where new elements should be added (spliced in).

The second parameter (1) defines how many elements should be removed.

The rest of the parameters are omitted. No new elements will be added.

Merging (Concatenating) Arrays

8. concat()

The concat() method creates a new array by merging (concatenating) existing arrays:

Example (Merging Two Arrays)

var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];

var myChildren =

myGirls.concat(myBoys);   // Concatenates (joins) myGirls and myBoys

The concat() method does not change the existing arrays. It always returns a new array.

The concat() method can take any number of array arguments:

Example (Merging Three Arrays)

var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin", "Morgan"];

var myChildren = arr1.concat(arr2, arr3);   // Concatenates arr1 with arr2 and arr3

The concat() method can also take values as arguments:

Example (Merging an Array with Values)

var arr1 = ["Cecilie", "Lone"];

var myChildren = arr1.concat(["Emil", "Tobias", "Linus"]); 

Slicing an Array:

9. slice()

The slice() method slices out a piece of an array into a new array.

This example slices out a part of an array starting from array element 1 ("Orange"):

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

var citrus = fruits.slice(1);

result = Orange,Lemon,Apple,Mango

The slice() method creates a new array. It does not remove any elements from the source array.

This example slices out a part of an array starting from array element 3 ("Apple"):

Example

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

var citrus = fruits.slice(3);

Apple,Mango

Slice with two arguments

The slice() method can take two arguments like slice(1, 3).

The method then selects elements from the start argument, and up to (but not including) the end argument.

Example

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

var citrus = fruits.slice(1, 3);

Orange,Lemon

10. toString()

JavaScript automatically converts an array to a comma separated string when a primitive value is expected.

This is always the case when you try to output an array.

These two examples will produce the same result:

Example

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();

Sorting Arrays:

11. sort()

The sort() method sorts an array alphabetically:

Example:

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();        // Sorts the elements of fruits

Apple,Banana,Mango,Orange

Reversing an Array

12. reverse()

The reverse() method reverses the elements in an array.

You can use it to sort an array in descending order:

Example

var fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.sort();        // First sort the elements of fruits

fruits.reverse();     // Then reverse the order of the elements

<!DOCTYPE html>
<html>
<body>

<script>
// Create and display an array:
var fruits = ["Banana", "Orange", "Apple", "Mango"];

document.getElementById("demo").innerHTML = fruits;

function myFunction() {
  // First sort the array
  fruits.sort();
  // Then reverse it:
  fruits.reverse();
  document.getElementById("demo").innerHTML = fruits;
}
</script>

</body>
</html>

Numeric Sort

By default, the sort() function sorts values as strings.

This works well for strings ("Apple" comes before "Banana").

However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

Because of this, the sort() method will produce incorrect result when sorting numbers.
You can fix this by providing a compare function:

Example

var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});

Use the same trick to sort an array descending:

Example
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});

The Compare Function:

The purpose of the compare function is to define an alternative sort order.

The compare function should return a negative, zero, or positive value, depending on the arguments:

function(a, b){return a - b}

When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

If the result is negative a is sorted before b.

If the result is positive b is sorted before a.

If the result is 0 no changes are done with the sort order of the two values.

Example:

The compare function compares all the values in the array, two values at a time (a, b).

When comparing 40 and 100, the sort() method calls the compare function(40, 100).

The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.

You can use this code snippet to experiment with numerically and alphabetically sorting:

<script>
var points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = points;

function myFunction1() {
  points.sort();
  document.getElementById("demo").innerHTML = points;
}

function myFunction2() {
  points.sort(function(a, b){return a - b});
  document.getElementById("demo").innerHTML = points;
}
</script>
Try it Yourself »

1,5,10,25,40,100

<script>
var points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = points;

function myFunction() {
  points.sort(function(a, b){return 0.5 - Math.random()});
  document.getElementById("demo").innerHTML = points;
}
</script>

</body>
</html>


Find the Highest (or Lowest) Array Value￼

There are no built-in functions for finding the max or min value in an array.

However, after you have sorted an array, you can use the index to obtain the highest and lowest values.
Sorting ascending:

Example

Sorting ascending:

Example

var points = [40, 100, 1, 5, 25, 10];

points.sort(function(a, b){return a - b});

// now points[0] contains the lowest value

// and points[points.length-1] contains the highest value

Try it Yourself »

Example

var points = [40, 100, 1, 5, 25, 10];

points.sort(function(a, b){return b - a});

// now points[0] contains the highest value
// and points[points.length-1] contains the lowest value

Try it Yourself »

Sorting a whole array is a very inefficient method if you only want to find the highest (or lowest) value.

Using Math.max() on an Array

You can use Math.max.apply to find the highest number in an array:

Example

<script>
var points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = myArrayMax(points);

function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}
</script>

</body>
</html>

Math.max.apply(null, [1, 2, 3]) is equivalent to Math.max(1, 2, 3).

Summary:

Array Properties:

Property	Description

constructor	Returns the function that created the Array object's prototype
length	Sets or returns the number of elements in an array
prototype	Allows you to add properties and methods to an Array object

Array Methods:

Method	Description
concat()	Joins two or more arrays, and returns a copy of the joined arrays
copyWithin()	Copies array elements within the array, to and from specified positions
entries()	Returns a key/value pair Array Iteration Object
every()	Checks if every element in an array pass a test
fill()	Fill the elements in an array with a static value
filter()	Creates a new array with every element in an array that pass a test
find()	Returns the value of the first element in an array that pass a test
findIndex()	Returns the index of the first element in an array that pass a test
forEach()	Calls a function for each array element
from()	Creates an array from an object
includes()	Check if an array contains the specified element
indexOf()	Search the array for an element and returns its position
isArray()	Checks whether an object is an array
join()	Joins all elements of an array into a string
keys()	Returns a Array Iteration Object, containing the keys of the original array
lastIndexOf()	Search the array for an element, starting at the end, and returns its position
map()	Creates a new array with the result of calling a function for each array element
pop()	Removes the last element of an array, and returns that element
push()	Adds new elements to the end of an array, and returns the new length
reduce()	Reduce the values of an array to a single value (going left-to-right)
reduceRight()	Reduce the values of an array to a single value (going right-to-left)
reverse()	Reverses the order of the elements in an array
shift()	Removes the first element of an array, and returns that element
slice()	Selects a part of an array, and returns the new array
some()	Checks if any of the elements in an array pass a test
sort()	Sorts the elements of an array
splice()	Adds/Removes elements from an array
toString()	Converts an array to a string, and returns the result
unshift()	Adds new elements to the beginning of an array, and returns the new length
valueOf()	Returns the primitive value of an arrays
