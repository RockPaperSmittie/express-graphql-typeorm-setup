import { EntityRepository, Repository, getRepository, UpdateResult } from 'typeorm'
import { UserEntity } from '../entity/User'
import { CreateUserInput, User, Response } from 'types/types'

@EntityRepository(UserEntity)
export class UserHandler extends Repository<UserEntity> {

    public getUserById(id: string) {
      return this.createQueryBuilder('user')
        .where('id = :id', {id})
        .getOne()
    }

    public getAllUsers() {
      return this.createQueryBuilder('user')
        .getMany()
    }

    public createUser(userInput: CreateUserInput): Promise<User> {
      return getRepository(UserEntity).save({
        ...userInput,
      })
    }

    public deleteUserById(id: string): Promise<Response> {
      const deleteResult = this.createQueryBuilder('user')
        .delete()
        .where('id = :id', {id})
        .execute()
      return this.responsePromise(deleteResult)
    }

    private responsePromise(promise): Promise<Response> {
      return new Promise((resolve, reject) => {
        promise.then(() => resolve({success: true}))
        promise.catch((err) => reject({success: false}))
      })
    }
}