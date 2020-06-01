import { Anamnse } from './anamnse'
import { DoencasCoracao } from './doencas-coracao';
import { ProblemasSaude } from './problemas-saude';
import { Sintomas } from './sintomas';
import { Dor } from './dor';

export class Questionario {
  anamnse: Anamnse;
  doencas_coracao: DoencasCoracao;
  problemas_saude: ProblemasSaude;
  sintomas: Sintomas;
  dor: Dor;
}
