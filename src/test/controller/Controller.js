import assert from 'assert';

import Controller from '../../main/controller/Controller.es6.js';

describe('Controller class', () => {

    describe('contructor', () => {

        it('Should create a new instance of Controller class', () => {

            let controller = new Controller();

            assert.strictEqual(true, controller instanceof Controller);
        });

        it('Should take a model {Model} obj in first argument', () => {

            let model = {hash: Date.now()};
            let controller = new Controller(model);

            assert.strictEqual(model, controller._model);
        });

        it('Should take a view {View} obj in second argument', () => {

            let view = {hash: Date.now()};
            let controller = new Controller({}, view);

            assert.strictEqual(view, controller._view);
        });
    });

    describe('public methods', () => {

        let controller = new Controller();

        it('Should contain init method', () => {

            assert.equal('function', typeof controller.init);
        });

        it('Should contain onMouseDown method', () => {

            assert.equal('function', typeof controller.onMouseDown);
        });

        it('Should contain onMouseUp method', () => {

            assert.equal('function', typeof controller.onMouseUp);
        });

        it('Should contain onMouseMove method', () => {

            assert.equal('function', typeof controller.onMouseMove);
        });

    });

    describe('init method', () => {

        it('Should call view.init method', () => {

            let view = {
                called: false,
                init: function() {

                    this.called = true;
                },

                getCanvas: function() {return {addEventListener: function() {}}}
            };


            let controller = new Controller({}, view);
            controller.init();

            assert.strictEqual(true, view.called);
        });

        it('Should call view.canvas.addEventListener("mousedown", {Function}', () => {

            let view = {
                init: function(){}
            };

            let canvas = {

                called: false,

                addEventListener: function(a,b) {

                    if ( a == 'mousedown' && typeof b == 'function') {

                        this.called = true;
                    };
                }
            };

            view.getCanvas = function() {return canvas;};

            let controller = new Controller({}, view);
            controller.init();
            assert.strictEqual(true, canvas.called);
        });

        it('Should call view.canvas.addEventListener("mouseup, {Function}', () => {

            let view = {init: function() {}};

            let canvas = {

                called: false,

                addEventListener: function(a,b) {

                    if ( a == 'mouseup' && typeof b == 'function') {

                        this.called = true;
                    };
                }
            };

            view.getCanvas = function() {return canvas;};

            let controller = new Controller({}, view);
            controller.init();
            assert.strictEqual(true, canvas.called);

        });

        it('Should call view.canvas.addEventListener("mousemove, {Function}', () => {

            let view = {init: function() {}};

            let canvas = {

                called: false,

                addEventListener: function(a,b) {

                    if ( a == 'mousemove' && typeof b == 'function') {

                        this.called = true;
                    };
                }
            };

            view.getCanvas = function() {return canvas;};

            let controller = new Controller({}, view);
            controller.init();
            assert.strictEqual(true, canvas.called);
        });

    });
});
