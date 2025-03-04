const body = document.querySelector("body");
let index = 0;
let indexCategory;
let nameOfCategory;
let grade = 0;
let status = "";
let Answers = [];
let my_end_width = 10;
const Q = {
  header: "Welcome to our Quiz",
  QuizParagraph:
    "Hello Friend! Welcome to a world of endless possibilities. Explore your Knowledge in our Quiz in the different categoreies. of products and services crafted to enrich your life. Prepare yourself and Take the Quiz for progress progress and improve your knowledge. We are here to assist you at every stage of your journey.",
  imgSrc: "Portrait-of-a-cat-with-whiskers-visible.webp",
  categories: [
    {
      Maths: {
        questions: [
          {
            id: 1,
            q: "What symbol is used to symbolise percentage?",
            answers: ["#", "%", "!", "$"],
            correctAnswer: "%",
          },
          {
            id: 2,
            q: "What is the subtract of 18 – 9?",
            answers: ["9", "8", "6", "7"],
            correctAnswer: "9",
          },
          {
            id: 3,
            q: " How many sides does a pentagon have?",
            answers: ["5", "4", "6", "3"],
            correctAnswer: "5",
          },
          {
            id: 4,
            q: "What is the sum of 7 x 7?",
            answers: ["48", "49", "36", "81"],
            correctAnswer: "48",
          },
          {
            id: 5,
            q: "If the time is 12pm, how many hours is it until 6pm",
            answers: ["12", "5", "6", "8"],
            correctAnswer: "6",
          },
          {
            id: 6,
            q: "How many metres are in a kilometre?",
            answers: ["1000", "100", "10000", "10"],
            correctAnswer: "1000",
          },
          {
            id: 7,
            q: "3,6,9,12,__? What is the next number in the sequence?",
            answers: ["16", "15", "14", "18"],
            correctAnswer: "15",
          },
          {
            id: 8,
            q: "What is the sum of 13 x 14?",
            answers: ["182", "190", "160", "176"],
            correctAnswer: "182",
          },
          {
            id: 9,
            q: "How many sides does a dodecahedron have?",
            answers: ["12", "15", "13", "10"],
            correctAnswer: "12",
          },
          {
            id: 10,
            q: "What is the sum of 3 x 3 x 3?",
            answers: ["27", "30", "36", "30"],
            correctAnswer: "27",
          },
        ],
      },
    },
    {
      Codes: {
        questions: [
          {
            id: 1,
            q: "Inside which HTML element do we put the JavaScript?",
            answers: ["<javascript>", " <scripting>", "<script>", "<js>"],
            correctAnswer: "<script>",
          },
          {
            id: 2,
            q: "What is the correct method that we used to get element by Id?",
            answers: [
              "getElement",
              "getElementById",
              "innerHTML",
              "querySelector",
            ],
            correctAnswer:
              'document.getElementById("demo").innerHTML = "Hello World!";',
          },
          {
            id: 3,
            q: "How do you create a function in JavaScript?",
            answers: [
              "function:myFunction()",
              "function myFunction()",
              "function = myFunction()",
              "public myFunction() ",
            ],
            correctAnswer: "function myFunction()",
          },
          {
            id: 4,
            q: "Which CSS that will be used to change text color?",
            answers: ["color", "background-color", "text-color", "textColor"],
            correctAnswer: "color",
          },
          {
            id: 5,
            q: "Which CSS that will be used to change font size?",
            answers: ["font-size", "font", "font-family", "font-weight"],
            correctAnswer: "font-size",
          },
          {
            id: 6,
            q: "Which Tag that will be used to break line (new Line)?",
            answers: ["<br>", "<hr>", "<breakLine>", "<brline>"],
            correctAnswer: "<br>",
          },
          {
            id: 7,
            q: "Which Tag that will be used to link CSS with HTML?",
            answers: ["<head>", "<body>", "<style>", "<html>"],
            correctAnswer: "<head>",
          },
          {
            id: 8,
            q: "Which CSS that will be used to change the font?",
            answers: ["font-size", "font", "font-family", "font-weight"],
            correctAnswer: "font-family",
          },
          {
            id: 9,
            q: "Which CSS that will be used to change back-ground of the text?",
            answers: ["color", "background-color", "text-color", "textColor"],
            correctAnswer: "background-color",
          },
          {
            id: 10,
            q: "Which CSS that will be used to create space around elements?",
            answers: ["margin", "padding", "space", "whiteSpace"],
            correctAnswer: "margin",
          },
        ],
      },
    },
    {
      Sciences: {
        questions: [
          {
            id: 1,
            q: "About how much of the human body is made up of water?",
            answers: ["60%", "40%", "20%", "30%"],
            correctAnswer: "a",
          },
          {
            id: 2,
            q: "What is the largest organ in the human body?",
            answers: ["Eyes", "Skin", "Ears", "Nose"],
            correctAnswer: "Skin",
          },
          {
            id: 3,
            q: " How long does it take for sunlight to reach Earth?",
            answers: ["3 minutes", "5 minutes", "8 minutes", "9 minutes"],
            correctAnswer: "8 minutes",
          },
          {
            id: 4,
            q: "What percentage of the water on Earth is saltwater?",
            answers: ["95 percent", "97 percent", "90 percent", "92 percent"],
            correctAnswer: "97 percent",
          },
          {
            id: 5,
            q: "How many chambers are there in the human heart? ",
            answers: ["Four", "Five", "Three", "Two"],
            correctAnswer: "Four",
          },
          {
            id: 6,
            q: "Approximately long has Earth existed?",
            answers: [
              "4.3 billion years",
              "4.5 billion years",
              "4.1 billion years",
              "4.0 billion years",
            ],
            correctAnswer: "4.5 billion years",
          },
          {
            id: 7,
            q: "How many bones are in the human body?",
            answers: ["201", "205", "206", "208"],
            correctAnswer: "206",
          },
          {
            id: 8,
            q: "What is the freezing temperature of water?",
            answers: ["20°F", "32°C", "30°F", "32°F"],
            correctAnswer: "32°F",
          },
          {
            id: 9,
            q: "How many sides does a heptagon have?",
            answers: ["2", "6", "9", "7"],
            correctAnswer: "7",
          },
          {
            id: 10,
            q: "When is Pi Day celebrated each year?",
            answers: ["March 16th", "March 14th", "March 20th", "March 15th"],
            correctAnswer: "March 14th",
          },
        ],
      },
    },
  ],
};

