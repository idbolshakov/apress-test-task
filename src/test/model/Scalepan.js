import assert from 'assert';

import Scalepan from '../../main/model/Scalepan.es6.js';


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

   });
 
   // 
   // public methods
   //
   describe('public methods', () => {

       let scalepan = new Scalepan();

       it('Should contain getWeight method', () => {

           assert.equal('function', typeof scalepan.getWeight);
       });
   });
});
