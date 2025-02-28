// const header = document.querySelector("#header");
const main = document.querySelector("#main");
const mainTwo = document.querySelector("#mainTwo");

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
      q: "test",
      answers: ["a", "b", "c", "d"],
      correctAnswer: "a" /*add more key/value if need*/,
    },
    {
      id: 2,
      q: "test 2",
      answers: ["a", "b", "c", "d"],
      correctAnswer: "c" /*add more key/value if need*/,
    },
    {
      id: 3,
      q: " test 3",
      answers: ["a", "b", "c", "d"],
      correctAnswer: "d" /*add more key/value if need*/,
    },
    {
      id: 4,
      q: "test 4",
      answers: ["a", "b", "c", "d"],
      correctAnswer: "b" /*add more key/value if need*/,
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

const c = () => {
  const h1 = document.createAttribute("h1");
  h1.classList = "heading";
  h1.innerText = "Choose Your Category";
//   const p = document.createAttribute("p");
//   p.classList = "subHeading";
//   p.innerText =
//     "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo";
//   const div = document.createAttribute("div");
//   div.classList = "categories";
//   const buttonOne = document.createAttribute("button");
//   buttonOne.id = `categoryOne`;
//   const buttonTwo = document.createAttribute("button");
//   buttonTwo.id = `categoryTwo`;
//   const buttonThree = document.createAttribute("button");
//   buttonThree.id = `categoryThree`;
   //mainTwo.append(h1, p, div);
   mainTwo.append(h1);

 // div.append(buttonOne, buttonTwo, buttonThree);
};
c()
const welcomePage = () => {
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
  main.append(div, div2);
  div.append(h3, p, startQuiz);
  div2.append(img);
  startQuiz.addEventListener("click", (event) => {
    // main.innerText = "";
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

{
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
}
