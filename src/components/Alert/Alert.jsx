const Alert = ({ children }) => {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 text-sm px-4 py-3 my-2 rounded relative">
      {children}
    </div>
  );
};

export default Alert;
