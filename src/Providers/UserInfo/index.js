import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import jwt_decode from "jwt-decode";
import api from "./../../services/api";

const UserInfoContext = createContext();

export const UserInfoProvider = ({children}) => {
  const [token] = useState(
    JSON.stringify(localStorage.getItem("@petMacher:token") || null) 
  );
  const [tokenParse, setTokenParse] = useState("");
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState("");
  const [decode, setDecode] = useState(jwt_decode(token).sub);
  const isLogin = token !== 'null';

  useEffect(() => {
    if(isLogin){
      const newToken = JSON.parse(token);
      setTokenParse(newToken)
      const decoded = jwt_decode(token).sub;
      setDecode(decoded)
      api
        .get(`users/${decoded}`, {
          headers: {
            Authorization: `Bearer ${newToken}`,
          },
        })
        .then((response) => {
          setUser(response.data);
          const nameArray = response.data.fullName.split(" ");
          const firstName = nameArray[0];
          setUserName(firstName);
        })
        .catch((err) => console.error(err, err.user));
    }
  }, [token]);

  return (
    <UserInfoContext.Provider 
      value={{ userName, user, tokenParse, decode, isLogin, token }}
    >
      {children}
    </UserInfoContext.Provider>
  );
};

export const useUserInfo = () => useContext(UserInfoContext);