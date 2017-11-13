import { EventEmitter } from 'events';

class MapColorStore extends EventEmitter {
    constructor() {
        super()
        this.mapColors =
            {
                id: 1,
                text: 'jedna',
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
}

const mapColorStore = new MapColorStore;

export default mapColorStore;