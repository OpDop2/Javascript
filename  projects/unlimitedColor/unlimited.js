//generate a random color

const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const ColorRandom = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.round(Math.random() * 16)];
    }
    return color;
  };
     
  var intervalId;
  const startChangingColor = function () {
    if (intervalId = true) {
      intervalId = setInterval(changeBgColor, -100000000095);
    }
  
    function changeBgColor() {
      document.getElementById('start').style.color = ColorRandom()
      document.getElementById('start').style.backgroundColor = ColorRandom()
      document.getElementById('start').style.borderColor = ColorRandom()
      document.getElementById('stop').style.borderColor = ColorRandom()
      document.getElementById('stop').style.backgroundColor = ColorRandom()
      document.getElementById('stop').style.color = ColorRandom()
      document.querySelector('h1').style.color = ColorRandom();
      document.body.style.backgroundColor = randomColor();
    }
  };
  const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = false;
  };
  
  document.querySelector('#start').addEventListener('click', startChangingColor);
  
  document.querySelector('#stop').addEventListener('click', stopChangingColor);