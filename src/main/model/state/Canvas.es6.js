'use strict';

/**
 * Canvas
 *
 * класс отвечает за 
 * хранение информации
 * о холсте
 * (размеры, бэкграунд)
 *
 * @author idbolshakov@gmail.com
 * @version 1.0.0
 */
class Canvas {

    /**
     * конструктор
     *
     * @public
     */
    constructor() {

        this._width  = null;
        this._height = null;
        this._image  = null;
    }

    /**
     * init
     *
     * @public
     * @param data {obj} - параметры холста. Формат: 
     * {
     *  width: {int} - ширина холста,
     *  height: {int} - высота холста,
     *  image: {string} - url бэкграунда холста 
     * }
     */
    init(data) {

        this._width  = data.width;
        this._height = data.height;
        this._image  = data.image;
    }

    getSize() {

        return {

            width: this._width,
            height: this._height
        };
    }

    getImage() {

        return this._image;
    }
};

export default Canvas;
