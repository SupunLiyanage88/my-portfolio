import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/free-solid-svg-icons';
import profilePic from './assets/Supun Liyanage profile pic.png';


function App() {
  return (
    <>
      {/* Header Section */}
      <header className="flex justify-between items-center px-32 bg-white shadow-md">
        <div className="text-[4.5rem] font-thin">LS</div>
        <nav className="flex ml-10 gap-10 text-xl">
          <a href="#" className="hover:text-blue-500">
             Home
          </a>
          <a href="#" className="hover:text-blue-500">
            Projects
          </a>
          <a href="#" className="hover:text-blue-500">
            About Me
          </a>
        </nav>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">Contact Me</button>
      </header>

      {/* Hero Section */}
      <section className="flex items-center justify-center text-center py-10">
        <div className="flex-1">
          <img
            src={profilePic}
            alt="Profile"
            className="w-[25rem] h-auto mx-auto"
          />
        </div>
        <div className="flex-1 mx-[10rem]">
          <h1 className="text-4xl font-semibold">Hi, I'm Supun Liyanage!</h1>
          <p className="text-lg mt-3 max-w-2xl mx-auto">
            A passionate <span className="font-semibold">software engineer</span> specializing in building innovative web and mobile applications. Explore my work and let's create something amazing together!
          </p>
          <div className="flex justify-center gap-5 mt-5">
            <a 
              href="https://www.linkedin.com/in/supun-liyanage-600790223" 
              className="text-blue-500 hover:underline" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a href="#" className="text-blue-500">GitHub</a>
            <button className="bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300">Download Resume</button>
          </div>
          <p className="mt-5">Malabe, Sri Lanka</p>
        </div>
      </section>




      <div className="flex justify-center mt-5 animate-bounce">
        <a href="#" className="text-blue-500 text-center items-center py-10">See More </a>
      </div>


      {/* What I Do Section */}
      <section className="py-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-center">What I do</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto mt-10">
          <div className="p-5 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Full-Stack Development</h3>
            <p>Proficient in developing both front-end and back-end applications using modern technologies like React, Node.js, and MongoDB.</p>
          </div>
          <div className="p-5 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Android App Development</h3>
            <p>Skilled in creating intuitive and functional mobile applications using Android Studio and Kotlin.</p>
          </div>
          <div className="p-5 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Web Design and Styling</h3>
            <p>Expert in designing responsive and visually appealing user interfaces with HTML, CSS, and JavaScript.</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-10">
        <h2 className="text-3xl font-bold text-center">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-6xl mx-auto mt-10">
          <div className="p-5 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold">SpendSence – Expense Tracker App</h3>
            <p>"Developed a mobile app tailored for students to manage their finances efficiently, featuring a dynamic frontend built with Android Studio (Java and XML) and a secure, real-time backend powered by Firebase. Key functionalities include budget setting, expense tracking, and interactive data visualization for actionable financial insights."</p>
          </div>
          <div className="p-5 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold">LunuMirisa Restaurant – Web Site</h3>
            <p>"Developed a full-stack solution for managing orders, inventory, and customer profiles. Designed a seamless user interface with responsive web components for efficient order management. Implemented a robust backend using Node.js and MongoDB to ensure reliable data storage and retrieval."</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-center">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto mt-10">
          <div className="p-5 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Frontend</h3>
            <p>HTML5, JavaScript, React, Tailwind, Bootstrap</p>
          </div>
          <div className="p-5 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Backend</h3>
            <p>Node.js, Express.js, Java, PHP, Python</p>
          </div>
          <div className="p-5 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Databases</h3>
            <p>MongoDB, MySQL, Microsoft SQL Server</p>
          </div>
          <div className="p-5 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Mobile Development</h3>
            <p>Android Studio, Firebase</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10">
        <h2 className="text-3xl font-bold text-center">Let’s Collaborate!</h2>
        <div className="max-w-4xl mx-auto mt-10 bg-gray-100 p-5 rounded-lg shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <h3 className="text-xl font-bold">Contact Me</h3>
              <p>Email: Liyanagesupun10@gmail.com</p>
              <p>Phone: +94 76 47 48 263</p>
              <h4 className="text-lg font-bold mt-3">Social Links</h4>
              <p>LinkedIn, GitHub</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Got a Message for me...</h3>
              <form>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-2 border rounded-lg mb-2"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-2 border rounded-lg mb-2"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-2 border rounded-lg mb-2"
                />
                <textarea
                  placeholder="Message"
                  className="w-full p-2 border rounded-lg mb-2"
                ></textarea>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
