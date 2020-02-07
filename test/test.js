const chai = require('chai');
const expect = chai.expect;

const app = require('../manipulate-score-data');

describe('Using reduce to build a module of three functions that will return data about an array of scores', () => {
  describe('create computeTotal, computeNonZeroAverage, and getMinMaxScore functions and export them', () => {
    it('computeTotal function is defined and exported', () => {
      expect(app.computeTotal, 'Make sure you define a computeTotal function and then export it using module.exports').to.exist;
    });
    it('computeNonZeroAverage function is defined and exported', () => {
      expect(app.computeNonZeroAverage, 'Make sure you define a computeNonZeroAverage function and then export it using module.exports').to.exist;
    });
    it('getMinMaxScore function is defined and exported', () => {
      expect(app.getMinMaxScore, 'Make sure you define a getMinMaxScore function and then export it using module.exports').to.exist;
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
      expect(computeTotalStr).to.include('reduce', 'Make sure you use the reduce method of arrays to solve computeTotal');
    });
    it('the computeNonZeroAverage function uses reduce to return a non-zero average', () => {
      expect(computeNonZeroAverageStr).to.include('reduce', 'Make sure you use the reduce method of arrays to help determine the average in computeNonZeroAverage');
    });
    it('the getMinMax function uses reduce to return a min and max score', () => {
      expect(getMinMaxScoreStr).to.include('reduce', 'Make sure you use the reduce method of arrays to get the minimum and maximum score in getMinMaxScore');
    });
  });
  
  describe('computeTotal returns the sum of the array', () => {
    it('should return the sum', () => {
      expect(app.computeTotal([0, 90, 40, 100, 20, 0, 10, 100])).to.equal(360, 'Make sure that computeTotal sums the numbers correctly. The array [0, 90, 40, 100, 20, 0, 10, 100] did not sum correctly');
      expect(app.computeTotal([-10, -90, -40, -20, 0, -100])).to.equal(-260, 'Make sure that the summing of numbers in computeTotal takes into account negative numbers. The array [-10, -90, -40, -20, 0, -100] did not sum correctly');
      expect(app.computeTotal([30, 90, 40, 100, 200, 50, 100, 150])).to.equal(760, 'Make sure that computeTotal sums the numbers correctly. The array [30, 90, 40, 100, 200, 50, 100, 150] did not sum correctly');
    });
  });

  describe('computeNonZeroAverage returns average from the array', () => {
    it('should return the average for non-zero scores', () => {
      expect(app.computeNonZeroAverage([0, 90, 40, 100, 20, 0, 10, 100])).to.equal(60, 'Make sure computeNonZeroAverage determines the average without using scores of zero. The correct average was not returned for array [0, 90, 40, 100, 20, 0, 10, 100]');
      expect(app.computeNonZeroAverage([-10, -90, -40, -20, 0, -100])).to.equal(-52, 'Make sure that negative numbers are considered when determining the average in computeNonZeroAverage. The correct average was not returned for array [-10, -90, -40, -20, 0, -100]');
      expect(app.computeNonZeroAverage([30, 90, 40, 100, 200, 50, 100, 150])).to.equal(95, 'Make sure computeNonZeroAverage determines the average correctly. The correct average was not returned for array [30, 90, 40, 100, 200, 50, 100, 150]');
      expect(app.computeNonZeroAverage([-30, -90, 40, 100, 200, 50, 100, 140, 0])).to.equal(63.75, 'Make sure computeNonZeroAverage determines the average without using scores of zero and considers negative numbers. The correct average was not returned for array [-30, -90, 40, 100, 200, 50, 100, 140, 0]');
    })
  });

  describe('getMinMaxScore retrieves min and max score from the array', () => {
    it('Should return the minimum and maximum score in an array', () => {
      expect(app.getMinMaxScore([0, 90, 40, 100, 20, 0, 10, 100])).to.eql([0, 100], 'Make sure getMinMaxScore retrieves the correct minimum and maximum score. The correct numbers were not retrieved for array [0, 90, 40, 100, 20, 0, 10, 100]');
      expect(app.getMinMaxScore([-10, -90, -40, -20, 0, -100])).to.eql([-100, 0], 'Make sure getMinMaxScore allows a minimum score below zero. The correct numbers were not retrieved for array [-10, -90, -40, -20, 0, -100]');
      expect(app.getMinMaxScore([30, 90, 40, 100, 200, 50, 100, 150])).to.eql([30, 200], 'Make sure getMinMaxScore allows a maximum score above 100. The correct numbers were not retrieved for array [30, 90, 40, 100, 200, 50, 100, 150]');
    });
  });
});