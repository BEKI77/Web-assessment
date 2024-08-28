import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faYoutube, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-3 bottom-0 w-full">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Get involved in improving tech education in Africa!</h2>
            <button className="bg-blue-600 text-white px-4 py-2 rounded mt-2">Support Us</button>
          </div>

          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Links</h2>
            <ul className="list-none space-y-2">
              <li><a href="/home" className="text-gray-700 hover:underline">Home</a></li>
              <li><a href="/success-stories" className="text-gray-700 hover:underline">Success Stories</a></li>
              <li><a href="/about-us" className="text-gray-700 hover:underline">About Us</a></li>
              <li><a href="/get-involved" className="text-gray-700 hover:underline">Get Involved</a></li>
            </ul>
          </div>

          <div className="w-full md:w-1/3">
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-2">Teams</h2>
              <ul className="list-none space-y-2">
                <li><a href="/board-members" className="text-gray-700 hover:underline">Board Members</a></li>
                <li><a href="/advisors-mentors" className="text-gray-700 hover:underline">Advisors/Mentors</a></li>
                <li><a href="/executives" className="text-gray-700 hover:underline">Executives</a></li>
                <li><a href="/staff" className="text-gray-700 hover:underline">Staff</a></li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">Blogs</h2>
              <ul className="list-none space-y-2">
                <li><a href="/recent-blogs" className="text-gray-700 hover:underline">Recent Blogs</a></li>
                <li><a href="/new-blog" className="text-gray-700 hover:underline">New Blog</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-10">
          <div className="flex space-x-4">
            <a href="https://twitter.com" className="text-gray-500 hover:text-gray-700">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="https://facebook.com" className="text-gray-500 hover:text-gray-700">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="https://youtube.com" className="text-gray-500 hover:text-gray-700">
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </a>
            <a href="https://linkedin.com" className="text-gray-500 hover:text-gray-700">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a href="https://instagram.com" className="text-gray-500 hover:text-gray-700">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </div>

          <p className="text-gray-500 text-sm mt-4">© 2020 Africa to Silicon Valley, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
