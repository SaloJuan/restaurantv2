//estar atento por si l oque está acá afuera hay que meterlo en la fn

import dishOne from './assets/plato1.png';
import dishTwo from './assets/plato2.jpg';
import dishThree from './assets/plato3.png';
import dishDessert from './assets/dessert.jpeg';

let contentView = document.querySelector('.content-view');

let contentViewChilds = contentView.querySelectorAll('.content-view > *');

let dishesMenu = document.createElement('div');

dishesMenu.classList.add('dishes-view');

dishesMenu.innerHTML = 
        `
            <div class="dishes" id="1">
                <p>Delicious mix of veggies with shrip on top </p>
                <img src="${dishOne}">                
            </div>

            <div class="dishes" id="2">
                <p>Some kind of fish-sea-thingy mix. At least I see a shell so it must be fish</p>
                <img src="${dishTwo}"> 
            </div>

            <div class="dishes" id="3">
                <p>Potato tortilla. It contains the 3 C: Cheap, Cdelicious and CArgentina </p>
                <img src="${dishThree}"> 
            </div>

            <div class="dishes" id="4">
                <p>Our finnest dessert. Vanilla ice cream bar with a chocolate shower on top.</p>
                <img src="${dishDessert}"> 
            </div>            

        `


export function renderMenuContent (){       
    
    let contentViewChilds = contentView.querySelectorAll(".content-view > *");

    contentViewChilds.forEach((child) =>{
        
        child.remove();

    })

   contentView.appendChild(dishesMenu);

   console.log(dishOne.toString());
            
}




