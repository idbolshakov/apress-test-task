import assert from 'assert';

import ScalepanMotion from '../../../../main/model/state_generator/scalepan_motion/ScalepanMotion.es6.js';

describe('ScalepanMotion class', () => {

    describe('constructor', () => {

        it('Should create a new instance of ScalepanMotion class', () => {

            let scalepanMotion = new ScalepanMotion();

            assert.equal(true, scalepanMotion instanceof ScalepanMotion);
        });

        it('Should take ScalepanTrunksDetector class in first argument', () => {

            let hash = Date.now();
            let scalepanMotion = new ScalepanMotion(hash);

            assert.strictEqual(hash, scalepanMotion._ScalepanTrunksDetector);
        });

        it('Should take Mover class in second argument', () => {

            let hash = Date.now();
            let scalepanMotion = new ScalepanMotion({},hash);

            assert.strictEqual(hash, scalepanMotion._Mover);
        });
 
    });

    describe('public methods', () => {

        let scalepanMotion = new ScalepanMotion();

        it('Should contain init method', () => {

            assert.strictEqual('function', typeof scalepanMotion.init);
        });

        it('Should contain generateNewState method', () => {

            assert.strictEqual('function', typeof scalepanMotion.generateNewState);
        });
    });

    describe('init method', () => {

        let scalepanMotion, leftPan, rightPan, trunks;

        beforeEach(() => {

            scalepanMotion = new ScalepanMotion();

            // mock
            leftPan = {

                hash: Date.now(),

                getMeasurement: function() { return {

                    getPosition: function() { return {

                        x: 123,
                        y: 321
                    };}
                };}
            };
            
            rightPan = {

                hash: Date.now(),

                getMeasurement: function() { return {

                    getPosition: function() { return {

                        x: 123,
                        y: 321
                    };}

                };}
            };

            let arrow = {

            };

            let trunk1 = {getWeight: function() { return 300;}};
            let trunk2 = {getWeight: function() { return 400;}};
            trunks = [trunk1, trunk2];

            // init method
            scalepanMotion.init(leftPan, rightPan, arrow ,trunks);
        });

        it('Should take leftPan {Scalepan} in first argument', () => {

            assert.strictEqual(scalepanMotion._leftPan, leftPan);
        });

        it('Should take rightPan {Scalepan} in second argument', () => {

            assert.strictEqual(scalepanMotion._rightPan, rightPan);
        });

        it('Should take trunks {Array of Trunk} in fourth argument', () => {

            assert.strictEqual(scalepanMotion._trunks, trunks);
        });

        it('Should save leftPan Y0 (y pos. while pan without trunks)', () => {

            let y0 = leftPan.getMeasurement().getPosition().y;

            assert.strictEqual(y0, scalepanMotion._leftPanY0); 
        });

        it('Should save rightPan Y0 (y pos. while pan without trunks)', () => {
            
            let y0 = rightPan.getMeasurement().getPosition().y;

            assert.strictEqual(y0, scalepanMotion._rightPanY0); 
        });

        it('Should calculate this._totalWeight (weight of all trunks)', () => {

            let totalWeight = 0;
            for (let i=0, l=trunks.length; i<l; i++) {

                totalWeight += trunks[i].getWeight();
            };

            assert.strictEqual(totalWeight, scalepanMotion._totalWeight);
        });
    });

    describe('generateNewState method', () => {

        let scalepanMotion, leftPan, rightPan, arrow, trunks;

        // mock
        leftPan = {

            hash: Date.now(),

            getMeasurement: function() { return {

                getPosition: function() { return {

                    x: 123,
                    y: 321
                };}
            };},

            getVerticalMotionValue: function() { return 60;}
        };
        
        rightPan = {

            hash: Date.now(),

            getMeasurement: function() { return {

                getPosition: function() { return {

                    x: 123,
                    y: 321
                };}

            };},

            getVerticalMotionValue: function() { return 60;}
        };

        arrow = {

        };

        let trunk1 = {getWeight: function() { return 300;}};
        let trunk2 = {getWeight: function() { return 400;}};
        trunks = [trunk1, trunk2];

        describe('for leftPan', () => {

            let ScalepanTrunksDetector, Mover;

            beforeEach(() => {
 
               ScalepanTrunksDetector = {

                    getHash: Date.now(),
                    get: function(argA, argB) {

                        if ( argA === leftPan && argB === trunks ) {

                            this.getCalled = true;
                        }; 

                        return this.getHash;
                    }, 

                   calcWeightHash: Date.now(),
                   calcWeight: function(argA) {

                       if (argA && argA === this.getHash && this.getCalled) {

                           this.calcWeightCalled = true;
                       };

                       return this.calcWeightHash;
                   }
                };

               Mover = {

                   arrowMove: function() {},
                   scalepanMove: function(argA, argB, argC, argD, argE) {

                       if ( argA && argA === leftPan ) {

                           this.scalepanMoveFirstArgCalled = true;
                       };

                       if (argA === leftPan) {

                           this.scalepanMoveSecondArgCalled = argB;
                       };

                       if (argA === leftPan && argC && argC === ScalepanTrunksDetector.getHash) {

                           this.scalepanMoveThirdArgCalled = true;
                       };

                       if (argA === leftPan &&  argD && argD === ScalepanTrunksDetector.calcWeightHash) {

                           this.scalepanMoveFourthArgCalled = true;
                       };

                       if (argA === leftPan) {

                           this.scalepanMoveFifthArgCalled = argE;
                       };
                   }
               };
 
                scalepanMotion = new ScalepanMotion(ScalepanTrunksDetector, Mover);
                scalepanMotion.init(leftPan, rightPan, arrow, trunks);
                scalepanMotion.generateNewState();
            });

            it('Should call ScalepanTrunksDetector.get(leftPan, trunks)', () => {
       
                assert.strictEqual(true, ScalepanTrunksDetector.getCalled);
            });

            it('Should call ScalepanTrunksDetector.calcWeight with ScalepanTrunksDetecotr.get result in first argument', () => {

                assert.strictEqual(true, ScalepanTrunksDetector.calcWeightCalled);
            });

            it('Should Mover.scalepanMove with leftPan in first argument', () => {

                assert.strictEqual(true, Mover.scalepanMoveFirstArgCalled);
            });
            
            it('Should call Mover.scalepanMove with leftPanY0 in second argument', () => {

                assert.strictEqual(scalepanMotion._leftPanY0, Mover.scalepanMoveSecondArgCalled);
            });
 
            it('Should call Mover.scalepanMove with result of ScalepanTrunksDetector.get in third argument', () => {

                assert.strictEqual(true, Mover.scalepanMoveThirdArgCalled);
            });
 
            it('Should call Mover.scalepanMove with result of ScalepanTrunksDetector.calcWeight in fourth argument', () => {

                assert.strictEqual(true, Mover.scalepanMoveFourthArgCalled);
            });
 
            it('Should call Mover.scalepanMove with total trunk weight in fifth argument', () => {

                assert.strictEqual(scalepanMotion._totalWeight, Mover.scalepanMoveFifthArgCalled);
            });
        });

        describe('for rightPan', () => {

            let ScalepanTrunksDetector, Mover;

            beforeEach(() => {
 
               ScalepanTrunksDetector = {

                    getHash: Date.now(),
                    get: function(argA, argB) {

                        if ( argA === rightPan && argB === trunks ) {

                            this.getCalled = true;
                        }; 

                        return this.getHash;
                    }, 

                   calcWeightHash: Date.now(),
                   calcWeight: function(argA) {

                       if (argA && argA === this.getHash && this.getCalled) {

                           this.calcWeightCalled = true;
                       };

                       return this.calcWeightHash;
                   }
                };

               Mover = {

                   arrowMove: function() {},
                   scalepanMove: function(argA, argB, argC, argD, argE) {

                       if ( argA && argA === rightPan ) {

                           this.scalepanMoveFirstArgCalled = true;
                       };

                       if ( argA === rightPan ) {

                           this.scalepanMoveSecondArgCalled = argB;
                       };

                       if (argA === rightPan && argC && argC === ScalepanTrunksDetector.getHash) {

                           this.scalepanMoveThirdArgCalled = true;
                       };

                       if (argA === rightPan && argD && argD === ScalepanTrunksDetector.calcWeightHash) {

                           this.scalepanMoveFourthArgCalled = true;
                       };

                       if (argA === rightPan) {

                           this.scalepanMoveFifthArgCalled = argE;
                       };
                   }
               };
        
                scalepanMotion = new ScalepanMotion(ScalepanTrunksDetector, Mover);
                scalepanMotion.init(leftPan, rightPan, arrow, trunks);
                scalepanMotion.generateNewState();
            });

            it('Should call ScalepanTrunksDetector.get(rightPan, trunks)', () => {

                assert.strictEqual(true, ScalepanTrunksDetector.getCalled);
            });

            it('Should call ScalepanTrunksDetector.calcWeight with ScalepanTrunksDetecotr.get result in first argument', () => {

                assert.strictEqual(true, ScalepanTrunksDetector.calcWeightCalled);
            });

            it('Should call Mover.scalepanMove with rightPan in first argument', () => {

                assert.strictEqual(true, Mover.scalepanMoveFirstArgCalled);
            });
            
            it('Should call Mover.scalepanMove with rightPanY0 in second argument', () => {

                assert.strictEqual(scalepanMotion._rightPanY0, Mover.scalepanMoveSecondArgCalled);
            });
 
            it('Should call Mover.scalepanMove with result of ScalepanTrunksDetector.get in third argument', () => {

                assert.strictEqual(true, Mover.scalepanMoveThirdArgCalled);
            });
 
            it('Should call Mover.scalepanMove with result of ScalepanTrunksDetector.calcWeight in fourth argument', () => {

                assert.strictEqual(true, Mover.scalepanMoveFourthArgCalled);
            });
 
            it('Should call Mover.scalepanMove with total trunk weight in fifth argument', () => {

                assert.strictEqual(scalepanMotion._totalWeight, Mover.scalepanMoveFifthArgCalled);
            });
        });

        describe('For arrow', () => {

            let ScalepanTrunksDetector, Mover, arrow;

            beforeEach(() => {
 
               ScalepanTrunksDetector = {

                    get: function() {}, 

                   calcWeight: function() {}
                };

               Mover = {

                   scalepanMove: function() {},

                   arrowMove: function() {

                   }
               };
        
                scalepanMotion = new ScalepanMotion(ScalepanTrunksDetector, Mover);
                scalepanMotion.init(leftPan, rightPan, arrow, trunks);
                scalepanMotion.generateNewState();
            });
        });
    });
});
