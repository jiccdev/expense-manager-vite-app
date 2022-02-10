import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Route-elements
import Layout from './components/Layout/Layout';
import Home from './Pages/Home';
import EditCustomer from './Pages/EditCustomer';
import CreateCustomer from './Pages/CreateCustomer';
import ViewCustomer from './Pages/ViewCustomer';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/customers" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="create-customer" element={<CreateCustomer />} />
          <Route path="edit-customer/:id" element={<EditCustomer />} />
          <Route path=":id" element={<ViewCustomer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
