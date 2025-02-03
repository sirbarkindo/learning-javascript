"use strict";

// CODING CHALLLENGE 1

const poll = {
  question: "What is your favorite programming language?",
  options: ["0: javascript", "1: python", "2: Rust", "3: c++"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(write option number)`
      )
    );
    console.log(answer);

    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults("string");
  },
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`poll result are ${this.answers.join(", ")}`);
    }
  },
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, "string");

poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");

poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

//  CODING CHALLENGE 2

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

    document.querySelector("body").addEventListener("click", function () {
       header.style.color = "blue";
  });
})();
