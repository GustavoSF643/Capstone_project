import {Panel1Div} from "./style"; 
import backgroundHomePanel1 from "../../../assets/backgroundHomePanel1.png"; 
import heartButton from "../../../assets/heartButton.png"; 
import ButtonHome from "../../Atomos/ButtonHome"; 

const HomePanel1 = () => {
    return (
     <>    
       <Panel1Div>
           <img src={backgroundHomePanel1}/>
            <div>
               <h2>Encontre o amigo </h2>
               <h2>ideal para voçê</h2>
                  <h4>Ajude a fazer uma boa ação</h4>
                  <ButtonHome label="REGISTRE-SE" image_source={heartButton}></ButtonHome>
             </div>       
       </Panel1Div> 
     </> 
    );
  };
  
  export default HomePanel1; 
  