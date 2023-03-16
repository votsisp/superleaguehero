import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const AuthContext = createContext(null);


export const AuthProvider = ({ children }) => {

    const [users, setUsers] = useState([])
    const [changeScreen, setChangeScreen] = useState(false)
    const [user, setUser] = useState()
    const router = useRouter()
    
  const getdata = async () => {
    
    try {
      let res = await fetch(`https://superleaguehero.com/api/users`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "GET",
      });
      const data = await res.json();
      console.log(data)
      setUsers(data)
    } catch (err) {
      console.log(err);
      return;
    }
  }


  const signin = async (person) => {
    try {
      const res = await fetch(`https://superleaguehero.com/api/users`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(person),
      });
      let data = await res.json();
      
      if (
        data.data.username == person.username &&
        data.data.password == person.password
      ) {
        setUser(data.data);
        router.push("/");
        console.log(data.data)
      } 
    } catch (err) {
      console.log(err);
      toast.error("User Credentials are false");
      return;
    }
  };

  const signup = async (person) => {
    try {
      let res = await fetch(`https://superleaguehero.com/api/newusers`, {
        
        method: "POST",
        body: JSON.stringify(person),
      });

      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const addScores = async (person) => {
    try {
      let res = await fetch(`https://superleaguehero.com/updateusers`, {
        headers: { 
          'Content-Type': 'application/json'
        },
        method: "PUT",
        body: JSON.stringify(person),
      });

      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const addBet = async (person) => {
    try {
      let res = await fetch(`https://superleaguehero.com/api/updatebets`, {
        headers: { 
          'Content-Type': 'application/json'
        },
        method: "PUT",
        body: JSON.stringify(person),
      });

      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };



 
 

  return (
    <AuthContext.Provider value={{ users, getdata, changeScreen, setChangeScreen, signin, signup, user, setUser, users, addScores, addBet }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;


