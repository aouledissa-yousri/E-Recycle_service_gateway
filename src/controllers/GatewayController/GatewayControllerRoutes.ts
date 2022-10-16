import { GatewayController } from "./GatewayController" 
import express from "express" 

let gatewayControllerRoutes = express.Router()

//put your routes here

gatewayControllerRoutes.get("/", (request, response) => response.send("Express TS"))

export { gatewayControllerRoutes }