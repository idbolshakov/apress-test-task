import assert from 'assert';

import Screen from '../../../../main/model/state/scales/Screen.es6.js';
import BaseObject  from '../../../../main/model/state/base_object/BaseObject.es6.js';
import Measurement from '../../../../main/model/state/base_object/Measurement.es6.js';


//
// Screen class
//
describe('Screen class', () => {
  
   //
   // constructor
   //
   describe('constructor', () => {
     
      it('Should create a new instance of Screen class', () => {

          let screen = new Screen();

          assert.equal(true, screen instanceof Screen);
      });
 
      it('Should extends from BaseObject class', () => {

          let screen = new Screen();

          assert.equal(true, screen instanceof BaseObject);
      });

      it('Should take a {Measurement} object by first argument', () => {

          let measurement = new Measurement();
          let screen      = new Screen(measurement);

          assert.strictEqual(measurement, screen.getMeasurement());
      });
   });
});
