import {QneOptions} from './QneOptions';
import {Questionnaire, Info} from 'qne-api';

export interface BL{
  getRoot(): Promise<Info>;
  getQuestions(path: string): Promise<Questionnaire>;
}
export function initializeBl(opts: QneOptions): BL {
  async function getRoot(): Promise<Info> {
    // TODO: Wait for database connection ready
    return new Promise<Info>((resolve, reject) => {
      const info: Info = {version: 'SNAPSHOT'};
      resolve(info);
    })
  }

  async function getQuestions(path: string): Promise<Questionnaire> {
    return new Promise<Questionnaire>((resolve, reject) => {
      // TODO: Link this to questionnaire.db.ts getQuestions method
      const questionnaire: Questionnaire = {
        uuid: '12345-1231233121',
        title: 'Test questionnaire',
        submit: '123214234',
        path: 'test-questionnaire'
      };
      resolve(questionnaire);
    })
  }
  return {
    getRoot,
    getQuestions
  }
}
