import { motion } from "framer-motion";

const Hero = ({ openModal }) => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center text-center px-6 pt-24 overflow-hidden bg-black"
        >
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=2070')] bg-cover bg-center opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />

            {/* Soft Gold Glow */}
            <div className="absolute w-[600px] h-[600px] bg-[#C6A75E] opacity-10 blur-3xl rounded-full top-[-200px] left-[-200px]" />
            <div className="absolute w-[500px] h-[500px] bg-[#C6A75E] opacity-10 blur-3xl rounded-full bottom-[-200px] right-[-200px]" />

            <div className="relative z-10 max-w-3xl">

                {/* Luxury Divider */}
                <div className="w-24 h-[2px] bg-[#C6A75E] mx-auto mb-8 opacity-60"></div>

                {/* Gradient Animated Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-5xl md:text-7xl font-semibold mb-6 bg-gradient-to-r from-[#C6A75E] via-[#f5e6b8] to-[#C6A75E] bg-clip-text text-transparent"
                    style={{ fontFamily: "Playfair Display, serif" }}
                >
                    DND Luxury Salon
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-gray-300 text-lg md:text-xl mb-12 tracking-wide"
                >
                    Where every detail whispers luxury.
                </motion.p>

                <motion.button
                    onClick={openModal}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative px-10 py-4 bg-[#C6A75E] text-black font-semibold rounded-full transition duration-300 overflow-hidden"
                >
                    <span className="relative z-10">Book Appointment</span>

                    {/* Hover Glow */}
                    <span className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition duration-300"></span>
                </motion.button>

            </div>
        </section>
    );
};

export default Hero;