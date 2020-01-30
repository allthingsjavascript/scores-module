const chai = require('chai');
const expect = chai.expect;

const app = require('../manipulate-score-data');

describe('Using reduce to build a module of three functions that will return data about an array of scores', () => {
  describe('create computeTotal, computeNonZeroAverage, and getMinMaxScore functions and export them', () => {
    it('computeTotal function is defined and exported', () => {
      expect(app.computeTotal).to.exist;
    });
    it('computeNonZeroAverage function is defined and exported', () => {
      expect(app.computeNonZeroAverage).to.exist;
    });
    it('getMinMaxScore function is defined and exported', () => {
      expect(app.getMinMaxScore).to.exist;
    });
  });

  describe('use reduce method in each function', () => {
    let getMinMaxScoreStr = '',
        computeTotalStr = '',
        computeNonZeroAverageStr = '';
    if (typeof app.getMinMaxScore === 'function') getMinMaxScoreStr = app.getMinMaxScore.toString();
    if (typeof app.computeNonZeroAverage === 'function') computeNonZeroAverageStr = app.computeNonZeroAverage.toString();
    if (typeof app.computeTotal === 'function') computeTotalStr = app.computeTotal.toString();

    it('the computeTotal function uses reduce to return a sum', () => {
      expect(computeTotalStr).to.include('reduce');
    });
    it('the computeNonZeroAverage function uses reduce to return a non-zero average', () => {
      expect(computeNonZeroAverageStr).to.include('reduce');
    });
    it('the getMinMax function uses reduce to return a min and max score', () => {
      expect(getMinMaxScoreStr).to.include('reduce');
    });
  });
  
  describe('computeTotal returns the sum of the array', () => {
    it('should return the sum', () => {
      expect(app.computeTotal([0, 90, 40, 100, 20, 0, 10, 100])).to.equal(360);
      expect(app.computeTotal([-10, -90, -40, -20, 0, -100])).to.equal(-260);
      expect(app.computeTotal([30, 90, 40, 100, 200, 50, 100, 150])).to.equal(760);
    });
  });

  describe('computeNonZeroAverage returns average from the array', () => {
    it('should return the average for non-zero scores', () => {
      expect(app.computeNonZeroAverage([0, 90, 40, 100, 20, 0, 10, 100])).to.equal(60);
      expect(app.computeNonZeroAverage([-10, -90, -40, -20, 0, -100])).to.equal(-52);
      expect(app.computeNonZeroAverage([30, 90, 40, 100, 200, 50, 100, 150])).to.equal(95);
      expect(app.computeNonZeroAverage([-30, -90, 40, 100, 200, 50, 100, 140, 0])).to.equal(63.75);
    })
  });

  describe('getMinMaxScore retrieves min and max score from the array', () => {
    it('Should return the minimum and maximum score in an array', () => {
      expect(app.getMinMaxScore([0, 90, 40, 100, 20, 0, 10, 100])).to.eql([0, 100]);
      expect(app.getMinMaxScore([-10, -90, -40, -20, 0, -100])).to.eql([-100, 0]);
      expect(app.getMinMaxScore([30, 90, 40, 100, 200, 50, 100, 150])).to.eql([30, 200]);
    });
  });
});