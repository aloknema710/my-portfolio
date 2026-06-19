import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar/>

      <section
        id="about"
        className="relative overflow-hidden py-24 px-6"
      >
        {/* Background Glow */}
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-6xl mt-5">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16 text-center"
          >
            <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
              About Me
            </span>

            <h2 className="mt-6 text-4xl font-bold text-white md:text-6xl">
              Building Digital Experiences
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">
              I'm a Full Stack Developer passionate about creating scalable web
              applications, interactive user experiences, and data-driven
              solutions. I enjoy turning complex problems into simple, elegant,
              and efficient products.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            <motion.div
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <h3 className="text-4xl font-bold text-cyan-400">20+</h3>
              <p className="mt-2 text-zinc-400">
                Projects Built
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <h3 className="text-4xl font-bold text-purple-400">10+</h3>
              <p className="mt-2 text-zinc-400">
                Technologies Used
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <h3 className="text-4xl font-bold text-pink-400">∞</h3>
              <p className="mt-2 text-zinc-400">
                Curiosity To Learn
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <h3 className="mb-4 text-2xl font-semibold text-white">
              What I'm Doing Now
            </h3>

            <ul className="space-y-3 text-zinc-400">
              <li>🚀 Building modern full-stack web applications</li>
              <li>🤖 Exploring AI integrations and automation</li>
              <li>📊 Working on data and business analytics projects</li>
              <li>📚 Continuously learning new technologies</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <Footer/>
    </>
  );
};

export default About;