// Exercises 1 ==> Every Time you click on Back to top button it will add 1 to count and console log the count.

let count = 0;
function onClickFooter() {
  const foo = document.querySelector("footer");
  foo.addEventListener("click", () => {
    count++;
    console.log(`button clicked ${count}`);
  });
}

onClickFooter();

// Exercises 2 add event function to toggle header contact to show header links

function toggleCollapse() {
  const nav = document.querySelector("#navbarHeader");
  const btn = document.querySelector("button.navbar-toggler");
  btn.addEventListener("click", () => {
    nav.classList.toggle("collapse");
  });
}

toggleCollapse();

// Exercises 3 write function to change html5 card's text colors when click on edit button

function onClickEditHtml5() {
  const card = document.querySelector(".album").querySelector(".row")
    .children[0];
  const editBtn = card.querySelector(".btn-outline-secondary");
  const cardText = card.querySelector("p.card-text");
  let status = false;
  editBtn.addEventListener("click", () => {
    if (status === false) {
      cardText.style.color = "red";
      status = true;
    } else if (status === true) {
      cardText.style.color = "black";
      status = false;
    }
  });
}

onClickEditHtml5();

// Exercises 4 write function to change html3 card's text colors when click on edit button

function onClickEditHtml3() {
  const card = document.querySelector(".album").querySelector(".row")
    .children[1];
  const editBtn = card.querySelector(".btn-outline-secondary");
  const cardText = card.querySelector("p.card-text");
  let status = false;
  editBtn.addEventListener("click", () => {
    if (status === false) {
      cardText.style.color = "green";
      status = true;
    } else if (status === true) {
      cardText.style.color = "black";
      status = false;
    }
  });
}

onClickEditHtml3();

// Exercises 5 write function to change js card's text colors when click on edit button

function onClickEditJs() {
  const card = document.querySelector(".album").querySelector(".row")
    .children[2];
  const editBtn = card.querySelector(".btn-outline-secondary");
  const cardText = card.querySelector("p.card-text");
  let status = false;
  editBtn.addEventListener("click", () => {
    if (status == false) {
      cardText.style.color = "blue";
      status = true;
    } else if (status == true) {
      cardText.style.color = "black";
      status = false;
    }
  });
}

onClickEditJs();

// Exercises 6 write function to change WiderCard card's text colors when click on edit button

function onClickEditWiderCard() {
  const card = document.querySelector(".album").querySelector(".row")
    .children[3];
  const editBtn = card.querySelector(".btn-outline-secondary");
  const cardText = card.querySelector("p.card-text");
  let status = false;
  editBtn.addEventListener("click", () => {
    if (status == false) {
      cardText.style.color = "white";
      status = true;
    } else if (status == true) {
      cardText.style.color = "black";
      status = false;
    }
  });
}

onClickEditWiderCard();
// Exercises 7  write function to change WiderCard card's text colors when click on edit button
function onClickEditBootstrap() {
  const card = document.querySelector(".album").querySelector(".row")
    .children[4];
  const editBtn = card.querySelector(".btn-outline-secondary");
  const cardText = card.querySelector("p.card-text");
  let status = false;
  editBtn.addEventListener("click", () => {
    if (status == false) {
      cardText.style.color = "#FF00FF";
      status = true;
    } else if (status == true) {
      cardText.style.color = "black";
      status = false;
    }
  });
}

onClickEditBootstrap();

// Exercises 8 write function to change Github card's text colors when click on edit button

function onClickEditGithub() {
  const card = document.querySelector(".album").querySelector(".row")
    .children[5];
  const editBtn = card.querySelector(".btn-outline-secondary");
  const cardText = card.querySelector("p.card-text");
  let status = false;
  editBtn.addEventListener("click", () => {
    if (status == false) {
      cardText.style.color = "#4B0082";
      status = true;
    } else if (status == true) {
      cardText.style.color = "black";
      status = false;
    }
  });
}

onClickEditGithub();

// Exercises 9 write a function to add href links to to facebook and twitter and email in header

function clickOnTwitter() {
  const twitter = document.querySelector("#twitter");
  twitter.addEventListener("click", () => {
    twitter.querySelector("a").setAttribute("href", "https://www.twitter.com");
  });
}

clickOnTwitter();

function clickOnFacebook() {
  const facebook = document.querySelector("#facebook");
  facebook.addEventListener("click", () => {
    facebook
      .querySelector("a")
      .setAttribute("href", "https://www.facebook.com");
  });
}

clickOnFacebook();

function clickOnEmail() {
  const email = document.querySelector("#email");
  email.addEventListener("click", () => {
    email.querySelector("a").setAttribute("href", "https://www.gmail.com");
  });
}

clickOnEmail();

// Exercises 10  write a function to change the order of the cards: <== button will put the first card at the end
//==> will do the reverse

function shuffleCards() {
  const grayBtn = document
    .querySelector("section.jumbotron")
    .querySelector(".btn-secondary");
  const row = document.querySelector("div.album").querySelector(".row");

  grayBtn.addEventListener("click", () => {
    let lastChild = row.lastElementChild;
    row.prepend(lastChild);
  });
}

shuffleCards();

function shuffleCards2() {
  const blueBtn = document
    .querySelector("section.jumbotron")
    .querySelector(".btn-primary");
  const row = document.querySelector("div.album").querySelector(".row");
  blueBtn.addEventListener("click", () => {
    let first = row.firstElementChild;
    row.append(first);
  });
}

shuffleCards2();
