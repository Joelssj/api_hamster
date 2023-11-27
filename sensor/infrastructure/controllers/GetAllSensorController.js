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
exports.GetAllSensorController = void 0;
class GetAllSensorController {
    constructor(getAllSensorUseCase) {
        this.getAllSensorUseCase = getAllSensorUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sensores = yield this.getAllSensorUseCase.run();
                console.log(sensores);
                if (sensores) {
                    const totalSensores = sensores.length;
                    let sumaTemperatura = 0;
                    let sumaHumedad = 0;
                    let sumaLuz = 0;
                    let contadorTemperaturaMayor24 = 0;
                    let contadorHumedadMayor60 = 0;
                    let contadorLuzMayor20 = 0;
                    sensores.forEach((sensor) => {
                        //! para que no truene 
                        const temperatura = parseFloat(sensor.temperatura);
                        const humedad = parseFloat(sensor.humedad);
                        //!Map de mayores OwO
                        if (!isNaN(temperatura)) {
                            sumaTemperatura += temperatura;
                            if (temperatura > 24) {
                                contadorTemperaturaMayor24++;
                            }
                        }
                        if (!isNaN(humedad)) {
                            sumaHumedad += humedad;
                            if (humedad > 60) {
                                contadorHumedadMayor60++;
                            }
                        }
                        sumaLuz += sensor.luz;
                        if (sensor.luz > 27) {
                            contadorLuzMayor20++;
                        }
                    });
                    //!Media y porcentaje
                    const mediaTemperatura = totalSensores > 0 ? sumaTemperatura / totalSensores : null;
                    const mediaHumedad = totalSensores > 0 ? sumaHumedad / totalSensores : null;
                    const mediaLuz = totalSensores > 0 ? sumaLuz / totalSensores : 0;
                    const porcentajeTemperaturaMayor24 = (contadorTemperaturaMayor24 / totalSensores) * 100;
                    const porcentajeHumedadMayor60 = (contadorHumedadMayor60 / totalSensores) * 100;
                    const porcentajeLuzMayor20 = (contadorLuzMayor20 / totalSensores) * 100;
                    res.status(200).send({
                        status: "success",
                        data: sensores.map((sensor) => {
                            return {
                                id: sensor.id,
                                temperatura: sensor.temperatura,
                                humedad: sensor.humedad,
                                luz: sensor.luz,
                                comida: sensor.comida,
                                fecha: sensor.fecha,
                                hora: sensor.hora,
                            };
                        }),
                        mediaTemperatura,
                        mediaHumedad,
                        mediaLuz,
                        temperaturaMayor24: porcentajeTemperaturaMayor24,
                        humedadMayor60: porcentajeHumedadMayor60,
                        luzMayor20: porcentajeLuzMayor20,
                    });
                }
                else {
                    res.status(400).send({
                        status: "error",
                        msn: "Ocurrió algún problema",
                    });
                }
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
exports.GetAllSensorController = GetAllSensorController;
/*import { Request, Response } from "express";
import { GetAllSensorUseCase } from "../../application/GetAllSensorUseCase";

export class GetAllSensorController {
  constructor(readonly getAllSensorUseCase: GetAllSensorUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const sensores = await this.getAllSensorUseCase.run();
      console.log(sensores);
      if (sensores)
        // Code HTTP: 200 -> Consulta exitosa
        res.status(200).send({
          status: "success",
          data: sensores.map((sensor: any) => {
            return {
              id: sensor.id,
              temperatura: sensor.temperatura, // Modifica el nombre del atributo a temperatura
              humedad: sensor.humedad, // Incluye la humedad
              luz: sensor.luz, // Incluye la luz
              comida: sensor.comida, // Incluye la comida
              fecha: sensor.fecha, // Incluye la fecha
              hora: sensor.hora, // Incluye la hora
            };
          }),
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
        data: "Ocurrió un error",
        msn: error,
      });
    }
  }
}*/
