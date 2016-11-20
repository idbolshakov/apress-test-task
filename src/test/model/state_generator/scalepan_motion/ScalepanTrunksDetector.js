import assert from 'assert';

import ScalepanTrunksDetector from '../../../../main/model/state_generator/scalepan_motion/ScalepanTrunksDetector.es6.js';

describe('ScalepanTrunksDetector class', () => {

    describe('public static methods', () => {

        it('Should contain get method', () => {

            assert.strictEqual('function', typeof ScalepanTrunksDetector.get);
        });
        it('Should contain calcWeight method', () => {

            assert.strictEqual('function', typeof ScalepanTrunksDetector.calcWeight);
        });

    });

    describe('get method', () => {

        it('Should return list of all trunks that rest on scalepan', () => {

            // mock
            let trunk1 = {

                weight: 25,

                getWeight: function() { return this.weight; },

                getMeasurement: function() { return {

                    getPosition: function() { return {

                        x: 10,
                        y: 20
                    }},

                    getSize: function() { return {

                        width: 30,
                        height: 35 
                    }}
                }}
            };

            let trunk2 = {

                weight: 30,

                getWeight: function() { return this.weight; },

                getMeasurement: function() { return {

                    getPosition: function() { return {

                        x: 50,
                        y: 30
                    }},

                    getSize: function() { return {

                        width: 20,
                        height: 25 
                    }}
                }}
            };

            let trunk3 = {

                weight: 45,

                getWeight: function() { return this.weight; },

                getMeasurement: function() { return {

                    getPosition: function() { return {

                        x: 70,
                        y: 35
                    }},

                    getSize: function() { return {

                        width: 20,
                        height: 25 
                    }}
                }}
            };

            let trunks = [trunk1, trunk2, trunk3];

            let scalepan = {

                getMeasurement: function() { return {

                    getPosition: function() { return {

                        x: 0,
                        y: 50
                    }},

                    getSize: function() { return {

                        width: 300,
                        height: 30
                    }},

                    getContactLinePos: function() { return 50 + 5;} }}
            };

            // assert
            let expected = JSON.stringify([trunk1, trunk2]);
            let actual   = JSON.stringify(ScalepanTrunksDetector.get(scalepan, trunks));

            assert.strictEqual(expected, actual);
        });
    });

    describe('calcWeight method', () => {

        it('Should return the summ of all trunks weight', () => {

            let trunk1 = {getWeight: function() {return 50;}};
            let trunk2 = {getWeight: function() {return 65;}};
            let trunk3 = {getWeight: function() {return 33;}};
            let trunk4 = {getWeight: function() {return 11;}};

            let expect = 50 + 65 + 33 + 11;
            let actual = ScalepanTrunksDetector.calcWeight([
                    trunk1, 
                    trunk2, 
                    trunk3, 
                    trunk4
            ]);

            assert.strictEqual(expect, actual);
        });
    });
});


