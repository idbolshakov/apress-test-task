import assert from 'assert';

import Geodata from '../../../../../main/model/state_generator/trunk_gravity/geodata/Geodata.es6.js';
import Trunk       from '../../../../../main/model/state/Trunk.es6.js';
import Measurement from '../../../../../main/model/state/base_object/Measurement.es6.js';

describe('Geodata class', () => {

    describe('Constructor', () => {

        it('Should create a new instance of Geodata class', () => {

            let geodata = new Geodata();

            assert.equal(true, geodata instanceof Geodata);
        });
    });

    describe('public methods', () => {

        let geodata = new Geodata();
        geodata.init([]);

        it('Should contain init method', () => {

            assert.equal('function', typeof geodata.init);
        });

        it('Should contain tryToFall method', () => {

            assert.equal('function', typeof geodata.tryToFall);
        });
    });

    describe('tryToFall method', () => {

        let leftPan      = new Measurement();
        // x=50, y=50, width=50, height=1 offset = 2
        leftPan.init(50, 50, 50, 1, 2);

        let rightPan     = new Measurement();
        // x=150, y=60, width=50, height=1 offset = 2
        rightPan.init(150, 60, 50, 1, 2);

        let bottomBorder = new Measurement();
        // x=0 y=299 width=500 height=1 offset = 0
        bottomBorder.init(0, 300, 500, 1, 0);

        let objects      = [leftPan, rightPan, bottomBorder];

        describe('if trunk not fall on the geodata object', () => {

            let trunk;
            let geodata;

            beforeEach(() => {
                
                trunk = new Trunk(new Measurement()); 
                trunk.init({ x: 10, y: 20, width: 20, height: 25});

                geodata = new Geodata();
                geodata.init(objects);
            });

            it('Should increase trunk.y position by speed value', () => {

                geodata.tryToFall(trunk, 5);
                assert.strictEqual(25, trunk.getMeasurement().getPosition().y);
            });

            it('Should return false', () => {

                assert.strictEqual(false, geodata.tryToFall(trunk, 5));
            });
        });

        describe('if trunk fall on the geodata object', () => {

            let trunk;
            let geodata;

            beforeEach(() => {
                
                trunk = new Trunk(new Measurement()); 

                geodata = new Geodata();
                geodata.init(objects);
            });

            it('Should set trunk bottom border =  object contact line position', () => {

                trunk.init({ x: 160, y: 270, width: 20, height: 25});
                geodata.tryToFall(trunk, 5);

                let contactLinePosition = objects[2].getContactLinePos();
                let trunkBottomPosition = trunk.getMeasurement().getPosition().y +
                                          trunk.getMeasurement().getSize().height;

                assert.strictEqual(contactLinePosition, trunkBottomPosition);
            });

            it('Should return true', () => {

                trunk.init({ x: 160, y: 270, width: 20, height: 25});

                assert.strictEqual(true, geodata.tryToFall(trunk, 5));
            });
        });
    });
});
