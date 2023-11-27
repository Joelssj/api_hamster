"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSensorUseCase = void 0;
class CreateSensorUseCase {
    constructor(sensorRepository) {
        this.sensorRepository = sensorRepository;
    }
    run(temperatura, humedad, luz, comida) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Aquí iría la lógica de tu caso de uso sin referencias a la base de datos
                // ...
                // Ejemplo de creación de un objeto Sensor (puedes adaptarlo según tus necesidades)
                const sensor = {
                    id: 1,
                    temperatura,
                    humedad,
                    luz,
                    comida,
                    // Otros atributos si los tienes
                };
                return sensor;
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.CreateSensorUseCase = CreateSensorUseCase;
