import AirDatepicker from 'air-datepicker'
import 'air-datepicker/air-datepicker.css'

let apply = {
   content: 'Применить',
   className:'custom-button',
   onclick: () => {
      return true
   }
}

new AirDatepicker('#date-picker',{
   range: true,
   multipleDatesSeparator: '-',
   inline: false,
   buttons: [apply, 'clear']
});
