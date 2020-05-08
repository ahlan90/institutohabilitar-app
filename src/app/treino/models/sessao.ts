import { Exercicio } from './exercicio';

export class Sessao {
    titulo: string;
    subtitulo: string;
    ordem: number;
    exercicios: Exercicio[];
    visualizada: boolean;
}
