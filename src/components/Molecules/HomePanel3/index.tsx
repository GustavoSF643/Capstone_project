import {Panel3Div, PanelDivInterna,ImgCard } from "./style"; 
import patinha_botao from "../../../assets/patinha_botao.png";
import CardKelo from "../../../assets/CardKelo.png";
import CardPeggy from "../../../assets/CardPeggy.png";
import CardRudy from "../../../assets/CardRudy.png";
import ButtonHome2 from "../../Atomos/ButtonHome2";
import { Link } from "react-router-dom"; 


const HomePanel3 = () => {
    return (
     <>    
       <Panel3Div>
               <PanelDivInterna> 
                    <h2>Pets para adoção perto de você!</h2>
               </PanelDivInterna> 
               <PanelDivInterna>
                    <ImgCard src={CardKelo}/>
                    <ImgCard src={CardPeggy}/>
                    <ImgCard src={CardRudy}/>
               </PanelDivInterna>   
               <PanelDivInterna> 
                    <Link to="/dashboard">
                         <ButtonHome2 label="VEJA MAIS" image_source={patinha_botao}></ButtonHome2>
                    </Link>
               </PanelDivInterna> 
       </Panel3Div> 
     </> 
    );
  };
  
  export default HomePanel3;  