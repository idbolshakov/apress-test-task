'use strict';

import State       from '../state/State.es6.js';
import Canvas      from '../state/Canvas.es6.js';
import Trunk       from '../state/Trunk.es6.js';
import Scalepan    from '../state/scales/Scalepan.es6.js';
import Screen      from '../state/scales/Screen.es6.js';
import Base        from '../state/scales/Base.es6.js';
import Scales      from '../state/scales/Scales.es6.js';
import Measurement from '../state/base_object/Measurement.es6.js';

/**
 * StateInitializer
 *
 * класс отвечает за чтение
 * конфига с состоянием и 
 * создание на его основе 
 * объекта состояния {State}
 *
 * @author idbolshakov@gmail.com
 * @version 1.0.0
 */
class StateInitializer {

    /**
     * run
     *
     * берет конфиг с состоянием системы
     * и парсит его в {State} объект 
     *
     * @public 
     * @param config {obj} - конфиг с состоянием системы
     * @return {State} - состояние системы полученное из конфига
     */
    static run(config) {

        let canvas = this._createCanvasObject(config.canvas);
        let trunks = this._createTrunksList(config.trunks);
        let scales = this._createScalesObject(config.scales);

        return new State(canvas, trunks, scales);
    }

    static _createCanvasObject(config) {

        let canvas = new Canvas();
        canvas.init({
            width: config.width, 
            height: config.height, 
            image: config.image
        });

        return canvas;
    }

    static _createTrunksList(config) {

        let trunks  = [];

        for (let i=0, l=config.length; i<l; i++) {

            let trunk = new Trunk(new Measurement());

            trunk.init({
                x: config[i].measurement.x,
                y: config[i].measurement.y,
                width: config[i].measurement.width,
                height: config[i].measurement.height,

                image: config[i].image,
                weight: config[i].weight,
                action: config[i].action
            });

            trunks.push(trunk);
        };

        return trunks;
    }

    static _createScalesObject(config) {

        let leftPan  = new Scalepan(new Measurement()); 
        leftPan.init({
                x:      config.leftPan.measurement.x,
                y:      config.leftPan.measurement.y,
                width:  config.leftPan.measurement.width,
                height: config.leftPan.measurement.height,
                image:  config.leftPan.image
        });

        let rightPan = new Scalepan(new Measurement()); 
        rightPan.init({
                x:      config.rightPan.measurement.x,
                y:      config.rightPan.measurement.y,
                width:  config.rightPan.measurement.width,
                height: config.rightPan.measurement.height,
                image:  config.rightPan.image
        });

        let screen   = new Screen(new Measurement()); 
        screen.init({
                x:      config.screen.measurement.x,
                y:      config.screen.measurement.y,
                width:  config.screen.measurement.width,
                height: config.screen.measurement.height,
                image:  config.screen.image
        });

        let base     = new Base(new Measurement()); 
        base.init({
                x:      config.base.measurement.x,
                y:      config.base.measurement.y,
                width:  config.base.measurement.width,
                height: config.base.measurement.height,
                image:  config.base.image
        });

        return new Scales(leftPan, rightPan, screen, base);
    }
};

export default StateInitializer;
