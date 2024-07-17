"use client";
import { useState } from 'react';

export default function Project_Enquiry() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission
    console.log('Form submitted');
  };

  return (
    <div id='letsTalk' className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Let's craft brilliance together</h1>
      <p className="text-lg font-bold mb-4 text-center">Got something in mind? We'd love to help. <br></br>Tell us about your project requirement</p>
      <p className="text-lg mb-4 text-center">Looking for UX/UI research or product branding?<br></br> Post your query now, and we'll get in touch with you soon!</p>
      
        <ul className="flex flex-wrap justify-center text-sm font-medium text-center bg-link">
          <li className="me-2">
            <button href="#" className="inline-block px-4 py-3 text-white bg-blue-600 rounded-lg active" aria-current="page">Project</button>
          </li>
          <li className="me-2">
            <button href="#" className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">Jobs/Careers</button>
          </li>
          <li className="me-2">
            <button href="#" className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">General</button>
          </li>
        </ul>
      <div className="enquiry mb-8">
      
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <p className="text-lg font-semibold mb-2">Important</p>
        <p className="mb-4">If you have a requirement brief or document, share it with us here. Attach your Project Document (File size not more than 2 MB)</p>
        
        <div className="mb-4">
          <label className="block mb-2 text-lg font-semibold">Project Details</label>
          <textarea 
            placeholder="Describe your project..." 
            className="w-full p-2 border border-gray-300 rounded-lg mb-2 "
          ></textarea>
        </div>
        
        <div className="mb-4 border-2 border-dashed border-gray-300 p-4 rounded-lg text-center">
          <label htmlFor="file-upload" className="cursor-pointer text-blue-500">
            Attach your project documents
          </label>
          <input 
            id="file-upload" 
            type="file" 
            onChange={handleFileChange} 
            className="hidden"
          />
        </div>
        
        <p className="text-red-500 mb-4">No Resumes Please</p>
        <div className="mb-4">
          <label className="block mb-2 text-lg font-semibold">Your details</label>
            <p className="text-md font-light mb-2">Project related discussions only, please!</p>

          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full p-2 border border-gray-300 rounded-lg mb-2 "
          />
          <input 
            type="email" 
            placeholder="Your Email"     
            className="w-full p-2 border border-gray-300 rounded-lg mb-2"
          />
           <input 
            type="tel" 
            placeholder="Your Phone"     
            className="w-full p-2 border border-gray-300 rounded-lg mb-2 "
          />
           <input 
            type="submit" 
            value="Send Enquiry"     
            className="w-full p-2 border border-gray-300 cursor-pointer rounded-lg hover:text-white hover:bg-blue-600 "
          />
        </div>
        
      </form>
      </div>

    </div>
  );
}
