// const header = document.querySelector("#header");
const main = document.querySelector("#main");
const mainTwo = document.querySelector("#mainTwo");
const body = document.querySelector("body");
let index = 0;
let indexCategory;
let nameOfCategory;
let grade = 0;
let status = "";
const Q = {
  header: "Welcome Take Quiz",
  QuizParagraph:
    "dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
  imgSrc: "Portrait-of-a-cat-with-whiskers-visible.webp",
  categories: [
    {
      maths: {
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
      codes: {
        questions: [
          {
            id: 1,
            q: "Inside which HTML element do we put the JavaScript?",
            answers: ["<javascript>", " <scripting>", "<script>", "<js>"],
            correctAnswer: "<script>",
          },
          {
            id: 2,
            q: 'What is the correct JavaScript syntax to change the content of the HTML element below? \n \n <p id="demo">This is a demonstration.</p>?',
            answers: [
              ' document.getElement("p").innerHTML = "Hello World!";',
              'document.getElementById("demo").innerHTML = "Hello World!";',
              ' #demo.innerHTML = "Hello World!";',
              ' document.getElement("p").innerHTML = "Hello World!";',
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
            q: "Which Tag that will be used to link CSS with HTML",
            answers: ["<head>", "<body>", "<style>", "<html>"],
            correctAnswer: "<head>",
          },
          {
            id: 8,
            q: "Which CSS that will be used to change the font",
            answers: ["font-size", "font", "font-family", "font-weight"],
            correctAnswer: "font-family",
          },
          {
            id: 9,
            q: "Which CSS that will be used to change backGround of the text",
            answers: ["color", "background-color", "text-color", "textColor"],
            correctAnswer: "background-color",
          },
          {
            id: 10,
            q: "Which CSS that will be used to create space around elements",
            answers: ["margin", "padding", "space", "whiteSpace"],
            correctAnswer: "margin",
          },
        ],
      },
    },
    {
      sciences: {
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

const Quiz = {
  header: "Welcome Take Quiz",
  QuizParagraph:
    "dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
  imgSrc: "Portrait-of-a-cat-with-whiskers-visible.webp",
  questions: [
    {
      id: 1,
      q: "Inside which HTML element do we put the JavaScript?",
      answers: ["<javascript>", " <scripting>", "<script>", "<js>"],
      correctAnswer: "<script>" /*add more key/value if need*/,
    },
    {
      id: 2,
      q: 'What is the correct JavaScript syntax to change the content of the HTML element below? \n \n <p id="demo">This is a demonstration.</p>',
      answers: [
        ' document.getElement("p").innerHTML = "Hello World!";',
        'document.getElementById("demo").innerHTML = "Hello World!";',
        ' #demo.innerHTML = "Hello World!";',
        ' document.getElement("p").innerHTML = "Hello World!";',
      ],
      correctAnswer:
        'document.getElementById("demo").innerHTML = "Hello World!";' /*add more key/value if need*/,
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
      correctAnswer: "function myFunction()" /*add more key/value if need*/,
    },
    {
      id: 4,
      q: "Which CSS that will be used for change text color",
      answers: ["color", "background-color", "text-color", "textColor"],
      correctAnswer: "color" /*add more key/value if need*/,
    },
  ],
};

const ScorePage = () => {
  body.innerText = "";
  const mainFour = document.createElement("main");
  mainFour.id = "mainFour";
  const audioPassed = document.createElement("audio");
  audioPassed.allow="autoplay" 
  audioPassed.src="yay.mp3";
  mainFour.append(audioPassed);
  const audioFail = document.createElement("audio");
  audioFail.allow="autoplay" 
  audioFail.src="Fail.wav";
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
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo";
  const div2 = document.createElement("div");
  div2.classList = "score";
  const headerThree = document.createElement("h3");
  headerThree.classList = "finishHeader";
  headerThree.innerText = `Your Score is : `;
  const spanOne = document.createElement("span");
  spanOne.classList = "grade";
  spanOne.innerText = `${grade} out of 10`;
  const spanTwo = document.createElement("span");
  spanTwo.classList = "status";
  if (grade >= 5) {
    audioPassed.play();
    status = "Passed";
  } else {
    audioFail.play();
    status = "Failed";
  }
  spanTwo.innerText = ` You Are ${status}`;
  body.append(mainFour);
  mainFour.append(div);
  div.append(h3, p, div2);
  div2.append(headerThree);
  headerThree.append(spanOne, spanTwo);
};

/* <main class="mainFour">
<div class="scorePage">
        <h3 class = "finishHeader">You Finished the Quiz</h3>
        <p class = "finishParagraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam molestiae placeat porro, eius
            temporibus omnis quos neque iusto cum sunt libero provident tempore sed obcaecati praesentium
            reiciendis nam accusantium in.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis sit voluptate blanditiis,
            adipisci debitis necessitatibus dignissimos quaerat! Voluptas expedita, recusandae at dolor corrupti
            sit non repellat porro, nam deleniti explicabo!
        </p>
    <div class="score"><h3>Your Score is : <span class ="grade">9 out of 10 </span><span class ="status">You Are Passed</span></h3></div>
</div>
<div class="imgScorePage">placeHolder</div>

</main> */

/*   <main id="main">


        <div class="welcomePageContent">
            <h3 class="quizHeader">Welcome Take the Quiz</h3>
            <p class="quizParagraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nesciunt reiciendis ipsum
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, asperiores? Est maxime natus suscipit fuga magnam praesentium vero beatae
            </p>
            <button type="button" class="startQuizCTA">Start Quiz</button>
        </div>
        <div class="quizImg">
            <img src="Portrait-of-a-cat-with-whiskers-visible.webp" alt="catPlaceHolder" />
        </div>

    </main> */

// const timer= ()=>{
//     let date = new Date();
//     let sec = date.getSeconds();
//     let min = date.getMinutes();

// }
//console.log(window.setInterval(timer, 1000));

const quiz = () => {
  body.innerText = "";
  const mainThree = document.createElement("main");
  mainThree.id = "mainThree";
  const h3 = document.createElement("h3");
  h3.innerText = `${nameOfCategory} Quiz`;
  // const h5 = document.createElement("h5");
  // h5.classList = "timer";
  // h5.innerText = "Timer";

  body.append(mainThree);
  mainThree.append(h3);
  const audio = document.createElement("audio");
  audio.allow="autoplay" 
  audio.src="clickinput.wav";
  mainThree.append(audio);
  const para = document.createElement("p");
  para.classList = "HintForTimer";
  mainThree.append(para);
  const funcTimerHint = () => {
    para.innerHTML = "";
    setTimeout(function () {
      para.innerHTML = `Please Try to answer before the time is over as it will move to next question automatically.`;
      para.style.fontWeight = "bold";
    }, 0);
  };
  funcTimerHint();

  //console.log(Quiz["questions"][index][keys])
  // const p = document.createElement("p");
  // p.classList = "question";
  // p.innerText = Quiz["questions"][index]["q"];
  // mainThree.append(p)

  // Quiz["questions"][index]["q"]

  if (
    index === Q["categories"][indexCategory][nameOfCategory]["questions"].length
  ) {
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    ScorePage();
    // console.log(index);
    // console.log(
    //   Q["categories"][indexCategory][nameOfCategory]["questions"].length
    // );
    // console.log("finish");
  } else {
    const p = document.createElement("p");
    p.classList = "question";
    p.innerText = `Question ${Q["categories"][indexCategory][nameOfCategory]["questions"][index]["id"]} :  ${Q["categories"][indexCategory][nameOfCategory]["questions"][index]["q"]}`;
    const br = document.createElement("br");
    p.append(br);
    const span = document.createElement("span");
    span.classList = "Timer";
  
    const funcTimer = () => {
      let time = 120;    
      //  / let date = new Date(time * 1000);
      a = setInterval(() => {
        time =
        time--;
        span.innerText = `The Timer is : ${time}`;
        if (time === 0) {
          span.style.display = "block";
          span.style.color = "red";
          span.style.fontSize = "16px";
          span.innerText = "The Time is finished";
          document.querySelector(".next").disabled = false;
          clearInterval(a);
          setTimeout(function () {
            document.querySelector(".next").click();
          }, 0);
        }
      },1000);

      return a;
    };
    funcTimer();
    //h5.innerText = `${funcTimer()}`;
    p.append(span);
    mainThree.append(p);
    const div = document.createElement("div");
    div.classList = "questions";
    mainThree.append(div);
    //Q["categories"][0]["maths"]["questions"][0]["answers"]
    for (
      let i = 0;
      i <
      Q["categories"][indexCategory][nameOfCategory]["questions"][index][
        "answers"
      ].length;
      i++
    ) {
      const div2 = document.createElement("div");
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
      div.append(div2);
      div2.append(input, label);
      input.addEventListener("click", (event) => {
        audio.play()
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
      buttonNext.innerText = "Next";
    }
    mainThree.append(buttonNext);
    document.querySelector(".questions").addEventListener("click", (event) => {
      if (event.target && event.target.matches("input")) {
        
        buttonNext.disabled = false;
      }
    });
    buttonNext.addEventListener("click", (event) => {
      // /Math.floor(Math.random() *  (10 - 1 + 1)) + 1
      index++;
      quiz();
    });
  }
};


const quiz2 = () => {
  body.innerText = "";
  const mainThree = document.createElement("main");
  mainThree.id = "mainThree";
  const h3 = document.createElement("h3");
  h3.innerText = "Code Quiz";
  // const h5 = document.createElement("h5");
  // h5.classList = "timer";
  // h5.innerText = "Timer";
  body.append(mainThree);
  mainThree.append(h3);

  //console.log(Quiz["questions"][index][keys])
  // const p = document.createElement("p");
  // p.classList = "question";
  // p.innerText = Quiz["questions"][index]["q"];
  // mainThree.append(p)

  // Quiz["questions"][index]["q"]

  if (index === Quiz["questions"].length) {
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    ScorePage();
    console.log(index);
    console.log(Quiz["questions"].length);
    console.log("finish");
  } else {
    const p = document.createElement("p");
    p.classList = "question";
    p.innerText = `Question ${Quiz["questions"][index]["id"]} :- ${Quiz["questions"][index]["q"]}`;
    mainThree.append(p);
    const div = document.createElement("div");
    div.classList = "questions";
    mainThree.append(div);
    for (let i = 0; i < Quiz["questions"][index]["answers"].length; i++) {
      const div2 = document.createElement("div");
      const input = document.createElement("input");
      input.type = "radio";
      input.id = i + 1;
      input.name = "radio";
      input.value = Quiz["questions"][index]["answers"][i];
      const label = document.createElement("label");
      label.for = Quiz["questions"][index]["answers"][i];
      label.innerText = Quiz["questions"][index]["answers"][i];
      div.append(div2);
      div2.append(input, label);
      input.addEventListener("click", (event) => {
        if (event.target.value === Quiz["questions"][index]["correctAnswer"]) {
          ++grade;
        }
      });
    }

    const buttonNext = document.createElement("button");
    buttonNext.type = "button";
    buttonNext.classList = "next";
    if (index === Quiz["questions"].length - 1) {
      buttonNext.innerText = "Finish";
    } else {
      buttonNext.innerText = "Next";
    }
    mainThree.append(buttonNext);
    buttonNext.addEventListener("click", (event) => {
      index++;
      quiz();
      // let ele = document.querySelectorAll("input");
      // console.log
      // ele.forEach(function(element , index){
      //     if(element.checked){

      //         index++;
      //         quiz();
      //     }

      // else {
      //     console.log("req")
      // }
      // })
    });
  }
};

const categories = () => {
  body.innerText = "";
  const mainTwo = document.createElement("main");
  mainTwo.id = "mainTwo";
  const h1 = document.createElement("h1");
  h1.classList = "heading";
  h1.innerText = "Choose Your Category";
  const p = document.createElement("p");
  p.classList = "subHeading";
  p.innerText =
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo";
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
  img1.src = "math.png";
  img2.src = "code-icon.jpg";
  img3.src = "science.png";
  img1.alt = "";
  img2.alt = "";
  img3.alt = "";
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
    nameOfCategory = "maths";
    quiz();
  });
  buttonTwo.addEventListener("click", (event) => {
    nameOfCategory = "codes";
    indexCategory = 1;
    quiz();
  });
  buttonThree.addEventListener("click", (event) => {
    nameOfCategory = "sciences";
    indexCategory = 2;
    quiz();
  });
};
{/* <audio controls autoplay muted>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio> */}
const welcomePage = () => {
  const main = document.createElement("main");
  main.id = "main";
  const div = document.createElement("div");
  div.classList = "welcomePageContent";
  const h3 = document.createElement("h3");
  h3.classList = "quizHeader";
  h3.innerText = Quiz.header;
  const p = document.createElement("p");
  p.classList = "quizParagraph";
  p.innerText = Quiz.QuizParagraph;
  const startQuiz = document.createElement("button");
  startQuiz.classList = "startQuizCTA";
  startQuiz.innerText = Quiz.QuizParagraph;
  startQuiz.type = "button";
  startQuiz.innerText = "Start Quiz";
  const div2 = document.createElement("div");
  div2.classList = "quizImg";
  const img = document.createElement("img");
  img.src = Quiz.imgSrc;
  img.alt = "PlaceHolder image";
  body.append(main);
  main.append(div, div2);
  div.append(h3, p, startQuiz);
  div2.append(img);
  const audio = document.createElement("audio");
  audio.allow="autoplay" 
  audio.src="intro.wav";
  main.append(audio);
  img.addEventListener("click" , (event) => {
    audio.play();
  });
  
// const source  = document.createElement("source")
// source.src="intro.wav";
// source.type = "audio/wav";

//body.append(audio)
//audio.append(source)

//<embed name="myMusic" loop="true" hidden="true" src="Music.mp3"></embed>
// audio.addEventListener("click" , (event) => {
//   audio.play()
// })

  startQuiz.addEventListener("click", (event) => {
    
    categories();
    // const h1 = document.createAttribute("h1");
    // h1.classList = "heading";
    // h1.innerText = "Choose Your Category";
    // const p = document.createAttribute("p");
    // p.classList = "subHeading";
    // p.innerText =
    //   "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo";
    // const div = document.createAttribute("div");
    // div.classList = "categories";
    // const buttonOne = document.createAttribute("button");
    // buttonOne.id = `categoryOne`;
    //   const buttonTwo = document.createAttribute("button");
    //   buttonTwo.id = `categoryTwo`;
    //   const buttonThree = document.createAttribute("button");
    //   buttonThree.id = `categoryThree`;
    //   div.append(buttonOne , buttonTwo , buttonThree)
    // main.append(h1 , p , div)
  });
};
welcomePage();
/* 
    <main id="mainTwo">
        <h1 class="heading">Choose Your Category</h1>
        <p class="subHeading">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Nemo quo, quisquam temporibus aspernatur vitae voluptates, maxime odio, iste
            molestias alias dolore maiores sed ea? Voluptatibus perferendis nobis suscipit hic et!Tempora veniam, eaque
            minima vitae culpa consequatur doloremque incidunt optio quas, minus repellat earum quibusdam excepturi
            molestias dolore laboriosam, asperiores voluptatem impedit?</p>
        <div class="categories">
            <button id="categoryOne"><img src="math.png" />
                <h3>Math Category</h3>
            </button>
            <button id="categoryTwo"><img src="code-icon.jpg" />
                <h3>Code Category</h3>
            </button>
            <button id="categoryThree"><img src="science.png" />
                <h3>Science Category</h3>
            </button>
        </div>

*/
