import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

//air-datapicker
let calInTwo, onePicker,calendarInPage;

let apply = {
   content: 'Применить',
   className:'custom-button',
   onclick: (daySelect) => {
      // let date = newDate('1995-07-17');
      // daySelect.selectDate(date);
      // daySelect.setViewDate(date);
   }
}

calInTwo = new AirDatepicker('#cal-two-input',{
   range: true,
   multipleDatesSeparator: '-',
   inline: false,
   buttons: ['clear', apply],
   selectedDates:[]
});

onePicker = new AirDatepicker('#one-picker',{
   range: true,
   multipleDatesSeparator: ' - ',
   inline: false,
   buttons: ['clear', apply],
});

//calendar
calendarInPage = new AirDatepicker('#calendar',{
   inline:true,
   buttons: ['clear', apply],
   range: true,
   multipleDatesSeparator: '-',
});

//dropdown expandble
const dropdownExpandable = document.querySelector(".text-field__expandable-checkbox-list-hidden")
document.addEventListener("click", expandable);
function expandable (e) {
   if (e.target.closest(".js-display-hidden")) {
      dropdownExpandable.classList.toggle(".active-expandble")
      document.querySelector(".js-material-hidden").innerHTML = "expand_less";
   }  
   if (!e.target.closest(".js-display-hidden")) {
      document.querySelector(".js-material-hidden").innerHTML = "expand_more";
   }
}
//dropdown-quest
const dropdownQuest = document.querySelector(".text-field__block-list-hidden");
document.addEventListener("click", quest)
function quest (event) {
   if (event.target.closest(".js-input-guest")){
      dropdownQuest.classList.toggle(".active-guest")
      document.querySelector(".js-material-hidden").innerHTML = "expand_less";
      document.querySelector(".text-field__input-guest").style.borderRadius = "4px 4px 0 0";
   } else  {
      document.querySelector(".js-material-hidden").innerHTML = "expand_more";
      document.querySelector(".text-field__input-guest").style.borderRadius = "4px";
   }
}

//dropdown-expanded
const dropdownExpanded = document.querySelector(".text-field__block-list-expanded")
document.addEventListener('click', ev)
function ev (e) {
   if (e.target.closest(".js-dropdown-expanded")) {
      dropdownExpanded.classList.toggle(".active-expanded")
   }
}

//dropdown-expanded-counter

// const inputDropdown = document.querySelector('#dropdown-default');
// document,addEventListener('click', button)
// function button(event) {
//    event.preventDefault()
//    if (event.onclick(".js-first-elem-plus")){
//       document.querySelector(".js-counter").innerHTML;
//    }
// }

