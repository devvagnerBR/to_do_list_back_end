import { InvalidEmail,ShortName, InvalidRequest } from "../error/userErrors";
import { USER_INPUT } from "../models/userModel";
import { USER_DATABASE } from './../data/userDatabase';
import { CustomError } from './../error/customError';
import { UserModel } from './../models/userModel';



export class USER_BUSINESS {

    public async createUser( user: USER_INPUT ) {

        try {

            const { name, nickname, email } = user;
            const userDB = new USER_DATABASE();
            const userModel = new UserModel( name, nickname, email );

            if ( !name || !nickname || !email ) throw new InvalidRequest();
            if ( !email.includes( '@' ) ) throw new InvalidEmail();
            if ( name.length < 3 ) throw new ShortName();

            await userDB.insertUser( userModel );

        } catch ( error: any ) {
            throw new CustomError( error.statusCode, error.message || error.sqlMessage )
        }


    }
}