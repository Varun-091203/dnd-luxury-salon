import { motion } from "framer-motion";

const services = [
    {
        title: "Hair",
        description:
            "Precision styling and luxury treatments crafted to enhance your confidence and individuality.",
        items: [
            "Haircut & Styling",
            "Hair Spa & Nourishment",
            "Hair Coloring & Highlights",
            "Keratin & Smoothening",
            "Bridal & Occasion Styling"
        ]
    },
    {
        title: "Skin",
        description:
            "Advanced skin care treatments designed to rejuvenate, hydrate, and restore your natural glow.",
        items: [
            "Luxury Facials",
            "De-Tan Therapy",
            "Skin Polishing",
            "Acne & Pigmentation Care",
            "Anti-Aging Treatments"
        ]
    },
    {
        title: "Makeup",
        description:
            "Flawless makeup artistry for every special occasion, delivering elegance and sophistication.",
        items: [
            "Bridal Makeup",
            "Engagement & Reception Looks",
            "Party Makeup",
            "HD & Airbrush Makeup",
            "Photoshoot Glam"
        ]
    },
    {
        title: "Nails",
        description:
            "Premium nail artistry that combines creativity, precision, and long-lasting elegance.",
        items: [
            "Gel Nail Extensions",
            "Acrylic Nails",
            "Luxury Nail Art",
            "Manicure & Pedicure",
            "Cuticle & Nail Care"
        ]
    }
];

const Services = () => {
    return (
        <section id="services" className="bg-black py-28 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2
                        className="text-4xl md:text-5xl text-[#C6A75E] mb-6"
                        style={{ fontFamily: "Playfair Display, serif" }}
                    >
                        Our Luxury Services
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Experience premium beauty services delivered with precision,
                        passion, and attention to every luxurious detail.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 gap-16">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="border border-[#C6A75E]/20 rounded-3xl p-10 bg-[#0f0f0f] hover:border-[#C6A75E] transition duration-300"
                        >
                            <h3
                                className="text-3xl mb-4 text-[#C6A75E]"
                                style={{ fontFamily: "Playfair Display, serif" }}
                            >
                                {service.title}
                            </h3>

                            <p className="text-gray-400 mb-6">
                                {service.description}
                            </p>

                            <ul className="space-y-3 text-gray-300">
                                {service.items.map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-center gap-3 hover:text-[#C6A75E] transition"
                                    >
                                        <span className="w-2 h-2 bg-[#C6A75E] rounded-full"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Services;