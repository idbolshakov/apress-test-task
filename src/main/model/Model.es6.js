'use strict';

import TrunkDragger           from './trunk_dragger/TrunkDragger.es6.js';
import StateInitializer       from './state_initializer/StateInitializer.es6.js';
import StateGenerator         from './state_generator/StateGenerator.es6.js';
import TrunkGravity           from './state_generator/trunk_gravity/TrunkGravity.es6.js';
import Geodata                from './state_generator/trunk_gravity/geodata/Geodata.es6.js';
import ScalepanMotion         from './state_generator/scalepan_motion/ScalepanMotion.es6.js';
import ScalepanTrunksDetector from './state_generator/scalepan_motion/ScalepanTrunksDetector.es6.js';
import Mover          from './state_generator/scalepan_motion/Mover.es6.js';

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
     * @param state {obj} - конфиг с начальным состоянием системы
     */
    constructor(config) {

        this._state = StateInitializer.run(config);
        this._trunkDragger   = new TrunkDragger(this._state);
        this._stateGenerator = new StateGenerator(
                this._state, 
                new TrunkGravity(), 
                new Geodata(),
                new ScalepanMotion(ScalepanTrunksDetector, Mover)
        );

        this._stateGenerator.init();
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
     * getStateGenerator
     *
     * @return {StateGenerator} - объект генерирущий новое состояние модели
     */
    getStateGenerator() {

        return this._stateGenerator;
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
