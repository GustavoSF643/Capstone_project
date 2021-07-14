import {Panel6Div, PanelDivEsquerda,PanelDivDireita} from "./style"; 
import ButtonHome2 from "../../Atomos/ButtonHome2";
import patinha_botao from "../../../assets/patinha_botao.png";

const HomePanel6 = () => {
    return (
     <>    
       <Panel6Div>
               <PanelDivEsquerda> 
                    <h2>O que dizem ?</h2>
                    <h4>Veja ao lado alguns comentarios sobre nós. 
                        Deseja tabem deixar a sua avaliação?
                        Clique no botão avaliar. 
                    </h4>
                    <ButtonHome2 label="AVALIAR" image_source={patinha_botao}></ButtonHome2>
               </PanelDivEsquerda> 
               <PanelDivDireita>
                              
               </PanelDivDireita>   
       </Panel6Div> 
     </> 
    );
  };
  
  export default HomePanel6;  