let app = document.documentElement; // the whole document object
let dark_mode_btn = document.getElementById("btn"); // the dark mode togglr button
let container = document.getElementById("res");

// onload function that is fired when the document loads
const onload = () => {
  switchTheme();
  getData();
};

// function that turn css variables to dark
const onDarkMode = () => {
  app.style.setProperty("--primary-color", "#222222");
  app.style.setProperty("--primary-font", "#ffffff");
  app.style.setProperty("--primary-header", "#000000");
  app.style.setProperty("--primary-body", "#414141");
  app.style.setProperty("--primary-card", "#363636");
  dark_mode_btn.innerHTML = "Set Light theme";
};

// fucntion that turns css variables to light
const onLightMode = () => {
  app.style.setProperty("--primary-color", "pink");
  app.style.setProperty("--primary-font", "#000000");
  app.style.setProperty("--primary-header", "#f76a8c");
  app.style.setProperty("--primary-body", "#ffffff");
  app.style.setProperty("--primary-card", "#be79df");
  dark_mode_btn.innerHTML = "Set Dark theme";
};

// fucntion that switched theme automatically whenever the page loads
const switchTheme = () => {
  let themedata = localStorage.getItem("thememode");
  if (themedata === "dark") {
    onDarkMode();
  } else {
    onLightMode();
  }
};

// function to switch theme manually whenever the user clicks it
dark_mode_btn.addEventListener("click", () => {
  let themedata = localStorage.getItem("thememode");
  if (themedata === "dark") {
    onLightMode();
    localStorage.setItem("thememode", "white");
  } else {
    onDarkMode();
    localStorage.setItem("thememode", "dark");
  }
});

// fucntion to get remote data in (backend integration)
const getData = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(datas => {
      datas.map(data => {
        console.log(data);
        createCard(data.name, data.username);
      });
    });
};

const createCard = (title, content) => {
  let card = document.createElement("div", { class: "card" });
  let cardTitle = document.createElement("h3");
  let cardContent = document.createElement("p");
  // setting up class name for elements
  card.setAttribute("class","card");
  // adding values
  cardTitle.innerText = title;
  cardContent.innerText = content;
  // appending created elements to the parent element
  card.appendChild(cardTitle);
  card.appendChild(cardContent);
  container.appendChild(card);
};
