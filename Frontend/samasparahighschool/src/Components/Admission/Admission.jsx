import React from "react";
import { Link } from "react-router-dom";

const Admission = () => {
  return (
    <div className="px-24 py-16 text-center bg-slate-300">
      <h1 className="text-4xl font-bold mb-4">Online Admission</h1>
      <p className="mb-8">
        Welcome to Samas Para High School's online admission portal. <br />
        Please fill out the following form to apply for admission to classes six
        to ten.
      </p>
      <form className="max-w-lg mx-auto">
        <div className="mb-4">
          <label
            className=" flex text-gray-700 text-sm font-bold mb-2 items-start"
            htmlFor="name"
          >
            Student Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label
            className="flex text-gray-700 text-sm font-bold mb-2 items-start"
            htmlFor="class"
          >
            Class
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="class"
          >
            <option value="six">Class Six</option>
            <option value="seven">Class Seven</option>
            <option value="eight">Class Eight</option>
            <option value="nine">Class Nine</option>
            <option value="ten">Class Ten</option>
          </select>
        </div>
        {/* Add more form fields for other details (e.g., address, date of birth, etc.) */}
        <div className="flex justify-center">
          <Link
            to="/payment" // Replace this with the route for the payment page
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Apply
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Admission;
