/**
 * ScalepanTrunksDetector
 *
 * отвечает за нахождение 
 * всех чемоданов, лежащих
 * на чаше весов,
 *
 * содержит статические методы
 * для обработки информации
 * о нахождении чемоданов на чаше весов
 *
 * @author idbolshakov@gmail.com
 * @version 1.0.0
 */
class ScalepanTrunksDetector {

    /**
     * get
     *
     * пробегаемся по всем чемоданам,
     * если какой-то лежит на нужной чаше,
     * то добавляем его к возвращаемому массиву
     *
     * @public
     * @param scalepan {Scalepan}   - чаша весов, чьи чемоданы будем искать
     * @param trunks {Array of Trunk} - все чемоданы модели
     * @return {int} общий вес чемоданов, которые лежат на чаше
     */
    static get(scalepan, trunks) {

        let list = [];

        for (let i=0, l=trunks.length; i<l; i++) {

            if (!this._isTrunkRestOnScalepan(scalepan, trunks[i])) {
                // значит не лежит на чаше
                continue;
            };

            list.push(trunks[i]);
        };

        return list;
    }

    /** @private */
    static _isTrunkRestOnScalepan(scalepan, trunk) {

        let tm  = trunk.getMeasurement();
        let tX1 = tm.getPosition().x;
        let tX2 = tm.getSize().width + tX1;
        let tY  = tm.getPosition().y + tm.getSize().height;

        let sm  = scalepan.getMeasurement();
        let sX1 = sm.getPosition().x;
        let sX2 = sm.getSize().width + sX1;
        let sY  = sm.getContactLinePos();

        return tY == sY && 
               ( (tX1 >= sX1 && tX1 <= sX2) || (tX2 <= sX2 && tX2 >= sX1));
    }

    /**
     * calcWeight
     *
     * @public
     * @param trunks {Array of Trunks} - массив с чемоданами
     * @return сумма весов всех чемоданов в массиве
     */
    static calcWeight(trunks) {

        let weight = 0;

        for (let i=0, l=trunks.length; i<l; i++) {

            weight += trunks[i].getWeight();
        };

        return weight;
    }
};

export default ScalepanTrunksDetector;
