import { useContext } from "react";
import { AuthContext } from "../context";

const Login = () => {
  const authData = useContext(AuthContext);
  const { isAuth, setIsAuth }: any = authData; 

  const login = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setIsAuth(true); 
    localStorage.setItem("auth", "true");
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={login}>
        <input type="text" placeholder="Your Login" />
        <input type="password" placeholder="Password" />
        <button>Sing In</button>
      </form>
    </div>
  );
};

export default Login;
