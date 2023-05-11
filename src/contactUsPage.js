import larretaPic from './assets/contacts/hlarreta.png';
import mileiPic from './assets/contacts/milei-pelado.jpg';
import maximoPic from './assets/contacts/mkirchner.png';
import bullrichPic from './assets/contacts/pbullrich.jpg';

let contentView = document.querySelector('.content-view');

let contactPage = document.createElement('div');

contactPage.classList.add('contactus-page');

contactPage.innerHTML = 
`
    <div class="contact" id="1">
        <img src="${mileiPic}" class="contact1-portrait">
        <p class="contact1-info">
            Charles Milei es un gerente de restaurante enfocado en la calidad y la satisfacción del cliente. Tiene excelentes habilidades de liderazgo y gestión, y se asegura de que su equipo esté capacitado y motivado para brindar un servicio excepcional. Además, es conocido por su capacidad para convertirse en un demonio económico.
        </p>
    </div>

    <div class="contact" id="2">
    <img src="${larretaPic}" class="contact2-portrait">
    <p class="contact2-info">

        George Larreta es el otro gerente, que en el pasado fue un gerente de un restaurante de la competencia. Se enfoca en brindar una experiencia excepcional al cliente y está comprometido con la calidad y el servicio. Con su experiencia previa, tiene una comprensión profunda del mercado y es capaz de tomar decisiones informadas para mejorar el rendimiento del restaurante. Además, tiene habilidades de liderazgo y gestión excepcionales y trabaja duro para asegurarse de que su equipo esté motivado y capacitado para ofrecer el mejor servicio posible.

    </p>
    </div>

    <div class="contact" id="3">
        <img src="${maximoPic}" class="contact3-portrait">
        <p class="contact3-info">

            C es un jefe de meseros comprometido con la calidad del servicio en el restaurante. Tiene una excelente capacidad para liderar y motivar a su equipo de meseros, y trabaja en estrecha colaboración con el gerente del restaurante para garantizar que se brinde una experiencia excepcional al cliente. Además, tiene un gran conocimiento de los productos y servicios del restaurante, lo que le permite ser un recurso valioso para el personal y los clientes por igual. C también tiene habilidades excepcionales para resolver problemas y tomar decisiones rápidas para garantizar que el servicio se preste de manera eficiente y efectiva.

        </p>
    </div>

    <div class="contact" id="4">
        <img style="width:250; height:250;" src="${bullrichPic}" class="contact4-portrait">
        <p class="contact4-info">

            D es una cliente muy asidua del restaurante, que siempre vuelve por la calidad de los productos y el servicio excepcional que recibe. Es una persona amable y sociable que disfruta de la atmósfera del lugar y de la interacción con el personal. Además, está dispuesta a probar nuevos platos y a compartir sus comentarios para ayudar a mejorar la experiencia del restaurante. Su lealtad y satisfacción son muy valoradas por el equipo del lugar.

        </p>
    </div>;   
`
    


export function renderContactsPage (){

    let contentViewChilds = document.querySelectorAll('.content-view > *');

    contentViewChilds.forEach((child) =>{

        child.remove();

    })

    contentView.appendChild(contactPage);
        
    
}