let btn = document.querySelector('.btn');

const randomNumber = () => {
  let min = document.getElementById('min');
  let max = document.getElementById('max');
  let showValue = document.querySelector('.showValue');
  let counter = document.querySelector('.counter');
  let minNumber = Number(min.value);
  let maxNumber = Number(max.value);

  let delay = 3;
  let timer = setInterval(() => {
    counter.innerText = `${delay}`;
    delay--;
    if (delay < 0) {
      clearInterval(timer);
      counter.innerText = " ";
      if (minNumber > maxNumber) {
        minNumber = minNumber + maxNumber;
        maxNumber = minNumber - maxNumber;
        minNumber = minNumber - maxNumber;
        min.value = minNumber;
        max.value = maxNumber;
      }
      let random = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
      showValue.innerText = random;
    }
  }, 1000);
};

btn.addEventListener('click', randomNumber)