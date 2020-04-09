import { Exercicio } from './exercicio';
import { Sessao } from './sessao';
import { Microciclo } from './mesociclo';

export class Mesociclo {
    titulo: string;
    microciclos: Microciclo[];
}