const ScorePage = () => {
  body.innerText = "";
  const mainFour = document.createElement("main");
  mainFour.id = "mainFour";
  const audioPassed = document.createElement("audio");
  audioPassed.allow = "autoplay";
  audioPassed.src = "yay.mp3";
  mainFour.append(audioPassed);
  const audioFail = document.createElement("audio");
  audioFail.allow = "autoplay";
  audioFail.src = "Fail.wav";
  mainFour.append(audioPassed);
  mainFour.append(audioFail);
  const div = document.createElement("div");
  div.classList = "scorePage";
  const h3 = document.createElement("h3");
  h3.classList = "finishHeader";
  h3.innerText = "You Finished the Quiz";
  const p = document.createElement("p");
  p.classList = "finishParagraph";
  p.innerText =
    "Thank you for taking our Quiz! Together, we can create a better future. Explore, engage, and be a part of something meaningful. \n We are appreciated for choosing us as your learning companion. Unlock your potential with our comprehensive educational resources.";
  const div2 = document.createElement("div");
  div2.classList = "score";
  const headerThree = document.createElement("h3");
  headerThree.classList = "finishHeader";
  headerThree.innerText = `Your Score is : `;
  const spanOne = document.createElement("span");
  spanOne.classList = "grade";
  spanOne.innerText = `${grade} out of ${Q["categories"][indexCategory][nameOfCategory]["questions"].length}`;
  const spanTwo = document.createElement("span");
  spanTwo.classList = "status";
  if (grade >= 5) {
    audioPassed.play();
    status = "Passed";
  } else {
    audioFail.play();
    spanTwo.style.setProperty("--bg-color" , "red");
    status = "Failed";
  }
  spanTwo.innerText = ` You Are ${status}`;
  body.append(mainFour);
  mainFour.append(div);
  div.append(h3, p, div2);
  div2.append(headerThree);
  headerThree.append(spanOne, spanTwo);
  //<button class ="re-playButton" type="button">Re-play</button>
  const re_playButton = document.createElement("button");
  re_playButton.classList = "re-playButton";
  re_playButton.innerText ="Re-play";
  div.append(re_playButton);
  re_playButton.addEventListener("click", (event) => {
    welcomePage();
  })
  localStorage.setItem("Grade", grade);
};

