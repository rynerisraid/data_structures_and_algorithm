# data_structure_and_algorithm
所有能用JavaScript写的最终都会用JavaScript写，本项目的目的在于用Javascript实现一些常见的数据结构与算法。

## Array

The standard definition for an array is a linear collection of elements, where the elements
can be accessed via indices, which are usually integers used to compute offsets. Most
computer programming languages have these types of arrays. JavaScript, on the other
hand, has a different type of array altogether.\\
A JavaScript array is actually a specialized type of JavaScript object, with the indices
being property names that can be integers used to represent offsets. However, when
integers are used for indices, they are converted to strings internally in order to conform
to the requirements for JavaScript objects. Because JavaScript arrays are just objects,
they are not quite as efficient as the arrays of other programming languages.\\
While JavaScript arrays are, strictly speaking, JavaScript objects, they are specialized
objects categorized internally as arrays. The Array is one of the recognized JavaScript
object types, and as such, there is a set of properties and functions you can use with
arrays.