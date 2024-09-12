import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faYoutube, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex  justify-center items-center gap-6 ">
          <div className="w-full md:w-[45%] mb-6 md:mb-0">
             <h2 className="text-xl font-bold mb-2">Get involved in improving tech education in Africa!</h2>
             <button className="bg-blue-600 text-white px-4 py-2 rounded mt-2">Support Us</button>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
            <ul className="text-sm">
              <li><Link href="#" className="hover:text-blue-600">Home</Link></li>
              <li><Link href="#" className="hover:text-blue-600">About</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Programs</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Contact</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="text-lg font-semibold mb-2">Connect With Us</h2>
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
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} A2SV. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}