const quiz = () => {
  body.innerText = "";
  const mainThree = document.createElement("main");
  mainThree.id = "mainThree";
  const h3 = document.createElement("h3");
  h3.innerText = `${nameOfCategory} Quiz`;
  body.append(mainThree);
  mainThree.append(h3);
  const spanOne = document.createElement("span");
  spanOne.classList = "questionMark";
  const spanTwo = document.createElement("span");
  spanTwo.innerText = "?";
  const spanThree = document.createElement("span");
  spanThree.classList = "toolTip";
  spanThree.style.display = "block";
  spanThree.style.textAlign = "left";
  h3.append(spanOne);
  spanOne.append(spanTwo);
  spanOne.append(spanThree);

  const audio = document.createElement("audio");
  audio.allow = "autoplay";
  audio.src = "clickinput.wav";
  mainThree.append(audio);

  if (
    index ===
      Q["categories"][indexCategory][nameOfCategory]["questions"].length &&
    (document.querySelector(".next")) === null
  ) {
    ScorePage();
  } else {
    const p = document.createElement("p");
    p.classList = "question";
    p.innerText = `Question ${Q["categories"][indexCategory][nameOfCategory]["questions"][index]["id"]} :  ${Q["categories"][indexCategory][nameOfCategory]["questions"][index]["q"]}`;

    const span = document.createElement("span");
    span.classList = "Timer";
    const funcTimer = () => {
      let time =120;
      t = setInterval(() => {
        time--;
        span.innerText = `Timer : ${time}`;
        if (time === 0) {
          span.style.color = "red";
          span.style.fontSize = "14px";
          span.innerText = "The Time is finished";
          if (document.querySelector(".next") !== null) {
            document.querySelector(".next").disabled = false;
            clearInterval(t);
          }
          setTimeout(() => {
            document.querySelector(".next").click();
          }, 1000);
          
        }
      }, 1000);
    };
    funcTimer();

    mainThree.append(p);
    p.append(span); 

    const br = document.createElement("br");
    p.append(br);
    const form = document.createElement("form");
    form.classList = "questions";
    mainThree.append(form);
    for (
      let i = 0;
      i <
      Q["categories"][indexCategory][nameOfCategory]["questions"][index][
        "answers"
      ].length;
      i++
    ) {
      const div2 = document.createElement("div");
      div2.classList = "quizoption";
      const input = document.createElement("input");
      input.type = "radio";
      input.id = i + 1;
      input.name = "radio";
      input.value =
        Q["categories"][indexCategory][nameOfCategory]["questions"][index][
          "answers"
        ][i];
      const label = document.createElement("label");
      label.for =
        Q["categories"][indexCategory][nameOfCategory]["questions"][index][
          "answers"
        ][i];
      label.innerText =
        Q["categories"][indexCategory][nameOfCategory]["questions"][index][
          "answers"
        ][i];
      form.append(div2);
      div2.append(input, label);
      input.addEventListener("click", (event) => {
        audio.play();
        Answers.push(event.target.value);
        localStorage.setItem("Answers", Answers);
        if (
          event.target.value ===
          Q["categories"][indexCategory][nameOfCategory]["questions"][index][
            "correctAnswer"
          ]
        ) {
          ++grade;
        }
      });
    }

    const buttonNext = document.createElement("button");
    buttonNext.type = "button";
    buttonNext.classList = "next";
    buttonNext.disabled = true;

    if (
      index ===
      Q["categories"][indexCategory][nameOfCategory]["questions"].length - 1
    ) {
      buttonNext.innerText = "Finish";
    } else {
      buttonNext.innerText = "Submit Answer";
    }
    mainThree.append(buttonNext);
    const meter = document.createElement("div");
    meter.classList = "meter";
    mainThree.append(meter);
    const spanOfProgressOne = document.createElement("span");
    const spanOfProgressTwo = document.createElement("span");
    spanOfProgressTwo.classList = "progress";
    meter.append(spanOfProgressOne);
    spanOfProgressOne.append(spanOfProgressTwo);
    document.querySelector(".questions").addEventListener("click", (event) => {
      if (event.target && event.target.matches("input")) {
        buttonNext.disabled = false;
      }
    });
    buttonNext.addEventListener("click", (event) => {
      // /Math.floor(Math.random() *  (10 - 1 + 1)) + 1
      ++index;
      my_end_width += 10;
      document.documentElement.style.setProperty(
        "--my-end-width",
        `${my_end_width}%`
      );
      quiz();
    });
  }
};

