import '../css/common.css';

const refs = {
  form: document.querySelector('.form')
};

let promDelay = 0;
let promStep = 0;
let promAmount = 0;

refs.form.addEventListener('submit', (e) => {
  e.preventDefault();
  const { delay, step, amount } = e.currentTarget.elements;
  console.log(`delay: ${delay.value}, step: ${step.value}, amount: ${amount.value}`);
  promDelay = Number(delay.value);
  promStep = Number(step.value);
  promAmount = Number(amount.value); 

  for (let i = 1; i <= promAmount; i += 1) {
    createPromise(i, promDelay)
      .then(result => console.log(result))
      .catch(error => console.log(error));
    promDelay += promStep;
  } 
});

const createPromise = (position, delay) => {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3; 
    setTimeout(() => {
      if (shouldResolve) {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, `${promDelay}`);
  });
  
};