import assert from 'assert';

import TrunkDragger     from '../../../main/model/trunk_dragger/TrunkDragger.es6.js';
import StateInitializer from '../../../main/model/state_initializer/StateInitializer.es6.js';

describe('StateDragger class', () => {

    let state = null;

    beforeEach(() => {
        
        // config
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
                    action: 0,
                    measurement: {
                        x: 200,
                        y: 620,
                        width: 75,
                        height: 75
                    }
                },
                {
                    image: 'img/trunks/trunk3.svg',
                    weight: 150,
                    action: 0,
                    measurement: {

                        x: 300,
                        y: 590,
                        width: 75,
                        height: 100
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
                }
            }
        };

        state = StateInitializer.run(config);
    });

    describe('constructor', () => {

        it('Should create a new instance of TrunkDragger class', () => {

            let trunkDragger = new TrunkDragger();

            assert.strictEqual(true, trunkDragger instanceof TrunkDragger);
        });

        it('Should take {State} obj in first argument', () => {

            let trunkDragger = new TrunkDragger(state);

            assert.strictEqual(state, trunkDragger._state);
        });
    });

    describe('public methods', () => {

        let trunkDragger = new TrunkDragger();

        it('Should contain tryToGrab method', () => {

            assert.equal('function', typeof trunkDragger.tryToGrab);
        });

        it('Should contain tryToDrag method', () => {

            assert.equal('function', typeof trunkDragger.tryToDrag);
        });

        it('Should contain tryToLet method', () => {

            assert.equal('function', typeof trunkDragger.tryToLet);
        });
    });

    describe('tryToGrab method', () => {

        it('Should set action = ACTION_GRAB to a trunk if x and y are in his area', () => {

            let trunkDragger = new TrunkDragger(state);

            trunkDragger.tryToGrab(15, 620);

            let trunk = state.getTrunksList()[2];

            assert.equal(trunk.ACTION_GRAB, trunk.getAction());
        });

        it('Should save in this._trunk link to grabbed trunk if grabbed', () => {

            let trunkDragger = new TrunkDragger(state);

            trunkDragger.tryToGrab(10, 600);

            let trunk = state.getTrunksList()[2];

            assert.strictEqual(trunk, trunkDragger._trunk);
        });

        it('Should return true if we grabbed the trunk', () => {

            let trunkDragger = new TrunkDragger(state);

            assert.strictEqual(true, trunkDragger.tryToGrab(65, 630));
        });

        it('Should return false if we didn\'t grabbed the trunk', () => {

            let trunkDragger = new TrunkDragger(state);

            assert.strictEqual(false, trunkDragger.tryToGrab(700, 630));
        });

        it('Should return false if we already grabbed another trunk', () => {

            let trunkDragger = new TrunkDragger(state);

            trunkDragger.tryToGrab(65, 630);

            assert.strictEqual(false, trunkDragger.tryToGrab(10, 600));
        });

        it('Should move grabbed trunk to end of trunksList in {State} obj', () => {

            let trunkDragger = new TrunkDragger(state);
            trunkDragger.tryToGrab(200, 620);

            let actual = false;
            let trunks = state.getTrunksList();
            if (trunks[0].getImage() == 'img/trunks/trunk1.svg' && 
                trunks[1].getImage() == 'img/trunks/trunk3.svg' &&
                trunks[2].getImage() == 'img/trunks/trunk2.svg') {

                actual = true;
            };

            assert.strictEqual(true, actual);
        });
    });

    describe('TryToDrag method', () => {

        it('Should return false if trunk not grabbed', () => {

            let trunkDragger = new TrunkDragger(state);

            trunkDragger.tryToGrab(500,500);

            assert.strictEqual(false, trunkDragger.tryToDrag());
        });

        it('Should return true if trunk is grabbed', () => {

            let trunkDragger = new TrunkDragger(state);

            trunkDragger.tryToGrab(10, 600);

            assert.strictEqual(true, trunkDragger.tryToDrag());
        });

        describe('if new trunk.x coordinate in canvas ranges', () => {

            it('Should set new trunk.x (trunk.x0--x--trunk.x1)', () => {

                let trunkDragger = new TrunkDragger(state);

                trunkDragger.tryToGrab(10, 600);
                trunkDragger.tryToDrag(100, 600);

                // get last trunk in state
                let trunk = state.getTrunksList()[2];

                assert.equal(50, trunk.getMeasurement().getPosition().x);
            }); 
        });

        describe('if new trunk.y coordinate in canvas ranges', () => {

            it('Should set new trunk.y (trunk.y0--y--trunk.y1)', () => {

                let trunkDragger = new TrunkDragger(state);

                trunkDragger.tryToGrab(10, 600);
                trunkDragger.tryToDrag(100, 500);

                // get last trunk in state
                let trunk = state.getTrunksList()[2];

                assert.equal(450, trunk.getMeasurement().getPosition().y);
            }); 
        });

    });

    describe('tryToLet method', () => {

        it('Should return false if this._trunk == null', () => {

            let trunkDragger = new TrunkDragger(state);

            trunkDragger._trunk = null;

            assert.strictEqual(false, trunkDragger.tryToLet());
        });

        it('Should return true if this._trunk != null', () => {

            let trunkDragger = new TrunkDragger(state);

            trunkDragger._trunk = state.getTrunksList()[0];

            assert.strictEqual(true, trunkDragger.tryToLet());
        });

        it('Should set this._trunk = null if this._trunk != null', () => {

            let trunkDragger = new TrunkDragger(state);

            trunkDragger._trunk = state.getTrunksList()[0];

            trunkDragger.tryToLet();

            assert.strictEqual(true, trunkDragger._trunk === null);
        });

        it('Should set ACTION_REST to action property in grabbed trunk', () => {

            let trunkDragger = new TrunkDragger(state);

            trunkDragger.tryToGrab(10, 600);
            trunkDragger.tryToLet();

            let trunk = state.getTrunksList()[0];

            assert.strictEqual(trunk.ACTION_REST, trunk.getAction());
        });
    });
});
