import {Panel2Div} from "./style"; 
import imgHomePanel2 from "../../../assets/imgHomePanel2.png";

const HomePanel2 = () => {
    return (
     <>    
       <Panel2Div>
            <div>
                <h2>Por que adotar?</h2>
                <h4>Ao adotar, você ajuda a reduzir o número de cães e gatos 
                    abandonados. Os animais de rua já passaram por muito 
                    sofrimento e tudo o que precisam é de um lar para serem 
                    felizes de verdade. Adotar um animal é valorizar a vida. 
                    Um cão ou gato é capaz de sentir emoções – como dor e 
                    alegria/excitação – e por isso, sofre tanto quanto os 
                    humanos.Se você pode mudar o destino de um animal carente, 
                    por que não fazer isso?
                    Falando em adotar, aproveite para conhecer os animaiszinhos 
                    esperando por adoção. Seu próximo melhor amigo pode estar aqui! </h4>
            </div>
            <div>
                <img src={imgHomePanel2}/>
            </div>     
       </Panel2Div> 
     </> 
    );
  };
  
  export default HomePanel2; 
  