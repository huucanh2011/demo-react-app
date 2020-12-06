import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/layouts/Layout";
import Routes from "./Routes";
import { useEffect } from "react";
import { cancelSignIn, getUserAsync } from "./redux/auth/authActions";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserAsync());
    return () => {
      dispatch(cancelSignIn());
    };
  });
  return (
    <>
      <Layout>
        <Routes />
      </Layout>
    </>
  );
}

export default App;
