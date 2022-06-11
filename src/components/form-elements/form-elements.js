import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

//air-datapicker
let cal1, cal2, onePicker,calendarInPage;

let apply = {
   content: 'Применить',
   className:'custom-button',
   onclick: (daySelect) => {
      let date = newDate('1995-07-17');
      daySelect.selectDate(date);
      daySelect.setViewDate(date);
   }
}

cal1 = new AirDatepicker('#date-picker-cal1',{
   range: true,
   multipleDatesSeparator: '-',
   inline: false,
   buttons: ['clear', apply],
   onSelect({date}) {
      cal1.upDate({
         minDate: date
      })
   }
});
cal2 = new AirDatepicker('#date-picker-cal2',{
   range: true,
   multipleDatesSeparator: '-',
   inline: false,
   buttons: ['clear', apply],
   onSelect({date}) {
      cal2.upDate({
         maxDate: date
      })
   }
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

//nuUiSlider
let slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [5000, 10000],
    connect: true,
    range: {
        'min': 0,
        'max': 15000
    }
});
let valueNoSlider = [
   document.querySelector(".js-value-lower"),
   document.querySelector(".js-value-upper")
]
slider.noUiSlider.on("update", function(values, handle){
   valueNoSlider[handle].innerHTML = Math.round(values[handle]);
})

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
