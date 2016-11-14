'use strict';

/**
 * Controller
 *
 * класс отвечает за 
 * обработку пользовательских
 * действий
 *
 * @author idbolshakov@gmail.com
 * @version 1.0.0
 */
class Controller {

    /**
     * конструктор
     *
     * @param model {Model}   - модель приложения
     * @param view  {View}    - представление приложения
     */
    constructor(model, view) {

        this._model  = model;
        this._view   = view;
    }

    /**
     * init
     *
     * инициализация контроллера.
     *
     * инициализируем представление
     *
     * регистрируем обработчики
     * на DOM события браузера
     */
    init() {

        this._view.init();

        let canvas = this._view.getCanvas();

        canvas.addEventListener('mousedown', (e) => {

            this.onMouseDown(e.clientX, e.clientY);
        });

        canvas.addEventListener('mouseup', () => {

            this.onMouseUp();
        });

        canvas.addEventListener('mousemove', (e) => {

            this.onMouseMove(e.clientX, e.clientY);
        });
    }

    /**
     * onMouseDown
     *
     * метод вызывается
     * когда пользователь
     * нажал на левую кнопку 
     * мыши 
     *
     * @param x {int} - позиция курсора по оси х
     * @param y {int} - позиция курсора по оси y
     */
    onMouseDown(x, y) {

        this._model.getTrunkDragger().tryToGrab(x, y);
    }

    /**
     * onMouseUp
     * 
     * метод вызывается
     * когда пользователь
     * отпустил левую
     * кнопку мыши
     */
    onMouseUp() {

        this._model.getTrunkDragger().tryToLet();
    }

    /**
     * onMouseMove
     *
     * метод вызывается
     * когда пользователь
     * перемещает мышь
     *
     * @param x {int} - позиция курсора по оси х
     * @param y {int} - позиция курсора по оси y
     */
    onMouseMove(x, y) {

        this._model.getTrunkDragger().tryToDrag(x, y);
    }
}

export default Controller;
