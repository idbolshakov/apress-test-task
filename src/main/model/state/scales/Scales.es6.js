'use strict';

import Scalepan from './Scalepan.es6.js';
import Screen   from './Screen.es6.js';
import Base     from './Base.es6.js';

/**
 * Scales
 *
 * класс отвечает за 
 * хранение и обработку информации 
 * о весах
 *
 * @author idbolshakov@gmail.com
 * @version 1.0.0
 */
class Scales {

    /**
     * конструктор
     *
     * @public
     * @param leftPan  {Scalepan} - левая чаша весов
     * @param rightPan {ScalePan} - правая чаша весов
     * @param screen   {Screen}   - экран весов
     * @param base     {Base}     - основание весов
     * @param arrow    {Arrow}    - стрелка весов
     */
    constructor(leftPan, rightPan, screen, base, arrow) {

        this._leftPan  = leftPan;
        this._rightPan = rightPan;
        this._screen   = screen;
        this._base     = base;
        this._arrow    = arrow;
    }

    /**
     * getLeftPan
     *
     * @public
     * @return  {Scalepan} левая чаша весов
     */
    getLeftPan() {

        return this._leftPan;
    }

    /**
     * getRightPan
     *
     * @public
     * @return  {Scalepan} правая чаша весов
     */
    getRightPan() {

        return this._rightPan;
    }
    
    /**
     * getScreen
     *
     * @public
     * @return  {Screen} экран весов
     */
    getScreen() {

        return this._screen;
    }
    
    /**
     * getBase
     *
     * @public
     * @return  {Base} основание весов
     */
    getBase() {

        return this._base;
    }
 
    /**
     * getArrow
     *
     * @public
     * @return  {Arrow} стрелка весов
     */
    getArrow() {

        return this._arrow;
    }
};

export default Scales;
