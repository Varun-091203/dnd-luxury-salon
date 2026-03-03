import { motion } from "framer-motion";

const Contact = () => {
    return (
        <section id="contact" className="bg-[#0d0d0d] py-28 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2
                        className="text-4xl md:text-5xl text-[#C6A75E] mb-6"
                        style={{ fontFamily: "Playfair Display, serif" }}
                    >
                        Visit Our Salon
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Experience luxury in the heart of Kokapet, Hyderabad.
                        We welcome you to indulge in elegance and premium care.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Address & Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl text-[#C6A75E] mb-3">
                                Location
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                Shop No 2, Ground Floor,<br />
                                Sunshine KAY Golden Square,<br />
                                Opp. Rajapushpa Atria,<br />
                                Kokapet, Narsingi,<br />
                                Hyderabad, Telangana 500075
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl text-[#C6A75E] mb-3">
                                Contact
                            </h3>
                            <a
                                href="tel:09733434343"
                                className="text-gray-300 hover:text-[#C6A75E] transition text-lg"
                            >
                                📞 097334 34343
                            </a>
                        </div>
                    </motion.div>

                    {/* Google Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="rounded-3xl overflow-hidden border border-[#C6A75E]/20"
                    >
                        <iframe
                            title="DND Luxury Salon Location"
                            src="https://www.google.com/maps?q=Sunshine%20KAY%20Golden%20Square%20Kokapet%20Hyderabad&output=embed"
                            width="100%"
                            height="350"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default Contact;