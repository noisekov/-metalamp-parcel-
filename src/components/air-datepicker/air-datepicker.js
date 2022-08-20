import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

//air-datapicker
let calInTwo, onePicker,calendarInPage;

let apply = {
   content: 'Применить',
   className:'Add',
   onClick: (evt) => {
      evt.hide()
   }
}


let valueDate1 = document.querySelector(".js-value1")
let valueDate2 = document.querySelector(".js-value2")

let date1 = new Date();
let date2 = new Date();

calInTwo = new AirDatepicker('#cal-two-input',{
   // multipleDates: true,
   selectedDates: [date1, date2],
   onSelect ({date1}) {
      date1 = valueDate1;
   },
   onSelect ({date2}) {
      date2 = valueDate2;
   },
   range: true,
   buttons: ['clear', apply],   
});


calInTwo = new AirDatepicker('#cal-two-input-find-number',{
   range: true,
   multipleDatesSeparator: '-',
   buttons: ['clear', apply],
});
calInTwo = new AirDatepicker('#cal-two-input-choice',{
   range: true,
   multipleDatesSeparator: '-',
   buttons: ['clear', apply],
});


onePicker = new AirDatepicker('#one-picker',{
   range: true,
   multipleDatesSeparator: ' - ',
   buttons: ['clear', apply],
});

calendarInPage = new AirDatepicker('#calendar',{
   buttons: ['clear', apply],
   range: true,
   multipleDatesSeparator: '-',
});
