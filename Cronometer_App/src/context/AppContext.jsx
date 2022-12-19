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
      let value = getuser(data)
      if(value !== undefined){
         alert("OOPS :( - Please Register to continue")

      }
      else{
         alert("Welcome Back - Let's Rock On Today")
         setIsAuth(true)
         setToken("value.email")
         navigate("/Product")
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
            alert("That's the Spirit - Lets Go now")
                   navigate("/Login")
              

     
   
}




let value={isAuth,token,Logout,Gotohome,Login,Users,setusers,signup,setIsAuth}
return <AuthContext.Provider value={value}>
    {children}
</AuthContext.Provider>




}