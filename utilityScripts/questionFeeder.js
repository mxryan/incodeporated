const fs = require("fs");
const request = require("request");
const url = "https://frightful-spider-64495.herokuapp.com/api/newquest";
const topics = [
  "console/bash",
  "html/css/git",
  "javascript",
  "javascript & jQuery",
  "JS-Timers & APIs",
  "Node",
  "Express"
];

function readAndParseQuiz(quizNumber) {
  let fp = "../sourceQuizzes/quiz" + quizNumber + ".md";
  fs.readFile(fp, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }
    const chunks = data.split("###");
    for (let i = 0; i < chunks.length; i++) {
      const qObj = {
        quizId: quizNumber,
        category: topics[quizNumber - 1],
        codeBlock: null
      };
      if (chunks[i].split(":question: ")[1]) {
        let qas = chunks[i].split(":question: ")[1]; // question & answers
        if (qas.includes("```")) {
          let tmp = qas.split("```");
          qObj.codeBlock = tmp[1];
          qas = tmp[0] + tmp[2];
        }
        qas = qas.split("\n");
        qObj.question = qas[0].trim();
        let ct = 1;
        for (let j = 1; j < 5; j++) {
          if (qas[j].includes(":white_check_mark:")) {
            qObj.correct = qas[j].split(":white_check_mark:")[0].trim();
          } else {
            qObj["incorrect" + ct] = qas[j].trim();
            ct++;
          }
        }
        console.log(qObj);
        request.post(url).form(qObj);
      }
    }
    if (quizNumber < 7) {
      setTimeout(() => {
        readAndParseQuiz(quizNumber + 1);
      }, 1000);
    }
  });
}

readAndParseQuiz(1);
