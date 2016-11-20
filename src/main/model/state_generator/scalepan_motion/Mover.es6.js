/**
 * Mover
 *
 * содержит методы
 * для перемещение 
 * чаш весов и стрелки весов
 *
 * @author idbolshakov@gmail.com
 * @version 1.0.0
 */
class Mover {

    /**
     * scalepanMove
     *
     * перемещает чашу весов и все чемоданы на ней
     * в следующее состояние
     *
     * @public
     * @param scalepan {Scalepan}     - чаша весов, которую будем двигать
     * @param scalepanY0 {int}        - Y позиция чаши без чемоданов
     * @param trunks {Array of Trunk} - чемоданы на этой чаше
     * @param panWeight {int}         - общий вес чемоданов на чаше
     * @param totalWeight {int}       - общий вес всех чемоданов
     */
    static scalepanMove(scalepan, scalepanY0, trunks, panWeight, totalWeight) {
        
        let motion = scalepan.getVerticalMotionValue();
        let offset = panWeight * motion / totalWeight;

        let currentPosition    = scalepan.getMeasurement().getPosition().y;
        let calculatedPosition = Math.round(scalepanY0 + offset);

        if ( currentPosition < calculatedPosition ) {

            scalepan.getMeasurement().setY(currentPosition + 1);
            this._increaseYForAllTrunks(trunks);

        } else if ( currentPosition > calculatedPosition ) {
            
            scalepan.getMeasurement().setY(currentPosition - 1);
            this._decreaseYForAllTrunks(trunks);
        };
    }

    /** @private */
    static _increaseYForAllTrunks(trunks) {

        for (let i=0, l=trunks.length; i<l; i++) {

            let trunk = trunks[i];
            let y     = trunk.getMeasurement().getPosition().y;
            
            trunk.getMeasurement().setY(y+1);
        };
    }

    /** @private */
    static _decreaseYForAllTrunks(trunks) {

        for (let i=0, l=trunks.length; i<l; i++) {

            let trunk = trunks[i];
            let y     = trunk.getMeasurement().getPosition().y;
            
            trunk.getMeasurement().setY(y-1);
        };
    }

    /**
     * arrowMove
     *
     * перемещает стрелку весов
     * в следующее состояние
     *
     * @public
     * @param arrow {Arrow}     - объект с состоянием стрелки весов
     * @param leftWeight  {int} - вес чемоданов на левой чаше
     * @param rightWeight {int} - вес чемоданов на правой чаше
     * @param totalWeight {int} - общий вес всех чемоданов
     */
    static arrowMove(arrow, leftWeight, rightWeight, totalWeight) {

        let currentAngle    = arrow.getAngle();
        let calculatedAngle = this._calculateAngle(
                leftWeight, 
                rightWeight, 
                arrow.MAX_ANGLE, 
                totalWeight
        );

        if (currentAngle < calculatedAngle) {

            this._increaseAngle(arrow, currentAngle, calculatedAngle);

        } else if (currentAngle > calculatedAngle) {

            this._decreaseAngle(arrow, currentAngle, calculatedAngle);
        };
    }

    /** @private **/
    static _calculateAngle(leftWeight, rightWeight, maxAngle, totalWeight) {

        let angle = null;

        let weight = Math.abs(leftWeight - rightWeight);

        if (leftWeight > rightWeight) {

            angle = - weight * maxAngle / totalWeight;

        } else if (rightWeight > leftWeight) {

            angle = + weight * maxAngle / totalWeight;

        } else {

            angle = 0;
        };

        return angle;
    }

    static _increaseAngle(arrow, currentAngle, calculatedAngle) {

        if ( (currentAngle + 1) < calculatedAngle ) {

            arrow.setAngle(currentAngle + 1);

        } else {

            arrow.setAngle(calculatedAngle);
        };

    }

    static _decreaseAngle(arrow, currentAngle, calculatedAngle) {

        if ( (currentAngle - 1) > calculatedAngle ) {

            arrow.setAngle(currentAngle - 1);

        } else {

            arrow.setAngle(calculatedAngle);
        };
    }
};

export default Mover;
