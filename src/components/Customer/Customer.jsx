import React from 'react';
import { useNavigate } from 'react-router-dom';

const Customer = ({ customer, handleDelete }) => {
  const navigate = useNavigate();
  const { name, company, email, telephone, notes, id } = customer;
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="p-2">{name}</td>
      <td className="p-2">
        <p>
          <span className="text-gray-800">Email:</span>
          {email}
        </p>

        <p>
          <span className="text-gray-800">Tel:</span>
          {telephone}
        </p>
      </td>
      <td className="p-2">{company}</td>
      <td className="p-2">
        <button
          type="Edit"
          onClick={() => navigate(`/customers/${id}`)}
          className="bg-slate-500 px-3 py-1 m-1.5 text-white block w-full rounded-md hover:bg-blue-600 "
        >
          View
        </button>

        <button
          type="Edit"
          onClick={() => navigate(`/customers/edit-customer/${id}`)}
          className="bg-blue-500 px-3 py-1 m-1.5 text-white block w-full rounded-md hover:bg-blue-600 "
        >
          Edit
        </button>
        <button
          type="Edit"
          onClick={() => handleDelete(id)}
          className="bg-red-500 px-3 py-1 m-1.5 text-white block w-full rounded-md hover:bg-red-600 "
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Customer;
