#### [Go Back ↩](../README.md)
<h3>Deep and shallow copies</h3>
<!-- [Deep and shallow copies](#deep-and-shallow-copies) -->

Deep and shallow copy in variables.
- [variable](#variable)
- [Object](#object)
- [arrays](#arrays)
- [class](#class)

1. ## variable

    ```javascript
    let a = 5;
    let b = a; // pointer/reference of a is copied to b
    b = 7
    console.log(a, b);  //5 , 7
    ```
2. ## object

    ```javascript
    let eats  = {
        type: "lunch",
        foods: {
            dinner: "roti"
        },
        drink: {
            liquid: "pani"
        }
    }

    // case 1
    let someEats = eats // copy pointer
    someEats.type = "breakfast"
    console.log(eats.type, someEats.type); // breakfast // breakfast // this is shallow copy

    // case 2
    let specialEats = {...eats}
    specialEats.type = "breakfast"
    console.log(eats.type, specialEats.type); // lunch // breakfast

    // To make a deep copy of nested objects
    let deepEats = {...eats, foods: {...eats.foods}, drink: {...eats.drink}} // this will replace certain objects

    // json parse and stringify is also used to deep copy a object and its nested elements. 
    let deepEatsByJson = JSON.parse(JSON.stringify(eats)) // // parse changes JSON string to JS Object
    // stringify changes JS Object to JSON string
    ```
3. ## arrays

    ```javascript
    let num1 = [1, 2, 3]
    let num2 = [...num1]
    num2[2] = 5
    console.log(num1[2], num2[2]); //2   //5 
    let num3 = num1.map(el => el) // [1, 2, 3]
    ```

3. ## class

    ```javascript
    class Counter {
        constructor() {
            this.count = 5
        }
        copy() {
            const copy = new Counter()
            copy.count = this.count
            return copy
        }
    }
    const originalCounter = new Counter()
    const copiedCounter = originalCounter.copy()
    console.log(originalCounter.count) // 5
    console.log(copiedCounter.count) // 5
    copiedCounter.count = 7
    console.log(originalCounter.count) // 5
    console.log(copiedCounter.count) // 7
    ```


<!-- #### [Go Top ⬆️](#deep-and-shallow-copies) -->

[🔼 Back to top](#deep-and-shallow-copies)