import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem () {
  return (
    <article className="teacher-item">
           <header>
             <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGHkFhj9fb_5g/profile-displayphoto-shrink_100_100/0?e=1602720000&v=beta&t=_0mKCBweRkWVY7_QI1uSpyZ90dvkFSM3G2W1ZhrPagw" alt="Thiago Nascimento"/>
             <div>
               <strong>Thiago Nascimento</strong>
               <span>Química</span>
             </div>
           </header>
           <p>
            Entusiasta das melhores tecnologias de química avançada.
            <br/><br/>
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
           </p>

           <footer>
             <p>
               Preço/hora
               <strong>R$ 100,00</strong>
             </p>
             <button type="button">
               <img src={whatsappIcon} alt="Whatsapp"/>
               Entrar em contato
             </button>
           </footer>
        </article>
  );
}

export default TeacherItem;