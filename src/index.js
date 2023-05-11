import {renderMenuContent} from './menuPage.js';
import {renderInformationPage} from './informationPage.js';
import {renderContactsPage} from './contactUsPage.js';
import './styles.css';

document.body.onload = renderMenuContent();

let mainPageButtons = document.querySelectorAll('.control-btns');

mainPageButtons.forEach((elem) =>{

    elem.addEventListener('click', (event) =>{

            //ver como hacerlo por clase en vez de por innerhtml

        if(event.currentTarget.innerHTML == 'Menu'){

            console.log('listener menu funciona');

            renderMenuContent();
        }   

        else if(event.currentTarget.innerHTML == 'Information'){

            console.log('listener information funciona');

            renderInformationPage();


        }

        else if(event.currentTarget.innerHTML == 'Contact'){


            console.log('listener contact funciona');

            renderContactsPage();


            
        } else console.log('ningun boton anda');

    })


})




console.log('luego del 404');
