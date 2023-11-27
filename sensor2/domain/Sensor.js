"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sensor = void 0;
class Sensor {
    constructor(id, temperatura, humedad, luz, comida) {
        this.id = id;
        this.temperatura = temperatura;
        this.humedad = humedad;
        this.luz = luz;
        this.comida = comida;
    }
}
exports.Sensor = Sensor;
