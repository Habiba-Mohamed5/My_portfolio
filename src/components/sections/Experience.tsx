import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Briefcase, GraduationCap, Award, ChevronDown } from "lucide-react";

const experiences = [
  {
    id: 1,
    type: "leadership",
    title: "Team Leader - Digital Egypt Pioneers Initiative",
    organization: "Ministry of Communications and IT",
    period: "2023",
    description: "Led a team of developers in building innovative digital solutions. Recognized by the Minister of Communications for outstanding contribution.",
    highlights: [
      "Managed cross-functional team of 5 members",
      "Delivered project 2 weeks ahead of schedule",
      "Received ministerial recognition",
    ],
    icon: Award,
    color: "#00D4AA",
  },
  {
    id: 2,
    type: "work",
    title: "Freelance Web Developer",
    organization: "Upwork & Khamsat",
    period: "2022 - Present",
    description: "Providing front-end development and web design services to international and local clients.",
    highlights: [
      "15+ successful projects delivered",
      "4.9/5 average client rating",
      "Specialized in React and responsive design",
    ],
    icon: Briefcase,
    color: "#61DAFB",
  },
  {
    id: 3,
    type: "training",
    title: "IoT Development Training",
    organization: "Information Technology Institute (ITI)",
    period: "2024",
    description: "Intensive training program covering IoT fundamentals, sensor integration, and connected device development.",
    highlights: [
      "Hardware-software integration",
      "Real-time data processing",
      "Security best practices",
    ],
    icon: Briefcase,
    color: "#00C7B7",
  },
  {
    id: 4,
    type: "education",
    title: "B.Sc. Artificial Intelligence",
    organization: "Egyptian Russian University",
    period: "2023 - 2027 (Expected)",
    description: "Pursuing a degree in Artificial Intelligence with focus on machine learning, data science, and intelligent systems.",
    highlights: [
      "Dean's list recognition",
      "Active in research projects",
      "Member of AI student club",
    ],
    icon: GraduationCap,
    color: "#512BD4",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedId, setExpandedId] = useState<number | null>(1);

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute right-0 top-1/2 w-1/3 h-1/2 bg-[var(--gradient-glow)] opacity-20 -translate-y-1/2" />

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest mb-4">JOURNEY</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-20 pb-12 last:pb-0"
              >
                {/* Timeline Dot */}
                <div 
                  className="absolute left-4 top-0 w-8 h-8 rounded-full flex items-center justify-center ring-4 ring-background"
                  style={{ backgroundColor: exp.color }}
                >
                  <exp.icon className="w-4 h-4 text-white" />
                </div>

                {/* Content Card */}
                <div 
                  className={`
                    glass-card rounded-xl overflow-hidden cursor-pointer transition-all duration-300
                    ${expandedId === exp.id ? 'ring-1 ring-primary/30' : 'hover:ring-1 hover:ring-border'}
                  `}
                  onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <span className="text-xs font-mono text-primary">{exp.period}</span>
                        <h3 className="text-lg font-semibold text-foreground mt-1">{exp.title}</h3>
                        <p className="text-sm text-muted-foreground">{exp.organization}</p>
                      </div>
                      <ChevronDown 
                        className={`w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0
                          ${expandedId === exp.id ? 'rotate-180' : ''}`}
                      />
                    </div>

                    {/* Expanded Content */}
                    <motion.div
                      initial={false}
                      animate={{ 
                        height: expandedId === exp.id ? "auto" : 0,
                        opacity: expandedId === exp.id ? 1 : 0 
                      }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-border mt-4">
                        <p className="text-sm text-muted-foreground mb-4">{exp.description}</p>
                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm">
                              <span 
                                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style={{ backgroundColor: exp.color }}
                              />
                              <span className="text-foreground">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
