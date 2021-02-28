import { Service } from 'typedi'
import { User } from '../models/User'

@Service()
export class UserRepository {
    private entity = User

    findAndCountAll() {
        return this.entity.findAndCountAll({raw: true})
    }

    findOneById(id: number) {
        return this.entity.findOne({where: { id: id }})
    }

    async create(user: any) {
        return await this.entity.create(user)
    }
}