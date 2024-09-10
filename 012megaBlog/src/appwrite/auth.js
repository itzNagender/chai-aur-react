import conf from "../conf/conf";
import { Client, Account, Id} from "appwrite"

export class AuthService {
    client = new Client()
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)
    }
    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(Id.unique(), email, password, name);
            if(userAccount) {
                // call Another method
                return this.login({email, password})
            } else {
                return userAccount;
            }
            
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(Email, password);
        } catch (error) {
            throw error
        }
    }

   async getCurrentUser() {
    try {
        await this.account.get();
    } catch (error) {
        console.log("Appwrite Service :: getCurrentUser :: error", error);
        
    }
    return null;
   } 

   async logout() {
    try {
        await this.account.deleteSessions();
    } catch (error) {
        console.log("Appwrite service :: logout :: error", error);
        
    }
   }
}

const authService = new AuthService()

export default authService