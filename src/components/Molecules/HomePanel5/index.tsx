import {Panel5Div, Panel5DivInterna, Panel5Img, ImgPlus, ImgSimbol} from "./style"; 
import backgroundHomePanel5 from "../../../assets/backgroundHomePanel5.png"; 
import people from "../../../assets/people.png"; 
import cat from "../../../assets/cat.png";
import dog  from "../../../assets/dog.png";
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
                <ImgSimbol src={cat} alt="cat"/>
                <p>5 <ImgPlus src={plusSimbol} alt="people"/> </p> 
              </div> 

              <div>
                <ImgSimbol src={dog} alt="dog"/>
                <p>5 <ImgPlus src={plusSimbol} alt="people"/> </p>
              </div>

            </Panel5DivInterna>              
       </Panel5Div> 
     </> 
    );
  };
  
  export default HomePanel5; 
  