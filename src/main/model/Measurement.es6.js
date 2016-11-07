'use strict';

/**
 * Measurement
 *
 * класс отвечает за хранение измерений 
 * (ширина, высота, позиция x, позиция y)
 * объектов, которые будем отрисовывать
 * в canvas'e
 *
 * @author idbolshakov@gmail.com
 * @version 1.0.0
 */
class Measurement {

    /**
     * конструктор
     *
     * @public
     */
    constructor() {
    }

    /**
     * getPosition
     *
     * @public
     * @return  {obj} текущая позиция объекта на холсте
     * 
     * Формат возвращаемого объекта: 
     * {
     *   x: {int},
     *   y: {int}
     * }
     */
    getPosition() {

    }

    /**
     * getSize
     *
     * @public
     * @return  {obj} размеры объекта в пикселах
     * 
     * Формат возвращаемого объекта: 
     * {
     *   width: {int},
     *   height: {int}
     * }
     */
    getSize() {

    }
};

export default Measurement;
