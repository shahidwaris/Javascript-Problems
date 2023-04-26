class Shape {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Circle extends Shape {
  constructor(x, y, radius) {
    super(x, y);
    this.radius = radius;
  }

  moveTo(x, y) {
    super.moveTo(x, y);
    this.x += x;
    this.y += y;
  }
}

describe('Shape and Circle classes', () => {
  it('creates an instance of Shape with the correct properties', () => {
    const shape = new Shape(0, 0);
    expect(shape.x).to.equal(0);
    expect(shape.y).to.equal(0);
  });

  it('creates an instance of Circle with the correct properties', () => {
    const circle = new Circle(1, 1, 5);
    expect(circle.x).to.equal(1);
    expect(circle.y).to.equal(1);
    expect(circle.radius).to.equal(5);
  });

  it('moves Shape to the correct position', () => {
    const shape = new Shape(0, 0);
    shape.moveTo(1, 2);
    expect(shape.x).to.equal(1);
    expect(shape.y).to.equal(2);
  });

  it('moves Circle to the correct position', () => {
    const circle = new Circle(1, 1, 5);
    circle.moveTo(2, 3);
    expect(circle.x).to.equal(4);
    expect(circle.y).to.equal(6);
  });
});
