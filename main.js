// const header = document.querySelector("#header");
const main = document.querySelector("#main");
const mainTwo = document.querySelector("#mainTwo");
const body = document.querySelector("body");

// const questions = [
//     categories = [
//         Maths = [{
//         id: 1,
//         q: "test",
//         answers: ["a" , "b" , "c" , "d"],
//         correctAnswer: "a" /*add more key/value if need*/,
//       },
//       {
//         id: 2,
//         q: "test 2",
//         answers: ["a" , "b" , "c" , "d"],
//         correctAnswer: "c" /*add more key/value if need*/,
//       },
//       {
//         id: 3,
//         q: " test 3",
//         answers: ["a" , "b" , "c" , "d"],
//         correctAnswer: "d" /*add more key/value if need*/,
//       },
//       {
//         id: 4,
//         q: "test 4",
//         answers: ["a" , "b" , "c" , "d"],
//         correctAnswer: "b" /*add more key/value if need*/,
//       },
//     ] ,
// ],

// [{}]
// ]

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
  h3.innerText = "Code Quiz";
  // const h5 = document.createElement("h5");
  // h5.classList = "timer";
  // h5.innerText = "Timer";
  body.append(mainThree);
  mainThree.append(h3);
  Quiz["questions"].forEach(function (element, index) {
    //console.log(element.q)
    const p = document.createElement("p");
    p.classList = "question";
    p.innerText = element.q;
    mainThree.append(p)
    const div = document.createElement("div");
    div.classList = "questions";
    const div2 = document.createElement("div");
    const input = document.createElement("input");
    input.type = "radio";
    input.id = element.id;
    input.name = "radio";
    input.value = element.q;
    const label = document.createElement("label");
    label.for = element.q;
    label.innerText = element.q;
   
    mainThree.append(div);
    div.append(div2);
    div2.append(input , label);
  });
  // Quiz.forEach(element , index=> {
  //     console.log(element.questions[index])
  //
  // });
};

{
  /* <main id="mainThree">
    <h3>Code Quiz</h3>
<p class ="question">Lorem ipsum dolor sit amet consectetur adipisicing elit. At veniam sunt autem, suscipit cum dolore, nesciunt error, omnis reiciendis delectus neque magni. Architecto quidem reprehenderit consequatur! Ducimus quisquam qui nobis.</p>
<h5 class = "timer">Timer</h5>
<div class ="questions">  
    <div >
      <input type="radio" id="q1" name="radio" value="a" />
      <label for="a">Inside which HTML element do we put the JavaScript?</label>
    </div>
  
    <div>
      <input type="radio" id="q2" name="radio" value="b" />
      <label for="b">What is the correct JavaScript syntax to change</label>
    </div>
  
    <div>
      <input type="radio" id="q3" name="radio" value="c" />
      <label for="c">How do you create a function in JavaScript?</label>
    </div>
    
    <div>
        <input type="radio" id="q4" name="radio" value="d" />
        <label for="d">Which CSS that will be used for change text color</label>
      </div>
    </div>
  


   </main> */
}

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
  buttonTwo.addEventListener("click", (event) => {
    quiz();
  });
};

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
