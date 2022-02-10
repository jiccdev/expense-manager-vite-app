import { Fragment, useState, useEffect } from 'react';

import TitlePage from '../components/Layout/TitlePage';
import Subtitle from '../components/Layout/Subtitle';
import Customer from '../components/Customer/Customer';

const Home = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const getApiCustomers = async () => {
      try {
        const url = 'http://localhost:4000/customers/';
        const res = await fetch(url);
        const result = await res.json();
        setCustomers(result);
      } catch (error) {
        console.log(error);
      }
    };
    getApiCustomers();
  }, []);

  const handleDelete = async (id) => {
    const confirmAlert = window.confirm('You want to delete this customer');
    if (confirmAlert) {
      try {
        const url = `http://localhost:4000/customers/${id}`;
        const res = await fetch(url, {
          method: 'DELETE',
        });
        await res.json();

        const arrayCustomers = customers.filter(
          (customer) => customer.id !== id
        );
        setCustomers(arrayCustomers);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div>
      <Fragment>
        <TitlePage>Customers</TitlePage>
        <Subtitle>Manage your Customers</Subtitle>

        <table className="w-full mt-5 table-auto bg-white">
          <thead className="text-gray-600 bg-slate-300 text-sm">
            <tr className="rounded-md">
              <th className="p-2">Name</th>
              <th className="p-2">Contact</th>
              <th className="p-2">Company</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <Customer
                key={customer.id}
                customer={customer}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </Fragment>
    </div>
  );
};

export default Home;
