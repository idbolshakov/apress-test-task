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

        this._x      = null;
        this._y      = null;

        this._width  = null;
        this._height = null;
    }

    /**
     * init
     *
     * устанавливает координаты x, y
     * ширину и высоту
     *
     * @public
     * @param {int} x      - координаты по оси x
     * @param {int} y      - координаты по оси y
     * @param {int} width  - ширина
     * @param {int} height - высота
     */
    init(x, y, width, height) {

        this.setX(x);
        this.setY(y);

        this.setWidth(width);
        this.setHeight(height);
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

        return {
            
            x: this._x,
            y: this._y
        };
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

        return {

            width: this._width,
            height: this._height
        };
    }

    /**
     * setX
     *
     * устанавливает координаты по оси х
     *
     * @public
     * @param x {int} - координаты по оси х
     */
    setX(x) {

        this._x = Number.parseInt(x,10) || 0;
    }

    /**
     * setY
     *
     * устанавливает коордианты по оси y
     *
     * @public 
     * @param y {int} - координаты по оси y
     */
    setY(y) {

        this._y = Number.parseInt(y,10) || 0;
    }

    /**
     * setWidth
     *
     * устанавливает ширину объекта
     *
     * @public 
     * @param width {int} - ширина объекта 
     */
    setWidth(width) {

        this._width = Number.parseInt(width,10) || 0;
    }

    /**
     * setHeight
     *
     * устанавливает высоту объекта
     *
     * @public 
     * @param height {int} - высота объекта 
     */
    setHeight(height) {

        this._height = Number.parseInt(height,10) || 0;
    }
};

export default Measurement;
