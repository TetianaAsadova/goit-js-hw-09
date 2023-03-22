import '../css/common.css';

const refs = {
  form: document.querySelector('.form')
};
const formObjekt = {
    delay: "",
    step: "",
    amount: "",
}

refs.form.addEventListener('submit', (e) => {
  e.preventDefault();
      const { delay, step, amount } = e.currentTarget.elements;
      console.log(`delay: ${delay.value}, step: ${step.value}, amount: ${amount.value}`);
      formObjekt.delay = delay.value;
      formObjekt.step = step.value;
      formObjekt.amount = amount.value;
      console.log(`formObjekt`, formObjekt);
      // e.currentTarget.reset();
});

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }


// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });


//   PromiseDelay = delay
// PromiseDelay += step

// const formRef = document.querySelector('.login-form');
// const formObjekt = {
//     email: "",
//     password: "",
// }

// formRef.addEventListener('submit', (e) => {
//     e.preventDefault();

//     if (e.currentTarget.email.value === "" || e.currentTarget.password.value === "") {
//         console.error("Please fill in all the fields!");
//     } else {
//         const { email, password } = e.currentTarget.elements;
//         console.log(`Email: ${email.value}, Password: ${password.value}`);
//         formObjekt.email = email.value;
//         formObjekt.password = password.value;
//         console.log(formObjekt);
//         e.currentTarget.reset();
//     }
// });