"use client"
import React, { useState } from 'react';

const CareerPage = () => {
  const [jobs] = useState([
    { id: 1, title: 'Software Engineer', description: 'Develop and maintain software applications.' },
    { id: 2, title: 'Product Manager', description: 'Oversee product development from conception to launch.' },
    { id: 3, title: 'UX Designer', description: 'Design user interfaces and improve user experience.' },
  ]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume: null,
    jobId: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Careers</h1>
      <div className="mb-8">
        {jobs.map((job) => (
          <div key={job.id} className="border p-4 mb-4 rounded-lg shadow">
            <h2 className="text-2xl font-semibold">{job.title}</h2>
            <p className="mt-2">{job.description}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              onClick={() => setFormData({ ...formData, jobId: job.id })}
            >
              Apply
            </button>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Application Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Resume</label>
            <input
              type="file"
              name="resume"
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CareerPage;
