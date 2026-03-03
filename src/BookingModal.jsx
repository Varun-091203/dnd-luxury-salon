import { useState } from "react";
import { motion } from "framer-motion";

const BookingModal = ({ isOpen, close }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [service, setService] = useState("Hair");

    if (!isOpen) return null;

    const handleSubmit = () => {
        const message = `Hello DND Luxury Salon,%0A%0AI would like to book an appointment.%0A%0AName: ${name}%0APhone: ${phone}%0AService: ${service}`;
        window.open(`https://wa.me/919733434343?text=${message}`, "_blank");
    };

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-[#111] w-full max-w-md rounded-2xl p-8 border border-[#C6A75E]/20"
            >
                <h2
                    className="text-2xl mb-6 text-[#C6A75E]"
                    style={{ fontFamily: "Playfair Display, serif" }}
                >
                    Quick Appointment
                </h2>

                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full mb-4 p-3 bg-black border border-gray-700 text-white rounded-lg focus:border-[#C6A75E] outline-none"
                />

                <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full mb-4 p-3 bg-black border border-gray-700 text-white rounded-lg focus:border-[#C6A75E] outline-none"
                />

                <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full mb-6 p-3 bg-black border border-gray-700 text-white rounded-lg focus:border-[#C6A75E] outline-none"
                >
                    <option>Hair</option>
                    <option>Skin</option>
                    <option>Makeup</option>
                    <option>Nails</option>
                </select>

                <div className="flex justify-between gap-4">
                    <button
                        onClick={close}
                        className="w-full py-3 border border-gray-600 text-gray-400 rounded-lg"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleSubmit}
                        className="w-full py-3 bg-[#C6A75E] text-black font-semibold rounded-lg hover:scale-105 transition"
                    >
                        Book via WhatsApp
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default BookingModal;