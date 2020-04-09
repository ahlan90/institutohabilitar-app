import { Exercicio } from './exercicio';
import { Sessao } from './sessao';
import { Mesociclo } from './microciclo';

export class Macrociclo {
    titulo: string;
    mesociclos: Mesociclo[];
}
