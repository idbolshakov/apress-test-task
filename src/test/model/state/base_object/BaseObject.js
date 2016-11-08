import assert from 'assert';

import BaseObject from '../../../../main/model/state/base_object/BaseObject.es6.js';
import Measurement from '../../../../main/model/state/base_object/Measurement.es6.js';


//
// BaseObject class
//
describe('BaseObject class', () => {
  
   //
   // constructor
   //
   describe('constructor', () => {
     
      it('Should create a new instance of BaseObject class', () => {

          let baseObject = new BaseObject();

          assert.equal(true, baseObject instanceof BaseObject);
      });

      it('Should take a {Measurement object by first argument', () => {

          let measurement = new Measurement();
          let baseObject  = new BaseObject(measurement);

          assert.strictEqual(measurement, baseObject.getMeasurement());
      });
   });
 
   // 
   // public methods
   //
   describe('public methods', () => {

       let baseObject = new BaseObject();

       it('Should contain init method', () => {

           assert.equal('function', typeof baseObject.init);
       });

       it('Should contain getMeasurement method', () => {

           assert.equal('function', typeof baseObject.getMeasurement);
       });

       it('Should contain getImage method', () => {

           assert.equal('function', typeof baseObject.getImage);
       });
   });


   //
   // init method
   //
   describe('init method', () => {

       let baseObject = new BaseObject(new Measurement());

       let data = {

           x: 1,
           y: 2,
           width: 3,
           height: 4,

           image: 'image/url.svg'
       };

       baseObject.init(data);

       it('Should set x coordinate', () => {

           assert.equal(data.x, baseObject.getMeasurement().getPosition().x);
       });

       it('Should set y coordinate', () => {

           assert.equal(data.y, baseObject.getMeasurement().getPosition().y);
       });

       it('Should set object width', () => {

           assert.equal(data.width, baseObject.getMeasurement().getSize().width);
       });

       it('Should set object height', () => {

           assert.equal(data.height, baseObject.getMeasurement().getSize().height);
       });

       it('Should set object image url', () => {

           assert.equal(data.image, baseObject.getImage());
       });
   });


   //
   // getMeasurement method
   //
   describe('getMeasurement method', () => {

       let baseObject = new BaseObject(new Measurement());

       it('Should return {Measurement} obj', () => {

           assert.equal(true, baseObject.getMeasurement() instanceof Measurement);
       });
   });

   
   //
   // getImage method
   //
   describe('getImage method', () => {

       let baseObject = new BaseObject(new Measurement());

       baseObject.init({image: 'image/url.svg'});

       it('Should return image url', () => {

           assert.equal('image/url.svg', baseObject.getImage());
       });
   });
});
