import {Panel5Div, Panel5DivInterna, Panel5Img, ImgPlus, ImgSimbol} from "./style"; 
import backgroundHomePanel5 from "../../../assets/backgroundHomePanel5.png"; 
import people from "../../../assets/people.png"; 
import cat_orange from "../../../assets/cat_orange.png";
import dog_orange  from "../../../assets/dog_orange.png";
import plusSimbol  from "../../../assets/plusSimbol.png";

const HomePanel5 = () => {
    return (
     <>    
       <Panel5Div>
            
           <Panel5Img src={backgroundHomePanel5}/>
            <Panel5DivInterna> 
              <div>
                <ImgSimbol src={people} alt="people"/>
                <p>5 <ImgPlus src={plusSimbol} alt="people"/> </p>
              </div>

              <div>
                <ImgSimbol src={cat_orange} alt="cat_orange"/>
                <p>5 <ImgPlus src={plusSimbol} alt="people"/> </p> 
              </div> 

              <div>
                <ImgSimbol src={dog_orange} alt="dog_orange"/>
                <p>5 <ImgPlus src={plusSimbol} alt="people"/> </p>
              </div>

            </Panel5DivInterna>              
       </Panel5Div> 
     </> 
    );
  };
  
  export default HomePanel5; 
  