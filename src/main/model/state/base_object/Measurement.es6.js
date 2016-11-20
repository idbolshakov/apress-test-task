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
        this._offset = null;
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
     * @param {int} offset - значение, на которое нужно
     * увеличить координату верхнего края элемента, чтобы 
     * получить горизонтальную линию, по которой будем равнять
     * элементы, которые могут приземляться на этот объект
     */
    init(x, y, width, height, offset) {

        this.setX(x);
        this.setY(y);

        this.setWidth(width);
        this.setHeight(height);

        this._offset = offset;
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

    /**
     * getContactLinePos
     *
     * @return {int} координата по оси Y описывающая линию физической
     * границы элемента (на нее будут падать другие элементы)
     */
    getContactLinePos() {

        return this.getPosition().y + this._offset;
    }
};

export default Measurement;
