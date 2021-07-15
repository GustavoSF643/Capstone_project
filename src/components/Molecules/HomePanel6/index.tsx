import {Panel6Div, PanelDivEsquerda,PanelDivDireita} from "./style"; 
import ButtonHome2 from "../../Atomos/ButtonHome2";
import patinha_botao from "../../../assets/patinha_botao.png";
import {Link} from "react-router-dom"; 
import CardComment from "../../Molecules/CardComment";
import api from "../../../services/api";
import { useEffect, useState } from "react";

const HomePanel6 = () => {
  const [rating, setRating] = useState([]);

  const reloadRating = () => {
    api
      .get("rating")
      .then((response) => setRating(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    reloadRating();
  }, []);

    return (
     <>    
       <Panel6Div>
               <PanelDivEsquerda> 
                    <h2>O que dizem ?</h2>
                    <h4>Veja ao lado alguns comentarios sobre nós. 
                        Deseja tabem deixar a sua avaliação?
                        Clique no botão avaliar. 
                    </h4>
                    <Link to="/rating">
                        <ButtonHome2 label="AVALIAR" image_source={patinha_botao}></ButtonHome2>
                    </Link>
               </PanelDivEsquerda> 
               <PanelDivDireita>
                    {rating.map((item , index) => (
                      index >= 2 && 
                        <CardComment user={item} key={index} /> 
                    ))}   
                    
               </PanelDivDireita>   
       </Panel6Div> 
     </> 
    );
  };
  
  export default HomePanel6;  