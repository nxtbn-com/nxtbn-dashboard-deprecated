import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddNewProduct, Customers, Dashboard, Home, Login, OrderDetails, Orders, Products } from "./pages";
import RootLayout from "./layouts/RootLayout"; // Import correctly

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes that require RootLayout */}
        <Route path="/dashboard" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="orders/:id" element={<OrderDetails />} />
          <Route path="products" element={<Products />} />
          <Route path="products/add-new-product" element={<AddNewProduct />} />
          <Route path="customers" element={<Customers />} />
        </Route>

        {/* Route without RootLayout */}
        <Route path="dashboard/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
