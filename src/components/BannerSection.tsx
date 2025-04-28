
import { Button } from "@/components/ui/button";
import { Gamepad2, Zap, Trophy } from "lucide-react";

const BannerSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <BannerCard 
        title="Турнир CS2"
        description="Выиграй 100,000₽ в ежемесячном турнире"
        icon={<Trophy className="h-5 w-5 text-cyber-pink" />}
        color="pink"
      />
      
      <BannerCard 
        title="Премиум-доступ"
        description="Получи VIP статус на всех серверах"
        icon={<Zap className="h-5 w-5 text-cyber-neon" />}
        color="neon"
      />
      
      <BannerCard 
        title="Новые режимы"
        description="Играй на серверах с уникальными режимами"
        icon={<Gamepad2 className="h-5 w-5 text-cyber-blue" />}
        color="blue"
      />
    </div>
  );
};

interface BannerCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: 'pink' | 'neon' | 'blue';
}

const BannerCard = ({ title, description, icon, color }: BannerCardProps) => {
  const colorClasses = {
    pink: 'border-cyber-pink/50 hover:border-cyber-pink',
    neon: 'border-cyber-neon/50 hover:border-cyber-neon',
    blue: 'border-cyber-blue/50 hover:border-cyber-blue'
  };
  
  return (
    <div className={`relative p-4 border ${colorClasses[color]} bg-cyber-darker transition-colors duration-300 group overflow-hidden`}
         style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%)' }}>
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br opacity-10
                     from-transparent via-cyber-neon to-transparent -translate-x-8 -translate-y-8
                     group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
      
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-2 mb-2">
          {icon}
          <h3 className="font-bold text-lg">{title}</h3>
        </div>
        
        <p className="text-sm text-muted-foreground mb-3">{description}</p>
        
        <Button variant="outline" className="mt-auto cyber-button self-start">
          Подробнее
        </Button>
      </div>
    </div>
  );
};

export default BannerSection;
