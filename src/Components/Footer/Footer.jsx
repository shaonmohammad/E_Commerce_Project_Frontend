const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 text-white py-10">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                {/* Brand & Description */}
                <div>
                    <h2 className="text-3xl font-bold">Daily Shopping</h2>
                    <p className="mt-2 text-sm text-gray-200">
                        Elevate your shopping experience with the best products and exclusive deals.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-gray-300 transition">Home</a></li>
                        <li><a href="#" className="hover:text-gray-300 transition">Shop</a></li>
                        <li><a href="#" className="hover:text-gray-300 transition">About Us</a></li>
                        <li><a href="#" className="hover:text-gray-300 transition">Contact</a></li>
                    </ul>
                </div>

                {/* Social Media Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
                    <div className="flex justify-center md:justify-start gap-4 text-xl">
                        <a href="#" className="hover:text-gray-300 transition"><i className="fab fa-facebook"></i></a>
                        <a href="#" className="hover:text-gray-300 transition"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="hover:text-gray-300 transition"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="hover:text-gray-300 transition"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright Section */}
            <div className="mt-10 text-center text-gray-200 border-t border-gray-400 pt-4">
                <p>© {new Date().getFullYear()} Daily Shopping. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
