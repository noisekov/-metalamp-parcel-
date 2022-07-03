//dropdown-guest
const dropdownGuest = document.querySelectorAll(".text-field__block-list-hidden");
const dropImg = document.querySelectorAll("#js-dropdown-hidden")
const drop = document.querySelectorAll("#js-input-guest")
const styleField = document.querySelectorAll(".text-field__input-guest")

drop.forEach((btn, i) => {
   btn.addEventListener("click",function (e) {
      if (e.currentTarget == btn){
         dropdownGuest[i].classList.toggle(".active-guest");
         dropImg[i].classList.toggle(".material-icons_rotate");
         styleField[i].classList.toggle(".active-guest");
      }
   })
})
















//counter
const btnMinus = document.querySelector("#btnMinus");
const btnPlus = document.querySelector("#btnPlus");
const countValue = document.querySelector("#countValue");

let count;
btnMinus.addEventListener('click', function (e){
   e.preventDefault();
   if (parseInt(countValue.innerHTML)- 1 >= 0){
      count = parseInt(countValue.innerHTML) - 1;
      countValue.innerHTML = count;
      textInput.value = count + ' Взрослых'
   } else {
      textInput.value = ""
   }
   if (count === 0){
      textInput.value = ""
   }
   
})
btnPlus.addEventListener('click', function (e){
   e.preventDefault();
   count = parseInt(countValue.innerHTML) + 1;
   countValue.innerHTML = count;
   textInput.value = count + ' Взрослых'
   if (coun === 0){
      textInput.value = ""
   }
})
//----------------
const btnMinusChild = document.querySelector("#btnMinusChild");
const btnPlusChild = document.querySelector("#btnPlusChild");
const countValueChild = document.querySelector("#countValueChild");

let coun;
btnMinusChild.addEventListener('click', function (e){
   e.preventDefault();
   if (parseInt(countValueChild.innerHTML)- 1 >= 0){
      coun = parseInt(countValueChild.innerHTML) - 1;
      countValueChild.innerHTML = coun;
      textInput.value =  coun + ' Детей'
   } else {
      textInput.value = ""
   }
   if (coun === 0){
      textInput.value = ""
   }
})
btnPlusChild.addEventListener('click', function (e){
   e.preventDefault();
   coun = parseInt(countValueChild.innerHTML) + 1;
   countValueChild.innerHTML = coun;
   textInput.value =  coun + ' Детей'
   if (coun === 0){
      textInput.value = ""
   }
})
//-----------
const textInput = document.querySelector(".text-field__input-guest");