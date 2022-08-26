import './styles/style.scss';
import './components/form-elements/form-elements';
import './components/range-slider/range-slider';
import './components/dropdown-guest/dropdown-guest';
import './components/air-datepicker/air-datepicker';
import './components/expandable-checkbox/expandable-checkbox';
import './components/dropdown-default/dropdown-default';
import './components/like-button/like-button';
import './components/cards/cards';
import './components/appartment/appartment';
import './components/entry/entry';
import './components/headers & footers/header/header';



import $ from "jquery";
export default (window.$ = window.jQuery = $);

$(document).ready(function(){
    console.log(typeof window.jQuery); 
})

// import pagination from "paginationjs";

// $('#pagination-container').pagination({
//     dataSource: [1, 2, 3, 4, 5, 6, 7, ...  195],
//     callback: function(data, pagination) {
//         // template method of yourself
//         let html = template(data);
//         $('#data-container').html(html)
//     }
// })



// import 'item-quantity-dropdown';
// import 'item-quantity-dropdown/lib/item-quantity-dropdown.css';

// $(document).ready(() => {
//     $('.iqdropdown').iqDropdown({ [options] });
//   });