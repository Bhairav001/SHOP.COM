import { Skeleton } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PrivateRoute } from '../components/PrivateRoute'
import Address from './AddressPage'
import CartPage from './CartPage'
import DealsPage from './Deal'
import Department from './Department'
import Exclusive from './Exclusive'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
import Offers from './Offers'
import OrderPage from './OrderPage'
import Payment from './Payment'
import ProductDetails from './ProductDetails'
import ShopBuddy from './ShopBuddy'
import ShopLocal from './ShopLocal'
import ShopTravel from './ShopTravel'
import SignUp from './SignUp'
import Stores from './Stores'

const AllRoute = () => {
  return (
    <Routes>
       <Route path="/" element={<HomePage/>}></Route>
       <Route path="/login" element={<LoginPage/>}></Route>
       <Route path='/deals' element={<PrivateRoute><DealsPage/></PrivateRoute>}></Route>
       <Route path='/cart/:id' element={<CartPage/>}></Route>
       <Route path='/cart' element={<CartPage/>}></Route>
       <Route path='/departments' element={<Department/>}></Route>
       <Route path='/exclusive' element={<Exclusive/>}></Route>
       <Route path='/offers' element={<Offers/>}></Route>
       <Route path='/orders' element={<OrderPage/>}></Route>
       <Route path='/orders/:id' element={<OrderPage/>}></Route>
       <Route path='/payment' element={<Payment/>}></Route>
       <Route path='/product/:id' element={<ProductDetails/>}></Route>
       <Route path='/shopbuddy' element={<ShopBuddy/>}></Route>
       <Route path='/shoplocal' element={<ShopLocal/>}></Route>
       <Route path='/shoptravel' element={<ShopTravel/>}></Route>
       <Route path='/signup' element={<SignUp/>}></Route>
       <Route path='/stores' element={<Stores/>}></Route>
       <Route path="/address" element={<Address/>}></Route>
    </Routes>
  )
}

export default AllRoute