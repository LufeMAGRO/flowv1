const parameterOne = document.getElementById("firstParameter");
const firstTime = document.getElementById("firstTime");

const secondParameter = document.getElementById("secondParameter");
const secondTime = document.getElementById("secondTime");

const thirdParameter = document.getElementById("thirdParameter");
const thirdTime = document.getElementById("thirdTime");

const fourthParameter = document.getElementById("fourthParameter");
const fourthTime = document.getElementById("fourthTime");

const submitButton = document.getElementById("submitButton");
const diagramContainer = document.querySelector(".diagramContainer");

function formatarData(data) {
  const dataObj = new Date(data);
  const dia = String(dataObj.getDate()).padStart(2, "0");
  const mes = String(dataObj.getMonth() + 1).padStart(2, "0");
  const ano = dataObj.getFullYear();
  return `${dia}/${mes}/${ano}`;
}

function createDiagram() {
  const paramOneValue = parameterOne.value;
  const firstTimeValue = firstTime.value;

  const paramTwoValue = secondParameter.value;
  const secondTimeValue = secondTime.value;

  const paramThreeValue = thirdParameter.value;
  const thirdTimeValue = thirdTime.value;

  const paramFourValue = fourthParameter.value;
  const fourthTimeValue = fourthTime.value;

  const formattedFirstTime = formatarData(firstTimeValue);
  const formattedSecondTime = formatarData(secondTimeValue);
  const formattedThirdTime = formatarData(thirdTimeValue);
  const formattedFourthTime = formatarData(fourthTimeValue);
  // Criando a estrutura HTML com base nos valores obtidos
  const diagramHTML = `
    <div class="diagram">
      <div class="line2"></div>
      <div class="line"></div>
      <div class="firstBallContainer">
        <div class="bola1"> <img src="https://imagepng.org/wp-content/uploads/2019/12/check-icone-3.png" alt=""></div>
        <div class="textbola1">
          <p>${paramOneValue}</p>
          <h4>${formattedFirstTime}</h4>
        </div>
      </div>
      <div class="firstBallContainer">
        <div class="bola2"></div>
        <div class="textbola1">
          <p>${paramTwoValue}</p>
          <h4>${formattedSecondTime}</h4>
        </div>
      </div>
      <div class="firstBallContainer">
        <div class="bola3"></div>
        <div class="textbola1">
          <p>${paramThreeValue}</p>
          <h4></h4>
        </div>
      </div>
      <div class="firstBallContainer">
        <div class="bola3"></div>
        <div class="textbola1">
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
