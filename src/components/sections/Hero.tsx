import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { 
  Code2, Database, Globe, Cpu, Terminal, 
  Laptop, BrainCircuit, Shield, Server, Layers 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Download, Linkedin, Github } from "lucide-react";

const technologies = [
  { name: "React", Icon: Code2, color: "#61DAFB", experience: "3+ years", description: "Building dynamic SPAs and component libraries" },
  { name: "Angular", Icon: Layers, color: "#DD0031", experience: "2+ years", description: "Enterprise-scale applications" },
  { name: "JavaScript", Icon: Terminal, color: "#F7DF1E", experience: "4+ years", description: "ES6+, async patterns, DOM manipulation" },
  { name: "TypeScript", Icon: Code2, color: "#3178C6", experience: "2+ years", description: "Type-safe development at scale" },
  { name: "Python", Icon: BrainCircuit, color: "#3776AB", experience: "3+ years", description: "Data analysis, ML, automation" },
  { name: "Java", Icon: Cpu, color: "#ED8B00", experience: "2+ years", description: "OOP, Spring framework basics" },
  { name: "SQL", Icon: Database, color: "#4479A1", experience: "3+ years", description: "Complex queries, optimization" },
  { name: ".NET", Icon: Server, color: "#512BD4", experience: "2+ years", description: "Backend APIs, C# development" },
  { name: "Cybersecurity", Icon: Shield, color: "#00D4AA", experience: "Learning", description: "Ethical hacking fundamentals" },
  { name: "Web Design", Icon: Globe, color: "#FF6B6B", experience: "4+ years", description: "UI/UX, responsive layouts" },
  { name: "IoT", Icon: Laptop, color: "#00C7B7", experience: "Training", description: "ITI training program" },
  { name: "MATLAB", Icon: Cpu, color: "#FF8C00", experience: "2+ years", description: "Mathematical computing" },
];

const Hero = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedTech, setSelectedTech] = useState<typeof technologies[0] | null>(null);
  const rotation = useMotionValue(0);

  useEffect(() => {
    if (isPaused) return;
    
    const currentRotation = rotation.get();
    const controls = animate(rotation, currentRotation + 360, {
      duration: 40,
      repeat: Infinity,
      ease: "linear",
    });

    return () => controls.stop();
  }, [isPaused, rotation]);

  const handleTechClick = (tech: typeof technologies[0]) => {
    setIsPaused(true);
    setSelectedTech(tech);
  };

  const handleCloseModal = () => {
    setSelectedTech(null);
    setIsPaused(false);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      <div className="absolute inset-0 bg-[var(--gradient-glow)] opacity-50" />
      
      {/* Animated grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Orbit System */}
          <div 
            className="relative w-80 h-80 md:w-[420px] md:h-[420px] mb-12"
            onMouseEnter={() => !selectedTech && setIsPaused(true)}
            onMouseLeave={() => !selectedTech && setIsPaused(false)}
          >
            {/* Profile Photo */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 m-auto w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden ring-4 ring-primary/30 glow-effect z-20"
            >
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <span className="text-4xl md:text-5xl font-bold gradient-text">HM</span>
              </div>
            </motion.div>

            {/* Orbit Ring */}
            <motion.div
              className="absolute inset-0 rounded-full border border-primary/20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />

            {/* Orbiting Icons */}
            <motion.div
              className="absolute inset-0"
              style={{ rotate: rotation }}
            >
              {technologies.map((tech, index) => {
                const angle = (index / technologies.length) * 360;
                const radiusMd = 160; // Larger radius for md screens
                const radiusSm = 120; // Smaller radius for mobile
                const x = Math.cos((angle * Math.PI) / 180) * radiusMd;
                const y = Math.sin((angle * Math.PI) / 180) * radiusMd;

                return (
                  <motion.button
                    key={tech.name}
                    onClick={() => handleTechClick(tech)}
                    className={`
                      absolute p-2.5 md:p-3 rounded-xl glass-card cursor-pointer
                      transition-all duration-300 hover:scale-110 hover:glow-effect
                      ${selectedTech?.name === tech.name ? 'ring-2 ring-primary glow-effect' : ''}
                    `}
                    style={{
                      left: `calc(50% + ${x}px - 20px)`,
                      top: `calc(50% + ${y}px - 20px)`,
                      rotate: -rotation.get(),
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.05, duration: 0.4 }}
                    whileHover={{ scale: 1.2 }}
                    title={tech.name}
                  >
                    <tech.Icon className="w-5 h-5 md:w-6 md:h-6" style={{ color: tech.color }} />
                  </motion.button>
                );
              })}
            </motion.div>
          </div>

          {/* Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="space-y-6"
          >
            <motion.p 
              className="text-primary font-mono text-sm md:text-base tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              FRONT-END DEVELOPER • WEB DESIGNER • DATA ANALYST
            </motion.p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block text-foreground">Hi, I'm</span>
              <span className="block gradient-text">Habiba Mohamed</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              AI student with <span className="text-primary font-semibold">4+ years</span> of experience 
              crafting elegant digital experiences. Team leader, certified professional, 
              and passionate about turning complex problems into simple solutions.
            </p>

            <motion.div 
              className="flex flex-wrap justify-center gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <Button size="lg" className="gap-2 glow-effect">
                <Download className="w-4 h-4" />
                Download CV
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Button>
              <Button size="lg" variant="ghost" className="gap-2">
                <Github className="w-4 h-4" />
                GitHub
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2 text-muted-foreground"
            >
              <span className="text-xs font-mono tracking-widest">SCROLL</span>
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Tech Modal */}
      {selectedTech && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
          onClick={handleCloseModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="glass-card p-8 rounded-2xl max-w-md w-full glow-effect"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-xl bg-secondary">
                <selectedTech.Icon className="w-10 h-10" style={{ color: selectedTech.color }} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">{selectedTech.name}</h3>
                <p className="text-primary font-mono text-sm">{selectedTech.experience}</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">{selectedTech.description}</p>
            <Button 
              className="w-full mt-6" 
              variant="outline"
              onClick={handleCloseModal}
            >
              Close
            </Button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
