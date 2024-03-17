"use client";
import React, { useState } from "react";

export const FormComponent = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [education, setEducation] = useState("");
  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [currentAddress, setCurrentAddress] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <div className="flex justify-center items-center mt-10 mx-auto mb-8 px-4 md:px-8 overflow-hidden md:w-auto">
      <div className="container px-4 md:px-8 sm:p-8">
        <h2 className="text-3xl text-center font-semibold mb-4">
          Enrollment Form
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 items-center">
            <div className="form-group">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name (EN)<span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent w-[100%]"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email<span className="text-red-700">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent w-[100%]"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray-700"
              >
                Gender<span className="text-red-700">*</span>
              </label>
              <select
                id="gender"
                name="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent w-[100%]"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="form-group">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number<span className="text-red-700">*</span>
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent w-[100%]"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="dateOfBirth"
                className="block text-sm font-medium text-gray-700"
              >
                Date of Birth<span className="text-red-700">*</span>
              </label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                required
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent w-[100%]"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="education"
                className="block text-sm font-medium text-gray-700"
              >
                Education<span className="text-red-700">*</span>
              </label>
              <select
                id="education"
                name="education"
                value={education}
                onChange={(e) => setEducation(e.target.value)}
                required
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent w-[100%]"
              >
                <option value="">Select Education</option>
                <option value="high_school">High School</option>
                <option value="college">College</option>
                <option value="university">University</option>
              </select>
            </div>
            <div className="form-group mt-0">
              <label
                htmlFor="placeOfBirth"
                className="block text-sm font-medium text-gray-700"
              >
                Place of Birth<span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                id="placeOfBirth"
                name="placeOfBirth"
                value={placeOfBirth}
                onChange={(e) => setPlaceOfBirth(e.target.value)}
                required
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent w-[100%]"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="currentAddress"
                className="block text-sm font-medium text-gray-700"
              >
                Current Address<span className="text-red-700">*</span>
              </label>
              <select
                id="currentAddress"
                name="currentAddress"
                value={currentAddress}
                onChange={(e) => setCurrentAddress(e.target.value)}
                required
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent w-full"
              >
                <option value="">Select Address</option>
                <option value="123 Main St, City, State, ZIP">
                  123 Main St, City, State, ZIP
                </option>
              </select>
            </div>
            <div className="form-group">
              <label
                htmlFor="course"
                className="block text-sm font-medium text-gray-700"
              >
                Course <span className="text-red-700">*</span>
              </label>
              <select
                id="course"
                name="course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                required
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent w-[100%]"
              >
                <option value="">Select Course</option>
                <option value="C++">C++</option>
                <option value="JAVA">JAVA</option>
                <option value="Python">Python</option>
                <option value="JavaScript">JavaScript</option>
              </select>
            </div>
            <div className="form-group">
              <label
                htmlFor="university"
                className="block text-sm font-medium text-gray-700"
              >
                University <span className="text-red-700">*</span>
              </label>
              <select
                id="university"
                name="university"
                onChange={(e) => setCourse(e.target.value)}
                required
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent w-[100%]"
              >
                <option value=""> Select University</option>
                <option value="RUPP">RUPP</option>
                <option value="SETEC">SETEC</option>
              </select>
            </div>
            <div className="flex justify-start mt-4">
                <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                Enroll Now
                </button>
            </div> 
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormComponent;
