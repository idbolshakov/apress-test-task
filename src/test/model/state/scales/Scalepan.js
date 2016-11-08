import assert from 'assert';

import Scalepan from '../../../../main/model/state/scales/Scalepan.es6.js';
import BaseObject from '../../../../main/model/state/base_object/BaseObject.es6.js';
import Measurement from '../../../../main/model/state/base_object/Measurement.es6.js';


//
// Scalepan class
//
describe('Scalepan class', () => {
  
   //
   // constructor
   //
   describe('constructor', () => {
     
      it('Should create a new instance of Scalepan class', () => {

          let scalepan = new Scalepan();

          assert.equal(true, scalepan instanceof Scalepan);
      });
  
      it('Should extends from BaseObject class', () => {

          let scalepan = new Scalepan();

          assert.equal(true, scalepan instanceof BaseObject);
      });

      it('Should take a {Measurement} object by first argument', () => {

          let measurement = new Measurement();
          let scalepan    = new Scalepan(measurement);

          assert.strictEqual(measurement, scalepan.getMeasurement());
      });
   });
});
