import { motion } from "framer-motion";

const Navbar = ({ openModal }) => {
    return (
        <motion.nav
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md"
        >
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1
                    className="text-xl md:text-2xl"
                    style={{ fontFamily: "Playfair Display, serif", color: "#C6A75E" }}
                >
                    DND
                </h1>

                <div className="hidden md:flex gap-8 text-gray-300">
                    <a href="#home" className="hover:text-[#C6A75E] transition">Home</a>
                    <a href="#services" className="hover:text-[#C6A75E] transition">Services</a>
                    <a href="#testimonials" className="hover:text-[#C6A75E] transition">Testimonials</a>
                    <a href="#contact" className="hover:text-[#C6A75E] transition">Contact</a>
                </div>

                <button
                    onClick={openModal}
                    className="hidden md:block px-4 py-2 border border-[#C6A75E] text-[#C6A75E] rounded-md hover:bg-[#C6A75E] hover:text-black transition"
                >
                    Book Now
                </button>
            </div>
        </motion.nav>
    );
};

export default Navbar;