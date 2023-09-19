///-------------------------FRAGMENT VERSION RENDER SPEED INCREASED-----------------------///
//COMENTAR EL CODIGO, PENSAR EN AGREGAR TRANSICIONES, SEGURAMENTE ES ALGO COMO BEFORELOADING Y METER UN DIV
import { arrayFruitsX } from "/Dom/08_FRUITS/arrays.js";

const $main = document.querySelector("main");
const $containerCards = document.getElementById("containerCards");
const $searchBar = document.getElementById("searchBar");
const $userPanel = document.getElementById("userPanelX");
const $led = document.getElementById("ledLight");

const arrayFruits = arrayFruitsX;
let userText = "";
let isSomethingChecked = false;

const printer = (array, container, nombre, imagen) => {
  $led.classList.remove("led-red");
  const fragment = document.createDocumentFragment();
  array.forEach(elemento => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("cardFruits");

    const filterDiv = document.createElement("div");
    filterDiv.classList.add("filter");
    cardDiv.appendChild(filterDiv);

    const pElement = document.createElement("p");
    pElement.textContent = elemento[nombre].toUpperCase();
    cardDiv.appendChild(pElement);

    const imgElement = document.createElement("img");
    imgElement.src = elemento[imagen];
    imgElement.alt = elemento[nombre];
    cardDiv.appendChild(imgElement);

    fragment.appendChild(cardDiv);
  });

  container.innerHTML = "";
  container.appendChild(fragment);
};

const uiSounds = file => {
  let uiSound = new Audio(file);
  uiSound.play();
};

const searching = array => {
  $searchBar.addEventListener("keyup", event => {
    $containerCards.innerHTML = "";
    userText = event.target.value.toLowerCase();
    const filteredArray = array.filter(element => {
      return element.name.toLowerCase().includes(userText);
    });

    if (filteredArray.length !== 0) {
      $led.classList.remove("led-red");
    }
    if (filteredArray.length === 0) {
      $containerCards.innerHTML = `<span class="traditionalClass">SORRY WE DON'T HAVE THAT!</span>`;
      $led.classList.add("led-red");
    } else {
      printer(filteredArray, $containerCards, "name", "image");
      imageModal();
    }

    $searchBar.addEventListener("input", event => {
      if (event.target.value === "") {
        $led.classList.remove("led-red");
      }
      $containerCards.innerHTML = "";
      event.target.value === ""
        ? printer(array, $containerCards, "name", "image")
        : null;
      imageModal();
    });
  });
};

const imageModal = () => {
  const imagesCards = document.querySelectorAll("#containerCards img");

  imagesCards.forEach(img => {
    img.addEventListener("click", event => {
      uiSounds("/Dom/08_FRUITS/assets/sounds/ui-click.wav");
      const clickedImage = event.target;
      const fruitName = clickedImage.alt;
      const fruitData = arrayFruits.find(x => x.name === fruitName);
      if (fruitData) {
        const modal = document.createElement("div");
        modal.id = "modal";
        modal.innerHTML = `
          <img src="${clickedImage.src}" alt="${clickedImage.alt}">
          <div class="modalDiv">
          <p class="modalP"><span>Origin:</span> ${fruitData.origin}</p>
          <p class="modalP"><span>Description:</span> ${fruitData.description}</p>
          </div>
        `;

        $main.appendChild(modal);

        modal.addEventListener("click", x => {
          uiSounds("/Dom/08_FRUITS/assets/sounds/ui-close.wav");
          $main.removeChild(modal);
        });
      }
    });
  });
};

const createUnrepeatedList = (array, property) => {
  const types = array.map(x => {
    return x[property];
  });
  const noDuplicated = new Set(...[types]);
  const arrayNoDuplicated = [...noDuplicated];
  return arrayNoDuplicated;
};

const types = createUnrepeatedList(arrayFruits, "type");

const printer2 = (array, container) => {
  const fragment = document.createDocumentFragment();
  array.forEach(element => {
    const label = document.createElement("label");
    label.classList.add("custom-checkbox");
    label.setAttribute("for", element);

    label.innerHTML = `
      ${element}
      <input type="checkbox" id="${element}" name="${element}" value="${element}">
      <span class="checkmark"></span>
    `;

    fragment.appendChild(label);
  });

  container.innerHTML = "";
  container.appendChild(fragment);
};

printer(arrayFruits, $containerCards, "name", "image");
printer2(types, $userPanel);
imageModal();

const $checkboxes = document.querySelectorAll(".custom-checkbox");
const unrepeatedCategories = new Set();

$checkboxes.forEach(checkbox => {
  checkbox.addEventListener("change", event => {
    let activeCheckbox = event.target.value;
    event.target.checked
      ? unrepeatedCategories.add(activeCheckbox)
      : unrepeatedCategories.delete(activeCheckbox);
    const arrayOfActiveCheckbox = [...unrepeatedCategories];
    const filterByCheck = arrayFruits.filter(x => {
      return arrayOfActiveCheckbox.includes(x.type);
    });
    if (filterByCheck.length !== 0) {
      $containerCards.innerHTML = "";
      printer(filterByCheck, $containerCards, "name", "image");
      searching(filterByCheck);
      imageModal();
      isSomethingChecked = true;

    } else {
      $searchBar.value = "";
      $containerCards.innerHTML = "";
      searching(arrayFruits);
      printer(arrayFruits, $containerCards, "name", "image");
      imageModal();
      isSomethingChecked = false;
    }
    $searchBar.addEventListener("input", x => {
      if (isSomethingChecked === true) {
        printer(filterByCheck, $containerCards, "name", "image");
      }
    });
  });
});

searching(arrayFruits);
