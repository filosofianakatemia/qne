import * as mocha from "mocha";
import { expect, should } from 'chai';
import { initializeQneCore, QneOptions, QneCore, Questionnaire } from '../src/index';

describe('API', () => {

  // TODO: Change these to match SQLite in-memory
  const testQneOptions: QneOptions = {
    dbUrl: '#memory#',
    debug: true
  }

  let core: QneCore;

  before(function(){
    core = initializeQneCore(testQneOptions);
    // TODO: Run fixtures after this somehow
  })

  describe('getQuestions', () => {
    it('should get test-questionnaire values', async function () {
      const questions: Questionnaire = core.getQuestions('test-questionnaire');
      expect(questions.path).to.equal('test-questionnaire');
    });
  });
});
