const form = document.querySelector(`#form`);
const result = document.querySelector(`#result`);

const calcPercent = (e) => {
    e.preventDefault();

    const percent = +form.querySelector(`#percent`).value
    const number = +form.querySelector(`#number`).value

    const answ = (number / 100 * percent).toString();
    console.log(answ);
    

    result.innerHTML = `<p>${answ}</p>`
}

form.addEventListener(`submit`, calcPercent)