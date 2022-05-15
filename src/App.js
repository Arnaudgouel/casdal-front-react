import { Fragment, useMemo, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartContext } from './utils';
import { Protected } from './utils/protected';
import { Addresses, Cart, Home, Layout, Login, Menu, Orders, Profile } from './views';


function App() {
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const value = useMemo(
    () => ({price, quantity, setPrice, setQuantity}),
    [price, quantity]
  )
  return (
    <Fragment>
      <CartContext.Provider value={value}>
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/' element={<Layout/>}>
              <Route path='' element={<Home/>}/>
                <Route path='category/:id' element={<Protected><Home display={"category"}/></Protected>}/>
                <Route path='menu/:id' element={<Protected><Menu/></Protected>}/>
                <Route path='cart' element={<Protected><Cart/></Protected>}/>
                <Route path='profile' element={<Protected><Profile/></Protected>}/>
                <Route path='address' element={<Protected><Addresses/></Protected>}/>
                <Route path='my-orders' element={<Protected><Orders/></Protected>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </Fragment>
  );
}

export default App;
