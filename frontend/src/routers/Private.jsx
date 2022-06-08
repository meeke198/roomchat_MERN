import { Navigate, Outlet } from "react-router-dom";
const PrivateRoute = () => {
  const auth = localStorage.getItem("access_token"); // determine if authorized, from context or however you're doing it

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return auth ? <Outlet /> : <Navigate to="/login" />;
};
//Outlet - A component that renders the next match in a set of matches. 
//v5
// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const isLoggedIn = localStorage.getItem("access_token");

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isLoggedIn ? <Outlet/> : (
//           <Navigate
//             to={{
//               pathname: "/login",
//             }}
//           />
//         )
//       }
//     />
//   );
// };

export default PrivateRoute;