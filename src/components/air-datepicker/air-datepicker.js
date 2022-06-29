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
calInTwo = new AirDatepicker('#cal-two-input-find-number',{
   range: true,
   multipleDatesSeparator: '-',
   inline: false,
   buttons: ['clear', apply],
   selectedDates:[]
});
calInTwo = new AirDatepicker('#cal-two-input-choice',{
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

calendarInPage = new AirDatepicker('#calendar',{
   inline:true,
   buttons: ['clear', apply],
   range: true,
   multipleDatesSeparator: '-',
});
