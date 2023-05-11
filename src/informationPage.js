let contentView = document.querySelector('.content-view');

let informationSection = document.createElement('div');

informationSection.classList.add('information');

informationSection.innerHTML =
    `
        <div class="information-view">

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus corrupti, minima fugiat eius, illum dolor accusamus itaque nulla nemo magni amet sed hic? Ea, minus magni nihil magnam omnis deleniti sequi saepe minima amet delectus asperiores <strong>quis molestias repudiandae</strong> laborum ducimus sint consequatur natus harum reprehenderit ipsam ab unde, aliquam doloremque sed? Perferendis fugit eaque omnis aut unde quis dolores ex veritatis. Itaque quisquam praesentium sint qui, enim commodi molestias expedita ab quidem a facere excepturi minus recusandae assumenda illo, nobis dolores? Porro eum aliquam, perspiciatis id perferendis, minus deleniti repellat hic maxime recusandae, nulla excepturi in ad quos maiores dolores iusto molestiae laborum illo? Temporibus sapiente soluta dolores eveniet <strong>quidem magni at blanditiis officiis</strong>, id quisquam, ipsa placeat iusto exercitationem molestias vitae harum voluptate, fugit impedit ab. Beatae aut facilis atque quaerat itaque sint ratione alias! Id accusantium in laudantium, ea voluptas eveniet nobis autem dicta debitis, distinctio aspernatur velit perspiciatis asperiores dolorem qui. Blanditiis vel nisi quae! Exercitationem, praesentium consectetur, expedita, illo aliquid delectus mollitia iusto architecto voluptatibus laborum numquam illum maxime consequatur possimus repudiandae provident cumque. Iure debitis corrupti accusantium velit harum nihil, dolorum delectus magni, sunt asperiores laborum saepe quod facilis laudantium rem, inventore id voluptatum.</p>

        </div>
        
    
    `;

export function renderInformationPage () {    
    console.log('otra accion');


    let contentViewChilds = contentView.querySelectorAll(".content-view > *");    

    contentViewChilds.forEach((child) =>{
        
        child.remove()
    })

    contentView.appendChild(informationSection);


}