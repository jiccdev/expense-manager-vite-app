import { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import TitlePage from '../components/Layout/TitlePage';
import Subtitle from '../components/Layout/Subtitle';
import CustomerForm from '../components/CustomerForm/CustomerForm';

const EditCustomer = () => {
  const [customer, setCustomer] = useState({});
  const [loading, setLoading] = useState(false);
  const [spinner, setSpinner] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    setLoading(!loading);
    const getApiClient = async () => {
      try {
        const url = `${import.meta.env.VITE_API_URL}/${id}`;
        const res = await fetch(url);
        const result = await res.json();
        setCustomer(result);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
      setSpinner(!spinner);
    };
    getApiClient();
  }, []);
  return (
    <Fragment>
      <TitlePage>Edit Customer</TitlePage>
      <Subtitle>Use this form to edit customer data</Subtitle>
      {customer?.name ? (
        <CustomerForm customer={customer} spinner={spinner} />
      ) : (
        <div
          className="bg-orange-100 border-l-4 my-2 border-orange-500 text-orange-700 p-4"
          role="alert"
        >
          <p className="font-bold">Sorry</p>
          <p>Customer not found!</p>
        </div>
      )}
    </Fragment>
  );
};

export default EditCustomer;
