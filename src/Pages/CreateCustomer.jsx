import { Fragment } from 'react';

import TitlePage from '../components/Layout/TitlePage';
import Subtitle from '../components/Layout/Subtitle';
import CustomerForm from '../components/CustomerForm/CustomerForm';

const CreateCustomer = () => {
  return (
    <Fragment>
      <TitlePage>New Customer</TitlePage>
      <Subtitle>
        Fill in all the fields of the form to register the client
      </Subtitle>
      <CustomerForm />
    </Fragment>
  );
};

export default CreateCustomer;
