import assert from 'assert';

import Model            from '../../main/model/Model.es6.js';
import State            from '../../main/model/state/State.es6.js';
import StateInitializer from '../../main/model/state_initializer/StateInitializer.es6.js';
import StateGenerator   from '../../main/model/state_generator/StateGenerator.es6.js';
import TrunkDragger     from '../../main/model/trunk_dragger/TrunkDragger.es6.js';

describe('Model class', () => {

    let config = {
        canvas: {
            width: 1500,
            height: 700,
            image: 'img/background.svg'
        },
        trunks: [
            {
                image: 'img/trunks/trunk1.svg',
                weight: 50,
                action: 0,
                measurement: {
                    x: 10,
                    y: 600,
                    width: 100,
                    height: 100
                }
            },
            {
                image: 'img/trunks/trunk2.svg',
                weight: 100,
                action: 1,
                measurement: {
                    x: 60,
                    y: 620,
                    width: 75,
                    height: 75
                }
            }
        ],
        scales: {
            screen: {
                image: 'img/scales/screen.svg',
                measurement: {
                    x: 985,
                    y: 482,
                    width: 120,
                    height: 130
                }
            },
            base: {
                image: 'img/scales/base.svg',
                measurement: {
                    x: 600,
                    y: 605,
                    width: 900,
                    height: 75
                }
            },
            leftPan: {
                image: 'img/scales/pan',
                measurement: {
                    x: 595,
                    y: 487,
                    width: 415,
                    height: 125
                }
            },
            rightPan: {
                image: 'img/scales/pan',
                measurement: {
                    x: 1080,
                    y: 487,
                    width: 415,
                    height: 125
                }
            },

            arrow: {

                measurement: {

                    x: 1046,
                    y: 570,
                    width: 7,
                    height: 50
                }
            }

        }
    };


    describe('contructor', () => {

        it('Should create a new instance of Model class', () => {

            let model = new Model(config);

            assert.strictEqual(true, model instanceof Model);
        });
    });

    describe('public methods', () => {

        let model = new Model(config);

        it('Should contain getState method', () => {

            assert.strictEqual('function', typeof model.getState);
        });

        it('Should contain getStateGenerator method', () => {

            assert.strictEqual('function', typeof model.getStateGenerator);
        });

        it('Should contain getTrunkDragger method', () => {

            assert.strictEqual('function', typeof model.getTrunkDragger);
        });
    });

    describe('getState method', () => {

        let model = new Model(config);

        it('Should return {State} object', () => {

            assert.equal(true, model.getState() instanceof State);
        });
    });

    describe('getStateGenerator method', () => {

        let model = new Model(config);

        it('Should return {StateGenerator} object', () => {

            assert.equal(true, model.getStateGenerator() instanceof StateGenerator);
        });
    });

    describe('getTrunkDragger method', () => {

        let model = new Model(config);

        it('Should return {TrunkDragger} object', () => {

            assert.equal(true, model.getTrunkDragger() instanceof TrunkDragger);
        });
    });

});
