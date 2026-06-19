import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaGithub,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
} from "react-icons/si";

const stacks = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    title: "AI & ML",
    skills: [
      { name: "Python" },
      { name: "TensorFlow" },
      { name: "PyTorch" },
      { name: "OpenAI API" },
      { name: "LangChain" },
      { name: "RAG" },
    ],
  },
  {
    title: "Data Analytics",
    skills: [
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "Power BI" },
      { name: "Tableau" },
      { name: "SQL" },
      { name: "Excel" },
    ],
  },
  {
    title: "Business Analytics",
    skills: [
      { name: "Market Research" },
      { name: "KPI Tracking" },
      { name: "Forecasting" },
      { name: "Stakeholder Analysis" },
      { name: "Data Storytelling" },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Docker", icon: FaDocker },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background Glow */}
      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[140px]" />
      <div className="absolute right-20 bottom-20 h-72 w-72 rounded-full bg-violet-500/20 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            My Arsenal
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white md:text-7xl">
            Tech Stack
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-zinc-400">
            Technologies I use to design, build and scale modern web
            applications.
          </p>
        </motion.div>

        <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides
            loop
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
                768: {
                slidesPerView: 2,
                },
                1280: {
                slidesPerView: 3,
                },
            }}
            >
            {stacks.map((group, groupIndex) => (
                <SwiperSlide key={group.title}>
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                    duration: 0.6,
                    delay: groupIndex * 0.1,
                    }}
                    whileHover={{
                    y: -15,
                    scale: 1.03,
                    }}
                    className="group h-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
                >
                    <div className="relative p-8">
                    <h3 className="mb-8 text-2xl font-semibold text-white">
                        {group.title}
                    </h3>

                    <div className="flex flex-wrap gap-3">
                        {group.skills.map((skill) => {
                        const Icon = skill.icon;

                        return (
                            <div
                            key={skill.name}
                            className="flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-900/60 px-4 py-2 hover:border-cyan-400/40"
                            >
                            {Icon && (
                                <Icon className="text-cyan-400" />
                            )}

                            <span className="text-zinc-300">
                                {skill.name}
                            </span>
                            </div>
                        );
                        })}
                    </div>
                    </div>
                </motion.div>
                </SwiperSlide>
            ))}
            </Swiper>

        {/* <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {stacks.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: groupIndex * 0.15,
              }}
              whileHover={{
                y: -10,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              {/* Animated Gradient }
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -left-20 top-0 h-60 w-60 rounded-full bg-cyan-500/20 blur-[90px]" />
                <div className="absolute -right-20 bottom-0 h-60 w-60 rounded-full bg-purple-500/20 blur-[90px]" />
              </div>

              <div className="relative z-10 p-8">
                <h3 className="mb-8 text-2xl font-semibold text-white">
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-4">
                  {group.skills.map((skill, index) => {
                    const Icon = skill.icon;

                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                        }}
                        transition={{
                          delay: index * 0.05,
                        }}
                        whileHover={{
                          scale: 1.08,
                          rotate: 3,
                        }}
                        className="group/item flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-900/60 px-4 py-3 transition-all duration-300 hover:border-cyan-400/50 hover:bg-zinc-800"
                      >
                        <Icon className="text-xl text-cyan-400 transition-transform duration-300 group-hover/item:rotate-12" />

                        <span className="text-sm font-medium text-zinc-200">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div> */}
      </div>
    </section>
  );
}