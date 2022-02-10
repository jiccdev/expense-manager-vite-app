import { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import TitlePage from '../components/Layout/TitlePage';
import Subtitle from '../components/Layout/Subtitle';
import Spinner from '../components/Spinner/Spinner';

const ViewCustomer = () => {
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

  return spinner ? (
    <Spinner />
  ) : (
    <div className="border rounded-md p-4 bg-gray-100">
      {loading ? (
        'Fetching data...'
      ) : (
        <Fragment>
          <TitlePage>Customer: {customer.name}</TitlePage>
          <Subtitle>Customer Information</Subtitle>
          <div className="w-full border-t my-2 border-gray-300"></div>

          <section className="mt-2">
            {customer.name && (
              <p className="text-gray-500 py-2">
                <span className="text-gray-800 font-semibold"> Name:</span>{' '}
                {customer.name}
              </p>
            )}

            {customer.company && (
              <p className="text-gray-500 py-2">
                <span className="text-gray-800 font-semibold"> Company:</span>{' '}
                {customer.company}
              </p>
            )}

            {customer && (
              <p className="text-gray-500 py-2">
                <span className="text-gray-800 font-semibold"> E-mail:</span>{' '}
                {customer.email}
              </p>
            )}

            {customer.telephone && (
              <p className="text-gray-500 py-2">
                <span className="text-gray-800 font-semibold"> Telephone:</span>{' '}
                {customer.telephone}
              </p>
            )}

            {customer.notes && (
              <p className="text-gray-500 py-2">
                <span className="text-gray-800 font-semibold"> Notes:</span>{' '}
                {customer.notes}
              </p>
            )}
          </section>
        </Fragment>
      )}
    </div>
  );
};

export default ViewCustomer;
