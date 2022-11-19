import { GatewayController } from "./GatewayController" 
import express from "express" 

let gatewayControllerRoutes = express.Router()

//put your routes here

gatewayControllerRoutes.post("/signUp", (request, response) => GatewayController.signUp(request.body).then(result => response.send(result)))

gatewayControllerRoutes.post("/login", (request, response) => GatewayController.login(request.body).then(result => response.send(result)))

gatewayControllerRoutes.delete("/logout", (request, response) => GatewayController.logout(request.headers.token).then(result => response.send(result)))
gatewayControllerRoutes.delete("/logoutAllSessions", (request, response) => GatewayController.logoutAllSessions(request.headers.token).then(result => response.send(result)))
gatewayControllerRoutes.delete("/logoutAllOtherSessions", (request, response) => GatewayController.logoutAllOtherSessions(request.headers.token).then(result => response.send(result)))

gatewayControllerRoutes.patch("/confirmAccount", (request, response) => GatewayController.confirmAccount(request.body).then(result => response.send(result)))

gatewayControllerRoutes.patch("/enableTwoFactorAuth", (request, response) => GatewayController.enableTwoFactorAuth(request.headers.token).then(result => response.send(result)))
gatewayControllerRoutes.patch("/disableTwoFactorAuth", (request, response) => GatewayController.disableTwoFactorAuth(request.headers.token).then(result => response.send(result)))
gatewayControllerRoutes.patch("/twoFactorAuth", (request, response) => GatewayController.twoFactorAuth(request.body).then(result => response.send(result)))

gatewayControllerRoutes.post("/requestPasswordReset", (request, response) => GatewayController.requestPasswordReset(request.body).then(result => response.send(result)))
gatewayControllerRoutes.delete("/checkPasswordResetCode", (request, response) => GatewayController.checkPasswordResetCode(request.body).then(result => response.send(result)))
gatewayControllerRoutes.patch("/resetPassword", (request, response) => GatewayController.resetPassword(request.body).then(result => response.send(result)))
gatewayControllerRoutes.patch("/changePassword", (request, response) => GatewayController.changePassword(request.headers.token, request.body).then(result => response.send(result)))

gatewayControllerRoutes.get("/googleLoginGateway", (request, response) => GatewayController.googleLoginGateway().then(result => response.send(result)))
gatewayControllerRoutes.get("/collector/googleLoginGateway", (request, response) => GatewayController.googleLoginGateway().then(result => response.send(result)))

gatewayControllerRoutes.get("/facebookLoginGateway", (request, response) => GatewayController.facebookLoginGateway().then(result => response.send(result)))
gatewayControllerRoutes.get("/collector/facebookLoginGateway", (request, response) => GatewayController.facebookLoginGateway().then(result => response.send(result)))

gatewayControllerRoutes.get("/getMaterials", (request, response) => GatewayController.getMaterials().then(result => response.send(result)))

gatewayControllerRoutes.post("/makeRecycleRequest", (request, response) => GatewayController.makeRecycleRequest(request.headers.token, request.body).then(result => response.send(result)))
gatewayControllerRoutes.delete("/withdrawRecycleRequest", (request, response) => GatewayController.withdrawRecycleRequest(request.headers.token, request.body).then(result => response.send(result)))
gatewayControllerRoutes.get("/getRecycleRequests", (request, response) => GatewayController.getRecycleRequests(request.headers.token).then(result => response.send(result)))

gatewayControllerRoutes.get("/getAllRecycleRequests", (request, response) => GatewayController.getAllRecycleRequests(request.headers.token).then(result => response.send(result)))
gatewayControllerRoutes.patch("/validateRecycleRequest", (request, response) => GatewayController.validateRecycleRequest(request.headers.token, request.body).then(result => response.send(result)))
gatewayControllerRoutes.patch("/completeRecycleRequest", (request, response) => GatewayController.completeRecycleRequest(request.headers.token, request.body).then(result => response.send(result)))

gatewayControllerRoutes.patch("/gainRecycleCoins", (request, response) => GatewayController.gainRecycleCoins(request.headers.token, request.body).then(result => response.send(result)))
gatewayControllerRoutes.get("/getRecycleCoins", (request, response) => GatewayController.getRecycleCoins(request.headers.token).then(result => response.send(result)))


gatewayControllerRoutes.get("/getNotification", (request, response) => GatewayController.getNotification(request.headers.token).then(result => response.send(result)))
gatewayControllerRoutes.patch("/checkNotifications", (request, response) => GatewayController.checkNotifications(request.headers.token).then(result => response.send(result)))
gatewayControllerRoutes.post("/addMakeRecycleRequestNotification", (request, response) => GatewayController.addMakeRecycleRequestNotification(request.headers.token, request.body).then(result => response.send(result)))
gatewayControllerRoutes.post("/addValidateRecycleRequestNotification", (request, response) => GatewayController.addValidateRecycleRequestNotification(request.headers.token, request.body).then(result => response.send(result)))
gatewayControllerRoutes.post("/addCompleteRecycleRequestNotification", (request, response) => GatewayController.addCompleteRecycleRequestNotification(request.headers.token, request.body).then(result => response.send(result)))


export { gatewayControllerRoutes }