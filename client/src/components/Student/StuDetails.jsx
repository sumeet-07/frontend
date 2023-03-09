import React, { useState } from "react";
import pic1 from "../assets/pic1.jpg";

const StuDetails = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    prn: "",
    batch: "Sept_2021",
    submitDate: "",
    rollNo: "",
  });

  const handleChange = (e) => {
    let data = formData;
    data[e.target.name] = e.target.value;
    setFormData(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios.post("localhost://8080/", formData).then();
  };

  return (
    <main className="h-[120vh] flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-blue-200 flex rounded-lg w-1/2 bg-opacity-50 backdrop-blur-sm shadow-md"
      >
        <div className=" flex-1 justify-center  text-gray-700 p-20">
          <h1 className="text-3xl font-semibold pb-2">Student Details</h1>
          <p className="text-lg text-gray-500">
            Fill the personal details of the student.
          </p>
          <div className="mt-6 ">
            <div className="pb-4">
              <label
                className="block font-medium text-sm pb-2"
                for="first-name"
              >
                First Name:
              </label>
              <input
                onChange={handleChange}
                className=" border-2 border-gray-500 text-sm font-medium p-2 rounded-md w-1/2 focus:border-blue-500 focus:ring-blue-500"
                type="text"
                name="firstName"
                placeholder="First Name"
              />
            </div>
            <div className="pb-4">
              <label className="block font-medium text-sm pb-2" for="last-name">
                Last Name:
              </label>
              <input
                onChange={handleChange}
                className=" border-2 border-gray-500 text-sm font-medium p-2 rounded-md w-1/2 focus:border-blue-500 focus:ring-blue-500"
                type="text"
                name="lastName"
                placeholder="Last Name"
              />
            </div>
            <div className="pb-4">
              <label className="block font-medium text-sm pb-2" for="prn">
                PRN No.:
              </label>
              <input
                onChange={handleChange}
                className=" border-2 border-gray-500 text-sm font-medium p-2 rounded-md w-1/2 focus:border-blue-500 focus:ring-blue-500"
                type="text"
                name="prn"
                placeholder="Enter PRN Number"
              />
            </div>
            <div className="pb-4">
              <label className="block font-medium text-sm pb-2" for="roll">
                Roll No.:
              </label>
              <input
                onChange={handleChange}
                className=" border-2 border-gray-500 text-sm font-medium p-2 rounded-md w-1/2 focus:border-blue-500 focus:ring-blue-500"
                type="text"
                name="rollNo"
                placeholder="Enter Roll Number"
              />
            </div>
            <div className="pb-4">
              <label className="block font-medium text-sm pb-2" for="email">
                Email:
              </label>
              <input
                onChange={handleChange}
                className=" border-2 border-gray-500 text-sm font-medium p-2 rounded-md w-1/2 focus:border-blue-500 focus:ring-blue-500"
                type="email"
                name="email"
                placeholder="Enter Email"
              />
            </div>
            <div className="pb-4">
              <label className="block font-medium text-sm pb-2" for="date">
                Submit Date:
              </label>
              <input
                onChange={handleChange}
                className=" border-2 border-gray-500 text-sm font-medium p-2 rounded-md w-1/2 focus:border-blue-500 focus:ring-blue-500"
                type="date"
                name="submitDate"
                placeholder="Enter Date Submitted"
              />
            </div>
            <div className="pb-4">
              <label className="block font-medium text-sm pb-2" for="date">
                Batch:
              </label>
              <select
                name="batch"
                className="border-2 border-gray-500 text-sm font-medium p-2 rounded-md w-1/2 focus:border-blue-500 focus:ring-blue-500"
                onChange={handleChange}
              >
                <option value="Sept_2021">Sept_2021</option>
                <option value="Mar_2021">Mar_2021</option>
                <option value="Sept_2022">Sept_2022</option>
                <option value="Mar__2022">Mar__2022</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-md font-medium text-white py-3 mt-6 rounded-lg  w-[100px]"
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </main>
  );
};

export default StuDetails;
