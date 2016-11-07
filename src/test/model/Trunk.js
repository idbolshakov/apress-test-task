import assert from 'assert';

import Trunk from '../../main/model/Trunk.es6.js';


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

   });
   
   // 
   // public methods
   //
   describe('public methods', () => {

       let trunk = new Trunk();

       it('Should contain getWeight method', () => {

           assert.equal('function', typeof trunk.getWeight);
       });
   });
});
