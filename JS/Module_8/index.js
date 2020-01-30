// const list = document.querySelector('.list');
// function addClass(e) {
//     if(e.target.tagName !== 'LI') {
//         return
//     }
//     console.log(e);
//     const li = e.target
//     li.classList.add('big')
//     console.log(document.createElement('h1'));
// }

// list.addEventListener('click', addClass)
// const checkScroll = () => {
//     console.log(pageYOffset);
// }

// const checkScreen = () => {
//     console.log(window.innerWidth);
// }
// window.addEventListener('scroll', _.throttle(checkScroll, 500))

// window.addEventListener('resize', _.debounce(checkScreen, 1000))


const amount = document.querySelector('#Text1')
const rate = document.querySelector('#Text2')
const period = document.querySelector('#Text3')
const profit = document.querySelector('#Text6')
const total = document.querySelector('#Text7')
const calculateBtn = document.querySelector('[value="Calculate"]')
const resetBtn = document.querySelector('[value="Clear"]')
const form = document.querySelector('form')
const select = document.querySelector('#Select2')
const checkbox = document.querySelector('[type="checkbox"]')

function clearForm () {
    form.reset()
}

function checkPeriod (select) {
    let m;
    switch (select.value) {
        case 'Years': // select.value === 'Years'
            m = 1
            break;
        case 'Months':
            m = 12
            break;
        case 'Weeks':
            m = 52;
            break;
        case 'Days':
            m = 365;
            break;
        case 'Quarters':
            m = 4
            break;
        default:
            break;
    }
    return m
}

function calculateProfit (e) {
    e.preventDefault()
    if (!checkbox.checked) {
        return
    }
    const profitValue = amount.value * (rate.value / checkPeriod(select)) / 100 * period.value
    const totalValue = profitValue + Number(amount.value)
    profit.value = profitValue
    total.value = totalValue
    console.log(select.value);
}

resetBtn.addEventListener('click', clearForm)
form.addEventListener('submit', calculateProfit)

// function playSound(e) {
//   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//   const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
//   if (!audio) return;

//   key.classList.add("playing");
//   audio.currentTime = 0;
//   audio.play();
// }

// function removeClass(e) {
//     e.target.classList.remove("playing");
//   }

// window.addEventListener("keydown", playSound);
// container.addEventListener("transitionend", removeClass);
