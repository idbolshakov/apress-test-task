import assert from 'assert';

import View from '../../main/view/View.es6.js';
import StateInitializer from '../../main/model/state_initializer/StateInitializer.es6.js';

//
// View class
//
describe('View class', () => {

    // config
    let config = {
        canvas: {
            width: 1500,
            height: 700,
            image: 'img/background.svg'
        },
        trunks: [
            {
                id: 1,
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
                id: 2,
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

    let state = StateInitializer.run(config);

    //
    // constructor
    //
    describe('constructor', () => {

        it('Should create a new instance of View class', () => {

            let view = new View();

            assert.equal(true, view instanceof View);
        });

        it('Should take {State} obj in first argument', () => {

            let state = {hash: Date.now()};

            let view = new View(state, null);

            assert.strictEqual(state, view._state);
        });

        it('Should take {Window} obj in second argument', () => {

            let window = {hash: Date.now()};

            let view = new View(null, window);

            assert.strictEqual(window, view._window);
        });
    });

    //
    // public constants
    //
    describe('public constants', () => {

        let view = new View();

        it ('Should contain CANVAS_ID const', () => {

            assert.equal(true, typeof view.CANVAS_ID != 'undefined');
        });
    });

    //
    // public methods
    //
    describe('public methods', () => {

        let view = new View();

        it('Should contain init method', () => {
            
            assert.equal('function', typeof view.init);
        });

        it('Should contain getCanvas method', () => {
            
            assert.equal('function', typeof view.getCanvas);
        });



        it('Should contain draw method', () => {
            
            assert.equal('function', typeof view.draw);
        });
    });

    describe('init method', () => {

        it('Should find DOM element with CANVAS_ID via {Window} obj', () => {

            let window = {
                document: {
                    
                    getElementById: function(id) {

                        this.id = id;
                        return {style:{}};
                    }
                },

                Image: class {}
            };

            let view = new View(state, window);

            view.init();

            assert.strictEqual(view.CANVAS_ID, window.document.id);
        }); 

        it('Should load all images from {State} object', () => {
           
            let window = {
                document: {getElementById: function() {return {style:{}};}},

                count: 0,

                Image: class {

                    set src(src) {

                        window.count++;
                    }
                }
            };

            let imagesCount = 7; // 7 image urls in config obj
            
            let view = new View(state, window);

            view.init();

            assert.equal(imagesCount, window.count);
        });

        it('Should set DOM canvas.width = config.canvas.width', () => {
           
            let window = {

                canvas: {width: null, style: {}},

                document: {
                    getElementById: function() {

                        return window.canvas;
                    }
                },

                Image: class {}
            };

            let view = new View(state, window);
            view.init();

            assert.equal(state.getCanvas().getSize().width, window.canvas.width);
        });

        it('Should set DOM canvas.height = config.canvas.height', () => {
           
            let window = {

                canvas: {height: null, style: {}},

                document: {
                    getElementById: function() {

                        return window.canvas;
                    }
                },

                Image: class {}
            };

            let view = new View(state, window);
            view.init();

            assert.equal(state.getCanvas().getSize().height, window.canvas.height);
        });

        it('Should set DOM canvas.style.outline = "solid 1px #000"', () => {
           
            let window = {

                canvas: {style: {outline: null}},

                document: {
                    getElementById: function() {

                        return window.canvas;
                    }
                },

                Image: class {}
            };

            let view = new View(state, window);
            view.init();

            assert.equal("solid 1px #000", window.canvas.style.outline);
        });
    });

    describe('getCanvas method', () => {

        it('Should return DOM Canvas element', () => {
 
            let window = {

                canvas: {style: {}},

                document: {
                    getElementById: function() {

                        return window.canvas;
                    }
                },

                Image: class {}
            };

            let view = new View(state, window);
            view.init();

            assert.strictEqual(window.canvas, view.getCanvas());

        });
    });

    describe('draw method', () => {

        it('Should return true if all images in imagesMap loaded', () => {

            // MOCK
            let window = {

                document: {

                    getElementById: function() {
                        
                        return {
                            
                            style: {},
                            getContext: function() { 
                                return {
                                    clearRect: function(){},
                                    drawImage: function() {},

                                    save:      function() {},
                                    translate: function() {},
                                    rotate:    function() {},
                                    beginPath: function() {},
                                    moveTo:    function() {},
                                    lineTo:    function() {},
                                    stroke:    function() {},
                                    restore:   function() {},
                                }
                            },
                        };
                    }
                },

                Image: class {
               
                    constructor() {

                        this.complete = false;
                    }

                    set src(src) {

                        this.complete = true;
                    }
                }
            };

            // ASSERT
            let view = new View(state, window);
            view.init();

            assert.strictEqual(true, view.draw());
        });

        it('Should return false if images in imagesMap not loaded', () => {

            // MOCK 
            let window = {

                document: {

                    getElementById: function() {return {style:{}};}
                },

                Image: class {
               
                    constructor() {

                        this.complete = true;
                    }

                    set src(src) {

                        this.complete = false;
                    }
                }
            };


            // ASSERT 
            let view = new View(state, window);
            view.init();

            assert.strictEqual(false, view.draw());
        });

        describe('if all images loaded', () => {

            it('Should call canvas.getContext(\'2d\') method', () => {

                // MOCK 
                let window = {

                    context: {

                        clearRect: function() {},
                        drawImage: function() {},
                        save:      function() {},
                        translate: function() {},
                        rotate:    function() {},
                        beginPath: function() {},
                        moveTo:    function() {},
                        lineTo:    function() {},
                        stroke:    function() {},
                        restore:   function() {},
                    },

                    canvas: {

                        style: {},
                        called: false,

                        getContext: function(arg) {

                            if (arg === '2d') {

                                this.called = true;

                                return window.context;
                            }
                        }
                    },

                    document: {

                        getElementById: function() {return window.canvas;}
                    },

                    Image: class {
                   
                        constructor() {

                            this.complete = true;
                        }
                    }
                };

                // ASSERT
                let view = new View(state, window);
                view.init();

                if (view.draw()) {

                    assert.strictEqual(true, window.canvas.called);
                }
            });

            it('Should call context.clearRect() with canvas params', () => {

                // MOCK
                let window = {
                    context: {

                        called: false,

                        clearRect: function(a,b,c,d){
 
                            if ( a === 0 && b === 0 && 
                                 c === state.getCanvas().getSize().width &&
                                 d === state.getCanvas().getSize().height)
                               {
                                   this.called = true;
                               };
                        },

                        drawImage: function() {},
                        save:      function() {},
                        translate: function() {},
                        rotate:    function() {},
                        beginPath: function() {},
                        moveTo:    function() {},
                        lineTo:    function() {},
                        stroke:    function() {},
                        restore:   function() {},
                    },

                    canvas: {

                        style: {},
                        getContext: function(arg) { return window.context;},
                    },

                    document: {

                        getElementById: function() {return window.canvas;}
                    },

                    Image: class {
                   
                        constructor() {

                            this.complete = true;
                        }
                    }
                };

                // ASSERT
                let view = new View(state, window);
                view.init();

                if (view.draw()) {

                    assert.strictEqual(true, window.context.called);
                }
            });

            it('Should call context.drawImage() method with background image params', () => {

                // MOCK
                let window = {
                    context: {

                        called: false,

                        clearRect: function() {
                        },

                        drawImage: function(i, x, y, w, h) {

                            if (i.src === state.getCanvas().getImage() &&
                                x === 0 && y === 0 && 
                                w === state.getCanvas().getSize().width &&
                                h === state.getCanvas().getSize().height) {

                                this.called = true;
                            } 
                        },

                        save:      function() {},
                        translate: function() {},
                        rotate:    function() {},
                        beginPath: function() {},
                        moveTo:    function() {},
                        lineTo:    function() {},
                        stroke:    function() {},
                        restore:   function() {},
                    },

                    canvas: {

                        style: {},
                        getContext: function(arg) { return window.context;},
                    },

                    document: {

                        getElementById: function() {return window.canvas;}
                    },

                    Image: class {
                   
                        constructor() {

                            this.complete = true;
                        }
                    }
                };

                // ASSERT
                let view = new View(state, window);
                view.init();

                if (view.draw()) {

                    assert.strictEqual(true, window.context.called);
                }
            });

            it('Should call context.drawImage() method with scales screen image params', () => {

                // MOCK
                let window = {
                    context: {

                        called: false,

                        clearRect: function() {
                        },

                        drawImage: function(i, x, y, w, h) {

                            let screen = state.getScales().getScreen();

                            if (i.src === screen.getImage() &&
                                x === screen.getMeasurement().getPosition().x && 
                                y === screen.getMeasurement().getPosition().y && 
                                w === screen.getMeasurement().getSize().width &&
                                h === screen.getMeasurement().getSize().height) {

                                this.called = true;
                            } 
                        },

                        save:      function() {},
                        translate: function() {},
                        rotate:    function() {},
                        beginPath: function() {},
                        moveTo:    function() {},
                        lineTo:    function() {},
                        stroke:    function() {},
                        restore:   function() {},
                    },

                    canvas: {

                        style: {},
                        getContext: function(arg) { return window.context;},
                    },

                    document: {

                        getElementById: function() {return window.canvas;}
                    },

                    Image: class {
                   
                        constructor() {

                            this.complete = true;
                        }
                    }
                };

                // ASSERT
                let view = new View(state, window);
                view.init();

                if (view.draw()) {

                    assert.strictEqual(true, window.context.called);
                }

            });

            it('Should call context.drawImage() method with left scalepan image params', () => {

                // MOCK
                let window = {
                    context: {

                        called: false,

                        clearRect: function() {
                        },

                        drawImage: function(i, x, y, w, h) {

                            let left = state.getScales().getLeftPan();

                            if (i.src === left.getImage() &&
                                x === left.getMeasurement().getPosition().x && 
                                y === left.getMeasurement().getPosition().y && 
                                w === left.getMeasurement().getSize().width &&
                                h === left.getMeasurement().getSize().height) {

                                this.called = true;
                            } 
                        },

                        save:      function() {},
                        translate: function() {},
                        rotate:    function() {},
                        beginPath: function() {},
                        moveTo:    function() {},
                        lineTo:    function() {},
                        stroke:    function() {},
                        restore:   function() {},
                    },

                    canvas: {

                        style: {},
                        getContext: function(arg) { return window.context;},
                    },

                    document: {

                        getElementById: function() {return window.canvas;}
                    },

                    Image: class {
                   
                        constructor() {

                            this.complete = true;
                        }
                    }
                };

                // ASSERT
                let view = new View(state, window);
                view.init();

                if (view.draw()) {

                    assert.strictEqual(true, window.context.called);
                }

            });

            it('Should call context.drawImage() method with right scalepan image params', () => {

                // MOCK
                let window = {
                    context: {

                        called: false,

                        clearRect: function() {
                        },

                        drawImage: function(i, x, y, w, h) {

                            let right = state.getScales().getRightPan();

                            if (i.src === right.getImage() &&
                                x === right.getMeasurement().getPosition().x && 
                                y === right.getMeasurement().getPosition().y && 
                                w === right.getMeasurement().getSize().width &&
                                h === right.getMeasurement().getSize().height) {

                                this.called = true;
                            } 
                        },

                        save:      function() {},
                        translate: function() {},
                        rotate:    function() {},
                        beginPath: function() {},
                        moveTo:    function() {},
                        lineTo:    function() {},
                        stroke:    function() {},
                        restore:   function() {},
                    },

                    canvas: {

                        style:{},
                        getContext: function(arg) { return window.context;},
                    },

                    document: {

                        getElementById: function() {return window.canvas;}
                    },

                    Image: class {
                   
                        constructor() {

                            this.complete = true;
                        }
                    }
                };

                // ASSERT
                let view = new View(state, window);
                view.init();

                if (view.draw()) {

                    assert.strictEqual(true, window.context.called);
                }

            });

            it('Should call context.drawImage() method with scales base image params', () => {

                // MOCK
                let window = {
                    context: {

                        called: false,

                        clearRect: function() {
                        },

                        drawImage: function(i, x, y, w, h) {

                            let base = state.getScales().getBase();

                            if (i.src === state.getScales().getBase().getImage() &&
                                x === base.getMeasurement().getPosition().x && 
                                y === base.getMeasurement().getPosition().y && 
                                w === base.getMeasurement().getSize().width &&
                                h === base.getMeasurement().getSize().height) {

                                this.called = true;
                            }
                        },

                        save:      function() {},
                        translate: function() {},
                        rotate:    function() {},
                        beginPath: function() {},
                        moveTo:    function() {},
                        lineTo:    function() {},
                        stroke:    function() {},
                        restore:   function() {},
                    },

                    canvas: {

                        style: {},
                        getContext: function(arg) { return window.context;},
                    },

                    document: {

                        getElementById: function() {return window.canvas;}
                    },

                    Image: class {
                   
                        constructor() {

                            this.complete = true;
                        }
                    }
                };

                // ASSERT
                let view = new View(state, window);
                view.init();

                if (view.draw()) {

                    assert.strictEqual(true, window.context.called);
                }

            });

            it('Should call context.drawImage() for all trunks in state', () => {

                // MOCK
                let window = {
                    context: {

                        calledCount: 0,

                        clearRect: function() {
                        },

                        drawImage: function(i, x, y, w, h) {

                            let trunk = state.getTrunksList()[this.calledCount];

                            if (i.src === trunk.getImage() &&
                                x === trunk.getMeasurement().getPosition().x && 
                                y === trunk.getMeasurement().getPosition().y && 
                                w === trunk.getMeasurement().getSize().width &&
                                h === trunk.getMeasurement().getSize().height) {

                                this.calledCount++;
                            } 
                        },

                        save:      function() {},
                        translate: function() {},
                        rotate:    function() {},
                        beginPath: function() {},
                        moveTo:    function() {},
                        lineTo:    function() {},
                        stroke:    function() {},
                        restore:   function() {},
                    },

                    canvas: {

                        style: {},
                        getContext: function(arg) { return window.context;},
                    },

                    document: {

                        getElementById: function() {return window.canvas;}
                    },

                    Image: class {
                   
                        constructor() {

                            this.complete = true;
                        }
                    }
                };

                // ASSERT
                let view = new View(state, window);
                view.init();

                if (view.draw()) {

                    assert.strictEqual(window.context.calledCount, state.getTrunksList().length);
                }

            });

        });
    });
});
