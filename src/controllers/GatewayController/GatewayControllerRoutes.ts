import { GatewayController } from "./GatewayController" 
import express from "express" 

let gatewayControllerRoutes = express.Router()

//put your routes here

gatewayControllerRoutes.get("/signUp", (request, response) => GatewayController.signUp(request.body).then(result => response.send(result)))

gatewayControllerRoutes.get("/login", (request, response) => GatewayController.login(request.body).then(result => response.send(result)))

gatewayControllerRoutes.get("/logout", (request, response) => GatewayController.logout(request.headers.token).then(result => response.send(result)))
gatewayControllerRoutes.get("/logoutAllSessions", (request, response) => GatewayController.logoutAllSessions(request.headers.token).then(result => response.send(result)))
gatewayControllerRoutes.get("/logoutAllOtherSessions", (request, response) => GatewayController.logoutAllOtherSessions(request.headers.token).then(result => response.send(result)))

gatewayControllerRoutes.get("/confirmAccount", (request, response) => GatewayController.confirmAccount(request.body).then(result => response.send(result)))

gatewayControllerRoutes.get("/enableTwoFactorAuth", (request, response) => GatewayController.enableTwoFactorAuth(request.headers.token).then(result => response.send(result)))
gatewayControllerRoutes.get("/disableTwoFactorAuth", (request, response) => GatewayController.disableTwoFactorAuth(request.headers.token).then(result => response.send(result)))
gatewayControllerRoutes.get("/twoFactorAuth", (request, response) => GatewayController.twoFactorAuth(request.body).then(result => response.send(result)))

gatewayControllerRoutes.get("/requestPasswordReset", (request, response) => GatewayController.requestPasswordReset(request.body).then(result => response.send(result)))
gatewayControllerRoutes.get("/checkPasswordResetCode", (request, response) => GatewayController.checkPasswordResetCode(request.body).then(result => response.send(result)))
gatewayControllerRoutes.get("/resetPassword", (request, response) => GatewayController.resetPassword(request.body).then(result => response.send(result)))
gatewayControllerRoutes.get("/changePassword", (request, response) => GatewayController.changePassword(request.headers.token, request.body).then(result => response.send(result)))

gatewayControllerRoutes.get("/googleLoginGateway", (request, response) => GatewayController.googleLoginGateway().then(result => response.send(result)))

gatewayControllerRoutes.get("/facebookLoginGateway", (request, response) => GatewayController.facebookLoginGateway().then(result => response.send(result)))

export { gatewayControllerRoutes }