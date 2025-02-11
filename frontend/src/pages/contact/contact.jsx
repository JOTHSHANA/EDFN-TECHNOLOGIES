import React, { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = "service_0pa5y0d";
    const templateId = "template_l33mqv9";
    const userId = "Ex1HaTpAQYDoXjFDp";

    emailjs
      .sendForm(serviceId, templateId, e.target, userId)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "We will get back to you soon!",
        });
        e.target.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please try again.",
        });
      })
      .finally(() => setLoading(false));
  };
  const handleScrollToSection = (sectionId) => {
    // setActive(sectionId);
    // setIsMobileMenuOpen(false);
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-[#111827] py-6 px-4 sm:px-6 lg:px-4 rounded-lg">
      <h2
        className="text-2xl font-bold text-center text-gray-100 mb-2"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        Contact Us
      </h2>
  
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-5">
        
        <div className="w-full lg:w-1/3 flex flex-col gap-2" data-aos="fade-down">
          <div className="flex gap-4 backdrop-blur-sm p-2 rounded-md shadow-sm hover:shadow-lg transition-shadow">
            <FaMapMarkerAlt className="text-2xl mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Our Office</h3>
              <p className="text-gray-400">NO. 233 GVG NAGAR</p>
              <p className="text-gray-400">UDUMALPET COIMBATORE - 642113</p>
              <br />
              <hr />
              <p className="text-gray-400 pt-1">NO. 153 SIVANANDHAPURAM</p>
              <p className="text-gray-400">SARAVANAMPATTY COIMBATORE - 641035</p>
            </div>
          </div>
  
          <div
            className="flex gap-4 backdrop-blur-sm p-2 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            <FaPhoneAlt className="text-2xl mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Contact Number</h3>
              <a className="text-gray-400" href="tel:+917708463838">
                +91 7708463838
              </a>
            </div>
          </div>
  
          <div
            className="flex gap-4 backdrop-blur-sm p-2 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <FaEnvelope className="text-2xl mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Email Address</h3>
              <a
                className="text-gray-400"
                href="mailto:sales@edfntechnologies.com"
              >
                sales@edfntechnologies.com
              </a>
            </div>
          </div>
        </div>
  
        <div
          className="w-full lg:w-1/3 backdrop-blur-sm rounded-sm shadow-sm p-2  transition-shadow"
          data-aos="fade-down"
        >
          <h2 className="text-2xl font-semibold text-gray-300 mb-8 text-center">
            Send Us a Message
          </h2>
          <form onSubmit={sendEmail} className="grid grid-cols-1 gap-3">
            <div>
              <label className="block text-gray-400 text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-1 py-1 border border-gray-700 rounded-md bg-gray-700 text-white 
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-gray-400 text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-1 py-1 border border-gray-700 rounded-md bg-gray-700 text-white 
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-gray-400 text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                name="message"
                required
                rows="5"
                className="w-full px-1 py-1 border border-gray-700 rounded-md bg-gray-700 text-white 
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 
                           transition-colors duration-300 disabled:bg-blue-400 disabled:cursor-not-allowed font-medium text-sm"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-3"
                      viewBox="0 0 24 24"
                    ></svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </form>
        </div>
  
        <div
          className="w-full lg:w-1/3 flex flex-col items-center justify-center backdrop-blur-sm 
                     rounded-xl  p-4  transition-shadow"
          data-aos="fade-down"
        >
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-2xl font-semibold text-gray-300 mb-4">Follow Us</h2>
            <div className="flex space-x-6 " >
              {[
                { icon: <FaFacebook />, color: "blue-600", link: "https://facebook.com" },
                { icon: <FaTwitter />, color: "blue-400", link: "https://twitter.com" },
                { icon: <FaLinkedin />, color: "blue-700", link: "https://linkedin.com" },
                { icon: <FaInstagram />, color: "pink-600", link: "https://instagram.com" },
              ].map((social, index) => (
                <a
  
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-${social.color} 
                  hover:text-${social.color}/80 
                  transition-colors duration-300`}
                >
                  {React.cloneElement(social.icon, { className: "text-3xl" })}
                </a>
              ))}
            
            </div>
            <div className=" flex flex-col gap-2">
                <button className="hover:text-purple-300" onClick={()=> handleScrollToSection("home")}>Home</button>
                <button className="hover:text-purple-300" onClick={()=> handleScrollToSection("about")}>About</button>
                <button className="hover:text-purple-300" onClick={()=> handleScrollToSection("services")}>Services</button>
                <button className="hover:text-purple-300" onClick={()=> handleScrollToSection("process")}>Process</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
    

};

export default Contact;
