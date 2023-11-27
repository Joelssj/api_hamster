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
exports.GetByIdSensorController = void 0;
class GetByIdSensorController {
    constructor(getByIdSensorUseCase) {
        this.getByIdSensorUseCase = getByIdSensorUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                // Hice las modificaciones para adaptar el código sin referencia a la base de datos
                const sensor2 = yield this.getByIdSensorUseCase.run(id);
                if (sensor2)
                    res.status(200).send({
                        status: "success",
                        data: {
                            id: sensor2.id,
                            temperatura: sensor2.temperatura,
                            humedad: sensor2.humedad,
                            luz: sensor2.luz,
                            comida: sensor2.comida,
                            // Otros atributos si los tienes
                        },
                    });
                else
                    res.status(400).send({
                        status: "error",
                        msn: "Ocurrió algún problema",
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
exports.GetByIdSensorController = GetByIdSensorController;
/*import { Request, Response } from "express";

import { GetByIdSensorUseCase } from "../../application/GetByIdSensorUseCase";

export class GetByIdSensorController {
  constructor(readonly getByIdSensorUseCase: GetByIdSensorUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    try {
      const sensor2 = await this.getByIdSensorUseCase.run(id);

      if (sensor2)
        // Code HTTP: 200 -> Consulta exitosa
        res.status(200).send({
          status: "success",
          data2: {
            id: sensor2.id,
            temperatura: sensor2.temperatura, // Modifica el nombre del atributo a temperatura
            humedad: sensor2.humedad, // Incluye la humedad
            luz: sensor2.luz, // Incluye la luz
            comida: sensor2.comida, // Incluye la comida
          },
        });
      else
        res.status(400).send({
          status: "error",
          msn: "Ocurrió algún problema",
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
