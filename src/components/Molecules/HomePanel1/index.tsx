import {Panel1Div} from "./style"; 
import backgroundHomePanel1 from "../../../assets/backgroundHomePanel1.png"; 
import ButtonHome from "../../Atomos/ButtonHome"; 

const HomePanel1 = () => {
    return (
     <>    
       <Panel1Div>
           <img src={backgroundHomePanel1}/>
            <div>
               <h2>Ache o amigo ideal</h2>
               <h2>para voçê</h2>
                  <h4>Ajude a fazer uma boa ação</h4>
             </div>     
        
       </Panel1Div> 
     </> 
    );
  };
  
  export default HomePanel1; 
  