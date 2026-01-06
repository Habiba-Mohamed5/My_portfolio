import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Code2, Database, Brain, Shield, Palette, 
  Server, ChevronRight, Sparkles 
} from "lucide-react";

const skillCategories = [
  {
    id: "frontend",
    name: "Front-End Development",
    icon: Code2,
    color: "#61DAFB",
    skills: [
      { name: "React.js", level: "Advanced" },
      { name: "Angular", level: "Intermediate" },
      { name: "TypeScript", level: "Advanced" },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "HTML5 & CSS3", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
    ],
  },
  {
    id: "backend",
    name: "Back-End & APIs",
    icon: Server,
    color: "#512BD4",
    skills: [
      { name: ".NET / C#", level: "Intermediate" },
      { name: "Java", level: "Intermediate" },
      { name: "RESTful APIs", level: "Intermediate" },
      { name: "Node.js", level: "Learning" },
    ],
  },
  {
    id: "data",
    name: "Data & AI",
    icon: Brain,
    color: "#3776AB",
    skills: [
      { name: "Python", level: "Advanced" },
      { name: "SQL", level: "Advanced" },
      { name: "MATLAB", level: "Intermediate" },
      { name: "Data Analysis", level: "Intermediate" },
      { name: "Machine Learning", level: "Learning" },
    ],
  },
  {
    id: "database",
    name: "Databases",
    icon: Database,
    color: "#4479A1",
    skills: [
      { name: "MySQL", level: "Advanced" },
      { name: "SQL Server", level: "Intermediate" },
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "MongoDB", level: "Learning" },
    ],
  },
  {
    id: "design",
    name: "Design & UX",
    icon: Palette,
    color: "#FF6B6B",
    skills: [
      { name: "UI/UX Design", level: "Advanced" },
      { name: "Figma", level: "Intermediate" },
      { name: "Responsive Design", level: "Advanced" },
      { name: "Design Systems", level: "Intermediate" },
    ],
  },
  {
    id: "security",
    name: "Cybersecurity",
    icon: Shield,
    color: "#00D4AA",
    skills: [
      { name: "Ethical Hacking", level: "Learning" },
      { name: "Network Security", level: "Learning" },
      { name: "Security Best Practices", level: "Intermediate" },
    ],
  },
];

const levelColors: Record<string, string> = {
  "Advanced": "text-primary",
  "Intermediate": "text-accent",
  "Learning": "text-muted-foreground",
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedCategory, setExpandedCategory] = useState<string | null>("frontend");

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--gradient-glow)] opacity-20" />

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest mb-4">EXPERTISE</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit developed over years of learning and real-world application
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-4">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => setExpandedCategory(
                  expandedCategory === category.id ? null : category.id
                )}
                className={`
                  w-full p-6 rounded-2xl glass-card text-left transition-all duration-300
                  ${expandedCategory === category.id ? 'ring-2 ring-primary/50 glow-effect' : 'hover:ring-1 hover:ring-border'}
                `}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${category.color}20` }}
                    >
                      <category.icon className="w-6 h-6" style={{ color: category.color }} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{category.name}</h3>
                      <p className="text-sm text-muted-foreground">{category.skills.length} skills</p>
                    </div>
                  </div>
                  <ChevronRight 
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-300
                      ${expandedCategory === category.id ? 'rotate-90' : ''}`}
                  />
                </div>

                {/* Expanded Skills */}
                <motion.div
                  initial={false}
                  animate={{ 
                    height: expandedCategory === category.id ? "auto" : 0,
                    opacity: expandedCategory === category.id ? 1 : 0 
                  }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pt-6 mt-6 border-t border-border">
                    <div className="grid grid-cols-2 gap-3">
                      {category.skills.map((skill) => (
                        <div 
                          key={skill.name}
                          className="flex items-center justify-between p-3 rounded-lg bg-secondary/50"
                        >
                          <span className="text-sm font-medium text-foreground">{skill.name}</span>
                          <span className={`text-xs font-mono ${levelColors[skill.level]}`}>
                            {skill.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 p-8 rounded-2xl glass-card"
        >
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold text-foreground">Soft Skills & Leadership</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              "Team Leadership",
              "Project Management",
              "Public Speaking",
              "Problem Solving",
              "Technical Writing",
              "Cross-functional Collaboration",
              "Agile Methodologies",
              "Client Communication",
            ].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
