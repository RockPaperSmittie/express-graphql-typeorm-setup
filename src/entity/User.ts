import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity()
export class UserEntity {

    @PrimaryGeneratedColumn('uuid')
    public id: string

    @Column({
      nullable: false
    })
    public firstName: string

    @Column({
      nullable: false
    })
    public lastName: string

    @Column({
      nullable: false
    })
    public userName: string

    @Column({
      nullable: false
    })
    public email: string

    @Column({
      nullable: false
    })
    public createdDate: string

    @Column({
      nullable: false
    })
    public dateOfBirth: string

    @Column({
      nullable: true
    })
    public profilePictureUrl: string

}
