let testimonialsProfiles = document.querySelectorAll(
  ".testimonials__image-profile"
);
let testimonialsTexts = document.querySelectorAll(".testimonials__text");
let btnPrev = document.querySelector("#button-previous");
let btnNext = document.querySelector("#button-next");

let slideIdx = 0;
let slideLength = 1;

btnPrev.addEventListener("click", slideLeft);
btnNext.addEventListener("click", slideRight);

function slideLeft(e) {
  testimonialsProfiles.forEach((image) => image.classList.add("hidden"));
  testimonialsTexts.forEach((text) => text.classList.add("hidden"));
  slideIdx--;
  if (slideIdx < slideLength - 1) {
    slideIdx = slideLength;
  }

  testimonialsProfiles[slideIdx].classList.remove("hidden");
  testimonialsTexts[slideIdx].classList.remove("hidden");
}

function slideRight(e) {
  testimonialsProfiles.forEach((image) => image.classList.add("hidden"));
  testimonialsTexts.forEach((text) => text.classList.add("hidden"));
  slideIdx++;
  if (slideIdx > slideLength) {
    slideIdx = 0;
  }
  testimonialsProfiles[slideIdx].classList.remove("hidden");
  testimonialsTexts[slideIdx].classList.remove("hidden");
}
