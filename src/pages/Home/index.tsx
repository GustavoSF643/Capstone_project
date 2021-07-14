import Footer from "../../components/Molecules/Footer";
import HomePanel1 from "../../components/Molecules/HomePanel1"; 
import HomePanel2 from "../../components/Molecules/HomePanel2";
import HomePanel3 from "../../components/Molecules/HomePanel3";
import HomePanel4 from "../../components/Molecules/HomePanel4";
import HomePanel5 from "../../components/Molecules/HomePanel5";
import HomePanel6 from "../../components/Molecules/HomePanel6";

const Home = () => {
  return (
    <div> 
      <HomePanel1/>
      <HomePanel2/>
      <HomePanel3/>
      <HomePanel4/>
      <HomePanel5/>
      <HomePanel6/>
      <Footer/>
    </div>
  );
};

export default Home;
