class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    getAgeInDays() {
      return this.age * 365;
    }
  }
  
  class Student extends Person {
    constructor(name, age, studentId) {
      super(name, age);
      this.studentId = studentId;
    }
  
    getAgeInDays() {
      console.log(`Student ID: ${this.studentId}`);
      return super.getAgeInDays();
    }
  }
  
  describe('Person and Student classes', () => {
    it('creates an instance of Person with the correct properties', () => {
      const person = new Person('John', 25);
      expect(person.name).to.equal('John');
      expect(person.age).to.equal(25);
    });
  
    it('creates an instance of Student with the correct properties', () => {
      const student = new Student('Jane', 20, '123456');
      expect(student.name).to.equal('Jane');
      expect(student.age).to.equal(20);
      expect(student.studentId).to.equal('123456');
    });
  
    it('calculates the age in days correctly for Person', () => {
      const person = new Person('John', 25);
      expect(person.getAgeInDays()).to.equal(9125);
    });
  
    it('calculates the age in days correctly for Student', () => {
      const student = new Student('Jane', 20, '123456');
      cy.spy(console, 'log').as('consoleLog');
  
      const ageInDays = student.getAgeInDays();
  
      cy.get('@consoleLog').should('have.been.calledWith', `Student ID: 123456`);
      expect(ageInDays).to.equal(7300);
    });
  });
  
