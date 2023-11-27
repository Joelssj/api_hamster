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
exports.MysqlSensorRepository = void 0;
// Eliminé las importaciones y las referencias relacionadas a la base de datos
class MysqlSensorRepository {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            // Modifiqué la implementación del método getAll para que devuelva un array vacío
            // ya que no hay conexión a la base de datos
            return [];
        });
    }
    getById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            // Modifiqué la implementación del método getById para que devuelva null
            // ya que no hay conexión a la base de datos
            return null;
        });
    }
    createSensor(temperatura, humedad, luz, comida) {
        return __awaiter(this, void 0, void 0, function* () {
            // Modifiqué la implementación del método createSensor para que devuelva null
            // ya que no hay conexión a la base de datos
            return null;
        });
    }
}
exports.MysqlSensorRepository = MysqlSensorRepository;
