class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(sideLength) {
    super(sideLength, sideLength);
    this.sideLength = sideLength;
  }
  get sideLength() {
    return this._sideLength;
  }
  set sideLength(value) {
    this._sideLength = value;
    this.width = value;
    this.height = value;
  }
}

describe('Shapes', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/42_1_prob/index.html');
  });

  describe('Rectangle', () => {
    it('should calculate the area correctly', () => {
      const rectangle = new Rectangle(5, 10);
      expect(rectangle.getArea()).to.equal(50);
    });
  });

  describe('Square', () => {
    it('should be an instance of Rectangle', () => {
      const square = new Square(5);
      expect(square).to.be.an.instanceOf(Rectangle);
    });

    it('should have equal width and height', () => {
      const square = new Square(5);
      expect(square.width).to.equal(square.height);
    });

    it('should calculate the area correctly', () => {
      const square = new Square(5);
      expect(square.getArea()).to.equal(25);
    });

    it('should update width and height when sideLength is updated', () => {
      const square = new Square(5);
      square.sideLength = 7;
      expect(square.width).to.equal(7);
      expect(square.height).to.equal(7);
    });
  });
});
