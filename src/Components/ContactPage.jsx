import React, { useState, useEffect } from 'react';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaGithub, 
  FaPaperPlane,
  FaArrowRight,
  FaFacebook
} from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xrbebwvr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowSuccessMessage(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Rest of the component remains exactly the same as your current code
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 mt-10">
      {/* Your existing JSX code stays exactly the same */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-[fadeInDown_1s_ease-out_forwards]">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400 inline-block text-transparent bg-clip-text">
            Let's Connect
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Have an idea? Let's bring it to life together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-3xl p-8 shadow-lg opacity-0 animate-[fadeInLeft_1s_ease-out_0.3s_forwards]">
            <h2 className="text-2xl font-semibold mb-8 text-gray-800">Contact Details</h2>
            
            <div className="space-y-6">
              <div className="group flex items-center p-4 bg-gray-50 rounded-2xl transition-all duration-300 hover:bg-gray-100 cursor-pointer">
                <div className="p-3 bg-gray-200 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  <FaEnvelope className="text-gray-700 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href="mailto:liyanagesupun10@gmail.com" className="text-gray-800 group-hover:text-gray-600">
                    liyanagesupun10@gmail.com
                  </a>
                </div>
              </div>

              <div className="group flex items-center p-4 bg-gray-50 rounded-2xl transition-all duration-300 hover:bg-gray-100 cursor-pointer">
                <div className="p-3 bg-gray-200 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  <FaPhone className="text-gray-700 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <a href="tel:+94764748263" className="text-gray-800 group-hover:text-gray-600">
                    +94 76 474 8263
                  </a>
                </div>
              </div>

              <div className="group flex items-center p-4 bg-gray-50 rounded-2xl transition-all duration-300 hover:bg-gray-100 cursor-pointer">
                <div className="p-3 bg-gray-200 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  <FaMapMarkerAlt className="text-gray-700 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-gray-800 group-hover:text-gray-600">Malabe, Sri Lanka</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-lg font-semibold mb-6 text-gray-800">Social Links</h3>
              <div className="flex space-x-4">
                {['linkedin', 'github', 'facebook'].map((social) => (
                  <a
                    key={social}
                    href={
                      social === 'linkedin'
                        ? 'https://www.linkedin.com/in/supun-liyanage-600790223'
                        : social === 'github'
                        ? 'https://github.com/SupunLiyanage88'
                        : social === 'facebook'
                        ? 'https://www.facebook.com/supun.liyanage08/'
                        : '#'
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gray-100 rounded-2xl hover:bg-gray-200 transition-all duration-300 hover:scale-110"
                  >
                    {social === 'linkedin' && <FaLinkedin className="text-gray-700 text-xl" />}
                    {social === 'github' && <FaGithub className="text-gray-700 text-xl" />}
                    {social === 'facebook' && <FaFacebook className="text-gray-700 text-xl" />}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-lg opacity-0 animate-[fadeInRight_1s_ease-out_0.6s_forwards]">
            <h2 className="text-2xl font-semibold mb-8 text-gray-800">Send a Message</h2>

            {showSuccessMessage && (
              <div className="bg-green-50 border border-green-200 p-4 mb-6 rounded-2xl animate-[fadeIn_0.3s_ease-out]">
                <div className="flex items-center">
                  <FaPaperPlane className="text-green-600 text-xl mr-3" />
                  <p className="text-green-600">Your message has been sent successfully! I will get in touch with you shortly.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {['name', 'email', 'message'].map((field) => (
                <div key={field} className="relative">
                  <label
                    htmlFor={field}
                    className={`absolute left-4 transition-all duration-300 ${
                      focusedInput === field || formData[field]
                        ? '-top-3 text-sm bg-white px-2 text-gray-600'
                        : 'top-3 text-gray-400'
                    }`}
                  >
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  {field === 'message' ? (
                    <textarea
                      id={field}
                      name={field}
                      rows="5"
                      value={formData[field]}
                      onChange={handleChange}
                      onFocus={() => setFocusedInput(field)}
                      onBlur={() => setFocusedInput(null)}
                      className="w-full bg-gray-50 rounded-2xl px-4 py-3 text-gray-800 border border-gray-200 focus:border-gray-400 focus:ring-2 focus:ring-gray-200 transition-all duration-300 resize-none"
                      required
                    />
                  ) : (
                    <input
                      id={field}
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      onFocus={() => setFocusedInput(field)}
                      onBlur={() => setFocusedInput(null)}
                      className="w-full bg-gray-50 rounded-2xl px-4 py-3 text-gray-800 border border-gray-200 focus:border-gray-400 focus:ring-2 focus:ring-gray-200 transition-all duration-300"
                      required
                    />
                  )}
                </div>
              ))}

              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full py-4 px-6 rounded-2xl bg-gray-900 text-white font-medium 
                  transition-all duration-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300
                  flex items-center justify-center space-x-2"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;