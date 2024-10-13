## Class

Classes are templates for JavaScript Objects.

```javascript
// classes mainly provide more convenient syntax to create old-school constructor functions
// classes are functions even 
class Point {
    constructor(x, y){
        console.log("constructor called", this); // Point Object {}
    }
     toString(){
        return `(${this.x} ${this.y})`
    }
}

let data = new Point
console.log(typeof(Point), Point);

class ColorPoint extends Point {
    constructor(x, y, color){
        // console.log("ColorPoint", this);
        super(x, y);
        console.log("after super", this);
    }
    toString(){
        return super.toString()
    }
}

const cp = new ColorPoint(25, 8, 'green')

const p = new Point(25, 8) // if called with this then 

cp.toString();
cp instanceof ColorPoint
cp instanceof Point

console.log(cp instanceof Point); // true

```