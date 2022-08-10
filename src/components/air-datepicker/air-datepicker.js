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

calInTwo = new AirDatepicker('#cal-two-input',{
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
