import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

//nuUiSlider
let slider = document.querySelector('#slider');
if (slider) {
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
}