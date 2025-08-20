import { motion } from "framer-motion";
import { Users, Target, Heart } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 pt-24 pb-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-extrabold mb-4">About Us</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We are a passionate team of developers and designers, dedicated to
            building modern, responsive, and user-friendly digital experiences.
            Our mission is to empower businesses with technology that drives
            growth and innovation.
          </p>
        </motion.div>

        {/* Who We Are Section */}
        <div className="mt-16 flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <img
              src="https://illustrations.popsy.co/white/teamwork.svg"
              alt="Teamwork Illustration"
              className="w-full max-w-md mx-auto drop-shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h3 className="text-2xl font-bold mb-4">Who We Are</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Founded in 2024, <span className="font-semibold">MySite</span> is a
              creative digital agency focused on crafting innovative solutions.
              We believe in blending technology with creativity to deliver
              powerful products that solve real-world problems. <br /> <br />
              Our team is composed of talented engineers, designers, and
              strategists who work collaboratively to bring ideas to life. We
              are more than just coders—we are problem solvers, dreamers, and
              builders.
            </p>
          </motion.div>
        </div>

        {/* Mission & Values */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">Our Values</h3>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <Target className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
                title: "Mission-Driven",
                desc: "We are driven by a strong mission to create meaningful digital solutions that make a difference.",
              },
              {
                icon: <Users className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
                title: "Collaboration",
                desc: "We value teamwork, open communication, and collaboration to deliver the best possible results.",
              },
              {
                icon: <Heart className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
                title: "Passion",
                desc: "Our work is fueled by passion, creativity, and a relentless pursuit of excellence.",
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow hover:scale-105 transition transform"
              >
                <div className="mb-4">{value.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">Meet Our Team</h3>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                name: "Arvind Meena",
                role: "Fullstack Developer",
                img: "https://randomuser.me/api/portraits/men/32.jpg",
              },
              {
                name: "Priya Sharma",
                role: "UI/UX Designer",
                img: "https://randomuser.me/api/portraits/women/44.jpg",
              },
              {
                name: "Rohit Kumar",
                role: "Frontend Engineer",
                img: "https://randomuser.me/api/portraits/men/75.jpg",
              },
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow text-center hover:shadow-lg transition"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-4 border-blue-500"
                />
                <h4 className="text-lg font-semibold">{member.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
