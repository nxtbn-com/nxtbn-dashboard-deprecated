import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Dashboard, Home, Login, Orders } from "./pages";
import { RootLayout } from "./layouts";

function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
}

export default App;
