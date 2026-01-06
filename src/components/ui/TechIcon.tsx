import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface TechIconProps {
  Icon: LucideIcon;
  name: string;
  color: string;
  onClick?: () => void;
  isSelected?: boolean;
}

const TechIcon = ({ Icon, name, color, onClick, isSelected }: TechIconProps) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative p-3 rounded-xl glass-card hover-lift cursor-pointer
        transition-all duration-300 group
        ${isSelected ? 'ring-2 ring-primary glow-effect' : ''}
      `}
      title={name}
    >
      <Icon 
        className="w-6 h-6 md:w-8 md:h-8 transition-colors duration-300"
        style={{ color }}
      />
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {name}
      </span>
    </motion.button>
  );
};

export default TechIcon;
