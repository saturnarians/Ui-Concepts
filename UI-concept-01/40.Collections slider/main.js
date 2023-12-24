console.clear();

const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");

const elSlider = document.querySelector(".slider");

const losSlides = Array.from(elSlider.querySelectorAll(".slide"));

let currentSlide = 0;

losSlides.forEach((slide) => {
  slide.addEventListener("click", () => {
    elSlider.dataset.state =
      elSlider.dataset.state === "full" ? "slides" : "full";
  });
});

function setCurrentSlide(index) {
  console.log(index);
  losSlides.forEach((slide) => delete slide.dataset.current);
  currentSlide = index;
  losSlides[index].dataset.current = true;

  losSlides.forEach((slide, i) => {
    let offset = 0;
    if (i > index) {
      offset = 1;
    } else if (i < index) {
      offset = -1;
    }
    slide.style.setProperty("--offset", offset);
  });
}

setCurrentSlide(currentSlide);

prevButton.addEventListener("click", () => {
  setCurrentSlide(
    currentSlide - 1 < 0 ? losSlides.length - 1 : currentSlide - 1
  );
});

nextButton.addEventListener("click", () => {
  setCurrentSlide(currentSlide + 1 >= losSlides.length ? 0 : currentSlide + 1);
});
