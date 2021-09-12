const buyProductBtn = document.querySelector('#buy-btn');
buyProductBtn.addEventListener('click', () => {
  alert(`Sorry, this product is out of stock!`);
});

const loveBtn = document.querySelector('.loveme');
const loveP = document.querySelector('.hidden-p1');
const hateP = document.querySelector('.hidden-p2');
const hateBtn = document.querySelector('.hateme');

const LovedOrNot = {
  isLoved: true,

  loved() {
    if (this.isLoved) {
      loveP.classList.add('pa-active');
      this.isLoved = false;
    } else {
      loveP.classList.remove('pa-active');
      this.isLoved = true;
    }
  },

  notLoved() {
    if (this.isLoved) {
      hateP.classList.add('patwo-active');
      this.isLoved = false;
      console.log('test2');
    } else {
      hateP.classList.remove('patwo-active');
      this.isLoved = true;
    }
  },
};

loveBtn.addEventListener('click', () => {
  LovedOrNot.loved();
});
hateBtn.addEventListener('click', () => {
  LovedOrNot.notLoved();
});

const changeBgColor = () => {
  const changeBgBtn = document.querySelector('.changebg');
  changeBgBtn.addEventListener('click', () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = '#' + randomColor;
  });
};
changeBgColor();

const changeBgColorOnSelect = () => {
  const selectBox = document.querySelector('#colorchange');
  selectBox.addEventListener('change', (event) => {
    let selectBoxInput = event.target.value;
    console.log(selectBoxInput);
    if (selectBoxInput === 'red') {
      document.body.style.backgroundColor = 'red';
    } else if (selectBoxInput === 'blue') {
      document.body.style.backgroundColor = 'blue';
    } else if (selectBoxInput === 'green') {
      document.body.style.backgroundColor = 'green';
    } else if (selectBoxInput === 'yellow') {
      document.body.style.backgroundColor = 'yellow';
    }
  });
};

changeBgColorOnSelect();

let chosenQuantity = 1;
const itemQuantityElement = document.querySelector('#quantity');
const addItem = document.querySelector('#add');
const removeItem = document.querySelector('#remove');

const changeItemCount = (operator) => {
  itemQuantityElement.innerHTML = operator;
};

addItem.addEventListener('click', () => {
  changeItemCount(chosenQuantity++);
  itemQuantityElement.innerHTML++;
});

removeItem.addEventListener('click', () => {
  if (chosenQuantity <= 1) {
    chosenQuantity = 1;
    itemQuantityElement.innerHTML = chosenQuantity;
  } else {
    changeItemCount(chosenQuantity--);
    itemQuantityElement.innerHTML--;
  }
});

const Emails = [
  'idobz123@gmail.com',
  'jb.haim.rubin@gmail.com',
  'yossi@gmail.com',
  'avi@gmail.com',
];

const formElement = document.querySelector('.emailcheck');
const inputElement = formElement.querySelector('input');
const checkValidation = () => {
  formElement.addEventListener('submit', () => {
    for (let i = 0; i < Emails.length; i++) {
      if (inputElement.value === Emails[i]) {
        inputElement.classList.add('inputvalid');
        inputElement.classList.remove('inputnot--valid');
        return;
      } else {
        inputElement.classList.remove('inputvalid');
        inputElement.classList.add('inputnot--valid');
      }
    }
  });
};
checkValidation();

formElement.addEventListener('submit', (e) => {
  e.preventDefault();
});
