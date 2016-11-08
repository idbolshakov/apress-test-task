import assert from 'assert';

import Scales   from '../../../../main/model/state/scales/Scales.es6.js';
import Scalepan from '../../../../main/model/state/scales/Scalepan.es6.js';
import Screen   from '../../../../main/model/state/scales/Screen.es6.js';
import Base     from '../../../../main/model/state/scales/Base.es6.js';


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

      it('Should take leftPan {ScalePan} object in frist argument', () => {

          let pan = new Scalepan({});

          let scales = new Scales(pan, null, null, null);

          assert.strictEqual(pan, scales.getLeftPan());
      });

      it('Should take rightPan {ScalePan} object in second argument', () => {

          let pan = new Scalepan({});

          let scales = new Scales(null, pan,  null, null);

          assert.strictEqual(pan, scales.getRightPan());
      });

      it('Should take screen {Screen} object in third argument', () => {

          let screen = new Screen({});

          let scales = new Scales(null, null,  screen, null);

          assert.strictEqual(screen, scales.getScreen());
      });

      it('Should take base {Base} object in fourth argument', () => {

          let base = new Base({});

          let scales = new Scales(null, null,  null, base);

          assert.strictEqual(base, scales.getBase());
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

       it('Should contain getScreen method', () => {

           assert.equal('function', typeof scales.getScreen);
       });

       it('Should contain getBase method', () => {

           assert.equal('function', typeof scales.getBase);
       });
   });

   //
   // getLeftPan method
   //
   describe('getLeftPan method', () => {

      it('Should return left pan object {Scalepan}', () => {

          let pan = new Scalepan({});

          let scales = new Scales(pan, null, null, null);

          assert.strictEqual(pan, scales.getLeftPan());
      });
   });

   //
   // getRightPan method
   //
   describe('getRightPan method', () => {

      it('Should return right pan object {Scalepan}', () => {

          let pan = new Scalepan({});

          let scales = new Scales(null, pan, null, null);

          assert.strictEqual(pan, scales.getRightPan());
      });
   });

   //
   // getScreen method
   //
   describe('getScreen method', () => {

       it('Should return screen object {Screen}', () => {

           let screen = new Screen({});

           let scales = new Scales(null, null, screen, null);

           assert.strictEqual(screen, scales.getScreen());
       });
   });

   //
   // getBase method
   //
   describe('getBase method', () => {

       it('Should return base object {Base}', () => {

           let base = new Base({});

           let scales = new Scales(null, null, null, base);

           assert.strictEqual(base, scales.getBase());
       });
   });

});
