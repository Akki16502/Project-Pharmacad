import React from "react";

const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const CheckoutForm = () => {
  return (
    <div className="mx-auto max-w-screen-xl p-4">
      <h2 className="text-4xl font-semibold pt-10 mb-8">Payment Checkout</h2>
      <form className="w-full md:flex md:flex-row md:justify-between ">
        <div className="flex flex-col mb-4 md:w-1/2 md:mr-4">
          <div>
            <label className="block mb-2 font-normal">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2 mb-4"
              required
            />
          </div>
          <div>
            <label className="block mb-4 font-normal">
              WhatsApp number<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2 mb-4"
              required
            />
          </div>
          <div>
            <label className="block mb-4 font-normal">
              Alternate mobile number
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2 mb-4"
            />
          </div>
          <div>
            <label className="block mb-4 font-normal">
              Email ID<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md p-2 mb-4"
              required
            />
          </div>
          <div>
            <label className="block mb-4 font-normal">
              Age<span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded-md p-2 mb-4"
              required
            />
          </div>
          <div className="col-span-2">
            <label className="block mb-4 font-normal">
              Course Purchased<span className="text-red-500">*</span>
            </label>
            <select
              className="w-full border border-gray-300 rounded-md p-2"
              required
            >
              <option value="">Select Course</option>
              <option value="course1">Course 1</option>
              <option value="course2">Course 2</option>
              <option value="course3">Course 3</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col mb-4 md:w-1/2 md:ml-4">
          <div>
            <label className="block mb-2 font-normal">
              Education<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2 mb-4"
              required
            />
          </div>
          <div>
            <label className="block mb-4 font-normal">
              College<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2 mb-4"
              required
            />
          </div>

          <div>
            <label className="block mb-4 font-normal">District</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2 mb-4"
            />
          </div>

          <div>
            <label className="block mb-4 font-normal">
              State<span className="text-red-500">*</span>
            </label>
            <select
              className="w-full border border-gray-300 rounded-md p-2 mb-4"
              required
            >
              <option value="">Select State</option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-4 font-normal">
              Current Semester<span className="text-red-500">*</span>
            </label>
            <select
              className="w-full border border-gray-300 rounded-md p-2 mb-4"
              required
            >
              <option value="">Select Current Semester</option>
              <option value="1">Semester 1</option>
              <option value="2">Semester 2</option>
              <option value="3">Semester 3</option>
              <option value="4">Semester 4</option>
              <option value="5">Semester 5</option>
              <option value="6">Semester 6</option>
              <option value="7">Semester 7</option>
              <option value="8">Semester 8</option>
              <option value="9">other</option>
              {/* Add more options for other semesters */}
            </select>
          </div>
        </div>
      </form>
      <div className="flex justify-start mt-6 my-6">
        <button className="bg-indigo-700 hover:bg-sky-600 text-white font-normal py-2 px-4 rounded-lg w-50 float-left mb-4">
          Confirm Payment
        </button>
      </div>
    </div>
  );
};

export default CheckoutForm;
