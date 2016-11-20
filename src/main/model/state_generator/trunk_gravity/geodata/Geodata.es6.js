'use strict';

/**
 * Geodata
 *
 * класс отвечает за 
 * хранение информации 
 * о объектах, на которые
 * может упасть чемодан
 * (земля, чаши весов)
 *
 * @author idbolshakov@Gmail.com
 * @version 1.0.0
 */
class Geodata {

    /**
     * конструктор
     *
     * @public
     * @param objects {Array} - массив с объектами, на которые может
     * приземлиться чемодан.
     * Формат объекта массива: {Measurement}
     * 
     * думаем, что в конце обязательно будет объект на всю ширину холста
     * (т.е. мы обязательно куда-нибудь должны упасть)
     */
    constructor(objects) {

    }

    /**
     * init
     * 
     * @public
     * @param objects {Array} - массив с объектами, на которые может
     * приземлиться чемодан.
     * Формат объекта массива: {Measurement}
     * думаем, что в конце обязательно будет объект на всю ширину холста
     * (т.е. мы обязательно куда-нибудь должны упасть)

     */
    init(objects) {

        this._objects = objects;
    }

    /**
     * tryToFall
     *
     * роняем чемодан с переданной скоростью и
     * проверяем упал ли он на какую то
     * поверхность, описанную в массиве
     * this._objects
     *
     * @public
     * @param trunk {Trunk} - чемодан, который падает 
     * @param speed {int}   - скорость падения чемодана
     * @return true - если упали на поверхность объекта, false - иначе
     */
    tryToFall(trunk, speed) {

        for (let i=0, l=this._objects.length; i<l; i++) {

            let obj = this._objects[i];

            // ищем объект, на который падаем
            // мы точно знаем, что в конце будет такой объект 
            // (граница самого холста)
            if ( !this._isTrunkOnObjectArea(trunk, obj) ) {

                continue;
            };

            let trunkY1 = trunk.getMeasurement().getPosition().y; 
            let trunkY2 = trunkY1 + trunk.getMeasurement().getSize().height; 

            let objY = obj.getContactLinePos(); 

            if ( (trunkY2 + speed) < objY ) {

                trunk.getMeasurement().setY(trunkY1+speed);
                return false;

            } else {

                let height = trunk.getMeasurement().getSize().height;
                trunk.getMeasurement().setY(objY - height);
                return true;
            };
        };
    }

    /** @private */
    _isTrunkOnObjectArea(trunk, object) {

        let trunkX1  = trunk.getMeasurement().getPosition().x;
        let trunkX2  = trunk.getMeasurement().getSize().width + trunkX1;
        let trunkY   = trunk.getMeasurement().getPosition().y + 
                       trunk.getMeasurement().getSize().height;

        let objectX1 = object.getPosition().x;
        let objectX2 = object.getSize().width + objectX1;
        let objectY  = object.getContactLinePos();

        return trunkY <= objectY &&
                 ((trunkX1 >= objectX1 && trunkX1 <= objectX2) || 
                 (trunkX2 <= objectX2 && trunkX2 >= objectX1));
    }
};

export default Geodata;
