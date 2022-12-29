import { IdGenerator } from "../services/idGenerator"

export class UserModel {

    public id: string

    constructor(
        public name: string,
        public nickname: string,
        public email: string
    ) { this.id = IdGenerator() }

}

export interface USER {

    id: string
    name: string
    nickname: string
    email: string

}

export interface USER_INPUT {

    name: string
    nickname: string
    email: string

}