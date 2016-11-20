import assert from 'assert';

import StateGenerator from '../../../main/model/state_generator/StateGenerator.es6.js';

describe('StateGenerator class', () => {

    describe('constructor', () => {

        it('Should create a new instance of StateGenerator class', () => {

            let stateGenerator = new StateGenerator();

            assert.equal(true, stateGenerator instanceof StateGenerator);
        });

        it('Should take a {State} obj in first argument', () => {


            let state = {hash: Date.now()};
            let stateGenerator = new StateGenerator(state);

            assert.strictEqual(state, stateGenerator._state);
        });
    });

    describe('public methods', () => {

        let stateGenerator = new StateGenerator({});

        it('Should contain init method', () => {

            assert.strictEqual('function', typeof stateGenerator.init);
        });

        it('Should contain run method', () => {

            assert.strictEqual('function', typeof stateGenerator.run);
        });

    });

    describe('init method', () => {

        it('Should call trunkGravity.init() with state.getTrunksList() in first argument', () => {

            let hash = Date.now();
            let state = {

                getTrunksList: function() {

                    return hash;
                },

                getCanvas: function() {

                    return {

                        getSize: function() {

                            return { width: 5, height: 10};
                        }
                    };
                },

                getScales: function() {

                    return {

                        mock: function() {

                            return {

                                getMeasurement: function() {}
                            }
                        },

                        getLeftPan: function() {return this.mock()},
                        getRightPan: function() {return this.mock()},
                        getArrow:    function() {return this.mock()}
                    };
                }
            };

            let trunkGravity = {

                init: function(arg) {

                    this.called = arg;
                }
            };

            let geodata = {

                init: function() {

                }
            };

            let scalepanMotion = {

                init: function() {

                }
            };

            let stateGenerator = new StateGenerator(
                    state, 
                    trunkGravity, 
                    geodata,
                    scalepanMotion);
            stateGenerator.init();

            assert.strictEqual(hash, trunkGravity.called);
        });

        it('Should call trunkGravity.init() with geodata obj in second argument', () => {

            let hash = Date.now();
            let state = {

                getTrunksList: function() {
                },

                getCanvas: function() {

                    return {

                        getSize: function() {

                            return { width: 5, height: 10};
                        }
                    };
                },

                getScales: function() {

                    return {

                        mock: function() {

                            return {

                                getMeasurement: function() {}
                            }
                        },

                        getLeftPan: function() {return this.mock()},
                        getRightPan: function() {return this.mock()},
                        getArrow:    function() {return this.mock()}
                    };
                }
            };

            let trunkGravity = {

                init: function(argA, argB) {

                    this.called = argB;
                }
            };

            let geodata = {

                init: function() {

                }
            };

            let scalepanMotion = {

                init: function() {

                }
            };

            let stateGenerator = new StateGenerator(
                    state, 
                    trunkGravity, 
                    geodata,
                    scalepanMotion);
            stateGenerator.init();

            assert.strictEqual(geodata, trunkGravity.called);
        });
    });
});
