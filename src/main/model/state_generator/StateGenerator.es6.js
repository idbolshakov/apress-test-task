'use strict';

import Measurement from '../state/base_object/Measurement.es6.js';

/**
 * StateGenerator
 *
 * класс отвечает за 
 * формирование нового
 * состояние на основании
 * данных о текущем состоянии
 * модели
 *
 * @author idbolshakov@gmail.com
 * @version 1.0.0
 */
class StateGenerator {

    /**
     * конструктор
     *
     * @public
     * @param state {State} - объект с данными о состоянии модели
     * @param trunkGravity {TrunkGravity} - управление скоростями падения
     * @param geodata {Geodata} - управление объектами на которые можно падать
     * чемоданов
     * @param scalepanMotion {ScalepanMotion} - управление движением 
     * на чаше весов
     */
    constructor(
            state, 
            trunkGravity, geodata, 
            scalepanMotion) {

        this._state          = state;
        this._trunkGravity   = trunkGravity;
        this._geodata        = geodata;
        this._scalepanMotion = scalepanMotion;
    }

    /**
     * init
     *
     * инициализация scalepanMotin (передаем ему объекты чашек весов,
     * стрелку весов и чемоданы)
     *
     * инициализация Geodata (передаем ему Measurement объекты, на которые
     * можно падать)
     *
     * инициализация trunkGravity (передаем ему список с данными о чемоданах 
     * и геодату)
     *
     * @public
     */
    init() {

        this._scalepanMotion.init(
                this._state.getScales().getLeftPan(),
                this._state.getScales().getRightPan(),
                this._state.getScales().getArrow(),
                this._state.getTrunksList()
        );

        this._geodata.init( this._createGeodataObjectsList());

        this._trunkGravity.init(
                this._state.getTrunksList(), 
                this._geodata);
    }

    _createGeodataObjectsList() {

        let canvas = this._state.getCanvas();
        let canvasMeasurement = new Measurement();
        canvasMeasurement.init(
                0, 
                canvas.getSize().height, 
                canvas.getSize().width, 
                0, 
                0
        );

        return [

            this._state.getScales().getLeftPan().getMeasurement(),
            this._state.getScales().getRightPan().getMeasurement(),
            canvasMeasurement
        ];
    }

    /**
     * run
     *
     * отвечает за генерацию
     * нового состояния 
     * модели
     *
     * @public
     */
    run() {

        this._scalepanMotion.generateNewState();
        this._trunkGravity.generateNewState();
    }
}

export default StateGenerator;
