'use strict';

/**
 * View
 *
 * Класс отвечает за 
 * отображение модели в браузере
 *
 * @author idbolshakov@gmail.com
 * @version 1.0.0
 */
class View {

    /**
     * конструктор
     *
     * @public
     * @param state {State}   - объект хранящий состояние модели
     * @param window {Window} - javascript global  object
     */
    constructor(state, window) {

        this.CANVAS_ID = 'scales';

        this._container  = null;
        this._imagesMap  = {}; 

        this._state  = state;
        this._window = window;
    }

    /**
     * init
     *
     * инициализация объекта представления.
     * 1) Находим canvas контейнер в DOM'e
     * 2) кастомизируем canvas контейнер
     * 3) Загружаем все изображения url которых есть в state объекте
     *
     * @public
     */
    init() {

        this._findCanvasContainer();
        this._configureCanvasContainer();
        this._loadImagesFromState();
    }

    /** @private */
    _findCanvasContainer() {

        let id = this.CANVAS_ID;
        this._container = this._window.document.getElementById(id);
    }

    /** @private */
    _configureCanvasContainer() {

        this._container.width  = this._state.getCanvas().getSize().width;
        this._container.height = this._state.getCanvas().getSize().height;
        this._container.style  = "outline: solid 1px #000";
    }

    /** @private */
    _loadImagesFromState() {

        // canvas
        this._imagesMap['canvas']     = new this._window.Image();
        this._imagesMap['canvas'].src = this._state.getCanvas().getImage();

        // leftPanImage
        this._imagesMap['leftPan']     = new this._window.Image();
        this._imagesMap['leftPan'].src = this._state.getScales().getLeftPan().getImage();

        // rightPanImage
        this._imagesMap['rightPan']     = new this._window.Image();
        this._imagesMap['rightPan'].src = this._state.getScales().getRightPan().getImage();

        // screen
        this._imagesMap['screen']     = new this._window.Image();
        this._imagesMap['screen'].src = this._state.getScales().getScreen().getImage();

        // base
        this._imagesMap['base']       = new this._window.Image();
        this._imagesMap['base'].src   = this._state.getScales().getBase().getImage();

        for (let i=0, l=this._state.getTrunksList().length; i<l; i++) {

            let key = this._state.getTrunksList()[i].getImage();

            this._imagesMap[key]     = new this._window.Image();
            this._imagesMap[key].src = this._state.getTrunksList()[i].getImage();
        };
    }

    /**
     * getCanvas
     * 
     * @return DOM элемент с canvas'ом
     */
    getCanvas() {

        return this._container;
    }

    /**
     * draw
     *
     * Если все изображения объектов 
     * загружены, то
     * отрисовываем текущее состояние 
     * в canvas'e
     *
     * @public
     * @return true - если все изображения загружены, false - иначе
     */
    draw() {

        if (this._imagesLoaded()) {

            let state = this._state;
            let size  = null;

            // clear canvas
            let context = this._container.getContext('2d');
            size        = state.getCanvas().getSize();
            context.clearRect(0, 0, size.width, size.height);

            // print background
            context.drawImage(
                
                this._imagesMap['canvas'],
                0,
                0,
                state.getCanvas().getSize().width,
                state.getCanvas().getSize().height
            );

            // print scales screen
            let screen = this._state.getScales().getScreen();
            context.drawImage(

                this._imagesMap['screen'],
                screen.getMeasurement().getPosition().x,
                screen.getMeasurement().getPosition().y,
                screen.getMeasurement().getSize().width,
                screen.getMeasurement().getSize().height
            );

            // print left scalepan
            let left = this._state.getScales().getLeftPan();
            context.drawImage(

                this._imagesMap['leftPan'],
                left.getMeasurement().getPosition().x,
                left.getMeasurement().getPosition().y,
                left.getMeasurement().getSize().width,
                left.getMeasurement().getSize().height
            );

            // print right scalepan
            let right = this._state.getScales().getRightPan();
            context.drawImage(

                this._imagesMap['rightPan'],
                right.getMeasurement().getPosition().x,
                right.getMeasurement().getPosition().y,
                right.getMeasurement().getSize().width,
                right.getMeasurement().getSize().height
            );

            // print scales base
            let base = this._state.getScales().getBase();
            context.drawImage(

                this._imagesMap['base'],
                base.getMeasurement().getPosition().x,
                base.getMeasurement().getPosition().y,
                base.getMeasurement().getSize().width,
                base.getMeasurement().getSize().height
            );

            // print trunks
            let trunks = this._state.getTrunksList();
            for (let i=0, l=trunks.length; i<l; i++) {

                let key = trunks[i].getImage();

                context.drawImage(

                    this._imagesMap[key],
                    trunks[i].getMeasurement().getPosition().x,
                    trunks[i].getMeasurement().getPosition().y,
                    trunks[i].getMeasurement().getSize().width,
                    trunks[i].getMeasurement().getSize().height
                );
            };

            return true;
        }

        return false;
    }

    /** @private */
    _imagesLoaded() {

        for (let key in this._imagesMap) {

            if (this._imagesMap[key].complete === false) {

                return false;
            }
        }

        return true;
    }
}

export default View;
