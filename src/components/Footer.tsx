import { Link } from 'react-router-dom';
import { Utensils, Clock, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-black">
      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-2xl font-bold tracking-tight">
              QuickBite
            </Link>
            <p className="mt-2 mb-8 text-sm">Delicious food, delivered fast.</p>
            <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-200">
                <Facebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-200">
                <Instagram size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-200">
                <Twitter size={24} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-200">
                <Youtube size={24} />
              </a>
          </div>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Help & Support</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="hover:text-orange-200">FAQ</Link></li>
              <li><Link to="/contact-us" className="hover:text-orange-200">Contact Us</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-orange-200">Terms of Service</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-orange-200">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center"><Phone size={18} className="mr-2" /> (555) 123-4567</li>
              <li className="flex items-center"><MapPin size={18} className="mr-2" /> 123 Foodie St, Tasty City</li>
              <li className="flex items-center"><Clock size={18} className="mr-2" /> Open: 10am - 10pm</li>
              <li className="flex items-center"><Utensils size={18} className="mr-2" /> service@quickbite.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-sm border-t border-orange-400 pt-4">
          <p>&copy; {new Date().getFullYear()} QuickBite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;