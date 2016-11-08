import assert from 'assert';

import State  from '../../../main/model/state/State.es6.js';
import Canvas from '../../../main/model/state/Canvas.es6.js';
import Trunk  from '../../../main/model/state/Trunk.es6.js';
import Scales from '../../../main/model/state/scales/Scales.es6.js';


//
// State class
//
describe('State class', () => {
      
   //
   // constructor
   //
   describe('constructor', () => {

      it('Should create a new instance of State class', () => { 

          let state = new State();

          assert.equal(true, state instanceof State);
      });

      it('Should take {Canvas} object in first argument', () => {

          let canvas = new Canvas();
          let state  = new State(canvas, null, null);

          assert.strictEqual(canvas, state.getCanvas());
      });
   });

   //
   // public methods
   //
   describe('public methods', () => {

       let state = new State();

       it('Should contain getCanvas method', () => {

           assert.equal('function', typeof state.getCanvas);
       });

       it('Should contain getTrunksList method', () => {

           assert.equal('function', typeof state.getTrunksList);
       });

       it('Should contain getScales method', () => {

           assert.equal('function', typeof state.getScales);
       });
   });

   //
   // getCanvas method
   //
   describe('getCanvas method', () => {

       it('Should return {Canvas} object', () => {

           let canvas = new Canvas();
           let state  = new State(canvas, null, null);

           assert.strictEqual(canvas, state.getCanvas());
       });
   });

   //
   // getTrunksList method
   //
   describe('getTrunksList method', () => {

       it('Should return trunksList', () => {

           let trunksList = [new Trunk(), new Trunk, new Trunk()];
           let state  = new State(null, trunksList, null);

           assert.strictEqual(trunksList, state.getTrunksList());
       });

   });

   //
   // getScales method
   //
   describe('getScales method', () => {

       it('Should return {Scales} object', () => {

           let scales = new Scales();
           let state  = new State(null, null, scales);

           assert.strictEqual(scales, state.getScales());
       });

   });
});
