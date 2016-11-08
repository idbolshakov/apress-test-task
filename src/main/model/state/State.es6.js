'use strict';

/**
 * State
 *
 * класс отвечает за 
 * хранение информации
 * о текущем состоянии
 * всех элементов на холсте
 * (включая сам холст)
 *
 * @author idbolshakov@gmail.com
 * @version 1.0.0
 */
class State {

    /**
     * конструктор
     *
     * @public
     * @param canvas {Canvas}    - параметры холста
     * @param trunksList {array} - массив с параметрами чемоданов
     * @param scales {Scales}    - параметры весов
     */
    constructor(canvas, trunksList, scales) {

        this._canvas     = canvas;
        this._trunksList = trunksList;
        this._scales     = scales;
    }

    getCanvas() {

        return this._canvas;
    }

    getTrunksList() {

        return this._trunksList;
    }

    getScales() {

        return this._scales;
    }
};

export default State;
