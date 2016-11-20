import assert from 'assert';

import Trunk        from '../../../../main/model/state/Trunk.es6.js';
import Measurement  from '../../../../main/model/state/base_object/Measurement.es6.js';
import TrunkGravity from '../../../../main/model/state_generator/trunk_gravity/TrunkGravity.es6.js';

describe('TrunkGravity class', () => {

    describe('constructor', () => {

        it('Should create a new instance of TrunkGravity class', () => {

            let trunkGravity = new TrunkGravity();

            assert.equal(true, trunkGravity instanceof TrunkGravity);
        });
    });

    describe('public constants', () => {

        let trunkGravity = new TrunkGravity();

        it('Should contain {number} STARTING_SPEED constant', () => {

            assert.strictEqual(true, typeof trunkGravity.STARTING_SPEED == 'number');
        });

        it('Should contain {number} GRAVITY constant', () => {

            assert.strictEqual(true, typeof trunkGravity.GRAVITY == 'number');
        });

    });

    describe('public methods', () => {

        let trunkGravity = new TrunkGravity();

        it('Should contain init method', () => {

            assert.equal('function', typeof trunkGravity.init);
        });
        
        it('Should contain generateNewState method', () => {

            assert.equal('function', typeof trunkGravity.generateNewState);
        });

    });
});
