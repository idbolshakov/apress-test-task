import assert from 'assert';

import Arrow       from '../../../../main/model/state/scales/Arrow.es6.js';
import BaseObject  from '../../../../main/model/state/base_object/BaseObject.es6.js';
import Measurement from '../../../../main/model/state/base_object/Measurement.es6.js';


//
// Screen class
//
describe('Arrow class', () => {
  
   //
   // constructor
   //
   describe('constructor', () => {
     
      it('Should create a new instance of Screen class', () => {

          let arrow = new Arrow();

          assert.equal(true, arrow instanceof Arrow);
      });
 
      it('Should extends from BaseObject class', () => {

          let arrow = new Arrow();

          assert.equal(true, arrow instanceof BaseObject);
      });

      it('Should take a {Measurement} object by first argument', () => {

          let measurement = new Measurement();
          let arrow       = new Arrow(measurement);

          assert.strictEqual(measurement, arrow.getMeasurement());
      });
   });

   describe('public constants', () => {

       let arrow = new Arrow();

       it('Should contain MAX_ANGLE constant', () => {

           assert.strictEqual(true, typeof arrow.MAX_ANGLE === 'number');
       });
   });

   describe('public methods', () => {

       let arrow = new Arrow();

       it('Should contain setAngle method', () => {

           assert.strictEqual('function', typeof arrow.setAngle);
       });

       it('Should contain getAngle method', () => {

           assert.strictEqual('function', typeof arrow.getAngle);
       });

   });

   describe('setAngle method', () => {

       it('Should  set arrow._angle value', () => {

           let arrow = new Arrow;

           let hash = Date.now();

           arrow.setAngle(hash);

           assert.strictEqual(hash, arrow._angle);
       });
   });

   describe('getAngle method', () => {

       it('Should return arrow._angle value', () => {

           let arrow = new Arrow;

           let hash = Date.now();
           arrow._angle = hash;

           assert.strictEqual(hash, arrow.getAngle());
       });
   });
});
