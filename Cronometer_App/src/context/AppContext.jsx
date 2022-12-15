import { useNavigate } from "react-router-dom";
import { Children, createContext,useState } from "react";
import axios from "axios";

const getuser=(data)=>{
   axios
   .get(
     `https://arcane-caverns-19574.herokuapp.com/api/posts/?email=${data.email}`
   )
   .then(function (response) {
     console.log(response.data[0])
   })
   .catch(function (error) {
    console.log(error)
   });

}



export const AuthContext=createContext();

export const AuthContextProvider=({children})=>{
    const [isAuth, setIsAuth] =useState(false);
    const [token, setToken] =useState("");
    const navigate = useNavigate();
    const [Users,setusers]=useState([])

    const Login=(data)=>{
      let papa=getuser(data)
      if(papa!==undefined){
         alert("user dident exist please signup...")

      }
      else{
         alert("login sucsessfull...")
         setIsAuth(true)
         setToken("papa.email")
         navigate("/product")
      }
        
      



    }

   const Logout=()=>{
    setIsAuth(false)
    navigate("/")
   }
  
  const Gotohome=()=>{

   navigate("/")

  }
  const signup=async(data)=>{
   
  
      axios({
              method: "post",
              url: "https://arcane-caverns-19574.herokuapp.com/api/posts",
              data: {
                id: data.email,
                email: data.email,
                password: data.password,
                food:[],
              }
            });
            alert("User registration succsesfull...")
                   navigate("/login")
              

     
   
}




let value={isAuth,token,Logout,Gotohome,Login,Users,setusers,signup,setIsAuth}
return <AuthContext.Provider value={value}>
    {children}
</AuthContext.Provider>




}