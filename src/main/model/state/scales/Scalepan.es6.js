'use strict';

import BaseObject from '../base_object/BaseObject.es6.js';

/**
 * Scalepan
 *
 * класс отвечает за 
 * хранение и обработку информации 
 * о чаше весов
 *
 * @author idbolshakov@gmail.com
 * @version 1.0.0
 */
class Scalepan extends BaseObject {

    /**
     * конструктор
     *
     * @public
     * @param measurement {Measurement} - объект с размерами и координатами 
     * чаши весов
     */
    constructor(measurement) {

        super(measurement);
    }

    /**
     * setVerticalMotionValue
     *
     * @public
     * @param value {int} - величина, на которую чаша может опускаться вниз
     */
    setVerticalMotionValue(value) {

        this._verticalMotionValue = value;
    }

    /**
     * getVerticalMotionValue
     *
     * @public
     * @return {int} - величина, на которую чаша может опускаться вниз
     */
    getVerticalMotionValue() {

        return this._verticalMotionValue;
    }
};

export default Scalepan;
