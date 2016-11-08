import assert from 'assert';

import Base from '../../../../main/model/state/scales/Base.es6.js';
import BaseObject from '../../../../main/model/state/base_object/BaseObject.es6.js';
import Measurement from '../../../../main/model/state/base_object/Measurement.es6.js';


//
// Base class
//
describe('Base class', () => {
  
   //
   // constructor
   //
   describe('constructor', () => {
     
      it('Should create a new instance of Base class', () => {

          let base = new Base();

          assert.equal(true, base instanceof Base);
      });

      it('Should extends from BaseObject class', () => {

          let base = new Base(new Measurement());

          assert.equal(true, base instanceof BaseObject);
      });

      it('Should take a {Measurement} object by first argument', () => {

          let measurement = new Measurement();
          let base        = new Base(measurement);

          assert.strictEqual(measurement, base.getMeasurement());
      });
   });
});
