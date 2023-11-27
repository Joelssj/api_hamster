"use strict";
// SensorRouter.ts
/*
import express from "express";
import {
  createSensorController,
  getAllSensorController,
  getByIdSensorController,
} from "./dependencies";

// Crea el enrutador
export const sensor2Router = express.Router();

// Asocia las rutas con los controladores correspondientes
sensor2Router.get("/", getAllSensorController.run.bind(getAllSensorController));
sensor2Router.get("/:id", getByIdSensorController.run.bind(getByIdSensorController));
sensor2Router.post("/", createSensorController.run.bind(createSensorController));*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sensor2Router = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./dependencies");
exports.sensor2Router = express_1.default.Router();
exports.sensor2Router.get("/", dependencies_1.getAllSensorController.run.bind(dependencies_1.getAllSensorController));
exports.sensor2Router.get("/:id", dependencies_1.getByIdSensorController.run.bind(dependencies_1.getByIdSensorController));
exports.sensor2Router.post("/", dependencies_1.createSensorController.run.bind(dependencies_1.createSensorController));
