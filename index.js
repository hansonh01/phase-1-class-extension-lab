// Your code here
class Polygon{
    constructor(sides){
        this.sides = sides;
    };
    get countSides(){
        return this.sides.length
    };
    get perimeter(){
        return this.sides.reduce((sum,side)=> sum + side, 0);
    };
};

class Triangle extends Polygon{
    constructor(sides) {
        if (sides.length === 3) {
          super(sides);
        };
    };
    get isValid() {
        const [a, b, c] = this.sides;
        return a + b > c && a + c > b && b + c > a;
    };
};

class Square extends Polygon{
    constructor(sides){
        if(sides.length ===  4){
            super(sides);
        };
    };
    get isValid(){
        return this.sides.every(side => side === this.sides[0]);
    };
    get area(){
        return this.sides[0] ** 2;
    };
};