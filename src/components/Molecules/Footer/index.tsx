import { FooterDiv, Div, Icons} from "./style";
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
         <h3>Assine a nossa newsletter</h3>
         <input type="text" placeholder="Nome"/>
         <input type="text" placeholder="email"/> 
         <button> Cadastrar </button>
      </Div> 
      <Div>  
         <h3>Siga nossa página nas redes sociais</h3>
         <Icons>
            <div>  
               <FaFacebook/>
               <FaInstagram/>
               <FaTwitter/>
            </div>  
         </Icons>   
      </Div>                   
    </FooterDiv>
   </> 
  );
};

export default Footer; 








































































































































































































































