import { Route, Redirect, withRouter } from "react-router-dom";

const PublicRoute = ({ component: Component, ...rest }) => {
//   const isLoggedIn = localStorage.getItem("access_token");

  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export default PublicRoute;
