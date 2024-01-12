const toggler = document.querySelector(".toggle");
const toggleIndicator = document.querySelector(".indicator");
const viewEl = document.querySelector(".price-view");

const mainPrice = document.querySelector(".main-price");

const rangeInputEl = document.getElementById("range");

toggler.addEventListener("click", () => {
  toggleIndicator.classList.toggle("clicked");
});

rangeInputEl.addEventListener("input", (e) => {
  let prefix;
  let rangeValue = Number(e.target.value);
  let monthlyPrice = mapNum(
    rangeValue,
    rangeInputEl.min,
    rangeInputEl.max,
    0,
    36
  ).toFixed(2);

  // switch (rangeValue) {
  //   case 10:
  //     monthlyPrice = 8;
  //     break;
  //   case 50:
  //     monthlyPrice = 12;
  //     break;
  //   case 100:
  //     monthlyPrice = 16;
  //     break;
  //   case 500:
  //     monthlyPrice = 24;
  //     break;
  //   case 1000:
  //     monthlyPrice = 36;
  //     break;
  //   default:
  //     monthlyPrice;
  //     break;
  // }
  if (rangeValue >= 1000) {
    prefix = "M";
  } else {
    prefix = "K";
  }

  viewEl.textContent = `${rangeValue}${prefix}`;
  mainPrice.textContent = `$${monthlyPrice}`;
  console.log(monthlyPrice);
});

function mapNum(value, in_min, in_max, out_min, out_max) {
  return ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}
