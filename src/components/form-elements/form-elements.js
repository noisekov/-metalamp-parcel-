import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
// import 'item-quantity-dropdown';
// import 'item-quantity-dropdown/lib/item-quantity-dropdown.css';
// import noUiSlider from 'nouislider';
// import * as noUiSlider from 'nouislider';
// import '/nouislider/dist/nouislider.css';
//air-datapicker
let cal1, cal2;
let apply = {
   content: 'Применить',
   className:'custom-button',
   onclick: () => {
      return true
   }
}
cal1 = new AirDatepicker('#date-picker',{
   range: true,
   multipleDatesSeparator: '-',
   inline: false,
   buttons: ['clear', apply]
});
//calendar
cal2 = new AirDatepicker('#calendar',{
   inline:true,
   buttons: ['clear', apply],
   range: true,
   multipleDatesSeparator: '-',
});


//dropdown
// $(document).ready(() => {
//    $('.iqdropdown').iqDropdown({ [options] });
//  });

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



