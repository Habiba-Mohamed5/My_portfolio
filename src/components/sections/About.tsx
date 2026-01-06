import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Code, GraduationCap } from "lucide-react";

const highlights = [
  {
    icon: Users,
    title: "Team Leader",
    description: "Led teams at Digital Egypt Pioneers Initiative, recognized by the Minister of Communications",
  },
  {
    icon: Award,
    title: "Certified Professional",
    description: "Multiple certifications from IBM, Microsoft, Alison, and Mahara Tech",
  },
  {
    icon: Code,
    title: "Full-Stack Capable",
    description: "Proficient in React, Angular, .NET, Python, and database management",
  },
  {
    icon: GraduationCap,
    title: "AI Student",
    description: "Faculty of Artificial Intelligence, Egyptian Russian University (Class of 2027)",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[var(--gradient-glow)] opacity-30" />

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest mb-4">ABOUT ME</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Passionate About <span className="gradient-text">Technology</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            I'm a driven developer and AI student with a passion for creating impactful digital solutions. 
            With experience spanning front-end development, data analysis, and team leadership, 
            I bring a unique blend of technical expertise and soft skills to every project.
          </p>
        </motion.div>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="glass-card p-6 rounded-2xl hover-lift group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "4+", label: "Years Experience" },
            { value: "20+", label: "Projects Completed" },
            { value: "15+", label: "Certifications" },
            { value: "100%", label: "Commitment" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <motion.p
                className="text-4xl md:text-5xl font-bold gradient-text mb-2"
                initial={{ scale: 0.5 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                {stat.value}
              </motion.p>
              <p className="text-sm text-muted-foreground font-mono">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