const categories = () => {
  body.innerText = "";
  const mainTwo = document.createElement("main");
  mainTwo.id = "mainTwo";
  const h1 = document.createElement("h1");
  h1.classList = "heading";
  h1.innerText = "Categories";
  const p = document.createElement("p");
  p.classList = "subHeading";
  p.innerText =
    "To Take the Quiz you need to choose any of the categories. Discover unique questions that test your knowledge.we have three quizzes each quiz has enrich information and questions to expand your information in the field that you need to take it.";
  const div = document.createElement("div");
  div.classList = "categories";
  const buttonOne = document.createElement("button");
  buttonOne.id = `categoryOne`;
  const buttonTwo = document.createElement("button");
  buttonTwo.id = `categoryTwo`;
  const buttonThree = document.createElement("button");
  buttonThree.id = `categoryThree`;
  const img1 = document.createElement("img");
  const img2 = document.createElement("img");
  const img3 = document.createElement("img");
  img1.src = "calculator-fill.svg";
  img2.src = "code-slash.svg";
  img3.src = "book.svg";
  img1.alt = "math image";
  img2.alt = "code  image";
  img3.alt = "Science image";
  const ButtonOne_h3 = document.createElement("h3");
  const ButtonTwo_h3 = document.createElement("h3");
  const ButtonThree_h3 = document.createElement("h3");
  ButtonOne_h3.innerText = "Math Category";
  ButtonTwo_h3.innerText = "Code Category";
  ButtonThree_h3.innerText = "Science Category";
  body.append(mainTwo);
  mainTwo.append(h1, p, div);
  div.append(buttonOne, buttonTwo, buttonThree);
  buttonOne.append(img1, ButtonOne_h3);
  buttonTwo.append(img2, ButtonTwo_h3);
  buttonThree.append(img3, ButtonThree_h3);
  buttonOne.addEventListener("click", (event) => {
    indexCategory = 0;
    nameOfCategory = "Maths";
    localStorage.setItem("CategoryIndex", indexCategory);
    localStorage.setItem("CategoryName", nameOfCategory);
    quiz();
  });
  buttonTwo.addEventListener("click", (event) => {
    nameOfCategory = "Codes";
    indexCategory = 1;
    localStorage.setItem("CategoryIndex", indexCategory);
    localStorage.setItem("CategoryName", nameOfCategory);
    quiz();
  });
  buttonThree.addEventListener("click", (event) => {
    nameOfCategory = "Sciences";
    indexCategory = 2;
    localStorage.setItem("CategoryIndex", indexCategory);
    localStorage.setItem("CategoryName", nameOfCategory);
    quiz();
  });
};

const welcomePage = () => {
  body.innerText = "";
  const main = document.createElement("main");
  main.id = "main";
  const div = document.createElement("div");
  div.classList = "welcomePageContent";
  const h3 = document.createElement("h3");
  h3.classList = "quizHeader";
  h3.innerText = Q.header;
  const p = document.createElement("p");
  p.classList = "quizParagraph";
  p.innerText = Q.QuizParagraph;
  const startQuiz = document.createElement("button");
  startQuiz.classList = "startQuizCTA";
  startQuiz.innerText = Q.QuizParagraph;
  startQuiz.type = "button";
  startQuiz.innerText = "Start Quiz";
  // <h2>HacktoberFest 2023</h2>
  const headerTwo = document.createElement("h2");
  headerTwo.innerText = "Hello Friend! Take Our Quiz";
  // img.src = Q.imgSrc;
  // img.alt = "PlaceHolder image";
  body.append(main);
  main.append(div);
  div.append(h3, p, startQuiz);
  startQuiz.addEventListener("click", (event) => {
    categories();
  });
};
welcomePage();
