import { FooterDiv, Div, Icons, CopyrigthDiv, DivIcons} from "./style";
import LogoFooter from "../../../assets/LogoFooter.png"; 
import { FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";
import {Link} from "react-router-dom"; 

const Footer = () => {
  return (
   <>    
    <FooterDiv>
       <Div>  
         <Link to="/contact"><p>Contato</p></Link>
         <Link to="/about"><p>Sobre nós</p></Link>
         <Link to="/rating"><p>Oque dizem</p></Link>
      </Div>
      <Div>  
         <h3>Assine a nossa newsletter</h3>
         <input type="text" placeholder="Nome"/>
         <input type="text" placeholder="email"/> 
         <button> Cadastrar </button>
      </Div> 
      <Div>  
         <h3>Siga nossa página nas redes sociais</h3>
         <Icons>
            <DivIcons>
               <div><a href="www.facebook.com.br"><FaFacebook size="30" /></a></div>  
               <div><a href="www.Instagram.com.br"><FaInstagram size="30"/></a></div>
               <div><a href="www.twiter.com.br"><FaTwitter size="30"/></a></div>  
            </DivIcons>
         </Icons>   
      </Div>                   
    </FooterDiv>
    <hr/>
    <CopyrigthDiv> 
         &copy; Copyrigth 2021 | Todos os direitos reservados aos desenvolvedores envolvidos 
    </CopyrigthDiv>
   </> 
  );
};

export default Footer; 








































































































































































































































