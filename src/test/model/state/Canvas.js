import assert from 'assert';

import Canvas from '../../../main/model/state/Canvas.es6.js';


//
// Canvas class
//
describe('Canvas class', () => {
      
   //
   // constructor
   //
   describe('constructor', () => {

      it('Should create a new instance of Canvas class', () => { 

          let canvas = new Canvas();

          assert.equal(true, canvas instanceof Canvas);
      });
   });

   //
   // public methods
   //
   describe('public methods', () => {

       let canvas = new Canvas();

       it('Should contain init method', () => {

           assert.equal('function', typeof canvas.init);
       });

       it('Should contain getSize method', () => {

           assert.equal('function', typeof canvas.getSize);
       });

       it('Should contain getImage method', () => {

           assert.equal('function', typeof canvas.getImage);
       });
   });


   //
   // getSize method
   //
   describe('getSize method', () => {

       let canvas = new Canvas();

       let data = {
           width: 50,
           heigth: 100,
           image: 'image/url.svg'
       };

       canvas.init(data);

       it('Should return an object', () => {

           assert.equal('object', typeof canvas.getSize());
       });

       it('Should return canvas width', () => {

           assert.strictEqual(data.width, canvas.getSize().width);
       });

       it('Should return canvas height', () => {

           assert.strictEqual(data.height, canvas.getSize().height);
       });

       it('Should return canvas background image url', () => {

           assert.strictEqual(data.image, canvas.getImage());
       });

   });
});
