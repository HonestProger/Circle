let elem = document.querySelector('.button');

function check() {
    const popup = document.getElementsByClassName('popup');
    if (document.getElementById('popup__input').checked = true) {
      for (var i=0;i<popup.length;i+=1){
        popup[i].style.display = 'block';
      }
    } else {
      popup.style.display = "none";
    }
  }
  
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
  
  
    elem.style.top = randXP;
    elem.style.left = randYP;
  };
  
  
  
  setInterval(changePosition, 1000);