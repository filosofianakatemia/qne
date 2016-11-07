import {initializeBl, BL} from './bl';
import {QneOptions} from './QneOptions';
import {Questionnaire, Info} from 'qne-api';
export {QneOptions} from './QneOptions';
export {Questionnaire} from 'qne-api';

export interface QneCore{
  getRoot(): Promise<Info>;
  getQuestions(path: string): Promise<[Questionnaire]>;
}

export function initializeQneCore(opts: QneOptions): QneCore {
  const bl: BL = initializeBl(opts);

  async function getRoot() {
    let info: Info = await bl.getRoot();
    return info;
  }

  async function getQuestions(path: string) {
    let questionnaire: Questionnaire = await bl.getQuestions(path);
    return questionnaire;
  }

  return {
    getRoot,
    getQuestions
  };
}

