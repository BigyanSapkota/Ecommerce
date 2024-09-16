import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Layouts from './components/Layouts'
import HomePage from './components/pages/HomePage'
import ProductDetails from './components/pages/ProductDetails'
import Cart from './components/pages/Cart'
import Products from './components/pages/Products'
import NotFound from './components/pages/NotFound'
import Register from './auth/Register'
import EmailVerify from './auth/EmailVerify'
import Login from './auth/Loginn'
import Profile from './components/pages/Profile'
import PrivateRoute from './auth/PrivateRoute'
import AdminRoute from './auth/AdminRoute'
import Dashboard from './admin/Dashboard'
import Addcategory from './admin/Addcategory'






const MyRoute = () => {
  return (
    < >
      <Router>
        <Routes>
            <Route path='/' element={<Layouts />}>
                <Route index element={<HomePage/>} />  
                <Route path='productdetails/:productId' element={<ProductDetails/>}/>
               <Route path='cart' element={<Cart/>}/>
               <Route path='products' element={<Products/>}/>
               <Route path='signup' element={<Register/>}/>
               <Route path='email/confirmation/:token' element={<EmailVerify/>}/>
               <Route path='signin' element={<Login/>}/>
               </Route>

               <Route path='/' element={<PrivateRoute/>}>
                    <Route path='profile' element={<Profile/>}/>
                </Route>

                <Route path='admin/' element={<AdminRoute/>}>
                    <Route path='dashboard' element={<Dashboard/>}/>
                    <Route path='addcategory' element={<Addcategory/>}/>
                </Route>

            <Route path='/*' element={<NotFound/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default MyRoute

