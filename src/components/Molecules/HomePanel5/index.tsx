import {Panel5Div, Panel5DivInterna, Panel5Img, ImgPlus, ImgSimbol} from "./style"; 
import backgroundHomePanel5 from "../../../assets/backgroundHomePanel5.png";  
import cat_orange from "../../../assets/cat_orange.png";
import dog_orange  from "../../../assets/dog_orange.png";
import plusSimbol  from "../../../assets/plusSimbol.png";
import { useEffect, useState } from "react";
import api from "../../../services/api"; 

const HomePanel5 = () => {
  
  const [cats, setCats] = useState([]);
  const [dogs, setDogs] = useState([]);

  const firstLoad = () => {
    api
      .get(`pets?type_like=Cat&currentState=2`)
      .then((response) => setCats(response.data))
      .catch((err) => console.log(err, err.response));

      api
      .get(`pets?type_like=Dog&currentState=2`)
      .then((response) => setDogs(response.data))
      .catch((err) => console.log(err, err.response));  
  };

  useEffect(() => {
    firstLoad();
  }, []);

  
  

    return (
     <>    
       <Panel5Div>
            
           <Panel5Img src={backgroundHomePanel5}/>
            <Panel5DivInterna> 
              <div>
                <ImgSimbol src={cat_orange} alt="cat_orange"/>
                <p>{cats.length}<ImgPlus src={plusSimbol} alt="people"/> </p> 
              </div> 

              <div>
                <ImgSimbol src={dog_orange} alt="dog_orange"/>
                <p>{dogs.length}<ImgPlus src={plusSimbol} alt="people"/> </p>
              </div>

            </Panel5DivInterna>              
       </Panel5Div> 
     </> 
    );
  };
  
  export default HomePanel5; 
  