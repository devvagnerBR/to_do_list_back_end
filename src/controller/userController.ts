
import { Request, Response } from "express";
import { USER_BUSINESS } from './../business/userBusiness';
import { USER_INPUT } from './../models/userModel';

export class USER_CONTROLLER {

    public async createUser( req: Request, res: Response ) {

        try {

            const { name, nickname, email } = req.body;

            const input: USER_INPUT = { name, nickname, email };
            const userBusiness = new USER_BUSINESS();

            await userBusiness.createUser( input );
            res.status( 201 ).send( "Usuário criado com sucesso!" )

        } catch ( error: any ) {
            res.status( error.statusCode || 400 ).send( error.message || error.sqlMessage );
        }
    }
}