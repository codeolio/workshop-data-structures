/*********************************************************/
/*                     DO NOT EDIT                       */
/*********************************************************/
const expect = require('chai').expect;
const MyArray = require('../src/1_array.js')

xdescribe('MyArray (Erray) Data Structure', () => {
  let array = null;

  describe('MyArray: Adding and Removing Elements', () => {
    beforeEach(() => {
      array = new MyArray;
    });

    it('Constructor should have a contents property that is an object and a length property initialized at 0', () => {
      expect(array.contents).to.be.a('object');
      expect(array.length).to.be.a('number');
      expect(array.length).to.equal(0);
    });

    it('Challenge 1: Push method should add a single value to the end of the array:', () => {
      expect(array.__proto__).to.have.property('push').to.be.a('function');
      array.push('A');
      array.push('B');
      array.push('C');
      expect(array.contents['0']).to.equal('A');
      expect(array.contents['1']).to.equal('B');
      expect(array.contents['2']).to.equal('C');
      expect(array.length).to.equal(3);
    });

    it('Challenge 1.5: Refactor push method so that it adds multiple values to the end of the array:', () => {
      expect(array.__proto__).to.have.property('push').to.be.a('function');
      array.push('A');
      array.push('B', 'C', 'D');
      expect(array.contents['0']).to.equal('A');
      expect(array.contents['1']).to.equal('B');
      expect(array.contents['2']).to.equal('C');
      expect(array.contents['3']).to.equal('D');
      expect(array.length).to.equal(4);
    });

    it('Challenge 2: Pop should return the last value pushed to the array WITHOUT going negative', () => {
      expect(array.__proto__).to.have.property('pop').to.be.a('function');
      array.push('A');
      array.push('B');
      array.push('C');
      expect(array.pop()).to.equal('C');
      expect(array.pop()).to.equal('B');
      expect(array.pop()).to.equal('A');
      expect(array.pop()).to.be.undefined;
      expect(array.length).to.equal(0);
    });

    it('Challenge 3: Shift method should add one value to the beginning of the array', () => {
      expect(array.__proto__).to.have.property('shift').to.be.a('function');
      array.shift('A');
      array.shift('B');
      array.shift('C');
      expect(array.contents['0']).to.equal('C');
      expect(array.contents['1']).to.equal('B');
      expect(array.contents['2']).to.equal('A');
      expect(array.length).to.equal(3);
    });

    it('Challenge 3.5: Shift method should add multiple values to the beginning of the array', () => {
      expect(array.__proto__).to.have.property('shift').to.be.a('function');
      array.shift('A');
      array.shift('B', 'C', 'D');
      expect(array.contents['0']).to.equal('D');
      expect(array.contents['1']).to.equal('C');
      expect(array.contents['2']).to.equal('B');
      expect(array.contents['3']).to.equal('A');
      expect(array.length).to.equal(4);
    });

    it('Challenge 4: Unshift should remove and return the first element at the beginning of the array', () => {
      expect(array.__proto__).to.have.property('unshift').to.be.a('function');
      array.push('A');
      array.push('B');
      array.push('C');
      expect(array.unshift()).to.equal('A');
      expect(array.unshift()).to.equal('B');
      expect(array.unshift()).to.equal('C');
      expect(array.unshift()).to.be.undefined;
      expect(array.length).to.equal(0);
    });

    it('Challenge 5: indexOf should return the position (index) of the first element in the Erray that matches the input value', () => {
      expect(array.__proto__).to.have.property('indexOf').to.be.a('function');
      array.push('A');
      array.push('B');
      array.push('B');
      array.push('D');
      expect(array.indexOf('A')).to.equal(0);
      expect(array.indexOf('B')).to.equal(1);
      expect(array.indexOf('B')).to.not.equal(2);
      expect(array.indexOf('D')).to.equal(3);
    });

    it('Challenge 6 - lastIndexOf: returns the position (index) of the last item in the Erray that matches the input value', () => {
      array.push('A');
      array.push('B');
      array.push('A');
      array.push('C');
      expect(array.lastIndexOf('A')).to.equal(2);
      expect(array.lastIndexOf('B')).to.equal(1);
      expect(array.lastIndexOf('C')).to.equal(3);
    });
  });
});