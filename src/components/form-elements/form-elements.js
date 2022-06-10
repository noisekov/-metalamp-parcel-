import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

//air-datapicker
let cal1, cal2, onePicker,calendar;

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
calendar = new AirDatepicker('#calendar',{
   inline:true,
   buttons: ['clear', apply],
   range: true,
   multipleDatesSeparator: '-',
});

//nuUiSlider
let slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
});

//dropdown expandble
const dropdownexpandable = document.querySelector(".text-field__expandable-checkbox-list-hidden")
document.addEventListener("click", expandable);
function expandable (e) {
   if (e.target.closest(".js-display-hidden")) {
      dropdownexpandable.classList.toggle(".active-expandble")
      document.querySelector(".js-material-hidden").innerHTML = "expand_less";
   }  
   if (!e.target.closest(".js-display-hidden")) {
      document.querySelector(".js-material-hidden").innerHTML = "expand_more";
   }
}

