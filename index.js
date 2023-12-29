const parameterOne = document.getElementById("firstParameter");
const firstTime = document.getElementById("firstTime");

const secondParameter = document.getElementById("secondParameter");
const secondTime = document.getElementById("secondTime");

const thirdParameter = document.getElementById("thirdParameter");
const thirdTime = document.getElementById("thirdTime");

const fourthParameter = document.getElementById("fourthParameter");
const fourthTime = document.getElementById("fourthTime");

const submitButton = document.getElementById("submitButton");
const verticalSubmitButton = document.getElementById("submitButtonV");
const diagramContainer = document.querySelector(".diagramContainer");

function formatarData(data) {
  const dataObj = new Date(data);
  const dia = String(dataObj.getDate()).padStart(2, "0");
  const mes = String(dataObj.getMonth() + 1).padStart(2, "0");
  const ano = dataObj.getFullYear();
  return `${dia}/${mes}/${ano}`;
}

function createVerticalDiagram() {
  const paramOneValue = parameterOne.value;
  const firstTimeValue = firstTime.value;

  const paramTwoValue = secondParameter.value;
  const secondTimeValue = secondTime.value;

  const paramThreeValue = thirdParameter.value;

  const paramFourValue = fourthParameter.value;

  const formattedFirstTime = formatarData(firstTimeValue);
  const formattedSecondTime = formatarData(secondTimeValue);

  const diagramHTML = `
  <div class="container">
  <div class="ball img-ball">
    <img class="imgV" src="https://imagepng.org/wp-content/uploads/2019/12/check-icone-3.png" alt="">
    <div class="text">
      <p>${paramOneValue}</p>
      <h4>${formattedFirstTime}</h4>
    </div>
  </div>
  <div class="arrow"></div>
  <div class="ball">
    <p>${paramTwoValue}</p>
    <h4>${formattedSecondTime}</h4>
  </div>
  <div class="arrow2"></div>
  <div class="ball2">
    <p>${paramThreeValue}</p>
  </div>
  <div class="arrow2"></div>
  <div class="ball2">
    <p>${paramFourValue}</p>
  </div>
</div>`;
  diagramContainer.innerHTML = diagramHTML;
}

function createDiagram() {
  const paramOneValue = parameterOne.value;
  const firstTimeValue = firstTime.value;

  const paramTwoValue = secondParameter.value;
  const secondTimeValue = secondTime.value;

  const paramThreeValue = thirdParameter.value;

  const paramFourValue = fourthParameter.value;

  const formattedFirstTime = formatarData(firstTimeValue);
  const formattedSecondTime = formatarData(secondTimeValue);
  // Criando a estrutura HTML com base nos valores obtidos
  const diagramHTML = `
  <div class="diagram">
  <div class="line1"></div>
  <div class="line2"></div>
  <div class="firstBallContainer">
    <div class="bola1"> <img class="imgH" src="https://imagepng.org/wp-content/uploads/2019/12/check-icone-3.png" alt=""></div>
    <div class="textbola1">
      <p>${paramOneValue}</p>
      <h4>${formattedFirstTime}</h4>
    </div>
  </div>
  <div>
    <img class="seta" src="./right-arrow-icon-on-transparent-background-free-png.webp" alt="">
  </div>
  <div class="firstBallContainer">
    <div class="bola2"></div>
    <div class="textbola1">
      <p>${paramTwoValue}</p>
      <h4>${formattedSecondTime}</h4>
    </div>
  </div>
  <img class="seta2" src="./right-arrow-icon-on-transparent-background-free-png.webp" alt="">

  <div class="firstBallContainer">
    <div class="bola3"></div>
    <div class="textbola3">
      <p>${paramThreeValue}</p>
      <h4></h4>
    </div>
  </div>
  <img class="seta2" src="./right-arrow-icon-on-transparent-background-free-png.webp" alt="">

  <div class="firstBallContainer">
    <div class="bola3"></div>
    <div class="textbola3">
      <p>${paramFourValue}</p>
      <h4></h4>
    </div>
  </div>
</div>
  `;

  // Adicionando a estrutura HTML à diagramContainer
  diagramContainer.innerHTML = diagramHTML;
}

submitButton.addEventListener("click", createDiagram);
verticalSubmitButton.addEventListener("click", createVerticalDiagram);
