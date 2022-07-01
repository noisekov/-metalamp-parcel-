//dropdown-guest
const dropdownGuest = document.querySelectorAll(".text-field__block-list-hidden");
document.addEventListener("click", guest)
function guest (event) {
   if (event.target.closest(".js-input-guest")){
      for (let i=0; i < dropdownGuest.length; i++) {
         dropdownGuest[i].classList.toggle(".active-guest")
      }
      document.querySelector(".js-material-hidden").innerHTML = "expand_less";
      document.querySelector(".text-field__input-guest").style.borderRadius = "4px 4px 0 0";
   } else  {
      document.querySelector(".js-material-hidden").innerHTML = "expand_more";
      document.querySelector(".text-field__input-guest").style.borderRadius = "4px";
   }
}
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