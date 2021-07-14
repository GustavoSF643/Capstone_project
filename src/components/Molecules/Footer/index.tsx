import { FooterDiv, Div, Icons, CopyrigthDiv} from "./style";
import LogoFooter from "../../../assets/LogoFooter.png"; 
import { FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";

const Footer = () => {
  return (
   <>    
    <FooterDiv>
       <Div>  
         <img  src={LogoFooter} />
         <a href="">Contato</a> 
         <a href="">sobre nós</a>    
      </Div>
      <Div>  
         <h3>Siga nossa página nas redes sociais</h3>
         <Icons>
            <div>  
               <FaFacebook size="40" />
               <FaInstagram size="40"/>
               <FaTwitter size="40"/>
            </div>  
         </Icons>   
      </Div>                   
    </FooterDiv>
    <hr/>
    <CopyrigthDiv> 
       Copyrigth 2021 | Todos os direitos reservados 
    </CopyrigthDiv>
   </> 
  );
};

export default Footer; 








































































































































































































































