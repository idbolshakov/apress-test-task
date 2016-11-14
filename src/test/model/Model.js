import assert from 'assert';

import Model            from '../../main/model/Model.es6.js';
import State            from '../../main/model/state/State.es6.js';
import StateInitializer from '../../main/model/state_initializer/StateInitializer.es6.js';
import TrunkDragger     from '../../main/model/trunk_dragger/TrunkDragger.es6.js';

describe('Model class', () => {

    describe('contructor', () => {

        it('Should create a new instance of Model class', () => {

            let model = new Model();

            assert.strictEqual(true, model instanceof Model);
        });
    });

    describe('public methods', () => {

        let model = new Model();

        it('Should contain getState method', () => {

            assert.strictEqual('function', typeof model.getState);
        });

        it('Should contain getTrunkDragger method', () => {

            assert.strictEqual('function', typeof model.getTrunkDragger);
        });
    });

    describe('getState method', () => {

        let model = new Model(new State());

        it('Should return {State} object', () => {

            assert.equal(true, model.getState() instanceof State);
        });
    });

    describe('getTrunkDragger method', () => {

        let model = new Model(new State());

        it('Should return {TrunkDragger} object', () => {

            assert.equal(true, model.getTrunkDragger() instanceof TrunkDragger);
        });
    });

});
