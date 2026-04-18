const sections = document.querySelectorAll(".reveal");
const counter = document.getElementById("counter");
const volunteerSection = document.getElementById("volunteer");

let counterStarted = false;

function showSections() {
  sections.forEach(function (section) {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
      section.classList.add("active");
    }
  });
}

function startCounter() {
  let count = 0;
  const target = 70;

  const interval = setInterval(function () {
    count++;
    counter.textContent = count;

    if (count === target) {
      clearInterval(interval);
    }
  }, 30);
}

window.addEventListener("scroll", function () {
  showSections();

  const volunteerTop = volunteerSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (volunteerTop < windowHeight - 100 && !counterStarted) {
    startCounter();
    counterStarted = true;
  }
});

showSections();