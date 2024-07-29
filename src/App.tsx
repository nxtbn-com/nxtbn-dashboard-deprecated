import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { 
  AddNewProduct,
  EditProduct,
  Customers,
  Dashboard,
  OrderDetails,
  Orders,
  Products,
  CategoryTable,
  Login,
  UserManagement,
  Plugin,
  Color,
  ProductTypeTable,
  CollectionTable,
 } from "./pages";

import {RootLayout, SettingsLayout } from "./layouts";
import PrivateRoute from './PrivateRoute';
import { General, Account, Payment, LinkAccount, Password, PushNotification } from "./components/settings";


function App() {
  return (
    <BrowserRouter>
        <Routes>
            {/* 
              Redirect root path to /login.
              This ensures that if a user navigates to the root URL, they are redirected to the login page.
              This setup avoids conflicts with Django URLs by considering all dashboard-related routes under /dashboard.
              It provides the flexibility to serve the dashboard via Django URLs and views or as an independent host/port.
            */}
            <Route path="/" element={<Navigate to="dashboard/login" replace />} />

            {/* 
              Dashboard routes that require RootLayout.
              These routes are nested under /dashboard to avoid conflicts with Django and to ensure a consistent layout.
            */}
            <Route path="dashboard/*" element={<PrivateRoute />}>
              <Route element={<RootLayout />}>
                  <Route index element={<Dashboard />} />
                  <Route path="orders" element={<Orders />} />
                  <Route path="orders/:id" element={<OrderDetails />} />

                  <Route path="products" element={<Products />} />
                    <Route path="products/categories" element={<CategoryTable />} />
                    <Route path="products/color" element={<Color />} />
                    <Route path="products/product-type" element={<ProductTypeTable />} />
                    <Route path="products/collection" element={<CollectionTable />} />


                  <Route path="products/add-new-product" element={<AddNewProduct />} />
                  <Route path="products/edit/:id" element={<EditProduct />} />

                  <Route path="user-management" element={<UserManagement/>}/>
                  <Route path="customers" element={<Customers />} />
                  <Route path="plugin" element={<Plugin/>} />

                  <Route path="settings/*" element={<SettingsLayout />}>
                    <Route index element={<General/>}/>
                    <Route path="account" element={<Account />} />
                    <Route path="payment-and-billing" element={<Payment/>}/>
                    <Route path="link-account" element={<LinkAccount/>}/>
                    <Route path="password" element={<Password/>}/>
                    <Route path="push-notification" element={<PushNotification/>}/>
                  </Route>
                
              </Route>
            </Route>

            {/* 
              Login route.
              This route is outside the RootLayout to provide a distinct layout for the login page.
            */}
            <Route path="dashboard/login" element={<Login />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
