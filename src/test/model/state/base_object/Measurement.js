import assert from 'assert';

import Measurement from '../../../../main/model/state/base_object/Measurement.es6.js';


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

       it('Should contain init method', () => {

           assert.equal('function', typeof measurement.init);
       });


       it('Should contain getPosition method', () => {

           assert.equal('function', typeof measurement.getPosition);
       });

       it('Should contain getSize method', () => {

           assert.equal('function', typeof measurement.getSize);
       });

       it('Should contain setX method', () => {

           assert.equal('function', typeof measurement.setX);
       });

       it('Should contain setY method', () => {

           assert.equal('function', typeof measurement.setY);
       });

       it('Should contain setWidth method', () => {

           assert.equal('function', typeof measurement.setWidth);
       });

       it('Should contain setHeight method', () => {

           assert.equal('function', typeof measurement.setHeight);
       });

   });

   //
   // init method
   //
   describe('init method', () => {

       let measurement = new Measurement();

       measurement.init(1, 2, 3, 4, 5);

       it('Should set x, coordinate by first argument', () => {

           assert.equal(1, measurement.getPosition().x); 
       });

       it('Should set y, coordinate by second argument', () => {

           assert.equal(2, measurement.getPosition().y); 
       });

       it('Should set width by third argument', () => {

           assert.equal(3, measurement.getSize().width);
       });

       it('Should set width by fourth argument', () => {

           assert.equal(4, measurement.getSize().height);
       });

       it('Should set offset by fifth argument', () => {

           let offset = measurement.getContactLinePos() - measurement.getPosition().y;
           assert.equal(5,  offset);
       });


       it('Should set x=0 if first argument not contain {int}', () => {

           measurement.init('f', 2, 3, 4);

           assert.equal(0, measurement.getPosition().x);
       });

       it('Should set y=0 if second argument not contain {int}', () => {

           measurement.init(1, 'f', 3, 4);

           assert.equal(0, measurement.getPosition().y);
       });


       it('Should set width=0 if third argument not contain {int}', () => {

           measurement.init(1, 2, 'f', 4);

           assert.equal(0, measurement.getSize().width);
       });

       it('Should set height=0 if fourth argument not contain {int}', () => {

           measurement.init(1, 2, 3, 'f');

           assert.equal(0, measurement.getSize().height);
       });


   });

   //
   // getPosition method
   //
   describe('getPosition method', () => {

       let measurement = new Measurement();

       measurement.init(4, 3, 2, 1);

       it('Should return an object', () => {

           assert.equal('object', typeof measurement.getPosition()); 
       });

       it('Should contain property \'x\' {number}', () => {

           assert.equal('number', typeof measurement.getPosition().x); 
       });

       it('Should contain property \'y\' {number}', () => {

           assert.equal('number', typeof measurement.getPosition().y); 
       });

       it('Should return x coordinate', () => {

           assert.equal(4, measurement.getPosition().x);
       });

       it('Should return y coordinate', () => {

           assert.equal(3, measurement.getPosition().y);
       });
   });

   //
   // getSize method
   //
   describe('getSize method', () => {

       let measurement = new Measurement();

       measurement.init(4, 3, 2, 1);

       it('Should return an object', () => {

           assert.equal('object', typeof measurement.getSize()); 
       });

       it('Should contain property \'width\' {number}', () => {

           assert.equal('number', typeof measurement.getSize().width); 
       });

       it('Should contain property \'height\' {number}', () => {

           assert.equal('number', typeof measurement.getSize().height); 
       });

       it('Should return object width', () => {

           assert.equal(2, measurement.getSize().width);
       });

       it('Should return object height', () => {

           assert.equal(1, measurement.getSize().height);
       });
   });


   //
   // setX method
   //
   describe('setX method', () => {

       let measurement = new Measurement();

       it('Should set x coordinate to object', () => {

           measurement.setX(5);

           assert.equal(5, measurement.getPosition().x);
       });

       it('Should set x=0 if first argument not contain {int}', () => {

           measurement.setX('f');

           assert.equal(0, measurement.getPosition().x);
       });

   });

   //
   // setY method
   //
   describe('setY method', () => {

       let measurement = new Measurement();

       it('Should set y coordinate to object', () => {

           measurement.setY(5);

           assert.equal(5, measurement.getPosition().y);
       });

       it('Should set y=0 if first argument not contain {int}', () => {

           measurement.setY('f');

           assert.equal(0, measurement.getPosition().y);
       });

   });

   //
   // setWidth method
   //
   describe('setWidth method', () => {

       let measurement = new Measurement();

       it('Should set width to object', () => {

           measurement.setWidth(5);

           assert.equal(5, measurement.getSize().width);
       });

       it('Should set width=0 if first argument not contain {int}', () => {

           measurement.setWidth('f');

           assert.equal(0, measurement.getSize().width);
       });

   });

   //
   // setHeight method
   //
   describe('setHeight method', () => {

       let measurement = new Measurement();

       it('Should set height to object', () => {

           measurement.setHeight(5);

           assert.equal(5, measurement.getSize().height);
       });

       it('Should set height=0 if first argument not contain {int}', () => {

           measurement.setHeight('f');

           assert.equal(0, measurement.getSize().height);
       });

   });

});
