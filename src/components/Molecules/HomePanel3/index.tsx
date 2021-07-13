import {Panel3Div, PanelDivInterna} from "./style"; 
import patinha_botao from "../../../assets/patinha_botao.png";
import CardKelo from "../../../assets/CardKelo.png";
import CardPeggy from "../../../assets/CardPeggy.png";
import CardRudy from "../../../assets/CardRudy.png";
import ButtonHome from "../../Atomos/ButtonHome";


const HomePanel3 = () => {
    return (
     <>    
       <Panel3Div>
               <PanelDivInterna> 
                    <h2>Pets para adoção perto de voce!</h2>
                    <ButtonHome label="VEJA MAIS" image_source={patinha_botao}></ButtonHome>
               </PanelDivInterna> 
               <PanelDivInterna>
                    <img src={CardKelo}/>
                    <img src={CardPeggy}/>
                    <img src={CardRudy}/>
               </PanelDivInterna>   
       </Panel3Div> 
     </> 
    );
  };
  
  export default HomePanel3;  