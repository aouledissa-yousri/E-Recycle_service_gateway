import express from "express"
import { gatewayControllerRoutes } from "./controllers/GatewayController/GatewayControllerRoutes"

let routes = express.Router()

//put your routes here

routes.use("/", gatewayControllerRoutes)


export { routes }