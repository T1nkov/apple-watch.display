function getobj() {
  const date = new Date();

  return obj;
}

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

      document.querySelector(".year").innerHTML = 'since.'+this.year;
    },
  };
  obj.update();
}

setInterval(updateDate, 1000);
