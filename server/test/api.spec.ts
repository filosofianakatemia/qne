import * as chakram from "chakram";
const expect = chakram.expect;

describe("qne server API", () => {
  let pollingInterval;
  before(function (done) {
    // Set one minute as timeout for tests
    this.timeout(60000);
    pollingInterval = setInterval(function(){
      chakram.get("http://localhost:3000/v1").then(function(response){
        if (!response.error) {
          clearInterval(pollingInterval);
          done();
        }
      });
    }, 500);
  });

  it("should return valid questions from GET qne-api/v1/questions/test-questionnaire", function () {
    const questionnairesPromise = chakram.get("http://localhost:3000/qne-api/v1/questions/test-questionnaire");

    // TODO: Use something like this when JSON is returned from the server
    // return expect(questionnaires).to.have.json('with[0].content', questionnaires);

    return questionnairesPromise.then(function(response){
      return expect(response).to.have.json(response[0].dataValues, function(title){
        expect (title.to.equal("Test Questionnaire"));
      });
      /*expect(response).to.have.json("title", function (title) {
        expect(title.to.equal("Test Questionnaire"));
    });*/

    });
  });
});

      /*expect(JSON.stringify(response.body)).to.equal(
        '{"uuid":"12345-1231233121","title":"Test questionnaire","submit":"123214234","path":"test-questionnaire"}');*/
