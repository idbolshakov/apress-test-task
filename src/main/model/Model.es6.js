'use strict';

import TrunkDragger from './trunk_dragger/TrunkDragger.es6.js';

/**
 * Model
 *
 * класс отвечает
 * за хранение модели
 * приложения
 *
 * @author idbolshakov@gmail.com
 * @version 1.0.0
 */
class Model {

    /**
     * конструктор
     * 
     * @public
     * @param state {State} - начальное состояние данных приложения
     */
    constructor(state) {

        this._state = state;
        this._trunkDragger = new TrunkDragger(state);
    }

    /**
     * getState
     *
     * @return {State} - текущее состояние данных приложения
     */
    getState() {

        return this._state;
    }

    /**
     * getTrunkDragger
     *
     * @return {TrunkDragger} - объект, управляющий перемещением чемоданов
     */
    getTrunkDragger() {

        return this._trunkDragger;
    }
}

export default Model;
