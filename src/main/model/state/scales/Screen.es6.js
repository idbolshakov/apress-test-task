'use strict';

import BaseObject from '../base_object/BaseObject.es6.js';

/**
 * Screen
 *
 * класс отвечает за 
 * хранение и обработку информации 
 * о экране весов
 *
 * @author idbolshakov@gmail.com
 * @version 1.0.0
 */
class Screen extends BaseObject {

    /**
     * конструктор
     *
     * @public
     * @param measurement {Measurement} - размеры и позиция экрана
     */
    constructor(measurement) {

        super(measurement);
    }
};

export default Screen;
