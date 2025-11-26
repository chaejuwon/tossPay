import React from 'react';
import { Routes, Route, HashRouter, BrowserRouter } from "react-router-dom";
import Product from "./pages/Product";
import Pay from "./pages/Pay";
import Detail from "./pages/Detail";
import Container from "./component/layout/Container";
import Success from "./component/pay/success";
import Fail from "./component/pay/fail";

function App() {
  return (
    <HashRouter>
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
    </HashRouter>
  );
}

export default App;
