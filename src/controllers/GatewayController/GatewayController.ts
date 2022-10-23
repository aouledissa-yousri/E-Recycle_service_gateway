import axios from "axios";
import { HOSTS } from "../../../hosts"
import { KeyError } from "../../errors/KeyError";
import { SignUpPayload } from '../../payloadformatters/SignUpPayload';
import { LoginPayload } from '../../payloadformatters/LoginPayload';
import { ConfirmAccountPayload } from '../../payloadformatters/ConfirmAccountPayload';
import { TwoFactorAuthPayload } from '../../payloadformatters/TwoFactorAuthPayload';
import { RequestPasswordResetPayload } from '../../payloadformatters/RequestPasswordResetPayload';
import { PasswordResetCodePayload } from '../../payloadformatters/PasswordResetCodePayload';
import { ResetPasswordPayload } from '../../payloadformatters/ResetPasswordPayload';
import { ChangePasswordPayload } from '../../payloadformatters/ChangePasswordPayload';

export abstract class GatewayController {

    public static async signUp(payload: any){

        try{

            let signUpPayload = SignUpPayload.createSignUpPayload(payload)

            const {data, status} = await axios.post(
                HOSTS.userManagement+"/signUp/", 
                {
                    headers: {
                        "Content-Type": "application/json",
                    },

                    data: signUpPayload.getData()
                }
                
            )

            return data

        }catch(error) {

            if(error instanceof KeyError)
                return {"message": "invalid parameters"}
            
            return {"message": "unknown error"}

        }
        
    }


    public static async login(payload: any){

        try{

            const loginPayload = LoginPayload.createLoginPayload(payload)

            const {data, status} = await axios.post(
                HOSTS.userManagement+"/login/",
                {
                    headers: {
                        "Content-Type": "application/json",
                    },

                    data: loginPayload.getData()
                }
            
            )

            return data

        }catch(error) {

            if(error instanceof KeyError)
                return {"message": "invalid parameters"}
            
            return {"message": "unknown error"}

        }

    }

    public static async logout(token: any){

        try{

            const {data, status} = await axios.post(
                HOSTS.userManagement+"/logout/",
                {
                    headers: {
                        "Content-Type": "application/json",
                        Token: token
                    }
                }
            )

            return data

        }catch(error) {
            
            return {"message": "unknown error"}

        }

    } 

    public static async logoutAllSessions(token: any){

        try{

            const {data, status} = await axios.post(
                HOSTS.userManagement+"/logoutAllSessions/",
                {
                    headers: {
                        "Content-Type": "application/json",
                        Token: token
                    }
                }
            )

            return data

        }catch(error) {
            
            return {"message": "unknown error"}

        }

    } 
    
    public static async logoutAllOtherSessions(token: any){

        try{

            const {data, status} = await axios.post(
                HOSTS.userManagement+"/logoutAllOtherSessions/",
                {
                    headers: {
                        "Content-Type": "application/json",
                        Token: token
                    }
                }
            )

            return data

        }catch(error) {
            
            return {"message": "unknown error"}

        }
    } 
    
    public static async confirmAccount(payload: any){
        
        try{

            const confirmAccountPayload = ConfirmAccountPayload.createConfirmAccountPayload(payload)

            const {data, status} = await axios.post(
                HOSTS.userManagement+"/confirmAccount/",
                {
                    headers: {
                        "Content-Type": "application/json",
                    },

                    data: confirmAccountPayload.getData()
                }
            )

            return data

        }catch(error) {

            if(error instanceof KeyError)
                return {"message": "invalid parameters"}
            
            return {"message": "unknown error"}

        }
    } 
    
    public static async enableTwoFactorAuth(token: any){

        try{

            const {data, status} = await axios.post(
                HOSTS.userManagement+"/enableTwoFactorAuth/",
                {
                    headers: {
                        "Content-Type": "application/json",
                        Token: token
                    }
                }
            )

            return data

        }catch(error) {
            
            return {"message": "unknown error"}

        }
    } 
    
    public static async disableTwoFactorAuth(token: any){

        try{
            

            const {data, status} = await axios.post(
                HOSTS.userManagement+"/disableTwoFactorAuth/",
                {
                    headers: {
                        "Content-Type": "application/json",
                        Token: token
                    }
                }
            )

            return data

        }catch(error) {
            
            return {"message": "unknown error"}

        }

    } 
    
    public static async twoFactorAuth(payload: any){
        
        try{

            const twoFactorAuthPayload = TwoFactorAuthPayload.createTwoFactorAuthPayload(payload)

            const {data, status} = await axios.post(
                HOSTS.userManagement+"/twoFactorAuth/",
                {
                    headers: {
                        "Content-Type": "application/json",
                    },

                    data: twoFactorAuthPayload.getData()
                }
            )

            return data

        }catch(error) {
            
            return {"message": "unknown error"}

        }

    } 
    
    public static async requestPasswordReset(payload: any){

        try{

            const requestPasswordResetPayload = RequestPasswordResetPayload.createPasswordResetPayload(payload)

            const {data, status} = await axios.post(
                HOSTS.userManagement+"/requestPasswordReset/",
                {
                    headers: {
                        "Content-Type": "application/json",
                    },

                    data: requestPasswordResetPayload.getData()
                }
            )

            return data

        }catch(error) {
            
            return {"message": "unknown error"}

        }

    } 
    
    public static async checkPasswordResetCode(payload: any){

        try{

            const passwordResetCodePayload = PasswordResetCodePayload.createPasswordResetCodePayload(payload)

            const {data, status} = await axios.post(
                HOSTS.userManagement+"/checkPasswordResetCode/",
                {
                    headers: {
                        "Content-Type": "application/json",
                    },

                    data: passwordResetCodePayload.getData()
                }
            )

            return data

        }catch(error) {
            
            return {"message": "unknown error"}

        }

    } 
    
    public static async resetPassword(payload: any){

        try{

            const resetPasswordPayload = ResetPasswordPayload.createResetPasswordPayload(payload)

            const {data, status} = await axios.post(
                HOSTS.userManagement+"/resetPassword/",
                {
                    headers: {
                        "Content-Type": "application/json",
                    },

                    data: resetPasswordPayload.getData()
                }
            )

            return data

        }catch(error) {
            
            return {"message": "unknown error"}

        }

    } 
    
    public static async changePassword(token: any, payload: any){

        try{

            const changePasswordPayload = ChangePasswordPayload.createChangePassworPayload(payload)

            const {data, status} = await axios.post(
                HOSTS.userManagement+"/changePassword/",
                {
                    headers: {
                        "Content-Type": "application/json",
                        Token: token
                    },

                    data: changePasswordPayload.getData()
                }
            )

            return data

        }catch(error) {

            if(error instanceof KeyError)
                return {"message": "invalid parameters"}
            
            return {"message": "unknown error"}

        }

    } 
    
    public static async googleLoginGateway(){

        try{

            const {data, status} = await axios.post(
                HOSTS.userManagement+"/googleLoginGateway/",
                {
                    headers: {
                        "Content-Type": "application/json",
                    }

                }
            )

            return data

        }catch(error) {

            return {"message": "unknown error"}

        }

    } 
    
    public static async facebookLoginGateway(){

        try{

            const {data, status} = await axios.post(
                HOSTS.userManagement+"/facebookLoginGateway/",
                {
                    headers: {
                        "Content-Type": "application/json",
                    }

                }
            )

            return data

        }catch(error) {

            return {"message": "unknown error"}

        }

    } 
    

}