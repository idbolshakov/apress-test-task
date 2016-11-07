import assert from 'assert';

import Measurement from '../../main/model/Measurement.es6.js';


//
// Measurement class
//
describe('Measurement class', () => {
      
   //
   // constructor
   //
   describe('constructor', () => {

      it('Should create a new instance of Measurement class', () => { 
          let measurement = new Measurement;

          assert.equal(true, measurement instanceof Measurement);
      });
   });

   // 
   // public methods
   //
   describe('public methods', () => {

       let measurement = new Measurement;

       it('Should contain getPosition method', () => {

           assert.equal('function', typeof measurement.getPosition);
       });

       it('Should contain getSize method', () => {

           assert.equal('function', typeof measurement.getSize);
       });
   });
});
