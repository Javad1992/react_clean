import "../datasources/remote/user-remote-data-source"
import { UserRemoteDataSource } from "../datasources/remote/user-remote-data-source";

export class UserRepository {

    constructor() {
        if (this.constructor === UserRepository) {
          throw new Error("Abstract classes can't be instantiated.");
        }
      }

    async getUserProfile(uid) {
        throw new Error("Method 'getUserProfile(uid)' must be implemented.");
    }
}

export class UserRepositoryImpl extends UserRepository {

    userRemoteDataSource = new UserRemoteDataSource()

    async getUserProfile(uid) {
        return await this.userRemoteDataSource.getUserProfile(uid)
    }
}