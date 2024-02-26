import { AuthContext } from "./context";
import { Loader } from "./loader/Loader";
import { Route, Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";

interface AppRouterProps {
  prop1: string;
  prop2: number;
}
const privateRoutes = [{ path: "/dashboard", component: Dashboard }];
const publicRoutes = [{ path: "/login", component: Login }];
let isAuth = false;
let isLoading = false;

export const AppRouter: React.FC<AppRouterProps>= (props) => {
 const authData = useContext(AuthContext);
if (authData !== null) {
  const { isAuth: authIsAuth, isLoading: authIsLoading } = authData;
  isAuth = authIsAuth;
  isLoading = authIsLoading;

  console.log(isAuth);

  if (isLoading) {
    return <Loader />;
  }
}
  return (
    <div>
      {isAuth ? (
        <Outlet {...(props as any)}>
          {privateRoutes.map((route) => (
            <Route
              element={<route.component />}
              path={route.path}
              key={route.path}
            />
          ))}
          <Navigate to="/posts" />
        </Outlet>
      ) : (
        <Outlet {...(props as any)}>
          {publicRoutes.map((route) => (
            <Route
              element={<route.component />}
              path={route.path}
              key={route.path}
            />
          ))}
          <Navigate to="/login" />
        </Outlet>
      )}
    </div>
  );
}
          


