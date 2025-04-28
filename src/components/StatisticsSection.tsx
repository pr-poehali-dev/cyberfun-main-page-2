
import { Users, Server, Award } from "lucide-react";

const StatItem = ({ icon, value, label }: { icon: React.ReactNode, value: string, label: string }) => (
  <div className="flex flex-col items-center">
    <div className="bg-cyber-darker p-3 rounded-sm border border-cyber-neon/30 mb-2">
      {icon}
    </div>
    <span className="text-2xl font-bold text-cyber-neon">{value}</span>
    <span className="text-sm text-muted-foreground">{label}</span>
  </div>
);

const StatisticsSection = () => {
  return (
    <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8">
      <StatItem 
        icon={<Users className="w-5 h-5 text-cyber-neon" />} 
        value="10,000+" 
        label="Игроков онлайн" 
      />
      
      <StatItem 
        icon={<Server className="w-5 h-5 text-cyber-pink" />} 
        value="120+" 
        label="Серверов" 
      />
      
      <StatItem 
        icon={<Award className="w-5 h-5 text-cyber-blue" />} 
        value="50K+" 
        label="Матчей в месяц" 
      />
    </div>
  );
};

export default StatisticsSection;
