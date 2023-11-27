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
exports.CreateSensorController = void 0;
class CreateSensorController {
    constructor(createSensorUseCase) {
        this.createSensorUseCase = createSensorUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            console.log("mensaje " + JSON.stringify(data));
            try {
                // Modifica la llamada al caso de uso para reflejar los cambios en los atributos
                const sensor = yield this.createSensorUseCase.run(data.temperatura, data.humedad, data.luz, data.comida);
                if (sensor)
                    res.status(201).send({
                        status: "success",
                        data: {
                            id: sensor === null || sensor === void 0 ? void 0 : sensor.id,
                            temperatura: sensor === null || sensor === void 0 ? void 0 : sensor.temperatura,
                            humedad: sensor === null || sensor === void 0 ? void 0 : sensor.humedad,
                            luz: sensor === null || sensor === void 0 ? void 0 : sensor.luz,
                            comida: sensor === null || sensor === void 0 ? void 0 : sensor.comida,
                            // Otros atributos si los tienes
                        },
                    });
                else
                    res.status(204).send({
                        status: "error",
                        data: "NO fue posible agregar el registro",
                    });
            }
            catch (error) {
                res.status(204).send({
                    status: "error",
                    data: "Ocurrió un error",
                    msn: error,
                });
            }
        });
    }
}
exports.CreateSensorController = CreateSensorController;
/*import { Request, Response } from "express";

import { CreateSensorUseCase } from "../../application/CreateSensorUseCase";

export class CreateSensorController {
  constructor(readonly createSensorUseCase: CreateSensorUseCase) {}

  async run(req: Request, res: Response) {
    const data2 = req.body;
    console.log("mensaje " + JSON.stringify(data2));
    try {
      const sensor2 = await this.createSensorUseCase.run(
        data2.temperatura, // Modifica el nombre del atributo a temperatura
        data2.humedad, // Agrega la humedad
        data2.luz, // Agrega la luz
        data2.comida // Cambia a rellenado y ajusta el tipo a number
      );

      if (sensor2)
        // Code HTTP: 201 -> Creado
        res.status(201).send({
          status: "success",
          data2: {
            id: sensor2?.id,
            temperatura: sensor2?.temperatura,
            humedad: sensor2?.humedad, // Incluye la humedad
            luz: sensor2?.luz, // Incluye la luz
            comida: sensor2?.comida, // Cambia a rellenado
          },
        });
      else
        res.status(204).send({
          status: "error",
          data2: "NO fue posible agregar el registro",
        });
    } catch (error) {
      // Code HTTP: 204 Sin contenido
      res.status(204).send({
        status: "error",
        data2: "Ocurrió un error",
        msn: error,
      });
    }
  }
}*/ 
