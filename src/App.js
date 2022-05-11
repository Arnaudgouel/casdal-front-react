import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Layout, Menu } from './views';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='' element={<Home/>}/>
            <Route path='category/:id' element={<Home display={"category"}/>}/>
            <Route path='menu/:id' element={<Menu/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
