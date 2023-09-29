import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import NoPage from './pages/nopage/NoPage';
import MyState from './context/data/MsyState';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import ProductInfo from './pages/productInfo/ProductInfo';
import AddProduct from './pages/admin/page/AddProduct';
import UpdateProduct from './pages/admin/page/UpdateProduct';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Allproducts from './pages/allproducts/AllProducts';

function App() {
  return (
    <MyState>
   <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/allproducts" element={<Allproducts/>} />
      <Route path='/order' element={
        <ProtectedRoute>
          <Order/>
        </ProtectedRoute>
      }/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/dashboard' element={
        <ProtectedRoutesForAdmin>
          <Dashboard/>
        </ProtectedRoutesForAdmin>
      }/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/addproduct' element={
        <ProtectedRoutesForAdmin>
          <AddProduct/>
        </ProtectedRoutesForAdmin>
      }/>
      <Route path='/updateproduct' element={
        <ProtectedRoutesForAdmin>
          <UpdateProduct/>
        </ProtectedRoutesForAdmin>
      }/>
      <Route path="/productinfo/:id" element={<ProductInfo/>} />
      <Route path='/*' element={<NoPage/>}/>
    </Routes>
    <ToastContainer/>
   </Router>
    </MyState>
  );
}

export default App;

// user 
 export const ProtectedRoute=({children})=>{
  const user = localStorage.getItem('user')
  if(user){
    return children
  }
  else{
    return <Navigate to={'/login'}/>
  }
}


// admin
export const ProtectedRoutesForAdmin = ({children}) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  console.log(admin.user.email)
  if (admin.user.email === 'papa@gmail.com') {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}