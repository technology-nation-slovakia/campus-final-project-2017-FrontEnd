import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

class MapColorStore extends EventEmitter {
    constructor() {
        super()
        this.mapColors = {
                id: 1,
                text: 'initial',
                complete: false,
                colorCaffe: '#99cc33',
                colorGreen: '#99cc33',
                colorBrown: '#99cc33',
                colorTerrace: '#99cc33',
                nameCaffeNow: null,
                nameCaffeThen: null,
                nameTerraceNow: null,
                nameTerraceThen: null,
                nameBrownNow: null,
                nameBrownThen: null,
                nameGreenNow: null,
                nameGreenThen: null,
            };
    }

    getAll() {
        return this.mapColors;
    }

    handleActions(action) {
        switch(action.type) {
            case "RELOAD_MAP_COLOR1": {
                    this.mapColors.colorCaffe = action.data1.data[0].colorCaffe;
                    this.mapColors.nameCaffeNow = action.data1.data[0].name;
                    this.mapColors.nameCaffeThen = action.data1.data[1].name;
                this.emit("change");
                break;
            }
            case "RELOAD_MAP_COLOR2": {
                    this.mapColors.colorTerrace = action.data2.data.colorTerrace;
                this.emit("change");
                break;
            }
            case "RELOAD_MAP_COLOR3": {
                    this.mapColors.colorGreen = action.data3.data.colorGreen;
                this.emit("change");
                break;
            }
            case "RELOAD_MAP_COLOR4": {
                    this.mapColors.colorBrown = action.data4.data.colorBrown;
                this.emit("change");
                break;
            }
        }
    }
}

const mapColorStore = new MapColorStore;
dispatcher.register(mapColorStore.handleActions.bind(mapColorStore));
export default mapColorStore;