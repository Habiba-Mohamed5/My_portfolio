import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Award, ExternalLink, Calendar, Building2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const certifications = [
  {
    id: 1,
    title: "IBM Data Science Professional Certificate",
    issuer: "IBM",
    year: "2024",
    category: "Data & AI",
    verificationUrl: "#",
    color: "#052FAD",
  },
  {
    id: 2,
    title: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    year: "2024",
    category: "Technical",
    verificationUrl: "#",
    color: "#00A4EF",
  },
  {
    id: 3,
    title: "Front-End Web Development",
    issuer: "Mahara Tech",
    year: "2023",
    category: "Technical",
    verificationUrl: "#",
    color: "#FF6B6B",
  },
  {
    id: 4,
    title: "Python for Data Analysis",
    issuer: "Alison",
    year: "2023",
    category: "Data & AI",
    verificationUrl: "#",
    color: "#3776AB",
  },
  {
    id: 5,
    title: "Digital Egypt Pioneers Initiative - Team Leader",
    issuer: "Ministry of Communications",
    year: "2023",
    category: "Leadership",
    verificationUrl: "#",
    color: "#00D4AA",
  },
  {
    id: 6,
    title: "Cybersecurity Essentials",
    issuer: "Cisco",
    year: "2024",
    category: "Cybersecurity",
    verificationUrl: "#",
    color: "#1BA0D7",
  },
  {
    id: 7,
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    year: "2023",
    category: "Technical",
    verificationUrl: "#",
    color: "#F7DF1E",
  },
  {
    id: 8,
    title: "IoT Fundamentals",
    issuer: "ITI",
    year: "2024",
    category: "Technical",
    verificationUrl: "#",
    color: "#00C7B7",
  },
];

const categories = ["All", "Technical", "Data & AI", "Cybersecurity", "Leadership"];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);

  const filteredCerts = selectedCategory === "All"
    ? certifications
    : certifications.filter(c => c.category === selectedCategory);

  return (
    <section id="certifications" className="section-padding relative overflow-hidden bg-secondary/30">
      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest mb-4">CREDENTIALS</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Continuous learning validated by industry leaders
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
                    : 'bg-card text-card-foreground hover:bg-card/80'}
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredCerts.map((cert, index) => (
            <motion.div
              key={cert.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => setSelectedCert(cert)}
              className="glass-card p-5 rounded-xl cursor-pointer hover-lift group"
              style={{
                borderTop: `3px solid ${cert.color}`,
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${cert.color}20` }}
                >
                  <Award className="w-5 h-5" style={{ color: cert.color }} />
                </div>
                <span className="text-xs font-mono text-muted-foreground">{cert.year}</span>
              </div>
              
              <h3 className="text-sm font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Building2 className="w-3 h-3" />
                {cert.issuer}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
        <DialogContent className="glass-card border-border">
          <DialogHeader>
            <div 
              className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
              style={{ backgroundColor: `${selectedCert?.color}20` }}
            >
              <Award className="w-7 h-7" style={{ color: selectedCert?.color }} />
            </div>
            <DialogTitle className="text-xl">{selectedCert?.title}</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4 mt-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Building2 className="w-4 h-4" />
              <span>{selectedCert?.issuer}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>Issued {selectedCert?.year}</span>
            </div>
            <span 
              className="inline-block px-3 py-1 rounded-full text-sm"
              style={{ 
                backgroundColor: `${selectedCert?.color}20`,
                color: selectedCert?.color 
              }}
            >
              {selectedCert?.category}
            </span>
            
            {selectedCert?.verificationUrl && (
              <a 
                href={selectedCert.verificationUrl}
                className="flex items-center gap-2 text-primary hover:underline text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                Verify Certificate
              </a>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Certifications;
