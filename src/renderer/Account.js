import React from 'react';

const Account = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-3xl font-bold mb-8 text-left">Account</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="text-gray-700 font-bold">Name:</label>
          <p className="text-gray-800">John Doe</p>
        </div>
        <div className="mb-4">
          <label className="text-gray-700 font-bold">Email:</label>
          <p className="text-gray-800">johndoe@example.com</p>
        </div>
        <div className="mb-4">
          <label className="text-gray-700 font-bold">Member Since:</label>
          <p className="text-gray-800">January 1, 2022</p>
        </div>
        {/* Add additional account information here */}
      </div>
    </div>
  );
};

export default Account;
