let unlockBtn = document.querySelector(".unlockBtn");
const showDisplay = document.querySelector(".inside");
unlockBtn.onclick = function () {
  if (showDisplay.style.display == "none") {
    showDisplay.style.display = "flex";
    showDisplay.style.transition = "2s ease-in-out;";
  } else if (showDisplay.style.display == "flex") {
    showDisplay.style.display = "none";
    showDisplay.style.transition = "0.5s forwards";  
  }
};

function updateDate() {
  const date = new Date();
  const obj = {
    hour: date.getHours(),
    min: date.getMinutes(),
    sec: date.getSeconds(),
    year: date.getFullYear(),
    update: function () {
      if (this.sec < 10) {
        document.querySelector(".time").innerHTML =
          this.hour + ":" + this.min + ":" + "0" + this.sec;
      } else {
        document.querySelector(".time").innerHTML =
          this.hour + ":" + this.min + ":" + this.sec;
      }

      document.querySelector(".year").innerHTML = "since." + this.year;
    },
  };
  obj.update();
}

setInterval(updateDate, 1000);
