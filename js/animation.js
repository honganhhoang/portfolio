 /*https://stackoverflow.com/questions/15564029/adding-to-window-onload-event*/
 window.onload = () => {
    const frames = [
      'asset/img/me1.png',
      'asset/img/me2.png',
      'asset/img/me3.png'
    ];

    const img = document.getElementById('illustration');
    let animationInterval = null;
    let currentFrame = 0;

    img.addEventListener('click', () => {
      if (animationInterval === null) {
        animationInterval = setInterval(() => {
          currentFrame = (currentFrame + 1) % frames.length;
          img.src = frames[currentFrame];
        }, 250);
      } else {
        clearInterval(animationInterval);
        animationInterval = null;
        currentFrame = 0;
        img.src = frames[0];
      }
    });
  }
