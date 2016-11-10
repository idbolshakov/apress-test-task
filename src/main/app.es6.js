'use strict';

import config from           './appConfig.es6.js';
import State from            './model/state/State.es6.js';
import StateInitializer from './model/state_initializer/StateInitializer.es6.js';

import View from './view/View.es6.js';

{
    let state = StateInitializer.run(config);

    let view  = new View(state, window);
    view.init();
    
    setInterval(() => {

        view.draw();
    }, 20);
}
