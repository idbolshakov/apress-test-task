import assert from 'assert';

import Trunk from '../../../main/model/state/Trunk.es6.js';
import BaseObject from '../../../main/model/state/base_object/BaseObject.es6.js';
import Measurement from '../../../main/model/state/base_object/Measurement.es6.js';


//
// Trunk class
//
describe('Trunk class', () => {

   //
   // constructor
   //
   describe('constructor', () => {
    
      it('Should create a new instance of Trunk class', () => {

          let trunk = new Trunk();

          assert.equal(true, trunk instanceof Trunk);
      });
    
      it('Should be extends from BaseObject class', () => {

          let trunk = new Trunk();

          assert.equal(true, trunk instanceof BaseObject);
      });

 
      it('Should take a {Measurement} object by first argument', () => {

          let measurement = new Measurement();
          let trunk = new Trunk(measurement);

          assert.strictEqual(measurement, trunk.getMeasurement());
      });
   });

   //
   // Constants
   //
   describe('constants', () => {

       let trunk = new Trunk({});

       it('Should contain ACTION_REST constant', () => {

           assert.equal(true, typeof trunk.ACTION_REST != 'undefined');
       });

       it('Should contain ACTION_GRAB constant', () => {

           assert.equal(true, typeof trunk.ACTION_GRAB != 'undefined');
       });
   });
   
   // 
   // public methods
   //
   describe('public methods', () => {

       let trunk = new Trunk();


       it('Should contain init method', () => {

           assert.equal('function', typeof trunk.init);
       });

       it('Should contain getWeight method', () => {

           assert.equal('function', typeof trunk.getWeight);
       });

       it('Should contain getAction method', () => {

           assert.equal('function', typeof trunk.getAction);
       });

       it('Should contain setAction method', () => {

           assert.equal('function', typeof trunk.setAction);
       });

   });

   //
   // init method
   //
   describe('init method', () => {

       let trunk = new Trunk(new Measurement());

       let data = {

           x: 1,
           y: 2,
           width: 3,
           height: 4,
           weight: 5,
           image: 'image/url.svg',
           action: trunk.ACTION_REST
       };

       trunk.init(data);

       it('Should set x coordinate', () => {

           assert.equal(data.x, trunk.getMeasurement().getPosition().x);
       });

       it('Should set y coordinate', () => {

           assert.equal(data.y, trunk.getMeasurement().getPosition().y);
       });

       it('Should set width', () => {

           assert.equal(data.width, trunk.getMeasurement().getSize().width);
       });

       it('Should set height', () => {

           assert.equal(data.height, trunk.getMeasurement().getSize().height);
       });


       it('Should set weight', () => {

           assert.equal(data.weight, trunk.getWeight());
       });

       it('Should set action', () => {

           assert.equal(data.action, trunk.getAction());
       });

   });
   
   //
   // getWeight method
   //
   describe('getWeight method', () => {

       let trunk = new Trunk(new Measurement());

       trunk.init({weight: 5});

       it('Should return trunk weight', () => {

           assert.equal(5, trunk.getWeight());
       });
   });
   
   //
   // getAction method
   //
   describe('getAction method', () => {

       let trunk = new Trunk(new Measurement());

       trunk.init({action: trunk.ACTION_REST});

       it('Should return action ID', () => {

           assert.equal(trunk.ACTION_REST, trunk.getAction());
       });
   });

   describe('setAction method', () => {

       let trunk = new Trunk(new Measurement());

       it('Should set this.action value', () => {

           trunk.setAction(trunk.ACTION_GRAB);

           assert.strictEqual(trunk.ACTION_GRAB, trunk.getAction());
       });
   });
});
