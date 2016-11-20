'use strict';

/**
 * ScalepanMotion
 *
 * управляет расчетом движения
 * чаш весов и стрелки весов
 *
 * @author idbolshakov@gmail.com
 * @version 1.0.0
 */
class ScalepanMotion {

    /**
     * Конструктор
     *
     * @public
     * @param ScalepanTrunksDetector {ScalepanTrunksDetector} - класс, со
     * статическим методом для возврата массива чемоданов, которые лежат
     * на чаше
     * @param Mover {Mover} - управлнение перемещением чаш весов и стрелки 
     * весов
     */
    constructor(ScalepanTrunksDetector, Mover) {

        this._leftPan  = null;
        this._rightPan = null;
        this._trunks   = null;

        this._leftPanY0   = null;
        this._rightPanY0  = null;
        this._totalWeight = 0;

        this._ScalepanTrunksDetector = ScalepanTrunksDetector;
        this._Mover                  = Mover;
    }

    /**
     * init
     *
     * получаем ссылки на левую и правую чашу весов, стрелку
     * весов и на массив чемоданов
     *
     * сохрнаяем Y позицию левой и правой чаши весов когда на них нет чемоданов
     *
     * получаем суммарный вес всех чемоданов
     *
     * @public
     * @param leftPan {Scalepan}       - объект с состоянием левой чаши весов
     * @param rightPan {Scalepan}      - объект с сотоянием правой чаши весов
     * @param arrow {Arrow}            - объект с состоянием стрелки весов
     * @param trunks {Array of Trunks} - массив с состоянием чемоданов
     */
    init(leftPan, rightPan, arrow, trunks) {

        this._leftPan  = leftPan;
        this._rightPan = rightPan;
        this._arrow    = arrow;
        this._trunks   = trunks;

        this._saveScalepansY0();
        this._calculateTotalWeight();
    }

    /** @private */
    _saveScalepansY0() {

        this._leftPanY0  = this._leftPan.getMeasurement().getPosition().y;
        
        this._rightPanY0 = this._rightPan.getMeasurement().getPosition().y;
    }

    /** @private */
    _calculateTotalWeight() {

        for (let i=0, l=this._trunks.length; i<l; i++) {

            this._totalWeight += +this._trunks[i].getWeight();
        };
    }

    /**
     * generateNewState
     *
     * на основании текущего состояния 
     * чаш весов
     * строим новое
     *
     * @public
     */
    generateNewState() {
        
        // for left pan
        let leftPanTrunks = this._ScalepanTrunksDetector.get(this._leftPan, this._trunks);
        let leftPanWeight = this._ScalepanTrunksDetector.calcWeight(leftPanTrunks);
        this._Mover.scalepanMove(
                this._leftPan, 
                this._leftPanY0,
                leftPanTrunks, 
                leftPanWeight,
                this._totalWeight
        );

        // for right pan
        let rightPanTrunks = this._ScalepanTrunksDetector.get(this._rightPan, this._trunks);
        let rightPanWeight = this._ScalepanTrunksDetector.calcWeight(rightPanTrunks);
        this._Mover.scalepanMove(
                this._rightPan, 
                this._rightPanY0,
                rightPanTrunks, 
                rightPanWeight,
                this._totalWeight
        );
        
        // for arrow
        this._Mover.arrowMove(
                this._arrow, 
                leftPanWeight, 
                rightPanWeight, 
                this._totalWeight);
    }
};

export default ScalepanMotion;
