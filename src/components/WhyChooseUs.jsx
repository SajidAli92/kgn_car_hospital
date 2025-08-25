import React from "react";
import "./WhyChooseUs.css";
import { motion } from "framer-motion";

const features = [
  { id: 1, icon: "🔧", title: "Quality Service", desc: "Certified technicians ensuring top-quality service with care and precision." },
  { id: 2, icon: "⚙️", title: "Genuine Parts", desc: "We use high-quality, original parts for maximum performance and durability." },
  { id: 3, icon: "📢", title: "Transparency", desc: "Clear pricing, detailed reports, and regular updates for your peace of mind." },
  { id: 4, icon: "🚗", title: "Convenience", desc: "One-stop trusted solution for all your car service and repair needs." },
  { id: 5, icon: "👨‍🔧", title: "Expertise", desc: "Our skilled team handles any make or model with exceptional care." },
  { id: 6, icon: "💰", title: "Affordable", desc: "Competitive prices and discounts without compromising on quality." },
  { id: 7, icon: "⏱️", title: "Fast Turnaround", desc: "Quick and efficient service so you can get back on the road faster." },
  { id: 8, icon: "🏆", title: "Customer Satisfaction", desc: "Thousands of happy customers trust us for reliable service every time." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const WhyChooseUs = () => {
  return (
    <section className="wc-container">
      <motion.h2
        className="wc-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Why <span>Choose Us?</span>
      </motion.h2>

      <motion.div
        className="wc-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {features.map((feature) => (
          <motion.div
            className="wc-card"
            key={feature.id}
            variants={cardVariants}
            whileHover={{ scale: 1.07, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="wc-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
