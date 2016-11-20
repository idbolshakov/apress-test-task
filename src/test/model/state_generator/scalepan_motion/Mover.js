import assert from 'assert';

import Mover from '../../../../main/model/state_generator/scalepan_motion/Mover.es6.js';

describe('ScalepanMover class', () => {

    describe('public static methods', () => {

        it('Should contain scalepanMove method', () => {

            assert.strictEqual('function', typeof Mover.scalepanMove);
        });

        it('Should contain arrowMove method', () => {

            assert.strictEqual('function', typeof Mover.arrowMove);
        });

    });

    describe('scalepanMove method', () => {

        let scalepan, scalepanY0, trunks, panWeight, totalWeight;

        beforeEach(() => {

            panWeight    = 300;
            totalWeight  = 600;

            let trunk1 = { 
                
                y: 10,

                getMeasurement: function() { return {
                
                    getPosition: function()  {return {y:trunk1.y};},
                    setY:        function(y) {trunk1.y = y;}
            }}};

            let trunk2 = { 
                
                y: 20,

                getMeasurement: function() { return {
                    
                    getPosition: function()  {return {y:trunk2.y};},
                    setY:        function(y) {trunk2.y = y;}
            }}};

            let trunk3 = { 
                
                y: 30,

                getMeasurement: function() { return {
                    
                    getPosition: function()  {return {y:trunk3.y};},
                    setY:        function(y) {trunk3.y = y;}
            }}};

            trunks = [trunk1, trunk2, trunk3];
        });

        describe('If current scalepan Y position < calculated position', () => {

            beforeEach(() => {

                scalepanY0   = 250;

                scalepan = {

                    y: 150,

                    getVerticalMotionValue: function() { return 50;},
                    getMeasurement: function() { return {

                        getPosition: function()  { return {y:scalepan.y}},
                        setY:        function(y) { scalepan.y = y;}
                    }}
                };

                Mover.scalepanMove(scalepan, scalepanY0, trunks, panWeight, totalWeight);
            });

            it('Should increase scalepan Y position by 1 point', ()  => {

                let except = 150 + 1;
                let actual = scalepan.getMeasurement().getPosition().y;

                assert.strictEqual(except, actual);
            });

            it('Should increase Y position by 1 point for all trunks in pan', () => {

                let except = (10 + 20 + 30) + 3;
                let actual = trunks[0].y + trunks[1].y + trunks[2].y;

                assert.strictEqual(except, actual);
            });
        });

        describe('If current scalepan Y position > calculated position', () => {

            beforeEach(() => {

                scalepanY0   = 50;

                scalepan = {

                    y: 150,

                    getVerticalMotionValue: function() { return 50;},
                    getMeasurement: function() { return {

                        getPosition: function()  { return {y:scalepan.y}},
                        setY:        function(y) { scalepan.y = y;}
                    }}
                };

                Mover.scalepanMove(scalepan, scalepanY0, trunks, panWeight, totalWeight);
            });

            it('Should decrease scalepan Y position by 1 point', ()  => {

                let except = 150 - 1;
                let actual = scalepan.getMeasurement().getPosition().y;

                assert.strictEqual(except, actual);
            });

            it('Should decrease Y position by 1 point for all trunks in pan', () => {

                let except = (10 + 20 + 30) - 3;
                let actual = trunks[0].y + trunks[1].y + trunks[2].y;

                assert.strictEqual(except, actual);
            });
        });
    });
    
    describe('arrowMove method', () => {

        let arrow;

        beforeEach(() => {

            arrow = {

                angle: 15,
                MAX_ANGLE: 30,
                getAngle: function()      { return this.angle;},
                setAngle: function(angle) { this.angle = angle;}
            };
        });

        describe('if current angle < calculated angle', () => {

            it('Should increase current angle', () => {

                Mover.arrowMove(arrow, 200, 300, arrow.MAX_ANGLE, 600);

                assert.equal(16, arrow.angle);
            });
        });

        describe('if current angle > calculated angle', () => {

            it('Should decrease current angle', () => {

                Mover.arrowMove(arrow, 300, 200, arrow.MAX_ANGLE, 600);

                assert.equal(14, arrow.angle);
            });
        });

    });
});

