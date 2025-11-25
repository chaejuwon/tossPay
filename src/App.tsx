import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Product from "./pages/Product";
import Pay from "./pages/Pay";
import Detail from "./pages/Detail";
import Container from "./component/layout/Container";
import Success from "./component/pay/Success";
import Fail from "./component/pay/Fail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Container />}>
          <Route path="/" element={<Product />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pay" element={<Pay />}/>
          <Route path="/pay/success" element={<Success />} />
          <Route path="/pay/fail" element={<Fail />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
