import { CustomError } from "./customError";

export class userNotFound extends CustomError {
    constructor() { super( 404, 'Usuário não encontrado' ) }
}

export class InvalidEmail extends CustomError {
    constructor() {
        super( 421, 'Email inválido' )
    }
}

export class InvalidRequest extends CustomError {
    constructor() {
        super( 404, 'Requisição Inválida, um ou mais campos vazios' )
    }
}

export class ShortName extends CustomError {
    constructor() {
        super( 420, 'Senha precisa ter mais do que 3 caracteres' )
    }
}