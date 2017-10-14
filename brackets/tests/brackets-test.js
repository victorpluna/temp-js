var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var validator = require('../brackets-validator.js');

describe('Brackets', function() {
    it('validator should return false if empty string, null value or integer value are passed in', function() {
        expect(validator.validate('')).to.equal(false);
        expect(validator.validate()).to.equal(false);
        expect(validator.validate(null)).to.equal(false);
        expect(validator.validate(1234)).to.equal(false);
    });

    it('validator should return false if no closing brackets are passed in', function() {
        expect(validator.validate('[')).to.equal(false);
        expect(validator.validate('{')).to.equal(false);
        expect(validator.validate('(')).to.equal(false);

        expect(validator.validate('[][')).to.equal(false);
        expect(validator.validate('{}{')).to.equal(false);
        expect(validator.validate('()(')).to.equal(false);

        expect(validator.validate('[[]')).to.equal(false);
        expect(validator.validate('{{}')).to.equal(false);
        expect(validator.validate('(()')).to.equal(false);
    });

    it('validator should return false if no opening brackets are passed in', function() {
        expect(validator.validate(']')).to.equal(false);
        expect(validator.validate('}')).to.equal(false);
        expect(validator.validate(')')).to.equal(false);

        expect(validator.validate('[]]')).to.equal(false);
        expect(validator.validate('{}}')).to.equal(false);
        expect(validator.validate('())')).to.equal(false);

        expect(validator.validate('][]')).to.equal(false);
        expect(validator.validate('}{}')).to.equal(false);
        expect(validator.validate(')()')).to.equal(false);
    });

    it('validator should return false if its pair is different from itself', function() {
        expect(validator.validate('[}')).to.equal(false);
        expect(validator.validate('[)')).to.equal(false);
        expect(validator.validate('{]')).to.equal(false);
        expect(validator.validate('{)')).to.equal(false);
        expect(validator.validate('(}')).to.equal(false);
        expect(validator.validate('(]')).to.equal(false);
    });

    it('validator should return false if its pair is an inverted order', function() {
        expect(validator.validate('][')).to.equal(false);
        expect(validator.validate('}{')).to.equal(false);
        expect(validator.validate(')(')).to.equal(false);
    });

    it('validator should return true if it contains no unmatched brackets.', function() {
        expect(validator.validate('[]')).to.equal(true);
        expect(validator.validate('{}')).to.equal(true);
        expect(validator.validate('()')).to.equal(true);

        expect(validator.validate('[][]')).to.equal(true);
        expect(validator.validate('{}{}')).to.equal(true);
        expect(validator.validate('()()')).to.equal(true);

        expect(validator.validate('[[]]')).to.equal(true);
        expect(validator.validate('{{}}')).to.equal(true);
        expect(validator.validate('(())')).to.equal(true);
    });
});