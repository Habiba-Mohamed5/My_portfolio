import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Folder, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Full-Stack",
    description: "A complete e-commerce solution with React frontend and .NET backend, featuring real-time inventory management and secure payment processing.",
    fullDescription: "Built a comprehensive e-commerce platform from scratch, implementing user authentication, product catalog, shopping cart, and order management. Integrated with payment gateways and designed a responsive, mobile-first interface.",
    technologies: ["React", "TypeScript", ".NET", "SQL Server", "Tailwind CSS"],
    image: "bg-gradient-to-br from-primary/20 to-accent/20",
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Data Analytics Dashboard",
    category: "Data Analysis",
    description: "Interactive dashboard for visualizing complex datasets with Python and modern charting libraries.",
    fullDescription: "Developed a powerful analytics dashboard that processes large datasets and presents insights through interactive visualizations. Features include real-time data updates, custom filters, and exportable reports.",
    technologies: ["Python", "Pandas", "React", "Chart.js", "PostgreSQL"],
    image: "bg-gradient-to-br from-accent/20 to-primary/20",
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Portfolio Management System",
    category: "Web Application",
    description: "A modern portfolio tracking system for managing investments and analyzing performance metrics.",
    fullDescription: "Created a sophisticated portfolio management application that helps users track their investments, analyze performance over time, and make data-driven decisions. Includes real-time market data integration.",
    technologies: ["Angular", "Java", "MySQL", "Bootstrap"],
    image: "bg-gradient-to-br from-purple-500/20 to-primary/20",
    github: "#",
    live: null,
    featured: false,
  },
  {
    id: 4,
    title: "IoT Monitoring System",
    category: "IoT",
    description: "Real-time monitoring system for IoT devices built during ITI training program.",
    fullDescription: "Developed as part of the ITI IoT training program, this system monitors connected devices, collects sensor data, and provides alerts based on configurable thresholds.",
    technologies: ["Python", "MQTT", "React", "Node.js"],
    image: "bg-gradient-to-br from-green-500/20 to-accent/20",
    github: "#",
    live: null,
    featured: false,
  },
  {
    id: 5,
    title: "Task Management App",
    category: "Web Application",
    description: "Collaborative task management application with real-time updates and team features.",
    fullDescription: "A feature-rich task management solution supporting team collaboration, project tracking, and productivity analytics. Includes drag-and-drop interfaces and notification systems.",
    technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    image: "bg-gradient-to-br from-orange-500/20 to-primary/20",
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: 6,
    title: "Machine Learning Models",
    category: "AI/ML",
    description: "Collection of ML models for various classification and prediction tasks.",
    fullDescription: "Academic and personal projects exploring machine learning concepts including classification, regression, and neural networks. Implemented using Python and popular ML libraries.",
    technologies: ["Python", "TensorFlow", "Scikit-learn", "MATLAB"],
    image: "bg-gradient-to-br from-primary/20 to-pink-500/20",
    github: "#",
    live: null,
    featured: false,
  },
];

const categories = ["All", "Full-Stack", "Web Application", "Data Analysis", "IoT", "AI/ML"];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-1/2 h-1/2 bg-[var(--gradient-glow)] opacity-20 -translate-y-1/2" />

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest mb-4">PORTFOLIO</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            A showcase of my work spanning web development, data analysis, and more
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${selectedCategory === category 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`
                glass-card rounded-2xl overflow-hidden group cursor-pointer hover-lift
                ${project.featured ? 'ring-1 ring-primary/30' : ''}
              `}
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className={`h-48 ${project.image} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Folder className="w-16 h-16 text-foreground/20" />
                </div>
                {project.featured && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                    Featured
                  </span>
                )}
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.github && (
                    <a 
                      href={project.github} 
                      className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-5 h-5 text-foreground" />
                    </a>
                  )}
                  {project.live && (
                    <a 
                      href={project.live} 
                      className="p-3 rounded-full bg-primary hover:bg-primary/80 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-5 h-5 text-primary-foreground" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <p className="text-primary font-mono text-xs mb-2">{project.category}</p>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 text-xs font-mono bg-secondary rounded text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs font-mono text-muted-foreground">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="gap-2">
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="glass-card border-border max-w-2xl">
          <DialogHeader>
            <p className="text-primary font-mono text-xs mb-1">{selectedProject?.category}</p>
            <DialogTitle className="text-2xl">{selectedProject?.title}</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {selectedProject?.fullDescription}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 mt-4">
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject?.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1.5 text-sm font-mono bg-secondary rounded-lg text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex gap-3">
              {selectedProject?.github && (
                <Button variant="outline" className="gap-2" asChild>
                  <a href={selectedProject.github}>
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                </Button>
              )}
              {selectedProject?.live && (
                <Button className="gap-2" asChild>
                  <a href={selectedProject.live}>
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
