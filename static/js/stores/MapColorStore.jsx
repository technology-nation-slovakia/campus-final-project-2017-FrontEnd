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
            };
    }

    getAll() {
        return this.mapColors;
    }

    handleActions(action) {
        switch(action.type) {
            case "RELOAD_MAP_COLOR": {
                this.mapColors = action.data.data;
                this.emit("change");
                break;
            }
        }
    }
}

const mapColorStore = new MapColorStore;
dispatcher.register(mapColorStore.handleActions.bind(mapColorStore));
export default mapColorStore;