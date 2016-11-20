'use strict';

/**
 * TrunkDragger
 *
 * класс отвечает за изменение
 * State объекта, когда 
 * пользователь перемещает 
 * чемодан по холсту
 *
 * @author idbolshakov@gmail.com
 * @version 1.0.0
 */
class TrunkDragger {

    /**
     * конструктор
     *
     * @param {State} state - объект хранящий состояние модели
     */
    constructor(state) {

        this._trunk = null;

        this._state = state;
    }

    /**
     * tryToGrab
     *
     * метод позволяет 
     * перевести состояние
     * какого-то чемодана
     * в 'ACTION_GRAB'
     * (если переданные координаты
     * соответствуют координатам этого чемодана)
     *
     * если получилось захватить чемодан, то 
     * сохраняем на него ссылку в this._trunk
     * а в state объекте перемещаем этот чемодан
     * в конец trunksList
     *
     * @param x {int} - координата по оси x
     * @param y {int} - координата по оси y
     * @return {boolean} - true если захватили чемодан, false - иначе
     */
    tryToGrab(x, y) {

        if (this._isTrunkGrabbed()) {
            // если уже выбран чемодан 
            return false;
        };

        let trunks = this._state.getTrunksList();

        for (let i=trunks.length-1; i>=0; i--) {

            let trunk = trunks[i];

            let x1 = trunk.getMeasurement().getPosition().x;
            let x2 = x1 + trunk.getMeasurement().getSize().width;

            let y1 = trunk.getMeasurement().getPosition().y;
            let y2 = y1 + trunk.getMeasurement().getSize().height;

            if ( x >= x1 && x <= x2 && y >= y1 && y <= y2) {

                trunks.push(trunks.splice(i,1)[0]);

                this._trunk = trunks[trunks.length-1];
                this._trunk.setAction(this._trunk.ACTION_GRAB);

                return true;
            };
        };

        return false;
    }

    _isTrunkGrabbed() {

        if (this._trunk === null) {
            
            return false;
        };

        return true;
    }

    /**
     * tryToDrag
     *
     * метод позволяет изменить координаты
     * захваченного чемодана (this._trunk) 
     * на переданные в качестве аргументов
     * новые координаты
     *
     * @param x {int} - координата по оси x
     * @param y {int} - координата по оси y
     *
     * @return {boolean} false - если не захвачен чемодан, true - иначе
     */
    tryToDrag(x, y) {

        if(this._isTrunkGrabbed()) {

            let trunk = this._trunk;

            let trunkX  = trunk.getMeasurement().getPosition().x;
            let trunkY  = trunk.getMeasurement().getPosition().y;
            let trunkW  = trunk.getMeasurement().getSize().width;
            let trunkH  = trunk.getMeasurement().getSize().height;
            let canvasW = this._state.getCanvas().getSize().width;
            let canvasH = this._state.getCanvas().getSize().height;

            // если не выходим за границы по оси x
            // то смещаем чемодан по оси х
            if ((x + trunkW/2 < canvasW) && (x - trunkW/2 > 0)) {

                trunk.getMeasurement().setX(x - trunkW/2);
            };

            // если не выходим за границы по оси y
            // то смещаем чемодан по оси y
            if ((y + trunkH/2 < canvasH) && (y - trunkH/2 > 0)) {

                trunk.getMeasurement().setY(y - trunkH/2);
            };

            return true;
        };

        return false;
    }

    /**
     * tryToLet
     *
     * позволяет изменить 
     * состояние чемодана,
     * который выбран пользователем
     * (this._trunk)
     * в ACTION_REST
     */
    tryToLet() {

        if (this._trunk === null) {

            return false;
        };

        this._trunk.setAction(this._trunk.ACTION_FALL);
        this._trunk = null;

        return true;
    }
}

export default TrunkDragger;
