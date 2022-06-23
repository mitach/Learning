function Hierarchy() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }

        get area() {
            return 'area unknown';
        }

        changeUnits(newUnit) {
            this.units = newUnit;
        }

        toString() {
            return `Figures units: ${this.units}`;
        }

        scaleParam(radius) {
            switch(this.units) {
                case 'mm':
                    radius *= 10;
                    break;
                case 'cm':
                    break;
                case 'm': 
                    radius /= 10;
                    break;
                default: 
                    break;
            }

            return radius;
        }
    }

    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            this._radius = radius;
        }

        get radius() {
            return this.scaleParam(this._radius);
        }

        get area() {
            return (Math.PI * this.radius * this.radius);
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this._width = width;
            this._height = height;
        }

        get width() {
            return this.scaleParam(this._width);
        }

        get height() {
            return this.scaleParam(this._height);
        }

        get area() {
            return this.width * this.height;
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}

