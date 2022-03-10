# data_structure_and_algorithm

所有能用JavaScript写的最终都会用JavaScript写，本项目的目的在于用Javascript实现一些常见的数据结构与算法。

## Array

The standard definition for an array is a linear collection of elements, where the elements
can be accessed via indices, which are usually integers used to compute offsets. Most
computer programming languages have these types of arrays. JavaScript, on the other
hand, has a different type of array altogether.

A JavaScript array is actually a specialized type of JavaScript object, with the indices
being property names that can be integers used to represent offsets. However, when
integers are used for indices, they are converted to strings internally in order to conform
to the requirements for JavaScript objects. Because JavaScript arrays are just objects,
they are not quite as efficient as the arrays of other programming languages.

While JavaScript arrays are, strictly speaking, JavaScript objects, they are specialized
objects categorized internally as arrays. The Array is one of the recognized JavaScript
object types, and as such, there is a set of properties and functions you can use with
arrays.

## List

Lists are one of the most common organizing tools people use in their day-to-day lives.
We have to-do lists, grocery lists, top-ten lists, bottom-ten lists, and many other types.
Our computer programs can also use lists, particularly if we only have a few items to
store in list form. Lists are especially useful if we don’t have to perform searches on the
items in the list or put them into some type of sorted order. When we need to perform
long searches or complex sorts, lists become less useful, especially with more complex
data structures.
This chapter presents the creation of a simple list class. We start with the definition of
a list abstract data type (ADT) and then demonstrate how to implement the ADT. We
wrap up the chapter with some problems that are best solved with lists.

ADT:

```html
listSize (property)    Number of elements in list
pos (property)         Current position in list
length (property)      Returns the number of elements in list
clear (function)       Clears all elements from list
toString (function)    Returns string representation of list
getElement (function)  Returns element at current position
insert (function)      Inserts new element after existing element
append (function)      Adds new element to end of list
remove (function)      Removes element from list
front (function)       Sets current position to first element of list
end (function)         Sets current position to last element of list
prev (function)        Moves current position back one element
next (function)        Moves current position forward one element
currPos (function)     Returns the current position in list
moveTo (function)      Moves the current position to specified position
```

## Stack

A stack is a list of elements that are accessible only from one end of the list, which is
called the top. One common, real-world example of a stack is the stack of trays at a
cafeteria. Trays are always removed from the top, and when trays are put back on the
stack after being washed, they are placed on the top of the stack. The stack is known as
a last-in, first-out (LIFO) data structure.

Because of the last-in, first-out nature of the stack, any element that is not currently at
the top of the stack cannot be accessed. To get to an element at the bottom of the stack,
you have to dispose of all the elements above it first.
