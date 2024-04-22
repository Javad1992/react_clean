import getUserProfile from "../../../../infrastructure/endpoints/apis";
import User from "../../../domain/models/user";

export class UserRemoteDataSource {
    async getUserProfile(uid) {
        try {
            const response = await getUserProfile(uid)
            const userJson = response.data.result
            return new User(userJson)            
        } catch (error) {
            throw new Error(error)
        }
    }
}