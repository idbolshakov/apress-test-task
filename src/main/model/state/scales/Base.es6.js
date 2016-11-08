'use strict';

import BaseObject from '../base_object/BaseObject.es6.js';

/**
 * Base
 *
 * класс отвечает за 
 * хранение и обработку информации 
 * о основании весов
 *
 * @author idbolshakov@gmail.com
 * @version 1.0.0
 */
class Base extends BaseObject {

    /**
     * конструктор
     *
     * @public
     * @param measurement {Measurement} - размеры и позиция основания
     */
    constructor(measurement) {

        super(measurement);
    }
};

export default Base;
