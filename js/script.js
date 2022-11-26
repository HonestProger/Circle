let elem = document.querySelector('.button');

const changePosition = () => {
  let randX = Math.random();
  let randY = Math.random();
  const circleSize = {
    width: elem.clientWidth,
    heigth: elem.clientHeight
  };

  const windowWidth = window.innerWidth - circleSize.width;
  const windowheigth = window.innerHeight - circleSize.heigth;

  let randXMult = windowheigth * randX;
  let randXP = randXMult + 'px';
  let randYMult = windowWidth * randY;
  let randYP = randYMult + 'px';


  elem.style.left = randYP;
  elem.style.top = randXP;
};


setInterval(changePosition, 1000);
