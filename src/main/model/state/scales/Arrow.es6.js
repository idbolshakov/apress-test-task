'use strict';

import BaseObject from '../base_object/BaseObject.es6.js';

/**
 * Arrow
 *
 * класс отвечает за 
 * хранение и обработку информации 
 * о стрелке на экране весов
 *
 * @author idbolshakov@gmail.com
 * @version 1.0.0
 */
class Arrow extends BaseObject {

    /**
     * конструктор
     *
     * @public
     * @param measurement {Measurement} - размеры и позиция стрелки
     */
    constructor(measurement) {

        super(measurement);

        this.MAX_ANGLE = 30;
        this._angle    = 0;
    }

    /**
     * setAngle
     *
     * @public
     * @param angle {number}  - угол наклона стрелки
     */ 
    setAngle(angle) {

        this._angle = angle;
    }

    /**
     * getAngle
     *
     * @public
     * @return {number} - угол поворота стрелки весов
     */
    getAngle() {

        return this._angle;
    }
};

export default Arrow;
