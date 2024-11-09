#### [Go Back ↩](../README.md) 

# Iterators and Generators
Table of Contents
- [Iterators and Generators](#iterators-and-generators)
  - [1. Iterators](#1-iterators)
  - [2. Generators](#2-generators)
  - [3. Difference between them](#3-difference-between-them)

---

## 1. Iterators
 - Iterable Object:- (Don't confuse this with Objects in js objects are not iterable by default because they lack the built-in Symbol.iterator method, which is required for an object to conform to the iterator protocol)Objects like arrays, strings, Maps, and Sets are iterable because they implement the iterator protocol. These objects have a default Symbol.iterator method that returns an iterator.
 -  Symbol.iterator itself does not have a next() method by default. Instead, Symbol.iterator is simply a key that points to the function (the iterator function) responsible for returning an iterator object, and that returned iterator object has the next() method.

    Array Example
     ```javascript
     const array = [1, 2, 3];
     // Access the array's Symbol.iterator method to get the iterator
     // when we assign [Symbol.iterator] to an existing iterator like array it returns have next method
     const iterator = array[Symbol.iterator]();

     console.log(iterator.next()); // { value: 1, done: false }
     console.log(iterator.next()); // { value: 2, done: false }
     console.log(iterator.next()); // { value: 3, done: false }
     console.log(iterator.next()); // { done: true }
     ```

     Custom Iterable Example

     ```javascript
     const customIterable = {
         [Symbol.iterator]: function() {
             let step = 0;
             return {
                 next: function() {
                     step++;
                     if (step <= 3) {
                     return { value: step, done: false };
                     }
                     return { done: true };
                 }
             };
         }
     };

     // Using for...of to iterate over customIterable
     for (const value of customIterable) {
         console.log(value); // Logs 1, then 2, then 3
     }
     ```

     example2

     ```javascript
     const myIterator = {
         count: 0,
         next() {
             this.count++;
             if (this.count <= 3) {
                 return { value: this.count, done: false };
             }
             return { done: true };
         }
     };
     console.log(myIterator.next()); // { value: 1, done: false }
     console.log(myIterator.next()); // { value: 2, done: false }
     console.log(myIterator.next()); // { value: 3, done: false }
     console.log(myIterator.next()); // { done: true }
     ``` 

## 2. Generators
- Generators are special functions defined using the function* syntax. When called, they return a generator object (an iterator) with a next() method but also allow pausing and resuming execution with yield.

    Below example is equivalent to above example in done with iterator

    ```javascript
    function* myGenerator() {
        yield 1;
        yield 2;
        yield 3;
    }

    const gen = myGenerator();
    console.log(gen.next()); // { value: 1, done: false }
    console.log(gen.next()); // { value: 2, done: false }
    console.log(gen.next()); // { value: 3, done: false }
    console.log(gen.next()); // { done: true }
    ```

## 3. Difference between them 
- Iterators manage state explicitly require manually adding next() method that controls the state and requiring you to define and update variables to keep track of where you are in the sequence.
-  And Generators handle state implicitly, automatically. Generator function pauses and remembers its place, so when next() is called again, it picks up right where it left off without additional state management.
- Iterators do not inherently support pausing and resuming. Each next() call is a new operation without memory of where the function previously exited.
- Generators are built specifically to pause execution with yield. Each yield pauses the generator until the next next() call, allowing for complex control flows and asynchronous code.
- Generators create iterator objects but add powerful control with yield, which pauses and resumes execution, making them more flexible and readable for defining custom or asynchronous sequences