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
    <div id='general' className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Let us knowhow can we help</h1>
      <p className="text-lg font-bold mb-4 text-center">Got something in mind? We&apos;d love to help. <br></br>What are you looking for?</p>
      <p className="text-lg mb-4 text-center">Looking for UX/UI research or product branding?<br></br> Post your query now, and we&apos;ll get in touch with you soon!</p>
      
        
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
