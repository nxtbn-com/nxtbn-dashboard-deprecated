import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AddNewProduct, Customers, Dashboard, Home, Login, OrderDetails, Orders, Products } from "./pages";
import { RootLayout } from "./layouts";

function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/:id" element={<OrderDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/add-new-product" element={<AddNewProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/customers" element={<Customers />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
}

export default App;
