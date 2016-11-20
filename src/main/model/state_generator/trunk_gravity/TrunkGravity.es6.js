'use strict';

/**
 * TrunkGravity
 *
 * класс отвечает за 
 * управление скоростью
 * падения чемоданов при 
 * генерации новго состояния 
 * модели.
 *
 * @author idbolshakov@gmail.com
 * @version 1.0.0
 */
class TrunkGravity {

    /**
     * конструктор
     *
     * @public
     */
    constructor() {

        this.STARTING_SPEED = 1;
        this.GRAVITY        = 1;

        this._trunks   = null;
        this._speedsMap = {};
    }

    /**
     * init
     * 
     * @public
     * @param trunks {array of {Trunk}} - список с данными о чемоданах
     * @param geodata {Geodata} - данные об объектах, на которые можно падать
     */
    init(trunks, geodata) {

        this._trunks     = trunks;
        this._geodata    = geodata;
        this._createSpeedsMap(trunks);
    }

    /** @private */
    _createSpeedsMap(trunks) {

        for (let i=0, l=trunks.length; i<l; i++) {

            this._speedsMap[trunks[i].getId()] = this.STARTING_SPEED;
        };
    }

    /**
     * generateNewState
     *
     * генерируем новое состояние данных 
     * о положении чемоданов на холсте
     * (все чемоданы с action = ACTION_FALL
     *  должны либо падать ниже, либо 
     *  приземлиться на землю или чашу весов)
     *
     * @public
     */
    generateNewState() {

        for (let i=0, l=this._trunks.length; i<l; i++) {

            let trunk = this._trunks[i];

            // нам нужны только которые сейчас падают
            if (trunk.getAction() !== trunk.ACTION_FALL) {
                
                continue;
            };

            if (this._geodata.tryToFall(trunk, this._speedsMap[trunk.getId()])) {
                // если упали
                trunk.setAction(trunk.ACTION_REST);
                this._speedsMap[trunk.getId()] = this.STARTING_SPEED;

            } else {
                // продолжаем падать
                this._speedsMap[trunk.getId()] += this.GRAVITY;
            };
        };
    }
}

export default TrunkGravity;
