import { motion } from "framer-motion";

const Testimonials = () => {
    return (
        <section id="testimonials" className="bg-black py-24 px-6 text-center">
            <h2
                className="text-4xl mb-16 text-[#C6A75E]"
                style={{ fontFamily: "Playfair Display, serif" }}
            >
                What Our Clients Say
            </h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-gray-300 text-lg"
            >
                "Absolutely the most premium salon experience I’ve ever had.
                From ambiance to service — pure luxury."
            </motion.div>
        </section>
    );
};

export default Testimonials;