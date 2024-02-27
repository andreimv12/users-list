import { Iadress } from "./adress.interface"
import { IStatus } from "./status.interface"

export interface Iuser {
    nome: string;
    email: string;
    senha: string;
    idade: number;
    endereço: Iadress;
    telefone: string;
    ativo: boolean;
    funçao: string;
    dataCadastro: string;
    status: IStatus;
}
