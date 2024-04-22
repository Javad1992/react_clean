import { UserRepositoryImpl } from "../data/repositories/user-repository";

export default async function getUserProfile() {
    const authenticationStatus = true;
    const userRepository = new UserRepositoryImpl()

    const userId = "1" // get user id from where you know

    if(authenticationStatus) {
        return await userRepository.getUserProfile(userId)
    } else {
        // not implemented yet!
    }
}