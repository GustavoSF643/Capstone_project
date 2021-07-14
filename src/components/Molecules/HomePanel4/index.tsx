import {Panel4Div, PanelDivInterna,ImgLayout} from "./style"; 
import imagePanelHome4 from "../../../assets/imagePanelHome4.png";
import patinha_botao from "../../../assets/patinha_botao.png";

import ButtonHome2 from "../../Atomos/ButtonHome2";


const HomePanel4 = () => {
    return (
     <>    
       <Panel4Div>
               <PanelDivInterna> 
                    <ImgLayout src={imagePanelHome4}/>
               </PanelDivInterna> 
               <PanelDivInterna>
                    <h2>Precisa doar um animalzinho?</h2>
                    <h4>Caso não possa continuar com a posse de um cachorro ou 
                         gato, não seja o responsável por aumentar o número de 
                         animais de rua em sua cidade.</h4>
                         <ButtonHome2 label="VEJA MAIS" image_source={patinha_botao}></ButtonHome2>          
               </PanelDivInterna>   
       </Panel4Div> 
     </> 
    );
  };
  
  export default HomePanel4;  