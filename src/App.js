import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Navigation from './Pages/Navigation/Navigation';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AllProducts from './Pages/AllProduct/AllProducts';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import PrivateRoute from './Private/PrivateRoute';
import MyOrders from './Pages/MyOrders/MyOrders';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import Dashboard from './Pages/Dashboard/Dashboard';
import Review from './Pages/UserReview/Review';
import Footer from './Pages/Footer/Footer';
import NoFound from './Pages/NoFound/NoFound';



function App() {
  return (
    <div className="App">
     

      <Router>
        <Navigation></Navigation>

        <Switch>

        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route exact path="/home">
          <Home></Home>
        </Route>

        <Route path="/products">
          <AllProducts></AllProducts>
        </Route>

        <Route path="/login">
          <Login></Login>
        </Route>

        <Route path="/register">
          <Register></Register>
        </Route>

        <PrivateRoute path ="/myorders">
          <MyOrders></MyOrders>
        </PrivateRoute>

        <Route path="/review">
        <Review></Review>
        </Route>

        <PrivateRoute path="/makeadmin">
          <MakeAdmin></MakeAdmin>
        </PrivateRoute>

        <PrivateRoute path="/dashboard">
          <Dashboard></Dashboard>
        </PrivateRoute>


        <PrivateRoute path="/order/:productId">
              <PlaceOrder></PlaceOrder>
        </PrivateRoute>

        <Route  path="*">
          <NoFound></NoFound>
        </Route>

        </Switch>

        <Footer></Footer>
      </Router>


    </div>
  );
}

export default App;
