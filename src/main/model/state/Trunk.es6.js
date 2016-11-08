'use strict';

import BaseObject from './base_object/BaseObject.es6.js';

/**
 * Trunk
 *
 * класс отвечает за 
 * хранение и обработку информации 
 * о чемодане
 *
 * @author idbolshakov@gmail.com
 * @version 1.0.0
 */
class Trunk extends BaseObject {

    /**
     * конструктор
     *
     * @public
     * @param  measurement {Measurement} - размеры и координаты чемодана
     */
    constructor(measurement) {

        super(measurement);

        // чемодан лежит
        this.ACTION_REST = 0;

        // чемодан захвачен пользователем
        this.ACTION_GRAB = 1;

        // чемодан передвигают
        this.ACTION_MOVE = 2;

        // чемодан падает
        this.ACTION_FALL = 3;

        this._weight = null;
        this._action = null;
    }

    /**
     * init
     *
     * инициализация чемодана
     * (установка его параметров)
     * 
     * @public
     * @param  data {obj} - данные для инициализации объекта. Формат: 
     * {
     *  x: {int} - позиция по оси х,
     *  y: {int} - позиция по оси y,
     *  width: {int} - ширина чемодана,
     *  height: {int} - высота чемодана,
     *
     *  weight: {int} - вес чемодана,
     *
     *  image: {string} - url изображения чемодана
     *
     *  action: {int} - id текущего действия объектa
     * }
     */
    init(data) {
        
        super.init(data);

        this._weight = data.weight;
        this._action = data.action;
    }

    /**
     * getWeight
     *
     * @public
     * @return  {int} вес чемодана
     */
    getWeight() {

        return this._weight;
    }

    /**
     * getAction
     *
     * все идентификаторы возможных действий объекта
     * описаны в конструкторе
     *
     * @public
     * @return  {int} идентификатор текущего действия объекта
     */
    getAction() {

        return this._action;
    }
};

export default Trunk;
