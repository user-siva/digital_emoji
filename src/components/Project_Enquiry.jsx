"use client"
import { useState } from 'react';

export default function TabPanel() {
  const [activeTab, setActiveTab] = useState(0);

  const EnquiryComponent = () => {
    const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

    return (
      <div id='general' className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Let us know how we can help</h1>
        <p className="text-lg font-bold mb-4 text-center">Got something in mind? We'd love to help. <br></br>What are you looking for?</p>
        <p className="text-lg mb-4 text-center">Looking for UX/UI research or product branding?<br></br> Post your query now, and we'll get in touch with you soon!</p>
        
        <div className="enquiry mb-8">
          <form className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
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
  const GeneralComponent = () => {
    return (
        <div id='general' className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Let us knowhow can we help</h1>
        <p className="text-lg font-bold mb-4 text-center">Got something in mind? We'd love to help. <br></br>What are you looking for?</p>
        <p className="text-lg mb-4 text-center">Looking for UX/UI research or product branding?<br></br> Post your query now, and we'll get in touch with you soon!</p>
        
        <div className="enquiry mb-8">
        
        <form className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
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

  const tabs = [
    { name: 'Projects', content: <EnquiryComponent /> },
    { name: 'Career/Job', content: 'This is the content of Tab 3' },
    { name: 'General', content: <GeneralComponent/> },
  ];

  return (
    <div className="max-w-xl mx-auto mt-10">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-4" aria-label="Tabs">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`${
                activeTab === index
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }  whitespace-nowrap py-4 px-1 border-b-2 font-medium text-3xl`}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>
      <div className="mt-4">
        {tabs.map((tab, index) => (
          <div key={index} className={`${activeTab === index ? 'block' : 'hidden'}`}>
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}
