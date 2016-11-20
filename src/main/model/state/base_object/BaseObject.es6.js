'use strict';

/**
 * BaseObject
 *
 * класс описывает стандартный базовый 
 * объект на холсте. Все объекты (чемоданы, весы, фон) 
 * будут наследоваться от него
 *
 * @author idbolshakov@gmail.com
 * @version 1.0.0
 */
class BaseObject {

    /**
     * конструктор
     *
     * @public
     * @param measurement {Measurement} - размеры и позиция объекта
     */
    constructor(measurement) {

        this._measurement = measurement;

        this._image = null;
    }


    /**
     * init
     *
     * инициализация объекта
     * (установка его параметров)
     *
     * @public
     * @param data {obj} - данные для инициализации объекта. Формат:
     * {
     *  x: {int} - позиция по оси х,
     *  y: {int} - позиция по оси y,
     *  width: {int} - ширина объекта, 
     *  height {int} - высота объекта,
     *  offset {int} - отступ физической границы от верхней границы
     *  image {string} - url изобржанения объекта
     * }
     */
    init(data) {

        this.getMeasurement().init(data.x, data.y, data.width, data.height, data.offset);

        this._image = data.image;
    }

    /**
     * getMeasurement
     *
     * @public
     * @return {Measurement} - размеры и положение объекта
     */
    getMeasurement() {

        return this._measurement;
    }

    /**
     * getImage
     *
     * @public
     * @return {string} - url изображения объекта
     */
    getImage() {

        return this._image;
    }
};

export default BaseObject;
