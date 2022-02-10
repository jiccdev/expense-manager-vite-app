import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

import Spinner from '../Spinner/Spinner';

import Alert from '../Alert/Alert';

const CustomerForm = ({ customer, spinner }) => {
  const navigate = useNavigate();
  const newCustomerSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'The Name is too short')
      .max(50, 'The Name is Long')
      .required('The Customer Name is required'),
    company: Yup.string().required('The Company name is required'),
    email: Yup.string()
      .email('Email must be a valid email')
      .required('The E-mail is required'),
    telephone: Yup.number()
      .integer('Not valid number')
      .positive('Negative number?')
      .typeError('Number is not valid'),
    notes: '',
  });

  const handleSubmit = async (values) => {
    try {
      let res;
      if (customer.id) {
        // Editing a register
        const url = `${import.meta.env.VITE_API_URL}/${customer.id}`;
        res = await fetch(url, {
          method: 'PUT',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json',
          },
        });
      } else {
        // New Register
        const url = import.meta.env.VITE_API_URL;
        res = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json',
          },
        }); //Cuando voy a eliminar un registro no es solo la url, sino que la configuracion de la peticion
      }
      await res.json();
      navigate('/customers');
    } catch (error) {
      console.log(error);
    }
  };

  return spinner ? (
    <Spinner />
  ) : (
    <div className="flex flex-col items-center justify-center my-3 rounded-md">
      <Formik
        initialValues={{
          name: customer?.name ?? '',
          company: customer?.company ?? '',
          email: customer?.email ?? '',
          telephone: customer?.telephone ?? '',
          notes: customer?.notes ?? '',
        }}
        enableReinitialize={true}
        onSubmit={async (inputValues, { resetForm }) => {
          await handleSubmit(inputValues);
          resetForm();
        }}
        validationSchema={newCustomerSchema}
      >
        {({ errors, touched }) => {
          return (
            <Form className="flex flex-col w-3/4 p-7 my-3 border rounded-md md:w-full bg-white border-gray-200 text-gray-200">
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-600">
                  Name:
                </label>
                <Field
                  type="text"
                  name="name"
                  className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Customer name"
                />

                {errors.name && touched.name ? (
                  <Alert>{errors.name}</Alert>
                ) : null}
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-600">
                  Company:
                </label>
                <Field
                  type="text"
                  name="company"
                  className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Customer company"
                />

                {errors.company && touched.company ? (
                  <Alert>{errors.company}</Alert>
                ) : null}
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-600">
                  E-mail:
                </label>
                <Field
                  type="email"
                  name="email"
                  className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg block w-full p-2.5"
                  placeholder="customer@email.com"
                />

                {errors.email && touched.email ? (
                  <Alert>{errors.email}</Alert>
                ) : null}
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-600">
                  telephone:
                </label>
                <Field
                  type="tel"
                  name="telephone"
                  className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg block w-full p-2.5"
                  placeholder="+1"
                />

                {errors.telephone && touched.telephone ? (
                  <Alert>{errors.telephone}</Alert>
                ) : null}
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-600">
                  Notes:
                </label>
                <Field
                  type="text"
                  as="textarea"
                  name="notes"
                  className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Customer notes"
                />
              </div>
              <input
                type="submit"
                value={customer?.name ? 'Edit Customer' : 'Add Customer'}
                className="cursor-pointer py-2 rounded-md bg-purple-600 hover:bg-purple-700"
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

CustomerForm.defaultProps = {
  customer: {},
  spinner: false,
};

export default CustomerForm;
