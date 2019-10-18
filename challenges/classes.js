// 1. Copy and paste your prototype in here and refactor into class syntax.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/
class CuboidMaker {
    constructor(att) {
        this.length = att.length;
        this.width = att.width;
        this.height = att.height;
    }
    volume(){
        return (this.length * this.width * this.height);
     }
     surfaceArea(){
        return (2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height)));

     }
}

class CubeMaker extends CuboidMaker {
    constructor(att) {
        super(att);
    }
    testing(){
        return `I am testing CubeMaker Class!`;
    }
}
// function CuboidMaker(att) {
//     this.length = att.length;
//     this.width = att.width;
//     this.height = att.height;
// }


// CuboidMaker.prototype.volume = function () {
//     return (this.length * this.width * this.height);
// };




// CuboidMaker.prototype.surfaceArea = function () {
//     return (2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height)));
// };


const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5,
});

const cubes = new CubeMaker({
    length: 4,
    width: 5,
    height: 5,
})

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log("Testing Prototype Refactoring to Class")
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130



// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker. 
// Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  
// Test your work by logging out your volume and surface area.
console.log("Testing Sub Class CubeMaker")
console.log(cubes.testing());//I am testing cubeMaker Class!
console.log(cubes.volume());//100
console.log(cubes.surfaceArea());//13
