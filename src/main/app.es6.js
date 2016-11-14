'use strict';

import config from           './appConfig.es6.js';
import StateInitializer from './model/state_initializer/StateInitializer.es6.js';


import Model from './model/Model.es6.js'; 
import View  from './view/View.es6.js';
import Controller from './controller/Controller.es6.js';

{
    let model      = new Model(StateInitializer.run(config));
    let view       = new View(model.getState(), window);
    let controller = new Controller(model, view);

    controller.init();
    
    setInterval(() => {

        view.draw();
    }, 20);
}
