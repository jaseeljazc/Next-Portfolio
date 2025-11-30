"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-linear-to-br from-violet-900/5 to-black"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-16">
            Get In <span className="text-purple-800">Touch</span>
          </h2>

          <div className="grid md:grid-cols gap-12 ">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-violet-500">
                Let's Connect
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting
                projects, or just having a chat about technology. Feel free to
                reach out!
              </p>

              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 text-gray-300"
                >
                  <div className="w-10 h-10 bg-violet-900/30 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p>jaseeljazck@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 text-gray-300"
                >
                  <div className="w-10 h-10 bg-violet-900/30 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p>+91 9745 7524 76</p>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 text-gray-300"
                >
                  <div className="w-10 h-10 bg-violet-900/30 rounded-lg flex items-center justify-center">
                    <SiWhatsapp className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Whatsapp</p>
                    <a href="https://wa.me/919745752476">
                      <p className=" hover:text-purple-500">Message Me</p>
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 text-gray-300"
                >
                  <div className="w-10 h-10 bg-violet-900/30 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p>Kochi, Kerala, India</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 text-gray-300 pt-3"
                >
                  <a href="/Muhammed-Jaseel-Resume.pdf" download className="btn">
                    <button className="border border-violet-600 px-4 py-3 rounded-2xl">Download Resume</button>
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
