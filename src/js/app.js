const toggler = document.querySelector(".toggle");
const toggleIndicator = document.querySelector(".indicator");
const viewEl = document.querySelector(".price-view");

const priceText = document.querySelector(".accent");

const mainPrice = document.querySelector(".main-price");

const rangeInputEl = document.getElementById("range");

let monthlyPrice = 0;
let yearlyPrice = 0;

toggler.addEventListener("click", () => {
  toggleIndicator.classList.toggle("clicked");
  if (toggleIndicator.classList.contains("clicked")) {
    priceText.textContent = "/year";
    mainPrice.textContent = yearlyPrice;
  } else {
    priceText.textContent = "/month";
    mainPrice.textContent = monthlyPrice;
  }
});

rangeInputEl.addEventListener("input", (e) => {
  let prefix;
  let rangeValue = Number(e.target.value);
  monthlyPrice = mapNum(
    rangeValue,
    rangeInputEl.min,
    rangeInputEl.max,
    0,
    36
  ).toFixed(2);
  yearlyPrice = (monthlyPrice * 12 * 0.75).toFixed(2);

  if (toggleIndicator.classList.contains("clicked")) {
    mainPrice.textContent = `$${yearlyPrice}`;
  } else {
    mainPrice.textContent = `$${monthlyPrice}`;
  }

  if (rangeValue >= 1000) {
    prefix = "M";
    viewEl.textContent = `1${prefix}`;
  } else {
    prefix = "K";
    viewEl.textContent = `${rangeValue}${prefix}`;
  }
});

function mapNum(value, in_min, in_max, out_min, out_max) {
  return ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}
