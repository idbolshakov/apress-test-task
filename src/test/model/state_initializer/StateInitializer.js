import assert from 'assert';

import StateInitializer from '../../../main/model/state_initializer/StateInitializer.es6.js';
import State from '../../../main/model/state/State.es6.js';
import Canvas from '../../../main/model/state/Canvas.es6.js';
import Trunk from '../../../main/model/state/Trunk.es6.js';
import Measurement from '../../../main/model/state/base_object/Measurement.es6.js';
import Scalepan from '../../../main/model/state/scales/Scalepan.es6.js';
import Screen from '../../../main/model/state/scales/Screen.es6.js';
import Base from '../../../main/model/state/scales/Base.es6.js';
import Scales from '../../../main/model/state/scales/Scales.es6.js';

//
// StateInitializer class
//
describe('StateInitializer class', () => {

    describe('static methods', () => {

        it('Should contain static method run', () => {

            assert.strictEqual('function', typeof StateInitializer.run);
        });
    });

    describe('run method', () => {

        it('Should create an {State} object from config', () => {

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
                            weight: 100,
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
                            weight: 75,
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
                    }
                }
            };

            // canvas
            let canvas = new Canvas();
            canvas.init({
                width: config.canvas.width, 
                height: config.canvas.height, 
                image: config.canvas.image
            });

            // trunks
            let trunks  = [];
            let trunk1 = new Trunk(new Measurement());
            trunk1.init({
                x: config.trunks[0].measurement.x,
                y: config.trunks[0].measurement.y,
                width: config.trunks[0].measurement.width,
                height: config.trunks[0].measurement.height,

                image: config.trunks[0].image,
                weight: config.trunks[0].weight,
                action: config.trunks[0].action
            });

            let trunk2  = new Trunk(new Measurement());
            trunk2.init({
                x: config.trunks[1].measurement.x,
                y: config.trunks[1].measurement.y,
                width: config.trunks[1].measurement.width,
                height: config.trunks[1].measurement.height,

                image: config.trunks[1].image,
                weight: config.trunks[1].weight,
                action: config.trunks[1].action
            });
            trunks.push(trunk1);
            trunks.push(trunk2);

            // scales
            let leftPan  = new Scalepan(new Measurement()); 
            leftPan.init({
                    x:      config.scales.leftPan.measurement.x,
                    y:      config.scales.leftPan.measurement.y,
                    width:  config.scales.leftPan.measurement.width,
                    height: config.scales.leftPan.measurement.height,
                    image:  config.scales.leftPan.image
            });

            let rightPan = new Scalepan(new Measurement()); 
            rightPan.init({
                    x:      config.scales.rightPan.measurement.x,
                    y:      config.scales.rightPan.measurement.y,
                    width:  config.scales.rightPan.measurement.width,
                    height: config.scales.rightPan.measurement.height,
                    image:  config.scales.rightPan.image
            });

            let screen   = new Screen(new Measurement()); 
            screen.init({
                    x:      config.scales.screen.measurement.x,
                    y:      config.scales.screen.measurement.y,
                    width:  config.scales.screen.measurement.width,
                    height: config.scales.screen.measurement.height,
                    image:  config.scales.screen.image
            });

            let base     = new Base(new Measurement()); 
            base.init({
                    x:      config.scales.base.measurement.x,
                    y:      config.scales.base.measurement.y,
                    width:  config.scales.base.measurement.width,
                    height: config.scales.base.measurement.height,
                    image:  config.scales.base.image
            });

            let scales = new Scales(leftPan, rightPan, screen, base);

            // state
            let state1 = new State(canvas, trunks, scales);
            
            // state_initializer 
            let state2 = StateInitializer.run(config); 

            // ASSERT
            assert.equal(JSON.stringify(state1), JSON.stringify(state2));
        });
    });
});
