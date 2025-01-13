import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactPage = () => {
  const contactInfo = {
    email: 'liyanagesupun10@gmail.com',
    phone: '+94 76 4748 263'
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg">
        <div className="p-6">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Contact Me
            </h1>
          </div>

          <div className="space-y-6">
            {/* Coming Soon Banner */}
            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-200 rounded-lg p-4">
              <h2 className="text-xl font-semibold text-yellow-800 mb-2 flex items-center justify-center gap-2">
                <span className="animate-pulse">🚧</span>
                Contact Form Coming Soon
                <span className="animate-pulse">🚧</span>
              </h2>
              
              {/* Terminal Animation */}
              <div className="my-6">
                <div className="mx-auto max-w-md bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                  <div className="bg-gray-800 flex items-center p-2 relative">
                    <div className="flex absolute left-2">
                      <span className="h-3 w-3 bg-red-500 rounded-full mr-2"></span>
                      <span className="h-3 w-3 bg-yellow-500 rounded-full mr-2"></span>
                      <span className="h-3 w-3 bg-green-500 rounded-full"></span>
                    </div>
                    <div className="flex-1 text-center text-gray-300 text-sm font-mono">
                      development
                    </div>
                  </div>
                  <div className="p-4 font-mono text-sm">
                    <div className="text-green-400 flex items-center">
                      <span className="mr-2">$ Building contact form</span>
                      <span className="flex">
                      <span class="animate-[ping_1.5s_0.5s_ease-in-out_infinite]">.</span>
                      <span class="animate-[ping_1.5s_0.7s_ease-in-out_infinite]">.</span>
                      <span class="animate-[ping_1.5s_0.9s_ease-in-out_infinite]">.</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-700 text-center">
                Meanwhile, you can reach me directly at:
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-400 transition-colors">
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span className="text-gray-600">{contactInfo.email}</span>
                  </div>
                  <button 
                    onClick={() => handleCopy(contactInfo.email)}
                    className="px-3 py-1 text-sm text-gray-600 hover:bg-blue-50 rounded-md transition-colors"
                  >
                    Copy
                  </button>
                </div>

                <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-400 transition-colors">
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faPhone} />
                    <span className="text-gray-600">{contactInfo.phone}</span>
                  </div>
                  <button 
                    onClick={() => handleCopy(contactInfo.phone)}
                    className="px-3 py-1 text-sm text-gray-600 hover:bg-blue-50 rounded-md transition-colors"
                  >
                    Copy
                  </button>
                </div>
              </div>
            </div>

            {/* Status Message */}
            <p className="text-center text-gray-500 text-sm">
              I've actively working on making this page even better for you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;