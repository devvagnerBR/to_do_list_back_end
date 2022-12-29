import { BaseDatabase } from './baseDatabase';
import { USER } from './../models/userModel';

export class USER_DATABASE extends BaseDatabase {

    private table_users = 'users'

    public async insertUser( user: USER ) {

        try {
            await USER_DATABASE.connection
                .insert( user )
                .into( this.table_users )

        } catch ( error: any ) {
            throw new Error( error.message );
        }
        
    }
}