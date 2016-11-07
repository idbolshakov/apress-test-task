import assert from 'assert';

import Scales from '../../main/model/Scales.es6.js';


//
// Scales class
//
describe('Scales class', () => {
 
   //
   // constructor
   //
   describe('constructor', () => {
        
      it('Should create a new instance of Scales class', () => {

          let scales = new Scales();

          assert.equal(true, scales instanceof Scales);
      });

   });

   // 
   // public methods
   //
   describe('public methods', () => {

       let scales = new Scales();

       it('Should contain getLeftPan method', () => {

           assert.equal('function', typeof scales.getLeftPan);
       });

       it('Should contain getRightPan method', () => {

           assert.equal('function', typeof scales.getRightPan);
       });
   });
});
